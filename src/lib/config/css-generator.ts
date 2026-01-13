import type { AppConfig, ColorShade, SemanticColor } from './types.js'
import { defaultConfig, radiusValues } from './defaults.js'
import { colors, type ColorName } from './colors.js'

// Resolve color value - can be a color name string or a full ColorShade object
function resolveColor(color: string | ColorShade | undefined): ColorShade | undefined {
    if (!color) return undefined
    if (typeof color === 'string') {
        return colors[color as ColorName]
    }
    return color
}

// Generate CSS variables for a single color
function generateColorVars(name: SemanticColor, shade: ColorShade): string {
    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const
    const shadeVars = shades
        .map((s) => `  --color-${name}-${s}: ${shade[s]};`)
        .join('\n')
    // Default color (without shade number) = 500
    const defaultVar = `  --color-${name}: ${shade[500]};`
    return `${defaultVar}\n${shadeVars}`
}

// Generate all CSS variables from config
export function generateCSSVariables(config: AppConfig = defaultConfig): string {
    const mergedConfig = mergeConfig(defaultConfig, config)
    const themeColors = mergedConfig.theme?.colors ?? {}
    const radius = mergedConfig.theme?.radius ?? 'md'

    const semanticColors: SemanticColor[] = [
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
        'neutral'
    ]

    const colorVars = semanticColors
        .map((name) => {
            const color = resolveColor(themeColors[name])
            if (color) {
                return generateColorVars(name, color)
            }
            return ''
        })
        .filter(Boolean)
        .join('\n\n')

    // Generate radius variable
    const radiusVar = `  --ui-radius: ${radiusValues[radius]};`

    return `:root {\n${colorVars}\n\n${radiusVar}\n}`
}

// Deep merge two configs
export function mergeConfig(base: AppConfig, override: AppConfig): AppConfig {
    const result: AppConfig = { ...base }

    if (override.theme) {
        result.theme = {
            ...base.theme,
            ...override.theme,
            colors: {
                ...base.theme?.colors,
                ...override.theme?.colors
            }
        }
    }

    if (override.icons) {
        result.icons = {
            ...base.icons,
            ...override.icons
        }
    }

    if (override.ui) {
        result.ui = {
            ...base.ui,
            ...override.ui,
            button: { ...base.ui?.button, ...override.ui?.button },
            input: { ...base.ui?.input, ...override.ui?.input },
            card: { ...base.ui?.card, ...override.ui?.card },
            modal: { ...base.ui?.modal, ...override.ui?.modal },
            toast: { ...base.ui?.toast, ...override.ui?.toast }
        }
    }

    return result
}

// Generate Tailwind v4 CSS with theme configuration
export function generateTailwindTheme(config: AppConfig = defaultConfig): string {
    const cssVars = generateCSSVariables(config)

    return `@import 'tailwindcss';

${cssVars}

@theme {
  /* Primary - default (500) */
  --color-primary: var(--color-primary);
  --color-primary-50: var(--color-primary-50);
  --color-primary-100: var(--color-primary-100);
  --color-primary-200: var(--color-primary-200);
  --color-primary-300: var(--color-primary-300);
  --color-primary-400: var(--color-primary-400);
  --color-primary-500: var(--color-primary-500);
  --color-primary-600: var(--color-primary-600);
  --color-primary-700: var(--color-primary-700);
  --color-primary-800: var(--color-primary-800);
  --color-primary-900: var(--color-primary-900);
  --color-primary-950: var(--color-primary-950);

  /* Secondary - default (500) */
  --color-secondary: var(--color-secondary);
  --color-secondary-50: var(--color-secondary-50);
  --color-secondary-100: var(--color-secondary-100);
  --color-secondary-200: var(--color-secondary-200);
  --color-secondary-300: var(--color-secondary-300);
  --color-secondary-400: var(--color-secondary-400);
  --color-secondary-500: var(--color-secondary-500);
  --color-secondary-600: var(--color-secondary-600);
  --color-secondary-700: var(--color-secondary-700);
  --color-secondary-800: var(--color-secondary-800);
  --color-secondary-900: var(--color-secondary-900);
  --color-secondary-950: var(--color-secondary-950);

  /* Success - default (500) */
  --color-success: var(--color-success);
  --color-success-50: var(--color-success-50);
  --color-success-100: var(--color-success-100);
  --color-success-200: var(--color-success-200);
  --color-success-300: var(--color-success-300);
  --color-success-400: var(--color-success-400);
  --color-success-500: var(--color-success-500);
  --color-success-600: var(--color-success-600);
  --color-success-700: var(--color-success-700);
  --color-success-800: var(--color-success-800);
  --color-success-900: var(--color-success-900);
  --color-success-950: var(--color-success-950);

  /* Warning - default (500) */
  --color-warning: var(--color-warning);
  --color-warning-50: var(--color-warning-50);
  --color-warning-100: var(--color-warning-100);
  --color-warning-200: var(--color-warning-200);
  --color-warning-300: var(--color-warning-300);
  --color-warning-400: var(--color-warning-400);
  --color-warning-500: var(--color-warning-500);
  --color-warning-600: var(--color-warning-600);
  --color-warning-700: var(--color-warning-700);
  --color-warning-800: var(--color-warning-800);
  --color-warning-900: var(--color-warning-900);
  --color-warning-950: var(--color-warning-950);

  /* Error - default (500) */
  --color-error: var(--color-error);
  --color-error-50: var(--color-error-50);
  --color-error-100: var(--color-error-100);
  --color-error-200: var(--color-error-200);
  --color-error-300: var(--color-error-300);
  --color-error-400: var(--color-error-400);
  --color-error-500: var(--color-error-500);
  --color-error-600: var(--color-error-600);
  --color-error-700: var(--color-error-700);
  --color-error-800: var(--color-error-800);
  --color-error-900: var(--color-error-900);
  --color-error-950: var(--color-error-950);

  /* Info - default (500) */
  --color-info: var(--color-info);
  --color-info-50: var(--color-info-50);
  --color-info-100: var(--color-info-100);
  --color-info-200: var(--color-info-200);
  --color-info-300: var(--color-info-300);
  --color-info-400: var(--color-info-400);
  --color-info-500: var(--color-info-500);
  --color-info-600: var(--color-info-600);
  --color-info-700: var(--color-info-700);
  --color-info-800: var(--color-info-800);
  --color-info-900: var(--color-info-900);
  --color-info-950: var(--color-info-950);

  /* Neutral - default (500) */
  --color-neutral: var(--color-neutral);
  --color-neutral-50: var(--color-neutral-50);
  --color-neutral-100: var(--color-neutral-100);
  --color-neutral-200: var(--color-neutral-200);
  --color-neutral-300: var(--color-neutral-300);
  --color-neutral-400: var(--color-neutral-400);
  --color-neutral-500: var(--color-neutral-500);
  --color-neutral-600: var(--color-neutral-600);
  --color-neutral-700: var(--color-neutral-700);
  --color-neutral-800: var(--color-neutral-800);
  --color-neutral-900: var(--color-neutral-900);
  --color-neutral-950: var(--color-neutral-950);

  /* Radius */
  --radius-ui: var(--ui-radius);
}
`
}
