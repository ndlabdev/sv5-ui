import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { SemanticColor } from '../../config/types.js'
import type { separatorVariants } from './separator.variants.js'
import type { AvatarProps } from '../Avatar/avatar.types.js'

// Variant-derived types
export type SeparatorVariants = VariantProps<typeof separatorVariants>
export type SeparatorSlots = keyof ReturnType<typeof separatorVariants>
export type SeparatorSize = NonNullable<SeparatorVariants['size']>
export type SeparatorType = NonNullable<SeparatorVariants['type']>
export type SeparatorOrientation = NonNullable<SeparatorVariants['orientation']>

/** Custom styles for each separator slot */
export type SeparatorUI = Partial<Record<SeparatorSlots, string>>

export interface SeparatorProps {
    /** The element this component should render as. Default: 'div' */
    as?: string
    /** Custom styles for each slot (root, border, container, icon, label) */
    ui?: SeparatorUI
    /** Label text to display in the center */
    label?: string
    /** Icon name to display in the center */
    icon?: string
    /** Avatar to display in the center */
    avatar?: AvatarProps
    /** Separator color */
    color?: SemanticColor
    /** Border thickness */
    size?: SeparatorSize
    /** Border style */
    type?: SeparatorType
    /** Layout orientation */
    orientation?: SeparatorOrientation
    /** When true, removes separator from accessibility tree */
    decorative?: boolean
    /** Additional CSS classes */
    class?: string
    /** Content to display in the center */
    children?: Snippet
    /** Allows any other HTML attributes */
    [key: string]: unknown
}
