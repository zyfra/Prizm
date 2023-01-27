export interface PrizmControlValueTransformer<From, To = unknown> {
  readonly toControlValue: (componentValue: From) => To;
  readonly fromControlValue: (controlValue: To) => From;
}
