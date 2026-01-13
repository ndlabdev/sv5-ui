import { getContext, setContext } from 'svelte'
import type { AppConfig } from './types.js'
import { defaultConfig, radiusValues } from './defaults.js'
import { mergeConfig } from './css-generator.js'

const CONFIG_KEY = Symbol('ui-config')

// Reactive config state
class ConfigState {
    #config = $state<AppConfig>(defaultConfig)

    get config() {
        return this.#config
    }

    set config(value: AppConfig) {
        this.#config = mergeConfig(defaultConfig, value)
    }

    // Get merged config
    get merged() {
        return this.#config
    }

    // Quick accessors
    get theme() {
        return this.#config.theme
    }

    get icons() {
        return this.#config.icons
    }

    get ui() {
        return this.#config.ui
    }

    get colors() {
        return this.#config.theme?.colors
    }

    get radius() {
        const r = this.#config.theme?.radius ?? 'md'
        return radiusValues[r]
    }
}

// Create and provide config context
export function createConfigContext(config: AppConfig = {}): ConfigState {
    const state = new ConfigState()
    state.config = config
    setContext(CONFIG_KEY, state)
    return state
}

// Get config from context
export function getConfigContext(): ConfigState {
    const ctx = getContext<ConfigState | undefined>(CONFIG_KEY)
    if (!ctx) {
        // Return default if no context found
        const state = new ConfigState()
        return state
    }
    return ctx
}

// Utility to get icon from config
export function useIcon(name: string): string {
    const config = getConfigContext()
    return config.icons?.[name] ?? ''
}

// Utility to get UI defaults
export function useUIDefaults<T extends keyof NonNullable<AppConfig['ui']>>(
    component: T
): NonNullable<AppConfig['ui']>[T] | undefined {
    const config = getConfigContext()
    return config.ui?.[component]
}
