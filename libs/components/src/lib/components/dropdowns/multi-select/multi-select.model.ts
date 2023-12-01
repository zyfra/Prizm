export type PrizmMultiSelectSearchMatcher<T> = (searchValue: string, item: T) => boolean;
export type PrizmMultiSelectIdentityMatcher<T> = (item1: T, item2: T) => boolean;
export type PrizmMultiSelectValueTransformer<T, R = any> = (item1: T) => R;

export type PrizmMultiSelectItemWithChecked<T> = {
  checked: boolean;
  indeterminate?: boolean;
  obj: T;
  stringify: string;
};

export type PrizmMultiSelectItemStringifyFunc<T> = (
  i: PrizmMultiSelectItemStringifyItem<T>,
  nullContent?: string
) => string;
export type PrizmMultiSelectItemStringifyItem<T> = Omit<PrizmMultiSelectItemWithChecked<T>, 'stringify'>;
