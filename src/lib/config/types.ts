// Color shade definition (50-950)
export type ColorShade = {
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
	950: string;
};

// Semantic color names
export type SemanticColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'error'
	| 'info'
	| 'neutral';

// Theme mode
export type ThemeMode = 'light' | 'dark' | 'system';

// Color configuration
export type ColorConfig = {
	[K in SemanticColor]?: string | ColorShade;
};

// Icon configuration
export type IconConfig = {
	loading?: string;
	close?: string;
	check?: string;
	chevronDown?: string;
	chevronUp?: string;
	chevronLeft?: string;
	chevronRight?: string;
	search?: string;
	warning?: string;
	error?: string;
	info?: string;
	success?: string;
	[key: string]: string | undefined;
};

// UI component defaults
export type UIConfig = {
	// Button defaults
	button?: {
		defaultVariant?: 'solid' | 'outline' | 'ghost' | 'soft' | 'link';
		defaultSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		defaultColor?: SemanticColor;
	};
	// Input defaults
	input?: {
		defaultSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		defaultVariant?: 'outline' | 'filled' | 'underline';
	};
	// Card defaults
	card?: {
		defaultVariant?: 'elevated' | 'outlined' | 'filled';
	};
	// Modal defaults
	modal?: {
		defaultSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
	};
	// Toast/Notification defaults
	toast?: {
		position?:
			| 'top-left'
			| 'top-center'
			| 'top-right'
			| 'bottom-left'
			| 'bottom-center'
			| 'bottom-right';
		duration?: number;
	};
};

// Main app configuration
export type AppConfig = {
	// Theme configuration
	theme?: {
		// Color palette
		colors?: ColorConfig;
		// Default theme mode
		defaultMode?: ThemeMode;
		// Border radius presets
		radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
	};
	// Icon configuration
	icons?: IconConfig;
	// UI component defaults
	ui?: UIConfig;
};

// Deep partial type for merging configs
export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
