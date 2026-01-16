import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import User from './User.svelte'

describe('User', () => {
    describe('rendering', () => {
        it('should render with default div element', async () => {
            const { container } = render(User, { props: { name: 'John Doe' } })

            const root = container.querySelector('div')
            expect(root).not.toBeNull()
        })

        it('should render as custom element via as prop', async () => {
            const { container } = render(User, {
                props: { name: 'John', as: 'span' }
            })

            const root = container.querySelector('span')
            expect(root).not.toBeNull()
        })

        it('should render as anchor when href is provided', async () => {
            const { container } = render(User, {
                props: { name: 'John', href: '/profile' }
            })

            const anchor = container.querySelector('a')
            expect(anchor).not.toBeNull()
            expect(anchor?.getAttribute('href')).toBe('/profile')
        })

        it('should apply target attribute on anchor', async () => {
            const { container } = render(User, {
                props: { name: 'John', href: '/profile', target: '_blank' }
            })

            const anchor = container.querySelector('a')
            expect(anchor?.getAttribute('target')).toBe('_blank')
        })

        it('should apply custom class', async () => {
            const { container } = render(User, {
                props: { name: 'John', class: 'my-custom-class' }
            })

            const root = container.firstElementChild
            expect(root?.classList.contains('my-custom-class')).toBe(true)
        })

        it('should have inline-flex class', async () => {
            const { container } = render(User, { props: { name: 'John' } })

            const root = container.firstElementChild
            expect(root?.classList.contains('inline-flex')).toBe(true)
        })

        it('should have items-center class', async () => {
            const { container } = render(User, { props: { name: 'John' } })

            const root = container.firstElementChild
            expect(root?.classList.contains('items-center')).toBe(true)
        })

        it('should have gap-2 class', async () => {
            const { container } = render(User, { props: { name: 'John' } })

            const root = container.firstElementChild
            expect(root?.classList.contains('gap-2')).toBe(true)
        })
    })

    describe('name', () => {
        it('should display name text', async () => {
            const { container } = render(User, { props: { name: 'John Doe' } })

            expect(container.textContent).toContain('John Doe')
        })

        it('should apply name styling classes', async () => {
            const { container } = render(User, { props: { name: 'John' } })

            const wrapper = container.querySelector('.min-w-0')
            const nameEl = wrapper?.firstElementChild
            expect(nameEl?.classList.contains('font-medium')).toBe(true)
            expect(nameEl?.classList.contains('truncate')).toBe(true)
        })
    })

    describe('description', () => {
        it('should display description text', async () => {
            const { container } = render(User, {
                props: { name: 'John', description: 'Software Engineer' }
            })

            expect(container.textContent).toContain('Software Engineer')
        })

        it('should apply description styling classes', async () => {
            const { container } = render(User, {
                props: { name: 'John', description: 'Engineer' }
            })

            const wrapper = container.querySelector('.min-w-0')
            const descEl = wrapper?.lastElementChild
            expect(descEl?.classList.contains('text-neutral-500')).toBe(true)
            expect(descEl?.classList.contains('truncate')).toBe(true)
        })

        it('should render description without name', async () => {
            const { container } = render(User, {
                props: { description: 'Just a description' }
            })

            expect(container.textContent).toContain('Just a description')
        })
    })

    describe('avatar', () => {
        it('should render avatar when avatar prop is provided', async () => {
            const { container } = render(User, {
                props: { name: 'John', avatar: { alt: 'John Doe' } }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar).not.toBeNull()
        })

        it('should pass avatar props to Avatar component', async () => {
            const { container } = render(User, {
                props: {
                    name: 'John',
                    avatar: { src: 'https://example.com/avatar.jpg', alt: 'John' }
                }
            })

            const img = container.querySelector('[data-avatar-image]')
            expect(img?.getAttribute('src')).toBe('https://example.com/avatar.jpg')
        })

        it('should apply shrink-0 class to avatar', async () => {
            const { container } = render(User, {
                props: { name: 'John', avatar: { alt: 'John' } }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar?.classList.contains('shrink-0')).toBe(true)
        })
    })

    describe('sizes', () => {
        it('should render md size by default', async () => {
            const { container } = render(User, { props: { name: 'John' } })

            const wrapper = container.querySelector('.min-w-0')
            const nameEl = wrapper?.firstElementChild
            expect(nameEl?.classList.contains('text-sm')).toBe(true)
        })

        it('should render xs size', async () => {
            const { container } = render(User, {
                props: { name: 'John', size: 'xs' }
            })

            const wrapper = container.querySelector('.min-w-0')
            const nameEl = wrapper?.firstElementChild
            expect(nameEl?.classList.contains('text-xs')).toBe(true)
        })

        it('should render lg size', async () => {
            const { container } = render(User, {
                props: { name: 'John', description: 'Desc', size: 'lg' }
            })

            const wrapper = container.querySelector('.min-w-0')
            const descEl = wrapper?.lastElementChild
            expect(descEl?.classList.contains('text-sm')).toBe(true)
        })

        it('should render xl size', async () => {
            const { container } = render(User, {
                props: { name: 'John', size: 'xl' }
            })

            const wrapper = container.querySelector('.min-w-0')
            const nameEl = wrapper?.firstElementChild
            expect(nameEl?.classList.contains('text-base')).toBe(true)
        })

        it('should map avatar size based on user size', async () => {
            const { container } = render(User, {
                props: { name: 'John', avatar: { alt: 'John' }, size: 'lg' }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar?.classList.contains('size-9')).toBe(true)
        })
    })

    describe('orientation', () => {
        it('should render horizontal by default', async () => {
            const { container } = render(User, { props: { name: 'John' } })

            const root = container.firstElementChild
            expect(root?.classList.contains('flex-row')).toBe(true)
        })

        it('should render vertical orientation', async () => {
            const { container } = render(User, {
                props: { name: 'John', orientation: 'vertical' }
            })

            const root = container.firstElementChild
            expect(root?.classList.contains('flex-col')).toBe(true)
        })

        it('should center text in vertical orientation', async () => {
            const { container } = render(User, {
                props: { name: 'John', orientation: 'vertical' }
            })

            const root = container.firstElementChild
            expect(root?.classList.contains('text-center')).toBe(true)
        })

        it('should align text left in horizontal orientation', async () => {
            const { container } = render(User, {
                props: { name: 'John', orientation: 'horizontal' }
            })

            const wrapper = container.querySelector('.min-w-0')
            expect(wrapper?.classList.contains('text-left')).toBe(true)
        })
    })

    describe('clickable', () => {
        it('should have cursor-pointer when href is provided', async () => {
            const { container } = render(User, {
                props: { name: 'John', href: '/profile' }
            })

            const root = container.firstElementChild
            expect(root?.classList.contains('cursor-pointer')).toBe(true)
        })

        it('should have hover styles when clickable', async () => {
            const { container } = render(User, {
                props: { name: 'John', href: '/profile' }
            })

            const root = container.firstElementChild
            expect(root?.classList.contains('rounded-lg')).toBe(true)
            expect(root?.classList.contains('transition-colors')).toBe(true)
        })

        it('should not have clickable styles when no href', async () => {
            const { container } = render(User, { props: { name: 'John' } })

            const root = container.firstElementChild
            expect(root?.classList.contains('cursor-pointer')).toBe(false)
        })
    })

    describe('chip', () => {
        it('should not render chip when chip is false/undefined', async () => {
            const { container } = render(User, {
                props: { name: 'John', avatar: { alt: 'John' } }
            })

            const chipSpan = container.querySelector('span.absolute.rounded-full')
            expect(chipSpan).toBeNull()
        })
    })

    describe('ui prop', () => {
        it('should apply custom root class via ui prop', async () => {
            const { container } = render(User, {
                props: { name: 'John', ui: { root: 'custom-root' } }
            })

            const root = container.firstElementChild
            expect(root?.classList.contains('custom-root')).toBe(true)
        })

        it('should apply custom wrapper class via ui prop', async () => {
            const { container } = render(User, {
                props: { name: 'John', ui: { wrapper: 'custom-wrapper' } }
            })

            const wrapper = container.querySelector('.custom-wrapper')
            expect(wrapper).not.toBeNull()
        })

        it('should apply custom name class via ui prop', async () => {
            const { container } = render(User, {
                props: { name: 'John', ui: { name: 'custom-name' } }
            })

            const name = container.querySelector('.custom-name')
            expect(name).not.toBeNull()
        })

        it('should apply custom description class via ui prop', async () => {
            const { container } = render(User, {
                props: {
                    name: 'John',
                    description: 'Desc',
                    ui: { description: 'custom-desc' }
                }
            })

            const desc = container.querySelector('.custom-desc')
            expect(desc).not.toBeNull()
        })

        it('should apply custom avatar class via ui prop', async () => {
            const { container } = render(User, {
                props: {
                    name: 'John',
                    avatar: { alt: 'John' },
                    ui: { avatar: 'custom-avatar' }
                }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar?.classList.contains('custom-avatar')).toBe(true)
        })
    })

    describe('HTML attributes', () => {
        it('should pass through id attribute', async () => {
            const { container } = render(User, {
                props: { name: 'John', id: 'my-user' }
            })

            const root = container.firstElementChild
            expect(root?.id).toBe('my-user')
        })

        it('should pass through data attributes', async () => {
            const { container } = render(User, {
                props: { name: 'John', 'data-testid': 'user-test' }
            })

            const root = container.firstElementChild
            expect(root?.getAttribute('data-testid')).toBe('user-test')
        })

        it('should pass through aria attributes', async () => {
            const { container } = render(User, {
                props: { name: 'John', 'aria-label': 'User profile' }
            })

            const root = container.firstElementChild
            expect(root?.getAttribute('aria-label')).toBe('User profile')
        })
    })

    describe('empty states', () => {
        it('should render without name or description', async () => {
            const { container } = render(User, {
                props: { avatar: { alt: 'John' } }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar).not.toBeNull()
        })

        it('should not render wrapper when no content', async () => {
            const { container } = render(User, {
                props: { avatar: { alt: 'John' } }
            })

            const wrapper = container.querySelector('.min-w-0')
            expect(wrapper).toBeNull()
        })

        it('should render wrapper when only name is provided', async () => {
            const { container } = render(User, { props: { name: 'John' } })

            const wrapper = container.querySelector('.min-w-0')
            expect(wrapper).not.toBeNull()
        })
    })
})
