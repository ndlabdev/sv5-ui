import type { AppConfig } from './types.js'
import { colors } from './colors.js'

// Default application configuration
export const defaultConfig: AppConfig = {
    theme: {
        colors: {
            primary: colors.blue,
            secondary: colors.slate,
            success: colors.green,
            warning: colors.amber,
            error: colors.red,
            info: colors.sky,
            neutral: colors.gray
        }
    },
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
