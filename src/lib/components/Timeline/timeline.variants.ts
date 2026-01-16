import { tv } from 'tailwind-variants'

export const timelineVariants = tv({
    slots: {
        root: 'flex gap-1.5',
        item: 'group relative flex flex-1 gap-3',
        container: 'relative flex items-center gap-1.5',
        indicator: [
            'inline-flex items-center justify-center shrink-0 rounded-full',
            'bg-neutral-200 dark:bg-neutral-700',
            'group-data-[state=completed]:text-white group-data-[state=active]:text-white',
            'text-neutral-500 dark:text-neutral-400'
        ],
        separator: 'flex-1 rounded-full bg-neutral-200 dark:bg-neutral-700',
        wrapper: 'w-full',
        date: 'text-neutral-500 dark:text-neutral-400 text-xs',
        title: 'font-medium text-neutral-900 dark:text-white text-sm',
        description: 'text-neutral-500 dark:text-neutral-400 text-wrap text-sm'
    },
    variants: {
        orientation: {
            horizontal: {
                root: 'flex-row w-full',
                item: 'flex-col',
                separator: 'h-0.5'
            },
            vertical: {
                root: 'flex-col',
                container: 'flex-col',
                separator: 'w-0.5'
            }
        },
        color: {
            primary: {
                indicator:
                    'group-data-[state=completed]:bg-primary-500 group-data-[state=active]:bg-primary-500'
            },
            secondary: {
                indicator:
                    'group-data-[state=completed]:bg-secondary-500 group-data-[state=active]:bg-secondary-500'
            },
            success: {
                indicator:
                    'group-data-[state=completed]:bg-success-500 group-data-[state=active]:bg-success-500'
            },
            warning: {
                indicator:
                    'group-data-[state=completed]:bg-warning-500 group-data-[state=active]:bg-warning-500'
            },
            error: {
                indicator:
                    'group-data-[state=completed]:bg-error-500 group-data-[state=active]:bg-error-500'
            },
            info: {
                indicator:
                    'group-data-[state=completed]:bg-info-500 group-data-[state=active]:bg-info-500'
            },
            neutral: {
                indicator:
                    'group-data-[state=completed]:bg-neutral-900 group-data-[state=active]:bg-neutral-900 dark:group-data-[state=completed]:bg-white dark:group-data-[state=active]:bg-white'
            }
        },
        size: {
            '3xs': {
                indicator: 'size-4',
                icon: 'size-2'
            },
            '2xs': {
                indicator: 'size-5',
                icon: 'size-2.5'
            },
            xs: {
                indicator: 'size-6',
                icon: 'size-3'
            },
            sm: {
                indicator: 'size-7',
                icon: 'size-3.5'
            },
            md: {
                indicator: 'size-8',
                icon: 'size-4'
            },
            lg: {
                indicator: 'size-9',
                icon: 'size-4.5'
            },
            xl: {
                indicator: 'size-10',
                icon: 'size-5'
            },
            '2xl': {
                indicator: 'size-11',
                icon: 'size-5.5'
            },
            '3xl': {
                indicator: 'size-12',
                icon: 'size-6'
            }
        },
        reverse: {
            true: '',
            false: ''
        }
    },
    compoundVariants: [
        // ========== COLOR + REVERSE (false) - separator colored on completed ==========
        {
            color: 'primary',
            reverse: false,
            class: { separator: 'group-data-[state=completed]:bg-primary-500' }
        },
        {
            color: 'secondary',
            reverse: false,
            class: { separator: 'group-data-[state=completed]:bg-secondary-500' }
        },
        {
            color: 'success',
            reverse: false,
            class: { separator: 'group-data-[state=completed]:bg-success-500' }
        },
        {
            color: 'warning',
            reverse: false,
            class: { separator: 'group-data-[state=completed]:bg-warning-500' }
        },
        {
            color: 'error',
            reverse: false,
            class: { separator: 'group-data-[state=completed]:bg-error-500' }
        },
        {
            color: 'info',
            reverse: false,
            class: { separator: 'group-data-[state=completed]:bg-info-500' }
        },
        {
            color: 'neutral',
            reverse: false,
            class: {
                separator:
                    'group-data-[state=completed]:bg-neutral-900 dark:group-data-[state=completed]:bg-white'
            }
        },

        // ========== COLOR + REVERSE (true) - separator colored on active & completed ==========
        {
            color: 'primary',
            reverse: true,
            class: {
                separator:
                    'group-data-[state=active]:bg-primary-500 group-data-[state=completed]:bg-primary-500'
            }
        },
        {
            color: 'secondary',
            reverse: true,
            class: {
                separator:
                    'group-data-[state=active]:bg-secondary-500 group-data-[state=completed]:bg-secondary-500'
            }
        },
        {
            color: 'success',
            reverse: true,
            class: {
                separator:
                    'group-data-[state=active]:bg-success-500 group-data-[state=completed]:bg-success-500'
            }
        },
        {
            color: 'warning',
            reverse: true,
            class: {
                separator:
                    'group-data-[state=active]:bg-warning-500 group-data-[state=completed]:bg-warning-500'
            }
        },
        {
            color: 'error',
            reverse: true,
            class: {
                separator:
                    'group-data-[state=active]:bg-error-500 group-data-[state=completed]:bg-error-500'
            }
        },
        {
            color: 'info',
            reverse: true,
            class: {
                separator:
                    'group-data-[state=active]:bg-info-500 group-data-[state=completed]:bg-info-500'
            }
        },
        {
            color: 'neutral',
            reverse: true,
            class: {
                separator:
                    'group-data-[state=active]:bg-neutral-900 group-data-[state=completed]:bg-neutral-900 dark:group-data-[state=active]:bg-white dark:group-data-[state=completed]:bg-white'
            }
        },

        // ========== HORIZONTAL + SIZE - wrapper padding ==========
        { orientation: 'horizontal', size: '3xs', class: { wrapper: 'pe-4.5' } },
        { orientation: 'horizontal', size: '2xs', class: { wrapper: 'pe-5' } },
        { orientation: 'horizontal', size: 'xs', class: { wrapper: 'pe-5.5' } },
        { orientation: 'horizontal', size: 'sm', class: { wrapper: 'pe-6' } },
        { orientation: 'horizontal', size: 'md', class: { wrapper: 'pe-6.5' } },
        { orientation: 'horizontal', size: 'lg', class: { wrapper: 'pe-7' } },
        { orientation: 'horizontal', size: 'xl', class: { wrapper: 'pe-7.5' } },
        { orientation: 'horizontal', size: '2xl', class: { wrapper: 'pe-8' } },
        { orientation: 'horizontal', size: '3xl', class: { wrapper: 'pe-8.5' } },

        // ========== VERTICAL + SIZE - wrapper margin/padding ==========
        { orientation: 'vertical', size: '3xs', class: { wrapper: '-mt-0.5 pb-4.5' } },
        { orientation: 'vertical', size: '2xs', class: { wrapper: 'pb-5' } },
        { orientation: 'vertical', size: 'xs', class: { wrapper: 'mt-0.5 pb-5.5' } },
        { orientation: 'vertical', size: 'sm', class: { wrapper: 'mt-1 pb-6' } },
        { orientation: 'vertical', size: 'md', class: { wrapper: 'mt-1.5 pb-6.5' } },
        { orientation: 'vertical', size: 'lg', class: { wrapper: 'mt-2 pb-7' } },
        { orientation: 'vertical', size: 'xl', class: { wrapper: 'mt-2.5 pb-7.5' } },
        { orientation: 'vertical', size: '2xl', class: { wrapper: 'mt-3 pb-8' } },
        { orientation: 'vertical', size: '3xl', class: { wrapper: 'mt-3.5 pb-8.5' } }
    ],
    defaultVariants: {
        orientation: 'vertical',
        color: 'primary',
        size: 'md',
        reverse: false
    }
})

/** Avatar size mapping based on Timeline size */
export const avatarSizeMap = {
    '3xs': '3xs',
    '2xs': '2xs',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
    '3xl': '3xl'
} as const

/** Icon size mapping based on Timeline size */
export const iconSizeMap = {
    '3xs': 8,
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 22,
    '3xl': 24
} as const
