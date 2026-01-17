<script lang="ts" module>
    import type { MarqueeProps } from './marquee.types.js'

    export type Props = MarqueeProps
</script>

<script lang="ts">
    import './marquee.css'
    import { marqueeVariants } from './marquee.variants.js'

    let {
        as = 'div',
        pauseOnHover = false,
        reverse = false,
        orientation = 'horizontal',
        repeat = 4,
        overlay = true,
        ui,
        class: className,
        children,
        ...restProps
    }: Props = $props()

    const slots = $derived(
        marqueeVariants({
            orientation,
            reverse,
            pauseOnHover,
            overlay
        })
    )

    const rootClass = $derived(slots.root({ class: [ui?.root, className] }))
    const contentClass = $derived(slots.content({ class: ui?.content }))

    const repeatArray = $derived(Array.from({ length: repeat }, (_, i) => i))
</script>

<svelte:element this={as} class={rootClass} {...restProps}>
    {#each repeatArray as index (index)}
        <div class={contentClass} aria-hidden={index > 0 ? 'true' : undefined}>
            {#if children}
                {@render children()}
            {/if}
        </div>
    {/each}
</svelte:element>
