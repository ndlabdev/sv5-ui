import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Container from './Container.svelte'

describe('Container', () => {
    describe('rendering', () => {
        it('should render a div element by default', async () => {
            const { container } = render(Container)

            const div = container.querySelector('div')
            expect(div).not.toBeNull()
        })

        it('should render as section element', async () => {
            const { container } = render(Container, { props: { as: 'section' } })

            const section = container.querySelector('section')
            expect(section).not.toBeNull()
        })

        it('should render as main element', async () => {
            const { container } = render(Container, { props: { as: 'main' } })

            const main = container.querySelector('main')
            expect(main).not.toBeNull()
        })

        it('should render as article element', async () => {
            const { container } = render(Container, { props: { as: 'article' } })

            const article = container.querySelector('article')
            expect(article).not.toBeNull()
        })

        it('should render as header element', async () => {
            const { container } = render(Container, { props: { as: 'header' } })

            const header = container.querySelector('header')
            expect(header).not.toBeNull()
        })

        it('should render as footer element', async () => {
            const { container } = render(Container, { props: { as: 'footer' } })

            const footer = container.querySelector('footer')
            expect(footer).not.toBeNull()
        })

        it('should render as aside element', async () => {
            const { container } = render(Container, { props: { as: 'aside' } })

            const aside = container.querySelector('aside')
            expect(aside).not.toBeNull()
        })

        it('should render as nav element', async () => {
            const { container } = render(Container, { props: { as: 'nav' } })

            const nav = container.querySelector('nav')
            expect(nav).not.toBeNull()
        })
    })

    describe('base styles', () => {
        it('should have w-full class', async () => {
            const { container } = render(Container)

            const div = container.querySelector('div')
            expect(div?.classList.contains('w-full')).toBe(true)
        })

        it('should have mx-auto class for centering', async () => {
            const { container } = render(Container)

            const div = container.querySelector('div')
            expect(div?.classList.contains('mx-auto')).toBe(true)
        })

        it('should have px-4 class for mobile padding', async () => {
            const { container } = render(Container)

            const div = container.querySelector('div')
            expect(div?.classList.contains('px-4')).toBe(true)
        })

        it('should have sm:px-6 class for tablet padding', async () => {
            const { container } = render(Container)

            const div = container.querySelector('div')
            expect(div?.classList.contains('sm:px-6')).toBe(true)
        })

        it('should have lg:px-8 class for desktop padding', async () => {
            const { container } = render(Container)

            const div = container.querySelector('div')
            expect(div?.classList.contains('lg:px-8')).toBe(true)
        })
    })

    describe('custom classes', () => {
        it('should apply custom class', async () => {
            const { container } = render(Container, {
                props: { class: 'my-custom-class' }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('my-custom-class')).toBe(true)
        })

        it('should apply multiple custom classes', async () => {
            const { container } = render(Container, {
                props: { class: 'py-8 bg-white' }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('py-8')).toBe(true)
            expect(div?.classList.contains('bg-white')).toBe(true)
        })
    })

    describe('ui customization', () => {
        it('should apply custom root styles via ui prop', async () => {
            const { container } = render(Container, {
                props: { ui: { root: 'custom-root-class' } }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('custom-root-class')).toBe(true)
        })

        it('should allow overriding max-width via ui prop', async () => {
            const { container } = render(Container, {
                props: { ui: { root: 'max-w-4xl' } }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('max-w-4xl')).toBe(true)
        })
    })

    describe('rest props', () => {
        it('should pass through data-testid attribute', async () => {
            const { container } = render(Container, {
                props: { 'data-testid': 'my-container' }
            })

            const el = container.querySelector('[data-testid="my-container"]')
            expect(el).not.toBeNull()
        })

        it('should pass through id attribute', async () => {
            const { container } = render(Container, {
                props: { id: 'container-id' }
            })

            const el = container.querySelector('#container-id')
            expect(el).not.toBeNull()
        })

        it('should pass through aria-label attribute', async () => {
            const { container } = render(Container, {
                props: { 'aria-label': 'Main content' }
            })

            const el = container.querySelector('[aria-label="Main content"]')
            expect(el).not.toBeNull()
        })

        it('should pass through role attribute', async () => {
            const { container } = render(Container, {
                props: { role: 'region' }
            })

            const el = container.querySelector('[role="region"]')
            expect(el).not.toBeNull()
        })
    })

    describe('combining props', () => {
        it('should work with as, class, and ui props together', async () => {
            const { container } = render(Container, {
                props: {
                    as: 'section',
                    class: 'py-12',
                    ui: { root: 'bg-gray-50' }
                }
            })

            const section = container.querySelector('section')
            expect(section).not.toBeNull()
            expect(section?.classList.contains('py-12')).toBe(true)
            expect(section?.classList.contains('bg-gray-50')).toBe(true)
            expect(section?.classList.contains('mx-auto')).toBe(true)
        })
    })
})
