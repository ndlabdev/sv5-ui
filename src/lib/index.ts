// Components
export { UIProvider } from './components/index.js';

// Config
export {
	// Types
	type AppConfig,
	type ColorConfig,
	type ColorShade,
	type DeepPartial,
	type IconConfig,
	type SemanticColor,
	type ThemeMode,
	type UIConfig,
	type ColorName,
	// Colors
	colors,
	getColor,
	// Defaults
	defaultConfig,
	radiusValues,
	// CSS Generator
	generateCSSVariables,
	generateTailwindTheme,
	mergeConfig,
	// Context
	createConfigContext,
	getConfigContext,
	useIcon,
	useUIDefaults
} from './config/index.js';
