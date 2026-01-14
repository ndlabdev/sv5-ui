<script lang="ts" module>
    import type { ChipProps } from './chip.types.js'

    export type Props = ChipProps
</script>

<script lang="ts">
    import { chipVariants } from './chip.variants.js'

    let {
        as = 'div',
        ui,
        text,
        color = 'primary',
        size = 'md',
        position = 'top-right',
        inset = false,
        standalone = false,
        show = true,
        class: className,
        children,
        content,
        ...restProps
    }: Props = $props()

    // Get slot classes from variants
    const slots = $derived(chipVariants({ color, size, position, inset, standalone }))

    const rootClass = $derived(slots.root({ class: [className, ui?.root] }))
    const baseClass = $derived(slots.base({ class: ui?.base }))

    // Expand chip size when it has text content
    const hasContent = $derived(text !== undefined || content !== undefined)
    const chipSizeClass = $derived.by(() => {
        if (!hasContent) return ''
        // When chip has text, expand to fit content
        switch (size) {
            case '3xs': return 'min-w-[10px] h-[10px] px-0.5'
            case '2xs': return 'min-w-3 h-3 px-0.5'
            case 'xs': return 'min-w-3.5 h-3.5 px-0.5'
            case 'sm': return 'min-w-4 h-4 px-1'
            case 'md': return 'min-w-[18px] h-[18px] px-1'
            case 'lg': return 'min-w-5 h-5 px-1'
            case 'xl': return 'min-w-[22px] h-[22px] px-1.5'
            case '2xl': return 'min-w-6 h-6 px-1.5'
            case '3xl': return 'min-w-7 h-7 px-2'
            default: return 'min-w-[18px] h-[18px] px-1'
        }
    })
</script>

{#if standalone}
    <!-- Standalone mode: just render the chip -->
    {#if show}
        <span class="{baseClass} {chipSizeClass}" {...restProps}>
            {#if content}
                {@render content()}
            {:else if text !== undefined}
                {text}
            {/if}
        </span>
    {/if}
{:else}
    <!-- Wrapper mode: wrap children with chip indicator -->
    <svelte:element this={as} class={rootClass} {...restProps}>
        {#if children}
            {@render children()}
        {/if}
        {#if show}
            <span class="{baseClass} {chipSizeClass}">
                {#if content}
                    {@render content()}
                {:else if text !== undefined}
                    {text}
                {/if}
            </span>
        {/if}
    </svelte:element>
{/if}
