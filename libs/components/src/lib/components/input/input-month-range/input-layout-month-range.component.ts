import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Inject,
  Injector,
  Input,
  ViewChild,
} from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { PrizmMonthPipe } from '../../../pipes/month/month.pipe';
import { PRIZM_MONTH_FORMATTER_PROVIDER } from '../../../providers/month-formatter.provider';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmBooleanHandlerWithContext } from '../../../types/handler-with-context';
import { PrizmMonthContext } from '../../../@core/date-time/month-context';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_MONTH_FORMATTER } from '../../../tokens/month-formatter';
import { PrizmHandler } from '../../../types/handler';
import { PRIZM_INPUT_DATE_OPTIONS, PrizmInputDateOptions } from '../../../tokens/input-date-options';
import { PRIZM_CHAR_EN_DASH } from '../../../constants/unicode-chars';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';
import { prizmI18nInitWithKey } from '../../../services';
import { PRIZM_MONTHS } from '../../../tokens';
import { CommonModule } from '@angular/common';
import { PrizmLifecycleModule, PrizmPreventDefaultModule } from '../../../directives';
import { PrizmCalendarMonthModule } from '../../calendar-month';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host';
import { PrizmMapperPipeModule } from '../../table/pipes/mapper/mapper.module';
import { PrizmInputTextModule } from '../input-text';

@Component({
  selector: `prizm-input-layout-month-range`,
  templateUrl: `./input-layout-month-range.component.html`,
  styleUrls: [`./input-layout-month-range.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ...prizmI18nInitWithKey(PRIZM_MONTHS, 'months'),
    PRIZM_MONTH_FORMATTER_PROVIDER,
    PrizmMonthPipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputLayoutMonthRangeComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputLayoutMonthRangeComponent },
  ],
  standalone: true,
  imports: [
    CommonModule,
    PrizmLifecycleModule,
    PrizmCalendarMonthModule,
    PrizmDropdownHostModule,
    PrizmPreventDefaultModule,
    PrizmMapperPipeModule,
    PrizmInputTextModule,
    FormsModule,
  ],
})
export class PrizmInputLayoutMonthRangeComponent extends PrizmInputNgControl<PrizmMonthRange | null> {
  readonly nativeElementType = 'input-month-range';
  readonly hasClearButton = true;
  override readonly testId_ = 'ui_input_month_range';

  @ViewChild('focusableElementRef', { read: ElementRef })
  public override readonly focusableElement?: ElementRef<HTMLInputElement>;

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

  get interactive() {
    return !this.disabled;
  }

  constructor(
    @Inject(PRIZM_MONTH_FORMATTER)
    readonly formatter: PrizmHandler<PrizmMonth | null, Observable<string>>,
    @Inject(PRIZM_INPUT_DATE_OPTIONS)
    private readonly options: PrizmInputDateOptions,
    @Inject(Injector) injector: Injector
  ) {
    super(injector);
  }

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement ? (this.focusableElement.nativeElement as HTMLInputElement) : null;
  }

  get focused(): boolean {
    return this.focusableElement?.nativeElement
      ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
      : false;
  }

  public override get empty(): boolean {
    return !this.value || !(this.value instanceof PrizmMonthRange);
  }

  public computeValue(from: string | null, to: string | null): string {
    const formattedTo = from === to && this.focused ? `` : to;
    if (!from || !to) return '';
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
      this.updateValue(new PrizmMonthRange(month, month));

      return;
    }

    this.updateValue(PrizmMonthRange.sort(this.value.from, month));
    this.close();
    this.changeDetectorRef.markForCheck();
  }

  public onOpenChange(open: boolean): void {
    this.open = open;
    this.changeDetectorRef.markForCheck();
  }

  private close(): void {
    this.open = false;
  }
}
