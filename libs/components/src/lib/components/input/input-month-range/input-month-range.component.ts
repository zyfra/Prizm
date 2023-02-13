// import {
//     ChangeDetectionStrategy,
//     ChangeDetectorRef,
//     Component,
//     Inject,
//     Input,
//     Optional,
//     Self,
//     ViewChild,
// } from '@angular/core';
// import {NgControl} from '@angular/forms';
// import {
//     AbstractPrizmNullableControl,
//     ALWAYS_FALSE_HANDLER,
//     CHAR_EN_DASH,
//     prizmAsControl,
//     prizmAsFocusableItemAccessor,
//     prizmDefaultProp,
//     PrizmFocusableElementAccessor,
//     PrizmHandler,
//     PrizmMonth,
//     PrizmMonthRange,
// } from '@prizm-ui/cdk';
// import {
//     PrizmMonthPipe,
//     PrizmPrimitiveTextfieldComponent,
//     PrizmWithOptionalMinMax,
// } from '@prizm-ui/core';
// import {PrizmMonthContext} from '@prizm-ui/kit/interfaces';
// import {PRIZM_MONTH_FORMATTER_PROVIDER} from '@prizm-ui/kit/providers';
// import {
//     PRIZM_INPUT_DATE_OPTIONS,
//     PRIZM_MONTH_FORMATTER,
//     PrizmInputDateOptions,
// } from '@prizm-ui/kit/tokens';
// import {PrizmBooleanHandlerWithContext} from '@prizm-ui/kit/types';
// import {Observable} from 'rxjs';
//
// @Component({
//     selector: `prizm-input-month-range`,
//     templateUrl: `./input-month-range.template.html`,
//     styleUrls: [`./input-month-range.style.less`],
//     changeDetection: ChangeDetectionStrategy.OnPush,
//     providers: [
//         prizmAsFocusableItemAccessor(PrizmInputMonthRangeComponent),
//         prizmAsControl(PrizmInputMonthRangeComponent),
//         PRIZM_MONTH_FORMATTER_PROVIDER,
//         PrizmMonthPipe,
//     ],
// })
// export class PrizmInputMonthRangeComponent
//     extends AbstractPrizmNullableControl<PrizmMonthRange>
//     implements PrizmWithOptionalMinMax<PrizmMonth>, PrizmFocusableElementAccessor
// {
//     @ViewChild(PrizmPrimitiveTextfieldComponent)
//     private readonly textfield?: PrizmPrimitiveTextfieldComponent;
//
//     @Input()
//     @prizmDefaultProp()
//     min: PrizmMonth = this.options.min;
//
//     @Input()
//     @prizmDefaultProp()
//     max: PrizmMonth = this.options.max;
//
//     @Input()
//     @prizmDefaultProp()
//     disabledItemHandler: PrizmBooleanHandlerWithContext<PrizmMonth, PrizmMonthContext> =
//         ALWAYS_FALSE_HANDLER;
//
//     open = false;
//
//     constructor(
//         @Optional()
//         @Self()
//         @Inject(NgControl)
//         control: NgControl | null,
//         @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
//         @Inject(PRIZM_MONTH_FORMATTER)
//         readonly formatter: PrizmHandler<PrizmMonth | null, Observable<string>>,
//         @Inject(PRIZM_INPUT_DATE_OPTIONS)
//         private readonly options: PrizmInputDateOptions,
//     ) {
//         super(control, changeDetectorRef);
//     }
//
//     get nativeFocusableElement(): HTMLInputElement | null {
//         return this.textfield ? this.textfield.nativeFocusableElement : null;
//     }
//
//     get focused(): boolean {
//         return !!this.textfield && this.textfield.focused;
//     }
//
//     get calendarIcon(): PrizmInputDateOptions['icon'] {
//         return this.options.icon;
//     }
//
//     computeValue(from: string | null, to: string | null): string {
//         const formattedTo = from === to && this.focused && !this.readOnly ? `` : to;
//
//         return `${from} ${CHAR_EN_DASH} ${formattedTo}`;
//     }
//
//     onValueChange(value: string): void {
//         if (value) {
//             return;
//         }
//
//         this.updateValue(null);
//         this.onOpenChange(true);
//     }
//
//     onMonthClick(month: PrizmMonth): void {
//         if (this.value === null || !this.value.isSingleMonth) {
//             this.writeValue(new PrizmMonthRange(month, month));
//
//             return;
//         }
//
//         this.updateValue(PrizmMonthRange.sort(this.value.from, month));
//         this.close();
//     }
//
//     onOpenChange(open: boolean): void {
//         this.open = open;
//     }
//
//     onActiveZone(focused: boolean): void {
//         this.updateFocused(focused);
//
//         if (focused) {
//             return;
//         }
//
//         if (this.value?.isSingleMonth) {
//             this.updateValue(new PrizmMonthRange(this.value.from, this.value.from));
//         }
//     }
//
//     override setDisabledState(): void {
//         super.setDisabledState();
//         this.close();
//     }
//
//     private close(): void {
//         this.open = false;
//     }
// }
