export type PrizmHandler<T, G> = (item: T) => G;
export type PrizmBooleanHandler<T> = PrizmHandler<T, boolean>;
export type PrizmStringHandler<T> = PrizmHandler<T, string>;
export type PrizmNumberHandler<T> = PrizmHandler<T, number>;
