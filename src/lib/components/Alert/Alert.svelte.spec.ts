import { describe, expect, it, vi } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Alert from './Alert.svelte'

// Helper to wait for SVG to render (Iconify loads icons async)
async function waitForSvg(container: Element): Promise<SVGElement | null> {
    for (let i = 0; i < 20; i++) {
        const svg = container.querySelector('svg')
        if (svg) return svg
        await new Promise((r) => setTimeout(r, 50))
    }
    return null
}

describe('Alert', () => {
    describe('rendering', () => {
        it('should render a div element by default', async () => {
            const { container } = render(Alert, { props: { title: 'Alert' } })

            const div = container.querySelector('div')
            expect(div).not.toBeNull()
        })

        it('should render with custom element via as prop', async () => {
            const { container } = render(Alert, { props: { title: 'Alert', as: 'section' } })

            const section = container.querySelector('section')
            expect(section).not.toBeNull()
        })

        it('should render title text', async () => {
            const { container } = render(Alert, { props: { title: 'Important Notice' } })

            expect(container.textContent).toContain('Important Notice')
        })

        it('should render description text', async () => {
            const { container } = render(Alert, {
                props: { title: 'Title', description: 'This is a description' }
            })

            expect(container.textContent).toContain('This is a description')
        })

        it('should render both title and description', async () => {
            const { container } = render(Alert, {
                props: { title: 'Alert Title', description: 'Alert description text' }
            })

            expect(container.textContent).toContain('Alert Title')
            expect(container.textContent).toContain('Alert description text')
        })

        it('should have role="alert" attribute', async () => {
            const { container } = render(Alert, { props: { title: 'Alert' } })

            const alert = container.querySelector('[role="alert"]')
            expect(alert).not.toBeNull()
        })

        it('should apply custom class', async () => {
            const { container } = render(Alert, {
                props: { title: 'Test', class: 'my-custom-class' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.classList.contains('my-custom-class')).toBe(true)
        })

        it('should not render when open is false', async () => {
            const { container } = render(Alert, {
                props: { title: 'Hidden Alert', open: false }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert).toBeNull()
        })

        it('should render when open is true', async () => {
            const { container } = render(Alert, {
                props: { title: 'Visible Alert', open: true }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert).not.toBeNull()
        })
    })

    describe('variants', () => {
        it('should render soft variant by default', async () => {
            const { container } = render(Alert, { props: { title: 'Soft' } })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('bg-primary-500/15')
        })

        it('should render solid variant', async () => {
            const { container } = render(Alert, {
                props: { title: 'Solid', variant: 'solid' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.classList.contains('bg-primary-500')).toBe(true)
            expect(alert?.classList.contains('text-white')).toBe(true)
        })

        it('should render outline variant', async () => {
            const { container } = render(Alert, {
                props: { title: 'Outline', variant: 'outline' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('ring-1')
            expect(alert?.className).toContain('ring-primary-500/50')
        })

        it('should render subtle variant', async () => {
            const { container } = render(Alert, {
                props: { title: 'Subtle', variant: 'subtle' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('ring-1')
            expect(alert?.className).toContain('bg-primary-500/10')
        })
    })

    describe('colors', () => {
        it('should render primary color by default', async () => {
            const { container } = render(Alert, { props: { title: 'Primary' } })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('bg-primary-500/15')
        })

        it('should render secondary color', async () => {
            const { container } = render(Alert, {
                props: { title: 'Secondary', color: 'secondary' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('bg-secondary-500/15')
        })

        it('should render success color', async () => {
            const { container } = render(Alert, {
                props: { title: 'Success', color: 'success' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('bg-success-500/15')
        })

        it('should render warning color', async () => {
            const { container } = render(Alert, {
                props: { title: 'Warning', color: 'warning' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('bg-warning-500/15')
        })

        it('should render error color', async () => {
            const { container } = render(Alert, {
                props: { title: 'Error', color: 'error' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('bg-error-500/15')
        })

        it('should render info color', async () => {
            const { container } = render(Alert, {
                props: { title: 'Info', color: 'info' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('bg-info-500/15')
        })

        it('should render neutral color', async () => {
            const { container } = render(Alert, {
                props: { title: 'Neutral', color: 'neutral' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('bg-neutral-500/10')
        })
    })

    describe('orientation', () => {
        it('should render horizontal orientation by default', async () => {
            const { container } = render(Alert, { props: { title: 'Horizontal' } })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.classList.contains('flex')).toBe(true)
            expect(alert?.classList.contains('items-center')).toBe(true)
        })

        it('should render vertical orientation', async () => {
            const { container } = render(Alert, {
                props: { title: 'Vertical', orientation: 'vertical' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.classList.contains('flex-col')).toBe(true)
        })
    })

    describe('icon prop', () => {
        it('should render icon when provided', async () => {
            const { container } = render(Alert, {
                props: { title: 'With Icon', icon: 'lucide:info' }
            })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
        })
    })

    describe('avatar prop', () => {
        it('should render avatar when provided', async () => {
            const { container } = render(Alert, {
                props: {
                    title: 'With Avatar',
                    avatar: { src: 'https://example.com/avatar.jpg', alt: 'User' }
                }
            })

            const img = container.querySelector('img')
            expect(img).not.toBeNull()
            expect(img?.getAttribute('src')).toBe('https://example.com/avatar.jpg')
        })
    })

    describe('close button', () => {
        it('should render close button when close is true', async () => {
            const { container } = render(Alert, {
                props: { title: 'Closeable', close: true }
            })

            const button = container.querySelector('button')
            expect(button).not.toBeNull()
            expect(button?.getAttribute('aria-label')).toBe('Close alert')
        })

        it('should not render close button when close is false', async () => {
            const { container } = render(Alert, {
                props: { title: 'Not Closeable', close: false }
            })

            const button = container.querySelector('button')
            expect(button).toBeNull()
        })

        it('should call onClose when close button is clicked', async () => {
            const onClose = vi.fn()
            const { container } = render(Alert, {
                props: { title: 'Closeable', close: true, onClose }
            })

            const button = container.querySelector('button')
            button?.click()

            expect(onClose).toHaveBeenCalledOnce()
        })

        it('should accept ButtonProps for close', async () => {
            const { container } = render(Alert, {
                props: {
                    title: 'Custom Close',
                    close: { 'aria-label': 'Dismiss' }
                }
            })

            const button = container.querySelector('button')
            expect(button?.getAttribute('aria-label')).toBe('Dismiss')
        })
    })

    describe('actions', () => {
        it('should render action buttons', async () => {
            const { container } = render(Alert, {
                props: {
                    title: 'With Actions',
                    actions: [{ label: 'Accept' }, { label: 'Decline' }]
                }
            })

            expect(container.textContent).toContain('Accept')
            expect(container.textContent).toContain('Decline')
        })

        it('should not render actions container when actions is empty', async () => {
            const { container } = render(Alert, {
                props: { title: 'No Actions', actions: [] }
            })

            const buttons = container.querySelectorAll('button')
            expect(buttons.length).toBe(0)
        })
    })

    describe('variant + color combinations', () => {
        it('should render solid with success color', async () => {
            const { container } = render(Alert, {
                props: { title: 'Success', variant: 'solid', color: 'success' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.classList.contains('bg-success-500')).toBe(true)
            expect(alert?.classList.contains('text-white')).toBe(true)
        })

        it('should render outline with error color', async () => {
            const { container } = render(Alert, {
                props: { title: 'Error', variant: 'outline', color: 'error' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('ring-error-500/50')
        })

        it('should render subtle with warning color', async () => {
            const { container } = render(Alert, {
                props: { title: 'Warning', variant: 'subtle', color: 'warning' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('ring-warning-500/25')
            expect(alert?.className).toContain('bg-warning-500/10')
        })

        it('should render soft with info color', async () => {
            const { container } = render(Alert, {
                props: { title: 'Info', variant: 'soft', color: 'info' }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.className).toContain('bg-info-500/15')
        })
    })

    describe('ui customization', () => {
        it('should apply custom root styles via ui prop', async () => {
            const { container } = render(Alert, {
                props: { title: 'Custom', ui: { root: 'custom-root-class' } }
            })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.classList.contains('custom-root-class')).toBe(true)
        })

        it('should apply custom title styles via ui prop', async () => {
            const { container } = render(Alert, {
                props: { title: 'Custom Title', ui: { title: 'custom-title-class' } }
            })

            const title = container.querySelector('.custom-title-class')
            expect(title).not.toBeNull()
            expect(title?.textContent).toBe('Custom Title')
        })

        it('should apply custom description styles via ui prop', async () => {
            const { container } = render(Alert, {
                props: {
                    title: 'Title',
                    description: 'Description',
                    ui: { description: 'custom-desc-class' }
                }
            })

            const desc = container.querySelector('.custom-desc-class')
            expect(desc).not.toBeNull()
            expect(desc?.textContent).toBe('Description')
        })
    })

    describe('rest props', () => {
        it('should pass through additional attributes', async () => {
            const { container } = render(Alert, {
                props: { title: 'Test', 'data-testid': 'my-alert' }
            })

            const alert = container.querySelector('[data-testid="my-alert"]')
            expect(alert).not.toBeNull()
        })

        it('should pass through id attribute', async () => {
            const { container } = render(Alert, {
                props: { title: 'Test', id: 'alert-id' }
            })

            const alert = container.querySelector('#alert-id')
            expect(alert).not.toBeNull()
        })
    })

    describe('base styles', () => {
        it('should have relative positioning', async () => {
            const { container } = render(Alert, { props: { title: 'Relative' } })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.classList.contains('relative')).toBe(true)
        })

        it('should have full width', async () => {
            const { container } = render(Alert, { props: { title: 'Full Width' } })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.classList.contains('w-full')).toBe(true)
        })

        it('should have rounded-lg border radius', async () => {
            const { container } = render(Alert, { props: { title: 'Rounded' } })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.classList.contains('rounded-lg')).toBe(true)
        })

        it('should have padding', async () => {
            const { container } = render(Alert, { props: { title: 'Padded' } })

            const alert = container.querySelector('[role="alert"]')
            expect(alert?.classList.contains('p-4')).toBe(true)
        })
    })
})
