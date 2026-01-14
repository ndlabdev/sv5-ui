<script lang="ts" module>
    import type { AvatarProps } from './avatar.types.js'

    export type Props = AvatarProps
</script>

<script lang="ts">
    import { avatarVariants } from './avatar.variants.js'
    import Icon from '../Icon/Icon.svelte'

    let {
        as = 'span',
        ui,
        src,
        alt,
        size,
        icon,
        text,
        class: className,
        children,
        ...restProps
    }: Props = $props()

    // Track image load error
    let imageError = $state(false)

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

    // Determine what to show
    const showImage = $derived(src && !imageError)
    const fallbackText = $derived(text || initials)

    // Get slot classes from variants
    const slots = $derived(avatarVariants({ size }))

    const rootClass = $derived(slots.root({ class: [className, ui?.root] }))
    const imageClass = $derived(slots.image({ class: ui?.image }))
    const fallbackClass = $derived(slots.fallback({ class: ui?.fallback }))
    const iconClass = $derived(slots.icon({ class: ui?.icon }))

    function handleImageError() {
        imageError = true
    }

    // Reset error state when src changes
    $effect(() => {
        if (src) {
            imageError = false
        }
    })
</script>

{#if as === 'span'}
    <span class={rootClass} {...restProps}>
        {#if showImage}
            <img
                {src}
                alt={alt || ''}
                class={imageClass}
                onerror={handleImageError}
            />
        {:else if children}
            {@render children()}
        {:else if icon}
            <Icon name={icon} class={iconClass} />
        {:else if fallbackText}
            <span class={fallbackClass}>{fallbackText}</span>
        {/if}
    </span>
{:else}
    <svelte:element
        this={as}
        class={rootClass}
        {...restProps}
    >
        {#if showImage}
            <img
                {src}
                alt={alt || ''}
                class={imageClass}
                onerror={handleImageError}
            />
        {:else if children}
            {@render children()}
        {:else if icon}
            <Icon name={icon} class={iconClass} />
        {:else if fallbackText}
            <span class={fallbackClass}>{fallbackText}</span>
        {/if}
    </svelte:element>
{/if}
