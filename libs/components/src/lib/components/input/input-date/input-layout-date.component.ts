import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Injector,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PRIZM_INPUT_DATE_PROVIDERS } from './input-date.providers';
import { prizmDefaultProp } from '@prizm-ui/core';
import {
  PRIZM_DATE_FILLER_LENGTH,
  PRIZM_DATE_FORMAT,
  PRIZM_DATE_SEPARATOR,
  PRIZM_FIRST_DAY,
  PRIZM_LAST_DAY,
  PrizmDay,
  PrizmMonth,
} from '../../../@core/date-time';
import {
  PrizmBooleanHandler,
  PrizmContextWithImplicit,
  PrizmControlValueTransformer,
  PrizmDateMode,
} from '../../../types';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { PrizmDialogService } from '../../dialogs/dialog';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PrizmNamedDay } from '../../../@core/classes/named-day';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { PRIZM_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PRIZM_DATE_TEXTS } from '../../../tokens/i18n';
import { prizmIsNativeFocusedIn } from '../../../util';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PrizmDateButton } from '../../../types/date-button';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common';
import { prizmI18nInitWithKey } from '../../../services';

@Component({
  selector: `prizm-input-layout-date`,
  templateUrl: `./input-layout-date.component.html`,
  styleUrls: [`./input-layout-date.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'),
    ...PRIZM_INPUT_DATE_PROVIDERS,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputLayoutDateComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateComponent },
  ],
})
export class PrizmInputLayoutDateComponent extends PrizmInputNgControl<PrizmDay> {
  readonly nativeElementType = 'input-date';
  readonly hasClearButton = true;
  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  private month: PrizmMonth | null = null;

  public mask = prizmCreateDateNgxMask(this.dateFormat, this.dateSeparator);

  @Input()
  @prizmDefaultProp()
  min = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  placeholder = '';

  @Input()
  @prizmDefaultProp()
  max = PRIZM_LAST_DAY;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  markerHandler: PrizmMarkerHandler = PRIZM_DEFAULT_MARKER_HANDLER;

  @Input()
  @prizmDefaultProp()
  items: readonly PrizmNamedDay[] = [];

  @Input()
  @prizmDefaultProp()
  defaultActiveYearMonth = PrizmMonth.currentLocal();

  @Input()
  @prizmDefaultProp()
  extraButtonInjector: Injector;

  override readonly testId_ = 'ui_input_date';

  @HostBinding('style.width')
  readonly width = 'auto';

  public open = false;

  readonly type!: PrizmContextWithImplicit<unknown>;

  public rightButtons$: BehaviorSubject<PrizmDateButton[]>;

  constructor(
    @Inject(Injector) injector: Injector,
    @Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService,
    @Optional()
    @Inject(PRIZM_DATE_FORMAT)
    readonly dateFormat: PrizmDateMode,
    @Inject(PRIZM_DATE_SEPARATOR) readonly dateSeparator: string,
    @Inject(PRIZM_DATE_TEXTS)
    readonly dateTexts$: Observable<Record<PrizmDateMode, string>>,
    @Optional()
    @Inject(PRIZM_DATE_VALUE_TRANSFORMER)
    valueTransformer: PrizmControlValueTransformer<PrizmDay | null> | null
  ) {
    super(injector, valueTransformer);
    this.extraButtonInjector = injector;
  }

  public override ngOnInit(): void {
    super.ngOnInit();

    this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
  }

  get computedActiveYearMonth(): PrizmMonth {
    if (this.items[0] && this.value && this.value.daySame(this.items[0].day)) {
      return this.items[0].displayDay;
    }

    return this.month || this.value || this.defaultActiveYearMonth;
  }

  get canOpen(): boolean {
    return !this.disabled;
  }

  get stringValue(): string {
    return this.value?.toString() ?? '';
  }

  get computedMask(): string {
    return this.mask;
  }

  public onValueChange(value: string): void {
    if (!value || value.length !== PRIZM_DATE_FILLER_LENGTH) {
      if (!value) this.updateValue(null);
      return;
    }

    this.updateValue(
      value.length !== PRIZM_DATE_FILLER_LENGTH ? null : PrizmDay.normalizeParse(value, this.dateFormat)
    );
  }

  public onDayClick(value: PrizmDay): void {
    this.updateValue(value);
    this.open = false;
    this.changeDetectorRef.markForCheck();
  }

  public onMonthChange(month: PrizmMonth): void {
    this.month = month;
  }

  public onOpenChange(open: boolean): void {
    this.open = open;
    this.changeDetectorRef.markForCheck();
  }

  public override writeValue(value: PrizmDay | null): void {
    super.writeValue(value);
  }

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement ? (this.focusableElement.nativeElement as HTMLInputElement) : null;
  }

  public get focused(): boolean {
    return this.focusableElement?.nativeElement
      ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
      : false;
  }

  public override clear(ev: MouseEvent): void {
    ev.stopImmediatePropagation();
    this.updateValue(null);
    this.markAsTouched();
    this.changeDetectorRef.markForCheck();
  }
}
