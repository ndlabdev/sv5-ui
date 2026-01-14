import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { SemanticColor } from '../../config/types.js'
import type { chipVariants } from './chip.variants.js'

// Variant-derived types
export type ChipVariants = VariantProps<typeof chipVariants>
export type ChipSlots = keyof ReturnType<typeof chipVariants>
export type ChipSize = NonNullable<ChipVariants['size']>
export type ChipPosition = NonNullable<ChipVariants['position']>

/** Custom styles for each chip slot */
export type ChipUI = Partial<Record<ChipSlots, string>>

export interface ChipProps {
    /** The element this component should render as. Default: 'div' */
    as?: string
    /** Custom styles for each slot (root, base) */
    ui?: ChipUI
    /** Text or number to display in the chip */
    text?: string | number
    /** Chip color */
    color?: SemanticColor
    /** Chip size */
    size?: ChipSize
    /** Position of the chip relative to content */
    position?: ChipPosition
    /** Keep the chip inside the component bounds */
    inset?: boolean
    /** Render the chip relatively to the parent (without wrapper) */
    standalone?: boolean
    /** Show or hide the chip */
    show?: boolean
    /** Additional CSS classes */
    class?: string
    /** Content to wrap with the chip */
    children?: Snippet
    /** Custom chip content */
    content?: Snippet
    /** Allows any other HTML attributes */
    [key: string]: unknown
}
