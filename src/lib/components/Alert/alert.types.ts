import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { SemanticColor } from '../../config/types.js'
import type { alertVariants } from './alert.variants.js'
import type { AvatarProps } from '../Avatar/avatar.types.js'
import type { ButtonProps } from '../Button/button.types.js'

// Variant-derived types
export type AlertVariants = VariantProps<typeof alertVariants>
export type AlertSlots = keyof ReturnType<typeof alertVariants>
export type AlertVariant = NonNullable<AlertVariants['variant']>
export type AlertOrientation = NonNullable<AlertVariants['orientation']>

/** Custom styles for each alert slot */
export type AlertUI = Partial<Record<AlertSlots, ClassNameValue>>

/**
 * Alert component props.
 * A callout component to draw user's attention with customizable styling, content, and interactive elements.
 * Extends standard HTML div attributes.
 */
export type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'title'> & {
    /**
     * The element this component should render as.
     * @default 'div'
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * Custom styles for individual alert slots.
     * Allows overriding styles for: root, wrapper, title, description, icon, avatar, actions, close.
     */
    ui?: AlertUI

    /**
     * Alert title text.
     * Displays as the main heading of the alert.
     */
    title?: string

    /**
     * Alert description text.
     * Displays as secondary text below the title.
     */
    description?: string

    /**
     * Icon name to display.
     * Accepts any Iconify icon name (e.g., 'lucide:info', 'lucide:alert-triangle').
     * Takes precedence over avatar when both are provided.
     */
    icon?: string

    /**
     * Avatar to display on the left side.
     * Pass AvatarProps object to customize the avatar.
     * Only rendered if icon is not provided.
     */
    avatar?: AvatarProps

    /**
     * The color theme of the alert.
     * @default 'primary'
     */
    color?: SemanticColor

    /**
     * The visual style variant of the alert.
     * - 'solid': Filled background with white text
     * - 'outline': Border only with transparent background
     * - 'soft': Light colored background
     * - 'subtle': Light background with border
     * @default 'soft'
     */
    variant?: AlertVariant

    /**
     * Layout orientation of the alert.
     * - 'horizontal': Items aligned in a row (default)
     * - 'vertical': Items stacked vertically
     * @default 'horizontal'
     */
    orientation?: AlertOrientation

    /**
     * Whether the alert is open/visible.
     * Set to false to hide the alert.
     * @default true
     */
    open?: boolean

    /**
     * Show close button.
     * - true: Shows default close button
     * - ButtonProps: Customize the close button
     * @default false
     */
    close?: boolean | ButtonProps

    /**
     * Close button icon name.
     * Accepts any Iconify icon name.
     * @default 'lucide:x'
     */
    closeIcon?: string

    /**
     * Action buttons configuration.
     * Array of ButtonProps to render action buttons.
     */
    actions?: ButtonProps[]

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

    /**
     * Custom close button content slot.
     * Replaces default close button rendering.
     */
    closeSlot?: Snippet

    /**
     * Callback function when close button is clicked.
     * Use this to handle alert dismissal logic.
     */
    onClose?: () => void
}
