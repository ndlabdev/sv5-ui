<script lang="ts">
    import { Button } from '$lib/index.js'

    let loading = $state(false)

    function handleClick() {
        loading = true
        setTimeout(() => {
            loading = false
        }, 2000)
    }
</script>

<div class="min-h-screen bg-neutral-50 p-8 dark:bg-neutral-900">
    <div class="mx-auto max-w-4xl space-y-12">
        <h1 class="text-3xl font-bold text-neutral-900 dark:text-white">Button Component Demo</h1>

        <!-- Variants -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Variants</h2>
            <div class="flex flex-wrap gap-3">
                <Button variant="solid">Solid</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="link">Link</Button>
            </div>
        </section>

        <!-- Colors -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Colors</h2>
            <div class="flex flex-wrap gap-3">
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="warning">Warning</Button>
                <Button color="error">Error</Button>
                <Button color="info">Info</Button>
                <Button color="neutral">Neutral</Button>
            </div>
        </section>

        <!-- Sizes -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Sizes</h2>
            <div class="flex flex-wrap items-center gap-3">
                <Button size="xs">Extra Small</Button>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
            </div>
        </section>

        <!-- Outline Colors -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Outline Variant Colors
            </h2>
            <div class="flex flex-wrap gap-3">
                <Button variant="outline" color="primary">Primary</Button>
                <Button variant="outline" color="secondary">Secondary</Button>
                <Button variant="outline" color="success">Success</Button>
                <Button variant="outline" color="warning">Warning</Button>
                <Button variant="outline" color="error">Error</Button>
                <Button variant="outline" color="info">Info</Button>
                <Button variant="outline" color="neutral">Neutral</Button>
            </div>
        </section>

        <!-- Soft Colors -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Soft Variant Colors
            </h2>
            <div class="flex flex-wrap gap-3">
                <Button variant="soft" color="primary">Primary</Button>
                <Button variant="soft" color="secondary">Secondary</Button>
                <Button variant="soft" color="success">Success</Button>
                <Button variant="soft" color="warning">Warning</Button>
                <Button variant="soft" color="error">Error</Button>
                <Button variant="soft" color="info">Info</Button>
                <Button variant="soft" color="neutral">Neutral</Button>
            </div>
        </section>

        <!-- With Icons -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">With Icons</h2>
            <div class="flex flex-wrap gap-3">
                <Button>
                    {#snippet leadingIcon()}
                        <span class="i-lucide-plus h-4 w-4"></span>
                    {/snippet}
                    Add Item
                </Button>

                <Button variant="outline" color="success">
                    {#snippet leadingIcon()}
                        <span class="i-lucide-check h-4 w-4"></span>
                    {/snippet}
                    Confirm
                </Button>

                <Button variant="soft" color="error">
                    {#snippet leadingIcon()}
                        <span class="i-lucide-trash-2 h-4 w-4"></span>
                    {/snippet}
                    Delete
                </Button>

                <Button variant="ghost">
                    Settings
                    {#snippet trailingIcon()}
                        <span class="i-lucide-chevron-right h-4 w-4"></span>
                    {/snippet}
                </Button>
            </div>
        </section>

        <!-- Icon Only -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Icon Only</h2>
            <div class="flex flex-wrap items-center gap-3">
                <Button iconOnly size="xs" variant="ghost" color="neutral">
                    <span class="i-lucide-x h-3 w-3"></span>
                </Button>
                <Button iconOnly size="sm" variant="outline">
                    <span class="i-lucide-plus h-4 w-4"></span>
                </Button>
                <Button iconOnly size="md">
                    <span class="i-lucide-heart h-4 w-4"></span>
                </Button>
                <Button iconOnly size="lg" color="error">
                    <span class="i-lucide-trash-2 h-5 w-5"></span>
                </Button>
                <Button iconOnly size="xl" variant="soft" color="success">
                    <span class="i-lucide-check h-6 w-6"></span>
                </Button>
            </div>
        </section>

        <!-- States -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">States</h2>
            <div class="flex flex-wrap gap-3">
                <Button disabled>Disabled</Button>
                <Button variant="outline" disabled>Disabled Outline</Button>
                <Button {loading} onclick={handleClick}>
                    {loading ? 'Loading...' : 'Click to Load'}
                </Button>
                <Button loading>Always Loading</Button>
            </div>
        </section>

        <!-- Full Width -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Full Width</h2>
            <div class="max-w-md space-y-3">
                <Button fullWidth>Full Width Button</Button>
                <Button fullWidth variant="outline" color="secondary">Full Width Outline</Button>
            </div>
        </section>

        <!-- As Link -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">As Link</h2>
            <div class="flex flex-wrap gap-3">
                <Button href="https://svelte.dev" target="_blank">
                    Visit Svelte
                    {#snippet trailingIcon()}
                        <span class="i-lucide-external-link h-4 w-4"></span>
                    {/snippet}
                </Button>
                <Button href="/about" variant="outline">Internal Link</Button>
                <Button href="#top" variant="ghost">Anchor Link</Button>
            </div>
        </section>
    </div>
</div>
