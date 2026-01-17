import { tv } from 'tailwind-variants'

export const marqueeVariants = tv({
    slots: {
        root: 'group relative flex gap-4 overflow-hidden [--duration:20s]',
        content: 'flex shrink-0 items-center justify-around gap-4 [--gap:1rem]'
    },
    variants: {
        orientation: {
            horizontal: {
                root: 'flex-row',
                content: 'flex-row animate-marquee-horizontal'
            },
            vertical: {
                root: 'flex-col',
                content: 'flex-col animate-marquee-vertical'
            }
        },
        reverse: {
            true: '',
            false: ''
        },
        pauseOnHover: {
            true: {
                content: 'group-hover:[animation-play-state:paused]'
            }
        },
        overlay: {
            true: ''
        }
    },
    compoundVariants: [
        {
            orientation: 'horizontal',
            reverse: true,
            class: {
                content: 'direction-reverse'
            }
        },
        {
            orientation: 'vertical',
            reverse: true,
            class: {
                content: 'direction-reverse'
            }
        },
        {
            orientation: 'horizontal',
            overlay: true,
            class: {
                root: [
                    'before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-1/6 before:bg-gradient-to-r before:from-white before:dark:from-neutral-900',
                    'after:pointer-events-none after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-1/6 after:bg-gradient-to-l after:from-white after:dark:from-neutral-900'
                ]
            }
        },
        {
            orientation: 'vertical',
            overlay: true,
            class: {
                root: [
                    'before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-1/6 before:w-full before:bg-gradient-to-b before:from-white before:dark:from-neutral-900',
                    'after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:z-10 after:h-1/6 after:w-full after:bg-gradient-to-t after:from-white after:dark:from-neutral-900'
                ]
            }
        }
    ],
    defaultVariants: {
        orientation: 'horizontal',
        reverse: false,
        pauseOnHover: false,
        overlay: true
    }
})
