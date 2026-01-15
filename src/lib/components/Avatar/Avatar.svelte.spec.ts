import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Avatar from './Avatar.svelte'

// Helper to wait for icon SVG to render (Iconify loads icons async)
async function waitForSvg(container: Element): Promise<SVGElement | null> {
    for (let i = 0; i < 20; i++) {
        const svg = container.querySelector('svg')
        if (svg) return svg
        await new Promise((r) => setTimeout(r, 50))
    }
    return null
}

describe('Avatar', () => {
    describe('rendering', () => {
        it('should render a span element by default', async () => {
            const { container } = render(Avatar, { props: { alt: 'John Doe' } })

            const avatar = container.firstElementChild
            expect(avatar?.tagName.toLowerCase()).toBe('span')
        })

        it('should render as different element when as prop is provided', async () => {
            const { container } = render(Avatar, { props: { as: 'div', alt: 'John Doe' } })

            const avatar = container.querySelector('div')
            expect(avatar).not.toBeNull()
        })

        it('should apply custom class', async () => {
            const { container } = render(Avatar, {
                props: { alt: 'John', class: 'my-custom-class' }
            })

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('my-custom-class')).toBe(true)
        })

        it('should have inline-flex class', async () => {
            const { container } = render(Avatar)

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('inline-flex')).toBe(true)
        })

        it('should have rounded-full class', async () => {
            const { container } = render(Avatar)

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('rounded-full')).toBe(true)
        })

        it('should have overflow-hidden class', async () => {
            const { container } = render(Avatar)

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('overflow-hidden')).toBe(true)
        })
    })

    describe('sizes', () => {
        it('should render md size by default', async () => {
            const { container } = render(Avatar)

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('size-8')).toBe(true)
        })

        it('should render 3xs size', async () => {
            const { container } = render(Avatar, { props: { size: '3xs' } })

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('size-4')).toBe(true)
        })

        it('should render 2xs size', async () => {
            const { container } = render(Avatar, { props: { size: '2xs' } })

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('size-5')).toBe(true)
        })

        it('should render xs size', async () => {
            const { container } = render(Avatar, { props: { size: 'xs' } })

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('size-6')).toBe(true)
        })

        it('should render sm size', async () => {
            const { container } = render(Avatar, { props: { size: 'sm' } })

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('size-7')).toBe(true)
        })

        it('should render lg size', async () => {
            const { container } = render(Avatar, { props: { size: 'lg' } })

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('size-9')).toBe(true)
        })

        it('should render xl size', async () => {
            const { container } = render(Avatar, { props: { size: 'xl' } })

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('size-10')).toBe(true)
        })

        it('should render 2xl size', async () => {
            const { container } = render(Avatar, { props: { size: '2xl' } })

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('size-11')).toBe(true)
        })

        it('should render 3xl size', async () => {
            const { container } = render(Avatar, { props: { size: '3xl' } })

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('size-12')).toBe(true)
        })
    })

    describe('image', () => {
        it('should render image when src is provided', async () => {
            const { container } = render(Avatar, {
                props: { src: 'https://example.com/avatar.jpg', alt: 'John Doe' }
            })

            const img = container.querySelector('img')
            expect(img).not.toBeNull()
            expect(img?.src).toBe('https://example.com/avatar.jpg')
        })

        it('should set alt attribute on image', async () => {
            const { container } = render(Avatar, {
                props: { src: 'https://example.com/avatar.jpg', alt: 'John Doe' }
            })

            const img = container.querySelector('img')
            expect(img?.alt).toBe('John Doe')
        })

        it('should have object-cover class on image', async () => {
            const { container } = render(Avatar, {
                props: { src: 'https://example.com/avatar.jpg', alt: 'John' }
            })

            const img = container.querySelector('img')
            expect(img?.classList.contains('object-cover')).toBe(true)
        })
    })

    describe('fallback - initials', () => {
        it('should show initials when no src provided', async () => {
            const { container } = render(Avatar, { props: { alt: 'John Doe' } })

            expect(container.textContent).toContain('JD')
        })

        it('should show single initial for single word name', async () => {
            const { container } = render(Avatar, { props: { alt: 'John' } })

            expect(container.textContent).toContain('J')
        })

        it('should limit initials to 2 characters', async () => {
            const { container } = render(Avatar, { props: { alt: 'John Michael Doe' } })

            expect(container.textContent).toContain('JM')
        })

        it('should uppercase initials', async () => {
            const { container } = render(Avatar, { props: { alt: 'john doe' } })

            expect(container.textContent).toContain('JD')
        })
    })

    describe('fallback - text', () => {
        it('should show text prop over initials', async () => {
            const { container } = render(Avatar, {
                props: { alt: 'John Doe', text: 'AB' }
            })

            expect(container.textContent).toContain('AB')
            expect(container.textContent).not.toContain('JD')
        })

        it('should show text when no alt provided', async () => {
            const { container } = render(Avatar, { props: { text: 'XY' } })

            expect(container.textContent).toContain('XY')
        })
    })

    describe('fallback - icon', () => {
        it('should show icon when provided and no src', async () => {
            const { container } = render(Avatar, {
                props: { icon: 'lucide:user' }
            })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
        })

        it('should prefer icon over text', async () => {
            const { container } = render(Avatar, {
                props: { icon: 'lucide:user', text: 'AB' }
            })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
            // Text should not be rendered when icon is provided
            expect(container.textContent).not.toContain('AB')
        })
    })

    describe('HTML attributes', () => {
        it('should pass through id attribute', async () => {
            const { container } = render(Avatar, {
                props: { id: 'my-avatar', alt: 'John' }
            })

            const avatar = container.firstElementChild
            expect(avatar?.id).toBe('my-avatar')
        })

        it('should pass through data attributes', async () => {
            const { container } = render(Avatar, {
                props: { 'data-testid': 'avatar-test', alt: 'John' }
            })

            const avatar = container.firstElementChild
            expect(avatar?.getAttribute('data-testid')).toBe('avatar-test')
        })

        it('should pass through aria-label', async () => {
            const { container } = render(Avatar, {
                props: { 'aria-label': 'User avatar', alt: 'John' }
            })

            const avatar = container.firstElementChild
            expect(avatar?.getAttribute('aria-label')).toBe('User avatar')
        })
    })

    describe('ui prop', () => {
        it('should apply custom root class via ui prop', async () => {
            const { container } = render(Avatar, {
                props: { ui: { root: 'custom-root-class' }, alt: 'John' }
            })

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('custom-root-class')).toBe(true)
        })

        it('should apply custom fallback class via ui prop', async () => {
            const { container } = render(Avatar, {
                props: { ui: { fallback: 'custom-fallback-class' }, alt: 'John' }
            })

            const fallback = container.querySelector('.custom-fallback-class')
            expect(fallback).not.toBeNull()
        })

        it('should apply custom image class via ui prop', async () => {
            const { container } = render(Avatar, {
                props: {
                    src: 'https://example.com/avatar.jpg',
                    ui: { image: 'custom-image-class' }
                }
            })

            const img = container.querySelector('.custom-image-class')
            expect(img).not.toBeNull()
        })
    })

    describe('styling', () => {
        it('should have background color classes', async () => {
            const { container } = render(Avatar)

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('bg-neutral-100')).toBe(true)
        })

        it('should have items-center class', async () => {
            const { container } = render(Avatar)

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('items-center')).toBe(true)
        })

        it('should have justify-center class', async () => {
            const { container } = render(Avatar)

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('justify-center')).toBe(true)
        })

        it('should have shrink-0 class', async () => {
            const { container } = render(Avatar)

            const avatar = container.firstElementChild
            expect(avatar?.classList.contains('shrink-0')).toBe(true)
        })
    })
})
