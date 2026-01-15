<script lang="ts" module>
    import type { BadgeProps } from './badge.types.js'

    export type Props = BadgeProps
</script>

<script lang="ts">
    import { badgeVariants } from './badge.variants.js'
    import Icon from '../Icon/Icon.svelte'
    import Avatar from '../Avatar/Avatar.svelte'

    let {
        as = 'span',
        ui,
        label,
        color = 'primary',
        variant = 'solid',
        size = 'md',
        square = false,
        icon,
        leadingIcon,
        trailingIcon,
        avatar,
        class: className,
        leading,
        children,
        trailing,
        ...restProps
    }: Props = $props()

    const isIconOnly = $derived(!!icon || (square && !label && !children))

    // Get slot classes from variants
    const slots = $derived(
        badgeVariants({
            variant,
            color,
            size,
            square: isIconOnly || square
        })
    )

    const baseClass = $derived(slots.base({ class: [className, ui?.base] }))
    const labelClass = $derived(slots.label({ class: ui?.label }))
    const leadingIconClass = $derived(slots.leadingIcon({ class: ui?.leadingIcon }))
    const trailingIconClass = $derived(slots.trailingIcon({ class: ui?.trailingIcon }))
    const leadingAvatarClass = $derived(slots.leadingAvatar({ class: ui?.leadingAvatar }))
</script>

<svelte:element this={as} class={baseClass} {...restProps}>
    <!-- Leading section -->
    {#if leading}
        {@render leading()}
    {:else if avatar}
        <Avatar {...avatar} class={leadingAvatarClass} />
    {:else if leadingIcon}
        <Icon name={leadingIcon} class={leadingIconClass} />
    {/if}

    <!-- Icon-only mode -->
    {#if icon}
        <Icon name={icon} class={leadingIconClass} />
    {:else if !isIconOnly}
        <!-- Label or children -->
        {#if label !== undefined}
            <span class={labelClass}>{label}</span>
        {:else if children}
            <span class={labelClass}>{@render children()}</span>
        {/if}
    {/if}

    <!-- Trailing section -->
    {#if trailing}
        {@render trailing()}
    {:else if trailingIcon}
        <Icon name={trailingIcon} class={trailingIconClass} />
    {/if}
</svelte:element>
