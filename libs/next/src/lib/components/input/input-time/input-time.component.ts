import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef, HostBinding,
  Inject,
  Injector,
  Input,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ZuiTime } from '../../../@core/date-time/time';
import { AbstractZuiNullableControl } from '../../../abstract/nullable-control';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { ZUI_FIXED_DROPDOWN_CONTROLLER_PROVIDER } from '../../../providers/specific-dropdown-controllers';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens/focusable-item-accessor';
import { PzmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { PzmBooleanHandler } from '../../../types/handler';
import { ZUI_INPUT_TIME_OPTIONS, ZuiInputTimeOptions } from './input-time-options';
import { ZUI_TIME_TEXTS } from '../../../tokens/i18n';
import { ZuiTimeMode } from '../../../types/time-mode';
import { pzmPure } from '../../../decorators/pure';
import { zuiCreateTimeNgxMask } from '../../../@core/mask/create-time-mask';
import { ZUI_STRICT_MATCHER } from '../../../constants/matcher';
import { ZuiTimeLike } from '../../../types/time-like';
import { pzmSetNativeFocused } from '../../../util/set-native-focused';
import { PzmInputSize } from '../common/models/zui-input.models';
import { pzmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { ZUI_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { ZuiDateButton } from '../../../types/date-button';
import { pzmIsNativeFocused } from '../../../util';

@Component({
    selector: `zui-input-time`,
    templateUrl: `./input-time.component.html`,
    styleUrls: [`./input-time.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: PZM_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => ZuiInputTimeComponent),
        },
        ZUI_FIXED_DROPDOWN_CONTROLLER_PROVIDER,
    ],
})
export class ZuiInputTimeComponent
    extends AbstractZuiNullableControl<ZuiTime>
    implements PzmFocusableElementAccessor
{
    @ViewChild('focusableElementRef', {read: ElementRef})
    public readonly focusableElement?: ElementRef<HTMLInputElement>;

    @Input()
    @pzmDefaultProp()
    placeholder = '';

    @Input()
    @pzmDefaultProp()
    label = 'Выберите время';

    @Input()
    @pzmDefaultProp()
    size: PzmInputSize = 'm';

    @Input()
    @pzmDefaultProp()
    outer = false;

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PzmBooleanHandler<ZuiTime> = PZM_ALWAYS_FALSE_HANDLER;

    @Input()
    @pzmDefaultProp()
    items: readonly ZuiTime[] = new Array(24).fill(null).map(
      (_, i) => new ZuiTime(i, 0, 0, 0)
    );

    @Input()
    @pzmDefaultProp()
    itemSize: ZuiInputTimeOptions['itemSize'] = this.options.itemSize;

    @Input()
    @pzmDefaultProp()
    strict = false;

    @Input()
    @pzmDefaultProp()
    mode: ZuiInputTimeOptions['mode'] = this.options.mode;

    @Input()
    @pzmDefaultProp()
    extraButtonInjector: Injector = this.injector;

    @HostBinding('attr.testId')
    readonly testId = 'pzm_input_time';

    public open = false;
    public rightButtons$: BehaviorSubject<ZuiDateButton[]>

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        private readonly cdr: ChangeDetectorRef,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ZUI_TIME_TEXTS)
        private readonly timeTexts$: Observable<Record<ZuiTimeMode, string>>,
        private readonly injector: Injector,
        @Inject(ZUI_INPUT_TIME_OPTIONS)
        private readonly options: ZuiInputTimeOptions,
    ) {
        super(control, changeDetectorRef);
    }

    public override ngOnInit(): void {
      super.ngOnInit();
      this.rightButtons$ = this.extraButtonInjector.get(ZUI_DATE_RIGHT_BUTTONS);
    }

    get filtered(): readonly ZuiTime[] {
        return this.filter(this.items, this.mode, this.computedSearch);
    }

    get textMaskOptions(): string {
        return this.calculateMask(
            this.mode,
        )
    }

    get computedValue(): string {
        return this.value ? this.value.toString(this.mode) : this.nativeValue;
    }

    get computedSearch(): string {
        return this.computedValue.length !== this.mode.length ? this.computedValue : ``;
    }

    get innerPseudoFocused(): boolean | null {
        if (this.pseudoFocused === false) {
            return false;
        }

        if (this.open || this.computedFocused) {
            return true;
        }

        return null;
    }

    get nativeValue(): string {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : ``;
    }


    public get nativeFocusableElement(): HTMLInputElement | null {
      return this.focusableElement ? this.focusableElement.nativeElement as HTMLInputElement : null;
    }

    public get focused(): boolean {
      return this.focusableElement?.nativeElement ? pzmIsNativeFocusedIn(this.focusableElement.nativeElement) : false;
    }

    // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
    set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    @pzmPure
    public getFiller$(mode: ZuiTimeMode): Observable<string> {
        return this.timeTexts$.pipe(map(texts => texts[mode]));
    }

    public onValueChange(value: string): void {
        this.open = !!this.items.length;

        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        const match = this.getMatch(value);

        if (match !== undefined) {
            this.updateValue(match);

            return;
        }

        if (!value || value.length !== this.mode.length) {
            if (!value) this.updateValue(null);
            return;
        }

        const time = ZuiTime.fromString(value);

        this.updateValue(this.strict ? this.findNearestTimeFromItems(time) : time);
    }

    public onFocused(focused: boolean): void {
        this.updateFocused(focused);

        if (
            focused ||
            this.value !== null ||
            this.nativeValue === `` ||
            this.mode === `HH:MM`
        ) {
            return;
        }

        const parsedTime = ZuiTime.fromString(this.nativeValue);

        this.updateValue(parsedTime);

        setTimeout(() => {
            if (this.nativeValue.endsWith(`.`) || this.nativeValue.endsWith(`:`)) {
                this.nativeValue = this.nativeValue.slice(0, -1);
            }
        });
    }

    public onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
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

    public onMenuClick(item: ZuiTime): void {
        this.open = false;
        this.updateValue(item);
    }

    public onOpen(open: boolean): void {
        this.open = open;
    }

    public override writeValue(value: ZuiTime | null): void {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : ``;
    }

    @pzmPure
    private calculateMask(mode: ZuiTimeMode): string {
        return zuiCreateTimeNgxMask(mode, this.options.maxValues);
    }

    get stringValue(): string {
      return this.value?.toString() ?? '';
    }

    @pzmPure
    private filter(
        items: readonly ZuiTime[],
        mode: ZuiTimeMode,
        search: string,
    ): readonly ZuiTime[] {
        return items.filter(item => item.toString(mode).includes(search));
    }

    private findNearestTimeFromItems(value: ZuiTime): ZuiTime | null {
        return this.items.reduce((previous, current) =>
            Math.abs(current.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds()) <
            Math.abs(previous.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds())
                ? current
                : previous,
        );
    }

    private getMatch(value: string): ZuiTime | undefined {
        return this.items.find(item => ZUI_STRICT_MATCHER(item, value));
    }

    private close(): void {
        this.open = false;
    }

    private processArrow(event: Event, shift: -1 | 1): void {
        const {target} = event;

        // TODO: iframe warning
        if (this.readOnly || !(target instanceof HTMLInputElement)) {
            return;
        }

        const selectionStart = target.selectionStart || 0;

        this.shiftTime(this.calculateShift(selectionStart, shift));

        target.setSelectionRange(selectionStart, selectionStart);
        event.preventDefault();
    }

    private calculateShift(selectionStart: number, shift: number): ZuiTimeLike {
        if (selectionStart <= 2) {
            return {hours: shift};
        }

        if (selectionStart <= 5) {
            return {minutes: shift};
        }

        if (selectionStart <= 8) {
            return {seconds: shift};
        }

        return {ms: shift};
    }

    private shiftTime(shift: ZuiTimeLike): void {
        if (this.value === null) {
            return;
        }

        const increasedTime: ZuiTime = this.value.shift(shift);

        // Manual update so we can set caret position properly
        this.nativeValue = increasedTime.toString(this.mode);
        this.updateValue(increasedTime);
    }

    private focusInput(preventScroll: boolean = false): void {
        if (this.nativeFocusableElement) {
            pzmSetNativeFocused(this.nativeFocusableElement, true, preventScroll);
            this.close();
        }
    }

    public safeOpenModal(): void {
      const inputElement = this.focusableElement.nativeElement;
      if (
        !this.open &&
        !this.disabled &&
        inputElement &&
        pzmIsNativeFocused(inputElement)
      ) {
        this.open = true;
        this.cdr.markForCheck();
      }
    }
}

