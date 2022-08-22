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
  Type,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ZUI_INPUT_DATE_PROVIDERS } from './input-date.providers';
import { zuiDefaultProp } from '../../../decorators/default-prop';
import {
  ZUI_DATE_FILLER_LENGTH,
  ZUI_DATE_FORMAT, ZUI_DATE_RANGE_FILLER_LENGTH,
  ZUI_DATE_SEPARATOR,
  ZUI_FIRST_DAY,
  ZUI_LAST_DAY,
  zuiChangeDateSeparator,
  ZuiDay,
  ZuiMonth,
} from '../../../@core/date-time';
import { ZUI_IS_MOBILE } from '../../../tokens/is-mobile';
import {
  ZuiBooleanHandler,
  ZuiContextWithImplicit,
  ZuiControlValueTransformer,
  ZuiDateMode,
  ZuiFocusableElementAccessor,
} from '../../../types';
import { zuiNullableSame } from '../../../util/common/nullable-same';
import { ZuiWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { ZuiMarkerHandler } from '../../../types/marker-handler';
import { ZuiDialogService } from '../../dialogs/dialog';
import { ZUI_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { ZuiNamedDay } from '../../../@core/classes/named-day';
import { ZUI_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { zuiCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { AbstractZuiNullableControl } from '../../../abstract/nullable-control';
import { ZuiActiveZoneDirective } from '../../../directives/active-zone/active-zone.directive';
import { ZUI_MOBILE_CALENDAR } from '../../../tokens/mobile-calendar';
import { ZUI_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { ZUI_DATE_TEXTS } from '../../../tokens/i18n';
import { ZuiInputSize } from '../common/models/zui-input.models';
import { zuiIsNativeFocusedIn } from '../../../util';
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
    extends AbstractZuiNullableControl<ZuiDay>
    implements ZuiWithOptionalMinMax<ZuiDay>, ZuiFocusableElementAccessor
{
    @ViewChild('focusableElementRef', {read: ElementRef})
    public readonly focusableElement?: ElementRef<HTMLInputElement>;

    private month: ZuiMonth | null = null;

    public mask = zuiCreateDateNgxMask(this.dateFormat, this.dateSeparator)

    @Input()
    @zuiDefaultProp()
    min = ZUI_FIRST_DAY;

    @Input()
    @zuiDefaultProp()
    placeholder = '';

    @Input()
    @zuiDefaultProp()
    max = ZUI_LAST_DAY;

    @Input()
    @zuiDefaultProp()
    disabledItemHandler: ZuiBooleanHandler<ZuiDay> = ZUI_ALWAYS_FALSE_HANDLER;

    @Input()
    @zuiDefaultProp()
    markerHandler: ZuiMarkerHandler = ZUI_DEFAULT_MARKER_HANDLER;

    @Input()
    @zuiDefaultProp()
    items: readonly ZuiNamedDay[] = [];

    @Input()
    @zuiDefaultProp()
    defaultActiveYearMonth = ZuiMonth.currentLocal();

    @Input()
    @zuiDefaultProp()
    label = 'Выберите дату';

    @Input()
    @zuiDefaultProp()
    size: ZuiInputSize = 'm';

    @Input()
    @zuiDefaultProp()
    outer = false;

    @Input()
    @zuiDefaultProp()
    extraButtonInjector: Injector = this.injector;

    public open = false;

    readonly type!: ZuiContextWithImplicit<ZuiActiveZoneDirective>;

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
        override readonly valueTransformer: ZuiControlValueTransformer<ZuiDay | null> | null,
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

    get computedActiveYearMonth(): ZuiMonth {
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
                : ZuiDay.normalizeParse(value, this.dateFormat),
        );
    }

    public onDayClick(value: ZuiDay): void {
        this.updateValue(value);
        this.open = false;
    }

    public onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    public onMonthChange(month: ZuiMonth): void {
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

    public override writeValue(value: ZuiDay | null): void {
        super.writeValue(value);
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
      return this.focusableElement ? this.focusableElement.nativeElement as HTMLInputElement : null;
    }

    public get focused(): boolean {
      return this.focusableElement?.nativeElement ? zuiIsNativeFocusedIn(this.focusableElement.nativeElement) : false;
    }

    protected override valueIdenticalComparator(
        oldValue: ZuiDay | null,
        newValue: ZuiDay | null,
    ): boolean {
        return zuiNullableSame(oldValue, newValue, (a, b) => a.daySame(b));
    }
}
