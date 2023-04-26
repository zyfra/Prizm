import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Injector,
  Input,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { prizmAsControl } from '../../../abstract/control';
import { PrizmMonthPipe } from '../../../pipes/month/month.pipe';
import { PRIZM_MONTH_FORMATTER_PROVIDER } from '../../../providers/month-formatter.provider';
import { prizmAsFocusableItemAccessor } from '../../../tokens/focusable-item-accessor';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { PrizmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { PrizmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmBooleanHandlerWithContext } from '../../../types/handler-with-context';
import { PrizmMonthContext } from '../../../@core/date-time/month-context';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_MONTH_FORMATTER } from '../../../tokens/month-formatter';
import { PrizmHandler } from '../../../types/handler';
import { PrizmInputDateOptions, PRIZM_INPUT_DATE_OPTIONS } from '../../../tokens/input-date-options';
import { PRIZM_CHAR_EN_DASH } from '../../../constants/unicode-chars';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { PrizmInputSize } from '../common/models/prizm-input.models';

@Component({
  selector: `prizm-input-month-range`,
  templateUrl: `./input-month-range.component.html`,
  styleUrls: [`./input-month-range.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    prizmAsFocusableItemAccessor(PrizmInputMonthRangeComponent),
    prizmAsControl(PrizmInputMonthRangeComponent),
    PRIZM_MONTH_FORMATTER_PROVIDER,
    PrizmMonthPipe,
  ],
})
export class PrizmInputMonthRangeComponent
  extends AbstractPrizmNullableControl<PrizmMonthRange>
  implements PrizmWithOptionalMinMax<PrizmMonth>, PrizmFocusableElementAccessor
{
  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  public outer = false;

  @Input()
  @prizmDefaultProp()
  public label = 'Выберите период';

  @Input() forceClear: boolean | null = null;

  @Input()
  @prizmDefaultProp()
  public size: PrizmInputSize = 'm';

  @Input()
  @prizmDefaultProp()
  public placeholder = '';

  @Input()
  @prizmDefaultProp()
  min: PrizmMonth = this.options.min;

  @Input()
  @prizmDefaultProp()
  max: PrizmMonth = this.options.max;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandlerWithContext<PrizmMonth, PrizmMonthContext> =
    PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  public extraButtonInjector: Injector = this.injector;

  open = false;

  @HostListener(`click`)
  public onClick(): void {
    this.open = !this.open;
  }

  constructor(
    @Optional()
    @Self()
    @Inject(NgControl)
    control: NgControl | null,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    @Inject(PRIZM_MONTH_FORMATTER)
    readonly formatter: PrizmHandler<PrizmMonth | null, Observable<string>>,
    @Inject(PRIZM_INPUT_DATE_OPTIONS)
    private readonly options: PrizmInputDateOptions,
    private readonly injector: Injector
  ) {
    super(control, changeDetectorRef);
  }

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement ? (this.focusableElement.nativeElement as HTMLInputElement) : null;
  }

  get focused(): boolean {
    return this.focusableElement?.nativeElement
      ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
      : false;
  }

  get calendarIcon(): PrizmInputDateOptions['icon'] {
    return this.options.icon;
  }

  public computeValue(from: string | null, to: string | null): string {
    const formattedTo = from === to && this.focused && !this.readOnly ? `` : to;

    return `${from} ${PRIZM_CHAR_EN_DASH} ${formattedTo}`;
  }

  public onValueChange(value: string): void {
    if (value) {
      return;
    }

    this.updateValue(null);
    this.onOpenChange(true);
  }

  public onMonthClick(month: PrizmMonth): void {
    if (this.value === null || !this.value.isSingleMonth) {
      this.writeValue(new PrizmMonthRange(month, month));

      return;
    }

    this.updateValue(PrizmMonthRange.sort(this.value.from, month));
    this.close();
  }

  public onOpenChange(open: boolean): void {
    this.open = open;
  }

  public onActiveZone(focused: boolean): void {
    this.updateFocused(focused);

    if (focused) {
      return;
    }

    if (this.value?.isSingleMonth) {
      this.updateValue(new PrizmMonthRange(this.value.from, this.value.from));
    }
  }

  public override setDisabledState(): void {
    super.setDisabledState();
    this.close();
  }

  private close(): void {
    this.open = false;
  }
}
