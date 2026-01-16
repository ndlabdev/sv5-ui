<script lang="ts" module>
    import type { ContainerProps } from './container.types.js'

    export type Props = ContainerProps
</script>

<script lang="ts">
    import { containerVariants } from './container.variants.js'

    let {
        as = 'div',
        ui,
        class: className,
        children,
        ...restProps
    }: Props = $props()

    // Get slot classes from variants
    const slots = $derived(containerVariants())

    const rootClass = $derived(slots.root({ class: [className, ui?.root] }))
</script>

<svelte:element this={as} class={rootClass} {...restProps}>
    {#if children}
        {@render children()}
    {/if}
</svelte:element>
