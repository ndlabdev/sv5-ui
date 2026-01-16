<script lang="ts" module>
    import type { SkeletonProps } from './skeleton.types.js'

    export type Props = SkeletonProps
</script>

<script lang="ts">
    import { skeletonVariants } from './skeleton.variants.js'

    let {
        as = 'div',
        ui,
        class: className,
        children,
        ...restProps
    }: Props = $props()

    const slots = $derived(skeletonVariants())

    const rootClass = $derived(slots.root({ class: [ui?.root, className] }))
</script>

<svelte:element this={as} class={rootClass} {...restProps}>
    {#if children}
        {@render children()}
    {/if}
</svelte:element>
