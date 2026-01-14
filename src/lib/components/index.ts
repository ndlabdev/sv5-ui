export { default as UIProvider } from './UIProvider.svelte'

// Button
export { Button, buttonVariants, type ButtonVariants, type ButtonProps } from './Button/index.js'

// Icon
export { Icon, type IconProps } from './Icon/index.js'

// ThemeToggle
export { ThemeToggle, type ThemeToggleProps } from './ThemeToggle/index.js'

// Avatar
export { Avatar, avatarVariants, type AvatarProps, type AvatarVariants, type AvatarSize } from './Avatar/index.js'

// AvatarGroup
export {
    AvatarGroup,
    avatarGroupVariants,
    type AvatarGroupProps,
    type AvatarGroupVariants,
    type AvatarGroupSlots,
    type AvatarGroupUI
} from './AvatarGroup/index.js'

// Chip
export {
    Chip,
    chipVariants,
    type ChipProps,
    type ChipVariants,
    type ChipSlots,
    type ChipSize,
    type ChipPosition,
    type ChipUI
} from './Chip/index.js'

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
