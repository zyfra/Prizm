export type PrizmSelectSearchMatcher<T> = (searchValue: string, item: T) => boolean;
export type PrizmSelectIdentityMatcher<T> = (item1: T, item2: T) => boolean;
export type PrizmSelectValueTransformer<T, R = any> = (item1: T) => R;
