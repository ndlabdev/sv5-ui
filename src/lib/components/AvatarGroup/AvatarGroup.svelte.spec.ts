import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import AvatarGroup from './AvatarGroup.svelte'

describe('AvatarGroup', () => {
    describe('rendering', () => {
        it('should render a div element by default', async () => {
            const { container } = render(AvatarGroup)

            const group = container.firstElementChild
            expect(group?.tagName.toLowerCase()).toBe('div')
        })

        it('should render as different element when as prop is provided', async () => {
            const { container } = render(AvatarGroup, { props: { as: 'section' } })

            const group = container.querySelector('section')
            expect(group).not.toBeNull()
        })

        it('should apply custom class', async () => {
            const { container } = render(AvatarGroup, {
                props: { class: 'my-custom-class' }
            })

            const group = container.firstElementChild
            expect(group?.classList.contains('my-custom-class')).toBe(true)
        })

        it('should have inline-flex class', async () => {
            const { container } = render(AvatarGroup)

            const group = container.firstElementChild
            expect(group?.classList.contains('inline-flex')).toBe(true)
        })

        it('should have flex-row-reverse class for proper stacking', async () => {
            const { container } = render(AvatarGroup)

            const group = container.firstElementChild
            expect(group?.classList.contains('flex-row-reverse')).toBe(true)
        })

        it('should have justify-end class', async () => {
            const { container } = render(AvatarGroup)

            const group = container.firstElementChild
            expect(group?.classList.contains('justify-end')).toBe(true)
        })
    })

    describe('avatars prop', () => {
        it('should render avatars from array', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    avatars: [
                        { alt: 'John Doe' },
                        { alt: 'Jane Smith' },
                        { alt: 'Bob Wilson' }
                    ]
                }
            })

            const avatars = container.querySelectorAll('[data-avatar-root]')
            expect(avatars.length).toBe(3)
        })

        it('should render avatar with src', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    avatars: [{ src: 'https://example.com/avatar.jpg', alt: 'User' }]
                }
            })

            const img = container.querySelector('[data-avatar-image]')
            expect(img).not.toBeNull()
            expect(img?.getAttribute('src')).toBe('https://example.com/avatar.jpg')
        })

        it('should render avatar initials', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    avatars: [{ alt: 'John Doe' }]
                }
            })

            const fallback = container.querySelector('[data-avatar-fallback]')
            expect(fallback?.textContent).toContain('JD')
        })

        it('should render avatar with text', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    avatars: [{ text: 'AB' }]
                }
            })

            const fallback = container.querySelector('[data-avatar-fallback]')
            expect(fallback?.textContent).toContain('AB')
        })
    })

    describe('max prop', () => {
        it('should limit displayed avatars when max is set', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    avatars: [
                        { alt: 'User 1' },
                        { alt: 'User 2' },
                        { alt: 'User 3' },
                        { alt: 'User 4' },
                        { alt: 'User 5' }
                    ],
                    max: 3
                }
            })

            // 3 visible + 1 overflow indicator = 4 total
            const avatars = container.querySelectorAll('[data-avatar-root]')
            expect(avatars.length).toBe(4)
        })

        it('should show overflow count as +N', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    avatars: [
                        { alt: 'User 1' },
                        { alt: 'User 2' },
                        { alt: 'User 3' },
                        { alt: 'User 4' },
                        { alt: 'User 5' }
                    ],
                    max: 3
                }
            })

            // Should show +2 for 2 hidden avatars
            expect(container.textContent).toContain('+2')
        })

        it('should not show overflow when avatars count equals max', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    avatars: [{ alt: 'User 1' }, { alt: 'User 2' }, { alt: 'User 3' }],
                    max: 3
                }
            })

            const avatars = container.querySelectorAll('[data-avatar-root]')
            expect(avatars.length).toBe(3)
            expect(container.textContent).not.toContain('+')
        })

        it('should not show overflow when avatars count is less than max', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    avatars: [{ alt: 'User 1' }, { alt: 'User 2' }],
                    max: 5
                }
            })

            const avatars = container.querySelectorAll('[data-avatar-root]')
            expect(avatars.length).toBe(2)
            expect(container.textContent).not.toContain('+')
        })

        it('should show all avatars when max is 0', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    avatars: [{ alt: 'User 1' }, { alt: 'User 2' }, { alt: 'User 3' }],
                    max: 0
                }
            })

            const avatars = container.querySelectorAll('[data-avatar-root]')
            expect(avatars.length).toBe(3)
        })

        it('should show all avatars when max is negative', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    avatars: [{ alt: 'User 1' }, { alt: 'User 2' }, { alt: 'User 3' }],
                    max: -1
                }
            })

            const avatars = container.querySelectorAll('[data-avatar-root]')
            expect(avatars.length).toBe(3)
        })
    })

    describe('sizes', () => {
        it('should apply md size by default', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    avatars: [{ alt: 'User' }]
                }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar?.classList.contains('size-8')).toBe(true)
        })

        it('should apply 3xs size to avatars', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    size: '3xs',
                    avatars: [{ alt: 'User' }]
                }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar?.classList.contains('size-4')).toBe(true)
        })

        it('should apply xs size to avatars', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    size: 'xs',
                    avatars: [{ alt: 'User' }]
                }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar?.classList.contains('size-6')).toBe(true)
        })

        it('should apply sm size to avatars', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    size: 'sm',
                    avatars: [{ alt: 'User' }]
                }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar?.classList.contains('size-7')).toBe(true)
        })

        it('should apply lg size to avatars', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    size: 'lg',
                    avatars: [{ alt: 'User' }]
                }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar?.classList.contains('size-9')).toBe(true)
        })

        it('should apply xl size to avatars', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    size: 'xl',
                    avatars: [{ alt: 'User' }]
                }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar?.classList.contains('size-10')).toBe(true)
        })

        it('should apply 3xl size to avatars', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    size: '3xl',
                    avatars: [{ alt: 'User' }]
                }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar?.classList.contains('size-12')).toBe(true)
        })
    })

    describe('avatar stacking styles', () => {
        it('should apply ring styles to avatars for visual separation', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    avatars: [{ alt: 'User 1' }, { alt: 'User 2' }]
                }
            })

            const avatars = container.querySelectorAll('[data-avatar-root]')
            // Check that avatars have ring class for visual separation
            avatars.forEach((avatar) => {
                expect(avatar.classList.contains('ring-white')).toBe(true)
            })
        })

        it('should apply negative margin for overlap effect', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    size: 'md',
                    avatars: [{ alt: 'User 1' }, { alt: 'User 2' }]
                }
            })

            const avatars = container.querySelectorAll('[data-avatar-root]')
            // md size should have -me-1.5 class
            avatars.forEach((avatar) => {
                expect(avatar.className).toMatch(/-me-/)
            })
        })
    })

    describe('HTML attributes', () => {
        it('should pass through id attribute', async () => {
            const { container } = render(AvatarGroup, {
                props: { id: 'my-avatar-group' }
            })

            const group = container.firstElementChild
            expect(group?.id).toBe('my-avatar-group')
        })

        it('should pass through data attributes', async () => {
            const { container } = render(AvatarGroup, {
                props: { 'data-testid': 'avatar-group-test' }
            })

            const group = container.firstElementChild
            expect(group?.getAttribute('data-testid')).toBe('avatar-group-test')
        })

        it('should pass through aria-label', async () => {
            const { container } = render(AvatarGroup, {
                props: { 'aria-label': 'Team members' }
            })

            const group = container.firstElementChild
            expect(group?.getAttribute('aria-label')).toBe('Team members')
        })
    })

    describe('ui prop', () => {
        it('should apply custom root class via ui prop', async () => {
            const { container } = render(AvatarGroup, {
                props: { ui: { root: 'custom-root-class' } }
            })

            const group = container.firstElementChild
            expect(group?.classList.contains('custom-root-class')).toBe(true)
        })

        it('should apply custom base class to avatars via ui prop', async () => {
            const { container } = render(AvatarGroup, {
                props: {
                    ui: { base: 'custom-base-class' },
                    avatars: [{ alt: 'User' }]
                }
            })

            const avatar = container.querySelector('[data-avatar-root]')
            expect(avatar?.classList.contains('custom-base-class')).toBe(true)
        })
    })

    describe('empty state', () => {
        it('should render empty container when no avatars provided', async () => {
            const { container } = render(AvatarGroup)

            const group = container.firstElementChild
            expect(group).not.toBeNull()
            expect(group?.children.length).toBe(0)
        })

        it('should render empty container when avatars array is empty', async () => {
            const { container } = render(AvatarGroup, {
                props: { avatars: [] }
            })

            const avatars = container.querySelectorAll('[data-avatar-root]')
            expect(avatars.length).toBe(0)
        })
    })
})
