import { tv } from 'tailwind-variants'

export const cardVariants = tv({
    slots: {
        root: 'rounded-lg overflow-hidden',
        header: 'px-4 py-4 sm:px-6',
        body: 'px-4 py-4 sm:px-6',
        footer: 'px-4 py-4 sm:px-6'
    },
    variants: {
        variant: {
            solid: {
                root: 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900',
                header: 'border-b border-neutral-800 dark:border-neutral-200',
                footer: 'border-t border-neutral-800 dark:border-neutral-200'
            },
            outline: {
                root: 'bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800',
                header: 'border-b border-neutral-200 dark:border-neutral-800',
                footer: 'border-t border-neutral-200 dark:border-neutral-800'
            },
            soft: {
                root: 'bg-neutral-50 dark:bg-neutral-800/50',
                header: 'border-b border-neutral-200 dark:border-neutral-700',
                footer: 'border-t border-neutral-200 dark:border-neutral-700'
            },
            subtle: {
                root: 'bg-neutral-50 dark:bg-neutral-800/50 ring-1 ring-neutral-200 dark:ring-neutral-800',
                header: 'border-b border-neutral-200 dark:border-neutral-800',
                footer: 'border-t border-neutral-200 dark:border-neutral-800'
            }
        }
    },
    defaultVariants: {
        variant: 'outline'
    }
})
