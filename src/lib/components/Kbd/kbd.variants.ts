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
        { color: 'primary', variant: 'solid', class: 'bg-primary text-white' },
        { color: 'secondary', variant: 'solid', class: 'bg-secondary text-white' },
        { color: 'success', variant: 'solid', class: 'bg-success text-white' },
        { color: 'warning', variant: 'solid', class: 'bg-warning text-white' },
        { color: 'error', variant: 'solid', class: 'bg-error text-white' },
        { color: 'info', variant: 'solid', class: 'bg-info text-white' },
        { color: 'neutral', variant: 'solid', class: 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900' },

        // Outline variants
        { color: 'primary', variant: 'outline', class: 'ring-primary/50 text-primary' },
        { color: 'secondary', variant: 'outline', class: 'ring-secondary/50 text-secondary' },
        { color: 'success', variant: 'outline', class: 'ring-success/50 text-success' },
        { color: 'warning', variant: 'outline', class: 'ring-warning/50 text-warning' },
        { color: 'error', variant: 'outline', class: 'ring-error/50 text-error' },
        { color: 'info', variant: 'outline', class: 'ring-info/50 text-info' },
        { color: 'neutral', variant: 'outline', class: 'ring-neutral-300 text-neutral dark:ring-neutral-700 dark:text-neutral-400' },

        // Soft variants
        { color: 'primary', variant: 'soft', class: 'bg-primary/10 text-primary' },
        { color: 'secondary', variant: 'soft', class: 'bg-secondary/10 text-secondary' },
        { color: 'success', variant: 'soft', class: 'bg-success/10 text-success' },
        { color: 'warning', variant: 'soft', class: 'bg-warning/10 text-warning' },
        { color: 'error', variant: 'soft', class: 'bg-error/10 text-error' },
        { color: 'info', variant: 'soft', class: 'bg-info/10 text-info' },
        { color: 'neutral', variant: 'soft', class: 'bg-neutral/10 text-neutral dark:text-neutral-400' },

        // Subtle variants
        { color: 'primary', variant: 'subtle', class: 'ring-primary/25 bg-primary/10 text-primary' },
        { color: 'secondary', variant: 'subtle', class: 'ring-secondary/25 bg-secondary/10 text-secondary' },
        { color: 'success', variant: 'subtle', class: 'ring-success/25 bg-success/10 text-success' },
        { color: 'warning', variant: 'subtle', class: 'ring-warning/25 bg-warning/10 text-warning' },
        { color: 'error', variant: 'subtle', class: 'ring-error/25 bg-error/10 text-error' },
        { color: 'info', variant: 'subtle', class: 'ring-info/25 bg-info/10 text-info' },
        { color: 'neutral', variant: 'subtle', class: 'ring-neutral-300 bg-neutral/10 text-neutral dark:ring-neutral-700 dark:text-neutral-400' }
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
