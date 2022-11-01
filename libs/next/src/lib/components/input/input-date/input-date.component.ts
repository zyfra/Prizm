import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Injector,
  Input,
  Optional,
  Self,
  Type,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ZUI_INPUT_DATE_PROVIDERS } from './input-date.providers';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import {
  ZUI_DATE_FILLER_LENGTH,
  ZUI_DATE_FORMAT,
  ZUI_DATE_SEPARATOR,
  PZM_FIRST_DAY,
  PZM_LAST_DAY,
  zuiChangeDateSeparator,
  PzmDay,
  PzmMonth,
} from '../../../@core/date-time';
import { ZUI_IS_MOBILE } from '../../../tokens/is-mobile';
import {
  PzmBooleanHandler,
  PzmContextWithImplicit,
  ZuiControlValueTransformer,
  ZuiDateMode,
  PzmFocusableElementAccessor,
} from '../../../types';
import { pzmNullableSame } from '../../../util/common/nullable-same';
import { PzmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { PzmMarkerHandler } from '../../../types/marker-handler';
import { ZuiDialogService } from '../../dialogs/dialog';
import { PZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { ZuiNamedDay } from '../../../@core/classes/named-day';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { zuiCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { AbstractZuiNullableControl } from '../../../abstract/nullable-control';
import { ZUI_MOBILE_CALENDAR } from '../../../tokens/mobile-calendar';
import { ZUI_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { ZUI_DATE_TEXTS } from '../../../tokens/i18n';
import { PzmInputSize } from '../common/models/zui-input.models';
import { pzmIsNativeFocusedIn } from '../../../util';
import { ZUI_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { ZuiDateButton } from '../../../types/date-button';


@Component({
    selector: `zui-input-date`,
    templateUrl: `./input-date.component.html`,
    styleUrls: [`./input-date.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: ZUI_INPUT_DATE_PROVIDERS,
})
export class ZuiInputDateComponent
    extends AbstractZuiNullableControl<PzmDay>
    implements PzmWithOptionalMinMax<PzmDay>, PzmFocusableElementAccessor
{
    @ViewChild('focusableElementRef', {read: ElementRef})
    public readonly focusableElement?: ElementRef<HTMLInputElement>;

    private month: PzmMonth | null = null;

    public mask = zuiCreateDateNgxMask(this.dateFormat, this.dateSeparator)

    @Input()
    @pzmDefaultProp()
    min = PZM_FIRST_DAY;

    @Input()
    @pzmDefaultProp()
    placeholder = '';

    @Input()
    @pzmDefaultProp()
    max = PZM_LAST_DAY;

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PzmBooleanHandler<PzmDay> = PZM_ALWAYS_FALSE_HANDLER;

    @Input()
    @pzmDefaultProp()
    markerHandler: PzmMarkerHandler = PZM_DEFAULT_MARKER_HANDLER;

    @Input()
    @pzmDefaultProp()
    items: readonly ZuiNamedDay[] = [];

    @Input()
    @pzmDefaultProp()
    defaultActiveYearMonth = PzmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    label = 'Выберите дату';

    @Input()
    @pzmDefaultProp()
    size: PzmInputSize = 'm';

    @Input()
    @pzmDefaultProp()
    outer = false;

    @Input()
    @pzmDefaultProp()
    extraButtonInjector: Injector = this.injector;

    @HostBinding('attr.testId')
    readonly testId = 'pzm_input_date';

    public open = false;

    readonly type!: PzmContextWithImplicit<unknown>;

    readonly filler$: Observable<string> = this.dateTexts$.pipe(
        map(dateTexts =>
            zuiChangeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
        ),
    );
    public rightButtons$: BehaviorSubject<ZuiDateButton[]>


    @HostListener(`click`)
    public onClick(): void {
      if (!this.isMobile) {
        this.open = !this.open;
      }
    }

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(Injector) private readonly injector: Injector,
        @Inject(ZUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(ZuiDialogService) private readonly dialogService: ZuiDialogService,
        @Optional()
        @Inject(ZUI_MOBILE_CALENDAR)
        private readonly mobileCalendar: Type<any> | null,
        @Inject(ZUI_DATE_FORMAT) readonly dateFormat: ZuiDateMode,
        @Inject(ZUI_DATE_SEPARATOR) readonly dateSeparator: string,
        @Inject(ZUI_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<ZuiDateMode, string>>,
        @Optional()
        @Inject(ZUI_DATE_VALUE_TRANSFORMER)
        override readonly valueTransformer: ZuiControlValueTransformer<PzmDay | null> | null,
    ) {
        super(control, changeDetectorRef, valueTransformer);
    }

    public override ngOnInit(): void {
      super.ngOnInit();
      this.rightButtons$ = this.extraButtonInjector.get(ZUI_DATE_RIGHT_BUTTONS);
    }

    get computedMobile(): boolean {
        return this.isMobile && !!this.mobileCalendar;
    }

    get computedActiveYearMonth(): PzmMonth {
        if (this.items[0] && this.value && this.value.daySame(this.items[0].day)) {
            return this.items[0].displayDay;
        }

        return this.month || this.value || this.defaultActiveYearMonth;
    }

    get canOpen(): boolean {
        return this.interactive && !this.computedMobile;
    }

    get stringValue(): string {
      return this.value?.toString() ?? '';
    }

    get computedMask(): string {
      return this.mask;
    }

    public onValueChange(value: string): void {
        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        // if (value == null) {
        //     this.onOpenChange(true);
        // }

        if (!value || (value.length !== ZUI_DATE_FILLER_LENGTH)) {
          if (!value) this.updateValue(null);
          return;
        }

        this.updateValue(
            value.length !== ZUI_DATE_FILLER_LENGTH
                ? null
                : PzmDay.normalizeParse(value, this.dateFormat),
        );
    }

    public onDayClick(value: PzmDay): void {
        this.updateValue(value);
        this.open = false;
    }

    public onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    public onMonthChange(month: PzmMonth): void {
        this.month = month;
    }

    public onOpenChange(open: boolean): void {
        this.open = open;
    }

    public onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    public override writeValue(value: PzmDay | null): void {
        super.writeValue(value);
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
      return this.focusableElement ? this.focusableElement.nativeElement as HTMLInputElement : null;
    }

    public get focused(): boolean {
      return this.focusableElement?.nativeElement ? pzmIsNativeFocusedIn(this.focusableElement.nativeElement) : false;
    }

    protected override valueIdenticalComparator(
        oldValue: PzmDay | null,
        newValue: PzmDay | null,
    ): boolean {
        return pzmNullableSame(oldValue, newValue, (a, b) => a.daySame(b));
    }
}
