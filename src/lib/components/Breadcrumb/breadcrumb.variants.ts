import { tv } from 'tailwind-variants'

export const breadcrumbVariants = tv({
    slots: {
        root: 'relative min-w-0',
        list: 'flex items-center gap-1.5',
        item: 'flex min-w-0',
        link: 'group relative flex items-center gap-1.5 text-sm min-w-0 focus-visible:outline-primary',
        linkLeadingIcon: 'shrink-0 size-5',
        linkLeadingAvatar: 'shrink-0',
        linkLeadingAvatarSize: '2xs',
        linkLabel: 'truncate',
        separator: 'flex',
        separatorIcon: 'shrink-0 size-5 text-neutral-400 dark:text-neutral-500'
    },
    variants: {
        active: {
            true: {
                link: 'text-primary-500 font-semibold'
            },
            false: {
                link: 'text-neutral-500 dark:text-neutral-400 font-medium'
            }
        },
        disabled: {
            true: {
                link: 'cursor-not-allowed opacity-75'
            }
        },
        to: {
            true: ''
        }
    },
    compoundVariants: [
        {
            disabled: false,
            active: false,
            to: true,
            class: {
                link: 'hover:text-neutral-900 dark:hover:text-white transition-colors'
            }
        }
    ],
    defaultVariants: {
        active: false,
        disabled: false,
        to: false
    }
})
