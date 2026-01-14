<script lang="ts" module>
    import type { Snippet } from 'svelte'
    import type { SemanticColor } from '../../config/types.js'
    import type { ButtonVariants } from '../Button/button.types.js'

    type ButtonSize = NonNullable<ButtonVariants['size']>
    type ButtonVariant = NonNullable<ButtonVariants['variant']>
    type Mode = 'light' | 'dark'

    export interface Props {
        color?: SemanticColor
        variant?: ButtonVariant
        size?: ButtonSize
        lightIcon?: string
        darkIcon?: string
        children?: Snippet<[{ mode: Mode }]>
        class?: string
    }
</script>

<script lang="ts">
    import { mode, toggleMode } from 'mode-watcher'
    import { Button } from '../Button/index.js'
    import Icon from '../Icon/Icon.svelte'

    let {
        color = 'neutral',
        variant = 'ghost',
        size = 'md',
        lightIcon = 'lucide:sun',
        darkIcon = 'lucide:moon',
        children,
        class: className
    }: Props = $props()

    const currentMode = $derived((mode.current ?? 'light') as Mode)
    const currentIcon = $derived(currentMode === 'dark' ? darkIcon : lightIcon)
</script>

<Button
    {color}
    {variant}
    {size}
    square
    onclick={toggleMode}
    aria-label="Toggle theme"
    class={className}
>
    {#if children}
        {@render children({ mode: currentMode })}
    {:else}
        <Icon name={currentIcon} />
    {/if}
</Button>
