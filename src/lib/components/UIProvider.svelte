<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { AppConfig } from '../config/index.js';
	import { createConfigContext } from '../config/index.js';

	interface Props {
		config?: AppConfig;
		children: Snippet;
	}

	let { config = {}, children }: Props = $props();

	// Create and provide config context
	createConfigContext(config);
</script>

{@render children()}
