import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { HTMLAttributes } from 'svelte/elements'
import type { marqueeVariants } from './marquee.variants.js'

// Variant-derived types
export type MarqueeVariants = VariantProps<typeof marqueeVariants>
export type MarqueeSlots = keyof ReturnType<typeof marqueeVariants>

/** Custom styles for each marquee slot */
export type MarqueeUI = Partial<Record<MarqueeSlots, ClassNameValue>>

/** Marquee orientation options */
export type MarqueeOrientation = NonNullable<MarqueeVariants['orientation']>

/**
 * Marquee component props.
 * A component to create infinite scrolling animations for content.
 */
export type MarqueeProps = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
    /**
     * The element this component should render as.
     * @default 'div'
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * Pause the marquee animation on hover.
     * @default false
     */
    pauseOnHover?: boolean

    /**
     * Reverse the direction of the marquee animation.
     * @default false
     */
    reverse?: boolean

    /**
     * The orientation/direction of the marquee scrolling.
     * @default 'horizontal'
     */
    orientation?: MarqueeOrientation

    /**
     * The number of times the content should be repeated.
     * @default 4
     */
    repeat?: number

    /**
     * Whether to display gradient overlays at the edges.
     * @default true
     */
    overlay?: boolean

    /**
     * Custom styles for individual marquee slots.
     * Allows overriding styles for: root, content.
     */
    ui?: MarqueeUI

    /**
     * Additional CSS classes to apply to the root element.
     */
    class?: ClassNameValue
}
