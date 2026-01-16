<script lang="ts" module>
    import type { UserProps } from './user.types.js'

    export type Props = UserProps
</script>

<script lang="ts">
    import { userVariants, avatarSizeMap } from './user.variants.js'
    import Avatar from '../Avatar/Avatar.svelte'
    import Chip from '../Chip/Chip.svelte'

    let {
        as = 'div',
        ui,
        name,
        description,
        avatar,
        chip,
        size = 'md',
        orientation = 'horizontal',
        href,
        class: className,
        avatarSlot,
        nameSlot,
        descriptionSlot,
        children,
        ...restProps
    }: Props = $props()

    // Determine if clickable (has href or onclick)
    const isClickable = $derived(!!href || !!restProps.onclick)

    // Get slot classes from variants
    const slots = $derived(
        userVariants({
            size,
            orientation,
            clickable: isClickable
        })
    )

    const rootClass = $derived(slots.root({ class: [className, ui?.root] }))
    const wrapperClass = $derived(slots.wrapper({ class: ui?.wrapper }))
    const nameClass = $derived(slots.name({ class: ui?.name }))
    const descriptionClass = $derived(slots.description({ class: ui?.description }))
    const avatarClass = $derived(slots.avatar({ class: ui?.avatar }))

    // Get avatar size based on user size
    const avatarSize = $derived(avatarSizeMap[size])

    // Merge avatar props with size
    const mergedAvatarProps = $derived(
        avatar ? { ...avatar, size: avatar.size ?? avatarSize } : undefined
    )

    // Determine chip props
    const chipProps = $derived.by(() => {
        if (!chip) return null
        if (chip === true) return {}
        return chip
    })
</script>

{#snippet userContent()}
    {#if avatarSlot}
        {@render avatarSlot()}
    {:else if mergedAvatarProps}
        {#if chipProps}
            <Chip {...chipProps}>
                <Avatar {...mergedAvatarProps} class={avatarClass} />
            </Chip>
        {:else}
            <Avatar {...mergedAvatarProps} class={avatarClass} />
        {/if}
    {/if}

    {#if name || description || nameSlot || descriptionSlot || children}
        <div class={wrapperClass}>
            {#if nameSlot}
                {@render nameSlot()}
            {:else if name}
                <div class={nameClass}>{name}</div>
            {/if}

            {#if descriptionSlot}
                {@render descriptionSlot()}
            {:else if description}
                <div class={descriptionClass}>{description}</div>
            {/if}

            {#if children}
                {@render children()}
            {/if}
        </div>
    {/if}
{/snippet}

{#if href}
    <a {href} class={rootClass} {...restProps}>
        {@render userContent()}
    </a>
{:else}
    <svelte:element this={as} class={rootClass} {...restProps}>
        {@render userContent()}
    </svelte:element>
{/if}
