import { tv } from 'tailwind-variants'

export const progressVariants = tv({
    slots: {
        root: 'gap-2',
        base: 'relative overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800',
        indicator: 'rounded-full size-full transition-transform duration-200 ease-out',
        status: 'text-end transition-[width] duration-200',
        steps: 'flex justify-between'
    },
    variants: {
        animation: {
            carousel: '',
            'carousel-inverse': '',
            swing: '',
            elastic: ''
        },
        color: {
            primary: {
                indicator: 'bg-primary-500'
            },
            secondary: {
                indicator: 'bg-secondary-500'
            },
            success: {
                indicator: 'bg-success-500'
            },
            warning: {
                indicator: 'bg-warning-500'
            },
            error: {
                indicator: 'bg-error-500'
            },
            info: {
                indicator: 'bg-info-500'
            },
            neutral: {
                indicator: 'bg-neutral-900 dark:bg-white'
            }
        },
        size: {
            '2xs': {
                status: 'text-xs',
                steps: 'text-xs'
            },
            xs: {
                status: 'text-xs',
                steps: 'text-xs'
            },
            sm: {
                status: 'text-sm',
                steps: 'text-sm'
            },
            md: {
                status: 'text-sm',
                steps: 'text-sm'
            },
            lg: {
                status: 'text-sm',
                steps: 'text-sm'
            },
            xl: {
                status: 'text-base',
                steps: 'text-base'
            },
            '2xl': {
                status: 'text-base',
                steps: 'text-base'
            }
        },
        step: {
            active: {
                steps: 'text-neutral-900 dark:text-white'
            },
            first: '',
            other: {
                steps: 'text-neutral-400 dark:text-neutral-500'
            },
            last: ''
        },
        orientation: {
            horizontal: {
                root: 'flex flex-col',
                base: 'w-full'
            },
            vertical: {
                root: 'flex flex-row-reverse',
                base: 'h-full'
            }
        },
        inverted: {
            true: {
                root: 'flex-col-reverse',
                status: 'text-start'
            }
        }
    },
    compoundVariants: [
        // Horizontal size variants
        { orientation: 'horizontal', size: '2xs', class: { base: 'h-px' } },
        { orientation: 'horizontal', size: 'xs', class: { base: 'h-0.5' } },
        { orientation: 'horizontal', size: 'sm', class: { base: 'h-1' } },
        { orientation: 'horizontal', size: 'md', class: { base: 'h-2' } },
        { orientation: 'horizontal', size: 'lg', class: { base: 'h-3' } },
        { orientation: 'horizontal', size: 'xl', class: { base: 'h-4' } },
        { orientation: 'horizontal', size: '2xl', class: { base: 'h-5' } },
        // Vertical size variants
        { orientation: 'vertical', size: '2xs', class: { base: 'w-px' } },
        { orientation: 'vertical', size: 'xs', class: { base: 'w-0.5' } },
        { orientation: 'vertical', size: 'sm', class: { base: 'w-1' } },
        { orientation: 'vertical', size: 'md', class: { base: 'w-2' } },
        { orientation: 'vertical', size: 'lg', class: { base: 'w-3' } },
        { orientation: 'vertical', size: 'xl', class: { base: 'w-4' } },
        { orientation: 'vertical', size: '2xl', class: { base: 'w-5' } },
        // Horizontal animation variants (indeterminate state)
        {
            orientation: 'horizontal',
            animation: 'carousel',
            class: {
                indicator:
                    'data-[state=indeterminate]:animate-[carousel_2s_ease-in-out_infinite] data-[state=indeterminate]:-translate-x-full'
            }
        },
        {
            orientation: 'horizontal',
            animation: 'carousel-inverse',
            class: {
                indicator:
                    'data-[state=indeterminate]:animate-[carousel-inverse_2s_ease-in-out_infinite] data-[state=indeterminate]:translate-x-full'
            }
        },
        {
            orientation: 'horizontal',
            animation: 'swing',
            class: {
                indicator:
                    'data-[state=indeterminate]:animate-[swing_2s_ease-in-out_infinite] data-[state=indeterminate]:-translate-x-full'
            }
        },
        {
            orientation: 'horizontal',
            animation: 'elastic',
            class: {
                indicator:
                    'data-[state=indeterminate]:animate-[elastic_2s_ease-in-out_infinite] data-[state=indeterminate]:-translate-x-full'
            }
        },
        // Vertical animation variants (indeterminate state)
        {
            orientation: 'vertical',
            animation: 'carousel',
            class: {
                indicator:
                    'data-[state=indeterminate]:animate-[carousel-vertical_2s_ease-in-out_infinite] data-[state=indeterminate]:-translate-y-full'
            }
        },
        {
            orientation: 'vertical',
            animation: 'carousel-inverse',
            class: {
                indicator:
                    'data-[state=indeterminate]:animate-[carousel-inverse-vertical_2s_ease-in-out_infinite] data-[state=indeterminate]:translate-y-full'
            }
        },
        {
            orientation: 'vertical',
            animation: 'swing',
            class: {
                indicator:
                    'data-[state=indeterminate]:animate-[swing-vertical_2s_ease-in-out_infinite] data-[state=indeterminate]:-translate-y-full'
            }
        },
        {
            orientation: 'vertical',
            animation: 'elastic',
            class: {
                indicator:
                    'data-[state=indeterminate]:animate-[elastic-vertical_2s_ease-in-out_infinite] data-[state=indeterminate]:-translate-y-full'
            }
        },
        // Vertical inverted
        {
            orientation: 'vertical',
            inverted: true,
            class: {
                root: 'flex-row'
            }
        }
    ],
    defaultVariants: {
        animation: 'carousel',
        color: 'primary',
        size: 'md',
        orientation: 'horizontal'
    }
})
