export type PrizmAutoEmitCalculate<Val, BaseClass, R = unknown> = (val: Val, value: BaseClass) => R;
export declare function prizmAutoEmit<T>(options?: {
  defaultValue?: T;
  /**
   * default name `${name}Change`
   * */
  name?: string | symbol;
  calculate?: PrizmAutoEmitCalculate<any, any, T>;
}): PropertyDecorator;
