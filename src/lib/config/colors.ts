import type { ColorShade } from './types.js'
import tailwindColors from 'tailwindcss/colors'

const COLOR_PALETTES = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose'
] as const

export type ColorName = (typeof COLOR_PALETTES)[number]

export const colors: Record<ColorName, ColorShade> = Object.fromEntries(
    COLOR_PALETTES.map((name) => [name, tailwindColors[name] as ColorShade])
) as Record<ColorName, ColorShade>
