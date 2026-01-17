import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Marquee from './Marquee.svelte'

describe('Marquee', () => {
    describe('rendering', () => {
        it('should render a div element by default', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            expect(marquee?.tagName.toLowerCase()).toBe('div')
        })

        it('should render with custom element via as prop', async () => {
            const { container } = render(Marquee, { props: { as: 'section' } })

            const section = container.querySelector('section')
            expect(section).not.toBeNull()
        })

        it('should apply custom class', async () => {
            const { container } = render(Marquee, {
                props: { class: 'my-custom-class' }
            })

            const marquee = container.firstElementChild
            expect(marquee?.classList.contains('my-custom-class')).toBe(true)
        })
    })

    describe('base styles', () => {
        it('should have group class for hover state management', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            expect(marquee?.classList.contains('group')).toBe(true)
        })

        it('should have relative class', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            expect(marquee?.classList.contains('relative')).toBe(true)
        })

        it('should have flex class', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            expect(marquee?.classList.contains('flex')).toBe(true)
        })

        it('should have gap-4 class', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            expect(marquee?.classList.contains('gap-4')).toBe(true)
        })

        it('should have overflow-hidden class', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            expect(marquee?.classList.contains('overflow-hidden')).toBe(true)
        })
    })

    describe('repeat prop', () => {
        it('should render 4 content containers by default', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            const contentDivs = marquee?.querySelectorAll(':scope > div')
            expect(contentDivs?.length).toBe(4)
        })

        it('should render custom number of content containers', async () => {
            const { container } = render(Marquee, { props: { repeat: 2 } })

            const marquee = container.firstElementChild
            const contentDivs = marquee?.querySelectorAll(':scope > div')
            expect(contentDivs?.length).toBe(2)
        })

        it('should render 6 content containers when repeat is 6', async () => {
            const { container } = render(Marquee, { props: { repeat: 6 } })

            const marquee = container.firstElementChild
            const contentDivs = marquee?.querySelectorAll(':scope > div')
            expect(contentDivs?.length).toBe(6)
        })

        it('should render 1 content container when repeat is 1', async () => {
            const { container } = render(Marquee, { props: { repeat: 1 } })

            const marquee = container.firstElementChild
            const contentDivs = marquee?.querySelectorAll(':scope > div')
            expect(contentDivs?.length).toBe(1)
        })
    })

    describe('orientation', () => {
        it('should have flex-row class for horizontal orientation by default', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            expect(marquee?.classList.contains('flex-row')).toBe(true)
        })

        it('should have flex-col class for vertical orientation', async () => {
            const { container } = render(Marquee, { props: { orientation: 'vertical' } })

            const marquee = container.firstElementChild
            expect(marquee?.classList.contains('flex-col')).toBe(true)
        })

        it('should apply horizontal animation class to content', async () => {
            const { container } = render(Marquee)

            const content = container.querySelector('.animate-marquee-horizontal')
            expect(content).not.toBeNull()
        })

        it('should apply vertical animation class to content', async () => {
            const { container } = render(Marquee, { props: { orientation: 'vertical' } })

            const content = container.querySelector('.animate-marquee-vertical')
            expect(content).not.toBeNull()
        })
    })

    describe('reverse prop', () => {
        it('should not have direction-reverse class by default', async () => {
            const { container } = render(Marquee)

            const content = container.querySelector('.direction-reverse')
            expect(content).toBeNull()
        })

        it('should have direction-reverse class when reverse is true', async () => {
            const { container } = render(Marquee, { props: { reverse: true } })

            const content = container.querySelector('.direction-reverse')
            expect(content).not.toBeNull()
        })
    })

    describe('pauseOnHover prop', () => {
        it('should not have pause class by default', async () => {
            const { container } = render(Marquee)

            const content = container.querySelector('[class*="group-hover"]')
            expect(content).toBeNull()
        })

        it('should have pause class when pauseOnHover is true', async () => {
            const { container } = render(Marquee, { props: { pauseOnHover: true } })

            const marquee = container.firstElementChild
            const contentDivs = marquee?.querySelectorAll(':scope > div')
            const hasHoverPause = Array.from(contentDivs || []).some((div) =>
                div.className.includes('group-hover:')
            )
            expect(hasHoverPause).toBe(true)
        })
    })

    describe('overlay prop', () => {
        it('should have overlay pseudo-elements by default', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            // Check for before/after pseudo-element classes
            const hasBeforeClass = marquee?.className.includes('before:')
            const hasAfterClass = marquee?.className.includes('after:')
            expect(hasBeforeClass).toBe(true)
            expect(hasAfterClass).toBe(true)
        })

        it('should not have overlay pseudo-elements when overlay is false', async () => {
            const { container } = render(Marquee, { props: { overlay: false } })

            const marquee = container.firstElementChild
            const hasBeforeClass = marquee?.className.includes('before:')
            const hasAfterClass = marquee?.className.includes('after:')
            expect(hasBeforeClass).toBe(false)
            expect(hasAfterClass).toBe(false)
        })

        it('should have horizontal gradient for horizontal orientation', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            const hasLeftGradient = marquee?.className.includes('before:bg-gradient-to-r')
            const hasRightGradient = marquee?.className.includes('after:bg-gradient-to-l')
            expect(hasLeftGradient).toBe(true)
            expect(hasRightGradient).toBe(true)
        })

        it('should have vertical gradient for vertical orientation', async () => {
            const { container } = render(Marquee, { props: { orientation: 'vertical' } })

            const marquee = container.firstElementChild
            const hasTopGradient = marquee?.className.includes('before:bg-gradient-to-b')
            const hasBottomGradient = marquee?.className.includes('after:bg-gradient-to-t')
            expect(hasTopGradient).toBe(true)
            expect(hasBottomGradient).toBe(true)
        })
    })

    describe('content styles', () => {
        it('should have flex class on content containers', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            const contentDiv = marquee?.querySelector(':scope > div')
            expect(contentDiv?.classList.contains('flex')).toBe(true)
        })

        it('should have shrink-0 class on content containers', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            const contentDiv = marquee?.querySelector(':scope > div')
            expect(contentDiv?.classList.contains('shrink-0')).toBe(true)
        })

        it('should have items-center class on content containers', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            const contentDiv = marquee?.querySelector(':scope > div')
            expect(contentDiv?.classList.contains('items-center')).toBe(true)
        })

        it('should have gap-4 class on content containers', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            const contentDiv = marquee?.querySelector(':scope > div')
            expect(contentDiv?.classList.contains('gap-4')).toBe(true)
        })
    })

    describe('accessibility', () => {
        it('should not have aria-hidden on first content container', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            const contentDivs = marquee?.querySelectorAll(':scope > div')
            expect(contentDivs?.[0]?.hasAttribute('aria-hidden')).toBe(false)
        })

        it('should have aria-hidden="true" on subsequent content containers', async () => {
            const { container } = render(Marquee)

            const marquee = container.firstElementChild
            const contentDivs = marquee?.querySelectorAll(':scope > div')
            expect(contentDivs?.[1]?.getAttribute('aria-hidden')).toBe('true')
            expect(contentDivs?.[2]?.getAttribute('aria-hidden')).toBe('true')
            expect(contentDivs?.[3]?.getAttribute('aria-hidden')).toBe('true')
        })
    })

    describe('ui customization', () => {
        it('should apply custom root styles via ui prop', async () => {
            const { container } = render(Marquee, {
                props: { ui: { root: 'custom-root-class' } }
            })

            const marquee = container.firstElementChild
            expect(marquee?.classList.contains('custom-root-class')).toBe(true)
        })

        it('should apply custom content styles via ui prop', async () => {
            const { container } = render(Marquee, {
                props: { ui: { content: 'custom-content-class' } }
            })

            const content = container.querySelector('.custom-content-class')
            expect(content).not.toBeNull()
        })

        it('should apply both root and content custom classes', async () => {
            const { container } = render(Marquee, {
                props: {
                    ui: {
                        root: 'custom-root',
                        content: 'custom-content'
                    }
                }
            })

            const marquee = container.firstElementChild
            expect(marquee?.classList.contains('custom-root')).toBe(true)
            const content = container.querySelector('.custom-content')
            expect(content).not.toBeNull()
        })
    })

    describe('rest props', () => {
        it('should pass through additional attributes', async () => {
            const { container } = render(Marquee, {
                props: { 'data-testid': 'my-marquee' }
            })

            const marquee = container.querySelector('[data-testid="my-marquee"]')
            expect(marquee).not.toBeNull()
        })

        it('should pass through id attribute', async () => {
            const { container } = render(Marquee, {
                props: { id: 'marquee-id' }
            })

            const marquee = container.querySelector('#marquee-id')
            expect(marquee).not.toBeNull()
        })

        it('should pass through aria-label attribute', async () => {
            const { container } = render(Marquee, {
                props: { 'aria-label': 'Scrolling content' }
            })

            const marquee = container.querySelector('[aria-label="Scrolling content"]')
            expect(marquee).not.toBeNull()
        })
    })

    describe('combined variants', () => {
        it('should work with vertical orientation and reverse', async () => {
            const { container } = render(Marquee, {
                props: { orientation: 'vertical', reverse: true }
            })

            const marquee = container.firstElementChild
            expect(marquee?.classList.contains('flex-col')).toBe(true)

            const content = container.querySelector('.direction-reverse')
            expect(content).not.toBeNull()
        })

        it('should work with pauseOnHover and no overlay', async () => {
            const { container } = render(Marquee, {
                props: { pauseOnHover: true, overlay: false }
            })

            const marquee = container.firstElementChild
            const hasBeforeClass = marquee?.className.includes('before:')
            expect(hasBeforeClass).toBe(false)

            const contentDivs = marquee?.querySelectorAll(':scope > div')
            const hasHoverPause = Array.from(contentDivs || []).some((div) =>
                div.className.includes('group-hover:')
            )
            expect(hasHoverPause).toBe(true)
        })

        it('should work with all props combined', async () => {
            const { container } = render(Marquee, {
                props: {
                    orientation: 'vertical',
                    reverse: true,
                    pauseOnHover: true,
                    overlay: true,
                    repeat: 3
                }
            })

            const marquee = container.firstElementChild
            expect(marquee?.classList.contains('flex-col')).toBe(true)

            const contentDivs = marquee?.querySelectorAll(':scope > div')
            expect(contentDivs?.length).toBe(3)

            const hasDirection = container.querySelector('.direction-reverse')
            expect(hasDirection).not.toBeNull()
        })
    })
})
