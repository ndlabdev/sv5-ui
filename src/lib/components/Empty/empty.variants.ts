import { tv } from 'tailwind-variants'

export const emptyVariants = tv({
    slots: {
        root: 'flex flex-col items-center justify-center rounded-lg p-6 text-center',
        icon: 'shrink-0 text-neutral-400 dark:text-neutral-500',
        avatar: 'shrink-0',
        title: 'font-medium text-neutral-900 dark:text-neutral-100',
        description: 'text-neutral-500 dark:text-neutral-400',
        actions: 'flex flex-wrap items-center justify-center gap-2'
    },
    variants: {
        variant: {
            solid: {
                root: 'bg-neutral-900 dark:bg-white',
                icon: 'text-neutral-400 dark:text-neutral-500',
                title: 'text-white dark:text-neutral-900',
                description: 'text-neutral-300 dark:text-neutral-600'
            },
            outline: {
                root: 'ring-1 ring-inset ring-neutral-200 bg-white dark:ring-neutral-800 dark:bg-neutral-900'
            },
            soft: {
                root: 'bg-neutral-100/50 dark:bg-neutral-800/50'
            },
            subtle: {
                root: 'ring-1 ring-inset ring-neutral-200 bg-neutral-50 dark:ring-neutral-800 dark:bg-neutral-900/50'
            },
            naked: {
                root: 'bg-transparent',
                description: 'text-neutral-400 dark:text-neutral-500'
            }
        },
        size: {
            xs: {
                root: 'gap-2 p-4',
                icon: 'size-8',
                title: 'text-sm',
                description: 'text-xs'
            },
            sm: {
                root: 'gap-2.5 p-5',
                icon: 'size-10',
                title: 'text-sm',
                description: 'text-xs'
            },
            md: {
                root: 'gap-3 p-6',
                icon: 'size-12',
                title: 'text-base',
                description: 'text-sm'
            },
            lg: {
                root: 'gap-4 p-8',
                icon: 'size-14',
                title: 'text-lg',
                description: 'text-sm'
            },
            xl: {
                root: 'gap-5 p-10',
                icon: 'size-16',
                title: 'text-xl',
                description: 'text-base'
            }
        }
    },
    defaultVariants: {
        variant: 'outline',
        size: 'md'
    }
})

/** Avatar size mapping based on empty size */
export const avatarSizeMap = {
    xs: 'md',
    sm: 'lg',
    md: 'xl',
    lg: '2xl',
    xl: '3xl'
} as const
