export { default as UIProvider } from './UIProvider.svelte'

// Button
export { Button, buttonVariants, type ButtonVariants, type ButtonProps } from './Button/index.js'

// Icon
export { Icon, type IconProps } from './Icon/index.js'

// ThemeToggle
export { ThemeToggle, type ThemeToggleProps } from './ThemeToggle/index.js'

// Re-export mode-watcher utilities for convenience
export {
    mode,
    toggleMode,
    setMode,
    resetMode,
    userPrefersMode,
    systemPrefersMode,
    ModeWatcher
} from 'mode-watcher'
