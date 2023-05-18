import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Inject,
  Injector,
  Input,
  ViewChild,
} from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmYear } from '../../../@core/date-time/year';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PrizmMonthPipe } from '../../../pipes/month/month.pipe';
import { PRIZM_MONTH_FORMATTER_PROVIDER } from '../../../providers/month-formatter.provider';
import { PRIZM_INPUT_DATE_OPTIONS, PrizmInputDateOptions } from '../../../tokens/input-date-options';
import { PRIZM_MONTH_FORMATTER } from '../../../tokens/month-formatter';
import { PrizmDateButton } from '../../../types/date-button';
import { PrizmBooleanHandler, PrizmHandler } from '../../../types/handler';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { PrizmInputSize } from '../common/models/prizm-input.models';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl, PrizmInputNgControl } from '../common';

@Component({
  selector: `prizm-input-layout-month`,
  templateUrl: `./input-layout-month.component.html`,
  styleUrls: [`./input-layout-month.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PRIZM_MONTH_FORMATTER_PROVIDER,
    PrizmMonthPipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputLayoutMonthComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputLayoutMonthComponent },
  ],
})
export class PrizmInputLayoutMonthComponent extends PrizmInputNgControl<PrizmMonth> {
  readonly hasClearButton = true;
  readonly nativeElementType = 'input-month';

  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  public min: PrizmMonth = this.options.min;

  @Input()
  @prizmDefaultProp()
  public extraButtonInjector: Injector = this.injector;

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

  get interactive() {
    return !this.disabled;
  }

  @HostListener(`click`)
  public onClick(): void {
    this.open = !this.open;
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

  public onOpenChange(open: boolean): void {
    if (open && this.value) {
      this.activeYear = this.value;
    }
    this.open = open;
    this.changeDetectorRef.markForCheck();
  }

  private close(): void {
    this.open = false;
  }
}
