import { TokenObject, TransformedTokenObject } from './types'

export const transformTokensToThemeObject = <T extends TokenObject>(
  tokens: T,
): TransformedTokenObject<T> => {
  return Object.entries(tokens).reduce((acc, [key, value]) => {
    acc[key as keyof T] = { value: value as T[keyof T] }
    return acc
  }, {} as TransformedTokenObject<T>)
}
