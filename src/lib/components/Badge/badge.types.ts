import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { SemanticColor } from '../../config/types.js'
import type { badgeVariants } from './badge.variants.js'
import type { AvatarProps } from '../Avatar/avatar.types.js'

// Variant-derived types
export type BadgeVariants = VariantProps<typeof badgeVariants>
export type BadgeSlots = keyof ReturnType<typeof badgeVariants>
export type BadgeSize = NonNullable<BadgeVariants['size']>
export type BadgeVariant = NonNullable<BadgeVariants['variant']>

/** Custom styles for each badge slot */
export type BadgeUI = Partial<Record<BadgeSlots, ClassNameValue>>

/**
 * Badge component props.
 * A small status indicator component for labeling and categorization.
 * Extends standard HTML span attributes.
 */
export type BadgeProps = Omit<HTMLAttributes<HTMLSpanElement>, 'class'> & {
    /**
     * The element this component should render as.
     * @default 'span'
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * Custom styles for individual badge slots.
     * Allows overriding styles for: base, label, leadingIcon, trailingIcon, leadingAvatar.
     */
    ui?: BadgeUI

    /**
     * Badge text label.
     * Can be a string or number.
     */
    label?: string | number

    /**
     * The color theme of the badge.
     * @default 'primary'
     */
    color?: SemanticColor

    /**
     * The visual style variant of the badge.
     * - 'solid': Filled background with white text
     * - 'outline': Border only with transparent background
     * - 'soft': Light colored background
     * - 'subtle': Light background with border
     * @default 'solid'
     */
    variant?: BadgeVariant

    /**
     * The size of the badge.
     * @default 'md'
     */
    size?: BadgeSize

    /**
     * Render badge with equal padding (square shape).
     * Useful for single character or icon-only badges.
     * @default false
     */
    square?: boolean

    /**
     * Icon name for icon-only badge.
     * Accepts any Iconify icon name.
     * When set, renders only this icon without label.
     */
    icon?: string

    /**
     * Icon to display before the label.
     * Accepts any Iconify icon name.
     */
    leadingIcon?: string

    /**
     * Icon to display after the label.
     * Accepts any Iconify icon name.
     */
    trailingIcon?: string

    /**
     * Avatar to display on the left side.
     * Pass AvatarProps object to customize the avatar.
     */
    avatar?: AvatarProps

    /**
     * Additional CSS classes to apply to the badge.
     */
    class?: ClassNameValue

    /**
     * Custom leading content slot.
     * Takes precedence over avatar and leadingIcon.
     */
    leading?: Snippet

    /**
     * Custom trailing content slot.
     * Takes precedence over trailingIcon.
     */
    trailing?: Snippet
}
