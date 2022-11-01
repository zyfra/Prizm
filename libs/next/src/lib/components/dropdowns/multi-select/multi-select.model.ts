export type PzmMultiSelectSearchMatcher<T> = (searchValue: string, item: T) => boolean;
export type PzmMultiSelectIdentityMatcher<T> = (item1: T, item2: T) => boolean;

export type PzmMultiSelectItemWithChecked<T> = {
  checked: boolean,
  indeterminate?: boolean,
  obj: T,
  stringify: string
}

export type PzmMultiSelectItemStringifyFunc<T> = (i: PzmMultiSelectItemStringifyItem<T>, nullContent?: string) => string
export type PzmMultiSelectItemStringifyItem<T> = Omit<PzmMultiSelectItemWithChecked<T>, 'stringify'>
