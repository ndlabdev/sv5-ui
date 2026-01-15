import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { cardVariants } from './card.variants.js'

// Variant-derived types
export type CardVariants = VariantProps<typeof cardVariants>
export type CardSlots = keyof ReturnType<typeof cardVariants>
export type CardVariant = NonNullable<CardVariants['variant']>

/** Custom styles for each card slot */
export type CardUI = Partial<Record<CardSlots, ClassNameValue>>

/**
 * Card component props.
 * Extends standard HTML div attributes with additional styling and content options.
 */
export type CardProps = HTMLAttributes<HTMLDivElement> & {
    /**
     * The HTML element to render as.
     * @default 'div'
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * The visual style variant of the card.
     * @default 'outline'
     */
    variant?: CardVariant

    /**
     * Additional CSS classes to apply to the card.
     */
    class?: ClassNameValue

    /**
     * Custom styles for individual card slots.
     * Allows overriding styles for: root, header, body, footer.
     */
    ui?: CardUI

    /**
     * Content to render in the card header section.
     * When provided, renders a header div with appropriate styling.
     */
    header?: Snippet

    /**
     * Content to render in the card footer section.
     * When provided, renders a footer div with appropriate styling.
     */
    footer?: Snippet
}
