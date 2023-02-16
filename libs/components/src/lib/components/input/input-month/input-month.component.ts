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
import { prizmDefaultProp } from '@prizm-ui/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmYear } from '../../../@core/date-time/year';
import { prizmAsControl } from '../../../abstract/control';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PrizmMonthPipe } from '../../../pipes/month/month.pipe';
import { PRIZM_MONTH_FORMATTER_PROVIDER } from '../../../providers/month-formatter.provider';
import { prizmAsFocusableItemAccessor } from '../../../tokens/focusable-item-accessor';
import { PRIZM_INPUT_DATE_OPTIONS, PrizmInputDateOptions } from '../../../tokens/input-date-options';
import { PRIZM_MONTH_FORMATTER } from '../../../tokens/month-formatter';
import { PrizmDateButton } from '../../../types/date-button';
import { PrizmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { PrizmBooleanHandler, PrizmHandler } from '../../../types/handler';
import { PrizmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { PrizmInputSize } from '../common/models/prizm-input.models';

@Component({
  selector: `prizm-input-month`,
  templateUrl: `./input-month.component.html`,
  styleUrls: [`./input-month.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    prizmAsFocusableItemAccessor(PrizmInputMonthComponent),
    prizmAsControl(PrizmInputMonthComponent),
    PRIZM_MONTH_FORMATTER_PROVIDER,
    PrizmMonthPipe,
  ],
})
export class PrizmInputMonthComponent
  extends AbstractPrizmNullableControl<PrizmMonth>
  implements PrizmWithOptionalMinMax<PrizmMonth>, PrizmFocusableElementAccessor
{
  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  public min: PrizmMonth = this.options.min;

  @Input()
  @prizmDefaultProp()
  public outer = false;

  @Input()
  @prizmDefaultProp()
  public extraButtonInjector: Injector = this.injector;

  @Input()
  @prizmDefaultProp()
  public label = 'Выберите месяц';

  @Input()
  @prizmDefaultProp()
  public size: PrizmInputSize = 'm';

  @Input()
  @prizmDefaultProp()
  public placeholder = '';

  @Input()
  @prizmDefaultProp()
  public max: PrizmMonth = this.options.max;

  @Input()
  @prizmDefaultProp()
  public disabledItemHandler: PrizmBooleanHandler<PrizmMonth> = PRIZM_ALWAYS_FALSE_HANDLER;
  public open = false;

  public activeYear: PrizmYear = this.value || PrizmDay.currentLocal();

  public rightButtons$: BehaviorSubject<PrizmDateButton[]>;

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

  public onValueChange(value: string): void {
    if (value) {
      return;
    }

    this.updateValue(null);
    this.onOpenChange(true);
  }

  public onMonthClick(month: PrizmMonth): void {
    this.updateValue(month);
    this.close();
  }

  public onFocused(focused: boolean): void {
    this.updateFocused(focused);
  }

  public onOpenChange(open: boolean): void {
    if (open && this.value) {
      this.activeYear = this.value;
    }
    this.open = open;
  }

  public override setDisabledState(): void {
    super.setDisabledState();
    this.close();
  }

  private close(): void {
    // this.open = false;
  }
}
