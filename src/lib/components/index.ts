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

// Card
export {
    Card,
    cardVariants,
    type CardProps,
    type CardVariants,
    type CardSlots,
    type CardVariant,
    type CardUI
} from './Card/index.js'

// Badge
export {
    Badge,
    badgeVariants,
    type BadgeProps,
    type BadgeVariants,
    type BadgeSlots,
    type BadgeSize,
    type BadgeVariant,
    type BadgeUI
} from './Badge/index.js'

// User
export {
    User,
    userVariants,
    avatarSizeMap,
    type UserProps,
    type UserVariants,
    type UserSlots,
    type UserSize,
    type UserOrientation,
    type UserUI
} from './User/index.js'

// Separator
export {
    Separator,
    separatorVariants,
    type SeparatorProps,
    type SeparatorVariants,
    type SeparatorSlots,
    type SeparatorSize,
    type SeparatorType,
    type SeparatorOrientation,
    type SeparatorUI
} from './Separator/index.js'

// Kbd
export {
    Kbd,
    kbdVariants,
    kbdKeysMap,
    kbdKeysPlatformMap,
    type KbdProps,
    type KbdVariants,
    type KbdSize,
    type KbdVariant
} from './Kbd/index.js'

// Timeline
export {
    Timeline,
    timelineVariants,
    avatarSizeMap as timelineAvatarSizeMap,
    iconSizeMap as timelineIconSizeMap,
    type TimelineProps,
    type TimelineItem,
    type TimelineItemState,
    type TimelineVariants,
    type TimelineSlots,
    type TimelineSize,
    type TimelineOrientation,
    type TimelineUI
} from './Timeline/index.js'

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
