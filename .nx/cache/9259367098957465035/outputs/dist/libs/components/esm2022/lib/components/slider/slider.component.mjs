import { DOCUMENT, NgClass, NgIf, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Inject, Input, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmDestroyService, prizmEmptyQueryList } from '@prizm-ui/helpers';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PrizmSliderCnobComponent } from './slider-cnob.component';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/helpers";
export class PrizmSliderComponent extends PrizmAbstractTestId {
    get cnobs() {
        return this._cnobs.changes.pipe(startWith(this._cnobs));
    }
    getSortedValue() {
        if (Array.isArray(this._value)) {
            return [...this._value].sort((a, b) => a - b).map(item => Math.round(item));
        }
        else {
            return Math.round(this._value ?? 0);
        }
    }
    constructor(cdr, destroy$, document) {
        super();
        this.cdr = cdr;
        this.destroy$ = destroy$;
        this.document = document;
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.orientation = 'horizontal';
        this.range = false;
        this.showMinMax = true;
        this.showValue = true;
        this.cnobValuePosition = 'top';
        this._cnobs = prizmEmptyQueryList();
        this._value = null;
        this.cnobPositions = [0, 0];
        this.isDisabled = false;
        this.testId_ = 'ui_slider';
    }
    ngAfterViewInit() {
        this.initCnobMoveHandler();
    }
    ngOnChanges(changes) {
        const min = changes.min?.currentValue ?? this.min;
        const max = changes.max?.currentValue ?? this.max;
        const step = changes.step?.currentValue ?? this.step;
        if (min >= max) {
            this.defaultErrorHandler();
            throw new Error('min >= max');
        }
        if (step <= 0 || this.valueRange % step) {
            this.defaultErrorHandler();
            throw new Error('invalid step value');
        }
        if (('min' in changes && !changes.min.firstChange) || ('max' in changes && !changes.max.firstChange)) {
            this.setPositionFromValue();
        }
        if ('showMinMax' in changes && !changes.showMinMax.firstChange) {
            this.setPositionFromValue();
        }
    }
    onCnobKeydown(cnobIndex, event) {
        if (['ArrowLeft', 'ArrowDown'].includes(event.key)) {
            event.preventDefault();
            if (this.cnobPositions[cnobIndex] === 0) {
                return;
            }
            this.moveCnobOneStep(cnobIndex, 'back');
            return;
        }
        if (['ArrowUp', 'ArrowRight'].includes(event.key)) {
            event.preventDefault();
            if (this.cnobPositions[cnobIndex] === 100) {
                return;
            }
            this.moveCnobOneStep(cnobIndex, 'forward');
            return;
        }
    }
    getPosition(cnobIndex) {
        return this.cnobPositions[cnobIndex];
    }
    getCnobValue(cnobIndex) {
        if (this._value === null) {
            return 0;
        }
        if (this.range === false) {
            return this._value;
        }
        const cnobPosition = this.cnobPositions[cnobIndex];
        const anotherCnobPosition = this.cnobPositions[this.getAnotherCnobIndex(cnobIndex)];
        const value = this.getSortedValue();
        if (cnobPosition < anotherCnobPosition) {
            return value[0];
        }
        else {
            return value[1];
        }
    }
    get scrollbarLinearGradient() {
        let [cnob1, cnob2] = this.cnobPositions;
        if (cnob1 > cnob2) {
            [cnob1, cnob2] = [cnob2, cnob1];
        }
        const color = this.isDisabled ? 'var(--disabled)' : 'var(--progress)';
        return `
    ${this.isHorizontal ? 'to right' : 'to top'},
    transparent 0,
    transparent ${cnob1}%,
    ${color} ${cnob1}%,
    ${color} ${cnob2}%,
    transparent ${cnob2}%,
    transparent 100%`;
    }
    get isHorizontal() {
        return this.orientation === 'horizontal';
    }
    writeValue(value) {
        this._value = value;
        this.setPositionFromValue();
    }
    registerOnChange(fn) {
        this.changedFn = fn;
    }
    registerOnTouched(fn) {
        this.touchedFn = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        this.cdr.markForCheck();
    }
    moveCnobOneStep(cnobIndex, direction) {
        const currentPosition = this.cnobPositions[cnobIndex];
        if (direction === 'forward') {
            this.updatePositionsAndValue(cnobIndex, currentPosition + this.positionStepSize);
        }
        else {
            this.updatePositionsAndValue(cnobIndex, currentPosition - this.positionStepSize);
        }
    }
    get valueRange() {
        return Math.abs(this.max - this.min);
    }
    get stepsCount() {
        return this.valueRange / this.step;
    }
    get positionStepSize() {
        return 100 / this.stepsCount;
    }
    setPositionFromValue() {
        if (Array.isArray(this._value)) {
            for (let i = 0; i < this._value.length; i++) {
                const currentStep = Math.abs(this._value[i] - this.min) / this.step;
                this.cnobPositions[i] = (currentStep / this.stepsCount) * 100;
            }
        }
        else {
            const currentStep = Math.abs((this._value ?? 0) - this.min) / this.step;
            this.cnobPositions[1] = (currentStep / this.stepsCount) * 100;
        }
    }
    initCnobMoveHandler() {
        const pointerMove$ = fromEvent(this.document, 'pointermove');
        const pointerUp$ = fromEvent(this.document, 'pointerup');
        const scrollbarEl = this.scrollbar.nativeElement;
        this.cnobs
            .pipe(switchMap(cnobs => merge(...cnobs.map(cnob => cnob.dragStart)).pipe(switchMap(({ index, shiftX, shiftY }) => {
            this.touchedFn();
            const scrollBarRect = scrollbarEl.getBoundingClientRect();
            const scrollBarSize = this.isHorizontal ? scrollBarRect.width : scrollBarRect.height;
            return pointerMove$.pipe(map(event => {
                const newPositionPx = this.isHorizontal
                    ? event.clientX - scrollBarRect.left - shiftX
                    : scrollBarSize - (event.clientY - scrollBarRect.top - shiftY);
                const newPosition = (newPositionPx / scrollBarSize) * 100;
                // курсор вышел из слайдера => оставить бегунок в его границах.
                if (newPositionPx < 0) {
                    return 0;
                }
                if (newPositionPx > scrollBarSize) {
                    return 100;
                }
                const currentPosition = this.cnobPositions[index];
                if (Math.abs(currentPosition - newPosition) < this.positionStepSize) {
                    return currentPosition;
                }
                const diff = currentPosition - newPosition;
                if (diff < 0) {
                    return (currentPosition +
                        Math.floor(Math.abs(diff) / this.positionStepSize) * this.positionStepSize);
                }
                else {
                    return (currentPosition -
                        Math.floor(Math.abs(diff) / this.positionStepSize) * this.positionStepSize);
                }
            }), distinctUntilChanged(), tap(value => {
                this.updatePositionsAndValue(index, value);
            }), takeUntil(pointerUp$));
        }), takeUntil(this.destroy$))))
            .subscribe();
    }
    getAnotherCnobIndex(currentCnobIndex) {
        if (currentCnobIndex === 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
    updatePositionsAndValue(cnobIndex, position) {
        this.cnobPositions[cnobIndex] = position;
        const newValue = this.min + (this.valueRange * position) / 100;
        if (Array.isArray(this._value)) {
            this._value[cnobIndex] = Math.round(newValue);
        }
        else {
            this._value = Math.round(newValue);
        }
        this.changedFn(this.getSortedValue());
        this.cdr.markForCheck();
    }
    defaultErrorHandler() {
        if (this.range) {
            this._value = [0, 0];
        }
        else {
            this._value = 0;
        }
        this.setPositionFromValue();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSliderComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.PrizmDestroyService }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmSliderComponent, isStandalone: true, selector: "prizm-slider", inputs: { min: "min", max: "max", step: "step", orientation: "orientation", range: "range", showMinMax: "showMinMax", showValue: "showValue", cnobValuePosition: "cnobValuePosition" }, host: { properties: { "class.horizontal": "isHorizontal", "class.vertical": "!isHorizontal", "attr.disabled": "isDisabled ? '' : null", "class.range": "this.range" }, classAttribute: "prizm-slider" }, providers: [
            { provide: NG_VALUE_ACCESSOR, useExisting: PrizmSliderComponent, multi: true },
            PrizmDestroyService,
        ], viewQueries: [{ propertyName: "scrollbar", first: true, predicate: ["track"], descendants: true }, { propertyName: "_cnobs", predicate: PrizmSliderCnobComponent, descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<div class=\"value\" *ngIf=\"showMinMax\" [ngClass]=\"{ 'value--min': isHorizontal, 'value--max': !isHorizontal }\">\n  {{ isHorizontal ? min : max }}\n</div>\n<div\n  class=\"scrollbar\"\n  #scrollbar\n  [ngStyle]=\"{ 'background-image': 'linear-gradient(' + scrollbarLinearGradient + ')' }\"\n>\n  <div class=\"scrollbar__track\" #track>\n    <prizm-slider-cnob\n      class=\"scrollbar__cnob prizm-slider-cnob\"\n      *ngIf=\"range\"\n      [index]=\"0\"\n      [style.left.%]=\"isHorizontal ? getPosition(0) : null\"\n      [style.bottom.%]=\"isHorizontal ? null : getPosition(0)\"\n      [showValueOn]=\"cnobValuePosition\"\n      [value]=\"showValue && isDisabled === false ? getCnobValue(0) : null\"\n      [disabled]=\"isDisabled\"\n      (keydown)=\"onCnobKeydown(0, $event)\"\n    ></prizm-slider-cnob>\n\n    <prizm-slider-cnob\n      class=\"scrollbar__cnob prizm-slider-cnob\"\n      [index]=\"1\"\n      [style.left.%]=\"isHorizontal ? getPosition(1) : null\"\n      [style.bottom.%]=\"isHorizontal ? null : getPosition(1)\"\n      [value]=\"showValue && isDisabled === false ? getCnobValue(1) : null\"\n      [showValueOn]=\"cnobValuePosition\"\n      [disabled]=\"isDisabled\"\n      (keydown)=\"onCnobKeydown(1, $event)\"\n    ></prizm-slider-cnob>\n  </div>\n</div>\n<div class=\"value\" *ngIf=\"showMinMax\" [ngClass]=\"{ 'value--max': isHorizontal, 'value--min': !isHorizontal }\">\n  {{ isHorizontal ? max : min }}\n</div>\n", styles: [":host{--progress: var(--prizm-v3-status-info-primary-default);--disabled: var(--prizm-v3-text-icon-disable);display:flex;align-items:center}.value{font-size:14px;line-height:20px;font-family:Inter}.scrollbar{flex-grow:1;background-color:var(--prizm-v3-background-fill-secondary);border-radius:2px;display:flex}.scrollbar__track{flex-grow:1;position:relative;display:flex}.scrollbar__cnob{position:absolute}:host.horizontal{flex-direction:row}:host.horizontal .scrollbar__track{height:4px;margin-right:20px}:host.horizontal .scrollbar__cnob{transform:translateY(calc(-50% + 2px))}:host.horizontal .value--min{margin:0 8px 0 0}:host.horizontal .value--max{margin:0 0 0 8px}:host.vertical{flex-direction:column}:host.vertical .value--min{margin:8px 0 0}:host.vertical .value--max{margin:0 0 8px}:host.vertical .scrollbar{flex-direction:column}:host.vertical .scrollbar__track{width:4px;margin-top:20px}:host.vertical .scrollbar__cnob{transform:translate(calc(-50% + 2px))}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: PrizmSliderCnobComponent, selector: "prizm-slider-cnob", inputs: ["index", "value", "showValueOn", "disabled"], outputs: ["dragStart"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-slider', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: `prizm-slider`,
                        '[class.horizontal]': 'isHorizontal',
                        '[class.vertical]': '!isHorizontal',
                        '[attr.disabled]': "isDisabled ? '' : null",
                    }, providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: PrizmSliderComponent, multi: true },
                        PrizmDestroyService,
                    ], standalone: true, imports: [NgIf, NgClass, NgStyle, PrizmSliderCnobComponent], template: "<div class=\"value\" *ngIf=\"showMinMax\" [ngClass]=\"{ 'value--min': isHorizontal, 'value--max': !isHorizontal }\">\n  {{ isHorizontal ? min : max }}\n</div>\n<div\n  class=\"scrollbar\"\n  #scrollbar\n  [ngStyle]=\"{ 'background-image': 'linear-gradient(' + scrollbarLinearGradient + ')' }\"\n>\n  <div class=\"scrollbar__track\" #track>\n    <prizm-slider-cnob\n      class=\"scrollbar__cnob prizm-slider-cnob\"\n      *ngIf=\"range\"\n      [index]=\"0\"\n      [style.left.%]=\"isHorizontal ? getPosition(0) : null\"\n      [style.bottom.%]=\"isHorizontal ? null : getPosition(0)\"\n      [showValueOn]=\"cnobValuePosition\"\n      [value]=\"showValue && isDisabled === false ? getCnobValue(0) : null\"\n      [disabled]=\"isDisabled\"\n      (keydown)=\"onCnobKeydown(0, $event)\"\n    ></prizm-slider-cnob>\n\n    <prizm-slider-cnob\n      class=\"scrollbar__cnob prizm-slider-cnob\"\n      [index]=\"1\"\n      [style.left.%]=\"isHorizontal ? getPosition(1) : null\"\n      [style.bottom.%]=\"isHorizontal ? null : getPosition(1)\"\n      [value]=\"showValue && isDisabled === false ? getCnobValue(1) : null\"\n      [showValueOn]=\"cnobValuePosition\"\n      [disabled]=\"isDisabled\"\n      (keydown)=\"onCnobKeydown(1, $event)\"\n    ></prizm-slider-cnob>\n  </div>\n</div>\n<div class=\"value\" *ngIf=\"showMinMax\" [ngClass]=\"{ 'value--max': isHorizontal, 'value--min': !isHorizontal }\">\n  {{ isHorizontal ? max : min }}\n</div>\n", styles: [":host{--progress: var(--prizm-v3-status-info-primary-default);--disabled: var(--prizm-v3-text-icon-disable);display:flex;align-items:center}.value{font-size:14px;line-height:20px;font-family:Inter}.scrollbar{flex-grow:1;background-color:var(--prizm-v3-background-fill-secondary);border-radius:2px;display:flex}.scrollbar__track{flex-grow:1;position:relative;display:flex}.scrollbar__cnob{position:absolute}:host.horizontal{flex-direction:row}:host.horizontal .scrollbar__track{height:4px;margin-right:20px}:host.horizontal .scrollbar__cnob{transform:translateY(calc(-50% + 2px))}:host.horizontal .value--min{margin:0 8px 0 0}:host.horizontal .value--max{margin:0 0 0 8px}:host.vertical{flex-direction:column}:host.vertical .value--min{margin:8px 0 0}:host.vertical .value--max{margin:0 0 8px}:host.vertical .scrollbar{flex-direction:column}:host.vertical .scrollbar__track{width:4px;margin-top:20px}:host.vertical .scrollbar__cnob{transform:translate(calc(-50% + 2px))}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.PrizmDestroyService }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], orientation: [{
                type: Input
            }], range: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.range']
            }], showMinMax: [{
                type: Input
            }], showValue: [{
                type: Input
            }], cnobValuePosition: [{
                type: Input
            }], scrollbar: [{
                type: ViewChild,
                args: ['track']
            }], _cnobs: [{
                type: ViewChildren,
                args: [PrizmSliderCnobComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25FLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBRUwsU0FBUyxFQUVULFNBQVMsRUFDVCxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQXFCckQsTUFBTSxPQUFPLG9CQUNYLFNBQVEsbUJBQW1CO0lBaUIzQixJQUFZLEtBQUs7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FB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RyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQytCLEtBQUs7c0JBQXpDLEtBQUs7O3NCQUFJLFdBQVc7dUJBQUMsYUFBYTtnQkFDMUIsVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFFYyxTQUFTO3NCQUE1QixTQUFTO3VCQUFDLE9BQU87Z0JBRThCLE1BQU07c0JBQXJELFlBQVk7dUJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQsIE5nQ2xhc3MsIE5nSWYsIE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSwgcHJpem1FbXB0eVF1ZXJ5TGlzdCB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcblxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1TbGlkZXJDbm9iQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXItY25vYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1TbGlkZXJDbm9iVmFsdWVQb3NpdGlvbiwgUHJpem1TbGlkZXJPcmllbnRhdGlvbiwgUHJpem1TbGlkZXJWYWx1ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NsaWRlci5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XG4gIGhvc3Q6IHtcbiAgICBjbGFzczogYHByaXptLXNsaWRlcmAsXG4gICAgJ1tjbGFzcy5ob3Jpem9udGFsXSc6ICdpc0hvcml6b250YWwnLFxuICAgICdbY2xhc3MudmVydGljYWxdJzogJyFpc0hvcml6b250YWwnLFxuICAgICdbYXR0ci5kaXNhYmxlZF0nOiBcImlzRGlzYWJsZWQgPyAnJyA6IG51bGxcIixcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IFByaXptU2xpZGVyQ29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9LFxuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBOZ0NsYXNzLCBOZ1N0eWxlLCBQcml6bVNsaWRlckNub2JDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVNsaWRlckNvbXBvbmVudFxuICBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWRcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzXG57XG4gIEBJbnB1dCgpIG1pbiA9IDA7XG4gIEBJbnB1dCgpIG1heCA9IDEwMDtcbiAgQElucHV0KCkgc3RlcCA9IDE7XG4gIEBJbnB1dCgpIG9yaWVudGF0aW9uOiBQcml6bVNsaWRlck9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLnJhbmdlJykgcmFuZ2UgPSBmYWxzZTtcbiAgQElucHV0KCkgc2hvd01pbk1heCA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dWYWx1ZSA9IHRydWU7XG4gIEBJbnB1dCgpIGNub2JWYWx1ZVBvc2l0aW9uOiBQcml6bVNsaWRlckNub2JWYWx1ZVBvc2l0aW9uID0gJ3RvcCc7XG5cbiAgQFZpZXdDaGlsZCgndHJhY2snKSBzY3JvbGxiYXIhOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBAVmlld0NoaWxkcmVuKFByaXptU2xpZGVyQ25vYkNvbXBvbmVudCkgcHJpdmF0ZSBfY25vYnM6IFF1ZXJ5TGlzdDxQcml6bVNsaWRlckNub2JDb21wb25lbnQ+ID1cbiAgICBwcml6bUVtcHR5UXVlcnlMaXN0KCk7XG5cbiAgcHJpdmF0ZSBnZXQgY25vYnMoKTogT2JzZXJ2YWJsZTxRdWVyeUxpc3Q8UHJpem1TbGlkZXJDbm9iQ29tcG9uZW50Pj4ge1xuICAgIHJldHVybiB0aGlzLl9jbm9icy5jaGFuZ2VzLnBpcGUoc3RhcnRXaXRoKHRoaXMuX2Nub2JzKSk7XG4gIH1cbiAgcHJpdmF0ZSBfdmFsdWU6IFByaXptU2xpZGVyVmFsdWUgPSBudWxsO1xuXG4gIHByaXZhdGUgY25vYlBvc2l0aW9ucyA9IFswLCAwXTtcblxuICBwdWJsaWMgaXNEaXNhYmxlZCA9IGZhbHNlO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfc2xpZGVyJztcbiAgdG91Y2hlZEZuITogKCkgPT4gdm9pZDtcbiAgY2hhbmdlZEZuITogKG9iajogbnVtYmVyIHwgW251bWJlciwgbnVtYmVyXSB8IG51bGwpID0+IHZvaWQ7XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZWRWYWx1ZSgpOiBQcml6bVNsaWRlclZhbHVlIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl92YWx1ZSkpIHtcbiAgICAgIHJldHVybiBbLi4udGhpcy5fdmFsdWVdLnNvcnQoKGEsIGIpID0+IGEgLSBiKS5tYXAoaXRlbSA9PiBNYXRoLnJvdW5kKGl0ZW0pKSBhcyBbbnVtYmVyLCBudW1iZXJdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLl92YWx1ZSA/PyAwKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBkZXN0cm95JDogUHJpem1EZXN0cm95U2VydmljZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRDbm9iTW92ZUhhbmRsZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgbWluID0gY2hhbmdlcy5taW4/LmN1cnJlbnRWYWx1ZSA/PyB0aGlzLm1pbjtcbiAgICBjb25zdCBtYXggPSBjaGFuZ2VzLm1heD8uY3VycmVudFZhbHVlID8/IHRoaXMubWF4O1xuICAgIGNvbnN0IHN0ZXAgPSBjaGFuZ2VzLnN0ZXA/LmN1cnJlbnRWYWx1ZSA/PyB0aGlzLnN0ZXA7XG5cbiAgICBpZiAobWluID49IG1heCkge1xuICAgICAgdGhpcy5kZWZhdWx0RXJyb3JIYW5kbGVyKCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pbiA+PSBtYXgnKTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcCA8PSAwIHx8IHRoaXMudmFsdWVSYW5nZSAlIHN0ZXApIHtcbiAgICAgIHRoaXMuZGVmYXVsdEVycm9ySGFuZGxlcigpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHN0ZXAgdmFsdWUnKTtcbiAgICB9XG5cbiAgICBpZiAoKCdtaW4nIGluIGNoYW5nZXMgJiYgIWNoYW5nZXMubWluLmZpcnN0Q2hhbmdlKSB8fCAoJ21heCcgaW4gY2hhbmdlcyAmJiAhY2hhbmdlcy5tYXguZmlyc3RDaGFuZ2UpKSB7XG4gICAgICB0aGlzLnNldFBvc2l0aW9uRnJvbVZhbHVlKCk7XG4gICAgfVxuXG4gICAgaWYgKCdzaG93TWluTWF4JyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzLnNob3dNaW5NYXguZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuc2V0UG9zaXRpb25Gcm9tVmFsdWUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25Dbm9iS2V5ZG93bihjbm9iSW5kZXg6IG51bWJlciwgZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoWydBcnJvd0xlZnQnLCAnQXJyb3dEb3duJ10uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLmNub2JQb3NpdGlvbnNbY25vYkluZGV4XSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm1vdmVDbm9iT25lU3RlcChjbm9iSW5kZXgsICdiYWNrJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFsnQXJyb3dVcCcsICdBcnJvd1JpZ2h0J10uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLmNub2JQb3NpdGlvbnNbY25vYkluZGV4XSA9PT0gMTAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMubW92ZUNub2JPbmVTdGVwKGNub2JJbmRleCwgJ2ZvcndhcmQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0UG9zaXRpb24oY25vYkluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNub2JQb3NpdGlvbnNbY25vYkluZGV4XTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDbm9iVmFsdWUoY25vYkluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmFuZ2UgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWUgYXMgbnVtYmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNub2JQb3NpdGlvbiA9IHRoaXMuY25vYlBvc2l0aW9uc1tjbm9iSW5kZXhdO1xuICAgIGNvbnN0IGFub3RoZXJDbm9iUG9zaXRpb24gPSB0aGlzLmNub2JQb3NpdGlvbnNbdGhpcy5nZXRBbm90aGVyQ25vYkluZGV4KGNub2JJbmRleCldO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFNvcnRlZFZhbHVlKCkgYXMgW251bWJlciwgbnVtYmVyXTtcblxuICAgIGlmIChjbm9iUG9zaXRpb24gPCBhbm90aGVyQ25vYlBvc2l0aW9uKSB7XG4gICAgICByZXR1cm4gdmFsdWVbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZVsxXTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNjcm9sbGJhckxpbmVhckdyYWRpZW50KCk6IHN0cmluZyB7XG4gICAgbGV0IFtjbm9iMSwgY25vYjJdID0gdGhpcy5jbm9iUG9zaXRpb25zO1xuXG4gICAgaWYgKGNub2IxID4gY25vYjIpIHtcbiAgICAgIFtjbm9iMSwgY25vYjJdID0gW2Nub2IyLCBjbm9iMV07XG4gICAgfVxuXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmlzRGlzYWJsZWQgPyAndmFyKC0tZGlzYWJsZWQpJyA6ICd2YXIoLS1wcm9ncmVzcyknO1xuXG4gICAgcmV0dXJuIGBcbiAgICAke3RoaXMuaXNIb3Jpem9udGFsID8gJ3RvIHJpZ2h0JyA6ICd0byB0b3AnfSxcbiAgICB0cmFuc3BhcmVudCAwLFxuICAgIHRyYW5zcGFyZW50ICR7Y25vYjF9JSxcbiAgICAke2NvbG9yfSAke2Nub2IxfSUsXG4gICAgJHtjb2xvcn0gJHtjbm9iMn0lLFxuICAgIHRyYW5zcGFyZW50ICR7Y25vYjJ9JSxcbiAgICB0cmFuc3BhcmVudCAxMDAlYDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNIb3Jpem9udGFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogUHJpem1TbGlkZXJWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRQb3NpdGlvbkZyb21WYWx1ZSgpO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlZEZuID0gZm47XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMudG91Y2hlZEZuID0gZm47XG4gIH1cblxuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIG1vdmVDbm9iT25lU3RlcChjbm9iSW5kZXg6IG51bWJlciwgZGlyZWN0aW9uOiAnZm9yd2FyZCcgfCAnYmFjaycpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSB0aGlzLmNub2JQb3NpdGlvbnNbY25vYkluZGV4XTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdmb3J3YXJkJykge1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbnNBbmRWYWx1ZShjbm9iSW5kZXgsIGN1cnJlbnRQb3NpdGlvbiArIHRoaXMucG9zaXRpb25TdGVwU2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25zQW5kVmFsdWUoY25vYkluZGV4LCBjdXJyZW50UG9zaXRpb24gLSB0aGlzLnBvc2l0aW9uU3RlcFNpemUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHZhbHVlUmFuZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy5tYXggLSB0aGlzLm1pbik7XG4gIH1cblxuICBwcml2YXRlIGdldCBzdGVwc0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVSYW5nZSAvIHRoaXMuc3RlcDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHBvc2l0aW9uU3RlcFNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMTAwIC8gdGhpcy5zdGVwc0NvdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQb3NpdGlvbkZyb21WYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLl92YWx1ZSkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0ZXAgPSBNYXRoLmFicyh0aGlzLl92YWx1ZVtpXSAtIHRoaXMubWluKSAvIHRoaXMuc3RlcDtcbiAgICAgICAgdGhpcy5jbm9iUG9zaXRpb25zW2ldID0gKGN1cnJlbnRTdGVwIC8gdGhpcy5zdGVwc0NvdW50KSAqIDEwMDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY3VycmVudFN0ZXAgPSBNYXRoLmFicygodGhpcy5fdmFsdWUgPz8gMCkgLSB0aGlzLm1pbikgLyB0aGlzLnN0ZXA7XG4gICAgICB0aGlzLmNub2JQb3NpdGlvbnNbMV0gPSAoY3VycmVudFN0ZXAgLyB0aGlzLnN0ZXBzQ291bnQpICogMTAwO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdENub2JNb3ZlSGFuZGxlcigpOiB2b2lkIHtcbiAgICBjb25zdCBwb2ludGVyTW92ZSQgPSBmcm9tRXZlbnQ8UG9pbnRlckV2ZW50Pih0aGlzLmRvY3VtZW50LCAncG9pbnRlcm1vdmUnKTtcbiAgICBjb25zdCBwb2ludGVyVXAkID0gZnJvbUV2ZW50PFBvaW50ZXJFdmVudD4odGhpcy5kb2N1bWVudCwgJ3BvaW50ZXJ1cCcpO1xuXG4gICAgY29uc3Qgc2Nyb2xsYmFyRWwgPSB0aGlzLnNjcm9sbGJhci5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5jbm9ic1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChjbm9icyA9PlxuICAgICAgICAgIG1lcmdlKC4uLmNub2JzLm1hcChjbm9iID0+IGNub2IuZHJhZ1N0YXJ0KSkucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoeyBpbmRleCwgc2hpZnRYLCBzaGlmdFkgfSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnRvdWNoZWRGbigpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHNjcm9sbEJhclJlY3QgPSBzY3JvbGxiYXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQmFyU2l6ZSA9IHRoaXMuaXNIb3Jpem9udGFsID8gc2Nyb2xsQmFyUmVjdC53aWR0aCA6IHNjcm9sbEJhclJlY3QuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgIHJldHVybiBwb2ludGVyTW92ZSQucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zaXRpb25QeCA9IHRoaXMuaXNIb3Jpem9udGFsXG4gICAgICAgICAgICAgICAgICAgID8gZXZlbnQuY2xpZW50WCAtIHNjcm9sbEJhclJlY3QubGVmdCAtIHNoaWZ0WFxuICAgICAgICAgICAgICAgICAgICA6IHNjcm9sbEJhclNpemUgLSAoZXZlbnQuY2xpZW50WSAtIHNjcm9sbEJhclJlY3QudG9wIC0gc2hpZnRZKTtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zaXRpb24gPSAobmV3UG9zaXRpb25QeCAvIHNjcm9sbEJhclNpemUpICogMTAwO1xuXG4gICAgICAgICAgICAgICAgICAvLyDQutGD0YDRgdC+0YAg0LLRi9GI0LXQuyDQuNC3INGB0LvQsNC50LTQtdGA0LAgPT4g0L7RgdGC0LDQstC40YLRjCDQsdC10LPRg9C90L7QuiDQsiDQtdCz0L4g0LPRgNCw0L3QuNGG0LDRhS5cbiAgICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvblB4IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uUHggPiBzY3JvbGxCYXJTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxMDA7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbjogbnVtYmVyID0gdGhpcy5jbm9iUG9zaXRpb25zW2luZGV4XTtcblxuICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGN1cnJlbnRQb3NpdGlvbiAtIG5ld1Bvc2l0aW9uKSA8IHRoaXMucG9zaXRpb25TdGVwU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gY3VycmVudFBvc2l0aW9uIC0gbmV3UG9zaXRpb247XG5cbiAgICAgICAgICAgICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiArXG4gICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLmFicyhkaWZmKSAvIHRoaXMucG9zaXRpb25TdGVwU2l6ZSkgKiB0aGlzLnBvc2l0aW9uU3RlcFNpemVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uIC1cbiAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGguYWJzKGRpZmYpIC8gdGhpcy5wb3NpdGlvblN0ZXBTaXplKSAqIHRoaXMucG9zaXRpb25TdGVwU2l6ZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgICAgICAgICAgdGFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25zQW5kVmFsdWUoaW5kZXgsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0YWtlVW50aWwocG9pbnRlclVwJClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cbiAgcHJpdmF0ZSBnZXRBbm90aGVyQ25vYkluZGV4KGN1cnJlbnRDbm9iSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGN1cnJlbnRDbm9iSW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVBvc2l0aW9uc0FuZFZhbHVlKGNub2JJbmRleDogbnVtYmVyLCBwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jbm9iUG9zaXRpb25zW2Nub2JJbmRleF0gPSBwb3NpdGlvbjtcblxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5taW4gKyAodGhpcy52YWx1ZVJhbmdlICogcG9zaXRpb24pIC8gMTAwO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5fdmFsdWUpKSB7XG4gICAgICB0aGlzLl92YWx1ZVtjbm9iSW5kZXhdID0gTWF0aC5yb3VuZChuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gTWF0aC5yb3VuZChuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VkRm4odGhpcy5nZXRTb3J0ZWRWYWx1ZSgpKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVmYXVsdEVycm9ySGFuZGxlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBbMCwgMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLnNldFBvc2l0aW9uRnJvbVZhbHVlKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ2YWx1ZVwiICpuZ0lmPVwic2hvd01pbk1heFwiIFtuZ0NsYXNzXT1cInsgJ3ZhbHVlLS1taW4nOiBpc0hvcml6b250YWwsICd2YWx1ZS0tbWF4JzogIWlzSG9yaXpvbnRhbCB9XCI+XG4gIHt7IGlzSG9yaXpvbnRhbCA/IG1pbiA6IG1heCB9fVxuPC9kaXY+XG48ZGl2XG4gIGNsYXNzPVwic2Nyb2xsYmFyXCJcbiAgI3Njcm9sbGJhclxuICBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ2xpbmVhci1ncmFkaWVudCgnICsgc2Nyb2xsYmFyTGluZWFyR3JhZGllbnQgKyAnKScgfVwiXG4+XG4gIDxkaXYgY2xhc3M9XCJzY3JvbGxiYXJfX3RyYWNrXCIgI3RyYWNrPlxuICAgIDxwcml6bS1zbGlkZXItY25vYlxuICAgICAgY2xhc3M9XCJzY3JvbGxiYXJfX2Nub2IgcHJpem0tc2xpZGVyLWNub2JcIlxuICAgICAgKm5nSWY9XCJyYW5nZVwiXG4gICAgICBbaW5kZXhdPVwiMFwiXG4gICAgICBbc3R5bGUubGVmdC4lXT1cImlzSG9yaXpvbnRhbCA/IGdldFBvc2l0aW9uKDApIDogbnVsbFwiXG4gICAgICBbc3R5bGUuYm90dG9tLiVdPVwiaXNIb3Jpem9udGFsID8gbnVsbCA6IGdldFBvc2l0aW9uKDApXCJcbiAgICAgIFtzaG93VmFsdWVPbl09XCJjbm9iVmFsdWVQb3NpdGlvblwiXG4gICAgICBbdmFsdWVdPVwic2hvd1ZhbHVlICYmIGlzRGlzYWJsZWQgPT09IGZhbHNlID8gZ2V0Q25vYlZhbHVlKDApIDogbnVsbFwiXG4gICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAoa2V5ZG93bik9XCJvbkNub2JLZXlkb3duKDAsICRldmVudClcIlxuICAgID48L3ByaXptLXNsaWRlci1jbm9iPlxuXG4gICAgPHByaXptLXNsaWRlci1jbm9iXG4gICAgICBjbGFzcz1cInNjcm9sbGJhcl9fY25vYiBwcml6bS1zbGlkZXItY25vYlwiXG4gICAgICBbaW5kZXhdPVwiMVwiXG4gICAgICBbc3R5bGUubGVmdC4lXT1cImlzSG9yaXpvbnRhbCA/IGdldFBvc2l0aW9uKDEpIDogbnVsbFwiXG4gICAgICBbc3R5bGUuYm90dG9tLiVdPVwiaXNIb3Jpem9udGFsID8gbnVsbCA6IGdldFBvc2l0aW9uKDEpXCJcbiAgICAgIFt2YWx1ZV09XCJzaG93VmFsdWUgJiYgaXNEaXNhYmxlZCA9PT0gZmFsc2UgPyBnZXRDbm9iVmFsdWUoMSkgOiBudWxsXCJcbiAgICAgIFtzaG93VmFsdWVPbl09XCJjbm9iVmFsdWVQb3NpdGlvblwiXG4gICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAoa2V5ZG93bik9XCJvbkNub2JLZXlkb3duKDEsICRldmVudClcIlxuICAgID48L3ByaXptLXNsaWRlci1jbm9iPlxuICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cInZhbHVlXCIgKm5nSWY9XCJzaG93TWluTWF4XCIgW25nQ2xhc3NdPVwieyAndmFsdWUtLW1heCc6IGlzSG9yaXpvbnRhbCwgJ3ZhbHVlLS1taW4nOiAhaXNIb3Jpem9udGFsIH1cIj5cbiAge3sgaXNIb3Jpem9udGFsID8gbWF4IDogbWluIH19XG48L2Rpdj5cbiJdfQ==