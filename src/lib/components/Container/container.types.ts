import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { HTMLAttributes } from 'svelte/elements'
import type { containerVariants } from './container.variants.js'

// Variant-derived types
export type ContainerVariants = VariantProps<typeof containerVariants>
export type ContainerSlots = keyof ReturnType<typeof containerVariants>

/** Custom styles for each container slot */
export type ContainerUI = Partial<Record<ContainerSlots, ClassNameValue>>

/**
 * Container component props.
 * A layout component that centers and constrains content width.
 */
export type ContainerProps = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
    /**
     * The HTML element to render as.
     * @default 'div'
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * Additional CSS classes to apply to the container.
     */
    class?: ClassNameValue

    /**
     * Custom styles for individual container slots.
     * Allows overriding styles for: root.
     */
    ui?: ContainerUI
}
