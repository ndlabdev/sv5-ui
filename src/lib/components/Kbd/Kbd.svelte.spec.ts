import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Kbd from './Kbd.svelte'

describe('Kbd', () => {
    describe('rendering', () => {
        it('should render a kbd element by default', async () => {
            const { container } = render(Kbd, { props: { value: 'K' } })

            const kbd = container.querySelector('kbd')
            expect(kbd).not.toBeNull()
        })

        it('should render with custom element via as prop', async () => {
            const { container } = render(Kbd, { props: { value: 'K', as: 'span' } })

            const span = container.querySelector('span')
            expect(span).not.toBeNull()
        })

        it('should render value text', async () => {
            const { container } = render(Kbd, { props: { value: 'K' } })

            expect(container.textContent).toContain('K')
        })

        it('should apply custom class', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', class: 'my-custom-class' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.classList.contains('my-custom-class')).toBe(true)
        })
    })

    describe('static key symbols (kbdKeysMap)', () => {
        it('should render command symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'command' } })

            expect(container.textContent).toContain('⌘')
        })

        it('should render shift symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'shift' } })

            expect(container.textContent).toContain('⇧')
        })

        it('should render control symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'control' } })

            expect(container.textContent).toContain('⌃')
        })

        it('should render option symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'option' } })

            expect(container.textContent).toContain('⌥')
        })

        it('should render enter symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'enter' } })

            expect(container.textContent).toContain('↵')
        })

        it('should render delete symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'delete' } })

            expect(container.textContent).toContain('⌦')
        })

        it('should render backspace symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'backspace' } })

            expect(container.textContent).toContain('⌫')
        })

        it('should render escape text', async () => {
            const { container } = render(Kbd, { props: { value: 'escape' } })

            expect(container.textContent).toContain('Esc')
        })

        it('should render tab symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'tab' } })

            expect(container.textContent).toContain('⇥')
        })

        it('should render capslock symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'capslock' } })

            expect(container.textContent).toContain('⇪')
        })

        it('should render space symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'space' } })

            expect(container.textContent).toContain('␣')
        })
    })

    describe('arrow keys', () => {
        it('should render arrowup symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'arrowup' } })

            expect(container.textContent).toContain('↑')
        })

        it('should render arrowdown symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'arrowdown' } })

            expect(container.textContent).toContain('↓')
        })

        it('should render arrowleft symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'arrowleft' } })

            expect(container.textContent).toContain('←')
        })

        it('should render arrowright symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'arrowright' } })

            expect(container.textContent).toContain('→')
        })
    })

    describe('navigation keys', () => {
        it('should render pageup symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'pageup' } })

            expect(container.textContent).toContain('⇞')
        })

        it('should render pagedown symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'pagedown' } })

            expect(container.textContent).toContain('⇟')
        })

        it('should render home symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'home' } })

            expect(container.textContent).toContain('↖')
        })

        it('should render end symbol', async () => {
            const { container } = render(Kbd, { props: { value: 'end' } })

            expect(container.textContent).toContain('↘')
        })
    })

    describe('platform-specific keys', () => {
        // Note: These tests run in browser environment where navigator.userAgent
        // determines Mac vs other platform. We test that the value is rendered.
        it('should render meta key', async () => {
            const { container } = render(Kbd, { props: { value: 'meta' } })

            // Should be either ⌘ (Mac) or Ctrl (other)
            const text = container.textContent
            expect(text === '⌘' || text === 'Ctrl').toBe(true)
        })

        it('should render ctrl key', async () => {
            const { container } = render(Kbd, { props: { value: 'ctrl' } })

            // Should be either ⌃ (Mac) or Ctrl (other)
            const text = container.textContent
            expect(text === '⌃' || text === 'Ctrl').toBe(true)
        })

        it('should render alt key', async () => {
            const { container } = render(Kbd, { props: { value: 'alt' } })

            // Should be either ⌥ (Mac) or Alt (other)
            const text = container.textContent
            expect(text === '⌥' || text === 'Alt').toBe(true)
        })
    })

    describe('case insensitivity', () => {
        it('should handle uppercase value', async () => {
            const { container } = render(Kbd, { props: { value: 'ENTER' } })

            expect(container.textContent).toContain('↵')
        })

        it('should handle mixed case value', async () => {
            const { container } = render(Kbd, { props: { value: 'Shift' } })

            expect(container.textContent).toContain('⇧')
        })
    })

    describe('regular keys', () => {
        it('should render letter key as-is', async () => {
            const { container } = render(Kbd, { props: { value: 'K' } })

            expect(container.textContent).toContain('K')
        })

        it('should render number key as-is', async () => {
            const { container } = render(Kbd, { props: { value: '1' } })

            expect(container.textContent).toContain('1')
        })

        it('should preserve case for regular keys', async () => {
            const { container } = render(Kbd, { props: { value: 'A' } })

            expect(container.textContent).toBe('A')
        })
    })

    describe('variants', () => {
        it('should render outline variant by default', async () => {
            const { container } = render(Kbd, { props: { value: 'K' } })

            const kbd = container.querySelector('kbd')
            expect(kbd?.className).toContain('ring')
        })

        it('should render solid variant', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', variant: 'solid' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.classList.contains('bg-neutral-900')).toBe(true)
        })

        it('should render soft variant', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', variant: 'soft' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.className).toContain('bg-neutral/10')
        })

        it('should render subtle variant', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', variant: 'subtle' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.className).toContain('ring')
            expect(kbd?.className).toContain('bg-neutral/10')
        })
    })

    describe('colors', () => {
        it('should render neutral color by default', async () => {
            const { container } = render(Kbd, { props: { value: 'K' } })

            const kbd = container.querySelector('kbd')
            expect(kbd?.className).toContain('ring-neutral')
        })

        it('should render primary color', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', color: 'primary' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.className).toContain('ring-primary')
        })

        it('should render success color', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', color: 'success' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.className).toContain('ring-success')
        })

        it('should render error color', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', color: 'error' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.className).toContain('ring-error')
        })

        it('should render warning color', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', color: 'warning' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.className).toContain('ring-warning')
        })

        it('should render info color', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', color: 'info' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.className).toContain('ring-info')
        })

        it('should render secondary color', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', color: 'secondary' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.className).toContain('ring-secondary')
        })
    })

    describe('sizes', () => {
        it('should render md size by default', async () => {
            const { container } = render(Kbd, { props: { value: 'K' } })

            const kbd = container.querySelector('kbd')
            expect(kbd?.classList.contains('h-5')).toBe(true)
            expect(kbd?.classList.contains('min-w-5')).toBe(true)
        })

        it('should render sm size', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', size: 'sm' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.classList.contains('h-4')).toBe(true)
            expect(kbd?.classList.contains('min-w-4')).toBe(true)
        })

        it('should render lg size', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', size: 'lg' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.classList.contains('h-6')).toBe(true)
            expect(kbd?.classList.contains('min-w-6')).toBe(true)
        })
    })

    describe('rest props', () => {
        it('should pass through data attributes', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', 'data-testid': 'my-kbd' }
            })

            const kbd = container.querySelector('[data-testid="my-kbd"]')
            expect(kbd).not.toBeNull()
        })

        it('should pass through id attribute', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', id: 'kbd-id' }
            })

            const kbd = container.querySelector('#kbd-id')
            expect(kbd).not.toBeNull()
        })

        it('should pass through aria attributes', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', 'aria-label': 'Press K key' }
            })

            const kbd = container.querySelector('[aria-label="Press K key"]')
            expect(kbd).not.toBeNull()
        })

        it('should pass through title attribute', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', title: 'Keyboard shortcut' }
            })

            const kbd = container.querySelector('[title="Keyboard shortcut"]')
            expect(kbd).not.toBeNull()
        })
    })

    describe('base styles', () => {
        it('should have inline-flex display', async () => {
            const { container } = render(Kbd, { props: { value: 'K' } })

            const kbd = container.querySelector('kbd')
            expect(kbd?.classList.contains('inline-flex')).toBe(true)
        })

        it('should have items-center alignment', async () => {
            const { container } = render(Kbd, { props: { value: 'K' } })

            const kbd = container.querySelector('kbd')
            expect(kbd?.classList.contains('items-center')).toBe(true)
        })

        it('should have justify-center alignment', async () => {
            const { container } = render(Kbd, { props: { value: 'K' } })

            const kbd = container.querySelector('kbd')
            expect(kbd?.classList.contains('justify-center')).toBe(true)
        })

        it('should have rounded-sm border radius', async () => {
            const { container } = render(Kbd, { props: { value: 'K' } })

            const kbd = container.querySelector('kbd')
            expect(kbd?.classList.contains('rounded-sm')).toBe(true)
        })

        it('should have font-medium weight', async () => {
            const { container } = render(Kbd, { props: { value: 'K' } })

            const kbd = container.querySelector('kbd')
            expect(kbd?.classList.contains('font-medium')).toBe(true)
        })

        it('should have uppercase text transform', async () => {
            const { container } = render(Kbd, { props: { value: 'K' } })

            const kbd = container.querySelector('kbd')
            expect(kbd?.classList.contains('uppercase')).toBe(true)
        })
    })

    describe('color + variant combinations', () => {
        it('should render primary solid', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', color: 'primary', variant: 'solid' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.classList.contains('bg-primary')).toBe(true)
            expect(kbd?.classList.contains('text-white')).toBe(true)
        })

        it('should render success soft', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', color: 'success', variant: 'soft' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.className).toContain('bg-success/10')
            expect(kbd?.classList.contains('text-success')).toBe(true)
        })

        it('should render error outline', async () => {
            const { container } = render(Kbd, {
                props: { value: 'K', color: 'error', variant: 'outline' }
            })

            const kbd = container.querySelector('kbd')
            expect(kbd?.className).toContain('ring-error/50')
            expect(kbd?.classList.contains('text-error')).toBe(true)
        })
    })
})
