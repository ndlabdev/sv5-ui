import type { Plugin } from 'vite'
import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { generateTailwindTheme } from './css-generator.js'
import type { AppConfig } from './types.js'

export interface Sv5UIPluginOptions {
    config?: AppConfig
    output?: string // Output path for generated CSS
}

export function sv5ui(options: Sv5UIPluginOptions = {}): Plugin {
    const appConfig: AppConfig = options.config ?? {}
    const outputPath = options.output ?? 'src/lib/theme.css'

    function generateCSS(root: string) {
        const css = generateTailwindTheme(appConfig)
        const fullPath = resolve(root, outputPath)
        const dir = dirname(fullPath)

        if (!existsSync(dir)) {
            mkdirSync(dir, { recursive: true })
        }

        writeFileSync(fullPath, css, 'utf-8')
        console.log(`[sv5-ui] Generated theme CSS at ${outputPath}`)
    }

    return {
        name: 'sv5-ui-theme',
        enforce: 'pre',

        configResolved(config) {
            generateCSS(config.root)
        },

        configureServer(server) {
            // Watch app.config.ts for changes
            server.watcher.on('change', (file) => {
                if (file.endsWith('app.config.ts') || file.endsWith('app.config.js')) {
                    console.log('[sv5-ui] Config changed, regenerating theme...')
                    generateCSS(server.config.root)
                }
            })
        }
    }
}

export default sv5ui
