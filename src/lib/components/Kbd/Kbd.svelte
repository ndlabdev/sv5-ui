<script lang="ts" module>
    import type { KbdProps } from './kbd.types.js'

    export type Props = KbdProps
</script>

<script lang="ts">
    import { kbdVariants, kbdKeysMap, kbdKeysPlatformMap } from './kbd.variants.js'

    let {
        as = 'kbd',
        value,
        color = 'neutral',
        size = 'md',
        variant = 'outline',
        class: className,
        children,
        ...restProps
    }: Props = $props()

    const isMac = $derived(
        typeof navigator !== 'undefined' && /Macintosh;/.test(navigator.userAgent)
    )

    const displayValue = $derived.by(() => {
        if (!value) return null

        const key = value.toLowerCase()

        // Check platform-specific keys first (meta, ctrl, alt)
        const platformKey = kbdKeysPlatformMap[key]
        if (platformKey) {
            return isMac ? platformKey.mac : platformKey.other
        }

        // Check static key symbols
        if (kbdKeysMap[key]) {
            return kbdKeysMap[key]
        }

        // Return original value (e.g., letter keys like 'K', 'A', etc.)
        return value
    })

    const kbdClass = $derived(kbdVariants({ color, size, variant, class: className }))
</script>

<svelte:element this={as} class={kbdClass} {...restProps}>
    {#if children}
        {@render children()}
    {:else if displayValue}
        {displayValue}
    {/if}
</svelte:element>
