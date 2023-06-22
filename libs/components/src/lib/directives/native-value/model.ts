export type PrizmInputNativeValueNeedChange<T> = (
  currentValue: T,
  nativeValue: string,
  htmlInputValue: HTMLInputElement
) => boolean;
