import { getContext, setContext } from 'svelte'
import type { AppConfig } from './types.js'
import { defaultConfig } from './defaults.js'
import { mergeConfig } from './css-generator.js'

const CONFIG_KEY = Symbol('ui-config')

class ConfigState {
    #config = $state<AppConfig>(defaultConfig)

    get config() {
        return this.#config
    }

    set config(value: AppConfig) {
        this.#config = mergeConfig(defaultConfig, value)
    }

    get merged() {
        return this.#config
    }

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
}

// Singleton for non-context usage
let defaultState: ConfigState | undefined

function getDefaultState(): ConfigState {
    return (defaultState ??= new ConfigState())
}

export function createConfigContext(config: AppConfig = {}): ConfigState {
    const state = new ConfigState()
    state.config = config
    setContext(CONFIG_KEY, state)
    return state
}

export function getConfigContext(): ConfigState {
    return getContext<ConfigState>(CONFIG_KEY) ?? getDefaultState()
}

export function useIcon(name: string): string {
    return getConfigContext().icons?.[name] ?? ''
}

export function useUIDefaults<T extends keyof NonNullable<AppConfig['ui']>>(
    component: T
): NonNullable<AppConfig['ui']>[T] | undefined {
    return getConfigContext().ui?.[component]
}
