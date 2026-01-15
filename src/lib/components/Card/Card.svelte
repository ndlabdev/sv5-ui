<script lang="ts" module>
    import type { CardProps } from './card.types.js'

    export type Props = CardProps
</script>

<script lang="ts">
    import { cardVariants } from './card.variants.js'

    let {
        as = 'div',
        ui,
        variant = 'outline',
        class: className,
        header,
        children,
        footer,
        ...restProps
    }: Props = $props()

    // Get slot classes from variants
    const slots = $derived(cardVariants({ variant }))

    const rootClass = $derived(slots.root({ class: [className, ui?.root] }))
    const headerClass = $derived(slots.header({ class: ui?.header }))
    const bodyClass = $derived(slots.body({ class: ui?.body }))
    const footerClass = $derived(slots.footer({ class: ui?.footer }))
</script>

<svelte:element this={as} class={rootClass} {...restProps}>
    {#if header}
        <div class={headerClass}>
            {@render header()}
        </div>
    {/if}

    {#if children}
        <div class={bodyClass}>
            {@render children()}
        </div>
    {/if}

    {#if footer}
        <div class={footerClass}>
            {@render footer()}
        </div>
    {/if}
</svelte:element>
