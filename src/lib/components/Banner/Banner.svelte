<script lang="ts" module>
    import type { BannerProps } from './banner.types.js'

    export type Props = BannerProps
</script>

<script lang="ts">
    import { base } from '$app/paths'
    import { bannerVariants } from './banner.variants.js'
    import Icon from '../Icon/Icon.svelte'
    import Button from '../Button/Button.svelte'

    let {
        id,
        ui,
        icon,
        title,
        color = 'primary',
        close = false,
        closeIcon = 'lucide:x',
        actions,
        href,
        target,
        class: className,
        leading,
        titleSlot,
        actionsSlot,
        closeSlot,
        onClose
    }: Props = $props()

    // Resolve URL with base path
    function resolveUrl(url: string): string {
        if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('#')) {
            return url
        }
        return `${base}${url}`
    }

    // Track whether the banner is dismissed
    let isDismissed = $state(false)

    // Check local storage on mount for persisted dismissal
    $effect(() => {
        if (id && typeof window !== 'undefined') {
            const stored = localStorage.getItem(`banner-${id}`)
            if (stored === 'dismissed') {
                isDismissed = true
            }
        }
    })

    // Get slot classes from variants
    const slots = $derived(
        bannerVariants({
            color,
            href: !!href
        })
    )

    const rootClass = $derived(slots.root({ class: [className, ui?.root] }))
    const containerClass = $derived(slots.container({ class: ui?.container }))
    const leftClass = $derived(slots.left({ class: ui?.left }))
    const centerClass = $derived(slots.center({ class: ui?.center }))
    const rightClass = $derived(slots.right({ class: ui?.right }))
    const iconClass = $derived(slots.icon({ class: ui?.icon }))
    const titleClass = $derived(slots.title({ class: ui?.title }))
    const actionsClass = $derived(slots.actions({ class: ui?.actions }))
    const closeClass = $derived(slots.close({ class: ui?.close }))

    // Determine close button props
    const closeButtonProps = $derived.by(() => {
        if (!close) return null
        if (close === true) return {}
        return close
    })

    // Handle close click
    function handleClose(event: MouseEvent) {
        event.preventDefault()
        event.stopPropagation()

        if (id && typeof window !== 'undefined') {
            localStorage.setItem(`banner-${id}`, 'dismissed')
        }

        isDismissed = true
        onClose?.()
    }
</script>

{#snippet bannerContent()}
    <div class={containerClass}>
        <div class={leftClass}>
            {#if leading}
                {@render leading()}
            {/if}
        </div>

        <div class={centerClass}>
            {#if icon}
                <Icon name={icon} class={iconClass} />
            {/if}

            {#if titleSlot}
                {@render titleSlot()}
            {:else if title}
                <span class={titleClass}>{title}</span>
            {/if}

            {#if actionsSlot}
                {@render actionsSlot()}
            {:else if actions && actions.length > 0}
                <div class={actionsClass}>
                    {#each actions as action, index (index)}
                        <Button size="xs" color="neutral" variant="link" {...action} />
                    {/each}
                </div>
            {/if}
        </div>

        <div class={rightClass}>
            {#if closeSlot}
                {@render closeSlot()}
            {:else if closeButtonProps}
                <Button
                    icon={closeIcon}
                    variant="ghost"
                    color="neutral"
                    size="xs"
                    square
                    class={closeClass}
                    onclick={handleClose}
                    aria-label="Close banner"
                    {...closeButtonProps}
                />
            {/if}
        </div>
    </div>
{/snippet}

<div class={rootClass} role="banner" {id}>
    {#if !isDismissed}
        {#if href}
            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- dynamic URLs from props -->
            <a href={resolveUrl(href)} {target}>
                {@render bannerContent()}
            </a>
        {:else}
            {@render bannerContent()}
        {/if}
    {/if}
</div>
