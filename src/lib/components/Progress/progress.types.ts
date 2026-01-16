import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { Snippet } from 'svelte'
import type { Progress } from 'bits-ui'
import type { progressVariants } from './progress.variants.js'

// Variant-derived types
export type ProgressVariants = VariantProps<typeof progressVariants>
export type ProgressSlots = keyof ReturnType<typeof progressVariants>

/** Custom styles for each progress slot */
export type ProgressUI = Partial<Record<ProgressSlots, ClassNameValue>>

/** Progress color options */
export type ProgressColor = NonNullable<ProgressVariants['color']>

/** Progress size options */
export type ProgressSize = NonNullable<ProgressVariants['size']>

/** Progress orientation options */
export type ProgressOrientation = NonNullable<ProgressVariants['orientation']>

/** Progress animation options */
export type ProgressAnimation = NonNullable<ProgressVariants['animation']>

/**
 * Progress component props.
 * A component to display progress status with customizable animations and styles.
 */
export type ProgressProps = Omit<Progress.RootProps, 'max'> & {
    /**
     * The current progress value.
     * When undefined or null, the progress bar is in indeterminate state.
     */
    value?: number | null

    /**
     * The maximum value of the progress.
     * Can be a number or an array of strings for step display.
     * @default 100
     */
    max?: number | string[]

    /**
     * Whether to display the status text (current value / max).
     * @default false
     */
    status?: boolean

    /**
     * The color of the progress indicator.
     * @default 'primary'
     */
    color?: ProgressColor

    /**
     * The size of the progress bar.
     * @default 'md'
     */
    size?: ProgressSize

    /**
     * The orientation of the progress bar.
     * @default 'horizontal'
     */
    orientation?: ProgressOrientation

    /**
     * Whether to invert the direction of the progress bar.
     * @default false
     */
    inverted?: boolean

    /**
     * The animation style for the indeterminate state.
     * @default 'carousel'
     */
    animation?: ProgressAnimation

    /**
     * Custom styles for individual progress slots.
     * Allows overriding styles for: root, base, indicator, status, steps.
     */
    ui?: ProgressUI

    /**
     * Additional CSS classes to apply to the root element.
     */
    class?: ClassNameValue

    /**
     * Custom slot for status display.
     */
    statusSlot?: Snippet<[{ percent: number }]>
}
