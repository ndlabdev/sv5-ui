import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { HTMLAttributes } from 'svelte/elements'
import type { SemanticColor } from '../../config/types.js'
import type { chipVariants } from './chip.variants.js'

// Variant-derived types
export type ChipVariants = VariantProps<typeof chipVariants>
export type ChipSlots = keyof ReturnType<typeof chipVariants>
export type ChipSize = NonNullable<ChipVariants['size']>
export type ChipPosition = NonNullable<ChipVariants['position']>

/** Custom styles for each chip slot */
export type ChipUI = Partial<Record<ChipSlots, ClassNameValue>>

/**
 * Chip component props.
 * Displays a small badge indicator, typically used for notifications or status.
 */
export type ChipProps = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
    /**
     * The element this component should render as.
     * @default 'div'
     */
    as?: string

    /**
     * Custom styles for individual chip slots.
     * Allows overriding styles for: root, base.
     */
    ui?: ChipUI

    /**
     * Text or number to display in the chip.
     * When provided, the chip expands to fit the content.
     */
    text?: string | number

    /**
     * Color theme for the chip.
     * @default 'primary'
     */
    color?: SemanticColor

    /**
     * The size of the chip.
     * @default 'md'
     */
    size?: ChipSize

    /**
     * Position of the chip relative to its content.
     * @default 'top-right'
     */
    position?: ChipPosition

    /**
     * Keep the chip inside the component bounds.
     * When false, chip is positioned outside the bounds.
     * @default false
     */
    inset?: boolean

    /**
     * Render the chip without wrapper element.
     * Useful when positioning is handled by parent.
     * @default false
     */
    standalone?: boolean

    /**
     * Show or hide the chip.
     * @default true
     */
    show?: boolean

    /**
     * Additional CSS classes to apply to the root element.
     */
    class?: ClassNameValue

    /**
     * Custom content to render inside the chip.
     * Takes precedence over text.
     */
    content?: Snippet
}
