import type { Snippet } from 'svelte'
import type { VariantProps } from 'tailwind-variants'
import type { Button } from 'bits-ui'
import type { buttonVariants } from './button.variants.js'
import type { AvatarProps } from '../Avatar/avatar.types.js'
import type { ClassNameValue } from 'tailwind-merge'

// Variant-derived types
export type ButtonVariants = VariantProps<typeof buttonVariants>
export type ButtonSlots = keyof ReturnType<typeof buttonVariants>
export type ButtonSize = NonNullable<ButtonVariants['size']>
export type ButtonColor = NonNullable<ButtonVariants['color']>
export type ButtonVariant = NonNullable<ButtonVariants['variant']>

/** Custom styles for each button slot */
export type ButtonUI = Partial<Record<ButtonSlots, ClassNameValue>>

/**
 * Button component props.
 * Extends bits-ui Button.RootProps with additional styling and content options.
 */
export type ButtonProps = Button.RootProps & {
    /**
     * The color theme of the button.
     * @default 'primary'
     */
    color?: ButtonColor

    /**
     * The visual style variant of the button.
     * @default 'solid'
     */
    variant?: ButtonVariant

    /**
     * The size of the button.
     * @default 'md'
     */
    size?: ButtonSize

    /**
     * Text label to display inside the button.
     * Alternative to using children slot.
     */
    label?: string

    /**
     * Whether the button is in a loading state.
     * When true, displays a loading spinner and disables interaction.
     * @default false
     */
    loading?: boolean

    /**
     * The icon to display when loading.
     * Accepts any Iconify icon name.
     * @default 'lucide:loader-2'
     */
    loadingIcon?: string

    /**
     * Whether the button should take full width of its container.
     * @default false
     */
    block?: boolean

    /**
     * Whether the button should have equal width and height.
     * Useful for icon-only buttons.
     * @default false
     */
    square?: boolean

    /**
     * Whether to truncate text with ellipsis when it overflows.
     * @default false
     */
    truncate?: boolean

    /**
     * Icon to display in icon-only mode.
     * When set, the button renders only this icon without label.
     * Accepts any Iconify icon name.
     */
    icon?: string

    /**
     * Icon to display before the label/children.
     * Accepts any Iconify icon name.
     */
    leadingIcon?: string

    /**
     * Icon to display after the label/children.
     * Accepts any Iconify icon name.
     */
    trailingIcon?: string

    /**
     * Avatar to display before the label/children.
     * Takes precedence over leadingIcon when both are provided.
     */
    avatar?: AvatarProps

    /**
     * Custom content to render before the label.
     * Takes precedence over avatar and leadingIcon.
     */
    leading?: Snippet

    /**
     * Custom content to render after the label.
     * Takes precedence over trailingIcon.
     */
    trailing?: Snippet

    /**
     * Additional CSS classes to apply to the button.
     */
    class?: ClassNameValue

    /**
     * Custom styles for individual button slots.
     * Allows overriding styles for: base, label, leadingIcon, leadingAvatar, trailingIcon.
     */
    ui?: ButtonUI
}
