import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Card from './Card.svelte'

describe('Card', () => {
    describe('rendering', () => {
        it('should render a div element by default', async () => {
            const { container } = render(Card)

            const card = container.querySelector('div')
            expect(card).not.toBeNull()
        })

        it('should render as different element when as prop is provided', async () => {
            const { container } = render(Card, { props: { as: 'article' } })

            const card = container.querySelector('article')
            expect(card).not.toBeNull()
        })

        it('should render as section element', async () => {
            const { container } = render(Card, { props: { as: 'section' } })

            const card = container.querySelector('section')
            expect(card).not.toBeNull()
        })

        it('should apply custom class', async () => {
            const { container } = render(Card, {
                props: { class: 'my-custom-class' }
            })

            const card = container.firstElementChild
            expect(card?.classList.contains('my-custom-class')).toBe(true)
        })

        it('should have rounded-lg class', async () => {
            const { container } = render(Card)

            const card = container.firstElementChild
            expect(card?.classList.contains('rounded-lg')).toBe(true)
        })

        it('should have overflow-hidden class', async () => {
            const { container } = render(Card)

            const card = container.firstElementChild
            expect(card?.classList.contains('overflow-hidden')).toBe(true)
        })
    })

    describe('variants', () => {
        it('should render outline variant by default', async () => {
            const { container } = render(Card)

            const card = container.firstElementChild
            expect(card?.classList.contains('ring-1')).toBe(true)
            expect(card?.classList.contains('bg-white')).toBe(true)
        })

        it('should render solid variant', async () => {
            const { container } = render(Card, {
                props: { variant: 'solid' }
            })

            const card = container.firstElementChild
            expect(card?.classList.contains('bg-neutral-900')).toBe(true)
            expect(card?.classList.contains('text-white')).toBe(true)
        })

        it('should render soft variant', async () => {
            const { container } = render(Card, {
                props: { variant: 'soft' }
            })

            const card = container.firstElementChild
            expect(card?.classList.contains('bg-neutral-50')).toBe(true)
        })

        it('should render subtle variant', async () => {
            const { container } = render(Card, {
                props: { variant: 'subtle' }
            })

            const card = container.firstElementChild
            expect(card?.classList.contains('bg-neutral-50')).toBe(true)
            expect(card?.classList.contains('ring-1')).toBe(true)
        })
    })

    describe('slots', () => {
        it('should render header when provided', async () => {
            const { container } = render(Card, {
                props: {
                    header: (() => {
                        const el = document.createElement('span')
                        el.textContent = 'Header Content'
                        return el
                    }) as unknown as import('svelte').Snippet
                }
            })

            // Header should have border-b class
            const headerDiv = container.querySelector('.border-b')
            expect(headerDiv).not.toBeNull()
        })

        it('should render footer when provided', async () => {
            const { container } = render(Card, {
                props: {
                    footer: (() => {
                        const el = document.createElement('span')
                        el.textContent = 'Footer Content'
                        return el
                    }) as unknown as import('svelte').Snippet
                }
            })

            // Footer should have border-t class
            const footerDiv = container.querySelector('.border-t')
            expect(footerDiv).not.toBeNull()
        })

        it('should not render header div when header is not provided', async () => {
            const { container } = render(Card)

            const headerDiv = container.querySelector('.border-b')
            expect(headerDiv).toBeNull()
        })

        it('should not render footer div when footer is not provided', async () => {
            const { container } = render(Card)

            const footerDiv = container.querySelector('.border-t')
            expect(footerDiv).toBeNull()
        })
    })

    describe('ui prop', () => {
        it('should apply custom root class via ui prop', async () => {
            const { container } = render(Card, {
                props: { ui: { root: 'custom-root-class' } }
            })

            const card = container.firstElementChild
            expect(card?.classList.contains('custom-root-class')).toBe(true)
        })
    })

    describe('HTML attributes', () => {
        it('should pass through id attribute', async () => {
            const { container } = render(Card, {
                props: { id: 'my-card' }
            })

            const card = container.firstElementChild
            expect(card?.id).toBe('my-card')
        })

        it('should pass through data attributes', async () => {
            const { container } = render(Card, {
                props: { 'data-testid': 'card-test' }
            })

            const card = container.firstElementChild
            expect(card?.getAttribute('data-testid')).toBe('card-test')
        })

        it('should pass through aria attributes', async () => {
            const { container } = render(Card, {
                props: { 'aria-label': 'Card description' }
            })

            const card = container.firstElementChild
            expect(card?.getAttribute('aria-label')).toBe('Card description')
        })

        it('should pass through role attribute', async () => {
            const { container } = render(Card, {
                props: { role: 'region' }
            })

            const card = container.firstElementChild
            expect(card?.getAttribute('role')).toBe('region')
        })
    })

    describe('styling classes', () => {
        it('should have padding classes on header', async () => {
            const { container } = render(Card, {
                props: {
                    header: (() => document.createElement('span')) as unknown as import('svelte').Snippet
                }
            })

            const headerDiv = container.querySelector('.border-b')
            expect(headerDiv?.classList.contains('px-4')).toBe(true)
            expect(headerDiv?.classList.contains('py-4')).toBe(true)
        })

        it('should have padding classes on body', async () => {
            const { container } = render(Card, {
                props: {
                    children: (() => document.createElement('span')) as unknown as import('svelte').Snippet
                }
            })

            // Body is the div without border classes
            const divs = container.querySelectorAll('div > div')
            const bodyDiv = Array.from(divs).find(
                (div) => div.classList.contains('px-4') && !div.classList.contains('border-b') && !div.classList.contains('border-t')
            )
            expect(bodyDiv).not.toBeNull()
            expect(bodyDiv?.classList.contains('py-4')).toBe(true)
        })

        it('should have padding classes on footer', async () => {
            const { container } = render(Card, {
                props: {
                    footer: (() => document.createElement('span')) as unknown as import('svelte').Snippet
                }
            })

            const footerDiv = container.querySelector('.border-t')
            expect(footerDiv?.classList.contains('px-4')).toBe(true)
            expect(footerDiv?.classList.contains('py-4')).toBe(true)
        })
    })
})
