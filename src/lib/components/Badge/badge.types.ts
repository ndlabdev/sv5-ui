import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { SemanticColor } from '../../config/types.js'
import type { badgeVariants } from './badge.variants.js'
import type { AvatarProps } from '../Avatar/avatar.types.js'

// Variant-derived types
export type BadgeVariants = VariantProps<typeof badgeVariants>
export type BadgeSlots = keyof ReturnType<typeof badgeVariants>
export type BadgeSize = NonNullable<BadgeVariants['size']>
export type BadgeVariant = NonNullable<BadgeVariants['variant']>

/** Custom styles for each badge slot */
export type BadgeUI = Partial<Record<BadgeSlots, string>>

export interface BadgeProps {
    /** The element this component should render as. Default: 'span' */
    as?: string
    /** Custom styles for each slot (base, label, leadingIcon, trailingIcon, leadingAvatar) */
    ui?: BadgeUI
    /** Badge text label */
    label?: string | number
    /** Badge color */
    color?: SemanticColor
    /** Badge variant style */
    variant?: BadgeVariant
    /** Badge size */
    size?: BadgeSize
    /** Render badge with equal padding (square shape) */
    square?: boolean
    /** Icon name - renders as icon-only badge */
    icon?: string
    /** Leading icon name */
    leadingIcon?: string
    /** Trailing icon name */
    trailingIcon?: string
    /** Avatar to display on the left side */
    avatar?: AvatarProps
    /** Additional CSS classes */
    class?: string
    /** Custom leading content */
    leading?: Snippet
    /** Badge content */
    children?: Snippet
    /** Custom trailing content */
    trailing?: Snippet
    /** Allows any other HTML attributes */
    [key: string]: unknown
}
