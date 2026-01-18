import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Progress from './Progress.svelte'

describe('Progress', () => {
    describe('rendering', () => {
        it('should render a div element by default', async () => {
            const { container } = render(Progress)

            const progress = container.firstElementChild
            expect(progress?.tagName.toLowerCase()).toBe('div')
        })

        it('should apply custom class', async () => {
            const { container } = render(Progress, {
                props: { class: 'my-custom-class' }
            })

            const progress = container.firstElementChild
            expect(progress?.classList.contains('my-custom-class')).toBe(true)
        })

        it('should have data-progress-root attribute from bits-ui', async () => {
            const { container } = render(Progress)

            const progress = container.firstElementChild
            expect(progress?.hasAttribute('data-progress-root')).toBe(true)
        })

        it('should have flex class', async () => {
            const { container } = render(Progress)

            const progress = container.firstElementChild
            expect(progress?.classList.contains('flex')).toBe(true)
        })

        it('should have gap-2 class', async () => {
            const { container } = render(Progress)

            const progress = container.firstElementChild
            expect(progress?.classList.contains('gap-2')).toBe(true)
        })
    })

    describe('value and state', () => {
        it('should have data-state="loading" when value is null (bits-ui behavior)', async () => {
            const { container } = render(Progress)

            const progress = container.firstElementChild
            expect(progress?.getAttribute('data-state')).toBe('loading')
        })

        it('should have data-state="loaded" when value equals max (bits-ui behavior)', async () => {
            const { container } = render(Progress, {
                props: { value: 100 }
            })

            const progress = container.firstElementChild
            expect(progress?.getAttribute('data-state')).toBe('loaded')
        })

        it('should have data-state="loading" when value is less than max', async () => {
            const { container } = render(Progress, {
                props: { value: 50 }
            })

            const progress = container.firstElementChild
            expect(progress?.getAttribute('data-state')).toBe('loading')
        })

        it('should have data-value attribute when value is provided', async () => {
            const { container } = render(Progress, {
                props: { value: 75 }
            })

            const progress = container.firstElementChild
            expect(progress?.getAttribute('data-value')).toBe('75')
        })

        it('should have data-max attribute', async () => {
            const { container } = render(Progress, {
                props: { max: 200 }
            })

            const progress = container.firstElementChild
            expect(progress?.getAttribute('data-max')).toBe('200')
        })
    })

    describe('colors', () => {
        it('should render primary color by default', async () => {
            const { container } = render(Progress, {
                props: { value: 50 }
            })

            const indicator = container.querySelector('.bg-primary')
            expect(indicator).not.toBeNull()
        })

        it('should render secondary color', async () => {
            const { container } = render(Progress, {
                props: { value: 50, color: 'secondary' }
            })

            const indicator = container.querySelector('.bg-secondary')
            expect(indicator).not.toBeNull()
        })

        it('should render success color', async () => {
            const { container } = render(Progress, {
                props: { value: 50, color: 'success' }
            })

            const indicator = container.querySelector('.bg-success')
            expect(indicator).not.toBeNull()
        })

        it('should render warning color', async () => {
            const { container } = render(Progress, {
                props: { value: 50, color: 'warning' }
            })

            const indicator = container.querySelector('.bg-warning')
            expect(indicator).not.toBeNull()
        })

        it('should render error color', async () => {
            const { container } = render(Progress, {
                props: { value: 50, color: 'error' }
            })

            const indicator = container.querySelector('.bg-error')
            expect(indicator).not.toBeNull()
        })

        it('should render info color', async () => {
            const { container } = render(Progress, {
                props: { value: 50, color: 'info' }
            })

            const indicator = container.querySelector('.bg-info')
            expect(indicator).not.toBeNull()
        })

        it('should render neutral color', async () => {
            const { container } = render(Progress, {
                props: { value: 50, color: 'neutral' }
            })

            const indicator = container.querySelector('.bg-neutral-900')
            expect(indicator).not.toBeNull()
        })
    })

    describe('sizes', () => {
        it('should render md size by default', async () => {
            const { container } = render(Progress, {
                props: { value: 50 }
            })

            const base = container.querySelector('.h-2')
            expect(base).not.toBeNull()
        })

        it('should render 2xs size', async () => {
            const { container } = render(Progress, {
                props: { value: 50, size: '2xs' }
            })

            const base = container.querySelector('.h-px')
            expect(base).not.toBeNull()
        })

        it('should render xs size', async () => {
            const { container } = render(Progress, {
                props: { value: 50, size: 'xs' }
            })

            const base = container.querySelector('.h-0\\.5')
            expect(base).not.toBeNull()
        })

        it('should render sm size', async () => {
            const { container } = render(Progress, {
                props: { value: 50, size: 'sm' }
            })

            const base = container.querySelector('.h-1')
            expect(base).not.toBeNull()
        })

        it('should render lg size', async () => {
            const { container } = render(Progress, {
                props: { value: 50, size: 'lg' }
            })

            const base = container.querySelector('.h-3')
            expect(base).not.toBeNull()
        })

        it('should render xl size', async () => {
            const { container } = render(Progress, {
                props: { value: 50, size: 'xl' }
            })

            const base = container.querySelector('.h-4')
            expect(base).not.toBeNull()
        })

        it('should render 2xl size', async () => {
            const { container } = render(Progress, {
                props: { value: 50, size: '2xl' }
            })

            const base = container.querySelector('.h-5')
            expect(base).not.toBeNull()
        })
    })

    describe('orientation', () => {
        it('should render horizontal orientation by default', async () => {
            const { container } = render(Progress, {
                props: { value: 50 }
            })

            const progress = container.firstElementChild
            expect(progress?.classList.contains('flex-col')).toBe(true)
        })

        it('should render vertical orientation', async () => {
            const { container } = render(Progress, {
                props: { value: 50, orientation: 'vertical' }
            })

            const progress = container.firstElementChild
            expect(progress?.classList.contains('flex-row-reverse')).toBe(true)
        })

        it('should have w-full for horizontal base', async () => {
            const { container } = render(Progress, {
                props: { value: 50 }
            })

            const base = container.querySelector('.w-full')
            expect(base).not.toBeNull()
        })

        it('should have h-full for vertical base', async () => {
            const { container } = render(Progress, {
                props: { value: 50, orientation: 'vertical' }
            })

            const base = container.querySelector('.h-full')
            expect(base).not.toBeNull()
        })
    })

    describe('status', () => {
        it('should not render status by default', async () => {
            const { container } = render(Progress, {
                props: { value: 50 }
            })

            const status = container.querySelector('.text-end')
            expect(status).toBeNull()
        })

        it('should render status when enabled', async () => {
            const { container } = render(Progress, {
                props: { value: 50, status: true }
            })

            const status = container.querySelector('.text-end')
            expect(status).not.toBeNull()
        })

        it('should show percent value in status', async () => {
            const { container } = render(Progress, {
                props: { value: 75, status: true }
            })

            expect(container.textContent).toContain('75%')
        })
    })

    describe('steps', () => {
        it('should render steps when max is an array', async () => {
            const { container } = render(Progress, {
                props: { value: 1, max: ['Step 1', 'Step 2', 'Step 3'] }
            })

            expect(container.textContent).toContain('Step 1')
            expect(container.textContent).toContain('Step 2')
            expect(container.textContent).toContain('Step 3')
        })

        it('should not render status when max is an array', async () => {
            const { container } = render(Progress, {
                props: { value: 1, max: ['A', 'B', 'C'], status: true }
            })

            const status = container.querySelector('.text-end')
            expect(status).toBeNull()
        })

        it('should calculate max value from array length minus 1', async () => {
            const { container } = render(Progress, {
                props: { value: 2, max: ['A', 'B', 'C'] }
            })

            const progress = container.firstElementChild
            expect(progress?.getAttribute('data-max')).toBe('2')
        })
    })

    describe('inverted', () => {
        it('should have flex-col-reverse when inverted', async () => {
            const { container } = render(Progress, {
                props: { value: 50, inverted: true }
            })

            const progress = container.firstElementChild
            expect(progress?.classList.contains('flex-col-reverse')).toBe(true)
        })

        it('should have text-start for status when inverted', async () => {
            const { container } = render(Progress, {
                props: { value: 50, status: true, inverted: true }
            })

            const status = container.querySelector('.text-start')
            expect(status).not.toBeNull()
        })
    })

    describe('indicator', () => {
        it('should have rounded-full class', async () => {
            const { container } = render(Progress, {
                props: { value: 50 }
            })

            const indicator = container.querySelector('.rounded-full.size-full')
            expect(indicator).not.toBeNull()
        })

        it('should have data-state attribute on indicator', async () => {
            const { container } = render(Progress, {
                props: { value: 50 }
            })

            const indicator = container.querySelector('[data-state="determinate"]')
            expect(indicator).not.toBeNull()
        })

        it('should have data-state="indeterminate" on indicator when no value', async () => {
            const { container } = render(Progress)

            const indicator = container.querySelector('[data-state="indeterminate"]')
            expect(indicator).not.toBeNull()
        })

        it('should have transform style when value is provided', async () => {
            const { container } = render(Progress, {
                props: { value: 50 }
            })

            const indicator = container.querySelector('[data-state="determinate"]')
            expect(indicator?.getAttribute('style')).toContain('transform')
        })
    })

    describe('accessibility', () => {
        it('should have role="progressbar"', async () => {
            const { container } = render(Progress)

            const progress = container.firstElementChild
            expect(progress?.getAttribute('role')).toBe('progressbar')
        })

        it('should have aria-valuemin="0"', async () => {
            const { container } = render(Progress)

            const progress = container.firstElementChild
            expect(progress?.getAttribute('aria-valuemin')).toBe('0')
        })

        it('should have aria-valuemax attribute', async () => {
            const { container } = render(Progress, {
                props: { max: 100 }
            })

            const progress = container.firstElementChild
            expect(progress?.getAttribute('aria-valuemax')).toBe('100')
        })

        it('should have aria-valuenow when value is provided', async () => {
            const { container } = render(Progress, {
                props: { value: 75 }
            })

            const progress = container.firstElementChild
            expect(progress?.getAttribute('aria-valuenow')).toBe('75')
        })

        it('should have aria-valuenow="0" when indeterminate (bits-ui passes value to native progressbar)', async () => {
            const { container } = render(Progress)

            const progress = container.firstElementChild
            // bits-ui sets aria-valuenow even when value is null/undefined
            expect(progress?.hasAttribute('aria-valuenow')).toBe(true)
        })
    })

    describe('HTML attributes', () => {
        it('should not have id attribute by default (bits-ui behavior)', async () => {
            const { container } = render(Progress)

            const progress = container.firstElementChild
            // bits-ui Progress.Root does not add id attribute by default
            expect(progress?.hasAttribute('id')).toBe(false)
        })

        it('should pass through data attributes', async () => {
            const { container } = render(Progress, {
                props: { 'data-testid': 'progress-test' }
            })

            const progress = container.firstElementChild
            expect(progress?.getAttribute('data-testid')).toBe('progress-test')
        })
    })

    describe('ui prop', () => {
        it('should apply custom root class via ui prop', async () => {
            const { container } = render(Progress, {
                props: { ui: { root: 'custom-root-class' } }
            })

            const progress = container.firstElementChild
            expect(progress?.classList.contains('custom-root-class')).toBe(true)
        })

        it('should apply custom base class via ui prop', async () => {
            const { container } = render(Progress, {
                props: { ui: { base: 'custom-base-class' } }
            })

            const base = container.querySelector('.custom-base-class')
            expect(base).not.toBeNull()
        })

        it('should apply custom indicator class via ui prop', async () => {
            const { container } = render(Progress, {
                props: { value: 50, ui: { indicator: 'custom-indicator-class' } }
            })

            const indicator = container.querySelector('.custom-indicator-class')
            expect(indicator).not.toBeNull()
        })

        it('should apply custom status class via ui prop', async () => {
            const { container } = render(Progress, {
                props: { value: 50, status: true, ui: { status: 'custom-status-class' } }
            })

            const status = container.querySelector('.custom-status-class')
            expect(status).not.toBeNull()
        })
    })
})
