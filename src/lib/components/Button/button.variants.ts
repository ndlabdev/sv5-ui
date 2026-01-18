import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
    slots: {
        base: [
            'inline-flex items-center justify-center font-medium',
            'transition-colors duration-200',
            'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none',
            'aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:pointer-events-none',
            'select-none whitespace-nowrap'
        ],
        label: '',
        leadingIcon: 'shrink-0',
        leadingAvatar: 'shrink-0',
        trailingIcon: 'shrink-0'
    },
    variants: {
        variant: {
            solid: '',
            outline: '',
            soft: '',
            subtle: '',
            ghost: '',
            link: ''
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
        size: {
            xs: {
                base: 'h-7 px-2 text-xs gap-1 rounded-md',
                leadingIcon: 'size-3.5',
                leadingAvatar: 'size-4',
                trailingIcon: 'size-3.5'
            },
            sm: {
                base: 'h-8 px-2.5 text-xs gap-1.5 rounded-md',
                leadingIcon: 'size-4',
                leadingAvatar: 'size-5',
                trailingIcon: 'size-4'
            },
            md: {
                base: 'h-9 px-3 text-sm gap-1.5 rounded-lg',
                leadingIcon: 'size-4',
                leadingAvatar: 'size-5',
                trailingIcon: 'size-4'
            },
            lg: {
                base: 'h-10 px-3 text-sm gap-2 rounded-lg',
                leadingIcon: 'size-5',
                leadingAvatar: 'size-6',
                trailingIcon: 'size-5'
            },
            xl: {
                base: 'h-12 px-3 text-base gap-2 rounded-xl',
                leadingIcon: 'size-5',
                leadingAvatar: 'size-7',
                trailingIcon: 'size-5'
            }
        },
        block: {
            true: {
                base: 'w-full',
                trailingIcon: 'ms-auto'
            }
        },
        square: {
            true: ''
        },
        truncate: {
            true: {
                label: 'truncate'
            }
        },
        loading: {
            true: {
                base: 'cursor-wait'
            }
        }
    },
    compoundVariants: [
        // ========== SOLID VARIANTS ==========
        {
            variant: 'solid',
            color: 'primary',
            class: {
                base: 'bg-primary-600 text-white hover:bg-primary active:bg-primary-700 focus-visible:outline-primary'
            }
        },
        {
            variant: 'solid',
            color: 'secondary',
            class: {
                base: 'bg-secondary-600 text-white hover:bg-secondary active:bg-secondary-700 focus-visible:outline-secondary'
            }
        },
        {
            variant: 'solid',
            color: 'success',
            class: {
                base: 'bg-success-600 text-white hover:bg-success active:bg-success-700 focus-visible:outline-success'
            }
        },
        {
            variant: 'solid',
            color: 'warning',
            class: {
                base: 'bg-warning text-white hover:bg-warning-400 active:bg-warning-600 focus-visible:outline-warning'
            }
        },
        {
            variant: 'solid',
            color: 'error',
            class: {
                base: 'bg-error-600 text-white hover:bg-error active:bg-error-700 focus-visible:outline-error'
            }
        },
        {
            variant: 'solid',
            color: 'info',
            class: {
                base: 'bg-info-600 text-white hover:bg-info active:bg-info-700 focus-visible:outline-info'
            }
        },
        {
            variant: 'solid',
            color: 'neutral',
            class: {
                base: 'bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-950 focus-visible:outline-neutral dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200'
            }
        },

        // ========== OUTLINE VARIANTS (using ring) ==========
        {
            variant: 'outline',
            color: 'primary',
            class: {
                base: 'ring-1 ring-inset ring-primary/50 text-primary-600 hover:bg-primary/10 active:bg-primary/15 focus-visible:ring-2 focus-visible:ring-primary dark:text-primary-400'
            }
        },
        {
            variant: 'outline',
            color: 'secondary',
            class: {
                base: 'ring-1 ring-inset ring-secondary/50 text-secondary-600 hover:bg-secondary/10 active:bg-secondary/15 focus-visible:ring-2 focus-visible:ring-secondary dark:text-secondary-400'
            }
        },
        {
            variant: 'outline',
            color: 'success',
            class: {
                base: 'ring-1 ring-inset ring-success/50 text-success-600 hover:bg-success/10 active:bg-success/15 focus-visible:ring-2 focus-visible:ring-success dark:text-success-400'
            }
        },
        {
            variant: 'outline',
            color: 'warning',
            class: {
                base: 'ring-1 ring-inset ring-warning/50 text-warning-600 hover:bg-warning/10 active:bg-warning/15 focus-visible:ring-2 focus-visible:ring-warning dark:text-warning-400'
            }
        },
        {
            variant: 'outline',
            color: 'error',
            class: {
                base: 'ring-1 ring-inset ring-error/50 text-error-600 hover:bg-error/10 active:bg-error/15 focus-visible:ring-2 focus-visible:ring-error dark:text-error-400'
            }
        },
        {
            variant: 'outline',
            color: 'info',
            class: {
                base: 'ring-1 ring-inset ring-info/50 text-info-600 hover:bg-info/10 active:bg-info/15 focus-visible:ring-2 focus-visible:ring-info dark:text-info-400'
            }
        },
        {
            variant: 'outline',
            color: 'neutral',
            class: {
                base: 'ring-1 ring-inset ring-neutral-300 text-neutral-700 hover:bg-neutral/10 active:bg-neutral/15 focus-visible:ring-2 focus-visible:ring-neutral-400 dark:ring-neutral-700 dark:text-neutral-300'
            }
        },

        // ========== SOFT VARIANTS ==========
        {
            variant: 'soft',
            color: 'primary',
            class: {
                base: 'bg-primary/15 text-primary-700 hover:bg-primary/25 active:bg-primary/30 focus-visible:outline-primary dark:text-primary-300'
            }
        },
        {
            variant: 'soft',
            color: 'secondary',
            class: {
                base: 'bg-secondary/15 text-secondary-700 hover:bg-secondary/25 active:bg-secondary/30 focus-visible:outline-secondary dark:text-secondary-300'
            }
        },
        {
            variant: 'soft',
            color: 'success',
            class: {
                base: 'bg-success/15 text-success-700 hover:bg-success/25 active:bg-success/30 focus-visible:outline-success dark:text-success-300'
            }
        },
        {
            variant: 'soft',
            color: 'warning',
            class: {
                base: 'bg-warning/15 text-warning-700 hover:bg-warning/25 active:bg-warning/30 focus-visible:outline-warning dark:text-warning-300'
            }
        },
        {
            variant: 'soft',
            color: 'error',
            class: {
                base: 'bg-error/15 text-error-700 hover:bg-error/25 active:bg-error/30 focus-visible:outline-error dark:text-error-300'
            }
        },
        {
            variant: 'soft',
            color: 'info',
            class: {
                base: 'bg-info/15 text-info-700 hover:bg-info/25 active:bg-info/30 focus-visible:outline-info dark:text-info-300'
            }
        },
        {
            variant: 'soft',
            color: 'neutral',
            class: {
                base: 'bg-neutral/10 text-neutral-700 hover:bg-neutral/20 active:bg-neutral/25 focus-visible:outline-neutral dark:text-neutral-300'
            }
        },

        // ========== SUBTLE VARIANTS (soft + ring) ==========
        {
            variant: 'subtle',
            color: 'primary',
            class: {
                base: 'ring-1 ring-inset ring-primary/25 bg-primary/10 text-primary-600 hover:bg-primary/20 active:bg-primary/25 focus-visible:ring-2 focus-visible:ring-primary dark:text-primary-400'
            }
        },
        {
            variant: 'subtle',
            color: 'secondary',
            class: {
                base: 'ring-1 ring-inset ring-secondary/25 bg-secondary/10 text-secondary-600 hover:bg-secondary/20 active:bg-secondary/25 focus-visible:ring-2 focus-visible:ring-secondary dark:text-secondary-400'
            }
        },
        {
            variant: 'subtle',
            color: 'success',
            class: {
                base: 'ring-1 ring-inset ring-success/25 bg-success/10 text-success-600 hover:bg-success/20 active:bg-success/25 focus-visible:ring-2 focus-visible:ring-success dark:text-success-400'
            }
        },
        {
            variant: 'subtle',
            color: 'warning',
            class: {
                base: 'ring-1 ring-inset ring-warning/25 bg-warning/10 text-warning-600 hover:bg-warning/20 active:bg-warning/25 focus-visible:ring-2 focus-visible:ring-warning dark:text-warning-400'
            }
        },
        {
            variant: 'subtle',
            color: 'error',
            class: {
                base: 'ring-1 ring-inset ring-error/25 bg-error/10 text-error-600 hover:bg-error/20 active:bg-error/25 focus-visible:ring-2 focus-visible:ring-error dark:text-error-400'
            }
        },
        {
            variant: 'subtle',
            color: 'info',
            class: {
                base: 'ring-1 ring-inset ring-info/25 bg-info/10 text-info-600 hover:bg-info/20 active:bg-info/25 focus-visible:ring-2 focus-visible:ring-info dark:text-info-400'
            }
        },
        {
            variant: 'subtle',
            color: 'neutral',
            class: {
                base: 'ring-1 ring-inset ring-neutral/20 bg-neutral/5 text-neutral-700 hover:bg-neutral/15 active:bg-neutral/20 focus-visible:ring-2 focus-visible:ring-neutral-400 dark:text-neutral-300'
            }
        },

        // ========== GHOST VARIANTS ==========
        {
            variant: 'ghost',
            color: 'primary',
            class: {
                base: 'text-primary-600 hover:bg-primary/10 active:bg-primary/15 focus-visible:bg-primary/10 dark:text-primary-400'
            }
        },
        {
            variant: 'ghost',
            color: 'secondary',
            class: {
                base: 'text-secondary-600 hover:bg-secondary/10 active:bg-secondary/15 focus-visible:bg-secondary/10 dark:text-secondary-400'
            }
        },
        {
            variant: 'ghost',
            color: 'success',
            class: {
                base: 'text-success-600 hover:bg-success/10 active:bg-success/15 focus-visible:bg-success/10 dark:text-success-400'
            }
        },
        {
            variant: 'ghost',
            color: 'warning',
            class: {
                base: 'text-warning-600 hover:bg-warning/10 active:bg-warning/15 focus-visible:bg-warning/10 dark:text-warning-400'
            }
        },
        {
            variant: 'ghost',
            color: 'error',
            class: {
                base: 'text-error-600 hover:bg-error/10 active:bg-error/15 focus-visible:bg-error/10 dark:text-error-400'
            }
        },
        {
            variant: 'ghost',
            color: 'info',
            class: {
                base: 'text-info-600 hover:bg-info/10 active:bg-info/15 focus-visible:bg-info/10 dark:text-info-400'
            }
        },
        {
            variant: 'ghost',
            color: 'neutral',
            class: {
                base: 'text-neutral-700 hover:bg-neutral/10 active:bg-neutral/15 focus-visible:bg-neutral/10 dark:text-neutral-300'
            }
        },

        // ========== LINK VARIANTS ==========
        {
            variant: 'link',
            color: 'primary',
            class: {
                base: 'text-primary-600 underline-offset-4 hover:underline hover:text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary dark:text-primary-400'
            }
        },
        {
            variant: 'link',
            color: 'secondary',
            class: {
                base: 'text-secondary-600 underline-offset-4 hover:underline hover:text-secondary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary dark:text-secondary-400'
            }
        },
        {
            variant: 'link',
            color: 'success',
            class: {
                base: 'text-success-600 underline-offset-4 hover:underline hover:text-success focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success dark:text-success-400'
            }
        },
        {
            variant: 'link',
            color: 'warning',
            class: {
                base: 'text-warning-600 underline-offset-4 hover:underline hover:text-warning focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning dark:text-warning-400'
            }
        },
        {
            variant: 'link',
            color: 'error',
            class: {
                base: 'text-error-600 underline-offset-4 hover:underline hover:text-error focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error dark:text-error-400'
            }
        },
        {
            variant: 'link',
            color: 'info',
            class: {
                base: 'text-info-600 underline-offset-4 hover:underline hover:text-info focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info dark:text-info-400'
            }
        },
        {
            variant: 'link',
            color: 'neutral',
            class: {
                base: 'text-neutral-600 underline-offset-4 hover:underline hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-100'
            }
        },

        // ========== SQUARE SIZE ADJUSTMENTS ==========
        { square: true, size: 'xs', class: { base: 'size-7 p-0' } },
        { square: true, size: 'sm', class: { base: 'size-8 p-0' } },
        { square: true, size: 'md', class: { base: 'size-9 p-0' } },
        { square: true, size: 'lg', class: { base: 'size-10 p-0' } },
        { square: true, size: 'xl', class: { base: 'size-12 p-0' } },

        // ========== LOADING ICON ANIMATION ==========
        {
            loading: true,
            class: {
                leadingIcon: 'animate-spin'
            }
        }
    ],
    defaultVariants: {
        variant: 'solid',
        color: 'primary',
        size: 'md'
    }
})

