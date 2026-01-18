import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Banner from './Banner.svelte'

// Mock localStorage
const localStorageMock = (() => {
    let store: Record<string, string> = {}
    return {
        getItem: vi.fn((key: string) => store[key] || null),
        setItem: vi.fn((key: string, value: string) => {
            store[key] = value
        }),
        removeItem: vi.fn((key: string) => {
            delete store[key]
        }),
        clear: vi.fn(() => {
            store = {}
        })
    }
})()

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
})

// Helper to wait for SVG to render (Iconify loads icons async)
async function waitForSvg(container: Element): Promise<SVGElement | null> {
    for (let i = 0; i < 20; i++) {
        const svg = container.querySelector('svg')
        if (svg) return svg
        await new Promise((r) => setTimeout(r, 50))
    }
    return null
}

describe('Banner', () => {
    beforeEach(() => {
        localStorageMock.clear()
        vi.clearAllMocks()
    })

    describe('rendering', () => {
        it('should render a div element by default', async () => {
            const { container } = render(Banner, { title: 'Banner' })

            const div = container.querySelector('div')
            expect(div).not.toBeNull()
        })

        it('should render as anchor when href prop is provided', async () => {
            const { container } = render(Banner, { title: 'Banner', href: '/page' })

            const anchor = container.querySelector('a')
            expect(anchor).not.toBeNull()
            expect(anchor?.getAttribute('href')).toContain('/page')
        })

        it('should render title text', async () => {
            const { container } = render(Banner, { title: 'Important Notice' })

            expect(container.textContent).toContain('Important Notice')
        })

        it('should have role="banner" attribute when not a link', async () => {
            const { container } = render(Banner, { title: 'Banner' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner).not.toBeNull()
        })

        it('should apply custom class', async () => {
            const { container } = render(Banner, { title: 'Test', class: 'my-custom-class' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('my-custom-class')).toBe(true)
        })
    })

    describe('colors', () => {
        it('should render primary color by default', async () => {
            const { container } = render(Banner, { title: 'Primary' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('bg-primary')).toBe(true)
        })

        it('should render secondary color', async () => {
            const { container } = render(Banner, { title: 'Secondary', color: 'secondary' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('bg-secondary')).toBe(true)
        })

        it('should render success color', async () => {
            const { container } = render(Banner, { title: 'Success', color: 'success' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('bg-success')).toBe(true)
        })

        it('should render warning color', async () => {
            const { container } = render(Banner, { title: 'Warning', color: 'warning' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('bg-warning')).toBe(true)
        })

        it('should render error color', async () => {
            const { container } = render(Banner, { title: 'Error', color: 'error' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('bg-error')).toBe(true)
        })

        it('should render info color', async () => {
            const { container } = render(Banner, { title: 'Info', color: 'info' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('bg-info')).toBe(true)
        })

        it('should render neutral color', async () => {
            const { container } = render(Banner, { title: 'Neutral', color: 'neutral' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('bg-neutral-900')).toBe(true)
        })
    })

    describe('icon prop', () => {
        it('should render icon when provided', async () => {
            const { container } = render(Banner, { title: 'With Icon', icon: 'lucide:megaphone' })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
        })
    })

    describe('close button', () => {
        it('should render close button when close is true', async () => {
            const { container } = render(Banner, { title: 'Closeable', close: true })

            const button = container.querySelector('button')
            expect(button).not.toBeNull()
            expect(button?.getAttribute('aria-label')).toBe('Close banner')
        })

        it('should not render close button when close is false', async () => {
            const { container } = render(Banner, { title: 'Not Closeable', close: false })

            const button = container.querySelector('button')
            expect(button).toBeNull()
        })

        it('should call onClose when close button is clicked', async () => {
            const onClose = vi.fn()
            const { container } = render(Banner, { title: 'Closeable', close: true, onClose })

            const button = container.querySelector('button')
            button?.click()

            expect(onClose).toHaveBeenCalledOnce()
        })

        it('should hide banner content after close button is clicked', async () => {
            const { container } = render(Banner, { title: 'Closeable', close: true })

            const button = container.querySelector('button')
            button?.click()

            // Wait for state update
            await new Promise((r) => setTimeout(r, 50))

            // The banner content should be hidden (no anchor or container inside)
            const banner = container.querySelector('[role="banner"]')
            expect(banner?.querySelector('.flex')).toBeNull()
            expect(container.textContent).not.toContain('Closeable')
        })

        it('should persist dismissal in localStorage when id is provided', async () => {
            const { container } = render(Banner, { title: 'Closeable', close: true, id: 'test-banner' })

            const button = container.querySelector('button')
            button?.click()

            expect(localStorageMock.setItem).toHaveBeenCalledWith('banner-test-banner', 'dismissed')
        })
    })

    describe('actions', () => {
        it('should render action buttons', async () => {
            const { container } = render(Banner, {
                title: 'With Actions',
                actions: [{ label: 'Learn more' }, { label: 'Dismiss' }]
            })

            expect(container.textContent).toContain('Learn more')
            expect(container.textContent).toContain('Dismiss')
        })

        it('should not render actions container when actions is empty', async () => {
            const { container } = render(Banner, { title: 'No Actions', actions: [] })

            const buttons = container.querySelectorAll('button')
            expect(buttons.length).toBe(0)
        })
    })

    describe('link behavior', () => {
        it('should render with target attribute when provided', async () => {
            const { container } = render(Banner, {
                props: {
                    title: 'External Link',
                    href: 'https://example.com',
                    target: '_blank'
                }
            })

            const anchor = container.querySelector('a')
            expect(anchor?.getAttribute('target')).toBe('_blank')
        })

        it('should have hover styles when href is provided', async () => {
            const { container } = render(Banner, { title: 'Clickable', href: '/page', color: 'primary' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('cursor-pointer')).toBe(true)
        })
    })

    describe('ui customization', () => {
        it('should apply custom root styles via ui prop', async () => {
            const { container } = render(Banner, { title: 'Custom', ui: { root: 'custom-root-class' } })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('custom-root-class')).toBe(true)
        })

        it('should apply custom title styles via ui prop', async () => {
            const { container } = render(Banner, {
                title: 'Custom Title',
                ui: { title: 'custom-title-class' }
            })

            const title = container.querySelector('.custom-title-class')
            expect(title).not.toBeNull()
            expect(title?.textContent).toBe('Custom Title')
        })
    })

    describe('base styles', () => {
        it('should have relative positioning', async () => {
            const { container } = render(Banner, { title: 'Relative' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('relative')).toBe(true)
        })

        it('should have full width', async () => {
            const { container } = render(Banner, { title: 'Full Width' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('w-full')).toBe(true)
        })

        it('should have z-50', async () => {
            const { container } = render(Banner, { title: 'Z-Index' })

            const banner = container.querySelector('[role="banner"]')
            expect(banner?.classList.contains('z-50')).toBe(true)
        })
    })
})
