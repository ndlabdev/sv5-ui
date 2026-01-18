import type { Snippet } from 'svelte'
import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { SemanticColor } from '../../config/types.js'
import type { bannerVariants } from './banner.variants.js'
import type { ButtonProps } from '../Button/button.types.js'

// Variant-derived types
export type BannerVariants = VariantProps<typeof bannerVariants>
export type BannerSlots = keyof ReturnType<typeof bannerVariants>
export type BannerColor = NonNullable<BannerVariants['color']>

/** Custom styles for each banner slot */
export type BannerUI = Partial<Record<BannerSlots, ClassNameValue>>

/**
 * Banner component props.
 * A component to display important information at the top of a website.
 */
export type BannerProps = Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'title'> & {
    /**
     * The element this component should render as.
     * @default 'div'
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * Unique identifier for persisting banner dismissal in local storage.
     * When provided, the banner will remember if it was closed.
     */
    id?: string

    /**
     * Icon name to display before the title.
     * Accepts any Iconify icon name (e.g., 'lucide:megaphone', 'lucide:info').
     */
    icon?: string

    /**
     * Banner title/message text.
     * Displays as the main content of the banner.
     */
    title?: string

    /**
     * The color theme of the banner.
     * @default 'primary'
     */
    color?: SemanticColor

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
     * Actions default to neutral color and xs size.
     */
    actions?: ButtonProps[]

    /**
     * Navigation target URL.
     * When provided, the banner becomes a clickable link.
     */
    href?: string

    /**
     * Link target attribute.
     * Only used when `href` is provided.
     */
    target?: HTMLAnchorAttributes['target']

    /**
     * Additional CSS classes to apply to the root element.
     */
    class?: ClassNameValue

    /**
     * Custom styles for individual banner slots.
     * Allows overriding styles for: root, container, left, center, right, icon, title, actions, close.
     */
    ui?: BannerUI

    /**
     * Custom leading content slot.
     * Content rendered on the left side of the banner.
     */
    leading?: Snippet

    /**
     * Custom title content slot.
     * Replaces default title rendering.
     */
    titleSlot?: Snippet

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
     * Use this to handle banner dismissal logic.
     */
    onClose?: () => void
}
