export type PrizmTreeMultiSelectSearchMatcher<T> = (searchValue: string, item: T) => boolean;
export type PrizmTreeMultiSelectIdentityMatcher<T> = (item1: T, item2: T) => boolean;

export type PrizmTreeMultiSelectItemWithChecked<T> = {
  checked: boolean;
  indeterminate?: boolean;
  obj: T;
  stringify: string;
};

export type PrizmTreeMultiSelectItemStringifyFunc<T> = (
  i: PrizmTreeMultiSelectItemStringifyItem<T>,
  nullContent?: string
) => string;
export type PrizmTreeMultiSelectItemStringifyItem<T> = Omit<
  PrizmTreeMultiSelectItemWithChecked<T>,
  'stringify'
>;
