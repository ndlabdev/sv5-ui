import type { Plugin } from 'vite'
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { generateTailwindTheme } from './css-generator.js'
import type { AppConfig } from './types.js'

export interface Sv5UIPluginOptions {
    config?: AppConfig
    output?: string
}

export function sv5ui(options: Sv5UIPluginOptions = {}): Plugin {
    const { config: appConfig = {}, output: outputPath = 'src/lib/theme.css' } = options

    function generateCSS(root: string): boolean {
        const css = generateTailwindTheme(appConfig)
        const fullPath = resolve(root, outputPath)
        const dir = dirname(fullPath)

        // Check if content changed
        if (existsSync(fullPath)) {
            const existing = readFileSync(fullPath, 'utf-8')
            if (existing === css) {
                return false
            }
        } else if (!existsSync(dir)) {
            mkdirSync(dir, { recursive: true })
        }

        writeFileSync(fullPath, css, 'utf-8')
        console.log(`[sv5-ui] Generated theme CSS at ${outputPath}`)
        return true
    }

    return {
        name: 'sv5-ui-theme',
        enforce: 'pre',

        configResolved(config) {
            generateCSS(config.root)
        },

        configureServer(server) {
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
