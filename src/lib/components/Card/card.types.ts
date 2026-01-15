import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { cardVariants } from './card.variants.js'

// Variant-derived types
export type CardVariants = VariantProps<typeof cardVariants>
export type CardSlots = keyof ReturnType<typeof cardVariants>
export type CardVariant = NonNullable<CardVariants['variant']>

/** Custom styles for each card slot */
export type CardUI = Partial<Record<CardSlots, string>>

export interface CardProps {
    /** The element this component should render as. Default: 'div' */
    as?: string
    /** Custom styles for each slot (root, header, body, footer) */
    ui?: CardUI
    /** Card variant style */
    variant?: CardVariant
    /** Additional CSS classes */
    class?: string
    /** Header content */
    header?: Snippet
    /** Main body content */
    children?: Snippet
    /** Footer content */
    footer?: Snippet
    /** Allows any other HTML attributes */
    [key: string]: unknown
}
