import { tv } from 'tailwind-variants'

export const kbdVariants = tv({
    base: 'inline-flex items-center justify-center px-1 rounded-sm font-medium font-sans uppercase',
    variants: {
        color: {
            primary: '',
            secondary: '',
            success: '',
            warning: '',
            error: '',
            info: '',
            neutral: ''
        },
        size: {
            sm: 'h-4 min-w-4 text-[10px]',
            md: 'h-5 min-w-5 text-[11px]',
            lg: 'h-6 min-w-6 text-[12px]'
        },
        variant: {
            solid: '',
            outline: 'ring ring-inset',
            soft: '',
            subtle: 'ring ring-inset'
        }
    },
    compoundVariants: [
        // Solid variants
        { color: 'primary', variant: 'solid', class: 'bg-primary-500 text-white' },
        { color: 'secondary', variant: 'solid', class: 'bg-secondary-500 text-white' },
        { color: 'success', variant: 'solid', class: 'bg-success-500 text-white' },
        { color: 'warning', variant: 'solid', class: 'bg-warning-500 text-white' },
        { color: 'error', variant: 'solid', class: 'bg-error-500 text-white' },
        { color: 'info', variant: 'solid', class: 'bg-info-500 text-white' },
        { color: 'neutral', variant: 'solid', class: 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900' },

        // Outline variants
        { color: 'primary', variant: 'outline', class: 'ring-primary-500/50 text-primary-500' },
        { color: 'secondary', variant: 'outline', class: 'ring-secondary-500/50 text-secondary-500' },
        { color: 'success', variant: 'outline', class: 'ring-success-500/50 text-success-500' },
        { color: 'warning', variant: 'outline', class: 'ring-warning-500/50 text-warning-500' },
        { color: 'error', variant: 'outline', class: 'ring-error-500/50 text-error-500' },
        { color: 'info', variant: 'outline', class: 'ring-info-500/50 text-info-500' },
        { color: 'neutral', variant: 'outline', class: 'ring-neutral-300 text-neutral-500 dark:ring-neutral-700 dark:text-neutral-400' },

        // Soft variants
        { color: 'primary', variant: 'soft', class: 'bg-primary-500/10 text-primary-500' },
        { color: 'secondary', variant: 'soft', class: 'bg-secondary-500/10 text-secondary-500' },
        { color: 'success', variant: 'soft', class: 'bg-success-500/10 text-success-500' },
        { color: 'warning', variant: 'soft', class: 'bg-warning-500/10 text-warning-500' },
        { color: 'error', variant: 'soft', class: 'bg-error-500/10 text-error-500' },
        { color: 'info', variant: 'soft', class: 'bg-info-500/10 text-info-500' },
        { color: 'neutral', variant: 'soft', class: 'bg-neutral-500/10 text-neutral-500 dark:text-neutral-400' },

        // Subtle variants
        { color: 'primary', variant: 'subtle', class: 'ring-primary-500/25 bg-primary-500/10 text-primary-500' },
        { color: 'secondary', variant: 'subtle', class: 'ring-secondary-500/25 bg-secondary-500/10 text-secondary-500' },
        { color: 'success', variant: 'subtle', class: 'ring-success-500/25 bg-success-500/10 text-success-500' },
        { color: 'warning', variant: 'subtle', class: 'ring-warning-500/25 bg-warning-500/10 text-warning-500' },
        { color: 'error', variant: 'subtle', class: 'ring-error-500/25 bg-error-500/10 text-error-500' },
        { color: 'info', variant: 'subtle', class: 'ring-info-500/25 bg-info-500/10 text-info-500' },
        { color: 'neutral', variant: 'subtle', class: 'ring-neutral-300 bg-neutral-500/10 text-neutral-500 dark:ring-neutral-700 dark:text-neutral-400' }
    ],
    defaultVariants: {
        color: 'neutral',
        size: 'md',
        variant: 'outline'
    }
})

/** Static key symbols (same across all platforms) */
export const kbdKeysMap: Record<string, string> = {
    command: '⌘',
    shift: '⇧',
    control: '⌃',
    option: '⌥',
    enter: '↵',
    delete: '⌦',
    backspace: '⌫',
    escape: 'Esc',
    tab: '⇥',
    capslock: '⇪',
    arrowup: '↑',
    arrowright: '→',
    arrowdown: '↓',
    arrowleft: '←',
    pageup: '⇞',
    pagedown: '⇟',
    home: '↖',
    end: '↘',
    space: '␣'
}

/** Platform-specific key mappings */
export const kbdKeysPlatformMap: Record<string, { mac: string; other: string }> = {
    meta: { mac: '⌘', other: 'Ctrl' },
    ctrl: { mac: '⌃', other: 'Ctrl' },
    alt: { mac: '⌥', other: 'Alt' }
}
