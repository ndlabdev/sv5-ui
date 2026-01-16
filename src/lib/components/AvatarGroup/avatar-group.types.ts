import type { HTMLAttributes } from 'svelte/elements'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { avatarGroupVariants } from './avatar-group.variants.js'
import type { AvatarProps, AvatarSize } from '../Avatar/avatar.types.js'

// Variant-derived types
export type AvatarGroupVariants = VariantProps<typeof avatarGroupVariants>
export type AvatarGroupSlots = keyof ReturnType<typeof avatarGroupVariants>
export type AvatarGroupSize = NonNullable<AvatarGroupVariants['size']>

/** Custom styles for each avatar group slot */
export type AvatarGroupUI = Partial<Record<AvatarGroupSlots, ClassNameValue>>

/** Avatar configuration for avatars prop */
export type AvatarGroupItem = Omit<AvatarProps, 'size' | 'children'>

/**
 * AvatarGroup component props.
 * Extends standard HTML div attributes with additional styling and content options.
 */
export type AvatarGroupProps = HTMLAttributes<HTMLDivElement> & {
    /**
     * The HTML element to render as.
     * @default 'div'
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * The size of avatars in the group.
     * All child avatars will inherit this size.
     * @default 'md'
     */
    size?: AvatarSize

    /**
     * Array of avatar configurations.
     * When provided, avatars are rendered automatically.
     * Works with `max` prop to limit displayed avatars.
     */
    avatars?: AvatarGroupItem[]

    /**
     * Maximum number of avatars to display.
     * Remaining avatars are shown as "+N" overflow indicator.
     * Only works when `avatars` prop is provided.
     */
    max?: number

    /**
     * Additional CSS classes to apply to the group container.
     */
    class?: ClassNameValue

    /**
     * Custom styles for individual avatar group slots.
     * Allows overriding styles for: root, base.
     */
    ui?: AvatarGroupUI
}
