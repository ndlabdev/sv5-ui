import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { avatarGroupVariants } from './avatar-group.variants.js'
import type { AvatarProps, AvatarSize } from '../Avatar/avatar.types.js'

// Variant-derived types
export type AvatarGroupVariants = VariantProps<typeof avatarGroupVariants>
export type AvatarGroupSlots = keyof ReturnType<typeof avatarGroupVariants>

/** Custom styles for each avatar group slot */
export type AvatarGroupUI = Partial<Record<AvatarGroupSlots, string>>

/** Avatar configuration for avatars prop */
export type AvatarGroupItem = Omit<AvatarProps, 'size' | 'children'>

export interface AvatarGroupProps {
    /** The element this component should render as. Default: 'div' */
    as?: string
    /** Custom styles for each slot (root, base) */
    ui?: AvatarGroupUI
    /** Avatar size - applies to all avatars in the group */
    size?: AvatarSize
    /** Array of avatar configurations. When used with max, allows proper limiting. */
    avatars?: AvatarGroupItem[]
    /** Maximum number of avatars to display. Rest will be shown as +N. Works best with avatars prop. */
    max?: number
    /** Additional CSS classes */
    class?: string
    /** Avatar components as children (alternative to avatars prop) */
    children?: Snippet
    /** Allows any other HTML attributes */
    [key: string]: unknown
}
