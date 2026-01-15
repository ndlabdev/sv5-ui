import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { userVariants } from './user.variants.js'
import type { AvatarProps } from '../Avatar/avatar.types.js'
import type { ChipProps } from '../Chip/chip.types.js'

// Variant-derived types
export type UserVariants = VariantProps<typeof userVariants>
export type UserSlots = keyof ReturnType<typeof userVariants>
export type UserSize = NonNullable<UserVariants['size']>
export type UserOrientation = NonNullable<UserVariants['orientation']>

/** Custom styles for each user slot */
export type UserUI = Partial<Record<UserSlots, string>>

export interface UserProps {
    /** The element this component should render as. Default: 'div' */
    as?: string
    /** Custom styles for each slot (root, wrapper, name, description, avatar) */
    ui?: UserUI
    /** User's display name */
    name?: string
    /** User's description or role */
    description?: string
    /** Avatar configuration */
    avatar?: AvatarProps
    /** Chip/badge configuration for status indicator */
    chip?: boolean | ChipProps
    /** User size */
    size?: UserSize
    /** Layout orientation */
    orientation?: UserOrientation
    /** Link destination (renders as anchor) */
    href?: string
    /** Link target */
    target?: '_blank' | '_self' | '_parent' | '_top'
    /** Additional CSS classes */
    class?: string
    /** Custom avatar slot */
    avatarSlot?: Snippet
    /** Custom name slot */
    nameSlot?: Snippet
    /** Custom description slot */
    descriptionSlot?: Snippet
    /** Default slot for additional content */
    children?: Snippet
    /** Allows any other HTML attributes */
    [key: string]: unknown
}
