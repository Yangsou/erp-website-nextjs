export type RequiredEnvKey = 'STRAPI_API_URL' | 'STRAPI_API_KEY'

export const requireEnv = (key: RequiredEnvKey): string => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`${key} is not defined`)
  }
  return value
}

export const trimTrailingSlash = (value: string): string => value.replace(/\/+$/, '')
