export type PzmSelectSearchMatcher<T> = (searchValue: string, item: T) => boolean;
export type PzmSelectIdentityMatcher<T> = (item1: T, item2: T) => boolean;
