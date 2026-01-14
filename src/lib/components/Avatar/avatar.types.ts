import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { avatarVariants } from './avatar.variants.js'

// Variant-derived types
export type AvatarVariants = VariantProps<typeof avatarVariants>
export type AvatarSlots = keyof ReturnType<typeof avatarVariants>
export type AvatarSize = NonNullable<AvatarVariants['size']>

/** Custom styles for each avatar slot */
export type AvatarUI = Partial<Record<AvatarSlots, string>>

export interface AvatarProps {
    /** The element this component should render as. Default: 'span' */
    as?: string
    /** Custom styles for each slot (root, image, fallback, icon) */
    ui?: AvatarUI
    /** Image source URL */
    src?: string
    /** Alt text for the image, also used to generate initials */
    alt?: string
    /** Avatar size */
    size?: AvatarSize
    /** Fallback icon name when image fails to load */
    icon?: string
    /** Fallback text when image fails to load */
    text?: string
    /** Additional CSS classes */
    class?: string
    /** Custom fallback content */
    children?: Snippet
    /** Allows any other HTML attributes */
    [key: string]: unknown
}
