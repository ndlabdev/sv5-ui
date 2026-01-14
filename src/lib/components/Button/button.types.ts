import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { SemanticColor } from '../../config/types.js'
import type { buttonVariants } from './button.variants.js'
import type { AvatarProps } from '../Avatar/avatar.types.js'

// Variant-derived types
export type ButtonVariants = VariantProps<typeof buttonVariants>
export type ButtonSlots = keyof ReturnType<typeof buttonVariants>
export type ButtonSize = NonNullable<ButtonVariants['size']>
export type ButtonVariant = NonNullable<ButtonVariants['variant']>

/** Custom styles for each button slot */
export type ButtonUI = Partial<Record<ButtonSlots, string>>

export interface ButtonBaseProps {
    /** The element this component should render as when not a link. Default: 'button' */
    as?: string
    /** Custom styles for each slot (base, label, leadingIcon, trailingIcon) */
    ui?: ButtonUI
    /** Button color theme */
    color?: SemanticColor
    /** Button visual style */
    variant?: ButtonVariant
    /** Button size */
    size?: ButtonSize
    /** Button label text (alternative to children) */
    label?: string
    /** Shows loading spinner and disables button */
    loading?: boolean
    /** Loading icon name (shown when loading) */
    loadingIcon?: string
    /** Disables the button */
    disabled?: boolean
    /** Makes button take full width */
    block?: boolean
    /** Equal padding on all sides (square button) */
    square?: boolean
    /** Truncate label text */
    truncate?: boolean
    /** Icon name - renders as icon-only button */
    icon?: string
    /** Leading icon name (e.g., "lucide:plus", "mdi:home") */
    leadingIcon?: string
    /** Trailing icon name (e.g., "lucide:chevron-right") */
    trailingIcon?: string
    /** Avatar to display on the left side of the button */
    avatar?: AvatarProps
    /** Custom leading content snippet */
    leading?: Snippet
    /** Custom trailing content snippet */
    trailing?: Snippet
    /** Button content */
    children?: Snippet
    /** Additional CSS classes */
    class?: string
    /** URL to navigate to (renders as anchor) */
    href?: string
    /** Button type attribute (only applies when as='button') */
    type?: 'button' | 'submit' | 'reset'
    /** Allows any other HTML attributes */
    [key: string]: unknown
}
