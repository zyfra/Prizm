import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output, } from '@angular/core';
import { PrizmDestroyService, PrizmLetDirective } from '@prizm-ui/helpers';
import { UntypedFormControl } from '@angular/forms';
import { PrizmCronService, prizmI18nInitWithKey } from '../../services';
import { distinctUntilChanged, filter, first, map, skip, startWith, takeUntil, tap } from 'rxjs/operators';
import { PrizmCronUiSecondState } from './cron-ui-second.state';
import { PrizmCronUiMinuteState } from './cron-ui-minute.state';
import { PrizmCronUiHourState } from './cron-ui-hour.state';
import { PrizmCronUiMonthState } from './cron-ui-month.state';
import { PrizmCronUiYearState } from './cron-ui-year.state';
import { prizmIsTextOverflow } from '../../util';
import { PrizmCronUiDayState } from './cron-ui-day.state';
import { prizmDefaultProp } from '@prizm-ui/core';
import { combineLatest, concat, Observable, timer } from 'rxjs';
import { PRIZM_LANGUAGE } from '@prizm-ui/i18n';
import { prizmCronHRToString } from '../cron-human-readable/human-readable/crons-i18n';
import { PRIZM_CRON } from '../../tokens';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { PrizmCronMonthPipe } from './pipes/cron-month.pipe';
import { PrizmCronWeekPipe } from './pipes/cron-week.pipe';
import { PrizmCronInnerModule } from './cron-inner.module';
import { PrizmCronHumanReadablePipe } from '../cron-human-readable';
import * as i0 from "@angular/core";
import * as i1 from "../../services";
import * as i2 from "@prizm-ui/helpers";
import * as i3 from "./cron-ui-second.state";
import * as i4 from "./cron-ui-hour.state";
import * as i5 from "./cron-ui-year.state";
import * as i6 from "./cron-ui-month.state";
import * as i7 from "./cron-ui-minute.state";
import * as i8 from "./cron-ui-day.state";
import * as i9 from "@angular/common";
import * as i10 from "../input/common/input-hint/input-hint.directive";
import * as i11 from "../input/common/input-layout/input-layout.component";
import * as i12 from "../input/common/input-icon-button/input-icon-button.component";
import * as i13 from "@angular/forms";
import * as i14 from "../../directives/hint/hint.directive";
import * as i15 from "../input/input-date-time/input-layout-date-time.component";
import * as i16 from "../input/input-text/input-text.component";
import * as i17 from "../toggle/toggle.component";
import * as i18 from "../switcher/switcher.component";
import * as i19 from "../scrollbar/scrollbar.component";
import * as i20 from "./components/hour/hour.component";
import * as i21 from "./components/year/year.component";
import * as i22 from "./components/day/day.component";
import * as i23 from "./components/month/month.component";
import * as i24 from "./components/minute/minute.component";
import * as i25 from "./components/second/second.component";
import * as i26 from "../button/button.component";
import * as i27 from "rxjs";
export class PrizmCronComponent extends PrizmAbstractTestId {
    set value(value) {
        if (!value)
            return;
        this.cron.updateWith(value);
    }
    get value() {
        return this.cron.valueAsString;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    set period(period) {
        if (this.indefinitelyControl.value !== period.indefinitely)
            this.indefinitelyControl.setValue(period.indefinitely);
        if (this.startDateControl.value !== period.start)
            this.startDateControl.setValue(period.start);
        if (this.endDateControl.value !== period.end)
            this.endDateControl.setValue(period.end);
    }
    get period() {
        return {
            indefinitely: this.indefinitelyControl.value,
            start: this.startDateControl.value,
            end: this.indefinitelyControl.value ? null : this.endDateControl.value,
        };
    }
    set selected(selected) {
        this.selectedSwitcherIdx = this.switchers.findIndex(i => i.id === selected);
    }
    set tabs(tabs) {
        this.switchers = this.switchers.map(i => {
            i.hide = !tabs.includes(i.id);
            return i;
        });
        if (tabs.length && !tabs.includes(this.selected)) {
            this.selectedChange.emit((this.selected = tabs[0]));
        }
    }
    constructor(language$, cron, cronI18n$, destroy$, cronUiSecondState, cronUiHourState, cronUiYearState, cronUiMonthState, cronUiMinuteState, cronUiDayState) {
        super();
        this.language$ = language$;
        this.cron = cron;
        this.cronI18n$ = cronI18n$;
        this.destroy$ = destroy$;
        this.cronUiSecondState = cronUiSecondState;
        this.cronUiHourState = cronUiHourState;
        this.cronUiYearState = cronUiYearState;
        this.cronUiMonthState = cronUiMonthState;
        this.cronUiMinuteState = cronUiMinuteState;
        this.cronUiDayState = cronUiDayState;
        this._disabled = false;
        this.autoSubmit = false;
        this.hidePeriod = false;
        this.hideResult = false;
        this.showHumanReadable = false;
        this.resetButton = false;
        this.testId_ = 'ui_cron';
        this.cronLanguage$ = this.language$.pipe(map(lang => {
            return lang.shortName;
        }));
        this.humanReadableStr$ = combineLatest([this.cronLanguage$, this.cron.valueAsString$]).pipe(map(([lang, val]) => {
            return prizmCronHRToString(val, {
                locale: lang,
            });
        }));
        this.valueChange = new EventEmitter();
        this.periodChange = new EventEmitter();
        this.selectedChange = new EventEmitter();
        this.specifiedList = null;
        this.switchers = [
            {
                title: 'Секунды',
                id: 'second',
            },
            {
                title: 'Минуты',
                id: 'minute',
            },
            {
                title: 'Часы',
                id: 'hour',
            },
            {
                title: 'Дни',
                id: 'day',
            },
            {
                title: 'Месяцы',
                id: 'month',
            },
            {
                title: 'Годы',
                id: 'year',
            },
        ];
        this.value$ = this.cron.value$;
        this.valueAsString$ = this.cron.valueAsString$;
        this.startDateControl = new UntypedFormControl();
        this.endDateControl = new UntypedFormControl();
        this.indefinitelyControl = new UntypedFormControl(false);
        this.indefinitely = false;
        this.selectedSwitcherIdx = 0;
        this.prizmIsTextOverflow = prizmIsTextOverflow;
    }
    ngOnInit() {
        this.initAutoSubmiter();
        this.cronUiSecondState.init();
        this.cronUiHourState.init();
        this.cronUiDayState.init();
        this.cronUiMonthState.init();
        this.cronUiYearState.init();
        this.cronUiMinuteState.init();
        this.initEndDateStateChanger();
        this.saveInitialValue();
    }
    endDateStateCorrector() {
        if (this.indefinitelyControl.value)
            this.endDateControl.disable();
        else
            this.endDateControl.enable();
    }
    initEndDateStateChanger() {
        concat(timer(0).pipe(map(() => this.indefinitelyControl.value)), this.indefinitelyControl.valueChanges)
            .pipe(tap(() => this.endDateStateCorrector()), takeUntil(this.destroy$))
            .subscribe();
    }
    emitPeriod() {
        if (this.hidePeriod)
            return;
        this.periodChange.emit(this.period);
    }
    saveInitialValue() {
        this.initialValue = this.cron.valueAsString;
    }
    initAutoSubmiter() {
        this.cron.valueAsString$
            .pipe(filter(() => this.autoSubmit && !this.disabled), distinctUntilChanged(), tap(val => {
            this.valueChange.emit(val);
        }), takeUntil(this.destroy$))
            .subscribe();
        combineLatest([
            this.startDateControl.valueChanges.pipe(startWith(this.startDateControl.value), distinctUntilChanged()),
            this.endDateControl.valueChanges.pipe(startWith(this.endDateControl.value), distinctUntilChanged()),
            this.indefinitelyControl.valueChanges.pipe(startWith(this.indefinitelyControl.value), distinctUntilChanged()),
        ])
            .pipe(skip(1), filter(() => this.autoSubmit && !this.disabled), tap(controls => {
            this.emitPeriod();
        }), takeUntil(this.destroy$))
            .subscribe();
    }
    emit(cronValue) {
        if (this.disabled)
            return;
        this.valueChange.emit(cronValue);
        this.emitPeriod();
        this.saveInitialValue();
    }
    submit() {
        this.cron.valueAsString$
            .pipe(tap(val => {
            this.emit(val);
        }), first(), takeUntil(this.destroy$))
            .subscribe();
    }
    reset() {
        this.value = this.initialValue;
    }
    copy() {
        // TODO safe with injection
        navigator.clipboard.writeText(this.cron.valueAsString);
    }
    copyHumanReadable() {
        this.humanReadableStr$
            .pipe(first(), tap(humanReadableStr => {
            navigator.clipboard.writeText(humanReadableStr);
        }))
            .subscribe();
    }
    indexChanged(index) {
        const selected = this.switchers.find((_, i) => i === index);
        this.selectedChange.emit((this.selected = selected?.id));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronComponent, deps: [{ token: PRIZM_LANGUAGE }, { token: i1.PrizmCronService }, { token: PRIZM_CRON }, { token: i2.PrizmDestroyService }, { token: i3.PrizmCronUiSecondState }, { token: i4.PrizmCronUiHourState }, { token: i5.PrizmCronUiYearState }, { token: i6.PrizmCronUiMonthState }, { token: i7.PrizmCronUiMinuteState }, { token: i8.PrizmCronUiDayState }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmCronComponent, isStandalone: true, selector: "prizm-cron", inputs: { value: "value", disabled: "disabled", autoSubmit: "autoSubmit", hidePeriod: "hidePeriod", hideResult: "hideResult", showHumanReadable: "showHumanReadable", resetButton: "resetButton", period: "period", selected: "selected", specifiedList: "specifiedList", tabs: "tabs" }, outputs: { valueChange: "valueChange", periodChange: "periodChange", selectedChange: "selectedChange" }, providers: [
            PrizmDestroyService,
            PrizmCronService,
            PrizmLetDirective,
            PrizmCronUiSecondState,
            PrizmCronUiMonthState,
            PrizmCronUiHourState,
            PrizmCronUiDayState,
            PrizmCronUiYearState,
            PrizmCronUiMinuteState,
            ...prizmI18nInitWithKey(PRIZM_CRON, 'cron'),
        ], exportAs: ["prizmCron"], usesInheritance: true, ngImport: i0, template: "<div class=\"block\">\n  <div class=\"title py-none inner-block small-padding\">\n    <span class=\"prizm-font-title-h4\">\n      {{ cronI18n$ | async | prizmPluck : ['title'] }}\n    </span>\n    <div class=\"submit-block\" *ngIf=\"!hideResult || !autoSubmit\">\n      <ng-container *ngIf=\"!hideResult\">\n        <prizm-input-layout\n          *prizmLet=\"valueAsString$ | async as valueStr\"\n          [border]=\"false\"\n          [label]=\"null\"\n          [outer]=\"true\"\n          [forceClear]=\"false\"\n          size=\"m\"\n        >\n          <input\n            #elem\n            [prizmHint]=\"valueStr\"\n            [readonly]=\"true\"\n            [prizmHintCanShow]=\"prizmIsTextOverflow(elem.elementRef.nativeElement)\"\n            [ngModel]=\"valueStr\"\n            [ngModelOptions]=\"{ standalone: true }\"\n            prizmInput\n            prizmHintDirection=\"b\"\n          />\n\n          <ng-container prizm-input-right>\n            <button [interactive]=\"true\" (click)=\"copy()\" prizmInputIconButton=\"editor-copy\"></button>\n          </ng-container>\n        </prizm-input-layout>\n      </ng-container>\n      <button *ngIf=\"resetButton\" (click)=\"reset()\" prizmButton size=\"m\">\n        {{ cronI18n$ | async | prizmPluck : ['resetText'] }}\n      </button>\n      <button *ngIf=\"!autoSubmit\" [disabled]=\"disabled\" (click)=\"submit()\" prizmButton size=\"m\">\n        {{ cronI18n$ | async | prizmPluck : ['submitText'] }}\n      </button>\n    </div>\n  </div>\n\n  <div class=\"human-readable-block inner-block\" *ngIf=\"showHumanReadable\">\n    <prizm-input-layout\n      *prizmLet=\"valueAsString$ | async as valueStr\"\n      [border]=\"false\"\n      [label]=\"null\"\n      [outer]=\"true\"\n      [forceClear]=\"false\"\n      size=\"m\"\n    >\n      <input\n        #humarReadableElem\n        *prizmLet=\"$any(valueAsString$ | async) | prizmCronHumanReadable as humanReadableStr\"\n        [prizmHint]=\"humanReadableStr\"\n        [readonly]=\"true\"\n        [prizmHintCanShow]=\"prizmIsTextOverflow(humarReadableElem.elementRef.nativeElement)\"\n        [ngModel]=\"humanReadableStr\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        prizmInput\n        prizmHintDirection=\"b\"\n      />\n\n      <ng-container prizm-input-right>\n        <button\n          [interactive]=\"true\"\n          (click)=\"copyHumanReadable()\"\n          prizmInputIconButton=\"editor-copy\"\n        ></button>\n      </ng-container>\n    </prizm-input-layout>\n  </div>\n\n  <div class=\"inner-block border-bottom\">\n    <prizm-switcher\n      [fullWidth]=\"true\"\n      [selectedSwitcherIdx]=\"selectedSwitcherIdx\"\n      [switchers]=\"switchers\"\n      (selectedSwitcherIdxChange)=\"indexChanged($event)\"\n    >\n    </prizm-switcher>\n  </div>\n\n  <div class=\"inner-block date-period border-bottom\" *ngIf=\"!hidePeriod\">\n    <div class=\"date-block\">\n      <prizm-input-layout [label]=\"cronI18n$ | async | prizmPluck : ['startDateLabel']\" size=\"m\">\n        <prizm-input-layout-date-time\n          [formControl]=\"startDateControl\"\n          [max]=\"endDateControl.value ?? undefined\"\n        >\n        </prizm-input-layout-date-time>\n      </prizm-input-layout>\n\n      <prizm-input-layout [label]=\"cronI18n$ | async | prizmPluck : ['endDateLabel']\" size=\"m\">\n        <prizm-input-layout-date-time\n          [min]=\"startDateControl.value ?? undefined\"\n          [disabled]=\"indefinitely\"\n          [formControl]=\"endDateControl\"\n        >\n        </prizm-input-layout-date-time>\n      </prizm-input-layout>\n    </div>\n    <div class=\"date-footer\">\n      <div class=\"indefinitely-toggle\">\n        <prizm-toggle [formControl]=\"indefinitelyControl\" size=\"m\"> </prizm-toggle>\n        {{ cronI18n$ | async | prizmPluck : ['indefinitelyLabel'] }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"sub-pages\" [ngSwitch]=\"selectedSwitcherIdx\">\n    <prizm-scrollbar>\n      <prizm-cron-second *ngSwitchCase=\"0\" [specifiedList]=\"specifiedList?.second ?? []\"></prizm-cron-second>\n      <prizm-cron-minute *ngSwitchCase=\"1\" [specifiedList]=\"specifiedList?.minute ?? []\"></prizm-cron-minute>\n      <prizm-cron-hour *ngSwitchCase=\"2\" [specifiedList]=\"specifiedList?.hour ?? []\"></prizm-cron-hour>\n      <prizm-cron-day *ngSwitchCase=\"3\" [specifiedList]=\"specifiedList?.day ?? []\"></prizm-cron-day>\n      <prizm-cron-month *ngSwitchCase=\"4\" [specifiedList]=\"specifiedList?.month ?? []\"></prizm-cron-month>\n      <prizm-cron-year *ngSwitchCase=\"5\" [specifiedList]=\"specifiedList?.year ?? []\"></prizm-cron-year>\n    </prizm-scrollbar>\n  </div>\n</div>\n", styles: [":host{color:var(--prizm-v3-text-icon-secondary)}.block{border:1px solid var(--prizm-v3-background-stroke);border-radius:2px;padding:6px 0;width:var(--prizm-cron-width, 642px);min-height:var(--prizm-cron-min-height, 952px)}.inner-block{padding:16px;display:flex}.inner-block.date-period{flex-direction:column;gap:16px}.inner-block.date-period .date-block{display:grid;gap:8px;grid-template-columns:1fr 1fr}.inner-block.date-period .indefinitely-toggle{display:flex;align-items:center;gap:10px}.inner-block.py-none{padding-top:0;padding-bottom:0}.inner-block.title{align-items:center;justify-content:space-between;color:var(--prizm-v3-text-icon-primary)}.border-bottom{border-bottom:1px solid var(--prizm-v3-background-stroke)}.sub-pages{width:100%;display:block;padding-top:16px}.submit-block{display:flex;align-items:center;gap:8px}:host{--prizm-input-layout-width: auto}.human-readable-block{padding-bottom:0}.human-readable-block prizm-input-layout{width:100%}\n"], dependencies: [{ kind: "pipe", type: PrizmCronHumanReadablePipe, name: "prizmCronHumanReadable" }, { kind: "ngmodule", type: PrizmCronInnerModule }, { kind: "directive", type: i2.PrizmLetDirective, selector: "[prizmLet]", inputs: ["prizmLet"], exportAs: ["prizmLet"] }, { kind: "directive", type: i9.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i9.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i9.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i10.PrizmInputHintDirective, selector: "input[prizmHintDirection], input[prizmHintCanShow]", inputs: ["prizmHintDirection", "prizmHintCanShow"], exportAs: ["prizmInputHint"] }, { kind: "component", type: i11.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i12.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "directive", type: i13.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i13.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i13.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i14.PrizmHintDirective, selector: "[prizmHint]:not(ng-container)", inputs: ["prizmAutoReposition", "prizmHintDirection", "prizmHintId", "prizmHintTheme", "prizmHintShowDelay", "prizmHintHideDelay", "prizmHintHost", "prizmHintContext", "prizmHintCanShow", "prizmHint"], outputs: ["prizmHintShowed"], exportAs: ["prizmHint"] }, { kind: "component", type: i15.PrizmInputLayoutDateTimeComponent, selector: "prizm-input-layout-date-time", inputs: ["timeItems", "placeholder", "extraButtonInjector", "min", "max", "timeStrict", "disabledItemHandler", "defaultActiveYearMonth", "timeMode"] }, { kind: "component", type: i16.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "placeholder", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "directive", type: i13.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i17.PrizmToggleComponent, selector: "prizm-toggle", inputs: ["singleColor", "iconOn", "iconOff", "showLoader", "size"] }, { kind: "component", type: i18.PrizmSwitcherComponent, selector: "prizm-switcher", inputs: ["size", "type", "switchers", "selectedSwitcherIdx", "fullWidth"], outputs: ["selectedSwitcherIdxChange"] }, { kind: "component", type: i19.PrizmScrollbarComponent, selector: "prizm-scrollbar", inputs: ["visibility"] }, { kind: "component", type: i20.PrizmCronHourComponent, selector: "prizm-cron-hour", inputs: ["specifiedList"] }, { kind: "component", type: i21.PrizmCronYearComponent, selector: "prizm-cron-year", inputs: ["specifiedList"] }, { kind: "component", type: i22.PrizmCronDayComponent, selector: "prizm-cron-day", inputs: ["specifiedList"] }, { kind: "component", type: i23.PrizmCronMonthComponent, selector: "prizm-cron-month", inputs: ["specifiedList"] }, { kind: "component", type: i24.PrizmCronMinuteComponent, selector: "prizm-cron-minute", inputs: ["specifiedList"] }, { kind: "component", type: i25.PrizmCronSecondComponent, selector: "prizm-cron-second", inputs: ["specifiedList"] }, { kind: "component", type: i26.PrizmButtonComponent, selector: "button[prizmButton], button[prizmIconButton], a[prizmButton], a[prizmIconButton]", inputs: ["size", "icon", "iconRight", "appearance", "appearanceType", "disabled", "showLoader"] }, { kind: "pipe", type: i9.AsyncPipe, name: "async" }, { kind: "pipe", type: i2.PrizmPluckPipe, name: "prizmPluck" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PrizmCronComponent.prototype, "disabled", null);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCronComponent.prototype, "autoSubmit", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCronComponent.prototype, "hidePeriod", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCronComponent.prototype, "hideResult", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCronComponent.prototype, "showHumanReadable", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmCronComponent.prototype, "resetButton", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PrizmCronComponent.prototype, "period", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-cron', exportAs: 'prizmCron', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        PrizmDestroyService,
                        PrizmCronService,
                        PrizmLetDirective,
                        PrizmCronUiSecondState,
                        PrizmCronUiMonthState,
                        PrizmCronUiHourState,
                        PrizmCronUiDayState,
                        PrizmCronUiYearState,
                        PrizmCronUiMinuteState,
                        ...prizmI18nInitWithKey(PRIZM_CRON, 'cron'),
                    ], standalone: true, imports: [PrizmCronHumanReadablePipe, PrizmCronInnerModule, PrizmCronMonthPipe, PrizmCronWeekPipe], template: "<div class=\"block\">\n  <div class=\"title py-none inner-block small-padding\">\n    <span class=\"prizm-font-title-h4\">\n      {{ cronI18n$ | async | prizmPluck : ['title'] }}\n    </span>\n    <div class=\"submit-block\" *ngIf=\"!hideResult || !autoSubmit\">\n      <ng-container *ngIf=\"!hideResult\">\n        <prizm-input-layout\n          *prizmLet=\"valueAsString$ | async as valueStr\"\n          [border]=\"false\"\n          [label]=\"null\"\n          [outer]=\"true\"\n          [forceClear]=\"false\"\n          size=\"m\"\n        >\n          <input\n            #elem\n            [prizmHint]=\"valueStr\"\n            [readonly]=\"true\"\n            [prizmHintCanShow]=\"prizmIsTextOverflow(elem.elementRef.nativeElement)\"\n            [ngModel]=\"valueStr\"\n            [ngModelOptions]=\"{ standalone: true }\"\n            prizmInput\n            prizmHintDirection=\"b\"\n          />\n\n          <ng-container prizm-input-right>\n            <button [interactive]=\"true\" (click)=\"copy()\" prizmInputIconButton=\"editor-copy\"></button>\n          </ng-container>\n        </prizm-input-layout>\n      </ng-container>\n      <button *ngIf=\"resetButton\" (click)=\"reset()\" prizmButton size=\"m\">\n        {{ cronI18n$ | async | prizmPluck : ['resetText'] }}\n      </button>\n      <button *ngIf=\"!autoSubmit\" [disabled]=\"disabled\" (click)=\"submit()\" prizmButton size=\"m\">\n        {{ cronI18n$ | async | prizmPluck : ['submitText'] }}\n      </button>\n    </div>\n  </div>\n\n  <div class=\"human-readable-block inner-block\" *ngIf=\"showHumanReadable\">\n    <prizm-input-layout\n      *prizmLet=\"valueAsString$ | async as valueStr\"\n      [border]=\"false\"\n      [label]=\"null\"\n      [outer]=\"true\"\n      [forceClear]=\"false\"\n      size=\"m\"\n    >\n      <input\n        #humarReadableElem\n        *prizmLet=\"$any(valueAsString$ | async) | prizmCronHumanReadable as humanReadableStr\"\n        [prizmHint]=\"humanReadableStr\"\n        [readonly]=\"true\"\n        [prizmHintCanShow]=\"prizmIsTextOverflow(humarReadableElem.elementRef.nativeElement)\"\n        [ngModel]=\"humanReadableStr\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        prizmInput\n        prizmHintDirection=\"b\"\n      />\n\n      <ng-container prizm-input-right>\n        <button\n          [interactive]=\"true\"\n          (click)=\"copyHumanReadable()\"\n          prizmInputIconButton=\"editor-copy\"\n        ></button>\n      </ng-container>\n    </prizm-input-layout>\n  </div>\n\n  <div class=\"inner-block border-bottom\">\n    <prizm-switcher\n      [fullWidth]=\"true\"\n      [selectedSwitcherIdx]=\"selectedSwitcherIdx\"\n      [switchers]=\"switchers\"\n      (selectedSwitcherIdxChange)=\"indexChanged($event)\"\n    >\n    </prizm-switcher>\n  </div>\n\n  <div class=\"inner-block date-period border-bottom\" *ngIf=\"!hidePeriod\">\n    <div class=\"date-block\">\n      <prizm-input-layout [label]=\"cronI18n$ | async | prizmPluck : ['startDateLabel']\" size=\"m\">\n        <prizm-input-layout-date-time\n          [formControl]=\"startDateControl\"\n          [max]=\"endDateControl.value ?? undefined\"\n        >\n        </prizm-input-layout-date-time>\n      </prizm-input-layout>\n\n      <prizm-input-layout [label]=\"cronI18n$ | async | prizmPluck : ['endDateLabel']\" size=\"m\">\n        <prizm-input-layout-date-time\n          [min]=\"startDateControl.value ?? undefined\"\n          [disabled]=\"indefinitely\"\n          [formControl]=\"endDateControl\"\n        >\n        </prizm-input-layout-date-time>\n      </prizm-input-layout>\n    </div>\n    <div class=\"date-footer\">\n      <div class=\"indefinitely-toggle\">\n        <prizm-toggle [formControl]=\"indefinitelyControl\" size=\"m\"> </prizm-toggle>\n        {{ cronI18n$ | async | prizmPluck : ['indefinitelyLabel'] }}\n      </div>\n    </div>\n  </div>\n\n  <div class=\"sub-pages\" [ngSwitch]=\"selectedSwitcherIdx\">\n    <prizm-scrollbar>\n      <prizm-cron-second *ngSwitchCase=\"0\" [specifiedList]=\"specifiedList?.second ?? []\"></prizm-cron-second>\n      <prizm-cron-minute *ngSwitchCase=\"1\" [specifiedList]=\"specifiedList?.minute ?? []\"></prizm-cron-minute>\n      <prizm-cron-hour *ngSwitchCase=\"2\" [specifiedList]=\"specifiedList?.hour ?? []\"></prizm-cron-hour>\n      <prizm-cron-day *ngSwitchCase=\"3\" [specifiedList]=\"specifiedList?.day ?? []\"></prizm-cron-day>\n      <prizm-cron-month *ngSwitchCase=\"4\" [specifiedList]=\"specifiedList?.month ?? []\"></prizm-cron-month>\n      <prizm-cron-year *ngSwitchCase=\"5\" [specifiedList]=\"specifiedList?.year ?? []\"></prizm-cron-year>\n    </prizm-scrollbar>\n  </div>\n</div>\n", styles: [":host{color:var(--prizm-v3-text-icon-secondary)}.block{border:1px solid var(--prizm-v3-background-stroke);border-radius:2px;padding:6px 0;width:var(--prizm-cron-width, 642px);min-height:var(--prizm-cron-min-height, 952px)}.inner-block{padding:16px;display:flex}.inner-block.date-period{flex-direction:column;gap:16px}.inner-block.date-period .date-block{display:grid;gap:8px;grid-template-columns:1fr 1fr}.inner-block.date-period .indefinitely-toggle{display:flex;align-items:center;gap:10px}.inner-block.py-none{padding-top:0;padding-bottom:0}.inner-block.title{align-items:center;justify-content:space-between;color:var(--prizm-v3-text-icon-primary)}.border-bottom{border-bottom:1px solid var(--prizm-v3-background-stroke)}.sub-pages{width:100%;display:block;padding-top:16px}.submit-block{display:flex;align-items:center;gap:8px}:host{--prizm-input-layout-width: auto}.human-readable-block{padding-bottom:0}.human-readable-block prizm-input-layout{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i27.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_LANGUAGE]
                }] }, { type: i1.PrizmCronService }, { type: i27.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_CRON]
                }] }, { type: i2.PrizmDestroyService }, { type: i3.PrizmCronUiSecondState }, { type: i4.PrizmCronUiHourState }, { type: i5.PrizmCronUiYearState }, { type: i6.PrizmCronUiMonthState }, { type: i7.PrizmCronUiMinuteState }, { type: i8.PrizmCronUiDayState }]; }, propDecorators: { value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], autoSubmit: [{
                type: Input
            }], hidePeriod: [{
                type: Input
            }], hideResult: [{
                type: Input
            }], showHumanReadable: [{
                type: Input
            }], resetButton: [{
                type: Input
            }], period: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], periodChange: [{
                type: Output
            }], selectedChange: [{
                type: Output
            }], selected: [{
                type: Input
            }], specifiedList: [{
                type: Input
            }], tabs: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Nyb24vY3Jvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2Nyb24vY3Jvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFvQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCcEUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLG1CQUFtQjtJQUN6RCxJQUFvQixLQUFLLENBQUMsS0FBYTtRQUNyQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDakMsQ0FBQztJQUVELElBRUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBbUI7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBeUJELElBRVcsTUFBTSxDQUFDLE1BQXVCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsWUFBWTtZQUN4RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV6RCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvRixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxHQUFHO1lBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFDRCxJQUFXLE1BQU07UUFDZixPQUFPO1lBQ0wsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLO1lBQzVDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSztZQUNsQyxHQUFHLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUs7U0FDdkUsQ0FBQztJQUNKLENBQUM7SUFvQkQsSUFDSSxRQUFRLENBQUMsUUFBMEI7UUFDckMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBR0QsSUFBYSxJQUFJLENBQUMsSUFBd0I7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBUyxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQXVDRCxZQUVXLFNBQW9DLEVBQzdCLElBQXNCLEVBQ0YsU0FBZ0QsRUFDbkUsUUFBNkIsRUFDN0IsaUJBQXlDLEVBQ3pDLGVBQXFDLEVBQ3JDLGVBQXFDLEVBQ3JDLGdCQUF1QyxFQUN2QyxpQkFBeUMsRUFDekMsY0FBbUM7UUFFcEQsS0FBSyxFQUFFLENBQUM7UUFYQyxjQUFTLEdBQVQsU0FBUyxDQUEyQjtRQUM3QixTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUNGLGNBQVMsR0FBVCxTQUFTLENBQXVDO1FBQ25FLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBQzdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBd0I7UUFDekMsb0JBQWUsR0FBZixlQUFlLENBQXNCO1FBQ3JDLG9CQUFlLEdBQWYsZUFBZSxDQUFzQjtRQUNyQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXVCO1FBQ3ZDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBd0I7UUFDekMsbUJBQWMsR0FBZCxjQUFjLENBQXFCO1FBN0g5QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBSTFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5CLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUkxQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVGLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFvQjdCLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRU8sc0JBQWlCLEdBQUcsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUM3RixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQ2xCLE9BQU8sbUJBQW1CLENBQUMsR0FBRyxFQUFFO2dCQUM5QixNQUFNLEVBQUUsSUFBSTthQUNiLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFUSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDekMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNuRCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBT3ZELGtCQUFhLEdBQXFDLElBQUksQ0FBQztRQVl6RCxjQUFTLEdBQTBDO1lBQ3hEO2dCQUNFLEtBQUssRUFBRSxTQUFTO2dCQUNoQixFQUFFLEVBQUUsUUFBUTthQUNiO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsRUFBRSxFQUFFLFFBQVE7YUFDYjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLEVBQUUsRUFBRSxNQUFNO2FBQ1g7WUFDRDtnQkFDRSxLQUFLLEVBQUUsS0FBSztnQkFDWixFQUFFLEVBQUUsS0FBSzthQUNWO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsRUFBRSxFQUFFLE9BQU87YUFDWjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLEVBQUUsRUFBRSxNQUFNO2FBQ1g7U0FDRixDQUFDO1FBR2MsV0FBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLG1CQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDMUMscUJBQWdCLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQzVDLG1CQUFjLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQzFDLHdCQUFtQixHQUFHLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysd0JBQW1CLEdBQUcsbUJBQW1CLENBQUM7SUFnQjFELENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVPLHFCQUFxQjtRQUMzQixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7WUFDN0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRU8sdUJBQXVCO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO2FBQ3BHLElBQUksQ0FDSCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsRUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8sVUFBVTtRQUNoQixJQUFJLElBQUksQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlDLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjO2FBQ3JCLElBQUksQ0FDSCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDL0Msb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTLEVBQUUsQ0FBQztRQUVmLGFBQWEsQ0FBQztZQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztZQUN2RyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztZQUNuRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDeEMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFDekMsb0JBQW9CLEVBQUUsQ0FDdkI7U0FDRixDQUFDO2FBQ0MsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDL0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVPLElBQUksQ0FBQyxTQUFpQjtRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7YUFDckIsSUFBSSxDQUNILEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLEVBQ0YsS0FBSyxFQUFFLEVBQ1AsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUNqQyxDQUFDO0lBRU0sSUFBSTtRQUNULDJCQUEyQjtRQUMzQixTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSxpQkFBaUI7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQjthQUNuQixJQUFJLENBQ0gsS0FBSyxFQUFFLEVBQ1AsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDckIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSxZQUFZLENBQUMsS0FBYTtRQUMvQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFFLEVBQVMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQzs4R0EvUFUsa0JBQWtCLGtCQW9JbkIsY0FBYyw2Q0FHZCxVQUFVO2tHQXZJVCxrQkFBa0IsNGJBZmxCO1lBQ1QsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsc0JBQXNCO1lBQ3RCLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIsR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDO1NBQzVDLDBFQ25ESCwwbEpBdUhBLHkvQkRsRVksMEJBQTBCLDhEQUFFLG9CQUFvQjs7QUFXMUQ7SUFDQyxnQkFBZ0IsRUFBRTs7O2tEQUdsQjtBQVFEO0lBREMsZ0JBQWdCLEVBQUU7O3NEQUNBO0FBSW5CO0lBREMsZ0JBQWdCLEVBQUU7O3NEQUNBO0FBSW5CO0lBREMsZ0JBQWdCLEVBQUU7O3NEQUNBO0FBSW5CO0lBREMsZ0JBQWdCLEVBQUU7OzZEQUNPO0FBSTFCO0lBREMsZ0JBQWdCLEVBQUU7O3VEQUNDO0FBSXBCO0lBQ0MsZ0JBQWdCLEVBQUU7OztnREFRbEI7MkZBbERVLGtCQUFrQjtrQkFyQjlCLFNBQVM7K0JBQ0UsWUFBWSxZQUdaLFdBQVcsbUJBQ0osdUJBQXVCLENBQUMsTUFBTSxhQUNwQzt3QkFDVCxtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3dCQUN0QixHQUFHLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUM7cUJBQzVDLGNBQ1csSUFBSSxXQUNQLENBQUMsMEJBQTBCLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7OzBCQXNJL0YsTUFBTTsyQkFBQyxjQUFjOzswQkFHckIsTUFBTTsyQkFBQyxVQUFVO29TQXRJQSxLQUFLO3NCQUF4QixLQUFLO2dCQVVGLFFBQVE7c0JBRlgsS0FBSztnQkFZTixVQUFVO3NCQUZULEtBQUs7Z0JBTU4sVUFBVTtzQkFGVCxLQUFLO2dCQU1OLFVBQVU7c0JBRlQsS0FBSztnQkFNTixpQkFBaUI7c0JBRmhCLEtBQUs7Z0JBTU4sV0FBVztzQkFGVixLQUFLO2dCQVFLLE1BQU07c0JBRmhCLEtBQUs7Z0JBZ0NJLFdBQVc7c0JBQXBCLE1BQU07Z0JBQ0csWUFBWTtzQkFBckIsTUFBTTtnQkFDRyxjQUFjO3NCQUF2QixNQUFNO2dCQUdILFFBQVE7c0JBRFgsS0FBSztnQkFLRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNPLElBQUk7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UsIFByaXptTGV0RGlyZWN0aXZlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1Td2l0Y2hlckl0ZW0gfSBmcm9tICcuLi9zd2l0Y2hlcic7XG5pbXBvcnQgeyBVbnR5cGVkRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcml6bUNyb25TZXJ2aWNlLCBwcml6bUkxOG5Jbml0V2l0aEtleSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIGZpcnN0LCBtYXAsIHNraXAsIHN0YXJ0V2l0aCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bUNyb25VaVNlY29uZFN0YXRlIH0gZnJvbSAnLi9jcm9uLXVpLXNlY29uZC5zdGF0ZSc7XG5pbXBvcnQgeyBQcml6bUNyb25VaU1pbnV0ZVN0YXRlIH0gZnJvbSAnLi9jcm9uLXVpLW1pbnV0ZS5zdGF0ZSc7XG5pbXBvcnQgeyBQcml6bUNyb25VaUhvdXJTdGF0ZSB9IGZyb20gJy4vY3Jvbi11aS1ob3VyLnN0YXRlJztcbmltcG9ydCB7IFByaXptQ3JvblVpTW9udGhTdGF0ZSB9IGZyb20gJy4vY3Jvbi11aS1tb250aC5zdGF0ZSc7XG5pbXBvcnQgeyBQcml6bUNyb25VaVllYXJTdGF0ZSB9IGZyb20gJy4vY3Jvbi11aS15ZWFyLnN0YXRlJztcbmltcG9ydCB7IHByaXptSXNUZXh0T3ZlcmZsb3cgfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7IFByaXptQ3JvblBlcmlvZCwgUHJpem1Dcm9uVGFiSXRlbSwgUHJpem1Dcm9uVGFiU3BlY2lmaWVkTGlzdCB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgUHJpem1Dcm9uVWlEYXlTdGF0ZSB9IGZyb20gJy4vY3Jvbi11aS1kYXkuc3RhdGUnO1xuaW1wb3J0IHsgcHJpem1EZWZhdWx0UHJvcCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGNvbmNhdCwgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBSSVpNX0xBTkdVQUdFLCBQcml6bUxhbmd1YWdlLCBQcml6bUxhbmd1YWdlQ3JvbiB9IGZyb20gJ0Bwcml6bS11aS9pMThuJztcbmltcG9ydCB7IHByaXptQ3JvbkhSVG9TdHJpbmcgfSBmcm9tICcuLi9jcm9uLWh1bWFuLXJlYWRhYmxlL2h1bWFuLXJlYWRhYmxlL2Nyb25zLWkxOG4nO1xuaW1wb3J0IHsgUFJJWk1fQ1JPTiB9IGZyb20gJy4uLy4uL3Rva2Vucyc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgUHJpem1Dcm9uTW9udGhQaXBlIH0gZnJvbSAnLi9waXBlcy9jcm9uLW1vbnRoLnBpcGUnO1xuaW1wb3J0IHsgUHJpem1Dcm9uV2Vla1BpcGUgfSBmcm9tICcuL3BpcGVzL2Nyb24td2Vlay5waXBlJztcbmltcG9ydCB7IFByaXptQ3JvbklubmVyTW9kdWxlIH0gZnJvbSAnLi9jcm9uLWlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUNyb25IdW1hblJlYWRhYmxlUGlwZSB9IGZyb20gJy4uL2Nyb24taHVtYW4tcmVhZGFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1jcm9uJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3Jvbi5jb21wb25lbnQubGVzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vY3Jvbi5jb21wb25lbnQuaHRtbCcsXG4gIGV4cG9ydEFzOiAncHJpem1Dcm9uJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAgUHJpem1Dcm9uU2VydmljZSxcbiAgICBQcml6bUxldERpcmVjdGl2ZSxcbiAgICBQcml6bUNyb25VaVNlY29uZFN0YXRlLFxuICAgIFByaXptQ3JvblVpTW9udGhTdGF0ZSxcbiAgICBQcml6bUNyb25VaUhvdXJTdGF0ZSxcbiAgICBQcml6bUNyb25VaURheVN0YXRlLFxuICAgIFByaXptQ3JvblVpWWVhclN0YXRlLFxuICAgIFByaXptQ3JvblVpTWludXRlU3RhdGUsXG4gICAgLi4ucHJpem1JMThuSW5pdFdpdGhLZXkoUFJJWk1fQ1JPTiwgJ2Nyb24nKSxcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1ByaXptQ3Jvbkh1bWFuUmVhZGFibGVQaXBlLCBQcml6bUNyb25Jbm5lck1vZHVsZSwgUHJpem1Dcm9uTW9udGhQaXBlLCBQcml6bUNyb25XZWVrUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQ3JvbkNvbXBvbmVudCBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgdGhpcy5jcm9uLnVwZGF0ZVdpdGgodmFsdWUpO1xuICB9XG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jcm9uLnZhbHVlQXNTdHJpbmc7XG4gIH1cblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBCb29sZWFuSW5wdXQpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGF1dG9TdWJtaXQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGhpZGVQZXJpb2QgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGhpZGVSZXN1bHQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHNob3dIdW1hblJlYWRhYmxlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICByZXNldEJ1dHRvbiA9IGZhbHNlO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfY3Jvbic7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgc2V0IHBlcmlvZChwZXJpb2Q6IFByaXptQ3JvblBlcmlvZCkge1xuICAgIGlmICh0aGlzLmluZGVmaW5pdGVseUNvbnRyb2wudmFsdWUgIT09IHBlcmlvZC5pbmRlZmluaXRlbHkpXG4gICAgICB0aGlzLmluZGVmaW5pdGVseUNvbnRyb2wuc2V0VmFsdWUocGVyaW9kLmluZGVmaW5pdGVseSk7XG5cbiAgICBpZiAodGhpcy5zdGFydERhdGVDb250cm9sLnZhbHVlICE9PSBwZXJpb2Quc3RhcnQpIHRoaXMuc3RhcnREYXRlQ29udHJvbC5zZXRWYWx1ZShwZXJpb2Quc3RhcnQpO1xuXG4gICAgaWYgKHRoaXMuZW5kRGF0ZUNvbnRyb2wudmFsdWUgIT09IHBlcmlvZC5lbmQpIHRoaXMuZW5kRGF0ZUNvbnRyb2wuc2V0VmFsdWUocGVyaW9kLmVuZCk7XG4gIH1cbiAgcHVibGljIGdldCBwZXJpb2QoKTogUHJpem1Dcm9uUGVyaW9kIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5kZWZpbml0ZWx5OiB0aGlzLmluZGVmaW5pdGVseUNvbnRyb2wudmFsdWUsXG4gICAgICBzdGFydDogdGhpcy5zdGFydERhdGVDb250cm9sLnZhbHVlLFxuICAgICAgZW5kOiB0aGlzLmluZGVmaW5pdGVseUNvbnRyb2wudmFsdWUgPyBudWxsIDogdGhpcy5lbmREYXRlQ29udHJvbC52YWx1ZSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZG9ubHkgY3Jvbkxhbmd1YWdlJCA9IHRoaXMubGFuZ3VhZ2UkLnBpcGUoXG4gICAgbWFwKGxhbmcgPT4ge1xuICAgICAgcmV0dXJuIGxhbmcuc2hvcnROYW1lO1xuICAgIH0pXG4gICk7XG5cbiAgcmVhZG9ubHkgaHVtYW5SZWFkYWJsZVN0ciQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLmNyb25MYW5ndWFnZSQsIHRoaXMuY3Jvbi52YWx1ZUFzU3RyaW5nJF0pLnBpcGUoXG4gICAgbWFwKChbbGFuZywgdmFsXSkgPT4ge1xuICAgICAgcmV0dXJuIHByaXptQ3JvbkhSVG9TdHJpbmcodmFsLCB7XG4gICAgICAgIGxvY2FsZTogbGFuZyxcbiAgICAgIH0pO1xuICAgIH0pXG4gICk7XG5cbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBwZXJpb2RDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFByaXptQ3JvblBlcmlvZD4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQcml6bUNyb25UYWJJdGVtPigpO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZDogUHJpem1Dcm9uVGFiSXRlbSkge1xuICAgIHRoaXMuc2VsZWN0ZWRTd2l0Y2hlcklkeCA9IHRoaXMuc3dpdGNoZXJzLmZpbmRJbmRleChpID0+IGkuaWQgPT09IHNlbGVjdGVkKTtcbiAgfVxuXG4gIEBJbnB1dCgpIHNwZWNpZmllZExpc3Q6IFByaXptQ3JvblRhYlNwZWNpZmllZExpc3QgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgc2V0IHRhYnModGFiczogUHJpem1Dcm9uVGFiSXRlbVtdKSB7XG4gICAgdGhpcy5zd2l0Y2hlcnMgPSB0aGlzLnN3aXRjaGVycy5tYXAoaSA9PiB7XG4gICAgICBpLmhpZGUgPSAhdGFicy5pbmNsdWRlcyhpLmlkIGFzIGFueSk7XG4gICAgICByZXR1cm4gaTtcbiAgICB9KTtcblxuICAgIGlmICh0YWJzLmxlbmd0aCAmJiAhdGFicy5pbmNsdWRlcyh0aGlzLnNlbGVjdGVkKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KCh0aGlzLnNlbGVjdGVkID0gdGFic1swXSkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzd2l0Y2hlcnM6IFByaXptU3dpdGNoZXJJdGVtPFByaXptQ3JvblRhYkl0ZW0+W10gPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICfQodC10LrRg9C90LTRiycsXG4gICAgICBpZDogJ3NlY29uZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ9Cc0LjQvdGD0YLRiycsXG4gICAgICBpZDogJ21pbnV0ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ9Cn0LDRgdGLJyxcbiAgICAgIGlkOiAnaG91cicsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ9CU0L3QuCcsXG4gICAgICBpZDogJ2RheScsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ9Cc0LXRgdGP0YbRiycsXG4gICAgICBpZDogJ21vbnRoJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAn0JPQvtC00YsnLFxuICAgICAgaWQ6ICd5ZWFyJyxcbiAgICB9LFxuICBdO1xuXG4gIGluaXRpYWxWYWx1ZSE6IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IHZhbHVlJCA9IHRoaXMuY3Jvbi52YWx1ZSQ7XG4gIHB1YmxpYyByZWFkb25seSB2YWx1ZUFzU3RyaW5nJCA9IHRoaXMuY3Jvbi52YWx1ZUFzU3RyaW5nJDtcbiAgcHVibGljIHJlYWRvbmx5IHN0YXJ0RGF0ZUNvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCk7XG4gIHB1YmxpYyByZWFkb25seSBlbmREYXRlQ29udHJvbCA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIHJlYWRvbmx5IGluZGVmaW5pdGVseUNvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKGZhbHNlKTtcbiAgcHVibGljIGluZGVmaW5pdGVseSA9IGZhbHNlO1xuICBwdWJsaWMgc2VsZWN0ZWRTd2l0Y2hlcklkeCA9IDA7XG4gIHB1YmxpYyByZWFkb25seSBwcml6bUlzVGV4dE92ZXJmbG93ID0gcHJpem1Jc1RleHRPdmVyZmxvdztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBSSVpNX0xBTkdVQUdFKVxuICAgIHJlYWRvbmx5IGxhbmd1YWdlJDogT2JzZXJ2YWJsZTxQcml6bUxhbmd1YWdlPixcbiAgICBwdWJsaWMgcmVhZG9ubHkgY3JvbjogUHJpem1Dcm9uU2VydmljZSxcbiAgICBASW5qZWN0KFBSSVpNX0NST04pIHB1YmxpYyByZWFkb25seSBjcm9uSTE4biQ6IE9ic2VydmFibGU8UHJpem1MYW5ndWFnZUNyb25bJ2Nyb24nXT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95JDogUHJpem1EZXN0cm95U2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNyb25VaVNlY29uZFN0YXRlOiBQcml6bUNyb25VaVNlY29uZFN0YXRlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY3JvblVpSG91clN0YXRlOiBQcml6bUNyb25VaUhvdXJTdGF0ZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNyb25VaVllYXJTdGF0ZTogUHJpem1Dcm9uVWlZZWFyU3RhdGUsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjcm9uVWlNb250aFN0YXRlOiBQcml6bUNyb25VaU1vbnRoU3RhdGUsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjcm9uVWlNaW51dGVTdGF0ZTogUHJpem1Dcm9uVWlNaW51dGVTdGF0ZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNyb25VaURheVN0YXRlOiBQcml6bUNyb25VaURheVN0YXRlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0QXV0b1N1Ym1pdGVyKCk7XG4gICAgdGhpcy5jcm9uVWlTZWNvbmRTdGF0ZS5pbml0KCk7XG4gICAgdGhpcy5jcm9uVWlIb3VyU3RhdGUuaW5pdCgpO1xuICAgIHRoaXMuY3JvblVpRGF5U3RhdGUuaW5pdCgpO1xuICAgIHRoaXMuY3JvblVpTW9udGhTdGF0ZS5pbml0KCk7XG4gICAgdGhpcy5jcm9uVWlZZWFyU3RhdGUuaW5pdCgpO1xuICAgIHRoaXMuY3JvblVpTWludXRlU3RhdGUuaW5pdCgpO1xuICAgIHRoaXMuaW5pdEVuZERhdGVTdGF0ZUNoYW5nZXIoKTtcbiAgICB0aGlzLnNhdmVJbml0aWFsVmFsdWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW5kRGF0ZVN0YXRlQ29ycmVjdG9yKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluZGVmaW5pdGVseUNvbnRyb2wudmFsdWUpIHRoaXMuZW5kRGF0ZUNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIGVsc2UgdGhpcy5lbmREYXRlQ29udHJvbC5lbmFibGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEVuZERhdGVTdGF0ZUNoYW5nZXIoKTogdm9pZCB7XG4gICAgY29uY2F0KHRpbWVyKDApLnBpcGUobWFwKCgpID0+IHRoaXMuaW5kZWZpbml0ZWx5Q29udHJvbC52YWx1ZSkpLCB0aGlzLmluZGVmaW5pdGVseUNvbnRyb2wudmFsdWVDaGFuZ2VzKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoKSA9PiB0aGlzLmVuZERhdGVTdGF0ZUNvcnJlY3RvcigpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRQZXJpb2QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGlkZVBlcmlvZCkgcmV0dXJuO1xuICAgIHRoaXMucGVyaW9kQ2hhbmdlLmVtaXQodGhpcy5wZXJpb2QpO1xuICB9XG5cbiAgcHJpdmF0ZSBzYXZlSW5pdGlhbFZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gdGhpcy5jcm9uLnZhbHVlQXNTdHJpbmc7XG4gIH1cblxuICBwcml2YXRlIGluaXRBdXRvU3VibWl0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jcm9uLnZhbHVlQXNTdHJpbmckXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuYXV0b1N1Ym1pdCAmJiAhdGhpcy5kaXNhYmxlZCksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRhcCh2YWwgPT4ge1xuICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWwpO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG5cbiAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuc3RhcnREYXRlQ29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShzdGFydFdpdGgodGhpcy5zdGFydERhdGVDb250cm9sLnZhbHVlKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSksXG4gICAgICB0aGlzLmVuZERhdGVDb250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKHN0YXJ0V2l0aCh0aGlzLmVuZERhdGVDb250cm9sLnZhbHVlKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSksXG4gICAgICB0aGlzLmluZGVmaW5pdGVseUNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh0aGlzLmluZGVmaW5pdGVseUNvbnRyb2wudmFsdWUpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgICApLFxuICAgIF0pXG4gICAgICAucGlwZShcbiAgICAgICAgc2tpcCgxKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuYXV0b1N1Ym1pdCAmJiAhdGhpcy5kaXNhYmxlZCksXG4gICAgICAgIHRhcChjb250cm9scyA9PiB7XG4gICAgICAgICAgdGhpcy5lbWl0UGVyaW9kKCk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdChjcm9uVmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KGNyb25WYWx1ZSk7XG4gICAgdGhpcy5lbWl0UGVyaW9kKCk7XG4gICAgdGhpcy5zYXZlSW5pdGlhbFZhbHVlKCk7XG4gIH1cblxuICBwdWJsaWMgc3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuY3Jvbi52YWx1ZUFzU3RyaW5nJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCh2YWwgPT4ge1xuICAgICAgICAgIHRoaXMuZW1pdCh2YWwpO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuaW5pdGlhbFZhbHVlO1xuICB9XG5cbiAgcHVibGljIGNvcHkoKTogdm9pZCB7XG4gICAgLy8gVE9ETyBzYWZlIHdpdGggaW5qZWN0aW9uXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGhpcy5jcm9uLnZhbHVlQXNTdHJpbmcpO1xuICB9XG5cbiAgcHVibGljIGNvcHlIdW1hblJlYWRhYmxlKCk6IHZvaWQge1xuICAgIHRoaXMuaHVtYW5SZWFkYWJsZVN0ciRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaXJzdCgpLFxuICAgICAgICB0YXAoaHVtYW5SZWFkYWJsZVN0ciA9PiB7XG4gICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoaHVtYW5SZWFkYWJsZVN0cik7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgaW5kZXhDaGFuZ2VkKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc3dpdGNoZXJzLmZpbmQoKF8sIGkpID0+IGkgPT09IGluZGV4KTtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoKHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZD8uaWQgYXMgYW55KSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJibG9ja1wiPlxuICA8ZGl2IGNsYXNzPVwidGl0bGUgcHktbm9uZSBpbm5lci1ibG9jayBzbWFsbC1wYWRkaW5nXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwcml6bS1mb250LXRpdGxlLWg0XCI+XG4gICAgICB7eyBjcm9uSTE4biQgfCBhc3luYyB8IHByaXptUGx1Y2sgOiBbJ3RpdGxlJ10gfX1cbiAgICA8L3NwYW4+XG4gICAgPGRpdiBjbGFzcz1cInN1Ym1pdC1ibG9ja1wiICpuZ0lmPVwiIWhpZGVSZXN1bHQgfHwgIWF1dG9TdWJtaXRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGlkZVJlc3VsdFwiPlxuICAgICAgICA8cHJpem0taW5wdXQtbGF5b3V0XG4gICAgICAgICAgKnByaXptTGV0PVwidmFsdWVBc1N0cmluZyQgfCBhc3luYyBhcyB2YWx1ZVN0clwiXG4gICAgICAgICAgW2JvcmRlcl09XCJmYWxzZVwiXG4gICAgICAgICAgW2xhYmVsXT1cIm51bGxcIlxuICAgICAgICAgIFtvdXRlcl09XCJ0cnVlXCJcbiAgICAgICAgICBbZm9yY2VDbGVhcl09XCJmYWxzZVwiXG4gICAgICAgICAgc2l6ZT1cIm1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAjZWxlbVxuICAgICAgICAgICAgW3ByaXptSGludF09XCJ2YWx1ZVN0clwiXG4gICAgICAgICAgICBbcmVhZG9ubHldPVwidHJ1ZVwiXG4gICAgICAgICAgICBbcHJpem1IaW50Q2FuU2hvd109XCJwcml6bUlzVGV4dE92ZXJmbG93KGVsZW0uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KVwiXG4gICAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVN0clwiXG4gICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgICAgICAgcHJpem1JbnB1dFxuICAgICAgICAgICAgcHJpem1IaW50RGlyZWN0aW9uPVwiYlwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxuZy1jb250YWluZXIgcHJpem0taW5wdXQtcmlnaHQ+XG4gICAgICAgICAgICA8YnV0dG9uIFtpbnRlcmFjdGl2ZV09XCJ0cnVlXCIgKGNsaWNrKT1cImNvcHkoKVwiIHByaXptSW5wdXRJY29uQnV0dG9uPVwiZWRpdG9yLWNvcHlcIj48L2J1dHRvbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9wcml6bS1pbnB1dC1sYXlvdXQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxidXR0b24gKm5nSWY9XCJyZXNldEJ1dHRvblwiIChjbGljayk9XCJyZXNldCgpXCIgcHJpem1CdXR0b24gc2l6ZT1cIm1cIj5cbiAgICAgICAge3sgY3JvbkkxOG4kIHwgYXN5bmMgfCBwcml6bVBsdWNrIDogWydyZXNldFRleHQnXSB9fVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uICpuZ0lmPVwiIWF1dG9TdWJtaXRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwic3VibWl0KClcIiBwcml6bUJ1dHRvbiBzaXplPVwibVwiPlxuICAgICAgICB7eyBjcm9uSTE4biQgfCBhc3luYyB8IHByaXptUGx1Y2sgOiBbJ3N1Ym1pdFRleHQnXSB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJodW1hbi1yZWFkYWJsZS1ibG9jayBpbm5lci1ibG9ja1wiICpuZ0lmPVwic2hvd0h1bWFuUmVhZGFibGVcIj5cbiAgICA8cHJpem0taW5wdXQtbGF5b3V0XG4gICAgICAqcHJpem1MZXQ9XCJ2YWx1ZUFzU3RyaW5nJCB8IGFzeW5jIGFzIHZhbHVlU3RyXCJcbiAgICAgIFtib3JkZXJdPVwiZmFsc2VcIlxuICAgICAgW2xhYmVsXT1cIm51bGxcIlxuICAgICAgW291dGVyXT1cInRydWVcIlxuICAgICAgW2ZvcmNlQ2xlYXJdPVwiZmFsc2VcIlxuICAgICAgc2l6ZT1cIm1cIlxuICAgID5cbiAgICAgIDxpbnB1dFxuICAgICAgICAjaHVtYXJSZWFkYWJsZUVsZW1cbiAgICAgICAgKnByaXptTGV0PVwiJGFueSh2YWx1ZUFzU3RyaW5nJCB8IGFzeW5jKSB8IHByaXptQ3Jvbkh1bWFuUmVhZGFibGUgYXMgaHVtYW5SZWFkYWJsZVN0clwiXG4gICAgICAgIFtwcml6bUhpbnRdPVwiaHVtYW5SZWFkYWJsZVN0clwiXG4gICAgICAgIFtyZWFkb25seV09XCJ0cnVlXCJcbiAgICAgICAgW3ByaXptSGludENhblNob3ddPVwicHJpem1Jc1RleHRPdmVyZmxvdyhodW1hclJlYWRhYmxlRWxlbS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpXCJcbiAgICAgICAgW25nTW9kZWxdPVwiaHVtYW5SZWFkYWJsZVN0clwiXG4gICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgIHByaXptSW5wdXRcbiAgICAgICAgcHJpem1IaW50RGlyZWN0aW9uPVwiYlwiXG4gICAgICAvPlxuXG4gICAgICA8bmctY29udGFpbmVyIHByaXptLWlucHV0LXJpZ2h0PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgW2ludGVyYWN0aXZlXT1cInRydWVcIlxuICAgICAgICAgIChjbGljayk9XCJjb3B5SHVtYW5SZWFkYWJsZSgpXCJcbiAgICAgICAgICBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImVkaXRvci1jb3B5XCJcbiAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9wcml6bS1pbnB1dC1sYXlvdXQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJpbm5lci1ibG9jayBib3JkZXItYm90dG9tXCI+XG4gICAgPHByaXptLXN3aXRjaGVyXG4gICAgICBbZnVsbFdpZHRoXT1cInRydWVcIlxuICAgICAgW3NlbGVjdGVkU3dpdGNoZXJJZHhdPVwic2VsZWN0ZWRTd2l0Y2hlcklkeFwiXG4gICAgICBbc3dpdGNoZXJzXT1cInN3aXRjaGVyc1wiXG4gICAgICAoc2VsZWN0ZWRTd2l0Y2hlcklkeENoYW5nZSk9XCJpbmRleENoYW5nZWQoJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvcHJpem0tc3dpdGNoZXI+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJpbm5lci1ibG9jayBkYXRlLXBlcmlvZCBib3JkZXItYm90dG9tXCIgKm5nSWY9XCIhaGlkZVBlcmlvZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJsb2NrXCI+XG4gICAgICA8cHJpem0taW5wdXQtbGF5b3V0IFtsYWJlbF09XCJjcm9uSTE4biQgfCBhc3luYyB8IHByaXptUGx1Y2sgOiBbJ3N0YXJ0RGF0ZUxhYmVsJ11cIiBzaXplPVwibVwiPlxuICAgICAgICA8cHJpem0taW5wdXQtbGF5b3V0LWRhdGUtdGltZVxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzdGFydERhdGVDb250cm9sXCJcbiAgICAgICAgICBbbWF4XT1cImVuZERhdGVDb250cm9sLnZhbHVlID8/IHVuZGVmaW5lZFwiXG4gICAgICAgID5cbiAgICAgICAgPC9wcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS10aW1lPlxuICAgICAgPC9wcml6bS1pbnB1dC1sYXlvdXQ+XG5cbiAgICAgIDxwcml6bS1pbnB1dC1sYXlvdXQgW2xhYmVsXT1cImNyb25JMThuJCB8IGFzeW5jIHwgcHJpem1QbHVjayA6IFsnZW5kRGF0ZUxhYmVsJ11cIiBzaXplPVwibVwiPlxuICAgICAgICA8cHJpem0taW5wdXQtbGF5b3V0LWRhdGUtdGltZVxuICAgICAgICAgIFttaW5dPVwic3RhcnREYXRlQ29udHJvbC52YWx1ZSA/PyB1bmRlZmluZWRcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJpbmRlZmluaXRlbHlcIlxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJlbmREYXRlQ29udHJvbFwiXG4gICAgICAgID5cbiAgICAgICAgPC9wcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS10aW1lPlxuICAgICAgPC9wcml6bS1pbnB1dC1sYXlvdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRhdGUtZm9vdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5kZWZpbml0ZWx5LXRvZ2dsZVwiPlxuICAgICAgICA8cHJpem0tdG9nZ2xlIFtmb3JtQ29udHJvbF09XCJpbmRlZmluaXRlbHlDb250cm9sXCIgc2l6ZT1cIm1cIj4gPC9wcml6bS10b2dnbGU+XG4gICAgICAgIHt7IGNyb25JMThuJCB8IGFzeW5jIHwgcHJpem1QbHVjayA6IFsnaW5kZWZpbml0ZWx5TGFiZWwnXSB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJzdWItcGFnZXNcIiBbbmdTd2l0Y2hdPVwic2VsZWN0ZWRTd2l0Y2hlcklkeFwiPlxuICAgIDxwcml6bS1zY3JvbGxiYXI+XG4gICAgICA8cHJpem0tY3Jvbi1zZWNvbmQgKm5nU3dpdGNoQ2FzZT1cIjBcIiBbc3BlY2lmaWVkTGlzdF09XCJzcGVjaWZpZWRMaXN0Py5zZWNvbmQgPz8gW11cIj48L3ByaXptLWNyb24tc2Vjb25kPlxuICAgICAgPHByaXptLWNyb24tbWludXRlICpuZ1N3aXRjaENhc2U9XCIxXCIgW3NwZWNpZmllZExpc3RdPVwic3BlY2lmaWVkTGlzdD8ubWludXRlID8/IFtdXCI+PC9wcml6bS1jcm9uLW1pbnV0ZT5cbiAgICAgIDxwcml6bS1jcm9uLWhvdXIgKm5nU3dpdGNoQ2FzZT1cIjJcIiBbc3BlY2lmaWVkTGlzdF09XCJzcGVjaWZpZWRMaXN0Py5ob3VyID8/IFtdXCI+PC9wcml6bS1jcm9uLWhvdXI+XG4gICAgICA8cHJpem0tY3Jvbi1kYXkgKm5nU3dpdGNoQ2FzZT1cIjNcIiBbc3BlY2lmaWVkTGlzdF09XCJzcGVjaWZpZWRMaXN0Py5kYXkgPz8gW11cIj48L3ByaXptLWNyb24tZGF5PlxuICAgICAgPHByaXptLWNyb24tbW9udGggKm5nU3dpdGNoQ2FzZT1cIjRcIiBbc3BlY2lmaWVkTGlzdF09XCJzcGVjaWZpZWRMaXN0Py5tb250aCA/PyBbXVwiPjwvcHJpem0tY3Jvbi1tb250aD5cbiAgICAgIDxwcml6bS1jcm9uLXllYXIgKm5nU3dpdGNoQ2FzZT1cIjVcIiBbc3BlY2lmaWVkTGlzdF09XCJzcGVjaWZpZWRMaXN0Py55ZWFyID8/IFtdXCI+PC9wcml6bS1jcm9uLXllYXI+XG4gICAgPC9wcml6bS1zY3JvbGxiYXI+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=