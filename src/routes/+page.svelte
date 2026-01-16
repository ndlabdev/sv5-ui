<script lang="ts">
    import { Button, Icon, ThemeToggle, Avatar, AvatarGroup, Chip, Card, Badge, User, Separator, Kbd, Timeline, mode, setMode } from '$lib/index.js'
    import type { TimelineItem } from '$lib/index.js'

    const timelineItems: TimelineItem[] = [
        { value: 1, date: 'Jan 1, 2024', title: 'Project Started', description: 'Initial project setup and planning phase', icon: 'lucide:rocket' },
        { value: 2, date: 'Feb 15, 2024', title: 'Design Complete', description: 'UI/UX design finalized and approved', icon: 'lucide:palette' },
        { value: 3, date: 'Mar 20, 2024', title: 'Development', description: 'Core features implementation in progress', icon: 'lucide:code' },
        { value: 4, date: 'Apr 10, 2024', title: 'Testing', description: 'QA testing and bug fixes', icon: 'lucide:bug' },
        { value: 5, date: 'May 1, 2024', title: 'Launch', description: 'Product launch and go-live', icon: 'lucide:party-popper' }
    ]

    let activeTimelineValue = $state(3)

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
                <Button href="https://svelte.dev" target="_blank" trailingIcon="lucide:external-link">
                    Visit Svelte
                </Button>
                <Button href="/about" variant="outline">Internal Link</Button>
                <Button href="#top" variant="ghost">Anchor Link</Button>
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

        <!-- Button with Avatar -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Button with Avatar
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                Display avatar on the left side of the button using the avatar prop
            </p>
            <div class="flex flex-wrap items-center gap-3">
                <Button
                    avatar={{ src: 'https://i.pravatar.cc/150?img=1', alt: 'John Doe' }}
                    label="John Doe"
                />
                <Button
                    avatar={{ src: 'https://i.pravatar.cc/150?img=2', alt: 'Jane Smith' }}
                    label="Jane Smith"
                    variant="outline"
                />
                <Button
                    avatar={{ alt: 'Bob Wilson' }}
                    label="Bob Wilson"
                    variant="soft"
                />
                <Button
                    avatar={{ icon: 'lucide:user' }}
                    label="Guest User"
                    variant="ghost"
                />
            </div>
            <div class="flex flex-wrap items-center gap-3">
                <Button
                    avatar={{ src: 'https://i.pravatar.cc/150?img=3', alt: 'User' }}
                    label="XS Size"
                    size="xs"
                />
                <Button
                    avatar={{ src: 'https://i.pravatar.cc/150?img=4', alt: 'User' }}
                    label="SM Size"
                    size="sm"
                />
                <Button
                    avatar={{ src: 'https://i.pravatar.cc/150?img=5', alt: 'User' }}
                    label="MD Size"
                    size="md"
                />
                <Button
                    avatar={{ src: 'https://i.pravatar.cc/150?img=6', alt: 'User' }}
                    label="LG Size"
                    size="lg"
                />
                <Button
                    avatar={{ src: 'https://i.pravatar.cc/150?img=7', alt: 'User' }}
                    label="XL Size"
                    size="xl"
                />
            </div>
            <div class="flex flex-wrap items-center gap-3">
                <Button
                    avatar={{ src: 'https://i.pravatar.cc/150?img=8', alt: 'Admin' }}
                    label="With Trailing Icon"
                    trailingIcon="lucide:chevron-down"
                    variant="outline"
                />
                <Button
                    avatar={{ alt: 'Team' }}
                    label="Dropdown"
                    trailingIcon="lucide:chevron-down"
                    color="neutral"
                    variant="soft"
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

        <!-- Avatar Component -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Avatar Component
            </h2>

            <!-- Avatar Sizes -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Sizes</h3>
                <div class="flex flex-wrap items-end gap-3">
                    <Avatar size="3xs" alt="John Doe" />
                    <Avatar size="2xs" alt="John Doe" />
                    <Avatar size="xs" alt="John Doe" />
                    <Avatar size="sm" alt="John Doe" />
                    <Avatar size="md" alt="John Doe" />
                    <Avatar size="lg" alt="John Doe" />
                    <Avatar size="xl" alt="John Doe" />
                    <Avatar size="2xl" alt="John Doe" />
                    <Avatar size="3xl" alt="John Doe" />
                </div>
            </div>

            <!-- Avatar with Images -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Images</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Avatar
                        src="https://i.pravatar.cc/150?img=1"
                        alt="User 1"
                        size="lg"
                    />
                    <Avatar
                        src="https://i.pravatar.cc/150?img=2"
                        alt="User 2"
                        size="lg"
                    />
                    <Avatar
                        src="https://i.pravatar.cc/150?img=3"
                        alt="User 3"
                        size="lg"
                    />
                    <Avatar
                        src="https://i.pravatar.cc/150?img=4"
                        alt="User 4"
                        size="lg"
                    />
                </div>
            </div>

            <!-- Avatar with Initials -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Initials (from alt)</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Avatar alt="John Doe" size="lg" />
                    <Avatar alt="Jane Smith" size="lg" />
                    <Avatar alt="Bob Wilson" size="lg" />
                    <Avatar alt="Alice" size="lg" />
                </div>
            </div>

            <!-- Avatar with Custom Text -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Custom Text</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Avatar text="A" size="lg" />
                    <Avatar text="BC" size="lg" />
                    <Avatar text="+5" size="lg" />
                </div>
            </div>

            <!-- Avatar with Icon Fallback -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Icon Fallback</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Avatar icon="lucide:user" size="lg" />
                    <Avatar icon="lucide:users" size="lg" />
                    <Avatar icon="lucide:building" size="lg" />
                </div>
            </div>

            <!-- Avatar with Broken Image (shows fallback) -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Broken Image (fallback)</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Avatar
                        src="https://invalid-url.com/broken.jpg"
                        alt="Fallback User"
                        size="lg"
                    />
                    <Avatar
                        src="https://invalid-url.com/broken.jpg"
                        icon="lucide:user"
                        size="lg"
                    />
                    <Avatar
                        src="https://invalid-url.com/broken.jpg"
                        text="FB"
                        size="lg"
                    />
                </div>
            </div>

            <!-- Avatar with UI Prop -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Custom Styles (ui prop)</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Avatar
                        alt="Custom BG"
                        size="lg"
                        ui={{ root: 'bg-primary-100 dark:bg-primary-900', fallback: 'text-primary-600 dark:text-primary-400' }}
                    />
                    <Avatar
                        icon="lucide:star"
                        size="lg"
                        ui={{ root: 'bg-warning-100 dark:bg-warning-900', icon: 'text-warning-600' }}
                    />
                    <Avatar
                        src="https://i.pravatar.cc/150?img=5"
                        alt="Bordered"
                        size="lg"
                        ui={{ root: 'ring-2 ring-primary-500' }}
                    />
                    <Avatar
                        alt="Square"
                        size="lg"
                        ui={{ root: 'rounded-lg' }}
                    />
                </div>
            </div>
        </section>

        <!-- AvatarGroup Component -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                AvatarGroup Component
            </h2>

            <!-- Basic AvatarGroup -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Basic Group</h3>
                <AvatarGroup>
                    <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
                    <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
                    <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
                    <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" />
                </AvatarGroup>
            </div>

            <!-- AvatarGroup Sizes -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Sizes</h3>
                <div class="flex flex-wrap items-end gap-6">
                    <div class="text-center">
                        <AvatarGroup size="xs">
                            <Avatar src="https://i.pravatar.cc/150?img=10" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=12" alt="User" />
                        </AvatarGroup>
                        <p class="text-xs text-neutral-500 mt-1">xs</p>
                    </div>
                    <div class="text-center">
                        <AvatarGroup size="sm">
                            <Avatar src="https://i.pravatar.cc/150?img=10" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=12" alt="User" />
                        </AvatarGroup>
                        <p class="text-xs text-neutral-500 mt-1">sm</p>
                    </div>
                    <div class="text-center">
                        <AvatarGroup size="md">
                            <Avatar src="https://i.pravatar.cc/150?img=10" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=12" alt="User" />
                        </AvatarGroup>
                        <p class="text-xs text-neutral-500 mt-1">md</p>
                    </div>
                    <div class="text-center">
                        <AvatarGroup size="lg">
                            <Avatar src="https://i.pravatar.cc/150?img=10" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=12" alt="User" />
                        </AvatarGroup>
                        <p class="text-xs text-neutral-500 mt-1">lg</p>
                    </div>
                    <div class="text-center">
                        <AvatarGroup size="xl">
                            <Avatar src="https://i.pravatar.cc/150?img=10" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=12" alt="User" />
                        </AvatarGroup>
                        <p class="text-xs text-neutral-500 mt-1">xl</p>
                    </div>
                    <div class="text-center">
                        <AvatarGroup size="2xl">
                            <Avatar src="https://i.pravatar.cc/150?img=10" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=12" alt="User" />
                        </AvatarGroup>
                        <p class="text-xs text-neutral-500 mt-1">2xl</p>
                    </div>
                    <div class="text-center">
                        <AvatarGroup size="3xl">
                            <Avatar src="https://i.pravatar.cc/150?img=10" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=11" alt="User" />
                            <Avatar src="https://i.pravatar.cc/150?img=12" alt="User" />
                        </AvatarGroup>
                        <p class="text-xs text-neutral-500 mt-1">3xl</p>
                    </div>
                </div>
            </div>

            <!-- AvatarGroup with Initials -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Initials</h3>
                <AvatarGroup size="lg">
                    <Avatar alt="John Doe" />
                    <Avatar alt="Jane Smith" />
                    <Avatar alt="Bob Wilson" />
                    <Avatar alt="Alice Brown" />
                    <Avatar alt="Charlie Davis" />
                </AvatarGroup>
            </div>

            <!-- AvatarGroup with Mixed Content -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Mixed Content</h3>
                <AvatarGroup size="lg">
                    <Avatar src="https://i.pravatar.cc/150?img=20" alt="User 1" />
                    <Avatar src="https://i.pravatar.cc/150?img=21" alt="User 2" />
                    <Avatar alt="John Doe" />
                    <Avatar icon="lucide:user" />
                    <Avatar text="+3" />
                </AvatarGroup>
            </div>

            <!-- AvatarGroup with Custom Styles -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Custom Styles (ui prop)</h3>
                <AvatarGroup size="lg" ui={{ base: 'ring-primary-500' }}>
                    <Avatar src="https://i.pravatar.cc/150?img=30" alt="User 1" />
                    <Avatar src="https://i.pravatar.cc/150?img=31" alt="User 2" />
                    <Avatar src="https://i.pravatar.cc/150?img=32" alt="User 3" />
                    <Avatar src="https://i.pravatar.cc/150?img=33" alt="User 4" />
                </AvatarGroup>
            </div>

            <!-- AvatarGroup with Max -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Max (avatars prop)</h3>
                <p class="text-xs text-neutral-500 dark:text-neutral-500">max=3 (showing 3 of 7 avatars)</p>
                <AvatarGroup
                    size="lg"
                    max={3}
                    avatars={[
                        { src: 'https://i.pravatar.cc/150?img=40', alt: 'User 1' },
                        { src: 'https://i.pravatar.cc/150?img=41', alt: 'User 2' },
                        { src: 'https://i.pravatar.cc/150?img=42', alt: 'User 3' },
                        { src: 'https://i.pravatar.cc/150?img=43', alt: 'User 4' },
                        { src: 'https://i.pravatar.cc/150?img=44', alt: 'User 5' },
                        { src: 'https://i.pravatar.cc/150?img=45', alt: 'User 6' },
                        { src: 'https://i.pravatar.cc/150?img=46', alt: 'User 7' }
                    ]}
                />
            </div>

            <!-- AvatarGroup with Max - Different sizes -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Max with Different Sizes</h3>
                <div class="flex flex-wrap items-end gap-6">
                    <div class="text-center">
                        <AvatarGroup
                            size="sm"
                            max={2}
                            avatars={[
                                { src: 'https://i.pravatar.cc/150?img=50', alt: 'User 1' },
                                { src: 'https://i.pravatar.cc/150?img=51', alt: 'User 2' },
                                { src: 'https://i.pravatar.cc/150?img=52', alt: 'User 3' },
                                { src: 'https://i.pravatar.cc/150?img=53', alt: 'User 4' },
                                { src: 'https://i.pravatar.cc/150?img=54', alt: 'User 5' }
                            ]}
                        />
                        <p class="text-xs text-neutral-500 mt-1">sm, max=2</p>
                    </div>
                    <div class="text-center">
                        <AvatarGroup
                            size="md"
                            max={3}
                            avatars={[
                                { src: 'https://i.pravatar.cc/150?img=50', alt: 'User 1' },
                                { src: 'https://i.pravatar.cc/150?img=51', alt: 'User 2' },
                                { src: 'https://i.pravatar.cc/150?img=52', alt: 'User 3' },
                                { src: 'https://i.pravatar.cc/150?img=53', alt: 'User 4' },
                                { src: 'https://i.pravatar.cc/150?img=54', alt: 'User 5' }
                            ]}
                        />
                        <p class="text-xs text-neutral-500 mt-1">md, max=3</p>
                    </div>
                    <div class="text-center">
                        <AvatarGroup
                            size="xl"
                            max={4}
                            avatars={[
                                { src: 'https://i.pravatar.cc/150?img=50', alt: 'User 1' },
                                { src: 'https://i.pravatar.cc/150?img=51', alt: 'User 2' },
                                { src: 'https://i.pravatar.cc/150?img=52', alt: 'User 3' },
                                { src: 'https://i.pravatar.cc/150?img=53', alt: 'User 4' },
                                { src: 'https://i.pravatar.cc/150?img=54', alt: 'User 5' }
                            ]}
                        />
                        <p class="text-xs text-neutral-500 mt-1">xl, max=4</p>
                    </div>
                </div>
            </div>

            <!-- AvatarGroup with Max - Initials -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Max with Initials</h3>
                <AvatarGroup
                    size="lg"
                    max={4}
                    avatars={[
                        { alt: 'John Doe' },
                        { alt: 'Jane Smith' },
                        { alt: 'Bob Wilson' },
                        { alt: 'Alice Brown' },
                        { alt: 'Charlie Davis' },
                        { alt: 'Diana Evans' }
                    ]}
                />
            </div>
        </section>

        <!-- Chip Component -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Chip Component
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                A small indicator that can be placed on other components
            </p>

            <!-- Basic Chip -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Basic Chip</h3>
                <div class="flex flex-wrap items-center gap-6">
                    <Chip>
                        <Button icon="lucide:bell" variant="outline" color="neutral" />
                    </Chip>
                    <Chip>
                        <Button icon="lucide:mail" variant="outline" color="neutral" />
                    </Chip>
                    <Chip>
                        <Avatar src="https://i.pravatar.cc/150?img=1" alt="User" size="lg" />
                    </Chip>
                </div>
            </div>

            <!-- Chip Colors -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Colors</h3>
                <div class="flex flex-wrap items-center gap-6">
                    <Chip color="primary">
                        <Avatar alt="P" size="lg" />
                    </Chip>
                    <Chip color="secondary">
                        <Avatar alt="S" size="lg" />
                    </Chip>
                    <Chip color="success">
                        <Avatar alt="S" size="lg" />
                    </Chip>
                    <Chip color="warning">
                        <Avatar alt="W" size="lg" />
                    </Chip>
                    <Chip color="error">
                        <Avatar alt="E" size="lg" />
                    </Chip>
                    <Chip color="info">
                        <Avatar alt="I" size="lg" />
                    </Chip>
                    <Chip color="neutral">
                        <Avatar alt="N" size="lg" />
                    </Chip>
                </div>
            </div>

            <!-- Chip Sizes -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Sizes</h3>
                <div class="flex flex-wrap items-center gap-6">
                    <Chip size="3xs">
                        <Avatar alt="U" size="lg" />
                    </Chip>
                    <Chip size="2xs">
                        <Avatar alt="U" size="lg" />
                    </Chip>
                    <Chip size="xs">
                        <Avatar alt="U" size="lg" />
                    </Chip>
                    <Chip size="sm">
                        <Avatar alt="U" size="lg" />
                    </Chip>
                    <Chip size="md">
                        <Avatar alt="U" size="lg" />
                    </Chip>
                    <Chip size="lg">
                        <Avatar alt="U" size="lg" />
                    </Chip>
                    <Chip size="xl">
                        <Avatar alt="U" size="lg" />
                    </Chip>
                    <Chip size="2xl">
                        <Avatar alt="U" size="lg" />
                    </Chip>
                    <Chip size="3xl">
                        <Avatar alt="U" size="lg" />
                    </Chip>
                </div>
            </div>

            <!-- Chip Positions -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Positions</h3>
                <div class="flex flex-wrap items-center gap-6">
                    <div class="text-center">
                        <Chip position="top-right">
                            <Avatar alt="TR" size="xl" />
                        </Chip>
                        <p class="text-xs text-neutral-500 mt-2">top-right</p>
                    </div>
                    <div class="text-center">
                        <Chip position="top-left">
                            <Avatar alt="TL" size="xl" />
                        </Chip>
                        <p class="text-xs text-neutral-500 mt-2">top-left</p>
                    </div>
                    <div class="text-center">
                        <Chip position="bottom-right">
                            <Avatar alt="BR" size="xl" />
                        </Chip>
                        <p class="text-xs text-neutral-500 mt-2">bottom-right</p>
                    </div>
                    <div class="text-center">
                        <Chip position="bottom-left">
                            <Avatar alt="BL" size="xl" />
                        </Chip>
                        <p class="text-xs text-neutral-500 mt-2">bottom-left</p>
                    </div>
                </div>
            </div>

            <!-- Chip with Text -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Text/Number</h3>
                <div class="flex flex-wrap items-center gap-6">
                    <Chip text={5} size="md">
                        <Button icon="lucide:bell" variant="outline" color="neutral" />
                    </Chip>
                    <Chip text={12} size="lg" color="error">
                        <Button icon="lucide:mail" variant="outline" color="neutral" />
                    </Chip>
                    <Chip text="99+" size="xl" color="primary">
                        <Button icon="lucide:message-circle" variant="outline" color="neutral" />
                    </Chip>
                    <Chip text={3} size="lg" color="success">
                        <Avatar src="https://i.pravatar.cc/150?img=5" alt="User" size="xl" />
                    </Chip>
                </div>
            </div>

            <!-- Chip Inset -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Inset (inside bounds)</h3>
                <div class="flex flex-wrap items-center gap-6">
                    <div class="text-center">
                        <Chip inset={false}>
                            <Avatar alt="N" size="xl" />
                        </Chip>
                        <p class="text-xs text-neutral-500 mt-2">inset=false</p>
                    </div>
                    <div class="text-center">
                        <Chip inset={true}>
                            <Avatar alt="I" size="xl" />
                        </Chip>
                        <p class="text-xs text-neutral-500 mt-2">inset=true</p>
                    </div>
                </div>
            </div>

            <!-- Chip Show/Hide -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Show/Hide</h3>
                <div class="flex flex-wrap items-center gap-6">
                    <Chip show={true}>
                        <Avatar alt="V" size="lg" />
                    </Chip>
                    <Chip show={false}>
                        <Avatar alt="H" size="lg" />
                    </Chip>
                </div>
            </div>

            <!-- Chip Standalone -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Standalone</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Chip standalone size="md" color="primary" />
                    <Chip standalone size="md" color="success" />
                    <Chip standalone size="md" color="error" />
                    <Chip standalone size="lg" color="warning" text={5} />
                    <Chip standalone size="xl" color="info" text="New" />
                </div>
            </div>

            <!-- Chip on Buttons -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">On Buttons</h3>
                <div class="flex flex-wrap items-center gap-6">
                    <Chip text={3} size="lg" color="error">
                        <Button leadingIcon="lucide:inbox">Inbox</Button>
                    </Chip>
                    <Chip size="md" color="success">
                        <Button variant="outline">Online</Button>
                    </Chip>
                    <Chip text="!" size="lg" color="warning">
                        <Button variant="soft" color="neutral">Warnings</Button>
                    </Chip>
                </div>
            </div>
        </section>

        <!-- Card Component -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Card Component
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                A flexible container with header, body, and footer sections
            </p>

            <!-- Card Variants -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Variants</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {#snippet cardHeader()}
                        <h3 class="font-semibold">Outline Card</h3>
                    {/snippet}
                    {#snippet cardFooter()}
                        <div class="flex justify-end gap-2">
                            <Button size="sm" variant="ghost" color="neutral">Cancel</Button>
                            <Button size="sm">Save</Button>
                        </div>
                    {/snippet}
                    <Card variant="outline" header={cardHeader} footer={cardFooter}>
                        <p class="text-sm text-neutral-600 dark:text-neutral-400">
                            This is the default outline variant with a ring border.
                        </p>
                    </Card>

                    {#snippet solidHeader()}
                        <h3 class="font-semibold">Solid Card</h3>
                    {/snippet}
                    {#snippet solidFooter()}
                        <div class="flex justify-end gap-2">
                            <Button size="sm" variant="soft" color="error">Cancel</Button>
                            <Button size="sm" variant="solid">Save</Button>
                        </div>
                    {/snippet}
                    <Card variant="solid" header={solidHeader} footer={solidFooter}>
                        <p class="text-sm opacity-80">
                            This is the solid variant with inverted colors.
                        </p>
                    </Card>

                    {#snippet softHeader()}
                        <h3 class="font-semibold">Soft Card</h3>
                    {/snippet}
                    {#snippet softFooter()}
                        <div class="flex justify-end gap-2">
                            <Button size="sm" variant="ghost" color="neutral">Cancel</Button>
                            <Button size="sm">Save</Button>
                        </div>
                    {/snippet}
                    <Card variant="soft" header={softHeader} footer={softFooter}>
                        <p class="text-sm text-neutral-600 dark:text-neutral-400">
                            This is the soft variant with a subtle background.
                        </p>
                    </Card>

                    {#snippet subtleHeader()}
                        <h3 class="font-semibold">Subtle Card</h3>
                    {/snippet}
                    {#snippet subtleFooter()}
                        <div class="flex justify-end gap-2">
                            <Button size="sm" variant="ghost" color="neutral">Cancel</Button>
                            <Button size="sm">Save</Button>
                        </div>
                    {/snippet}
                    <Card variant="subtle" header={subtleHeader} footer={subtleFooter}>
                        <p class="text-sm text-neutral-600 dark:text-neutral-400">
                            This is the subtle variant with background and ring.
                        </p>
                    </Card>
                </div>
            </div>

            <!-- Card Body Only -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Body Only</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <p class="text-neutral-700 dark:text-neutral-300">
                            A simple card with only body content. No header or footer.
                        </p>
                    </Card>
                    <Card variant="soft">
                        <div class="flex items-center gap-3">
                            <Avatar src="https://i.pravatar.cc/150?img=10" alt="User" size="lg" />
                            <div>
                                <p class="font-medium text-neutral-900 dark:text-white">John Doe</p>
                                <p class="text-sm text-neutral-500">Software Engineer</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <!-- Card with Header Only -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Header + Body</h3>
                {#snippet statsHeader()}
                    <div class="flex items-center justify-between">
                        <h3 class="font-semibold">Statistics</h3>
                        <Button size="xs" variant="ghost" icon="lucide:more-horizontal" />
                    </div>
                {/snippet}
                <Card header={statsHeader}>
                    <div class="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p class="text-2xl font-bold text-primary-600">1,234</p>
                            <p class="text-xs text-neutral-500">Users</p>
                        </div>
                        <div>
                            <p class="text-2xl font-bold text-success-600">567</p>
                            <p class="text-xs text-neutral-500">Orders</p>
                        </div>
                        <div>
                            <p class="text-2xl font-bold text-warning-600">89%</p>
                            <p class="text-xs text-neutral-500">Growth</p>
                        </div>
                    </div>
                </Card>
            </div>

            <!-- Card with Custom Styles -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Custom Styles (ui prop)</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {#snippet customHeader()}
                        <h3 class="font-semibold text-primary-600">Custom Header</h3>
                    {/snippet}
                    <Card
                        header={customHeader}
                        ui={{
                            root: 'shadow-lg',
                            header: 'bg-primary-50 dark:bg-primary-900/20',
                            body: 'bg-gradient-to-b from-transparent to-primary-50/50 dark:to-primary-900/10'
                        }}
                    >
                        <p class="text-sm text-neutral-600 dark:text-neutral-400">
                            Card with custom gradient and colored header.
                        </p>
                    </Card>

                    {#snippet roundedHeader()}
                        <h3 class="font-semibold">Rounded Card</h3>
                    {/snippet}
                    <Card
                        header={roundedHeader}
                        ui={{ root: 'rounded-2xl shadow-xl' }}
                        variant="soft"
                    >
                        <p class="text-sm text-neutral-600 dark:text-neutral-400">
                            Extra rounded corners and shadow.
                        </p>
                    </Card>
                </div>
            </div>
        </section>

        <!-- Badge Component -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Badge Component
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                A short text to represent a status or a category
            </p>

            <!-- Badge Variants -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Variants</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Badge variant="solid" label="Solid" />
                    <Badge variant="outline" label="Outline" />
                    <Badge variant="soft" label="Soft" />
                    <Badge variant="subtle" label="Subtle" />
                </div>
            </div>

            <!-- Badge Colors -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Colors</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Badge color="primary" label="Primary" />
                    <Badge color="secondary" label="Secondary" />
                    <Badge color="success" label="Success" />
                    <Badge color="warning" label="Warning" />
                    <Badge color="error" label="Error" />
                    <Badge color="info" label="Info" />
                    <Badge color="neutral" label="Neutral" />
                </div>
            </div>

            <!-- Badge Sizes -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Sizes</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Badge size="xs" label="Extra Small" />
                    <Badge size="sm" label="Small" />
                    <Badge size="md" label="Medium" />
                    <Badge size="lg" label="Large" />
                    <Badge size="xl" label="Extra Large" />
                </div>
            </div>

            <!-- Badge with Outline Colors -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Outline Colors</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Badge variant="outline" color="primary" label="Primary" />
                    <Badge variant="outline" color="secondary" label="Secondary" />
                    <Badge variant="outline" color="success" label="Success" />
                    <Badge variant="outline" color="warning" label="Warning" />
                    <Badge variant="outline" color="error" label="Error" />
                    <Badge variant="outline" color="info" label="Info" />
                    <Badge variant="outline" color="neutral" label="Neutral" />
                </div>
            </div>

            <!-- Badge with Soft Colors -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Soft Colors</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Badge variant="soft" color="primary" label="Primary" />
                    <Badge variant="soft" color="secondary" label="Secondary" />
                    <Badge variant="soft" color="success" label="Success" />
                    <Badge variant="soft" color="warning" label="Warning" />
                    <Badge variant="soft" color="error" label="Error" />
                    <Badge variant="soft" color="info" label="Info" />
                    <Badge variant="soft" color="neutral" label="Neutral" />
                </div>
            </div>

            <!-- Badge with Icons -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Icons</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Badge leadingIcon="lucide:check" color="success" label="Verified" />
                    <Badge leadingIcon="lucide:star" color="warning" label="Featured" />
                    <Badge trailingIcon="lucide:arrow-right" color="primary" label="New" />
                    <Badge leadingIcon="lucide:clock" trailingIcon="lucide:x" color="neutral" variant="outline" label="Pending" />
                </div>
            </div>

            <!-- Badge Icon Only -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Icon Only</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Badge icon="lucide:check" color="success" size="xs" />
                    <Badge icon="lucide:check" color="success" size="sm" />
                    <Badge icon="lucide:check" color="success" size="md" />
                    <Badge icon="lucide:check" color="success" size="lg" />
                    <Badge icon="lucide:check" color="success" size="xl" />
                </div>
                <div class="flex flex-wrap items-center gap-3">
                    <Badge icon="lucide:x" color="error" variant="soft" />
                    <Badge icon="lucide:alert-triangle" color="warning" variant="outline" />
                    <Badge icon="lucide:info" color="info" variant="subtle" />
                </div>
            </div>

            <!-- Badge with Avatar -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Avatar</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Badge
                        avatar={{ src: 'https://i.pravatar.cc/150?img=1', alt: 'User' }}
                        label="John Doe"
                        variant="outline"
                        color="neutral"
                    />
                    <Badge
                        avatar={{ alt: 'Jane' }}
                        label="Jane Smith"
                        variant="soft"
                        color="primary"
                    />
                    <Badge
                        avatar={{ icon: 'lucide:user' }}
                        label="Guest"
                        variant="subtle"
                        color="neutral"
                    />
                </div>
            </div>

            <!-- Badge Use Cases -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Common Use Cases</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <Badge color="success" variant="soft" leadingIcon="lucide:circle" label="Online" />
                    <Badge color="error" variant="soft" leadingIcon="lucide:circle" label="Offline" />
                    <Badge color="warning" variant="soft" leadingIcon="lucide:circle" label="Away" />
                    <Badge color="neutral" variant="outline" label="v1.0.0" />
                    <Badge color="primary" label="PRO" />
                    <Badge color="secondary" variant="soft" label="Beta" />
                </div>
            </div>
        </section>

        <!-- User Component -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                User Component
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                Display user information with avatar, name, and description
            </p>

            <!-- Basic User -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Basic</h3>
                <div class="flex flex-wrap items-start gap-6">
                    <User
                        name="John Doe"
                        description="Software Engineer"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=1', alt: 'John Doe' }}
                    />
                    <User
                        name="Jane Smith"
                        description="Product Designer"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=2', alt: 'Jane Smith' }}
                    />
                    <User
                        name="Bob Wilson"
                        description="DevOps Engineer"
                        avatar={{ alt: 'Bob Wilson' }}
                    />
                </div>
            </div>

            <!-- User Sizes -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Sizes</h3>
                <div class="flex flex-wrap items-start gap-6">
                    <User
                        size="xs"
                        name="Extra Small"
                        description="xs size"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=10', alt: 'User' }}
                    />
                    <User
                        size="sm"
                        name="Small"
                        description="sm size"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=11', alt: 'User' }}
                    />
                    <User
                        size="md"
                        name="Medium"
                        description="md size (default)"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=12', alt: 'User' }}
                    />
                    <User
                        size="lg"
                        name="Large"
                        description="lg size"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=13', alt: 'User' }}
                    />
                    <User
                        size="xl"
                        name="Extra Large"
                        description="xl size"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=14', alt: 'User' }}
                    />
                </div>
            </div>

            <!-- User with Chip -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Status Chip</h3>
                <div class="flex flex-wrap items-start gap-6">
                    <User
                        name="Online User"
                        description="Available"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=20', alt: 'User' }}
                        chip={{ color: 'success' }}
                    />
                    <User
                        name="Busy User"
                        description="In a meeting"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=21', alt: 'User' }}
                        chip={{ color: 'error' }}
                    />
                    <User
                        name="Away User"
                        description="Back in 5 min"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=22', alt: 'User' }}
                        chip={{ color: 'warning' }}
                    />
                </div>
            </div>

            <!-- User Vertical Orientation -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Vertical Orientation</h3>
                <div class="flex flex-wrap items-start gap-8">
                    <User
                        orientation="vertical"
                        name="Alice Brown"
                        description="Team Lead"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=30', alt: 'Alice' }}
                        size="lg"
                    />
                    <User
                        orientation="vertical"
                        name="Charlie Davis"
                        description="Senior Developer"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=31', alt: 'Charlie' }}
                        size="lg"
                    />
                    <User
                        orientation="vertical"
                        name="Diana Evans"
                        description="UX Designer"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=32', alt: 'Diana' }}
                        size="lg"
                        chip={{ color: 'success' }}
                    />
                </div>
            </div>

            <!-- Clickable User (with href) -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Clickable (Link)</h3>
                <div class="flex flex-wrap items-start gap-6">
                    <User
                        name="View Profile"
                        description="Click to open"
                        avatar={{ src: 'https://i.pravatar.cc/150?img=40', alt: 'User' }}
                        href="#user-profile"
                    />
                    <User
                        name="External Link"
                        description="Opens in new tab"
                        avatar={{ icon: 'lucide:external-link' }}
                        href="https://github.com"
                        target="_blank"
                    />
                </div>
            </div>

            <!-- User with Icon Avatar -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Icon Avatar</h3>
                <div class="flex flex-wrap items-start gap-6">
                    <User
                        name="System"
                        description="Automated message"
                        avatar={{ icon: 'lucide:bot' }}
                    />
                    <User
                        name="Support"
                        description="Help desk"
                        avatar={{ icon: 'lucide:headphones' }}
                    />
                    <User
                        name="Admin"
                        description="Administrator"
                        avatar={{ icon: 'lucide:shield' }}
                    />
                </div>
            </div>

            <!-- User in Card -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">In Card Context</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {#snippet teamHeader()}
                        <h3 class="font-semibold">Team Members</h3>
                    {/snippet}
                    <Card header={teamHeader}>
                        <div class="space-y-4">
                            <User
                                name="John Doe"
                                description="Team Lead"
                                avatar={{ src: 'https://i.pravatar.cc/150?img=50', alt: 'John' }}
                                chip={{ color: 'success' }}
                            />
                            <User
                                name="Jane Smith"
                                description="Developer"
                                avatar={{ src: 'https://i.pravatar.cc/150?img=51', alt: 'Jane' }}
                                chip={{ color: 'success' }}
                            />
                            <User
                                name="Bob Wilson"
                                description="Designer"
                                avatar={{ src: 'https://i.pravatar.cc/150?img=52', alt: 'Bob' }}
                                chip={{ color: 'warning' }}
                            />
                        </div>
                    </Card>

                    {#snippet profileHeader()}
                        <h3 class="font-semibold">Profile</h3>
                    {/snippet}
                    <Card header={profileHeader} variant="soft">
                        <div class="flex flex-col items-center">
                            <User
                                orientation="vertical"
                                size="xl"
                                name="Alex Johnson"
                                description="Full Stack Developer"
                                avatar={{ src: 'https://i.pravatar.cc/150?img=55', alt: 'Alex' }}
                                chip={{ color: 'success' }}
                            />
                            <div class="flex gap-2 mt-4">
                                <Button size="sm" variant="outline">Message</Button>
                                <Button size="sm">Follow</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>

        <!-- Separator Component -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Separator Component
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                A visual divider to separate content with optional label, icon, or avatar
            </p>

            <!-- Basic Separator -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Basic</h3>
                <div class="space-y-4">
                    <Separator />
                    <p class="text-sm text-neutral-600 dark:text-neutral-400">Content above and below the separator</p>
                    <Separator />
                </div>
            </div>

            <!-- Separator with Label -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Label</h3>
                <div class="space-y-4">
                    <Separator label="OR" />
                    <Separator label="Section Title" />
                    <Separator label="Continue with" />
                </div>
            </div>

            <!-- Separator with Icon -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Icon</h3>
                <div class="space-y-4">
                    <Separator icon="lucide:star" />
                    <Separator icon="lucide:heart" color="error" />
                    <Separator icon="lucide:zap" color="warning" />
                </div>
            </div>

            <!-- Separator with Avatar -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Avatar</h3>
                <div class="space-y-4">
                    <Separator avatar={{ src: 'https://i.pravatar.cc/150?img=1', alt: 'User' }} />
                    <Separator avatar={{ alt: 'John Doe' }} />
                    <Separator avatar={{ icon: 'lucide:user' }} />
                </div>
            </div>

            <!-- Separator Colors -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Colors</h3>
                <div class="space-y-4">
                    <Separator color="primary" label="Primary" />
                    <Separator color="secondary" label="Secondary" />
                    <Separator color="success" label="Success" />
                    <Separator color="warning" label="Warning" />
                    <Separator color="error" label="Error" />
                    <Separator color="info" label="Info" />
                    <Separator color="neutral" label="Neutral" />
                </div>
            </div>

            <!-- Separator Sizes -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Sizes (Border Thickness)</h3>
                <div class="space-y-4">
                    <Separator size="xs" label="Extra Small (xs)" />
                    <Separator size="sm" label="Small (sm)" />
                    <Separator size="md" label="Medium (md)" />
                    <Separator size="lg" label="Large (lg)" />
                    <Separator size="xl" label="Extra Large (xl)" />
                </div>
            </div>

            <!-- Separator Types -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Types (Border Style)</h3>
                <div class="space-y-4">
                    <Separator type="solid" label="Solid" size="sm" />
                    <Separator type="dashed" label="Dashed" size="sm" />
                    <Separator type="dotted" label="Dotted" size="sm" />
                </div>
            </div>

            <!-- Separator Vertical Orientation -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Vertical Orientation</h3>
                <div class="flex items-center gap-4 h-24">
                    <span class="text-sm text-neutral-600 dark:text-neutral-400">Left</span>
                    <Separator orientation="vertical" />
                    <span class="text-sm text-neutral-600 dark:text-neutral-400">Middle</span>
                    <Separator orientation="vertical" color="primary" />
                    <span class="text-sm text-neutral-600 dark:text-neutral-400">Right</span>
                </div>
                <div class="flex items-center gap-4 h-32">
                    <span class="text-sm text-neutral-600 dark:text-neutral-400">Item 1</span>
                    <Separator orientation="vertical" label="VS" size="sm" />
                    <span class="text-sm text-neutral-600 dark:text-neutral-400">Item 2</span>
                    <Separator orientation="vertical" icon="lucide:minus" size="sm" />
                    <span class="text-sm text-neutral-600 dark:text-neutral-400">Item 3</span>
                </div>
            </div>

            <!-- Separator with Custom Content -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Custom Content (children)</h3>
                <div class="space-y-4">
                    <Separator>
                        <Badge label="NEW" color="primary" size="sm" />
                    </Separator>
                    <Separator>
                        <Button size="xs" variant="soft">Load More</Button>
                    </Separator>
                    <Separator color="success">
                        <span class="flex items-center gap-1 text-success-500 text-sm">
                            <Icon name="lucide:check-circle" size={16} />
                            Completed
                        </span>
                    </Separator>
                </div>
            </div>

            <!-- Separator Use Cases -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Common Use Cases</h3>
                <Card>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <span class="font-medium">Login with email</span>
                        </div>
                        <div class="h-10 bg-neutral-100 dark:bg-neutral-800 rounded flex items-center px-3 text-sm text-neutral-500">
                            email@example.com
                        </div>
                        <Separator label="OR" />
                        <div class="flex gap-2">
                            <Button variant="outline" color="neutral" block leadingIcon="lucide:github">
                                GitHub
                            </Button>
                            <Button variant="outline" color="neutral" block leadingIcon="lucide:mail">
                                Google
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>

        <!-- Kbd Component -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Kbd Component
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                Display keyboard keys and shortcuts with platform-aware symbols
            </p>

            <!-- Basic Kbd -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Basic</h3>
                <div class="flex flex-wrap items-center gap-2">
                    <Kbd>K</Kbd>
                    <Kbd>A</Kbd>
                    <Kbd>B</Kbd>
                    <Kbd>C</Kbd>
                </div>
            </div>

            <!-- Kbd with value prop -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With value prop</h3>
                <div class="flex flex-wrap items-center gap-2">
                    <Kbd value="K" />
                    <Kbd value="Enter" />
                    <Kbd value="Esc" />
                </div>
            </div>

            <!-- Special Keys (Platform Aware) -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Special Keys (Platform Aware)</h3>
                <p class="text-xs text-neutral-500 dark:text-neutral-500">These keys display differently on Mac vs Windows/Linux</p>
                <div class="flex flex-wrap items-center gap-2">
                    <Kbd value="meta" />
                    <Kbd value="ctrl" />
                    <Kbd value="alt" />
                    <Kbd value="shift" />
                    <Kbd value="enter" />
                    <Kbd value="delete" />
                    <Kbd value="tab" />
                    <Kbd value="escape" />
                    <Kbd value="space" />
                </div>
            </div>

            <!-- Arrow Keys -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Arrow Keys</h3>
                <div class="flex flex-wrap items-center gap-2">
                    <Kbd value="arrowup" />
                    <Kbd value="arrowdown" />
                    <Kbd value="arrowleft" />
                    <Kbd value="arrowright" />
                </div>
            </div>

            <!-- Kbd Sizes -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Sizes</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <div class="text-center">
                        <Kbd size="sm">K</Kbd>
                        <p class="text-xs text-neutral-500 mt-1">sm</p>
                    </div>
                    <div class="text-center">
                        <Kbd size="md">K</Kbd>
                        <p class="text-xs text-neutral-500 mt-1">md</p>
                    </div>
                    <div class="text-center">
                        <Kbd size="lg">K</Kbd>
                        <p class="text-xs text-neutral-500 mt-1">lg</p>
                    </div>
                </div>
            </div>

            <!-- Kbd Variants -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Variants</h3>
                <div class="flex flex-wrap items-center gap-3">
                    <div class="text-center">
                        <Kbd variant="outline">K</Kbd>
                        <p class="text-xs text-neutral-500 mt-1">outline</p>
                    </div>
                    <div class="text-center">
                        <Kbd variant="solid">K</Kbd>
                        <p class="text-xs text-neutral-500 mt-1">solid</p>
                    </div>
                    <div class="text-center">
                        <Kbd variant="soft">K</Kbd>
                        <p class="text-xs text-neutral-500 mt-1">soft</p>
                    </div>
                    <div class="text-center">
                        <Kbd variant="subtle">K</Kbd>
                        <p class="text-xs text-neutral-500 mt-1">subtle</p>
                    </div>
                </div>
            </div>

            <!-- Kbd Colors -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Colors</h3>
                <div class="flex flex-wrap items-center gap-2">
                    <Kbd color="primary">P</Kbd>
                    <Kbd color="secondary">S</Kbd>
                    <Kbd color="success">S</Kbd>
                    <Kbd color="warning">W</Kbd>
                    <Kbd color="error">E</Kbd>
                    <Kbd color="info">I</Kbd>
                    <Kbd color="neutral">N</Kbd>
                </div>
            </div>

            <!-- Kbd Colors with Soft Variant -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Colors (Soft Variant)</h3>
                <div class="flex flex-wrap items-center gap-2">
                    <Kbd color="primary" variant="soft">P</Kbd>
                    <Kbd color="secondary" variant="soft">S</Kbd>
                    <Kbd color="success" variant="soft">S</Kbd>
                    <Kbd color="warning" variant="soft">W</Kbd>
                    <Kbd color="error" variant="soft">E</Kbd>
                    <Kbd color="info" variant="soft">I</Kbd>
                    <Kbd color="neutral" variant="soft">N</Kbd>
                </div>
            </div>

            <!-- Kbd Colors with Solid Variant -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Colors (Solid Variant)</h3>
                <div class="flex flex-wrap items-center gap-2">
                    <Kbd color="primary" variant="solid">P</Kbd>
                    <Kbd color="secondary" variant="solid">S</Kbd>
                    <Kbd color="success" variant="solid">S</Kbd>
                    <Kbd color="warning" variant="solid">W</Kbd>
                    <Kbd color="error" variant="solid">E</Kbd>
                    <Kbd color="info" variant="solid">I</Kbd>
                    <Kbd color="neutral" variant="solid">N</Kbd>
                </div>
            </div>

            <!-- Keyboard Shortcuts -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Keyboard Shortcuts</h3>
                <div class="space-y-3">
                    <div class="flex items-center justify-between p-2 rounded bg-neutral-100 dark:bg-neutral-800">
                        <span class="text-sm text-neutral-700 dark:text-neutral-300">Save</span>
                        <div class="flex items-center gap-1">
                            <Kbd value="meta" size="sm" />
                            <span class="text-neutral-400">+</span>
                            <Kbd size="sm">S</Kbd>
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-2 rounded bg-neutral-100 dark:bg-neutral-800">
                        <span class="text-sm text-neutral-700 dark:text-neutral-300">Copy</span>
                        <div class="flex items-center gap-1">
                            <Kbd value="meta" size="sm" />
                            <span class="text-neutral-400">+</span>
                            <Kbd size="sm">C</Kbd>
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-2 rounded bg-neutral-100 dark:bg-neutral-800">
                        <span class="text-sm text-neutral-700 dark:text-neutral-300">Paste</span>
                        <div class="flex items-center gap-1">
                            <Kbd value="meta" size="sm" />
                            <span class="text-neutral-400">+</span>
                            <Kbd size="sm">V</Kbd>
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-2 rounded bg-neutral-100 dark:bg-neutral-800">
                        <span class="text-sm text-neutral-700 dark:text-neutral-300">Undo</span>
                        <div class="flex items-center gap-1">
                            <Kbd value="meta" size="sm" />
                            <span class="text-neutral-400">+</span>
                            <Kbd size="sm">Z</Kbd>
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-2 rounded bg-neutral-100 dark:bg-neutral-800">
                        <span class="text-sm text-neutral-700 dark:text-neutral-300">Search</span>
                        <div class="flex items-center gap-1">
                            <Kbd value="meta" size="sm" />
                            <span class="text-neutral-400">+</span>
                            <Kbd size="sm">K</Kbd>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Kbd in Context -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">In Context</h3>
                <Card variant="soft">
                    <div class="text-sm text-neutral-600 dark:text-neutral-400">
                        Press <Kbd value="meta" /> + <Kbd>K</Kbd> to open the command palette.
                        Use <Kbd value="arrowup" /> and <Kbd value="arrowdown" /> to navigate,
                        and <Kbd value="enter" /> to select.
                    </div>
                </Card>
            </div>
        </section>

        <!-- Timeline Component -->
        <section class="space-y-4">
            <h2 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
                Timeline Component
            </h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
                Display a sequence of events with dates, titles, icons or avatars
            </p>

            <!-- Basic Timeline -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Basic (Vertical)</h3>
                <Timeline items={timelineItems} value={activeTimelineValue} />
            </div>

            <!-- Timeline Controls -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Interactive Controls</h3>
                <div class="flex flex-wrap gap-2">
                    {#each timelineItems as item}
                        <Button
                            size="sm"
                            variant={activeTimelineValue === item.value ? 'solid' : 'outline'}
                            onclick={() => activeTimelineValue = item.value as number}
                        >
                            Step {item.value}
                        </Button>
                    {/each}
                </div>
            </div>

            <!-- Timeline Colors -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Colors</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <p class="text-xs text-neutral-500 mb-2">Primary</p>
                        <Timeline
                            items={timelineItems.slice(0, 3)}
                            value={2}
                            color="primary"
                            size="sm"
                        />
                    </div>
                    <div>
                        <p class="text-xs text-neutral-500 mb-2">Success</p>
                        <Timeline
                            items={timelineItems.slice(0, 3)}
                            value={2}
                            color="success"
                            size="sm"
                        />
                    </div>
                    <div>
                        <p class="text-xs text-neutral-500 mb-2">Error</p>
                        <Timeline
                            items={timelineItems.slice(0, 3)}
                            value={2}
                            color="error"
                            size="sm"
                        />
                    </div>
                    <div>
                        <p class="text-xs text-neutral-500 mb-2">Warning</p>
                        <Timeline
                            items={timelineItems.slice(0, 3)}
                            value={2}
                            color="warning"
                            size="sm"
                        />
                    </div>
                    <div>
                        <p class="text-xs text-neutral-500 mb-2">Info</p>
                        <Timeline
                            items={timelineItems.slice(0, 3)}
                            value={2}
                            color="info"
                            size="sm"
                        />
                    </div>
                    <div>
                        <p class="text-xs text-neutral-500 mb-2">Neutral</p>
                        <Timeline
                            items={timelineItems.slice(0, 3)}
                            value={2}
                            color="neutral"
                            size="sm"
                        />
                    </div>
                </div>
            </div>

            <!-- Timeline Sizes -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Sizes</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <p class="text-xs text-neutral-500 mb-2">Small (sm)</p>
                        <Timeline
                            items={timelineItems.slice(0, 3)}
                            value={2}
                            size="sm"
                        />
                    </div>
                    <div>
                        <p class="text-xs text-neutral-500 mb-2">Medium (md)</p>
                        <Timeline
                            items={timelineItems.slice(0, 3)}
                            value={2}
                            size="md"
                        />
                    </div>
                    <div>
                        <p class="text-xs text-neutral-500 mb-2">Large (lg)</p>
                        <Timeline
                            items={timelineItems.slice(0, 3)}
                            value={2}
                            size="lg"
                        />
                    </div>
                </div>
            </div>

            <!-- Horizontal Timeline -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Horizontal Orientation</h3>
                <Timeline
                    items={timelineItems}
                    value={activeTimelineValue}
                    orientation="horizontal"
                    size="sm"
                />
            </div>

            <!-- Reverse Mode -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Reverse Mode</h3>
                <p class="text-xs text-neutral-500">Items after active are completed instead of before</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p class="text-xs text-neutral-500 mb-2">Normal (reverse=false)</p>
                        <Timeline
                            items={timelineItems.slice(0, 4)}
                            value={2}
                            size="sm"
                        />
                    </div>
                    <div>
                        <p class="text-xs text-neutral-500 mb-2">Reverse (reverse=true)</p>
                        <Timeline
                            items={timelineItems.slice(0, 4)}
                            value={2}
                            reverse={true}
                            size="sm"
                        />
                    </div>
                </div>
            </div>

            <!-- Timeline with Avatars -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Avatars</h3>
                <Timeline
                    items={[
                        { value: 1, title: 'John created the project', date: '2 hours ago', avatar: { src: 'https://i.pravatar.cc/150?img=1', alt: 'John' } },
                        { value: 2, title: 'Jane added design files', date: '1 hour ago', avatar: { src: 'https://i.pravatar.cc/150?img=2', alt: 'Jane' } },
                        { value: 3, title: 'Bob reviewed the code', date: '30 min ago', avatar: { src: 'https://i.pravatar.cc/150?img=3', alt: 'Bob' } },
                        { value: 4, title: 'Alice deployed to staging', date: 'Just now', avatar: { src: 'https://i.pravatar.cc/150?img=4', alt: 'Alice' } }
                    ]}
                    value={3}
                    color="success"
                />
            </div>

            <!-- Timeline States -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">States Explained</h3>
                <div class="flex flex-wrap gap-4 text-sm">
                    <div class="flex items-center gap-2">
                        <div class="size-4 rounded-full bg-primary-500"></div>
                        <span class="text-neutral-600 dark:text-neutral-400">Completed</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="size-4 rounded-full bg-primary-500"></div>
                        <span class="text-neutral-600 dark:text-neutral-400">Active</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="size-4 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
                        <span class="text-neutral-600 dark:text-neutral-400">Pending</span>
                    </div>
                </div>
            </div>

            <!-- Timeline in Card -->
            <div class="space-y-2">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">In Card Context</h3>
                {#snippet orderHeader()}
                    <div class="flex items-center justify-between">
                        <h3 class="font-semibold">Order Status</h3>
                        <Badge label="In Transit" color="info" variant="soft" size="sm" />
                    </div>
                {/snippet}
                <Card header={orderHeader}>
                    <Timeline
                        items={[
                            { value: 1, title: 'Order Placed', description: 'Your order has been confirmed', icon: 'lucide:shopping-cart' },
                            { value: 2, title: 'Processing', description: 'We are preparing your order', icon: 'lucide:package' },
                            { value: 3, title: 'Shipped', description: 'Your order is on the way', icon: 'lucide:truck' },
                            { value: 4, title: 'Delivered', description: 'Package delivered successfully', icon: 'lucide:check-circle' }
                        ]}
                        value={3}
                        color="success"
                        size="sm"
                    />
                </Card>
            </div>

            <!-- Timeline with Custom Slots -->
            <div class="space-y-4">
                <h3 class="text-sm font-medium text-neutral-600 dark:text-neutral-400">With Custom Slots</h3>
                <p class="text-xs text-neutral-500">Override indicator, title, description, or add custom content</p>

                <!-- Custom Indicator Slot -->
                <div class="space-y-2">
                    <p class="text-xs font-medium text-neutral-600 dark:text-neutral-400">Custom Indicator</p>
                    <Timeline
                        items={[
                            { value: 1, title: 'Step 1', description: 'First step completed' },
                            { value: 2, title: 'Step 2', description: 'Second step in progress' },
                            { value: 3, title: 'Step 3', description: 'Third step pending' }
                        ]}
                        value={2}
                        size="md"
                    >
                        {#snippet indicator({ item, state })}
                            <div class="size-8 rounded-full flex items-center justify-center text-sm font-bold {state === 'completed' ? 'bg-success-500 text-white' : state === 'active' ? 'bg-primary-500 text-white' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500'}">
                                {#if state === 'completed'}
                                    <Icon name="lucide:check" size={16} />
                                {:else}
                                    {item.value}
                                {/if}
                            </div>
                        {/snippet}
                    </Timeline>
                </div>

                <!-- Custom Title Slot -->
                <div class="space-y-2">
                    <p class="text-xs font-medium text-neutral-600 dark:text-neutral-400">Custom Title with Badge</p>
                    <Timeline
                        items={[
                            { value: 1, title: 'v1.0.0', description: 'Initial release', icon: 'lucide:rocket' },
                            { value: 2, title: 'v1.1.0', description: 'Bug fixes and improvements', icon: 'lucide:bug' },
                            { value: 3, title: 'v2.0.0', description: 'Major update with new features', icon: 'lucide:sparkles' }
                        ]}
                        value={2}
                        color="info"
                        size="sm"
                    >
                        {#snippet titleSlot({ item, state })}
                            <div class="flex items-center gap-2">
                                <span class="font-semibold text-neutral-900 dark:text-white">{item.title}</span>
                                {#if state === 'active'}
                                    <Badge label="Current" color="primary" size="xs" variant="soft" />
                                {:else if state === 'completed'}
                                    <Badge label="Released" color="success" size="xs" variant="outline" />
                                {:else}
                                    <Badge label="Upcoming" color="neutral" size="xs" variant="outline" />
                                {/if}
                            </div>
                        {/snippet}
                    </Timeline>
                </div>

                <!-- Custom Content Slot (Additional Content) -->
                <div class="space-y-2">
                    <p class="text-xs font-medium text-neutral-600 dark:text-neutral-400">Custom Content (content slot)</p>
                    <Timeline
                        items={[
                            { value: 1, title: 'Design Review', date: 'Mon, Jan 15', icon: 'lucide:palette' },
                            { value: 2, title: 'Development Sprint', date: 'Wed, Jan 17', icon: 'lucide:code' },
                            { value: 3, title: 'QA Testing', date: 'Fri, Jan 19', icon: 'lucide:test-tube' }
                        ]}
                        value={2}
                        size="sm"
                    >
                        {#snippet content({ item, state })}
                            <div class="mt-2 p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                                <div class="flex items-center gap-2 mb-2">
                                    <AvatarGroup size="xs" max={3} avatars={[
                                        { src: 'https://i.pravatar.cc/150?img=1', alt: 'User 1' },
                                        { src: 'https://i.pravatar.cc/150?img=2', alt: 'User 2' },
                                        { src: 'https://i.pravatar.cc/150?img=3', alt: 'User 3' }
                                    ]} />
                                    <span class="text-xs text-neutral-500">3 participants</span>
                                </div>
                                {#if state === 'active'}
                                    <Button size="xs" variant="soft">Join Meeting</Button>
                                {:else if state === 'completed'}
                                    <Button size="xs" variant="outline" color="neutral">View Notes</Button>
                                {:else}
                                    <Button size="xs" variant="ghost" color="neutral" disabled>Scheduled</Button>
                                {/if}
                            </div>
                        {/snippet}
                    </Timeline>
                </div>

                <!-- Multiple Custom Slots Combined -->
                <div class="space-y-2">
                    <p class="text-xs font-medium text-neutral-600 dark:text-neutral-400">Combined Custom Slots (Activity Feed)</p>
                    <Card>
                        <Timeline
                            items={[
                                { value: 1, title: 'John Doe', description: 'Created pull request #123', date: '2 hours ago', avatar: { src: 'https://i.pravatar.cc/150?img=10', alt: 'John' } },
                                { value: 2, title: 'Jane Smith', description: 'Approved the changes', date: '1 hour ago', avatar: { src: 'https://i.pravatar.cc/150?img=20', alt: 'Jane' } },
                                { value: 3, title: 'Bot', description: 'Merged to main branch', date: '30 min ago', avatar: { icon: 'lucide:bot' } }
                            ]}
                            value={3}
                            color="success"
                            size="sm"
                        >
                            {#snippet indicator({ item })}
                                <Avatar {...item.avatar} size="sm" />
                            {/snippet}
                            {#snippet titleSlot({ item })}
                                <span class="font-medium text-neutral-900 dark:text-white">{item.title}</span>
                            {/snippet}
                            {#snippet descriptionSlot({ item })}
                                <p class="text-sm text-neutral-600 dark:text-neutral-400">
                                    {item.description}
                                    <a href="#pr" class="text-primary-500 hover:underline ml-1">View PR</a>
                                </p>
                            {/snippet}
                            {#snippet dateSlot({ item })}
                                <span class="text-xs text-neutral-400">{item.date}</span>
                            {/snippet}
                        </Timeline>
                    </Card>
                </div>
            </div>
        </section>
    </div>
</div>
