import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Chip from './Chip.svelte'

describe('Chip', () => {
    describe('rendering', () => {
        it('should render a div element by default', async () => {
            const { container } = render(Chip)

            const div = container.querySelector('div')
            expect(div).not.toBeNull()
        })

        it('should render with custom element via as prop', async () => {
            const { container } = render(Chip, { props: { as: 'span' } })

            const span = container.querySelector('span')
            expect(span).not.toBeNull()
        })

        it('should render text content', async () => {
            const { container } = render(Chip, { props: { text: '5' } })

            expect(container.textContent).toContain('5')
        })

        it('should render number text content', async () => {
            const { container } = render(Chip, { props: { text: 99 } })

            expect(container.textContent).toContain('99')
        })

        it('should apply custom class', async () => {
            const { container } = render(Chip, {
                props: { class: 'my-custom-class' }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('my-custom-class')).toBe(true)
        })
    })

    describe('colors', () => {
        it('should render primary color by default', async () => {
            const { container } = render(Chip, { props: { text: '1' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('bg-primary')).toBe(true)
        })

        it('should render secondary color', async () => {
            const { container } = render(Chip, {
                props: { text: '1', color: 'secondary' }
            })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('bg-secondary')).toBe(true)
        })

        it('should render success color', async () => {
            const { container } = render(Chip, {
                props: { text: '1', color: 'success' }
            })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('bg-success')).toBe(true)
        })

        it('should render warning color', async () => {
            const { container } = render(Chip, {
                props: { text: '1', color: 'warning' }
            })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('bg-warning')).toBe(true)
        })

        it('should render error color', async () => {
            const { container } = render(Chip, {
                props: { text: '1', color: 'error' }
            })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('bg-error')).toBe(true)
        })

        it('should render info color', async () => {
            const { container } = render(Chip, {
                props: { text: '1', color: 'info' }
            })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('bg-info')).toBe(true)
        })

        it('should render neutral color', async () => {
            const { container } = render(Chip, {
                props: { text: '1', color: 'neutral' }
            })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('bg-neutral')).toBe(true)
        })
    })

    describe('sizes', () => {
        it('should render md size by default', async () => {
            const { container } = render(Chip)

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('size-2')).toBe(true)
        })

        it('should render 3xs size', async () => {
            const { container } = render(Chip, { props: { size: '3xs' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.className).toContain('size-[4px]')
        })

        it('should render 2xs size', async () => {
            const { container } = render(Chip, { props: { size: '2xs' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.className).toContain('size-[5px]')
        })

        it('should render xs size', async () => {
            const { container } = render(Chip, { props: { size: 'xs' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.className).toContain('size-[6px]')
        })

        it('should render sm size', async () => {
            const { container } = render(Chip, { props: { size: 'sm' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.className).toContain('size-[7px]')
        })

        it('should render lg size', async () => {
            const { container } = render(Chip, { props: { size: 'lg' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.className).toContain('size-[9px]')
        })

        it('should render xl size', async () => {
            const { container } = render(Chip, { props: { size: 'xl' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.className).toContain('size-[10px]')
        })

        it('should render 2xl size', async () => {
            const { container } = render(Chip, { props: { size: '2xl' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.className).toContain('size-[11px]')
        })

        it('should render 3xl size', async () => {
            const { container } = render(Chip, { props: { size: '3xl' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('size-3')).toBe(true)
        })
    })

    describe('positions', () => {
        it('should render top-right position by default', async () => {
            const { container } = render(Chip)

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('top-0')).toBe(true)
            expect(chipBase?.classList.contains('right-0')).toBe(true)
        })

        it('should render bottom-right position', async () => {
            const { container } = render(Chip, { props: { position: 'bottom-right' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('bottom-0')).toBe(true)
            expect(chipBase?.classList.contains('right-0')).toBe(true)
        })

        it('should render top-left position', async () => {
            const { container } = render(Chip, { props: { position: 'top-left' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('top-0')).toBe(true)
            expect(chipBase?.classList.contains('left-0')).toBe(true)
        })

        it('should render bottom-left position', async () => {
            const { container } = render(Chip, { props: { position: 'bottom-left' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('bottom-0')).toBe(true)
            expect(chipBase?.classList.contains('left-0')).toBe(true)
        })
    })

    describe('inset prop', () => {
        it('should apply transform classes when inset is false (default)', async () => {
            const { container } = render(Chip)

            const chipBase = container.querySelector('span')
            expect(chipBase?.className).toContain('-translate-y-1/2')
            expect(chipBase?.className).toContain('translate-x-1/2')
        })

        it('should not apply transform classes when inset is true', async () => {
            const { container } = render(Chip, { props: { inset: true } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.className).not.toContain('-translate-y-1/2')
            expect(chipBase?.className).not.toContain('translate-x-1/2')
        })
    })

    describe('standalone prop', () => {
        it('should render with wrapper by default', async () => {
            const { container } = render(Chip, { props: { text: '5' } })

            const wrapper = container.querySelector('div')
            const chipBase = wrapper?.querySelector('span')
            expect(wrapper).not.toBeNull()
            expect(chipBase).not.toBeNull()
        })

        it('should render without wrapper when standalone is true', async () => {
            const { container } = render(Chip, { props: { text: '5', standalone: true } })

            const wrapper = container.querySelector('div')
            const chipBase = container.querySelector('span')
            expect(wrapper).toBeNull()
            expect(chipBase).not.toBeNull()
        })

        it('should have relative position when standalone', async () => {
            const { container } = render(Chip, { props: { standalone: true } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('relative')).toBe(true)
        })
    })

    describe('show prop', () => {
        it('should show chip by default', async () => {
            const { container } = render(Chip, { props: { text: '5' } })

            const chipBase = container.querySelector('span')
            expect(chipBase).not.toBeNull()
        })

        it('should hide chip when show is false', async () => {
            const { container } = render(Chip, { props: { text: '5', show: false } })

            const wrapper = container.querySelector('div')
            const chipBase = wrapper?.querySelector('span')
            expect(wrapper).not.toBeNull()
            expect(chipBase).toBeNull()
        })

        it('should hide standalone chip when show is false', async () => {
            const { container } = render(Chip, {
                props: { text: '5', standalone: true, show: false }
            })

            const chipBase = container.querySelector('span')
            expect(chipBase).toBeNull()
        })
    })

    describe('content with text', () => {
        it('should apply expanded size classes when text is present', async () => {
            const { container } = render(Chip, { props: { text: '99', size: 'md' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.className).toContain('min-w-[18px]')
            expect(chipBase?.className).toContain('h-[18px]')
        })

        it('should not apply expanded size classes when no content', async () => {
            const { container } = render(Chip, { props: { size: 'md' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.className).not.toContain('min-w-[18px]')
        })

        it('should apply correct expanded classes for 3xs size', async () => {
            const { container } = render(Chip, { props: { text: '1', size: '3xs' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.className).toContain('min-w-[10px]')
            expect(chipBase?.className).toContain('h-[10px]')
        })

        it('should apply correct expanded classes for lg size', async () => {
            const { container } = render(Chip, { props: { text: '1', size: 'lg' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('min-w-5')).toBe(true)
            expect(chipBase?.classList.contains('h-5')).toBe(true)
        })

        it('should apply correct expanded classes for 3xl size', async () => {
            const { container } = render(Chip, { props: { text: '1', size: '3xl' } })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('min-w-7')).toBe(true)
            expect(chipBase?.classList.contains('h-7')).toBe(true)
        })
    })

    describe('ui customization', () => {
        it('should apply custom root styles via ui prop', async () => {
            const { container } = render(Chip, {
                props: { ui: { root: 'custom-root-class' } }
            })

            const wrapper = container.querySelector('div')
            expect(wrapper?.classList.contains('custom-root-class')).toBe(true)
        })

        it('should apply custom base styles via ui prop', async () => {
            const { container } = render(Chip, {
                props: { ui: { base: 'custom-base-class' } }
            })

            const chipBase = container.querySelector('span')
            expect(chipBase?.classList.contains('custom-base-class')).toBe(true)
        })
    })

    describe('rest props', () => {
        it('should pass through additional attributes', async () => {
            const { container } = render(Chip, {
                props: { 'data-testid': 'my-chip' }
            })

            const wrapper = container.querySelector('[data-testid="my-chip"]')
            expect(wrapper).not.toBeNull()
        })

        it('should pass through id attribute', async () => {
            const { container } = render(Chip, {
                props: { id: 'chip-id' }
            })

            const wrapper = container.querySelector('#chip-id')
            expect(wrapper).not.toBeNull()
        })
    })
})
