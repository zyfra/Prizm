import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  inject,
  Inject,
  Injector,
  Input,
  ViewChild,
} from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { BehaviorSubject } from 'rxjs';
import { PrizmYear } from '../../../@core/date-time/year';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PRIZM_INPUT_DATE_OPTIONS, PrizmInputDateOptions } from '../../../tokens/input-date-options';
import { PrizmDateButton } from '../../../types/date-button';
import { PrizmBooleanHandler } from '../../../types/handler';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl, PrizmInputNgControl } from '../common';
import { CommonModule } from '@angular/common';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';
import {
  PolymorphOutletDirective,
  PrizmLifecycleDirective,
  PrizmPreventDefaultDirective,
} from '../../../directives';
import { PrizmMaskModule } from '../../../modules';
import { PrizmInputTextModule } from '../input-text';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsCalendarBlank } from '@prizm-ui/icons/full/source';
import { PrizmCalendarYearComponent } from '../../calendar-year';

@Component({
  selector: `prizm-input-layout-year`,
  templateUrl: `./input-layout-year.component.html`,
  styleUrls: [`./input-layout-year.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputLayoutYearComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputLayoutYearComponent },
  ],
  standalone: true,
  imports: [
    CommonModule,
    PrizmCalendarYearComponent,
    PrizmDropdownHostComponent,
    PrizmPreventDefaultDirective,
    FormsModule,
    PrizmLifecycleDirective,
    PolymorphOutletDirective,
    PrizmMaskModule,
    PrizmInputTextModule,
  ],
})
export class PrizmInputLayoutYearComponent extends PrizmInputNgControl<PrizmYear | null> {
  readonly hasClearButton = true;
  readonly nativeElementType = 'input-number';
  override readonly testId_ = 'ui_input_year';

  @ViewChild('focusableElementRef', { read: ElementRef })
  public override readonly focusableElement?: ElementRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  public min: PrizmYear = this.options.min;

  @Input()
  @prizmDefaultProp()
  public extraButtonInjector: Injector = this.injector;

  @Input()
  @prizmDefaultProp()
  public placeholder = '';

  @Input()
  @prizmDefaultProp()
  public max: PrizmYear = this.options.max;

  @Input()
  @prizmDefaultProp()
  public disabledItemHandler: PrizmBooleanHandler<number> = PRIZM_ALWAYS_FALSE_HANDLER;
  public open = false;

  public rightButtons$!: BehaviorSubject<PrizmDateButton[]>;

  protected year = this.value;

  get interactive() {
    return !this.disabled;
  }

  @HostListener(`click`)
  public onClick(): void {
    this.open = !this.open;
  }

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(
    @Inject(PRIZM_INPUT_DATE_OPTIONS)
    private readonly options: PrizmInputDateOptions,
    @Inject(Injector) injector: Injector
  ) {
    super(injector);

    this.iconsFullRegistry.registerIcons(prizmIconsCalendarBlank);
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

  public onValueChange(value: number): void {
    const year = value ? new PrizmYear(this.getCorrectedYear(value)) : null;
    this.updateValue(year);
    this.onOpenChange(true);
  }

  public onYearClick(year: PrizmYear): void {
    this.updateValue(year);
    this.close();
  }

  public onOpenChange(open: boolean): void {
    this.open = open;
    this.changeDetectorRef.markForCheck();
  }

  private close(): void {
    this.open = false;
  }

  private getCorrectedYear(year: number): number {
    if (year < this.min.year) return this.min.year;

    if (year > this.max.year) return this.max.year;

    return year;
  }
}
