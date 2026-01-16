<script lang="ts" module>
    import type { TimelineProps } from './timeline.types.js'

    export type Props = TimelineProps
</script>

<script lang="ts">
    import { timelineVariants, avatarSizeMap, iconSizeMap } from './timeline.variants.js'
    import type { TimelineItemState, TimelineItem } from './timeline.types.js'
    import Avatar from '../Avatar/Avatar.svelte'
    import Icon from '../Icon/Icon.svelte'

    let {
        as = 'div',
        items = [],
        size = 'md',
        color = 'primary',
        orientation = 'vertical',
        reverse = false,
        value,
        class: className,
        ui,
        indicator,
        dateSlot,
        titleSlot,
        descriptionSlot,
        content,
        ...restProps
    }: Props = $props()

    // Get slot classes from variants
    const slots = $derived(
        timelineVariants({
            orientation,
            color,
            size,
            reverse
        })
    )

    const rootClass = $derived(slots.root({ class: [className, ui?.root] }))
    const itemClass = $derived(slots.item({ class: ui?.item }))
    const containerClass = $derived(slots.container({ class: ui?.container }))
    const indicatorClass = $derived(slots.indicator({ class: ui?.indicator }))
    const separatorClass = $derived(slots.separator({ class: ui?.separator }))
    const wrapperClass = $derived(slots.wrapper({ class: ui?.wrapper }))
    const dateClass = $derived(slots.date({ class: ui?.date }))
    const titleClass = $derived(slots.title({ class: ui?.title }))
    const descriptionClass = $derived(slots.description({ class: ui?.description }))

    // Get avatar size based on timeline size
    const avatarSize = $derived(avatarSizeMap[size])
    const iconSize = $derived(iconSizeMap[size])

    // Find active index based on value
    const activeIndex = $derived.by(() => {
        if (value === undefined) return -1
        return items.findIndex((item) => item.value === value)
    })

    // Determine item state based on index and active index
    function getItemState(index: number): TimelineItemState {
        if (activeIndex === -1) return 'pending'

        if (index === activeIndex) return 'active'

        if (reverse) {
            // In reverse mode, items after active are completed
            return index > activeIndex ? 'completed' : 'pending'
        } else {
            // Normal mode, items before active are completed
            return index < activeIndex ? 'completed' : 'pending'
        }
    }

    // Check if this is the last item (to hide separator)
    function isLastItem(index: number): boolean {
        return index === items.length - 1
    }
</script>

<svelte:element this={as} class={rootClass} {...restProps}>
    {#each items as item, index}
        {@const state = getItemState(index)}
        {@const isLast = isLastItem(index)}

        <div class={[itemClass, item.class]} data-state={state}>
            <div class={containerClass}>
                {#if indicator}
                    {@render indicator({ item, index, state })}
                {:else}
                    <div class={indicatorClass}>
                        {#if item.avatar}
                            <Avatar {...item.avatar} size={avatarSize} />
                        {:else if item.icon}
                            <Icon name={item.icon} size={iconSize} />
                        {/if}
                    </div>
                {/if}

                {#if !isLast}
                    <div class={separatorClass}></div>
                {/if}
            </div>

            <div class={wrapperClass}>
                {#if dateSlot}
                    {@render dateSlot({ item, index, state })}
                {:else if item.date}
                    <div class={dateClass}>{item.date}</div>
                {/if}

                {#if titleSlot}
                    {@render titleSlot({ item, index, state })}
                {:else if item.title}
                    <div class={titleClass}>{item.title}</div>
                {/if}

                {#if descriptionSlot}
                    {@render descriptionSlot({ item, index, state })}
                {:else if item.description}
                    <div class={descriptionClass}>{item.description}</div>
                {/if}

                {#if content}
                    {@render content({ item, index, state })}
                {/if}
            </div>
        </div>
    {/each}
</svelte:element>
