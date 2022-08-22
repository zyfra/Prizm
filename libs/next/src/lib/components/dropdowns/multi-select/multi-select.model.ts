export type ZuiMultiSelectSearchMatcher<T> = (searchValue: string, item: T) => boolean;
export type ZuiMultiSelectIdentityMatcher<T> = (item1: T, item2: T) => boolean;

export type ZuiMultiSelectItemWithChecked<T> = {
  checked: boolean,
  obj: T,
  stringify: string
}
