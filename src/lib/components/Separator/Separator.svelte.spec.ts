import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Separator from './Separator.svelte'

// Helper to wait for icon SVG to render (Iconify loads icons async)
async function waitForSvg(container: Element): Promise<SVGElement | null> {
    for (let i = 0; i < 20; i++) {
        const svg = container.querySelector('svg')
        if (svg) return svg
        await new Promise((r) => setTimeout(r, 50))
    }
    return null
}

describe('Separator', () => {
    describe('rendering', () => {
        it('should render a div element by default', async () => {
            const { container } = render(Separator)

            const separator = container.firstElementChild
            expect(separator?.tagName.toLowerCase()).toBe('div')
        })

        it('should apply custom class', async () => {
            const { container } = render(Separator, {
                props: { class: 'my-custom-class' }
            })

            const separator = container.firstElementChild
            expect(separator?.classList.contains('my-custom-class')).toBe(true)
        })

        it('should have flex class', async () => {
            const { container } = render(Separator)

            const separator = container.firstElementChild
            expect(separator?.classList.contains('flex')).toBe(true)
        })

        it('should have items-center class', async () => {
            const { container } = render(Separator)

            const separator = container.firstElementChild
            expect(separator?.classList.contains('items-center')).toBe(true)
        })

        it('should have data-separator-root attribute from bits-ui', async () => {
            const { container } = render(Separator)

            const separator = container.firstElementChild
            expect(separator?.hasAttribute('data-separator-root')).toBe(true)
        })
    })

    describe('colors', () => {
        it('should render neutral color by default', async () => {
            const { container } = render(Separator)

            const border = container.querySelector('.border-neutral-200')
            expect(border).not.toBeNull()
        })

        it('should render primary color', async () => {
            const { container } = render(Separator, {
                props: { color: 'primary' }
            })

            const border = container.querySelector('.border-primary-200')
            expect(border).not.toBeNull()
        })

        it('should render success color', async () => {
            const { container } = render(Separator, {
                props: { color: 'success' }
            })

            const border = container.querySelector('.border-success-200')
            expect(border).not.toBeNull()
        })

        it('should render error color', async () => {
            const { container } = render(Separator, {
                props: { color: 'error' }
            })

            const border = container.querySelector('.border-error-200')
            expect(border).not.toBeNull()
        })

        it('should render warning color', async () => {
            const { container } = render(Separator, {
                props: { color: 'warning' }
            })

            const border = container.querySelector('.border-warning-200')
            expect(border).not.toBeNull()
        })
    })

    describe('sizes', () => {
        it('should render xs size by default', async () => {
            const { container } = render(Separator)

            const border = container.querySelector('.border-\\[0\\.5px\\]')
            expect(border).not.toBeNull()
        })

        it('should render sm size', async () => {
            const { container } = render(Separator, {
                props: { size: 'sm' }
            })

            const border = container.querySelector('.border')
            expect(border).not.toBeNull()
        })

        it('should render md size', async () => {
            const { container } = render(Separator, {
                props: { size: 'md' }
            })

            const border = container.querySelector('.border-\\[1\\.5px\\]')
            expect(border).not.toBeNull()
        })

        it('should render lg size', async () => {
            const { container } = render(Separator, {
                props: { size: 'lg' }
            })

            const border = container.querySelector('.border-2')
            expect(border).not.toBeNull()
        })

        it('should render xl size', async () => {
            const { container } = render(Separator, {
                props: { size: 'xl' }
            })

            const border = container.querySelector('.border-\\[3px\\]')
            expect(border).not.toBeNull()
        })
    })

    describe('types', () => {
        it('should render solid type by default', async () => {
            const { container } = render(Separator)

            const border = container.querySelector('.border-solid')
            expect(border).not.toBeNull()
        })

        it('should render dashed type', async () => {
            const { container } = render(Separator, {
                props: { type: 'dashed' }
            })

            const border = container.querySelector('.border-dashed')
            expect(border).not.toBeNull()
        })

        it('should render dotted type', async () => {
            const { container } = render(Separator, {
                props: { type: 'dotted' }
            })

            const border = container.querySelector('.border-dotted')
            expect(border).not.toBeNull()
        })
    })

    describe('orientation', () => {
        it('should render horizontal orientation by default', async () => {
            const { container } = render(Separator)

            const separator = container.firstElementChild
            expect(separator?.classList.contains('flex-row')).toBe(true)
            expect(separator?.classList.contains('w-full')).toBe(true)
        })

        it('should render vertical orientation', async () => {
            const { container } = render(Separator, {
                props: { orientation: 'vertical' }
            })

            const separator = container.firstElementChild
            expect(separator?.classList.contains('flex-col')).toBe(true)
            expect(separator?.classList.contains('h-full')).toBe(true)
        })

        it('should have data-orientation attribute from bits-ui', async () => {
            const { container } = render(Separator, {
                props: { orientation: 'vertical' }
            })

            const separator = container.firstElementChild
            expect(separator?.getAttribute('data-orientation')).toBe('vertical')
        })
    })

    describe('content', () => {
        it('should render label when provided', async () => {
            const { container } = render(Separator, {
                props: { label: 'OR' }
            })

            expect(container.textContent).toContain('OR')
        })

        it('should render icon when provided', async () => {
            const { container } = render(Separator, {
                props: { icon: 'lucide:star' }
            })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
        })

        it('should render two border lines when content exists', async () => {
            const { container } = render(Separator, {
                props: { label: 'Section' }
            })

            const borders = container.querySelectorAll('.flex-grow')
            expect(borders.length).toBe(2)
        })

        it('should render one border line when no content', async () => {
            const { container } = render(Separator)

            const borders = container.querySelectorAll('.flex-grow')
            expect(borders.length).toBe(1)
        })

        it('should have container with content centered', async () => {
            const { container } = render(Separator, {
                props: { label: 'Center' }
            })

            const contentContainer = container.querySelector('.justify-center')
            expect(contentContainer).not.toBeNull()
        })
    })

    describe('accessibility', () => {
        it('should have role="separator" by default', async () => {
            const { container } = render(Separator)

            const separator = container.firstElementChild
            expect(separator?.getAttribute('role')).toBe('separator')
        })

        it('should have aria-orientation="horizontal" by default', async () => {
            const { container } = render(Separator)

            const separator = container.firstElementChild
            expect(separator?.getAttribute('aria-orientation')).toBe('horizontal')
        })

        it('should have aria-orientation="vertical" when vertical', async () => {
            const { container } = render(Separator, {
                props: { orientation: 'vertical' }
            })

            const separator = container.firstElementChild
            expect(separator?.getAttribute('aria-orientation')).toBe('vertical')
        })

        it('should have role="none" when decorative', async () => {
            const { container } = render(Separator, {
                props: { decorative: true }
            })

            const separator = container.firstElementChild
            expect(separator?.getAttribute('role')).toBe('none')
        })

        it('should have aria-hidden="true" when decorative', async () => {
            const { container } = render(Separator, {
                props: { decorative: true }
            })

            const separator = container.firstElementChild
            expect(separator?.getAttribute('aria-hidden')).toBe('true')
        })
    })

    describe('HTML attributes', () => {
        it('should pass through id attribute', async () => {
            const { container } = render(Separator, {
                props: { id: 'my-separator' }
            })

            const separator = container.firstElementChild
            expect(separator?.id).toBe('my-separator')
        })

        it('should pass through data attributes', async () => {
            const { container } = render(Separator, {
                props: { 'data-testid': 'separator-test' }
            })

            const separator = container.firstElementChild
            expect(separator?.getAttribute('data-testid')).toBe('separator-test')
        })
    })

    describe('ui prop', () => {
        it('should apply custom root class via ui prop', async () => {
            const { container } = render(Separator, {
                props: { ui: { root: 'custom-root-class' } }
            })

            const separator = container.firstElementChild
            expect(separator?.classList.contains('custom-root-class')).toBe(true)
        })

        it('should apply custom border class via ui prop', async () => {
            const { container } = render(Separator, {
                props: { ui: { border: 'custom-border-class' } }
            })

            const border = container.querySelector('.custom-border-class')
            expect(border).not.toBeNull()
        })

        it('should apply custom label class via ui prop', async () => {
            const { container } = render(Separator, {
                props: { label: 'Test', ui: { label: 'custom-label-class' } }
            })

            const label = container.querySelector('.custom-label-class')
            expect(label).not.toBeNull()
        })
    })
})
