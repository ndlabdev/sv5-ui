import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { HTMLAttributes } from 'svelte/elements'
import type { skeletonVariants } from './skeleton.variants.js'

// Variant-derived types
export type SkeletonVariants = VariantProps<typeof skeletonVariants>
export type SkeletonSlots = keyof ReturnType<typeof skeletonVariants>

/** Custom styles for each skeleton slot */
export type SkeletonUI = Partial<Record<SkeletonSlots, ClassNameValue>>

/**
 * Skeleton component props.
 * A placeholder to show while content is loading.
 */
export type SkeletonProps = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
    /**
     * The element this component should render as.
     * @default 'div'
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * Custom styles for individual skeleton slots.
     * Allows overriding styles for: root.
     */
    ui?: SkeletonUI

    /**
     * Additional CSS classes to apply to the root element.
     */
    class?: ClassNameValue
}
