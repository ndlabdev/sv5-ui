import type { HTMLAttributes } from 'svelte/elements'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { avatarVariants } from './avatar.variants.js'

// Variant-derived types
export type AvatarVariants = VariantProps<typeof avatarVariants>
export type AvatarSlots = keyof ReturnType<typeof avatarVariants>
export type AvatarSize = NonNullable<AvatarVariants['size']>

/** Custom styles for each avatar slot */
export type AvatarUI = Partial<Record<AvatarSlots, ClassNameValue>>

/**
 * Avatar component props.
 * Extends standard HTML span attributes with additional styling and content options.
 */
export type AvatarProps = HTMLAttributes<HTMLSpanElement> & {
    /**
     * The HTML element to render as.
     * @default 'span'
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * The size of the avatar.
     * @default 'md'
     */
    size?: AvatarSize

    /**
     * Image source URL for the avatar.
     * When provided and loads successfully, displays the image.
     */
    src?: string

    /**
     * Alt text for the avatar image.
     * Also used to generate initials when image is not available.
     */
    alt?: string

    /**
     * Fallback text to display when image is not available.
     * Takes precedence over auto-generated initials from alt.
     */
    text?: string

    /**
     * Fallback icon to display when image is not available.
     * Accepts any Iconify icon name.
     */
    icon?: string

    /**
     * Additional CSS classes to apply to the avatar.
     */
    class?: ClassNameValue

    /**
     * Custom styles for individual avatar slots.
     * Allows overriding styles for: root, image, fallback, icon.
     */
    ui?: AvatarUI
}
