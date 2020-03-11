declare function envLoader<T>(
  config: { defaults: T } | string, nodeEnv?: string
): T

export = envLoader
export as namespace envLoader