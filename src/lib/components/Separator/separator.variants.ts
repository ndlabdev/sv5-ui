import { tv } from 'tailwind-variants'

export const separatorVariants = tv({
    slots: {
        root: 'flex items-center align-center',
        border: 'flex-grow',
        container: 'flex items-center justify-center shrink-0',
        icon: 'shrink-0',
        label: 'shrink-0 whitespace-nowrap'
    },
    variants: {
        color: {
            primary: {
                border: 'border-primary-200 dark:border-primary-800',
                label: 'text-primary',
                icon: 'text-primary'
            },
            secondary: {
                border: 'border-secondary-200 dark:border-secondary-800',
                label: 'text-secondary',
                icon: 'text-secondary'
            },
            success: {
                border: 'border-success-200 dark:border-success-800',
                label: 'text-success',
                icon: 'text-success'
            },
            warning: {
                border: 'border-warning-200 dark:border-warning-800',
                label: 'text-warning',
                icon: 'text-warning'
            },
            error: {
                border: 'border-error-200 dark:border-error-800',
                label: 'text-error',
                icon: 'text-error'
            },
            info: {
                border: 'border-info-200 dark:border-info-800',
                label: 'text-info',
                icon: 'text-info'
            },
            neutral: {
                border: 'border-neutral-200 dark:border-neutral-800',
                label: 'text-neutral',
                icon: 'text-neutral'
            }
        },
        size: {
            xs: {
                border: 'border-[0.5px]',
                label: 'text-xs',
                icon: 'size-3'
            },
            sm: {
                border: 'border',
                label: 'text-xs',
                icon: 'size-3.5'
            },
            md: {
                border: 'border-[1.5px]',
                label: 'text-sm',
                icon: 'size-4'
            },
            lg: {
                border: 'border-2',
                label: 'text-sm',
                icon: 'size-5'
            },
            xl: {
                border: 'border-[3px]',
                label: 'text-base',
                icon: 'size-6'
            }
        },
        type: {
            solid: { border: 'border-solid' },
            dashed: { border: 'border-dashed' },
            dotted: { border: 'border-dotted' }
        },
        orientation: {
            horizontal: {
                root: 'flex-row w-full',
                border: 'border-t-0 border-b w-full',
                container: 'mx-3'
            },
            vertical: {
                root: 'flex-col h-full',
                border: 'border-l-0 border-r h-full',
                container: 'my-3'
            }
        }
    },
    defaultVariants: {
        color: 'neutral',
        size: 'xs',
        type: 'solid',
        orientation: 'horizontal'
    }
})
