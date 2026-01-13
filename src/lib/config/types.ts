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

export type SemanticColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'error'
	| 'info'
	| 'neutral';

export type ColorConfig = {
	[K in SemanticColor]?: string | ColorShade;
};

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

export type UIConfig = {
	button?: {
		defaultVariant?: 'solid' | 'outline' | 'ghost' | 'soft' | 'link';
		defaultSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		defaultColor?: SemanticColor;
	};
	input?: {
		defaultSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		defaultVariant?: 'outline' | 'filled' | 'underline';
	};
	card?: {
		defaultVariant?: 'elevated' | 'outlined' | 'filled';
	};
	modal?: {
		defaultSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
	};
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

export type AppConfig = {
	theme?: {
		colors?: ColorConfig;
	};
	icons?: IconConfig;
	ui?: UIConfig;
};

export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
