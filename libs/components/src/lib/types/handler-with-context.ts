export type PrizmHandlerWithContext<I, O, C extends Record<string, unknown> = Record<string, never>> = (
  item: I,
  context?: C
) => O;

export type PrizmBooleanHandlerWithContext<
  I,
  C extends Record<string, unknown> = Record<string, never>
> = PrizmHandlerWithContext<I, boolean, C>;
