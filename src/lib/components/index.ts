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

// Alert
export {
    Alert,
    alertVariants,
    avatarSizeMap as alertAvatarSizeMap,
    type AlertProps,
    type AlertVariants,
    type AlertSlots,
    type AlertVariant,
    type AlertOrientation,
    type AlertUI
} from './Alert/index.js'

// Skeleton
export {
    Skeleton,
    skeletonVariants,
    type SkeletonProps,
    type SkeletonVariants,
    type SkeletonSlots,
    type SkeletonUI
} from './Skeleton/index.js'

// Empty
export {
    Empty,
    emptyVariants,
    avatarSizeMap as emptyAvatarSizeMap,
    type EmptyProps,
    type EmptyVariants,
    type EmptySlots,
    type EmptyVariant,
    type EmptySize,
    type EmptyUI
} from './Empty/index.js'

// Container
export {
    Container,
    containerVariants,
    type ContainerProps,
    type ContainerVariants,
    type ContainerSlots,
    type ContainerUI
} from './Container/index.js'

// Progress
export {
    Progress,
    progressVariants,
    type ProgressProps,
    type ProgressVariants,
    type ProgressSlots,
    type ProgressUI,
    type ProgressColor,
    type ProgressSize,
    type ProgressOrientation,
    type ProgressAnimation
} from './Progress/index.js'

// Breadcrumb
export {
    Breadcrumb,
    breadcrumbVariants,
    type BreadcrumbProps,
    type BreadcrumbItem,
    type BreadcrumbVariants,
    type BreadcrumbSlots,
    type BreadcrumbUI
} from './Breadcrumb/index.js'

// Marquee
export {
    Marquee,
    marqueeVariants,
    type MarqueeProps,
    type MarqueeVariants,
    type MarqueeSlots,
    type MarqueeOrientation,
    type MarqueeUI
} from './Marquee/index.js'

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
