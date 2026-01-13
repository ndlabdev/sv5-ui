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
        /** Icon to show before content */
        leadingIcon?: Snippet
        /** Icon to show after content */
        trailingIcon?: Snippet
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

    const loadingIcon = $derived(config.icons?.loading ?? 'i-lucide-loader-2')

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

{#snippet defaultSpinner()}
    <span class="{loadingIcon} h-4 w-4 animate-spin" aria-hidden="true"></span>
{/snippet}

{#if href && !isDisabled}
    <a {href} class={classes} {...restProps as HTMLAnchorAttributes}>
        {#if loading}
            {#if loadingSpinner}
                {@render loadingSpinner()}
            {:else}
                {@render defaultSpinner()}
            {/if}
        {:else if leadingIcon}
            {@render leadingIcon()}
        {/if}

        {#if children && !iconOnly}
            {@render children()}
        {:else if children && iconOnly && !loading}
            {@render children()}
        {/if}

        {#if trailingIcon && !loading}
            {@render trailingIcon()}
        {/if}
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
        {#if loading}
            {#if loadingSpinner}
                {@render loadingSpinner()}
            {:else}
                {@render defaultSpinner()}
            {/if}
        {:else if leadingIcon}
            {@render leadingIcon()}
        {/if}

        {#if children && !iconOnly}
            {@render children()}
        {:else if children && iconOnly && !loading}
            {@render children()}
        {/if}

        {#if trailingIcon && !loading}
            {@render trailingIcon()}
        {/if}
    </button>
{/if}
