export type PrizmNonNullableProperties<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};
