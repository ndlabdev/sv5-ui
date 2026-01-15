import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Button from './Button.svelte'

// Helper to wait for icon SVG to render (Iconify loads icons async)
async function waitForSvg(container: Element): Promise<SVGElement | null> {
    for (let i = 0; i < 20; i++) {
        const svg = container.querySelector('svg')
        if (svg) return svg
        await new Promise((r) => setTimeout(r, 50))
    }
    return null
}

describe('Button', () => {
    describe('rendering', () => {
        it('should render a button element', async () => {
            const { container } = render(Button, { props: { label: 'Click me' } })

            const button = container.querySelector('button')
            expect(button).not.toBeNull()
            expect(button?.tagName.toLowerCase()).toBe('button')
        })

        it('should render with label prop', async () => {
            const { container } = render(Button, { props: { label: 'Submit' } })

            const button = container.querySelector('button')
            expect(button?.textContent).toContain('Submit')
        })

        it('should apply custom class', async () => {
            const { container } = render(Button, {
                props: { label: 'Test', class: 'my-custom-class' }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('my-custom-class')).toBe(true)
        })
    })

    describe('variants', () => {
        it('should render solid variant by default', async () => {
            const { container } = render(Button, { props: { label: 'Solid' } })

            const button = container.querySelector('button')
            expect(button?.classList.contains('bg-primary-600')).toBe(true)
        })

        it('should render outline variant', async () => {
            const { container } = render(Button, {
                props: { label: 'Outline', variant: 'outline' }
            })

            const button = container.querySelector('button')
            expect(button?.className).toContain('ring-1')
        })

        it('should render soft variant', async () => {
            const { container } = render(Button, {
                props: { label: 'Soft', variant: 'soft' }
            })

            const button = container.querySelector('button')
            expect(button?.className).toContain('bg-primary-500/15')
        })

        it('should render ghost variant', async () => {
            const { container } = render(Button, {
                props: { label: 'Ghost', variant: 'ghost' }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('text-primary-600')).toBe(true)
            expect(button?.className).not.toContain('bg-primary-600')
        })

        it('should render link variant', async () => {
            const { container } = render(Button, {
                props: { label: 'Link', variant: 'link' }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('underline-offset-4')).toBe(true)
        })
    })

    describe('colors', () => {
        it('should render primary color by default', async () => {
            const { container } = render(Button, { props: { label: 'Primary' } })

            const button = container.querySelector('button')
            expect(button?.classList.contains('bg-primary-600')).toBe(true)
        })

        it('should render success color', async () => {
            const { container } = render(Button, {
                props: { label: 'Success', color: 'success' }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('bg-success-600')).toBe(true)
        })

        it('should render error color', async () => {
            const { container } = render(Button, {
                props: { label: 'Error', color: 'error' }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('bg-error-600')).toBe(true)
        })

        it('should render warning color', async () => {
            const { container } = render(Button, {
                props: { label: 'Warning', color: 'warning' }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('bg-warning-500')).toBe(true)
        })

        it('should render neutral color', async () => {
            const { container } = render(Button, {
                props: { label: 'Neutral', color: 'neutral' }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('bg-neutral-900')).toBe(true)
        })
    })

    describe('sizes', () => {
        it('should render md size by default', async () => {
            const { container } = render(Button, { props: { label: 'Medium' } })

            const button = container.querySelector('button')
            expect(button?.classList.contains('h-9')).toBe(true)
        })

        it('should render xs size', async () => {
            const { container } = render(Button, {
                props: { label: 'XS', size: 'xs' }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('h-7')).toBe(true)
        })

        it('should render sm size', async () => {
            const { container } = render(Button, {
                props: { label: 'SM', size: 'sm' }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('h-8')).toBe(true)
        })

        it('should render lg size', async () => {
            const { container } = render(Button, {
                props: { label: 'LG', size: 'lg' }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('h-10')).toBe(true)
        })

        it('should render xl size', async () => {
            const { container } = render(Button, {
                props: { label: 'XL', size: 'xl' }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('h-12')).toBe(true)
        })
    })

    describe('disabled state', () => {
        it('should be disabled when disabled prop is true', async () => {
            const { container } = render(Button, {
                props: { label: 'Disabled', disabled: true }
            })

            const button = container.querySelector('button')
            expect(button?.disabled).toBe(true)
        })

        it('should not be disabled by default', async () => {
            const { container } = render(Button, { props: { label: 'Enabled' } })

            const button = container.querySelector('button')
            expect(button?.disabled).toBe(false)
        })
    })

    describe('loading state', () => {
        it('should be disabled when loading', async () => {
            const { container } = render(Button, {
                props: { label: 'Loading', loading: true }
            })

            const button = container.querySelector('button')
            expect(button?.disabled).toBe(true)
        })

        it('should show loading icon when loading', async () => {
            const { container } = render(Button, {
                props: { label: 'Loading', loading: true }
            })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
        })

        it('should have cursor-wait class when loading', async () => {
            const { container } = render(Button, {
                props: { label: 'Loading', loading: true }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('cursor-wait')).toBe(true)
        })
    })

    describe('block prop', () => {
        it('should have full width when block is true', async () => {
            const { container } = render(Button, {
                props: { label: 'Block', block: true }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('w-full')).toBe(true)
        })

        it('should not have full width by default', async () => {
            const { container } = render(Button, { props: { label: 'Normal' } })

            const button = container.querySelector('button')
            expect(button?.classList.contains('w-full')).toBe(false)
        })
    })

    describe('square prop', () => {
        it('should have square dimensions when square is true', async () => {
            const { container } = render(Button, {
                props: { icon: 'lucide:plus', square: true }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('size-9')).toBe(true)
        })

        it('should have square dimensions with different sizes', async () => {
            const { container } = render(Button, {
                props: { icon: 'lucide:plus', square: true, size: 'lg' }
            })

            const button = container.querySelector('button')
            expect(button?.classList.contains('size-10')).toBe(true)
        })
    })

    describe('icon props', () => {
        it('should render icon-only button with icon prop', async () => {
            const { container } = render(Button, {
                props: { icon: 'lucide:home' }
            })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
        })

        it('should render leading icon', async () => {
            const { container } = render(Button, {
                props: { label: 'Home', leadingIcon: 'lucide:home' }
            })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
            expect(container.querySelector('button')?.textContent).toContain('Home')
        })

        it('should render trailing icon', async () => {
            const { container } = render(Button, {
                props: { label: 'Next', trailingIcon: 'lucide:arrow-right' }
            })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
            expect(container.querySelector('button')?.textContent).toContain('Next')
        })
    })

    describe('truncate prop', () => {
        it('should apply truncate class to label when truncate is true', async () => {
            const { container } = render(Button, {
                props: { label: 'Very long text that should be truncated', truncate: true }
            })

            const span = container.querySelector('button span')
            expect(span?.classList.contains('truncate')).toBe(true)
        })
    })

    describe('accessibility', () => {
        it('should be focusable', async () => {
            const { container } = render(Button, { props: { label: 'Focusable' } })

            const button = container.querySelector('button')
            expect(button?.tabIndex).not.toBe(-1)
        })

        it('should support aria attributes', async () => {
            const { container } = render(Button, {
                props: { label: 'Accessible', 'aria-label': 'Custom label' }
            })

            const button = container.querySelector('button')
            expect(button?.getAttribute('aria-label')).toBe('Custom label')
        })
    })
})
