<script lang="ts" module>
    import type { BreadcrumbProps } from './breadcrumb.types.js'

    export type Props = BreadcrumbProps
</script>

<script lang="ts">
    import { resolve } from '$app/paths'
    import { breadcrumbVariants } from './breadcrumb.variants.js'
    import Icon from '../Icon/Icon.svelte'
    import Avatar from '../Avatar/Avatar.svelte'

    let {
        as = 'nav',
        items = [],
        separatorIcon = 'lucide:chevron-right',
        labelKey = 'label',
        ui,
        class: className,
        itemSlot,
        itemLeadingSlot,
        itemLabelSlot,
        itemTrailingSlot,
        separatorSlot,
        ...restProps
    }: Props = $props()

    // Get base slot classes
    const baseSlots = $derived(breadcrumbVariants())

    const rootClass = $derived(baseSlots.root({ class: [className, ui?.root] }))
    const listClass = $derived(baseSlots.list({ class: ui?.list }))
    const separatorClass = $derived(baseSlots.separator({ class: ui?.separator }))
    const separatorIconClass = $derived(baseSlots.separatorIcon({ class: ui?.separatorIcon }))

    // Get item slot classes based on state
    function getItemClasses(index: number, item: (typeof items)[number]) {
        const isActive = index === items.length - 1
        const isDisabled = item.disabled ?? false
        const hasHref = !!item.href

        const slots = breadcrumbVariants({
            active: isActive,
            disabled: isDisabled,
            href: hasHref
        })

        return {
            item: slots.item({ class: ui?.item }),
            link: slots.link({ class: ui?.link }),
            linkLeadingIcon: slots.linkLeadingIcon({ class: ui?.linkLeadingIcon }),
            linkLeadingAvatar: slots.linkLeadingAvatar({ class: ui?.linkLeadingAvatar }),
            linkLabel: slots.linkLabel({ class: ui?.linkLabel })
        }
    }

    // Get the label from item using labelKey
    function getLabel(item: (typeof items)[number]): string {
        return ((item as Record<string, unknown>)[labelKey] as string) ?? ''
    }
</script>

<svelte:element this={as} class={rootClass} aria-label="Breadcrumb" {...restProps}>
    <ol class={listClass}>
        {#each items as item, index (index)}
            {@const isActive = index === items.length - 1}
            {@const isDisabled = item.disabled ?? false}
            {@const classes = getItemClasses(index, item)}

            <li class={classes.item}>
                {#if itemSlot}
                    {@render itemSlot({ item, index, active: isActive })}
                {:else}
                    {#if item.href && !isDisabled}
                        <a
                            href={resolve(item.href)}
                            class={classes.link}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {#if itemLeadingSlot}
                                {@render itemLeadingSlot({ item, index, active: isActive })}
                            {:else if item.avatar}
                                <Avatar
                                    {...item.avatar}
                                    size="2xs"
                                    class={classes.linkLeadingAvatar}
                                />
                            {:else if item.icon}
                                <Icon name={item.icon} class={classes.linkLeadingIcon} />
                            {/if}

                            {#if itemLabelSlot}
                                {@render itemLabelSlot({ item, index, active: isActive })}
                            {:else}
                                <span class={classes.linkLabel}>{getLabel(item)}</span>
                            {/if}

                            {#if itemTrailingSlot}
                                {@render itemTrailingSlot({ item, index, active: isActive })}
                            {/if}
                        </a>
                    {:else}
                        <span
                            class={classes.link}
                            aria-current={isActive ? 'page' : undefined}
                            aria-disabled={isDisabled ? 'true' : undefined}
                        >
                            {#if itemLeadingSlot}
                                {@render itemLeadingSlot({ item, index, active: isActive })}
                            {:else if item.avatar}
                                <Avatar
                                    {...item.avatar}
                                    size="2xs"
                                    class={classes.linkLeadingAvatar}
                                />
                            {:else if item.icon}
                                <Icon name={item.icon} class={classes.linkLeadingIcon} />
                            {/if}

                            {#if itemLabelSlot}
                                {@render itemLabelSlot({ item, index, active: isActive })}
                            {:else}
                                <span class={classes.linkLabel}>{getLabel(item)}</span>
                            {/if}

                            {#if itemTrailingSlot}
                                {@render itemTrailingSlot({ item, index, active: isActive })}
                            {/if}
                        </span>
                    {/if}
                {/if}
            </li>

            {#if index < items.length - 1}
                <li role="presentation" aria-hidden="true" class={separatorClass}>
                    {#if separatorSlot}
                        {@render separatorSlot()}
                    {:else}
                        <Icon name={separatorIcon} class={separatorIconClass} />
                    {/if}
                </li>
            {/if}
        {/each}
    </ol>
</svelte:element>
