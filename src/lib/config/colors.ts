import type { ColorShade } from './types.ts'
import tailwindColors from 'tailwindcss/colors'

// Filter only color palettes with shades (exclude single values like 'inherit', 'current', 'transparent', 'black', 'white')
const colorPalettes = [
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

type ColorPaletteName = (typeof colorPalettes)[number];

// Extract only the color palettes from Tailwind colors
export const colors = colorPalettes.reduce(
    (acc, name) => {
        acc[name] = tailwindColors[name] as ColorShade
        return acc
    },
	{} as Record<ColorPaletteName, ColorShade>
)

export type ColorName = ColorPaletteName;

// Get a color palette by name
export function getColor(name: ColorName): ColorShade {
    return colors[name]
}
