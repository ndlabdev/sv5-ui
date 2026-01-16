import type { HTMLAttributes } from 'svelte/elements'
import type { VariantProps } from 'tailwind-variants'
import type { ClassNameValue } from 'tailwind-merge'
import type { SemanticColor } from '../../config/types.js'
import type { kbdVariants } from './kbd.variants.js'

// Variant-derived types
export type KbdVariants = VariantProps<typeof kbdVariants>
export type KbdSize = NonNullable<KbdVariants['size']>
export type KbdVariant = NonNullable<KbdVariants['variant']>

export interface KbdProps extends Omit<HTMLAttributes<HTMLElement>, 'class'> {
    /**
     * HTML element to render
     * @default "kbd"
     */
    as?: keyof HTMLElementTagNameMap

    /**
     * Key value to display. Supports special keys that auto-convert to symbols.
     * On macOS: meta → ⌘, ctrl → ⌃, alt → ⌥, shift → ⇧
     * On other OS: meta → Ctrl, ctrl → Ctrl, alt → Alt, shift → Shift
     * @example "meta", "shift", "K", "enter", "escape"
     */
    value?: string

    /**
     * Color theme
     * @default "neutral"
     */
    color?: SemanticColor

    /**
     * Size variant
     * @default "md"
     */
    size?: KbdSize

    /**
     * Visual style variant
     * @default "outline"
     */
    variant?: KbdVariant

    /** Additional CSS classes */
    class?: ClassNameValue
}
