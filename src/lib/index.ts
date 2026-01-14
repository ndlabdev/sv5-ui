export {
    UIProvider,
    Button,
    buttonVariants,
    type ButtonVariants,
    type ButtonProps,
    Icon,
    type IconProps,
    ThemeToggle,
    type ThemeToggleProps,
    Avatar,
    avatarVariants,
    type AvatarProps,
    type AvatarVariants,
    type AvatarSize,
    // mode-watcher re-exports
    mode,
    toggleMode,
    setMode,
    resetMode,
    userPrefersMode,
    systemPrefersMode,
    ModeWatcher
} from './components/index.js'

export {
    type AppConfig,
    type ColorConfig,
    type ColorShade,
    type DeepPartial,
    type IconConfig,
    type SemanticColor,
    type UIConfig,
    type ColorName,
    colors,
    defaultConfig,
    generateCSSVariables,
    generateTailwindTheme,
    mergeConfig,
    createConfigContext,
    getConfigContext,
    useIcon,
    useUIDefaults
} from './config/index.js'
