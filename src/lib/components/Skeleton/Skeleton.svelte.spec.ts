import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Skeleton from './Skeleton.svelte'

describe('Skeleton', () => {
    describe('rendering', () => {
        it('should render a div element by default', async () => {
            const { container } = render(Skeleton)

            const div = container.querySelector('div')
            expect(div).not.toBeNull()
        })

        it('should render with custom element via as prop', async () => {
            const { container } = render(Skeleton, { props: { as: 'span' } })

            const span = container.querySelector('span')
            expect(span).not.toBeNull()
        })

        it('should apply custom class', async () => {
            const { container } = render(Skeleton, {
                props: { class: 'my-custom-class' }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('my-custom-class')).toBe(true)
        })
    })

    describe('base styles', () => {
        it('should have animate-pulse class', async () => {
            const { container } = render(Skeleton)

            const div = container.querySelector('div')
            expect(div?.classList.contains('animate-pulse')).toBe(true)
        })

        it('should have rounded-md class', async () => {
            const { container } = render(Skeleton)

            const div = container.querySelector('div')
            expect(div?.classList.contains('rounded-md')).toBe(true)
        })

        it('should have background classes', async () => {
            const { container } = render(Skeleton)

            const div = container.querySelector('div')
            expect(div?.classList.contains('bg-neutral-200')).toBe(true)
        })
    })

    describe('ui customization', () => {
        it('should apply custom root styles via ui prop', async () => {
            const { container } = render(Skeleton, {
                props: { ui: { root: 'custom-root-class' } }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('custom-root-class')).toBe(true)
        })

        it('should allow overriding default styles', async () => {
            const { container } = render(Skeleton, {
                props: { class: 'rounded-full' }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('rounded-full')).toBe(true)
        })
    })

    describe('sizing', () => {
        it('should accept width classes', async () => {
            const { container } = render(Skeleton, {
                props: { class: 'w-12' }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('w-12')).toBe(true)
        })

        it('should accept height classes', async () => {
            const { container } = render(Skeleton, {
                props: { class: 'h-12' }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('h-12')).toBe(true)
        })

        it('should accept combined size classes', async () => {
            const { container } = render(Skeleton, {
                props: { class: 'size-12' }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('size-12')).toBe(true)
        })
    })

    describe('rest props', () => {
        it('should pass through additional attributes', async () => {
            const { container } = render(Skeleton, {
                props: { 'data-testid': 'my-skeleton' }
            })

            const skeleton = container.querySelector('[data-testid="my-skeleton"]')
            expect(skeleton).not.toBeNull()
        })

        it('should pass through id attribute', async () => {
            const { container } = render(Skeleton, {
                props: { id: 'skeleton-id' }
            })

            const skeleton = container.querySelector('#skeleton-id')
            expect(skeleton).not.toBeNull()
        })

        it('should pass through aria attributes', async () => {
            const { container } = render(Skeleton, {
                props: { 'aria-label': 'Loading content' }
            })

            const skeleton = container.querySelector('[aria-label="Loading content"]')
            expect(skeleton).not.toBeNull()
        })
    })
})
