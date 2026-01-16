import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { emptyVariants } from './empty.variants.js'
import type { AvatarProps } from '../Avatar/avatar.types.js'
import type { ButtonProps } from '../Button/button.types.js'

// Variant-derived types
export type EmptyVariants = VariantProps<typeof emptyVariants>
export type EmptySlots = keyof ReturnType<typeof emptyVariants>
export type EmptyVariant = NonNullable<EmptyVariants['variant']>
export type EmptySize = NonNullable<EmptyVariants['size']>

/** Custom styles for each empty slot */
export type EmptyUI = Partial<Record<EmptySlots, ClassNameValue>>

/**
 * Empty component props.
 * Displays an empty state UI when there's no content to show.
 */
export type EmptyProps = Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'title'> & {
    /**
     * The element this component should render as.
     * @default 'div'
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * Custom styles for individual empty slots.
     * Allows overriding styles for: root, icon, avatar, title, description, actions.
     */
    ui?: EmptyUI

    /**
     * Icon name to display.
     * Accepts any Iconify icon name (e.g., 'lucide:inbox', 'lucide:file-x').
     * Takes precedence over avatar when both are provided.
     */
    icon?: string

    /**
     * Avatar to display instead of icon.
     * Pass AvatarProps object to customize the avatar.
     * Only rendered if icon is not provided.
     */
    avatar?: AvatarProps

    /**
     * Empty state title text.
     * Displays as the main heading.
     */
    title?: string

    /**
     * Empty state description text.
     * Displays as secondary text below the title.
     */
    description?: string

    /**
     * Action buttons configuration.
     * Array of ButtonProps to render action buttons.
     */
    actions?: ButtonProps[]

    /**
     * The visual style variant of the empty state.
     * - 'solid': Dark filled background
     * - 'outline': Border with transparent background
     * - 'soft': Light colored background
     * - 'subtle': Light background with border
     * - 'naked': No background or border
     * @default 'outline'
     */
    variant?: EmptyVariant

    /**
     * Size of the empty state component.
     * Controls padding, icon size, and text sizes.
     * @default 'md'
     */
    size?: EmptySize

    /**
     * Additional CSS classes to apply to the root element.
     */
    class?: ClassNameValue

    /**
     * Custom leading content slot.
     * Replaces icon/avatar when provided.
     */
    leading?: Snippet

    /**
     * Custom title content slot.
     * Replaces default title rendering.
     */
    titleSlot?: Snippet

    /**
     * Custom description content slot.
     * Replaces default description rendering.
     */
    descriptionSlot?: Snippet

    /**
     * Custom actions content slot.
     * Replaces default actions rendering.
     */
    actionsSlot?: Snippet
}
