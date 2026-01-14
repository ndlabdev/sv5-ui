<script lang="ts">
    import { Button, Icon, ThemeToggle, mode, setMode } from '$lib/index.js'

    let loading = $state(false)

    function handleClick() {
        loading = true
        setTimeout(() => {
            loading = false
        }, 2000)
    }

    const currentMode = $derived(mode.current ?? 'light')
</script>

<div class="min-h-screen bg-neutral-50 p-8 dark:bg-neutral-900">
    <div class="mx-auto max-w-4xl space-y-12">
        <!-- Header with Theme Toggle -->
        <header class="flex items-center justify-between">
            <h1 class="text-3xl font-bold text-neutral-900 dark:text-white">
                Button Component Demo
            </h1>
            <div class="flex items-center gap-2">
                <ThemeToggle />
            </div>
        </header>

        <!-- Dark Mode Section -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Dark Mode (mode-watcher)
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                Current mode: <strong class="text-neutral-900 dark:text-white">{currentMode}</strong>
            </p>
            <div class="flex flex-wrap items-center gap-3">
                <ThemeToggle size="sm" />
                <ThemeToggle size="md" variant="outline" />
                <ThemeToggle size="lg" variant="soft" color="primary" />

                <div class="ml-4 flex gap-2">
                    <Button
                        size="sm"
                        variant={currentMode === 'light' ? 'solid' : 'outline'}
                        onclick={() => setMode('light')}
                        leadingIcon="lucide:sun"
                    >
                        Light
                    </Button>
                    <Button
                        size="sm"
                        variant={currentMode === 'dark' ? 'solid' : 'outline'}
                        onclick={() => setMode('dark')}
                        leadingIcon="lucide:moon"
                    >
                        Dark
                    </Button>
                    <Button
                        size="sm"
                        variant="ghost"
                        onclick={() => setMode('system')}
                        leadingIcon="lucide:monitor"
                    >
                        System
                    </Button>
                </div>
            </div>
        </section>

        <!-- Variants -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Variants</h2>
            <div class="flex flex-wrap gap-3">
                <Button variant="solid">Solid</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="subtle">Subtle</Button>
                <Button variant="ghost">Ghost</Button>
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

        <!-- Subtle Colors -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Subtle Variant Colors
            </h2>
            <div class="flex flex-wrap gap-3">
                <Button variant="subtle" color="primary">Primary</Button>
                <Button variant="subtle" color="secondary">Secondary</Button>
                <Button variant="subtle" color="success">Success</Button>
                <Button variant="subtle" color="warning">Warning</Button>
                <Button variant="subtle" color="error">Error</Button>
                <Button variant="subtle" color="info">Info</Button>
                <Button variant="subtle" color="neutral">Neutral</Button>
            </div>
        </section>

        <!-- With Icons -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">With Icons</h2>
            <div class="flex flex-wrap gap-3">
                <Button leadingIcon="lucide:plus">Add Item</Button>
                <Button variant="outline" color="success" leadingIcon="lucide:check">Confirm</Button>
                <Button variant="soft" color="error" leadingIcon="lucide:trash-2">Delete</Button>
                <Button variant="ghost" trailingIcon="lucide:chevron-right">Settings</Button>
                <Button variant="outline" leadingIcon="lucide:download">Download</Button>
                <Button variant="soft" color="info" leadingIcon="lucide:eye">Preview</Button>
            </div>
        </section>

        <!-- Icon Only (using icon prop) -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Icon Only (icon prop)
            </h2>
            <div class="flex flex-wrap items-center gap-3">
                <Button icon="lucide:x" size="xs" variant="ghost" color="neutral" />
                <Button icon="lucide:plus" size="sm" variant="outline" />
                <Button icon="lucide:heart" size="md" />
                <Button icon="lucide:trash-2" size="lg" color="error" />
                <Button icon="lucide:check" size="xl" variant="soft" color="success" />
            </div>
        </section>

        <!-- Square Buttons -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Square Buttons (square prop)
            </h2>
            <div class="flex flex-wrap items-center gap-3">
                <Button square size="xs" variant="ghost" color="neutral">
                    <Icon name="lucide:x" />
                </Button>
                <Button square size="sm" variant="outline">
                    <Icon name="lucide:plus" />
                </Button>
                <Button square size="md">
                    <Icon name="lucide:heart" />
                </Button>
                <Button square size="lg" color="error">
                    <Icon name="lucide:trash-2" />
                </Button>
                <Button square size="xl" variant="soft" color="success">
                    <Icon name="lucide:check" />
                </Button>
            </div>
        </section>

        <!-- Label prop -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Label Prop (Nuxt UI style)
            </h2>
            <div class="flex flex-wrap gap-3">
                <Button label="Save" color="primary" />
                <Button label="Cancel" variant="outline" color="neutral" />
                <Button label="Delete" variant="soft" color="error" />
                <Button label="Submit" leadingIcon="lucide:send" />
                <Button label="Next" trailingIcon="lucide:arrow-right" variant="subtle" />
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
                <Button loading loadingIcon="lucide:refresh-cw">Custom Loader</Button>
            </div>
        </section>

        <!-- Block (Full Width) -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Block (Full Width)
            </h2>
            <div class="max-w-md space-y-3">
                <Button block>Full Width Button</Button>
                <Button block variant="outline" color="secondary">Full Width Outline</Button>
            </div>
        </section>

        <!-- Truncate -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Truncate</h2>
            <div class="max-w-xs">
                <Button block truncate label="This is a very long button label that should be truncated" />
            </div>
        </section>

        <!-- As Link -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">As Link</h2>
            <div class="flex flex-wrap gap-3">
                <Button href="https://svelte.dev" disabled target="_blank" trailingIcon="lucide:external-link">
                    Visit Svelte
                </Button>
                <Button disabled href="/about" variant="outline">Internal Link</Button>
                <Button disabled href="#top" variant="ghost">Anchor Link</Button>
            </div>
        </section>

        <!-- As Prop (Render as different element) -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                As Prop (Render as different element)
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                Render button as any element: button (default), div, span, section, etc.
            </p>
            <div class="flex flex-wrap gap-3">
                <Button as="button" label="as='button' (default)" />
                <Button as="div" label="as='div'" variant="outline" />
                <Button as="span" label="as='span'" variant="soft" />
                <Button as="section" label="as='section'" variant="subtle" />
            </div>
        </section>

        <!-- UI Prop (Custom Slot Styles) -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                UI Prop (Custom Slot Styles)
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                Override styles for specific slots: base, label, leadingIcon, trailingIcon
            </p>
            <div class="flex flex-wrap gap-3">
                <Button
                    leadingIcon="lucide:rocket"
                    color="neutral"
                    variant="outline"
                    ui={{ leadingIcon: 'text-primary-500' }}
                >
                    Custom Icon Color
                </Button>
                <Button
                    label="Shadow Button"
                    ui={{ base: 'shadow-lg hover:shadow-xl' }}
                />
                <Button
                    label="Bold Label"
                    variant="soft"
                    ui={{ label: 'font-bold uppercase tracking-wider' }}
                />
                <Button
                    leadingIcon="lucide:star"
                    trailingIcon="lucide:arrow-right"
                    ui={{
                        base: 'rounded-full',
                        leadingIcon: 'text-yellow-500',
                        trailingIcon: 'text-green-500'
                    }}
                >
                    Multi-slot Override
                </Button>
                <Button
                    icon="lucide:heart"
                    variant="ghost"
                    color="neutral"
                    ui={{ base: 'hover:bg-error-100 dark:hover:bg-error-900', leadingIcon: 'text-error-500' }}
                />
            </div>
        </section>

        <!-- Icon Component Showcase -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Icon Component (Iconify)
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                Supports 200,000+ icons from 150+ icon sets. Format: "collection:icon-name"
            </p>
            <div class="flex flex-wrap items-center gap-4 text-neutral-700 dark:text-neutral-300">
                <Icon name="lucide:home" size={24} />
                <Icon name="lucide:user" size={24} />
                <Icon name="lucide:settings" size={24} />
                <Icon name="lucide:search" size={24} />
                <Icon name="lucide:heart" size={24} />
                <Icon name="lucide:star" size={24} />
                <Icon name="mdi:account" size={24} />
                <Icon name="mdi:bell" size={24} />
                <Icon name="tabler:brand-github" size={24} />
                <Icon name="ph:code-bold" size={24} />
            </div>
            <div class="flex flex-wrap items-center gap-4">
                <span class="text-success-600"><Icon name="lucide:circle-check" size={24} /></span>
                <span class="text-error-600"><Icon name="lucide:circle-x" size={24} /></span>
                <span class="text-warning-600"><Icon name="lucide:triangle-alert" size={24} /></span>
                <span class="text-info-600"><Icon name="lucide:info" size={24} /></span>
            </div>
        </section>
    </div>
</div>
