<script lang="ts" module>
    import type { ProgressProps } from './progress.types.js'

    export type Props = ProgressProps
</script>

<script lang="ts">
    import { Progress } from 'bits-ui'
    import { progressVariants } from './progress.variants.js'

    let {
        ref = $bindable(null),
        value = null,
        max = 100,
        status = false,
        color = 'primary',
        size = 'md',
        orientation = 'horizontal',
        inverted = false,
        animation = 'carousel',
        ui,
        class: className,
        statusSlot,
        ...restProps
    }: Props = $props()

    // Compute the maximum numeric value
    const maxValue = $derived(Array.isArray(max) ? max.length - 1 : max)

    // Compute the percent value (0-100)
    const percent = $derived(
        value !== null ? Math.round((Math.min(value, maxValue) / maxValue) * 100) : null
    )

    // Determine if the progress is indeterminate
    const isIndeterminate = $derived(value === null || value === undefined)

    // Get the state for data attribute
    const state = $derived(isIndeterminate ? 'indeterminate' : 'determinate')

    // Compute the transform style for the indicator
    const indicatorStyle = $derived.by(() => {
        if (isIndeterminate) return ''
        const remaining = 100 - (percent ?? 0)
        if (orientation === 'horizontal') {
            return inverted
                ? `transform: translateX(${remaining}%);`
                : `transform: translateX(-${remaining}%);`
        }
        return inverted
            ? `transform: translateY(${remaining}%);`
            : `transform: translateY(-${remaining}%);`
    })

    // Generate slot classes
    const slots = $derived(
        progressVariants({
            animation,
            color,
            size,
            orientation,
            inverted
        })
    )

    const rootClass = $derived(slots.root({ class: [ui?.root, className] }))
    const baseClass = $derived(slots.base({ class: ui?.base }))
    const indicatorClass = $derived(slots.indicator({ class: ui?.indicator }))
    const statusClass = $derived(slots.status({ class: ui?.status }))
    const stepsClass = $derived(slots.steps({ class: ui?.steps }))

    // Helper to get step class based on position
    function getStepClass(index: number) {
        const isActive = value !== null && index <= value
        const isFirst = index === 0
        const isLast = Array.isArray(max) && index === max.length - 1

        return progressVariants({
            size,
            step: isActive ? 'active' : isFirst ? 'first' : isLast ? 'last' : 'other'
        }).steps({ class: ui?.steps })
    }
</script>

<Progress.Root
    bind:ref
    value={value ?? undefined}
    max={maxValue}
    class={rootClass}
    {...restProps}
>
    {#if status && !Array.isArray(max)}
        <div class={statusClass} style={isIndeterminate ? '' : `width: ${percent}%;`}>
            {#if statusSlot}
                {@render statusSlot({ percent: percent ?? 0 })}
            {:else}
                {percent ?? 0}%
            {/if}
        </div>
    {/if}

    <div class={baseClass}>
        <div class={indicatorClass} data-state={state} style={indicatorStyle}></div>
    </div>

    {#if Array.isArray(max)}
        <div class={stepsClass}>
            {#each max as step, index (index)}
                <span class={getStepClass(index)}>{step}</span>
            {/each}
        </div>
    {/if}
</Progress.Root>
