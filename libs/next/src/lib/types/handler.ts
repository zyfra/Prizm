export type PzmHandler<T, G> = (item: T) => G;
export type PzmBooleanHandler<T> = PzmHandler<T, boolean>;
export type PzmStringHandler<T> = PzmHandler<T, string>;
export type PzmNumberHandler<T> = PzmHandler<T, number>;
