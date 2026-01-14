<script lang="ts" module>
    import type { ButtonBaseProps } from './button.types.js'

    export type Props = ButtonBaseProps
</script>

<script lang="ts">
    import { buttonVariants } from './button.variants.js'
    import { getConfigContext } from '../../config/context.svelte.js'
    import Icon from '../Icon/Icon.svelte'
    import Avatar from '../Avatar/Avatar.svelte'

    let {
        as = 'button',
        ui,
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
        avatar,
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

    const baseClass = $derived(slots.base({ class: [className, ui?.base] }))
    const labelClass = $derived(slots.label({ class: ui?.label }))
    const leadingIconClass = $derived(slots.leadingIcon({ class: ui?.leadingIcon }))
    const leadingAvatarClass = $derived(slots.leadingAvatar({ class: ui?.leadingAvatar }))
    const trailingIconClass = $derived(slots.trailingIcon({ class: ui?.trailingIcon }))

    const isDisabled = $derived(disabled || loading)
</script>

{#snippet buttonContent()}
    <!-- Leading section -->
    {#if loading}
        <Icon name={loadingIcon} class={leadingIconClass} />
    {:else if leading}
        {@render leading()}
    {:else if avatar}
        <Avatar {...avatar} class={leadingAvatarClass} />
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
        href={isDisabled ? undefined : href}
        class={baseClass}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        {...restProps}
    >
        {@render buttonContent()}
    </a>
{:else if as === 'button'}
    <button
        {type}
        disabled={isDisabled}
        class={baseClass}
        aria-busy={loading || undefined}
        {...restProps}
    >
        {@render buttonContent()}
    </button>
{:else}
    <svelte:element
        this={as}
        class={baseClass}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        {...restProps}
    >
        {@render buttonContent()}
    </svelte:element>
{/if}
