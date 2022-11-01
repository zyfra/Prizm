export interface PzmWithOptionalMinMax<T> {
    min: T | null;
    max: T | null;
}

export interface ZuiWithOptionalMinMaxWithValue<T, V> extends PzmWithOptionalMinMax<V> {
    value: T;
}
