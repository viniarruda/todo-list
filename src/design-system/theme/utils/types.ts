export type TokenObject = { [key: string]: string }

export type TransformedTokenObject<T> = {
  [K in keyof T]: { value: T[K] };
};

