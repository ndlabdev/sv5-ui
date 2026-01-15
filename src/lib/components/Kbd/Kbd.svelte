<script lang="ts" module>
    import type { KbdProps } from './kbd.types.js'

    export type Props = KbdProps
</script>

<script lang="ts">
    import { kbdVariants, kbdKeyMap } from './kbd.variants.js'

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

    // Check if running on macOS (client-side only)
    const isMac = $derived(
        typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform)
    )

    // Get display value for special keys
    const displayValue = $derived.by(() => {
        if (!value) return null

        const lowerValue = value.toLowerCase()
        const keyMapping = kbdKeyMap[lowerValue]

        if (keyMapping) {
            return isMac ? keyMapping.mac : keyMapping.other
        }

        return value
    })

    // Get kbd classes from variants
    const kbdClass = $derived(
        kbdVariants({
            color,
            size,
            variant,
            class: className
        })
    )
</script>

<svelte:element this={as} class={kbdClass} {...restProps}>
    {#if children}
        {@render children()}
    {:else if displayValue}
        {displayValue}
    {/if}
</svelte:element>
