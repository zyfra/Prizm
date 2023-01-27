export interface PrizmWithOptionalMinMax<T> {
  min: T | null;
  max: T | null;
}

export interface PrizmWithOptionalMinMaxWithValue<T, V> extends PrizmWithOptionalMinMax<V> {
  value: T;
}
