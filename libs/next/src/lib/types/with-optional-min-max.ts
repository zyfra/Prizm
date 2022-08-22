export interface ZuiWithOptionalMinMax<T> {
    min: T | null;
    max: T | null;
}

export interface ZuiWithOptionalMinMaxWithValue<T, V> extends ZuiWithOptionalMinMax<V> {
    value: T;
}
