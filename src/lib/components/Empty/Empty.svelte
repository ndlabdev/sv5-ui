<script lang="ts" module>
    import type { EmptyProps } from './empty.types.js'

    export type Props = EmptyProps
</script>

<script lang="ts">
    import { emptyVariants, avatarSizeMap } from './empty.variants.js'
    import Icon from '../Icon/Icon.svelte'
    import Avatar from '../Avatar/Avatar.svelte'
    import Button from '../Button/Button.svelte'
    import type { AvatarSize } from '../Avatar/avatar.types.js'

    let {
        as = 'div',
        ui,
        icon,
        avatar,
        title,
        description,
        actions,
        variant = 'outline',
        size = 'md',
        class: className,
        leading,
        titleSlot,
        descriptionSlot,
        actionsSlot,
        children,
        ...restProps
    }: Props = $props()

    // Get slot classes from variants
    const slots = $derived(
        emptyVariants({
            variant,
            size
        })
    )

    const rootClass = $derived(slots.root({ class: [className, ui?.root] }))
    const iconClass = $derived(slots.icon({ class: ui?.icon }))
    const avatarClass = $derived(slots.avatar({ class: ui?.avatar }))
    const titleClass = $derived(slots.title({ class: ui?.title }))
    const descriptionClass = $derived(slots.description({ class: ui?.description }))
    const actionsClass = $derived(slots.actions({ class: ui?.actions }))

    // Map size to avatar size
    const avatarSize = $derived(avatarSizeMap[size] as AvatarSize)
</script>

<svelte:element this={as} class={rootClass} {...restProps}>
    {#if leading}
        {@render leading()}
    {:else if icon}
        <Icon name={icon} class={iconClass} />
    {:else if avatar}
        <Avatar {...avatar} size={avatar.size ?? avatarSize} class={avatarClass} />
    {/if}

    {#if titleSlot}
        {@render titleSlot()}
    {:else if title}
        <div class={titleClass}>{title}</div>
    {/if}

    {#if descriptionSlot}
        {@render descriptionSlot()}
    {:else if description}
        <p class={descriptionClass}>{description}</p>
    {/if}

    {#if children}
        {@render children()}
    {/if}

    {#if actionsSlot}
        {@render actionsSlot()}
    {:else if actions && actions.length > 0}
        <div class={actionsClass}>
            {#each actions as action}
                <Button size="sm" {...action} />
            {/each}
        </div>
    {/if}
</svelte:element>
