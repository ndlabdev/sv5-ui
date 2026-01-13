// Types
export type {
    AppConfig,
    ColorConfig,
    ColorShade,
    DeepPartial,
    IconConfig,
    SemanticColor,
    UIConfig
} from './types.js'

// Colors
export { colors, type ColorName } from './colors.js'

// Defaults
export { defaultConfig } from './defaults.js'

// CSS Generator
export { generateCSSVariables, generateTailwindTheme, mergeConfig } from './css-generator.js'

// Context
export {
    createConfigContext,
    getConfigContext,
    useIcon,
    useUIDefaults
} from './context.svelte.js'
