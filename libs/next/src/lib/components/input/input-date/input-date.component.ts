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
import { PZM_INPUT_DATE_PROVIDERS } from './input-date.providers';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import {
  PZM_DATE_FILLER_LENGTH,
  PZM_DATE_FORMAT,
  PZM_DATE_SEPARATOR,
  PZM_FIRST_DAY,
  PZM_LAST_DAY,
  pzmChangeDateSeparator,
  PzmDay,
  PzmMonth,
} from '../../../@core/date-time';
import { PZM_IS_MOBILE } from '../../../tokens/is-mobile';
import {
  PzmBooleanHandler,
  PzmContextWithImplicit,
  PzmControlValueTransformer,
  PzmDateMode,
  PzmFocusableElementAccessor,
} from '../../../types';
import { pzmNullableSame } from '../../../util/common/nullable-same';
import { PzmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { PzmMarkerHandler } from '../../../types/marker-handler';
import { PzmDialogService } from '../../dialogs/dialog';
import { PZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PzmNamedDay } from '../../../@core/classes/named-day';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { pzmCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { AbstractPzmNullableControl } from '../../../abstract/nullable-control';
import { PZM_MOBILE_CALENDAR } from '../../../tokens/mobile-calendar';
import { PZM_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PZM_DATE_TEXTS } from '../../../tokens/i18n';
import { PzmInputSize } from '../common/models/pzm-input.models';
import { pzmIsNativeFocusedIn } from '../../../util';
import { PZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PzmDateButton } from '../../../types/date-button';


@Component({
    selector: `pzm-input-date`,
    templateUrl: `./input-date.component.html`,
    styleUrls: [`./input-date.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PZM_INPUT_DATE_PROVIDERS,
})
export class PzmInputDateComponent
    extends AbstractPzmNullableControl<PzmDay>
    implements PzmWithOptionalMinMax<PzmDay>, PzmFocusableElementAccessor
{
    @ViewChild('focusableElementRef', {read: ElementRef})
    public readonly focusableElement?: ElementRef<HTMLInputElement>;

    private month: PzmMonth | null = null;

    public mask = pzmCreateDateNgxMask(this.dateFormat, this.dateSeparator)

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
    items: readonly PzmNamedDay[] = [];

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
            pzmChangeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
        ),
    );
    public rightButtons$: BehaviorSubject<PzmDateButton[]>


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
        @Inject(PZM_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(PzmDialogService) private readonly dialogService: PzmDialogService,
        @Optional()
        @Inject(PZM_MOBILE_CALENDAR)
        private readonly mobileCalendar: Type<any> | null,
        @Inject(PZM_DATE_FORMAT) readonly dateFormat: PzmDateMode,
        @Inject(PZM_DATE_SEPARATOR) readonly dateSeparator: string,
        @Inject(PZM_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<PzmDateMode, string>>,
        @Optional()
        @Inject(PZM_DATE_VALUE_TRANSFORMER)
        override readonly valueTransformer: PzmControlValueTransformer<PzmDay | null> | null,
    ) {
        super(control, changeDetectorRef, valueTransformer);
    }

    public override ngOnInit(): void {
      super.ngOnInit();
      this.rightButtons$ = this.extraButtonInjector.get(PZM_DATE_RIGHT_BUTTONS);
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

        if (!value || (value.length !== PZM_DATE_FILLER_LENGTH)) {
          if (!value) this.updateValue(null);
          return;
        }

        this.updateValue(
            value.length !== PZM_DATE_FILLER_LENGTH
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
