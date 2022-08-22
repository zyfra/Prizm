export type ZuiHandler<T, G> = (item: T) => G;
export type ZuiBooleanHandler<T> = ZuiHandler<T, boolean>;
export type ZuiStringHandler<T> = ZuiHandler<T, string>;
export type ZuiNumberHandler<T> = ZuiHandler<T, number>;
