import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements'
import type { userVariants } from './user.variants.js'
import type { AvatarProps } from '../Avatar/avatar.types.js'
import type { ChipProps } from '../Chip/chip.types.js'

// Variant-derived types
export type UserVariants = VariantProps<typeof userVariants>
export type UserSlots = keyof ReturnType<typeof userVariants>
export type UserSize = NonNullable<UserVariants['size']>
export type UserOrientation = NonNullable<UserVariants['orientation']>

/** Custom styles for each user slot */
export type UserUI = Partial<Record<UserSlots, ClassNameValue>>

/** Base props shared between anchor and element variants */
type UserBaseProps = {
    /**
     * The element this component should render as.
     * Ignored when href is provided (renders as anchor).
     * @default 'div'
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * Custom styles for individual user slots.
     * Allows overriding styles for: root, wrapper, name, description, avatar.
     */
    ui?: UserUI

    /**
     * User's display name.
     * Rendered as the primary text.
     */
    name?: string

    /**
     * User's description, role, or secondary text.
     * Rendered below the name.
     */
    description?: string

    /**
     * Avatar configuration props.
     * Passed directly to the Avatar component.
     */
    avatar?: AvatarProps

    /**
     * Chip/badge configuration for status indicator.
     * When true, renders a default chip wrapper.
     * When ChipProps, renders chip with specified configuration.
     */
    chip?: boolean | ChipProps

    /**
     * The size of the user component.
     * Controls text sizes and avatar size mapping.
     * @default 'md'
     */
    size?: UserSize

    /**
     * Layout orientation of the user component.
     * @default 'horizontal'
     */
    orientation?: UserOrientation

    /**
     * Additional CSS classes to apply to the root element.
     */
    class?: ClassNameValue

    /**
     * Custom slot for rendering avatar content.
     * Takes precedence over avatar prop.
     */
    avatarSlot?: Snippet

    /**
     * Custom slot for rendering name content.
     * Takes precedence over name prop.
     */
    nameSlot?: Snippet

    /**
     * Custom slot for rendering description content.
     * Takes precedence over description prop.
     */
    descriptionSlot?: Snippet
}

/** Props when User is rendered as an anchor (href provided) */
type UserAsAnchorProps = UserBaseProps &
    Omit<HTMLAnchorAttributes, 'class'> & {
        /**
         * Link destination URL.
         * When provided, component renders as an anchor element.
         */
        href: string
    }

/** Props when User is rendered as a generic element (no href) */
type UserAsElementProps = UserBaseProps &
    Omit<HTMLAttributes<HTMLElement>, 'class'> & {
        href?: never
    }

/**
 * User component props.
 * Displays user information with avatar, name, and description.
 * Supports rendering as anchor when href is provided.
 */
export type UserProps = UserAsAnchorProps | UserAsElementProps
