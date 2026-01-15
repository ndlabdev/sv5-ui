import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { SemanticColor } from '../../config/types.js'
import type { kbdVariants } from './kbd.variants.js'

// Variant-derived types
export type KbdVariants = VariantProps<typeof kbdVariants>
export type KbdSize = NonNullable<KbdVariants['size']>
export type KbdVariant = NonNullable<KbdVariants['variant']>

export interface KbdProps {
    /** The element this component should render as. Default: 'kbd' */
    as?: string
    /** The key value to display (supports special keys like 'meta', 'shift', etc.) */
    value?: string
    /** Kbd color */
    color?: SemanticColor
    /** Kbd size */
    size?: KbdSize
    /** Kbd style variant */
    variant?: KbdVariant
    /** Additional CSS classes */
    class?: string
    /** Content to display inside the kbd */
    children?: Snippet
    /** Allows any other HTML attributes */
    [key: string]: unknown
}
