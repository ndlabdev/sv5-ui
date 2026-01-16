<script lang="ts" module>
    import type { AvatarProps } from './avatar.types.js'

    export type Props = AvatarProps
</script>

<script lang="ts">
    import { Avatar } from 'bits-ui'
    import { avatarVariants } from './avatar.variants.js'
    import { getContext } from 'svelte'
    import Icon from '../Icon/Icon.svelte'
    import type { AvatarSize } from './avatar.types.js'

    let {
        ref = $bindable(null),
        ui,
        src,
        alt,
        size,
        icon,
        text,
        delayMs = 0,
        class: className,
        children,
        ...restProps
    }: Props = $props()

    // Get context from AvatarGroup if available
    const groupContext = getContext<{ size: AvatarSize; baseClass: string } | undefined>('avatarGroup')

    // Use group size if available, otherwise use prop
    const resolvedSize = $derived<AvatarSize>(size ?? groupContext?.size ?? 'md')

    // Generate initials from alt text
    const initials = $derived.by(() => {
        if (!alt) return ''
        return alt
            .split(' ')
            .map((word) => word[0])
            .slice(0, 2)
            .join('')
            .toUpperCase()
    })

    // Fallback text to display
    const fallbackText = $derived(text || initials)

    // Get slot classes from variants
    const slots = $derived(avatarVariants({ size: resolvedSize }))

    // Merge group base class with avatar root class
    const rootClass = $derived(slots.root({ class: [groupContext?.baseClass, className, ui?.root] }))
    const imageClass = $derived(slots.image({ class: ui?.image }))
    const fallbackClass = $derived(slots.fallback({ class: ui?.fallback }))
    const iconClass = $derived(slots.icon({ class: ui?.icon }))
</script>

<Avatar.Root
    bind:ref
    class={rootClass}
    {delayMs}
    {...restProps}
>
    {#if children}
        {@render children()}
    {:else}
        {#if src}
            <Avatar.Image
                {src}
                alt={alt || ''}
                class={imageClass}
            />
        {/if}
        <Avatar.Fallback class={fallbackClass}>
            {#if icon}
                <Icon name={icon} class={iconClass} />
            {:else if fallbackText}
                {fallbackText}
            {/if}
        </Avatar.Fallback>
    {/if}
</Avatar.Root>
