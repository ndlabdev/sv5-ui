import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-svelte'
import Icon from './Icon.svelte'

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

describe('Icon', () => {
    describe('rendering', () => {
        it('should render an svg element', async () => {
            const { container } = render(Icon, { props: { name: 'lucide:home' } })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
            expect(svg?.tagName.toLowerCase()).toBe('svg')
        })

        it('should have role="img" attribute', async () => {
            const { container } = render(Icon, { props: { name: 'lucide:home' } })

            const svg = await waitForSvg(container)
            expect(svg?.getAttribute('role')).toBe('img')
        })

        it('should apply shrink-0 class by default', async () => {
            const { container } = render(Icon, { props: { name: 'lucide:home' } })

            const svg = await waitForSvg(container)
            expect(svg?.classList.contains('shrink-0')).toBe(true)
        })

        it('should apply custom class', async () => {
            const { container } = render(Icon, {
                props: { name: 'lucide:home', class: 'text-red-500' }
            })

            const svg = await waitForSvg(container)
            expect(svg?.classList.contains('text-red-500')).toBe(true)
            expect(svg?.classList.contains('shrink-0')).toBe(true)
        })
    })

    describe('size prop', () => {
        it('should use default size of 1em', async () => {
            const { container } = render(Icon, { props: { name: 'lucide:home' } })

            const svg = await waitForSvg(container)
            expect(svg?.getAttribute('width')).toBe('1em')
            expect(svg?.getAttribute('height')).toBe('1em')
        })

        it('should accept number size', async () => {
            const { container } = render(Icon, {
                props: { name: 'lucide:home', size: 24 }
            })

            const svg = await waitForSvg(container)
            expect(svg?.getAttribute('width')).toBe('24')
            expect(svg?.getAttribute('height')).toBe('24')
        })

        it('should accept string size', async () => {
            const { container } = render(Icon, {
                props: { name: 'lucide:home', size: '2rem' }
            })

            const svg = await waitForSvg(container)
            expect(svg?.getAttribute('width')).toBe('2rem')
            expect(svg?.getAttribute('height')).toBe('2rem')
        })
    })

    describe('color prop', () => {
        it('should apply color when provided', async () => {
            const { container } = render(Icon, {
                props: { name: 'lucide:home', color: 'red' }
            })

            const svg = await waitForSvg(container)
            expect(svg?.style.color).toBe('red')
        })
    })

    describe('different icon sets', () => {
        it('should render lucide icons', async () => {
            const { container } = render(Icon, { props: { name: 'lucide:star' } })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
            expect(svg?.getAttribute('role')).toBe('img')
        })

        it('should render mdi icons', async () => {
            const { container } = render(Icon, { props: { name: 'mdi:account' } })

            const svg = await waitForSvg(container)
            expect(svg).not.toBeNull()
            expect(svg?.getAttribute('role')).toBe('img')
        })
    })
})
