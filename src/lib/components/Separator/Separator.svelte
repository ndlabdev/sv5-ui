<script lang="ts" module>
    import type { SeparatorProps } from './separator.types.js'

    export type Props = SeparatorProps
</script>

<script lang="ts">
    import { separatorVariants } from './separator.variants.js'
    import Icon from '../Icon/Icon.svelte'
    import Avatar from '../Avatar/Avatar.svelte'

    let {
        as = 'div',
        ui,
        label,
        icon,
        avatar,
        color = 'neutral',
        size = 'xs',
        type = 'solid',
        orientation = 'horizontal',
        decorative = false,
        class: className,
        children,
        ...restProps
    }: Props = $props()

    // Check if separator has content (label, icon, avatar, or children)
    const hasContent = $derived(!!label || !!icon || !!avatar || !!children)

    // Get slot classes from variants
    const slots = $derived(
        separatorVariants({
            color,
            size,
            type,
            orientation
        })
    )

    const rootClass = $derived(slots.root({ class: [className, ui?.root] }))
    const borderClass = $derived(slots.border({ class: ui?.border }))
    const containerClass = $derived(slots.container({ class: ui?.container }))
    const iconClass = $derived(slots.icon({ class: ui?.icon }))
    const labelClass = $derived(slots.label({ class: ui?.label }))

    // Accessibility attributes
    const a11yProps = $derived(
        decorative
            ? { role: 'none' as const, 'aria-hidden': true as const }
            : { role: 'separator' as const, 'aria-orientation': orientation as 'horizontal' | 'vertical' }
    )
</script>

<svelte:element this={as} class={rootClass} {...a11yProps} {...restProps}>
    <!-- First border line -->
    <div class={borderClass}></div>

    <!-- Content in the center (if any) -->
    {#if hasContent}
        <div class={containerClass}>
            {#if children}
                {@render children()}
            {:else if avatar}
                <Avatar {...avatar} />
            {:else if icon}
                <Icon name={icon} class={iconClass} />
            {:else if label}
                <span class={labelClass}>{label}</span>
            {/if}
        </div>

        <!-- Second border line (only when content exists) -->
        <div class={borderClass}></div>
    {/if}
</svelte:element>
