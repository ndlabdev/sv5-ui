import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Badge from './Badge.svelte'

// Helper to wait for SVG to render (Iconify loads icons async)
async function waitForSvg(container: Element): Promise<SVGElement | null> {
    for (let i = 0; i < 20; i++) {
        const svg = container.querySelector('svg')
        if (svg) return svg
        await new Promise((r) => setTimeout(r, 50))
    }
    return null
}

describe('Badge', () => {
    describe('rendering', () => {
        it('should render a span element by default', async () => {
            const { container } = render(Badge, { props: { label: 'Badge' } })

            const span = container.querySelector('span')
            expect(span).not.toBeNull()
        })

        it('should render with custom element via as prop', async () => {
            const { container } = render(Badge, { props: { label: 'Badge', as: 'div' } })

            const div = container.querySelector('div')
            expect(div).not.toBeNull()
        })

        it('should render label text', async () => {
            const { container } = render(Badge, { props: { label: 'New' } })

            expect(container.textContent).toContain('New')
        })

        it('should render number label', async () => {
            const { container } = render(Badge, { props: { label: 42 } })

            expect(container.textContent).toContain('42')
        })

        it('should apply custom class', async () => {
            const { container } = render(Badge, {
                props: { label: 'Test', class: 'my-custom-class' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('my-custom-class')).toBe(true)
        })
    })

    describe('variants', () => {
        it('should render solid variant by default', async () => {
            const { container } = render(Badge, { props: { label: 'Solid' } })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('bg-primary')).toBe(true)
        })

        it('should render outline variant', async () => {
            const { container } = render(Badge, {
                props: { label: 'Outline', variant: 'outline' }
            })

            const badge = container.querySelector('span')
            expect(badge?.className).toContain('ring-1')
            expect(badge?.className).toContain('ring-primary/50')
        })

        it('should render soft variant', async () => {
            const { container } = render(Badge, {
                props: { label: 'Soft', variant: 'soft' }
            })

            const badge = container.querySelector('span')
            expect(badge?.className).toContain('bg-primary/15')
        })

        it('should render subtle variant', async () => {
            const { container } = render(Badge, {
                props: { label: 'Subtle', variant: 'subtle' }
            })

            const badge = container.querySelector('span')
            expect(badge?.className).toContain('ring-1')
            expect(badge?.className).toContain('bg-primary/10')
        })
    })

    describe('colors', () => {
        it('should render primary color by default', async () => {
            const { container } = render(Badge, { props: { label: 'Primary' } })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('bg-primary')).toBe(true)
        })

        it('should render secondary color', async () => {
            const { container } = render(Badge, {
                props: { label: 'Secondary', color: 'secondary' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('bg-secondary')).toBe(true)
        })

        it('should render success color', async () => {
            const { container } = render(Badge, {
                props: { label: 'Success', color: 'success' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('bg-success')).toBe(true)
        })

        it('should render warning color', async () => {
            const { container } = render(Badge, {
                props: { label: 'Warning', color: 'warning' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('bg-warning')).toBe(true)
        })

        it('should render error color', async () => {
            const { container } = render(Badge, {
                props: { label: 'Error', color: 'error' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('bg-error')).toBe(true)
        })

        it('should render info color', async () => {
            const { container } = render(Badge, {
                props: { label: 'Info', color: 'info' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('bg-info')).toBe(true)
        })

        it('should render neutral color', async () => {
            const { container } = render(Badge, {
                props: { label: 'Neutral', color: 'neutral' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('bg-neutral-900')).toBe(true)
        })
    })

    describe('sizes', () => {
        it('should render md size by default', async () => {
            const { container } = render(Badge, { props: { label: 'Medium' } })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('px-2.5')).toBe(true)
            expect(badge?.classList.contains('py-1')).toBe(true)
        })

        it('should render xs size', async () => {
            const { container } = render(Badge, {
                props: { label: 'XS', size: 'xs' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('px-1.5')).toBe(true)
            expect(badge?.className).toContain('text-[10px]')
        })

        it('should render sm size', async () => {
            const { container } = render(Badge, {
                props: { label: 'SM', size: 'sm' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('px-2')).toBe(true)
            expect(badge?.classList.contains('text-xs')).toBe(true)
        })

        it('should render lg size', async () => {
            const { container } = render(Badge, {
                props: { label: 'LG', size: 'lg' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('px-3')).toBe(true)
            expect(badge?.classList.contains('text-sm')).toBe(true)
        })

        it('should render xl size', async () => {
            const { container } = render(Badge, {
                props: { label: 'XL', size: 'xl' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('px-3.5')).toBe(true)
            expect(badge?.classList.contains('py-1.5')).toBe(true)
        })
    })

    describe('square prop', () => {
        it('should apply square padding when square is true', async () => {
            const { container } = render(Badge, {
                props: { label: 'S', square: true, size: 'md' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('p-1')).toBe(true)
        })

        it('should apply correct square padding for xs size', async () => {
            const { container } = render(Badge, {
                props: { label: 'S', square: true, size: 'xs' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('p-0.5')).toBe(true)
        })

        it('should apply correct square padding for lg size', async () => {
            const { container } = render(Badge, {
                props: { label: 'S', square: true, size: 'lg' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('p-1.5')).toBe(true)
        })
    })

    describe('icon props', () => {
        it('should render Icon component when icon prop is provided', async () => {
            const { container } = render(Badge, {
                props: { icon: 'lucide:star' }
            })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
        })

        it('should render leading icon with label', async () => {
            const { container } = render(Badge, {
                props: { label: 'Star', leadingIcon: 'lucide:star' }
            })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
            expect(container.textContent).toContain('Star')
        })

        it('should render trailing icon with label', async () => {
            const { container } = render(Badge, {
                props: { label: 'Next', trailingIcon: 'lucide:arrow-right' }
            })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
            expect(container.textContent).toContain('Next')
        })

        it('should render both leading and trailing icons', async () => {
            const { container } = render(Badge, {
                props: {
                    label: 'Both',
                    leadingIcon: 'lucide:star',
                    trailingIcon: 'lucide:x'
                }
            })

            // Wait for icons to load
            await new Promise((r) => setTimeout(r, 200))
            const svgs = container.querySelectorAll('svg')
            expect(svgs.length).toBe(2)
        })

        it('should apply square padding for icon-only badge', async () => {
            const { container } = render(Badge, {
                props: { icon: 'lucide:star', size: 'md' }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('p-1')).toBe(true)
        })
    })

    describe('avatar prop', () => {
        it('should render avatar when avatar prop is provided', async () => {
            const { container } = render(Badge, {
                props: {
                    label: 'User',
                    avatar: { src: 'https://example.com/avatar.jpg', alt: 'User' }
                }
            })

            const img = container.querySelector('img')
            expect(img).not.toBeNull()
            expect(img?.getAttribute('src')).toBe('https://example.com/avatar.jpg')
        })
    })

    describe('variant + color combinations', () => {
        it('should render outline with success color', async () => {
            const { container } = render(Badge, {
                props: { label: 'Success', variant: 'outline', color: 'success' }
            })

            const badge = container.querySelector('span')
            expect(badge?.className).toContain('ring-success/50')
            expect(badge?.classList.contains('text-success')).toBe(true)
        })

        it('should render soft with error color', async () => {
            const { container } = render(Badge, {
                props: { label: 'Error', variant: 'soft', color: 'error' }
            })

            const badge = container.querySelector('span')
            expect(badge?.className).toContain('bg-error/15')
            expect(badge?.classList.contains('text-error-700')).toBe(true)
        })

        it('should render subtle with warning color', async () => {
            const { container } = render(Badge, {
                props: { label: 'Warning', variant: 'subtle', color: 'warning' }
            })

            const badge = container.querySelector('span')
            expect(badge?.className).toContain('ring-warning/25')
            expect(badge?.className).toContain('bg-warning/10')
        })

        it('should render outline with neutral color', async () => {
            const { container } = render(Badge, {
                props: { label: 'Neutral', variant: 'outline', color: 'neutral' }
            })

            const badge = container.querySelector('span')
            expect(badge?.className).toContain('ring-neutral-300')
        })
    })

    describe('ui customization', () => {
        it('should apply custom base styles via ui prop', async () => {
            const { container } = render(Badge, {
                props: { label: 'Custom', ui: { base: 'custom-base-class' } }
            })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('custom-base-class')).toBe(true)
        })

        it('should apply custom label styles via ui prop', async () => {
            const { container } = render(Badge, {
                props: { label: 'Custom', ui: { label: 'custom-label-class' } }
            })

            const labelSpan = container.querySelector('span span')
            expect(labelSpan?.classList.contains('custom-label-class')).toBe(true)
        })

        it('should apply custom leadingIcon styles via ui prop', async () => {
            const { container } = render(Badge, {
                props: {
                    label: 'Icon',
                    leadingIcon: 'lucide:star',
                    ui: { leadingIcon: 'custom-icon-class' }
                }
            })

            const svg = await waitForSvg(container)
            expect(svg?.classList.contains('custom-icon-class')).toBe(true)
        })
    })

    describe('rest props', () => {
        it('should pass through additional attributes', async () => {
            const { container } = render(Badge, {
                props: { label: 'Test', 'data-testid': 'my-badge' }
            })

            const badge = container.querySelector('[data-testid="my-badge"]')
            expect(badge).not.toBeNull()
        })

        it('should pass through id attribute', async () => {
            const { container } = render(Badge, {
                props: { label: 'Test', id: 'badge-id' }
            })

            const badge = container.querySelector('#badge-id')
            expect(badge).not.toBeNull()
        })

        it('should pass through aria attributes', async () => {
            const { container } = render(Badge, {
                props: { label: 'Status', 'aria-label': 'Status badge' }
            })

            const badge = container.querySelector('[aria-label="Status badge"]')
            expect(badge).not.toBeNull()
        })
    })

    describe('base styles', () => {
        it('should have inline-flex display', async () => {
            const { container } = render(Badge, { props: { label: 'Flex' } })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('inline-flex')).toBe(true)
        })

        it('should have items-center alignment', async () => {
            const { container } = render(Badge, { props: { label: 'Align' } })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('items-center')).toBe(true)
        })

        it('should have rounded-full border radius', async () => {
            const { container } = render(Badge, { props: { label: 'Rounded' } })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('rounded-full')).toBe(true)
        })

        it('should have font-medium font weight', async () => {
            const { container } = render(Badge, { props: { label: 'Font' } })

            const badge = container.querySelector('span')
            expect(badge?.classList.contains('font-medium')).toBe(true)
        })
    })
})
