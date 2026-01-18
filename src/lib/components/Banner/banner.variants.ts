import { tv } from 'tailwind-variants'

export const bannerVariants = tv({
    slots: {
        root: 'relative z-50 w-full',
        container: 'flex h-12 items-center justify-between gap-3 px-4',
        left: 'hidden lg:flex lg:flex-1 lg:justify-start',
        center: 'flex flex-1 items-center justify-center gap-1.5 min-w-0',
        right: 'hidden lg:flex lg:flex-1 lg:justify-end',
        icon: 'size-5 shrink-0 pointer-events-none',
        title: 'text-sm font-medium truncate',
        actions: 'flex items-center gap-1.5 isolate',
        close: 'shrink-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-inset'
    },
    variants: {
        color: {
            primary: {
                root: 'bg-primary-500',
                icon: 'text-white',
                title: 'text-white',
                close: 'text-white hover:bg-white/10 focus-visible:ring-white/50'
            },
            secondary: {
                root: 'bg-secondary-500',
                icon: 'text-white',
                title: 'text-white',
                close: 'text-white hover:bg-white/10 focus-visible:ring-white/50'
            },
            success: {
                root: 'bg-success-500',
                icon: 'text-white',
                title: 'text-white',
                close: 'text-white hover:bg-white/10 focus-visible:ring-white/50'
            },
            warning: {
                root: 'bg-warning-500',
                icon: 'text-white',
                title: 'text-white',
                close: 'text-white hover:bg-white/10 focus-visible:ring-white/50'
            },
            error: {
                root: 'bg-error-500',
                icon: 'text-white',
                title: 'text-white',
                close: 'text-white hover:bg-white/10 focus-visible:ring-white/50'
            },
            info: {
                root: 'bg-info-500',
                icon: 'text-white',
                title: 'text-white',
                close: 'text-white hover:bg-white/10 focus-visible:ring-white/50'
            },
            neutral: {
                root: 'bg-neutral-900 dark:bg-white',
                icon: 'text-white dark:text-neutral-900',
                title: 'text-white dark:text-neutral-900',
                close: 'text-white dark:text-neutral-900 hover:bg-white/10 dark:hover:bg-neutral-900/10 focus-visible:ring-white/50 dark:focus-visible:ring-neutral-900/50'
            }
        },
        href: {
            true: {
                root: 'cursor-pointer'
            }
        }
    },
    compoundVariants: [
        // Hover states for clickable banners
        {
            color: 'primary',
            href: true,
            class: {
                root: 'hover:bg-primary-500/90'
            }
        },
        {
            color: 'secondary',
            href: true,
            class: {
                root: 'hover:bg-secondary-500/90'
            }
        },
        {
            color: 'success',
            href: true,
            class: {
                root: 'hover:bg-success-500/90'
            }
        },
        {
            color: 'warning',
            href: true,
            class: {
                root: 'hover:bg-warning-500/90'
            }
        },
        {
            color: 'error',
            href: true,
            class: {
                root: 'hover:bg-error-500/90'
            }
        },
        {
            color: 'info',
            href: true,
            class: {
                root: 'hover:bg-info-500/90'
            }
        },
        {
            color: 'neutral',
            href: true,
            class: {
                root: 'hover:bg-neutral-900/90 dark:hover:bg-white/90'
            }
        }
    ],
    defaultVariants: {
        color: 'primary'
    }
})
