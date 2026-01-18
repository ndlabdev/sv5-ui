import { tv } from 'tailwind-variants'

export const avatarVariants = tv({
    slots: {
        root: [
            'inline-flex items-center justify-center',
            'shrink-0 select-none',
            'rounded-full align-middle',
            'bg-neutral-100 dark:bg-neutral-800',
            'overflow-hidden'
        ],
        image: 'h-full w-full rounded-[inherit] object-cover',
        fallback: 'font-medium leading-none text-neutral-600 dark:text-neutral-400 truncate',
        icon: 'text-neutral dark:text-neutral-400 shrink-0'
    },
    variants: {
        size: {
            '3xs': {
                root: 'size-4',
                fallback: 'text-[8px]',
                icon: 'size-2'
            },
            '2xs': {
                root: 'size-5',
                fallback: 'text-[10px]',
                icon: 'size-2.5'
            },
            xs: {
                root: 'size-6',
                fallback: 'text-xs',
                icon: 'size-3'
            },
            sm: {
                root: 'size-7',
                fallback: 'text-sm',
                icon: 'size-3.5'
            },
            md: {
                root: 'size-8',
                fallback: 'text-base',
                icon: 'size-4'
            },
            lg: {
                root: 'size-9',
                fallback: 'text-lg',
                icon: 'size-4.5'
            },
            xl: {
                root: 'size-10',
                fallback: 'text-xl',
                icon: 'size-5'
            },
            '2xl': {
                root: 'size-11',
                fallback: 'text-[22px]',
                icon: 'size-5.5'
            },
            '3xl': {
                root: 'size-12',
                fallback: 'text-2xl',
                icon: 'size-6'
            }
        }
    },
    defaultVariants: {
        size: 'md'
    }
})
