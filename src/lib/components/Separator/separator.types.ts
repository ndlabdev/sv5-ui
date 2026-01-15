import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { Separator } from 'bits-ui'
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
export type SeparatorUI = Partial<Record<SeparatorSlots, ClassNameValue>>

/**
 * Separator component props.
 * Extends bits-ui Separator.RootProps with additional styling and content options.
 */
export type SeparatorProps = Separator.RootProps & {
    /**
     * The color theme of the separator.
     * @default 'neutral'
     */
    color?: SemanticColor

    /**
     * The thickness of the separator border.
     * @default 'xs'
     */
    size?: SeparatorSize

    /**
     * The border style of the separator.
     * @default 'solid'
     */
    type?: SeparatorType

    /**
     * Text label to display in the center of the separator.
     */
    label?: string

    /**
     * Icon to display in the center of the separator.
     * Accepts any Iconify icon name.
     */
    icon?: string

    /**
     * Avatar to display in the center of the separator.
     */
    avatar?: AvatarProps

    /**
     * Additional CSS classes to apply to the separator.
     */
    class?: ClassNameValue

    /**
     * Custom styles for individual separator slots.
     * Allows overriding styles for: root, border, container, icon, label.
     */
    ui?: SeparatorUI

    /**
     * Custom content to render in the center of the separator.
     * Takes precedence over label, icon, and avatar.
     */
    content?: Snippet
}
