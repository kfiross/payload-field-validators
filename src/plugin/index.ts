import type { Config } from 'payload'

export type PayloadFieldValidatorsConfig = {
  disabled?: boolean
}

export const payloadFieldValidatorsPlugin =
  (pluginOptions: PayloadFieldValidatorsConfig) =>
  (config: Config): Config => {
    if (!config.collections) {
      config.collections = []
    }

    /**
     * If the plugin is disabled, we still want to keep added collections/fields so the database schema is consistent which is important for migrations.
     * If your plugin heavily modifies the database schema, you may want to remove this property.
     */
    if (pluginOptions.disabled) {
      return config
    }


    return config
  }
