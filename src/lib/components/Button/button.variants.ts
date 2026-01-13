import { tv, type VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
    base: [
        'inline-flex items-center justify-center gap-2',
        'font-medium whitespace-nowrap',
        'transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        'select-none'
    ],
    variants: {
        variant: {
            solid: '',
            outline: 'border-2 bg-transparent',
            ghost: 'bg-transparent',
            soft: '',
            link: 'bg-transparent underline-offset-4 hover:underline'
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
            xs: 'h-7 px-2.5 text-xs rounded-md',
            sm: 'h-8 px-3 text-sm rounded-md',
            md: 'h-9 px-4 text-sm rounded-lg',
            lg: 'h-10 px-5 text-base rounded-lg',
            xl: 'h-12 px-6 text-lg rounded-xl'
        },
        fullWidth: {
            true: 'w-full'
        },
        iconOnly: {
            true: ''
        },
        loading: {
            true: 'cursor-wait'
        }
    },
    compoundVariants: [
        // Solid variants
        {
            variant: 'solid',
            color: 'primary',
            class: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus-visible:ring-primary-500'
        },
        {
            variant: 'solid',
            color: 'secondary',
            class: 'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800 focus-visible:ring-secondary-500'
        },
        {
            variant: 'solid',
            color: 'success',
            class: 'bg-success-600 text-white hover:bg-success-700 active:bg-success-800 focus-visible:ring-success-500'
        },
        {
            variant: 'solid',
            color: 'warning',
            class: 'bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700 focus-visible:ring-warning-500'
        },
        {
            variant: 'solid',
            color: 'error',
            class: 'bg-error-600 text-white hover:bg-error-700 active:bg-error-800 focus-visible:ring-error-500'
        },
        {
            variant: 'solid',
            color: 'info',
            class: 'bg-info-600 text-white hover:bg-info-700 active:bg-info-800 focus-visible:ring-info-500'
        },
        {
            variant: 'solid',
            color: 'neutral',
            class: 'bg-neutral-800 text-white hover:bg-neutral-900 active:bg-neutral-950 focus-visible:ring-neutral-500 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-100'
        },

        // Outline variants
        {
            variant: 'outline',
            color: 'primary',
            class: 'border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500 dark:hover:bg-primary-950'
        },
        {
            variant: 'outline',
            color: 'secondary',
            class: 'border-secondary-600 text-secondary-600 hover:bg-secondary-50 active:bg-secondary-100 focus-visible:ring-secondary-500 dark:hover:bg-secondary-950'
        },
        {
            variant: 'outline',
            color: 'success',
            class: 'border-success-600 text-success-600 hover:bg-success-50 active:bg-success-100 focus-visible:ring-success-500 dark:hover:bg-success-950'
        },
        {
            variant: 'outline',
            color: 'warning',
            class: 'border-warning-500 text-warning-600 hover:bg-warning-50 active:bg-warning-100 focus-visible:ring-warning-500 dark:hover:bg-warning-950'
        },
        {
            variant: 'outline',
            color: 'error',
            class: 'border-error-600 text-error-600 hover:bg-error-50 active:bg-error-100 focus-visible:ring-error-500 dark:hover:bg-error-950'
        },
        {
            variant: 'outline',
            color: 'info',
            class: 'border-info-600 text-info-600 hover:bg-info-50 active:bg-info-100 focus-visible:ring-info-500 dark:hover:bg-info-950'
        },
        {
            variant: 'outline',
            color: 'neutral',
            class: 'border-neutral-300 text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100 focus-visible:ring-neutral-500 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800'
        },

        // Ghost variants
        {
            variant: 'ghost',
            color: 'primary',
            class: 'text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus-visible:ring-primary-500 dark:hover:bg-primary-950'
        },
        {
            variant: 'ghost',
            color: 'secondary',
            class: 'text-secondary-600 hover:bg-secondary-50 active:bg-secondary-100 focus-visible:ring-secondary-500 dark:hover:bg-secondary-950'
        },
        {
            variant: 'ghost',
            color: 'success',
            class: 'text-success-600 hover:bg-success-50 active:bg-success-100 focus-visible:ring-success-500 dark:hover:bg-success-950'
        },
        {
            variant: 'ghost',
            color: 'warning',
            class: 'text-warning-600 hover:bg-warning-50 active:bg-warning-100 focus-visible:ring-warning-500 dark:hover:bg-warning-950'
        },
        {
            variant: 'ghost',
            color: 'error',
            class: 'text-error-600 hover:bg-error-50 active:bg-error-100 focus-visible:ring-error-500 dark:hover:bg-error-950'
        },
        {
            variant: 'ghost',
            color: 'info',
            class: 'text-info-600 hover:bg-info-50 active:bg-info-100 focus-visible:ring-info-500 dark:hover:bg-info-950'
        },
        {
            variant: 'ghost',
            color: 'neutral',
            class: 'text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200 focus-visible:ring-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-800'
        },

        // Soft variants
        {
            variant: 'soft',
            color: 'primary',
            class: 'bg-primary-100 text-primary-700 hover:bg-primary-200 active:bg-primary-300 focus-visible:ring-primary-500 dark:bg-primary-900 dark:text-primary-300 dark:hover:bg-primary-800'
        },
        {
            variant: 'soft',
            color: 'secondary',
            class: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 active:bg-secondary-300 focus-visible:ring-secondary-500 dark:bg-secondary-900 dark:text-secondary-300 dark:hover:bg-secondary-800'
        },
        {
            variant: 'soft',
            color: 'success',
            class: 'bg-success-100 text-success-700 hover:bg-success-200 active:bg-success-300 focus-visible:ring-success-500 dark:bg-success-900 dark:text-success-300 dark:hover:bg-success-800'
        },
        {
            variant: 'soft',
            color: 'warning',
            class: 'bg-warning-100 text-warning-700 hover:bg-warning-200 active:bg-warning-300 focus-visible:ring-warning-500 dark:bg-warning-900 dark:text-warning-300 dark:hover:bg-warning-800'
        },
        {
            variant: 'soft',
            color: 'error',
            class: 'bg-error-100 text-error-700 hover:bg-error-200 active:bg-error-300 focus-visible:ring-error-500 dark:bg-error-900 dark:text-error-300 dark:hover:bg-error-800'
        },
        {
            variant: 'soft',
            color: 'info',
            class: 'bg-info-100 text-info-700 hover:bg-info-200 active:bg-info-300 focus-visible:ring-info-500 dark:bg-info-900 dark:text-info-300 dark:hover:bg-info-800'
        },
        {
            variant: 'soft',
            color: 'neutral',
            class: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:bg-neutral-300 focus-visible:ring-neutral-500 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
        },

        // Link variants
        {
            variant: 'link',
            color: 'primary',
            class: 'text-primary-600 hover:text-primary-700 focus-visible:ring-primary-500'
        },
        {
            variant: 'link',
            color: 'secondary',
            class: 'text-secondary-600 hover:text-secondary-700 focus-visible:ring-secondary-500'
        },
        {
            variant: 'link',
            color: 'success',
            class: 'text-success-600 hover:text-success-700 focus-visible:ring-success-500'
        },
        {
            variant: 'link',
            color: 'warning',
            class: 'text-warning-600 hover:text-warning-700 focus-visible:ring-warning-500'
        },
        {
            variant: 'link',
            color: 'error',
            class: 'text-error-600 hover:text-error-700 focus-visible:ring-error-500'
        },
        {
            variant: 'link',
            color: 'info',
            class: 'text-info-600 hover:text-info-700 focus-visible:ring-info-500'
        },
        {
            variant: 'link',
            color: 'neutral',
            class: 'text-neutral-600 hover:text-neutral-900 focus-visible:ring-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100'
        },

        // Icon-only size adjustments
        { iconOnly: true, size: 'xs', class: 'w-7 px-0' },
        { iconOnly: true, size: 'sm', class: 'w-8 px-0' },
        { iconOnly: true, size: 'md', class: 'w-9 px-0' },
        { iconOnly: true, size: 'lg', class: 'w-10 px-0' },
        { iconOnly: true, size: 'xl', class: 'w-12 px-0' }
    ],
    defaultVariants: {
        variant: 'solid',
        color: 'primary',
        size: 'md'
    }
})

export type ButtonVariants = VariantProps<typeof buttonVariants>
