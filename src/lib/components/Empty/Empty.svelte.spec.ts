import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Empty from './Empty.svelte'

// Helper to wait for SVG to render (Iconify loads icons async)
async function waitForSvg(container: Element): Promise<SVGElement | null> {
    // Wait up to 1000ms for SVG to appear
    for (let i = 0; i < 20; i++) {
        const svg = container.querySelector('svg')
        if (svg) return svg
        await new Promise((r) => setTimeout(r, 50))
    }
    return null
}

describe('Empty', () => {
    describe('rendering', () => {
        it('should render a div element by default', async () => {
            const { container } = render(Empty)

            const div = container.querySelector('div')
            expect(div).not.toBeNull()
        })

        it('should render with custom element via as prop', async () => {
            const { container } = render(Empty, { props: { as: 'section' } })

            const section = container.querySelector('section')
            expect(section).not.toBeNull()
        })

        it('should render title', async () => {
            const { container } = render(Empty, { props: { title: 'No results' } })

            expect(container.textContent).toContain('No results')
        })

        it('should render description', async () => {
            const { container } = render(Empty, {
                props: { description: 'Try adjusting your search' }
            })

            expect(container.textContent).toContain('Try adjusting your search')
        })

        it('should render both title and description', async () => {
            const { container } = render(Empty, {
                props: {
                    title: 'No results found',
                    description: 'Try a different search term'
                }
            })

            expect(container.textContent).toContain('No results found')
            expect(container.textContent).toContain('Try a different search term')
        })

        it('should apply custom class', async () => {
            const { container } = render(Empty, {
                props: { class: 'my-custom-class' }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('my-custom-class')).toBe(true)
        })
    })

    describe('variants', () => {
        it('should render outline variant by default', async () => {
            const { container } = render(Empty)

            const div = container.querySelector('div')
            expect(div?.classList.contains('ring-1')).toBe(true)
        })

        it('should render solid variant', async () => {
            const { container } = render(Empty, { props: { variant: 'solid' } })

            const div = container.querySelector('div')
            expect(div?.classList.contains('bg-neutral-900')).toBe(true)
        })

        it('should render soft variant', async () => {
            const { container } = render(Empty, { props: { variant: 'soft' } })

            const div = container.querySelector('div')
            expect(div?.className).toContain('bg-neutral-100/50')
        })

        it('should render subtle variant', async () => {
            const { container } = render(Empty, { props: { variant: 'subtle' } })

            const div = container.querySelector('div')
            expect(div?.classList.contains('ring-1')).toBe(true)
            expect(div?.classList.contains('bg-neutral-50')).toBe(true)
        })

        it('should render naked variant', async () => {
            const { container } = render(Empty, { props: { variant: 'naked' } })

            const div = container.querySelector('div')
            expect(div?.classList.contains('bg-transparent')).toBe(true)
        })
    })

    describe('sizes', () => {
        it('should render md size by default', async () => {
            const { container } = render(Empty)

            const div = container.querySelector('div')
            expect(div?.classList.contains('p-6')).toBe(true)
        })

        it('should render xs size', async () => {
            const { container } = render(Empty, { props: { size: 'xs' } })

            const div = container.querySelector('div')
            expect(div?.classList.contains('p-4')).toBe(true)
        })

        it('should render sm size', async () => {
            const { container } = render(Empty, { props: { size: 'sm' } })

            const div = container.querySelector('div')
            expect(div?.classList.contains('p-5')).toBe(true)
        })

        it('should render lg size', async () => {
            const { container } = render(Empty, { props: { size: 'lg' } })

            const div = container.querySelector('div')
            expect(div?.classList.contains('p-8')).toBe(true)
        })

        it('should render xl size', async () => {
            const { container } = render(Empty, { props: { size: 'xl' } })

            const div = container.querySelector('div')
            expect(div?.classList.contains('p-10')).toBe(true)
        })
    })

    describe('icon', () => {
        it('should render icon when provided', async () => {
            const { container } = render(Empty, {
                props: { icon: 'lucide:inbox' }
            })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
        })

        it('should apply icon size based on component size', async () => {
            const { container } = render(Empty, {
                props: { icon: 'lucide:inbox', size: 'lg' }
            })

            const svg = await waitForSvg(container)
            expect(svg?.classList.contains('size-14')).toBe(true)
        })
    })

    describe('avatar', () => {
        it('should render avatar when provided', async () => {
            const { container } = render(Empty, {
                props: { avatar: { src: 'https://example.com/avatar.jpg' } }
            })

            const avatar = container.querySelector('img')
            expect(avatar).not.toBeNull()
        })

        it('should not render avatar when icon is provided', async () => {
            const { container } = render(Empty, {
                props: {
                    icon: 'lucide:inbox',
                    avatar: { src: 'https://example.com/avatar.jpg' }
                }
            })

            const svg = await waitForSvg(container)
            const avatarContainer = container.querySelectorAll('img')
            expect(svg).not.toBeNull()
            // Avatar should not be rendered when icon is present
            expect(avatarContainer.length).toBe(0)
        })
    })

    describe('actions', () => {
        it('should render action buttons', async () => {
            const { container } = render(Empty, {
                props: {
                    actions: [
                        { label: 'Create new' },
                        { label: 'Import' }
                    ]
                }
            })

            expect(container.textContent).toContain('Create new')
            expect(container.textContent).toContain('Import')
        })

        it('should render single action button', async () => {
            const { container } = render(Empty, {
                props: {
                    actions: [{ label: 'Get started' }]
                }
            })

            const buttons = container.querySelectorAll('button')
            expect(buttons.length).toBe(1)
            expect(container.textContent).toContain('Get started')
        })
    })

    describe('ui customization', () => {
        it('should apply custom root styles via ui prop', async () => {
            const { container } = render(Empty, {
                props: { ui: { root: 'custom-root-class' } }
            })

            const div = container.querySelector('div')
            expect(div?.classList.contains('custom-root-class')).toBe(true)
        })

        it('should apply custom title styles via ui prop', async () => {
            const { container } = render(Empty, {
                props: {
                    title: 'Test title',
                    ui: { title: 'custom-title-class' }
                }
            })

            const title = container.querySelector('.custom-title-class')
            expect(title).not.toBeNull()
        })

        it('should apply custom description styles via ui prop', async () => {
            const { container } = render(Empty, {
                props: {
                    description: 'Test description',
                    ui: { description: 'custom-desc-class' }
                }
            })

            const description = container.querySelector('.custom-desc-class')
            expect(description).not.toBeNull()
        })
    })

    describe('rest props', () => {
        it('should pass through additional attributes', async () => {
            const { container } = render(Empty, {
                props: { 'data-testid': 'my-empty' }
            })

            const empty = container.querySelector('[data-testid="my-empty"]')
            expect(empty).not.toBeNull()
        })

        it('should pass through id attribute', async () => {
            const { container } = render(Empty, {
                props: { id: 'empty-id' }
            })

            const empty = container.querySelector('#empty-id')
            expect(empty).not.toBeNull()
        })
    })
})
