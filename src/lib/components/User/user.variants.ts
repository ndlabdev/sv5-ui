import { tv } from 'tailwind-variants'

export const userVariants = tv({
    slots: {
        root: 'inline-flex items-center gap-2',
        wrapper: 'min-w-0',
        name: 'font-medium text-neutral-900 dark:text-white truncate',
        description: 'text-neutral-500 dark:text-neutral-400 truncate',
        avatar: 'shrink-0'
    },
    variants: {
        size: {
            '3xs': {
                name: 'text-[10px]',
                description: 'text-[10px]'
            },
            '2xs': {
                name: 'text-[10px]',
                description: 'text-[10px]'
            },
            xs: {
                name: 'text-xs',
                description: 'text-[10px]'
            },
            sm: {
                name: 'text-xs',
                description: 'text-xs'
            },
            md: {
                name: 'text-sm',
                description: 'text-xs'
            },
            lg: {
                name: 'text-sm',
                description: 'text-sm'
            },
            xl: {
                name: 'text-base',
                description: 'text-sm'
            },
            '2xl': {
                name: 'text-base',
                description: 'text-base'
            },
            '3xl': {
                name: 'text-lg',
                description: 'text-base'
            }
        },
        orientation: {
            horizontal: {
                root: 'flex-row',
                wrapper: 'text-left'
            },
            vertical: {
                root: 'flex-col text-center',
                wrapper: 'text-center'
            }
        },
        clickable: {
            true: {
                root: 'cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors -m-2 p-2'
            }
        }
    },
    defaultVariants: {
        size: 'md',
        orientation: 'horizontal'
    }
})

// Avatar size mapping based on User size
export const avatarSizeMap: Record<string, string> = {
    '3xs': '3xs',
    '2xs': '2xs',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    '2xl': '2xl',
    '3xl': '3xl'
}
