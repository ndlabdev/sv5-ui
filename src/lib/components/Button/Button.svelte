<script lang="ts" module>
    import type { Snippet } from 'svelte'
    import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements'
    import type { SemanticColor } from '../../config/types.js'
    import type { ButtonVariants } from './button.variants.js'

    type ButtonSize = NonNullable<ButtonVariants['size']>
    type ButtonVariant = NonNullable<ButtonVariants['variant']>

    interface BaseProps {
        /** Button color theme */
        color?: SemanticColor
        /** Button visual style */
        variant?: ButtonVariant
        /** Button size */
        size?: ButtonSize
        /** Shows loading spinner and disables button */
        loading?: boolean
        /** Disables the button */
        disabled?: boolean
        /** Makes button take full width */
        fullWidth?: boolean
        /** Icon-only mode (square button) */
        iconOnly?: boolean
        /** Leading icon name (e.g., "lucide:plus", "mdi:home") */
        leadingIcon?: string
        /** Trailing icon name (e.g., "lucide:chevron-right") */
        trailingIcon?: string
        /** Custom leading icon snippet (overrides leadingIcon) */
        leadingIconSlot?: Snippet
        /** Custom trailing icon snippet (overrides trailingIcon) */
        trailingIconSlot?: Snippet
        /** Loading spinner snippet */
        loadingSpinner?: Snippet
        /** Button content */
        children?: Snippet
        /** Additional CSS classes */
        class?: string
    }

    interface ButtonProps
        extends BaseProps,
            Omit<HTMLButtonAttributes, 'class' | 'disabled' | 'color'> {
        /** Render as link */
        href?: never
    }

    interface LinkProps
        extends BaseProps,
            Omit<HTMLAnchorAttributes, 'class' | 'href' | 'color'> {
        /** Render as link */
        href: string
    }

    export type Props = ButtonProps | LinkProps
</script>

<script lang="ts">
    import { buttonVariants } from './button.variants.js'
    import { getConfigContext } from '../../config/context.svelte.js'
    import Icon from '../Icon/Icon.svelte'

    let {
        color,
        variant,
        size,
        loading = false,
        disabled = false,
        fullWidth = false,
        iconOnly = false,
        leadingIcon,
        trailingIcon,
        leadingIconSlot,
        trailingIconSlot,
        loadingSpinner,
        children,
        class: className,
        href,
        ...restProps
    }: Props = $props()

    const config = getConfigContext()

    // Get defaults from config
    const defaults = $derived(config.ui?.button)
    const resolvedColor = $derived(color ?? defaults?.defaultColor ?? 'primary')
    const resolvedVariant = $derived(variant ?? defaults?.defaultVariant ?? 'solid')
    const resolvedSize = $derived(size ?? defaults?.defaultSize ?? 'md')

    // Icon sizes based on button size
    const iconSize = $derived(
        resolvedSize === 'xs'
            ? 14
            : resolvedSize === 'sm'
              ? 16
              : resolvedSize === 'lg'
                ? 20
                : resolvedSize === 'xl'
                  ? 22
                  : 18
    )

    const classes = $derived(
        buttonVariants({
            variant: resolvedVariant,
            color: resolvedColor,
            size: resolvedSize,
            fullWidth,
            iconOnly,
            loading,
            class: className
        })
    )

    const isDisabled = $derived(disabled || loading)
</script>

{#snippet spinnerIcon()}
    <Icon name="lucide:loader-2" size={iconSize} class="animate-spin" />
{/snippet}

{#snippet buttonContent()}
    {#if loading}
        {#if loadingSpinner}
            {@render loadingSpinner()}
        {:else}
            {@render spinnerIcon()}
        {/if}
    {:else if leadingIconSlot}
        {@render leadingIconSlot()}
    {:else if leadingIcon}
        <Icon name={leadingIcon} size={iconSize} />
    {/if}

    {#if children && !iconOnly}
        {@render children()}
    {:else if children && iconOnly && !loading}
        {@render children()}
    {/if}

    {#if !loading}
        {#if trailingIconSlot}
            {@render trailingIconSlot()}
        {:else if trailingIcon}
            <Icon name={trailingIcon} size={iconSize} />
        {/if}
    {/if}
{/snippet}

{#if href && !isDisabled}
    <a {href} class={classes} {...restProps as HTMLAnchorAttributes}>
        {@render buttonContent()}
    </a>
{:else}
    <button
        type="button"
        class={classes}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...restProps as HTMLButtonAttributes}
    >
        {@render buttonContent()}
    </button>
{/if}
