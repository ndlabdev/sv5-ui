import { tv } from 'tailwind-variants'

export const chipVariants = tv({
    slots: {
        root: 'relative inline-flex shrink-0',
        base: 'absolute rounded-full ring-white dark:ring-neutral-900 flex items-center justify-center whitespace-nowrap font-medium'
    },
    variants: {
        color: {
            primary: { base: 'bg-primary-500 text-white' },
            secondary: { base: 'bg-secondary-500 text-white' },
            success: { base: 'bg-success-500 text-white' },
            warning: { base: 'bg-warning-500 text-white' },
            error: { base: 'bg-error-500 text-white' },
            info: { base: 'bg-info-500 text-white' },
            neutral: { base: 'bg-neutral-500 text-white' }
        },
        size: {
            '3xs': { base: 'size-[4px] text-[4px] ring-[0.5px]' },
            '2xs': { base: 'size-[5px] text-[5px] ring-[0.5px]' },
            xs: { base: 'size-[6px] text-[6px] ring-[1px]' },
            sm: { base: 'size-[7px] text-[7px] ring-[1px]' },
            md: { base: 'size-2 text-[8px] ring-[1.5px]' },
            lg: { base: 'size-[9px] text-[9px] ring-[1.5px]' },
            xl: { base: 'size-[10px] text-[10px] ring-[2px]' },
            '2xl': { base: 'size-[11px] text-[11px] ring-[2px]' },
            '3xl': { base: 'size-3 text-xs ring-[2px]' }
        },
        position: {
            'top-right': { base: 'top-0 right-0' },
            'bottom-right': { base: 'bottom-0 right-0' },
            'top-left': { base: 'top-0 left-0' },
            'bottom-left': { base: 'bottom-0 left-0' }
        },
        inset: {
            false: {}
        },
        standalone: {
            true: { base: 'relative' },
            false: {}
        }
    },
    compoundVariants: [
        // Not inset - position chip outside bounds
        { position: 'top-right', inset: false, class: { base: '-translate-y-1/2 translate-x-1/2' } },
        { position: 'bottom-right', inset: false, class: { base: 'translate-y-1/2 translate-x-1/2' } },
        { position: 'top-left', inset: false, class: { base: '-translate-y-1/2 -translate-x-1/2' } },
        { position: 'bottom-left', inset: false, class: { base: 'translate-y-1/2 -translate-x-1/2' } }
    ],
    defaultVariants: {
        color: 'primary',
        size: 'md',
        position: 'top-right',
        inset: false,
        standalone: false
    }
})
