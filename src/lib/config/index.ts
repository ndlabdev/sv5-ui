// Types
export type {
	AppConfig,
	ColorConfig,
	ColorShade,
	DeepPartial,
	IconConfig,
	SemanticColor,
	ThemeMode,
	UIConfig
} from './types.js';

// Colors
export { colors, getColor, type ColorName } from './colors.js';

// Defaults
export { defaultConfig, radiusValues } from './defaults.js';

// CSS Generator
export { generateCSSVariables, generateTailwindTheme, mergeConfig } from './css-generator.js';

// Context
export {
	createConfigContext,
	getConfigContext,
	useIcon,
	useUIDefaults
} from './context.svelte.js';

// Vite Plugin
export { sv5ui, type Sv5UIPluginOptions } from './vite-plugin.js';
