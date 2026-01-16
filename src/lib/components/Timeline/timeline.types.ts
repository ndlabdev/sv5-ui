import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { HTMLAttributes } from 'svelte/elements'
import type { timelineVariants } from './timeline.variants.js'
import type { SemanticColor } from '../../config/types.js'
import type { AvatarProps } from '../Avatar/avatar.types.js'

// Variant-derived types
export type TimelineVariants = VariantProps<typeof timelineVariants>
export type TimelineSlots = keyof ReturnType<typeof timelineVariants>
export type TimelineSize = NonNullable<TimelineVariants['size']>
export type TimelineOrientation = NonNullable<TimelineVariants['orientation']>

/** Custom styles for each timeline slot */
export type TimelineUI = Partial<Record<TimelineSlots, ClassNameValue>>

/** State of a timeline item */
export type TimelineItemState = 'completed' | 'active' | 'pending'

/**
 * Timeline item configuration.
 * Represents a single event in the timeline.
 */
export interface TimelineItem {
    /**
     * Unique identifier for the item.
     * Used for tracking active state and slot naming.
     */
    value?: string | number

    /**
     * Date or time label for the event.
     */
    date?: string

    /**
     * Title/heading of the event.
     */
    title?: string

    /**
     * Description or details of the event.
     */
    description?: string

    /**
     * Icon to display in the indicator.
     * Accepts any Iconify icon name.
     */
    icon?: string

    /**
     * Avatar configuration to display in the indicator.
     * Takes precedence over icon.
     */
    avatar?: AvatarProps

    /**
     * Custom slot name for this item.
     * Enables named slots like `{item.slot}-indicator`, `{item.slot}-title`, etc.
     */
    slot?: string

    /**
     * Additional CSS classes for this item.
     */
    class?: ClassNameValue
}

/**
 * Timeline component props.
 * Displays a sequence of events with dates, titles, icons or avatars.
 */
export type TimelineProps = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
    /**
     * The element this component should render as.
     * @default 'div'
     */
    as?: string

    /**
     * Array of timeline items to display.
     */
    items?: TimelineItem[]

    /**
     * The size of the timeline indicators and spacing.
     * @default 'md'
     */
    size?: TimelineSize

    /**
     * Color theme for active/completed states.
     * @default 'primary'
     */
    color?: SemanticColor

    /**
     * Layout orientation of the timeline.
     * @default 'vertical'
     */
    orientation?: TimelineOrientation

    /**
     * Reverse the direction of completion.
     * When true, items after active are completed instead of before.
     * @default false
     */
    reverse?: boolean

    /**
     * The currently active item value.
     * Items before this are marked as completed (or after if reverse=true).
     */
    value?: string | number

    /**
     * Additional CSS classes to apply to the root element.
     */
    class?: ClassNameValue

    /**
     * Custom styles for individual timeline slots.
     */
    ui?: TimelineUI

    /**
     * Custom indicator slot for all items.
     * Receives the item and its state.
     */
    indicator?: Snippet<[{ item: TimelineItem; index: number; state: TimelineItemState }]>

    /**
     * Custom date slot for all items.
     * Receives the item and its state.
     */
    dateSlot?: Snippet<[{ item: TimelineItem; index: number; state: TimelineItemState }]>

    /**
     * Custom title slot for all items.
     * Receives the item and its state.
     */
    titleSlot?: Snippet<[{ item: TimelineItem; index: number; state: TimelineItemState }]>

    /**
     * Custom description slot for all items.
     * Receives the item and its state.
     */
    descriptionSlot?: Snippet<[{ item: TimelineItem; index: number; state: TimelineItemState }]>

    /**
     * Custom content slot for all items.
     * Receives the item and its state.
     */
    children?: Snippet<[{ item: TimelineItem; index: number; state: TimelineItemState }]>
}
