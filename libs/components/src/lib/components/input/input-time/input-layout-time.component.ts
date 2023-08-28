import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Injector,
  Input,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmTime } from '../../../@core/date-time/time';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmDefaultProp, prizmPure } from '@prizm-ui/core';
import { PRIZM_FIXED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PRIZM_INPUT_TIME_OPTIONS, PrizmInputTimeOptions } from './input-time-options';
import { PRIZM_TIME_TEXTS } from '../../../tokens/i18n';
import { PrizmTimeMode } from '../../../types/time-mode';
import { prizmCreateTimeNgxMask } from '../../../@core/mask/create-time-mask';
import { PRIZM_STRICT_MATCHER } from '../../../constants/matcher';
import { PrizmTimeLike } from '../../../types/time-like';
import { prizmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PrizmDateButton } from '../../../types/date-button';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl, PrizmInputNgControl } from '../common';
import { prizmI18nInitWithKey } from '../../../services';

@Component({
  selector: `prizm-input-layout-time`,
  templateUrl: `./input-layout-time.component.html`,
  styleUrls: [`./input-layout-time.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ...prizmI18nInitWithKey(PRIZM_TIME_TEXTS, 'time'),
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputLayoutTimeComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputLayoutTimeComponent },
    PRIZM_FIXED_DROPDOWN_CONTROLLER_PROVIDER,
  ],
})
export class PrizmInputLayoutTimeComponent extends PrizmInputNgControl<PrizmTime | null> {
  readonly hasClearButton = true;
  readonly nativeElementType = 'input-layout-time';

  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  placeholder = '';

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmTime> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  items: readonly PrizmTime[] = new Array(24).fill(null).map((_, i) => new PrizmTime(i, 0, 0, 0));

  @Input()
  @prizmDefaultProp()
  itemSize: PrizmInputTimeOptions['itemSize'] = this.options.itemSize;

  @Input()
  @prizmDefaultProp()
  strict = false;

  @Input()
  @prizmDefaultProp()
  mode: PrizmInputTimeOptions['mode'] = this.options.mode;

  @Input()
  @prizmDefaultProp()
  extraButtonInjector: Injector;

  override readonly testId_ = 'ui_input_time';

  public open = false;
  public rightButtons$: BehaviorSubject<PrizmDateButton[]>;

  constructor(
    @Inject(PRIZM_TIME_TEXTS)
    private readonly timeTexts$: Observable<Record<PrizmTimeMode, string>>,
    injector: Injector,
    @Inject(PRIZM_INPUT_TIME_OPTIONS)
    private readonly options: PrizmInputTimeOptions
  ) {
    super(injector);
    this.extraButtonInjector = injector;
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
  }

  get filtered(): readonly PrizmTime[] {
    return this.filter(this.items, this.mode, this.computedSearch);
  }

  get textMaskOptions(): string {
    return this.calculateMask(this.mode);
  }

  get computedValue(): string {
    return this.value ? this.value.toString(this.mode) : this.nativeValue;
  }

  get computedSearch(): string {
    return this.computedValue.length !== this.mode.length ? this.computedValue : ``;
  }

  get nativeValue(): string {
    return this.nativeFocusableElement ? this.nativeFocusableElement.value : ``;
  }

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement ? (this.focusableElement.nativeElement as HTMLInputElement) : null;
  }

  public get focused(): boolean {
    return this.focusableElement?.nativeElement
      ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
      : false;
  }

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  set nativeValue(value: string) {
    if (!this.nativeFocusableElement) {
      return;
    }

    this.nativeFocusableElement.value = value;
  }

  @prizmPure
  public getFiller$(mode: PrizmTimeMode): Observable<string> {
    return this.timeTexts$.pipe(map(texts => texts[mode]));
  }

  public onValueChange(value: string): void {
    // this.open = !!this.items.length;

    const match = this.getMatch(value);

    if (match !== undefined) {
      this.updateValue(match);

      return;
    }

    if (!value || value.length !== this.mode.length) {
      if (!value) this.updateValue(null);
      return;
    }

    const time = PrizmTime.correctTime(PrizmTime.fromString(value));

    this.updateValue(this.strict ? this.findNearestTimeFromItems(time) : time);
  }

  public onArrowUp(event: Event): void {
    if (this.items.length) {
      return;
    }

    this.processArrow(event, 1);
  }

  public onArrowDown(event: Event): void {
    if (this.items.length) {
      return;
    }

    this.processArrow(event, -1);
  }

  public onMenuClick(item: PrizmTime): void {
    this.open = false;
    this.updateValue(item);
  }

  public onOpen(open: boolean): void {
    this.open = open;
    this.changeDetectorRef.markForCheck();
  }

  public override writeValue(value: PrizmTime | null): void {
    super.writeValue(value);
    this.nativeValue = value ? this.computedValue : ``;
  }

  @prizmPure
  private calculateMask(mode: PrizmTimeMode): string {
    return prizmCreateTimeNgxMask(mode, this.options.maxValues);
  }

  get stringValue(): string {
    return this.value?.toString() ?? '';
  }

  get interactive(): boolean {
    return !this.disabled;
  }

  @prizmPure
  private filter(items: readonly PrizmTime[], mode: PrizmTimeMode, search: string): readonly PrizmTime[] {
    return items.filter(item => item.toString(mode).includes(search));
  }

  private findNearestTimeFromItems(value: PrizmTime): PrizmTime | null {
    return this.items.reduce((previous, current) =>
      Math.abs(current.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds()) <
      Math.abs(previous.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds())
        ? current
        : previous
    );
  }

  private getMatch(value: string): PrizmTime | undefined {
    return this.items.find(item => PRIZM_STRICT_MATCHER(item, value));
  }

  private processArrow(event: Event, shift: -1 | 1): void {
    const { target } = event;

    // TODO: iframe warning
    if (/*this.readOnly ||*/ !(target instanceof HTMLInputElement)) {
      return;
    }

    const selectionStart = target.selectionStart || 0;

    this.shiftTime(this.calculateShift(selectionStart, shift));

    target.setSelectionRange(selectionStart, selectionStart);
    event.preventDefault();
  }

  private calculateShift(selectionStart: number, shift: number): PrizmTimeLike {
    if (selectionStart <= 2) {
      return { hours: shift };
    }

    if (selectionStart <= 5) {
      return { minutes: shift };
    }

    if (selectionStart <= 8) {
      return { seconds: shift };
    }

    return { ms: shift };
  }

  private shiftTime(shift: PrizmTimeLike): void {
    if (this.value === null) {
      return;
    }

    const increasedTime: PrizmTime = this.value.shift(shift);

    // Manual update so we can set caret position properly
    this.nativeValue = increasedTime.toString(this.mode);
    this.updateValue(increasedTime);
  }

  public safeOpenModal(): void {
    if (!this.open && !this.disabled) {
      this.open = true;
      this.changeDetectorRef.markForCheck();
    } else {
      this.open = false;
    }
  }

  public override clear(ev: MouseEvent): void {
    ev.stopImmediatePropagation();
    if (this.nativeFocusableElement) this.nativeFocusableElement.value = '';
    this.updateValue(null);
  }
}
