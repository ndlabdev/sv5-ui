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
        /** Custom leading content snippet */
        leading?: Snippet
        /** Custom trailing content snippet */
        trailing?: Snippet
        /** Button content */
        children?: Snippet
        /** Additional CSS classes */
        class?: string
    }

    interface ButtonElementProps
        extends BaseProps,
            Omit<HTMLButtonAttributes, 'class' | 'disabled' | 'color'> {
        /** Render as link */
        href?: undefined
    }

    interface AnchorElementProps
        extends BaseProps,
            Omit<HTMLAnchorAttributes, 'class' | 'href' | 'color'> {
        /** URL to navigate to (renders as anchor) */
        href: string
    }

    export type Props = ButtonElementProps | AnchorElementProps
</script>

<script lang="ts">
    import { buttonVariants } from './button.variants.js'
    import { getConfigContext } from '../../config/context.svelte.js'
    import Icon from '../Icon/Icon.svelte'

    let {
        color,
        variant,
        size,
        label,
        loading = false,
        loadingIcon = 'lucide:loader-2',
        disabled = false,
        block = false,
        square = false,
        truncate = false,
        icon,
        leadingIcon,
        trailingIcon,
        leading,
        trailing,
        children,
        class: className,
        href,
        type = 'button' as const,
        ...restProps
    }: Props = $props()

    const config = getConfigContext()

    // Get defaults from config
    const defaults = $derived(config.ui?.button)
    const resolvedColor = $derived(color ?? defaults?.defaultColor ?? 'primary')
    const resolvedVariant = $derived(variant ?? defaults?.defaultVariant ?? 'solid')
    const resolvedSize = $derived(size ?? defaults?.defaultSize ?? 'md')

    // Determine if icon-only mode
    const isIconOnly = $derived(!!icon || (square && !label && !children))

    // Has leading content (for loading animation logic)
    const hasLeading = $derived(loading || !!leading || !!leadingIcon)
    const hasTrailing = $derived(!!trailing || !!trailingIcon)

    // Get slot classes from variants
    const slots = $derived(
        buttonVariants({
            variant: resolvedVariant,
            color: resolvedColor,
            size: resolvedSize,
            block,
            square: isIconOnly || square,
            truncate,
            loading
        })
    )

    const baseClass = $derived(slots.base({ class: className }))
    const labelClass = $derived(slots.label())
    const leadingIconClass = $derived(slots.leadingIcon())
    const trailingIconClass = $derived(slots.trailingIcon())

    const isDisabled = $derived(disabled || loading)
</script>

{#snippet buttonContent()}
    <!-- Leading section -->
    {#if loading}
        <Icon name={loadingIcon} class={leadingIconClass} />
    {:else if leading}
        {@render leading()}
    {:else if leadingIcon}
        <Icon name={leadingIcon} class={leadingIconClass} />
    {/if}

    <!-- Icon-only mode -->
    {#if icon && !loading}
        <Icon name={icon} class={leadingIconClass} />
    {:else if !isIconOnly}
        <!-- Label/Content -->
        {#if label}
            <span class={labelClass}>{label}</span>
        {:else if children}
            <span class={labelClass}>{@render children()}</span>
        {/if}
    {/if}

    <!-- Trailing section -->
    {#if !loading}
        {#if trailing}
            {@render trailing()}
        {:else if trailingIcon}
            <Icon name={trailingIcon} class={trailingIconClass} />
        {/if}
    {/if}
{/snippet}

{#if href}
    <a
        {href}
        class={baseClass}
        aria-disabled={isDisabled}
        {...restProps as Omit<HTMLAnchorAttributes, 'class' | 'href' | 'color'>}
    >
        {@render buttonContent()}
    </a>
{:else}
    <button
        type={type as HTMLButtonAttributes['type']}
        class={baseClass}
        disabled={isDisabled}
        aria-busy={loading}
        {...restProps as Omit<HTMLButtonAttributes, 'class' | 'disabled' | 'color'>}
    >
        {@render buttonContent()}
    </button>
{/if}
