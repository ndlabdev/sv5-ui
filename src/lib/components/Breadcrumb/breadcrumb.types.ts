import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements'
import type { breadcrumbVariants } from './breadcrumb.variants.js'
import type { AvatarProps } from '../Avatar/avatar.types.js'

// Variant-derived types
export type BreadcrumbVariants = VariantProps<typeof breadcrumbVariants>
export type BreadcrumbSlots = keyof ReturnType<typeof breadcrumbVariants>

/** Custom styles for each breadcrumb slot */
export type BreadcrumbUI = Partial<Record<BreadcrumbSlots, ClassNameValue>>

/**
 * Breadcrumb item configuration.
 * Represents a single navigation item in the breadcrumb trail.
 */
export type BreadcrumbItem = {
    /**
     * Display label for the breadcrumb item.
     */
    label?: string

    /**
     * Leading icon (Iconify icon name).
     * Displayed before the label.
     */
    icon?: string

    /**
     * Avatar configuration for the item.
     * Displayed before the label (takes precedence over icon).
     */
    avatar?: AvatarProps

    /**
     * Navigation URL for the item.
     * When provided, renders as an anchor element.
     * When not provided, renders as a span.
     */
    to?: string

    /**
     * Whether the item is disabled.
     * @default false
     */
    disabled?: boolean

    /**
     * Custom slot name for this item.
     * Allows custom rendering via named slot.
     */
    slot?: string
}

/**
 * Breadcrumb component props.
 * Displays a hierarchy of links to navigate through a website.
 */
export type BreadcrumbProps = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
    /**
     * The element this component should render as.
     * @default 'nav'
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * Array of breadcrumb items to display.
     */
    items?: BreadcrumbItem[]

    /**
     * Icon to use as separator between items.
     * @default 'lucide:chevron-right'
     */
    separatorIcon?: string

    /**
     * Key to use for extracting label from items.
     * @default 'label'
     */
    labelKey?: string

    /**
     * Custom styles for individual breadcrumb slots.
     */
    ui?: BreadcrumbUI

    /**
     * Additional CSS classes to apply to the root element.
     */
    class?: ClassNameValue

    /**
     * Custom slot for rendering an item.
     * Receives item data and active/disabled state.
     */
    itemSlot?: Snippet<[{ item: BreadcrumbItem; index: number; active: boolean }]>

    /**
     * Custom slot for rendering item leading content (icon/avatar).
     */
    itemLeadingSlot?: Snippet<[{ item: BreadcrumbItem; index: number; active: boolean }]>

    /**
     * Custom slot for rendering item label.
     */
    itemLabelSlot?: Snippet<[{ item: BreadcrumbItem; index: number; active: boolean }]>

    /**
     * Custom slot for rendering item trailing content.
     */
    itemTrailingSlot?: Snippet<[{ item: BreadcrumbItem; index: number; active: boolean }]>

    /**
     * Custom slot for rendering the separator.
     */
    separatorSlot?: Snippet
}
