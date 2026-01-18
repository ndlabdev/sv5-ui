import { tv } from 'tailwind-variants'

export const badgeVariants = tv({
    slots: {
        base: 'inline-flex items-center font-medium rounded-full',
        label: '',
        leadingIcon: 'shrink-0',
        trailingIcon: 'shrink-0',
        leadingAvatar: 'shrink-0'
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
        size: {
            xs: {
                base: 'text-[10px] px-1.5 py-0.5 gap-0.5',
                leadingIcon: 'size-3',
                trailingIcon: 'size-3',
                leadingAvatar: 'size-3'
            },
            sm: {
                base: 'text-xs px-2 py-0.5 gap-0.5',
                leadingIcon: 'size-3.5',
                trailingIcon: 'size-3.5',
                leadingAvatar: 'size-3.5'
            },
            md: {
                base: 'text-xs px-2.5 py-1 gap-1',
                leadingIcon: 'size-4',
                trailingIcon: 'size-4',
                leadingAvatar: 'size-4'
            },
            lg: {
                base: 'text-sm px-3 py-1 gap-1',
                leadingIcon: 'size-4',
                trailingIcon: 'size-4',
                leadingAvatar: 'size-5'
            },
            xl: {
                base: 'text-sm px-3.5 py-1.5 gap-1.5',
                leadingIcon: 'size-5',
                trailingIcon: 'size-5',
                leadingAvatar: 'size-5'
            }
        },
        square: {
            true: ''
        }
    },
    compoundVariants: [
        // ========== SOLID VARIANTS ==========
        {
            variant: 'solid',
            color: 'primary',
            class: { base: 'bg-primary text-white' }
        },
        {
            variant: 'solid',
            color: 'secondary',
            class: { base: 'bg-secondary text-white' }
        },
        {
            variant: 'solid',
            color: 'success',
            class: { base: 'bg-success text-white' }
        },
        {
            variant: 'solid',
            color: 'warning',
            class: { base: 'bg-warning text-white' }
        },
        {
            variant: 'solid',
            color: 'error',
            class: { base: 'bg-error text-white' }
        },
        {
            variant: 'solid',
            color: 'info',
            class: { base: 'bg-info text-white' }
        },
        {
            variant: 'solid',
            color: 'neutral',
            class: {
                base: 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
            }
        },

        // ========== OUTLINE VARIANTS ==========
        {
            variant: 'outline',
            color: 'primary',
            class: {
                base: 'ring-1 ring-inset ring-primary/50 text-primary bg-transparent'
            }
        },
        {
            variant: 'outline',
            color: 'secondary',
            class: {
                base: 'ring-1 ring-inset ring-secondary/50 text-secondary bg-transparent'
            }
        },
        {
            variant: 'outline',
            color: 'success',
            class: {
                base: 'ring-1 ring-inset ring-success/50 text-success bg-transparent'
            }
        },
        {
            variant: 'outline',
            color: 'warning',
            class: {
                base: 'ring-1 ring-inset ring-warning/50 text-warning-600 bg-transparent'
            }
        },
        {
            variant: 'outline',
            color: 'error',
            class: {
                base: 'ring-1 ring-inset ring-error/50 text-error bg-transparent'
            }
        },
        {
            variant: 'outline',
            color: 'info',
            class: {
                base: 'ring-1 ring-inset ring-info/50 text-info bg-transparent'
            }
        },
        {
            variant: 'outline',
            color: 'neutral',
            class: {
                base: 'ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 text-neutral-700 dark:text-neutral-300 bg-transparent'
            }
        },

        // ========== SOFT VARIANTS ==========
        {
            variant: 'soft',
            color: 'primary',
            class: { base: 'bg-primary/15 text-primary-700 dark:text-primary-300' }
        },
        {
            variant: 'soft',
            color: 'secondary',
            class: { base: 'bg-secondary/15 text-secondary-700 dark:text-secondary-300' }
        },
        {
            variant: 'soft',
            color: 'success',
            class: { base: 'bg-success/15 text-success-700 dark:text-success-300' }
        },
        {
            variant: 'soft',
            color: 'warning',
            class: { base: 'bg-warning/15 text-warning-700 dark:text-warning-300' }
        },
        {
            variant: 'soft',
            color: 'error',
            class: { base: 'bg-error/15 text-error-700 dark:text-error-300' }
        },
        {
            variant: 'soft',
            color: 'info',
            class: { base: 'bg-info/15 text-info-700 dark:text-info-300' }
        },
        {
            variant: 'soft',
            color: 'neutral',
            class: { base: 'bg-neutral/10 text-neutral-700 dark:text-neutral-300' }
        },

        // ========== SUBTLE VARIANTS ==========
        {
            variant: 'subtle',
            color: 'primary',
            class: {
                base: 'ring-1 ring-inset ring-primary/25 bg-primary/10 text-primary-700 dark:text-primary-300'
            }
        },
        {
            variant: 'subtle',
            color: 'secondary',
            class: {
                base: 'ring-1 ring-inset ring-secondary/25 bg-secondary/10 text-secondary-700 dark:text-secondary-300'
            }
        },
        {
            variant: 'subtle',
            color: 'success',
            class: {
                base: 'ring-1 ring-inset ring-success/25 bg-success/10 text-success-700 dark:text-success-300'
            }
        },
        {
            variant: 'subtle',
            color: 'warning',
            class: {
                base: 'ring-1 ring-inset ring-warning/25 bg-warning/10 text-warning-700 dark:text-warning-300'
            }
        },
        {
            variant: 'subtle',
            color: 'error',
            class: {
                base: 'ring-1 ring-inset ring-error/25 bg-error/10 text-error-700 dark:text-error-300'
            }
        },
        {
            variant: 'subtle',
            color: 'info',
            class: {
                base: 'ring-1 ring-inset ring-info/25 bg-info/10 text-info-700 dark:text-info-300'
            }
        },
        {
            variant: 'subtle',
            color: 'neutral',
            class: {
                base: 'ring-1 ring-inset ring-neutral/20 bg-neutral/5 text-neutral-700 dark:text-neutral-300'
            }
        },

        // ========== SQUARE SIZE ADJUSTMENTS ==========
        { square: true, size: 'xs', class: { base: 'p-0.5' } },
        { square: true, size: 'sm', class: { base: 'p-1' } },
        { square: true, size: 'md', class: { base: 'p-1' } },
        { square: true, size: 'lg', class: { base: 'p-1.5' } },
        { square: true, size: 'xl', class: { base: 'p-1.5' } }
    ],
    defaultVariants: {
        variant: 'solid',
        color: 'primary',
        size: 'md'
    }
})
