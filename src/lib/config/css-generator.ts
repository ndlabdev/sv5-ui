import type { AppConfig, ColorShade, SemanticColor } from './types.js'
import { defaultConfig } from './defaults.js'
import { colors, type ColorName } from './colors.js'

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const
const SEMANTIC_COLORS: SemanticColor[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
    'info',
    'neutral'
]

function resolveColor(color: string | ColorShade | undefined): ColorShade | undefined {
    if (!color) return undefined
    if (typeof color === 'string') {
        return colors[color as ColorName]
    }
    return color
}

function generateColorVars(name: SemanticColor, shade: ColorShade): string {
    const lines = [`  --color-${name}: ${shade[500]};`]
    for (const s of SHADES) {
        lines.push(`  --color-${name}-${s}: ${shade[s]};`)
    }
    return lines.join('\n')
}

function generateThemeBlock(): string {
    const lines: string[] = []
    for (const name of SEMANTIC_COLORS) {
        lines.push(`  /* ${name.charAt(0).toUpperCase() + name.slice(1)} */`)
        lines.push(`  --color-${name}: var(--color-${name});`)
        for (const s of SHADES) {
            lines.push(`  --color-${name}-${s}: var(--color-${name}-${s});`)
        }
        lines.push('')
    }
    return lines.join('\n').trimEnd()
}

// Cache the @theme block since it's static
const THEME_BLOCK = `@theme {\n${generateThemeBlock()}\n}`

export function generateCSSVariables(config: AppConfig = defaultConfig): string {
    const mergedConfig = mergeConfig(defaultConfig, config)
    const themeColors = mergedConfig.theme?.colors ?? {}

    const colorVars = SEMANTIC_COLORS
        .map((name) => {
            const color = resolveColor(themeColors[name])
            return color ? generateColorVars(name, color) : ''
        })
        .filter(Boolean)
        .join('\n\n')

    return `:root {\n${colorVars}\n}`
}

// Deep merge utility
function deepMerge<T extends Record<string, unknown>>(base: T, override: Partial<T>): T {
    const result = { ...base }
    for (const key in override) {
        const overrideValue = override[key]
        if (overrideValue !== undefined) {
            const baseValue = base[key]
            if (
                baseValue !== null &&
                overrideValue !== null &&
                typeof baseValue === 'object' &&
                typeof overrideValue === 'object' &&
                !Array.isArray(baseValue) &&
                !Array.isArray(overrideValue)
            ) {
                result[key] = deepMerge(
                    baseValue as Record<string, unknown>,
                    overrideValue as Record<string, unknown>
                ) as T[typeof key]
            } else {
                result[key] = overrideValue as T[typeof key]
            }
        }
    }
    return result
}

export function mergeConfig(base: AppConfig, override: AppConfig): AppConfig {
    return deepMerge(base, override) as AppConfig
}

export function generateTailwindTheme(config: AppConfig = defaultConfig): string {
    const cssVars = generateCSSVariables(config)
    return `@import 'tailwindcss';\n\n${cssVars}\n\n${THEME_BLOCK}\n`
}
