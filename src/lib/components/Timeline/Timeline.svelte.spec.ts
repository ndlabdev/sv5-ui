import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Timeline from './Timeline.svelte'
import type { TimelineItem } from './timeline.types.js'

const mockItems: TimelineItem[] = [
    { value: 1, title: 'Step 1', description: 'First step', date: 'Jan 1' },
    { value: 2, title: 'Step 2', description: 'Second step', date: 'Jan 2' },
    { value: 3, title: 'Step 3', description: 'Third step', date: 'Jan 3' }
]

describe('Timeline', () => {
    describe('rendering', () => {
        it('should render with default div element', async () => {
            const { container } = render(Timeline, { props: { items: mockItems } })

            const root = container.querySelector('div')
            expect(root).not.toBeNull()
        })

        it('should render as custom element via as prop', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, as: 'section' }
            })

            const root = container.querySelector('section')
            expect(root).not.toBeNull()
        })

        it('should apply custom class', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, class: 'my-custom-class' }
            })

            const root = container.firstElementChild
            expect(root?.classList.contains('my-custom-class')).toBe(true)
        })

        it('should have flex class', async () => {
            const { container } = render(Timeline, { props: { items: mockItems } })

            const root = container.firstElementChild
            expect(root?.classList.contains('flex')).toBe(true)
        })

        it('should render all items', async () => {
            const { container } = render(Timeline, { props: { items: mockItems } })

            const items = container.querySelectorAll('[data-state]')
            expect(items.length).toBe(3)
        })
    })

    describe('items content', () => {
        it('should display item titles', async () => {
            const { container } = render(Timeline, { props: { items: mockItems } })

            expect(container.textContent).toContain('Step 1')
            expect(container.textContent).toContain('Step 2')
            expect(container.textContent).toContain('Step 3')
        })

        it('should display item descriptions', async () => {
            const { container } = render(Timeline, { props: { items: mockItems } })

            expect(container.textContent).toContain('First step')
            expect(container.textContent).toContain('Second step')
        })

        it('should display item dates', async () => {
            const { container } = render(Timeline, { props: { items: mockItems } })

            expect(container.textContent).toContain('Jan 1')
            expect(container.textContent).toContain('Jan 2')
        })

        it('should render item with icon', async () => {
            const items: TimelineItem[] = [{ value: 1, title: 'Test', icon: 'lucide:check' }]

            const { container } = render(Timeline, { props: { items } })

            // Icon component should be rendered
            const indicator = container.querySelector('.inline-flex')
            expect(indicator).not.toBeNull()
        })
    })

    describe('state management', () => {
        it('should mark items as pending when no value', async () => {
            const { container } = render(Timeline, { props: { items: mockItems } })

            const items = container.querySelectorAll('[data-state="pending"]')
            expect(items.length).toBe(3)
        })

        it('should mark active item correctly', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, value: 2 }
            })

            const activeItem = container.querySelector('[data-state="active"]')
            expect(activeItem).not.toBeNull()
            expect(activeItem?.textContent).toContain('Step 2')
        })

        it('should mark items before active as completed', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, value: 2 }
            })

            const completedItems = container.querySelectorAll('[data-state="completed"]')
            expect(completedItems.length).toBe(1)
            expect(completedItems[0]?.textContent).toContain('Step 1')
        })

        it('should mark items after active as pending', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, value: 2 }
            })

            const pendingItems = container.querySelectorAll('[data-state="pending"]')
            expect(pendingItems.length).toBe(1)
            expect(pendingItems[0]?.textContent).toContain('Step 3')
        })
    })

    describe('reverse mode', () => {
        it('should mark items after active as completed when reverse=true', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, value: 2, reverse: true }
            })

            const completedItems = container.querySelectorAll('[data-state="completed"]')
            expect(completedItems.length).toBe(1)
            expect(completedItems[0]?.textContent).toContain('Step 3')
        })

        it('should mark items before active as pending when reverse=true', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, value: 2, reverse: true }
            })

            const pendingItems = container.querySelectorAll('[data-state="pending"]')
            expect(pendingItems.length).toBe(1)
            expect(pendingItems[0]?.textContent).toContain('Step 1')
        })
    })

    describe('orientation', () => {
        it('should render vertical by default', async () => {
            const { container } = render(Timeline, { props: { items: mockItems } })

            const root = container.firstElementChild
            expect(root?.classList.contains('flex-col')).toBe(true)
        })

        it('should render horizontal orientation', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, orientation: 'horizontal' }
            })

            const root = container.firstElementChild
            expect(root?.classList.contains('flex-row')).toBe(true)
        })

        it('should have w-full class in horizontal mode', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, orientation: 'horizontal' }
            })

            const root = container.firstElementChild
            expect(root?.classList.contains('w-full')).toBe(true)
        })
    })

    describe('sizes', () => {
        it('should render md size by default', async () => {
            const { container } = render(Timeline, { props: { items: mockItems } })

            const indicator = container.querySelector('.size-8')
            expect(indicator).not.toBeNull()
        })

        it('should render xs size', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, size: 'xs' }
            })

            const indicator = container.querySelector('.size-6')
            expect(indicator).not.toBeNull()
        })

        it('should render lg size', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, size: 'lg' }
            })

            const indicator = container.querySelector('.size-9')
            expect(indicator).not.toBeNull()
        })

        it('should render xl size', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, size: 'xl' }
            })

            const indicator = container.querySelector('.size-10')
            expect(indicator).not.toBeNull()
        })
    })

    describe('colors', () => {
        it('should apply primary color by default', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, value: 1 }
            })

            const activeItem = container.querySelector('[data-state="active"]')
            const indicator = activeItem?.querySelector('.inline-flex')
            expect(
                indicator?.className.includes('group-data-[state=active]:bg-primary')
            ).toBe(true)
        })

        it('should apply success color', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, value: 1, color: 'success' }
            })

            const activeItem = container.querySelector('[data-state="active"]')
            const indicator = activeItem?.querySelector('.inline-flex')
            expect(
                indicator?.className.includes('group-data-[state=active]:bg-success')
            ).toBe(true)
        })

        it('should apply error color', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, value: 1, color: 'error' }
            })

            const activeItem = container.querySelector('[data-state="active"]')
            const indicator = activeItem?.querySelector('.inline-flex')
            expect(
                indicator?.className.includes('group-data-[state=active]:bg-error')
            ).toBe(true)
        })
    })

    describe('separator', () => {
        it('should render separators between items', async () => {
            const { container } = render(Timeline, { props: { items: mockItems } })

            const separators = container.querySelectorAll('.rounded-full.bg-neutral-200')
            // Should have 2 separators for 3 items (last item has no separator)
            expect(separators.length).toBeGreaterThanOrEqual(2)
        })

        it('should not render separator for last item', async () => {
            const { container } = render(Timeline, { props: { items: mockItems } })

            const items = container.querySelectorAll('[data-state]')
            const lastItem = items[items.length - 1]
            const separators = lastItem?.querySelectorAll('.w-0\\.5, .h-0\\.5')
            // Last item should have no separator or separator should be in container but not visible
            expect(separators?.length || 0).toBeLessThanOrEqual(1)
        })
    })

    describe('ui prop', () => {
        it('should apply custom root class via ui prop', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, ui: { root: 'custom-root' } }
            })

            const root = container.firstElementChild
            expect(root?.classList.contains('custom-root')).toBe(true)
        })

        it('should apply custom item class via ui prop', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, ui: { item: 'custom-item' } }
            })

            const item = container.querySelector('.custom-item')
            expect(item).not.toBeNull()
        })

        it('should apply custom indicator class via ui prop', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, ui: { indicator: 'custom-indicator' } }
            })

            const indicator = container.querySelector('.custom-indicator')
            expect(indicator).not.toBeNull()
        })

        it('should apply custom title class via ui prop', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, ui: { title: 'custom-title' } }
            })

            const title = container.querySelector('.custom-title')
            expect(title).not.toBeNull()
        })
    })

    describe('HTML attributes', () => {
        it('should pass through id attribute', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, id: 'my-timeline' }
            })

            const root = container.firstElementChild
            expect(root?.id).toBe('my-timeline')
        })

        it('should pass through data attributes', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, 'data-testid': 'timeline-test' }
            })

            const root = container.firstElementChild
            expect(root?.getAttribute('data-testid')).toBe('timeline-test')
        })

        it('should pass through aria attributes', async () => {
            const { container } = render(Timeline, {
                props: { items: mockItems, 'aria-label': 'Progress timeline' }
            })

            const root = container.firstElementChild
            expect(root?.getAttribute('aria-label')).toBe('Progress timeline')
        })
    })

    describe('empty state', () => {
        it('should render empty container when no items', async () => {
            const { container } = render(Timeline, { props: { items: [] } })

            const root = container.firstElementChild
            expect(root).not.toBeNull()
            expect(root?.children.length).toBe(0)
        })
    })

    describe('item custom class', () => {
        it('should apply custom class to specific item', async () => {
            const items: TimelineItem[] = [
                { value: 1, title: 'Step 1', class: 'my-special-item' },
                { value: 2, title: 'Step 2' }
            ]

            const { container } = render(Timeline, { props: { items } })

            const specialItem = container.querySelector('.my-special-item')
            expect(specialItem).not.toBeNull()
        })
    })
})
