import { tv } from 'tailwind-variants'

export const alertVariants = tv({
    slots: {
        root: 'relative w-full rounded-lg p-4',
        wrapper: 'min-w-0 flex-1',
        title: 'text-sm font-medium',
        description: 'text-sm opacity-90',
        icon: 'shrink-0 size-5',
        avatar: 'shrink-0',
        actions: 'flex flex-wrap gap-2',
        close: 'shrink-0'
    },
    variants: {
        variant: {
            solid: '',
            outline: '',
            soft: '',
            subtle: ''
        },
        color: {
            primary: '',
            secondary: '',
            success: '',
            warning: '',
            error: '',
            info: '',
            neutral: ''
        },
        orientation: {
            horizontal: {
                root: 'flex items-center gap-3',
                actions: 'items-center'
            },
            vertical: {
                root: 'flex flex-col gap-3',
                wrapper: 'flex flex-col gap-1',
                actions: 'items-start mt-2'
            }
        }
    },
    compoundVariants: [
        // ========== SOLID VARIANTS ==========
        {
            variant: 'solid',
            color: 'primary',
            class: {
                root: 'bg-primary-500 text-white',
                title: 'text-white',
                description: 'text-white/90'
            }
        },
        {
            variant: 'solid',
            color: 'secondary',
            class: {
                root: 'bg-secondary-500 text-white',
                title: 'text-white',
                description: 'text-white/90'
            }
        },
        {
            variant: 'solid',
            color: 'success',
            class: {
                root: 'bg-success-500 text-white',
                title: 'text-white',
                description: 'text-white/90'
            }
        },
        {
            variant: 'solid',
            color: 'warning',
            class: {
                root: 'bg-warning-500 text-white',
                title: 'text-white',
                description: 'text-white/90'
            }
        },
        {
            variant: 'solid',
            color: 'error',
            class: {
                root: 'bg-error-500 text-white',
                title: 'text-white',
                description: 'text-white/90'
            }
        },
        {
            variant: 'solid',
            color: 'info',
            class: {
                root: 'bg-info-500 text-white',
                title: 'text-white',
                description: 'text-white/90'
            }
        },
        {
            variant: 'solid',
            color: 'neutral',
            class: {
                root: 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900',
                title: 'text-white dark:text-neutral-900',
                description: 'text-white/90 dark:text-neutral-900/90'
            }
        },

        // ========== OUTLINE VARIANTS ==========
        {
            variant: 'outline',
            color: 'primary',
            class: {
                root: 'ring-1 ring-inset ring-primary-500/50 bg-transparent',
                title: 'text-primary-600 dark:text-primary-400',
                description: 'text-primary-600/90 dark:text-primary-400/90',
                icon: 'text-primary-500'
            }
        },
        {
            variant: 'outline',
            color: 'secondary',
            class: {
                root: 'ring-1 ring-inset ring-secondary-500/50 bg-transparent',
                title: 'text-secondary-600 dark:text-secondary-400',
                description: 'text-secondary-600/90 dark:text-secondary-400/90',
                icon: 'text-secondary-500'
            }
        },
        {
            variant: 'outline',
            color: 'success',
            class: {
                root: 'ring-1 ring-inset ring-success-500/50 bg-transparent',
                title: 'text-success-600 dark:text-success-400',
                description: 'text-success-600/90 dark:text-success-400/90',
                icon: 'text-success-500'
            }
        },
        {
            variant: 'outline',
            color: 'warning',
            class: {
                root: 'ring-1 ring-inset ring-warning-500/50 bg-transparent',
                title: 'text-warning-600 dark:text-warning-400',
                description: 'text-warning-600/90 dark:text-warning-400/90',
                icon: 'text-warning-500'
            }
        },
        {
            variant: 'outline',
            color: 'error',
            class: {
                root: 'ring-1 ring-inset ring-error-500/50 bg-transparent',
                title: 'text-error-600 dark:text-error-400',
                description: 'text-error-600/90 dark:text-error-400/90',
                icon: 'text-error-500'
            }
        },
        {
            variant: 'outline',
            color: 'info',
            class: {
                root: 'ring-1 ring-inset ring-info-500/50 bg-transparent',
                title: 'text-info-600 dark:text-info-400',
                description: 'text-info-600/90 dark:text-info-400/90',
                icon: 'text-info-500'
            }
        },
        {
            variant: 'outline',
            color: 'neutral',
            class: {
                root: 'ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 bg-transparent',
                title: 'text-neutral-900 dark:text-neutral-100',
                description: 'text-neutral-700 dark:text-neutral-300',
                icon: 'text-neutral-500'
            }
        },

        // ========== SOFT VARIANTS ==========
        {
            variant: 'soft',
            color: 'primary',
            class: {
                root: 'bg-primary-500/15',
                title: 'text-primary-700 dark:text-primary-300',
                description: 'text-primary-700/90 dark:text-primary-300/90',
                icon: 'text-primary-500'
            }
        },
        {
            variant: 'soft',
            color: 'secondary',
            class: {
                root: 'bg-secondary-500/15',
                title: 'text-secondary-700 dark:text-secondary-300',
                description: 'text-secondary-700/90 dark:text-secondary-300/90',
                icon: 'text-secondary-500'
            }
        },
        {
            variant: 'soft',
            color: 'success',
            class: {
                root: 'bg-success-500/15',
                title: 'text-success-700 dark:text-success-300',
                description: 'text-success-700/90 dark:text-success-300/90',
                icon: 'text-success-500'
            }
        },
        {
            variant: 'soft',
            color: 'warning',
            class: {
                root: 'bg-warning-500/15',
                title: 'text-warning-700 dark:text-warning-300',
                description: 'text-warning-700/90 dark:text-warning-300/90',
                icon: 'text-warning-500'
            }
        },
        {
            variant: 'soft',
            color: 'error',
            class: {
                root: 'bg-error-500/15',
                title: 'text-error-700 dark:text-error-300',
                description: 'text-error-700/90 dark:text-error-300/90',
                icon: 'text-error-500'
            }
        },
        {
            variant: 'soft',
            color: 'info',
            class: {
                root: 'bg-info-500/15',
                title: 'text-info-700 dark:text-info-300',
                description: 'text-info-700/90 dark:text-info-300/90',
                icon: 'text-info-500'
            }
        },
        {
            variant: 'soft',
            color: 'neutral',
            class: {
                root: 'bg-neutral-500/10',
                title: 'text-neutral-900 dark:text-neutral-100',
                description: 'text-neutral-700 dark:text-neutral-300',
                icon: 'text-neutral-500'
            }
        },

        // ========== SUBTLE VARIANTS ==========
        {
            variant: 'subtle',
            color: 'primary',
            class: {
                root: 'ring-1 ring-inset ring-primary-500/25 bg-primary-500/10',
                title: 'text-primary-700 dark:text-primary-300',
                description: 'text-primary-700/90 dark:text-primary-300/90',
                icon: 'text-primary-500'
            }
        },
        {
            variant: 'subtle',
            color: 'secondary',
            class: {
                root: 'ring-1 ring-inset ring-secondary-500/25 bg-secondary-500/10',
                title: 'text-secondary-700 dark:text-secondary-300',
                description: 'text-secondary-700/90 dark:text-secondary-300/90',
                icon: 'text-secondary-500'
            }
        },
        {
            variant: 'subtle',
            color: 'success',
            class: {
                root: 'ring-1 ring-inset ring-success-500/25 bg-success-500/10',
                title: 'text-success-700 dark:text-success-300',
                description: 'text-success-700/90 dark:text-success-300/90',
                icon: 'text-success-500'
            }
        },
        {
            variant: 'subtle',
            color: 'warning',
            class: {
                root: 'ring-1 ring-inset ring-warning-500/25 bg-warning-500/10',
                title: 'text-warning-700 dark:text-warning-300',
                description: 'text-warning-700/90 dark:text-warning-300/90',
                icon: 'text-warning-500'
            }
        },
        {
            variant: 'subtle',
            color: 'error',
            class: {
                root: 'ring-1 ring-inset ring-error-500/25 bg-error-500/10',
                title: 'text-error-700 dark:text-error-300',
                description: 'text-error-700/90 dark:text-error-300/90',
                icon: 'text-error-500'
            }
        },
        {
            variant: 'subtle',
            color: 'info',
            class: {
                root: 'ring-1 ring-inset ring-info-500/25 bg-info-500/10',
                title: 'text-info-700 dark:text-info-300',
                description: 'text-info-700/90 dark:text-info-300/90',
                icon: 'text-info-500'
            }
        },
        {
            variant: 'subtle',
            color: 'neutral',
            class: {
                root: 'ring-1 ring-inset ring-neutral-500/20 bg-neutral-500/5',
                title: 'text-neutral-900 dark:text-neutral-100',
                description: 'text-neutral-700 dark:text-neutral-300',
                icon: 'text-neutral-500'
            }
        }
    ],
    defaultVariants: {
        variant: 'soft',
        color: 'primary',
        orientation: 'horizontal'
    }
})

/** Avatar size mapping based on alert context */
export const avatarSizeMap = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
} as const
