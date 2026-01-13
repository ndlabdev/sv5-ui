<script lang="ts">
    import type { Snippet } from 'svelte'
    import type { AppConfig } from '../config/index.js'
    import { createConfigContext } from '../config/index.js'

    interface Props {
        config?: AppConfig
        children: Snippet
    }

    let { config = {}, children }: Props = $props()

    // Create and provide config context using $effect to capture reactive updates
    const configState = createConfigContext()
    $effect(() => {
        configState.config = config
    })
</script>

{@render children()}
