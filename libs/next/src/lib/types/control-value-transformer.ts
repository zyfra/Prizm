export interface PzmControlValueTransformer<From, To = unknown> {
    readonly toControlValue: (componentValue: From) => To;
    readonly fromControlValue: (controlValue: To) => From;
}
