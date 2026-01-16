<script lang="ts" module>
    import type { AlertProps } from './alert.types.js'

    export type Props = AlertProps
</script>

<script lang="ts">
    import { alertVariants } from './alert.variants.js'
    import Icon from '../Icon/Icon.svelte'
    import Avatar from '../Avatar/Avatar.svelte'
    import Button from '../Button/Button.svelte'

    let {
        as = 'div',
        ui,
        title,
        description,
        icon,
        avatar,
        color = 'primary',
        variant = 'soft',
        orientation = 'horizontal',
        open = true,
        close = false,
        closeIcon = 'lucide:x',
        actions,
        class: className,
        leading,
        titleSlot,
        descriptionSlot,
        actionsSlot,
        closeSlot,
        onClose,
        ...restProps
    }: Props = $props()

    // Get slot classes from variants
    const slots = $derived(
        alertVariants({
            variant,
            color,
            orientation
        })
    )

    const rootClass = $derived(slots.root({ class: [className, ui?.root] }))
    const wrapperClass = $derived(slots.wrapper({ class: ui?.wrapper }))
    const titleClass = $derived(slots.title({ class: ui?.title }))
    const descriptionClass = $derived(slots.description({ class: ui?.description }))
    const iconClass = $derived(slots.icon({ class: ui?.icon }))
    const avatarClass = $derived(slots.avatar({ class: ui?.avatar }))
    const actionsClass = $derived(slots.actions({ class: ui?.actions }))
    const closeClass = $derived(slots.close({ class: ui?.close }))

    // Determine close button props
    const closeButtonProps = $derived.by(() => {
        if (!close) return null
        if (close === true) return {}
        return close
    })

    // Handle close click
    function handleClose() {
        onClose?.()
    }
</script>

{#if open}
    <svelte:element this={as} class={rootClass} role="alert" {...restProps}>
        {#if leading}
            {@render leading()}
        {:else if avatar}
            <Avatar {...avatar} class={avatarClass} />
        {:else if icon}
            <Icon name={icon} class={iconClass} />
        {/if}

        {#if title || description || titleSlot || descriptionSlot}
            <div class={wrapperClass}>
                {#if titleSlot}
                    {@render titleSlot()}
                {:else if title}
                    <div class={titleClass}>{title}</div>
                {/if}

                {#if descriptionSlot}
                    {@render descriptionSlot()}
                {:else if description}
                    <div class={descriptionClass}>{description}</div>
                {/if}
            </div>
        {/if}

        {#if actionsSlot}
            {@render actionsSlot()}
        {:else if actions && actions.length > 0}
            <div class={actionsClass}>
                {#each actions as action}
                    <Button size="xs" variant="soft" color={color} {...action} />
                {/each}
            </div>
        {/if}

        {#if closeSlot}
            <div class={closeClass}>
                {@render closeSlot()}
            </div>
        {:else if closeButtonProps}
            <Button
                icon={closeIcon}
                variant="ghost"
                color={variant === 'solid' ? 'neutral' : color}
                size="xs"
                square
                class={closeClass}
                onclick={handleClose}
                aria-label="Close alert"
                {...closeButtonProps}
            />
        {/if}
    </svelte:element>
{/if}
