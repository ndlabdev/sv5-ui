import type { AppConfig } from './src/lib/config'
import { colors } from './src/lib/config/index.ts'

/**
 * App Configuration
 *
 * This file allows you to customize the UI library's theme, icons, and component defaults.
 * Similar to NuxtUI's app.config.ts
 *
 * @example Changing primary color to indigo:
 * ```ts
 * export default {
 *   theme: {
 *     colors: {
 *       primary: colors.indigo,
 *       // or use a string shorthand:
 *       primary: 'indigo'
 *     }
 *   }
 * }
 * ```
 *
 * @example Custom color palette:
 * ```ts
 * export default {
 *   theme: {
 *     colors: {
 *       primary: {
 *         50: '#faf5ff',
 *         100: '#f3e8ff',
 *         // ... all shades 50-950
 *       }
 *     }
 *   }
 * }
 * ```
 */
const appConfig: AppConfig = {
    theme: {
        // Semantic colors - use color name or full palette
        colors: {
            primary: colors.emerald,
            secondary: colors.slate,
            success: colors.green,
            warning: colors.amber,
            error: colors.red,
            info: colors.sky,
            neutral: colors.gray
        },
        // Default theme mode: 'light' | 'dark' | 'system'
        defaultMode: 'system',
        // Border radius preset: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
        radius: 'md'
    },

    // Icon class names (compatible with Iconify, UnoCSS Icons, etc.)
    icons: {
        loading: 'i-lucide-loader-2',
        close: 'i-lucide-x',
        check: 'i-lucide-check',
        chevronDown: 'i-lucide-chevron-down',
        chevronUp: 'i-lucide-chevron-up',
        chevronLeft: 'i-lucide-chevron-left',
        chevronRight: 'i-lucide-chevron-right',
        search: 'i-lucide-search',
        warning: 'i-lucide-triangle-alert',
        error: 'i-lucide-circle-x',
        info: 'i-lucide-info',
        success: 'i-lucide-circle-check'
    },

    // Component defaults
    ui: {
        button: {
            defaultVariant: 'solid',
            defaultSize: 'md',
            defaultColor: 'primary'
        },
        input: {
            defaultSize: 'md',
            defaultVariant: 'outline'
        },
        card: {
            defaultVariant: 'elevated'
        },
        modal: {
            defaultSize: 'md'
        },
        toast: {
            position: 'bottom-right',
            duration: 5000
        }
    }
}

export default appConfig
