<script lang="ts" module>
    import type { ButtonProps } from './button.types.js'

    export type Props = ButtonProps
</script>

<script lang="ts">
    import { Button } from 'bits-ui'
    import { buttonVariants } from './button.variants.js'
    import { getConfigContext } from '../../config/context.svelte.js'
    import Icon from '../Icon/Icon.svelte'
    import Avatar from '../Avatar/Avatar.svelte'

    let {
        ref = $bindable(null),
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

    // bits-ui Button handles disabled state internally
    const isDisabled = $derived(disabled || loading)
</script>

{#snippet buttonContent()}
    {#if loading}
        <Icon name={loadingIcon} class={leadingIconClass} />
    {:else if leading}
        {@render leading()}
    {:else if avatar}
        <Avatar {...avatar} class={leadingAvatarClass} />
    {:else if leadingIcon}
        <Icon name={leadingIcon} class={leadingIconClass} />
    {/if}

    {#if icon && !loading}
        <Icon name={icon} class={leadingIconClass} />
    {:else if !isIconOnly}
        {#if label}
            <span class={labelClass}>{label}</span>
        {:else if children}
            <span class={labelClass}>{@render children()}</span>
        {/if}
    {/if}

    {#if !loading}
        {#if trailing}
            {@render trailing()}
        {:else if trailingIcon}
            <Icon name={trailingIcon} class={trailingIconClass} />
        {/if}
    {/if}
{/snippet}

<Button.Root
    bind:ref
    class={baseClass}
    disabled={isDisabled}
    {...restProps}
>
    {@render buttonContent()}
</Button.Root>
