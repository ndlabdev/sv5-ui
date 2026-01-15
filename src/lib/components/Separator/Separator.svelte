<script lang="ts" module>
    import type { SeparatorProps } from './separator.types.js'

    export type Props = SeparatorProps
</script>

<script lang="ts">
    import { Separator } from 'bits-ui'
    import { separatorVariants } from './separator.variants.js'
    import Icon from '../Icon/Icon.svelte'
    import Avatar from '../Avatar/Avatar.svelte'

    let {
        ref = $bindable(null),
        ui,
        label,
        icon,
        avatar,
        color,
        size,
        type,
        orientation,
        decorative = false,
        class: className,
        content,
        ...restProps
    }: Props = $props()

    const resolvedColor = $derived(color ?? 'neutral')
    const resolvedSize = $derived(size ?? 'xs')
    const resolvedType = $derived(type ?? 'solid')
    const resolvedOrientation = $derived(orientation ?? 'horizontal')

    // Check if separator has content (label, icon, avatar, or content snippet)
    const hasContent = $derived(!!label || !!icon || !!avatar || !!content)

    // Get slot classes from variants
    const slots = $derived(
        separatorVariants({
            color: resolvedColor,
            size: resolvedSize,
            type: resolvedType,
            orientation: resolvedOrientation
        })
    )

    const rootClass = $derived(slots.root({ class: [className, ui?.root] }))
    const borderClass = $derived(slots.border({ class: ui?.border }))
    const containerClass = $derived(slots.container({ class: ui?.container }))
    const iconClass = $derived(slots.icon({ class: ui?.icon }))
    const labelClass = $derived(slots.label({ class: ui?.label }))
</script>

<Separator.Root
    bind:ref
    class={rootClass}
    orientation={resolvedOrientation}
    {decorative}
    {...restProps}
>
    <div class={borderClass}></div>

    {#if hasContent}
        <div class={containerClass}>
            {#if content}
                {@render content()}
            {:else if avatar}
                <Avatar {...avatar} />
            {:else if icon}
                <Icon name={icon} class={iconClass} />
            {:else if label}
                <span class={labelClass}>{label}</span>
            {/if}
        </div>

        <div class={borderClass}></div>
    {/if}
</Separator.Root>
