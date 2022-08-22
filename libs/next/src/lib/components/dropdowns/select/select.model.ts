export type ZuiSelectSearchMatcher<T> = (searchValue: string, item: T) => boolean;
export type ZuiSelectIdentityMatcher<T> = (item1: T, item2: T) => boolean;
