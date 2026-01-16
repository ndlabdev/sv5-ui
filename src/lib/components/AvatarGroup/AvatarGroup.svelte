<script lang="ts" module>
    import type { AvatarGroupProps } from './avatar-group.types.js'

    export type Props = AvatarGroupProps
</script>

<script lang="ts">
    import { avatarGroupVariants } from './avatar-group.variants.js'
    import { setContext } from 'svelte'
    import Avatar from '../Avatar/Avatar.svelte'
    import type { AvatarSize } from '../Avatar/avatar.types.js'

    let {
        as = 'div',
        ui,
        size = 'md',
        avatars,
        max,
        class: className,
        children,
        ...restProps
    }: Props = $props()

    // Get slot classes from variants
    const slots = $derived(avatarGroupVariants({ size }))

    const rootClass = $derived(slots.root({ class: [className, ui?.root] }))
    const baseClass = $derived(slots.base({ class: ui?.base }))

    // Provide context for child avatars to inherit size and base styles
    setContext<{ size: AvatarSize; baseClass: string }>('avatarGroup', {
        get size() {
            return size
        },
        get baseClass() {
            return baseClass
        }
    })

    // Calculate visible avatars when using avatars prop with max limit
    const visibleAvatars = $derived.by(() => {
        if (!avatars) return []
        if (max === undefined || max <= 0 || avatars.length <= max) {
            return avatars
        }
        return avatars.slice(0, max)
    })

    // Calculate overflow count for "+N" indicator
    const overflowCount = $derived.by(() => {
        if (!avatars || max === undefined || max <= 0) return 0
        return Math.max(0, avatars.length - max)
    })
</script>

<svelte:element this={as} class={rootClass} {...restProps}>
    {#if avatars}
        {#if overflowCount > 0}
            <Avatar text={`+${overflowCount}`} />
        {/if}
        {#each visibleAvatars as avatar}
            <Avatar {...avatar} />
        {/each}
    {:else if children}
        {@render children()}
    {/if}
</svelte:element>
