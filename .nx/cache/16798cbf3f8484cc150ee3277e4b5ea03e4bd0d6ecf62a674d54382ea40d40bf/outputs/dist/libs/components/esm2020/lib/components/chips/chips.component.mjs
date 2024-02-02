import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, HostBinding, Input, Output, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmOverlayOutsidePlacement } from '../../modules';
import { BehaviorSubject, Subscription, timer } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { PrizmCallFuncPipe, PrizmDestroyService, PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { PrizmElementReadyDirective, PrizmHintDirective, PrizmLifecycleDirective } from '../../directives';
import { PrizmChipsItemComponent } from './chips-item';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/helpers";
export class PrizmChipsComponent extends PrizmAbstractTestId {
    set chips(data) {
        this.chipsList = data;
    }
    constructor(cdRef, destroy$) {
        super();
        this.cdRef = cdRef;
        this.destroy$ = destroy$;
        this.size = 'l';
        this.deletable = true;
        this.singleLine = true;
        this.hintCanShow = true;
        this.hintDirection = PrizmOverlayOutsidePlacement.RIGHT;
        this.addChipEvent = new EventEmitter();
        this.removeChipEvent = new EventEmitter();
        this.clickChipEvent = new EventEmitter();
        this.testId_ = 'ui_chips';
        this.accessorIsDisabled = false;
        this.overflowedChipsList$ = new BehaviorSubject(new Set());
        this.chipsList$ = new BehaviorSubject([]);
        this.subscription = new Subscription();
        this.ready = (el) => {
            const { x, y } = el.nativeElement.getBoundingClientRect();
            return Math.max(x, y) > 0;
        };
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        this.onChange = () => { };
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        this.onTouched = () => { };
    }
    get chipsList() {
        return this.chipsList$.getValue() ?? [];
    }
    set chipsList(data) {
        this.chipsList$.next(data);
    }
    addChips(chipName) {
        if (this.accessorIsDisabled)
            return;
        this.chipsList = [...this.chipsList, chipName];
        this.addChipEvent.emit(chipName);
        this.cdRef.markForCheck();
    }
    removeChips(event, idx) {
        if (this.accessorIsDisabled)
            return;
        this.overflowedChipsList$.value.delete(idx);
        this.overflowedChipsList$.next(this.overflowedChipsList$.value);
        event.stopPropagation();
        this.removeChipEvent.emit(this.chipsList[idx]);
        this.chipsList = this.chipsList.filter((item, i) => i !== idx);
        this.cdRef.markForCheck();
    }
    chipClick(chipName) {
        this.clickChipEvent.emit(chipName);
    }
    ngOnInit() {
        this.subscription = this.chipsList$.pipe(takeUntil(this.destroy$)).subscribe(chips => {
            this.onChange(chips);
        });
    }
    ngOnDestroy() {
        this.chipsList$.complete();
        this.subscription.unsubscribe();
    }
    writeValue(data) {
        this.chipsList = data;
    }
    setDisabledState(isDisabled) {
        this.accessorIsDisabled = isDisabled;
        this.cdRef.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    isChipsContent$(observable, parent, singleLine, chips, idx, allChipsCount) {
        return this.chipsList$.pipe(switchMap(() => observable), map((current) => {
            if (idx === 0)
                this.overflowedChipsList$.value.clear();
            if (!singleLine || this.chipsList.length === 1)
                return false;
            if (idx === 0)
                return 0;
            const maxPadding = 2;
            const needWidthPlaceForShowDots = 35;
            const offsetY = Math.abs(parent.offsetTop - current.nativeElement.offsetTop) > maxPadding;
            const parentX = parent.offsetLeft + parent.offsetWidth;
            const currentX = current.nativeElement.offsetLeft + current.nativeElement.offsetWidth;
            const result = offsetY || parentX - currentX < needWidthPlaceForShowDots;
            if (result)
                this.overflowedChipsList$.value.add(idx);
            else
                this.overflowedChipsList$.value.delete(idx);
            this.overflowedChipsList$.next(this.overflowedChipsList$.value);
            return result;
        }), map(i => (i ? 'hidden' : 'visible')));
    }
    getOverflowedChipsListHint() {
        const list = [...this.overflowedChipsList$.value.values()];
        return [...list]
            .map(i => {
            return this.chipsList[i];
        })
            .join(', ');
    }
    ngAfterViewInit() {
        timer(0).subscribe(() => {
            this.chipsList = [...this.chipsList];
        });
    }
    trackByIdx(idx) {
        return idx;
    }
}
PrizmChipsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmChipsComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Component });
PrizmChipsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmChipsComponent, isStandalone: true, selector: "prizm-chips", inputs: { size: "size", chips: "chips", deletable: "deletable", singleLine: "singleLine", hintCanShow: "hintCanShow", hintDirection: "hintDirection" }, outputs: { addChipEvent: "addChipEvent", removeChipEvent: "removeChipEvent", clickChipEvent: "clickChipEvent" }, host: { properties: { "attr.data-size": "this.size" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PrizmChipsComponent),
            multi: true,
        },
        PrizmDestroyService,
    ], usesInheritance: true, ngImport: i0, template: "<div\n  class=\"chips-list\"\n  #prizmElementReady=\"prizmElementReady\"\n  #parent\n  *ngIf=\"!!(chipsList$ | async)?.length\"\n  [class.hidden]=\"singleLine\"\n  [checker]=\"ready\"\n  prizmElementReady\n>\n  <ng-container *ngIf=\"prizmElementReady.ready$ | async\">\n    <ng-container\n      *ngFor=\"let item of chipsList$ | async; let i = index; trackBy: trackByIdx\"\n      [ngTemplateOutlet]=\"buttonTemplate\"\n      [ngTemplateOutletContext]=\"{\n        item: item,\n        idx: i,\n        allChipsCount: (chipsList$ | async)?.length ?? 0,\n        parent: parent,\n        singleLine: singleLine\n      }\"\n    >\n    </ng-container>\n\n    <ng-container *ngIf=\"overflowedChipsList$ | async as chipsOverflowedList\">\n      <div\n        class=\"more-item\"\n        *ngIf=\"chipsOverflowedList.size\"\n        [prizmHint]=\"getOverflowedChipsListHint()\"\n        [prizmHintDirection]=\"hintDirection\"\n      >\n        ...\n      </div>\n    </ng-container>\n  </ng-container>\n</div>\n\n<ng-template\n  #buttonTemplate\n  let-item=\"item\"\n  let-idx=\"idx\"\n  let-parent=\"parent\"\n  let-background=\"background\"\n  let-hint=\"hint\"\n  let-allChipsCount=\"allChipsCount\"\n  let-hideDelete=\"hideDelete\"\n  let-singleLine=\"singleLine\"\n  let-forceShowHint=\"forceShowHint\"\n>\n  <prizm-chips-item\n    class=\"{{\n      prizmLifecycle.afterViewInit$\n        | prizmCallFunc : isChipsContent$ : parent : singleLine : item : idx : allChipsCount\n        | async\n    }}\"\n    #prizmLifecycle=\"prizmLifecycle\"\n    [hintCanShow]=\"hintCanShow\"\n    [hintDirection]=\"hintDirection\"\n    [class.single-line]=\"singleLine\"\n    [hintText]=\"item\"\n    [deletable]=\"!hideDelete && deletable\"\n    [disabled]=\"accessorIsDisabled\"\n    (deleted)=\"removeChips($event, idx)\"\n    (click)=\"chipClick(item)\"\n    prizmLifecycle\n  >\n    {{ item }}\n  </prizm-chips-item>\n</ng-template>\n", styles: [":host{display:inline-flex;width:100%}:host .chips-list{width:100%;padding:0 12px 12px 0;display:flex;flex-wrap:wrap;gap:4px}:host .chips-list prizm-chips-item{visibility:hidden;max-width:100%}:host .chips-list prizm-chips-item.single-line{max-width:100%}:host .chips-list prizm-chips-item.hidden{display:none}:host .chips-list prizm-chips-item.visible{visibility:visible}:host .chips-list.hidden{height:20px;padding-top:1px;width:100%}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: PrizmChipsItemComponent, selector: "prizm-chips-item", inputs: ["disabled", "selected", "deletable", "hintCanShow", "hintText", "hintDirection"], outputs: ["deleted"] }, { kind: "pipe", type: PrizmCallFuncPipe, name: "prizmCallFunc" }, { kind: "directive", type: PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "directive", type: PrizmElementReadyDirective, selector: "[prizmElementReady]", inputs: ["interval", "checker"], outputs: ["ready$"], exportAs: ["prizmElementReady"] }, { kind: "directive", type: PrizmHintDirective, selector: "[prizmHint]:not(ng-container)", inputs: ["prizmAutoReposition", "prizmHintDirection", "prizmHintId", "prizmHintTheme", "prizmHintShowDelay", "prizmHintHideDelay", "prizmHintHost", "prizmHintContext", "prizmHintCanShow", "prizmHint"], outputs: ["prizmHintShowed"], exportAs: ["prizmHint"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmChipsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-chips', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PrizmChipsComponent),
                            multi: true,
                        },
                        PrizmDestroyService,
                    ], standalone: true, imports: [
                        NgIf,
                        NgFor,
                        NgTemplateOutlet,
                        AsyncPipe,
                        PrizmChipsItemComponent,
                        PrizmCallFuncPipe,
                        PrizmLifecycleDirective,
                        PrizmElementReadyDirective,
                        PrizmLetDirective,
                        PrizmHintDirective,
                    ], template: "<div\n  class=\"chips-list\"\n  #prizmElementReady=\"prizmElementReady\"\n  #parent\n  *ngIf=\"!!(chipsList$ | async)?.length\"\n  [class.hidden]=\"singleLine\"\n  [checker]=\"ready\"\n  prizmElementReady\n>\n  <ng-container *ngIf=\"prizmElementReady.ready$ | async\">\n    <ng-container\n      *ngFor=\"let item of chipsList$ | async; let i = index; trackBy: trackByIdx\"\n      [ngTemplateOutlet]=\"buttonTemplate\"\n      [ngTemplateOutletContext]=\"{\n        item: item,\n        idx: i,\n        allChipsCount: (chipsList$ | async)?.length ?? 0,\n        parent: parent,\n        singleLine: singleLine\n      }\"\n    >\n    </ng-container>\n\n    <ng-container *ngIf=\"overflowedChipsList$ | async as chipsOverflowedList\">\n      <div\n        class=\"more-item\"\n        *ngIf=\"chipsOverflowedList.size\"\n        [prizmHint]=\"getOverflowedChipsListHint()\"\n        [prizmHintDirection]=\"hintDirection\"\n      >\n        ...\n      </div>\n    </ng-container>\n  </ng-container>\n</div>\n\n<ng-template\n  #buttonTemplate\n  let-item=\"item\"\n  let-idx=\"idx\"\n  let-parent=\"parent\"\n  let-background=\"background\"\n  let-hint=\"hint\"\n  let-allChipsCount=\"allChipsCount\"\n  let-hideDelete=\"hideDelete\"\n  let-singleLine=\"singleLine\"\n  let-forceShowHint=\"forceShowHint\"\n>\n  <prizm-chips-item\n    class=\"{{\n      prizmLifecycle.afterViewInit$\n        | prizmCallFunc : isChipsContent$ : parent : singleLine : item : idx : allChipsCount\n        | async\n    }}\"\n    #prizmLifecycle=\"prizmLifecycle\"\n    [hintCanShow]=\"hintCanShow\"\n    [hintDirection]=\"hintDirection\"\n    [class.single-line]=\"singleLine\"\n    [hintText]=\"item\"\n    [deletable]=\"!hideDelete && deletable\"\n    [disabled]=\"accessorIsDisabled\"\n    (deleted)=\"removeChips($event, idx)\"\n    (click)=\"chipClick(item)\"\n    prizmLifecycle\n  >\n    {{ item }}\n  </prizm-chips-item>\n</ng-template>\n", styles: [":host{display:inline-flex;width:100%}:host .chips-list{width:100%;padding:0 12px 12px 0;display:flex;flex-wrap:wrap;gap:4px}:host .chips-list prizm-chips-item{visibility:hidden;max-width:100%}:host .chips-list prizm-chips-item.single-line{max-width:100%}:host .chips-list prizm-chips-item.hidden{display:none}:host .chips-list prizm-chips-item.visible{visibility:visible}:host .chips-list.hidden{height:20px;padding-top:1px;width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.PrizmDestroyService }]; }, propDecorators: { size: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.data-size']
            }], chips: [{
                type: Input
            }], deletable: [{
                type: Input
            }], singleLine: [{
                type: Input
            }], hintCanShow: [{
                type: Input
            }], hintDirection: [{
                type: Input
            }], addChipEvent: [{
                type: Output
            }], removeChipEvent: [{
                type: Output
            }], clickChipEvent: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9jaGlwcy9jaGlwcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NoaXBzL2NoaXBzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBR0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxrQkFBa0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzNHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBNkJ2RCxN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LGFBQWEsbUJBR04sdUJBQXVCLENBQUMsTUFBTSxhQUNwQzt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQzs0QkFDbEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0QsbUJBQW1CO3FCQUNwQixjQUNXLElBQUksV0FDUDt3QkFDUCxJQUFJO3dCQUNKLEtBQUs7d0JBQ0wsZ0JBQWdCO3dCQUNoQixTQUFTO3dCQUNULHVCQUF1Qjt3QkFDdkIsaUJBQWlCO3dCQUNqQix1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsaUJBQWlCO3dCQUNqQixrQkFBa0I7cUJBQ25COzBJQU04QyxJQUFJO3NCQUFsRCxLQUFLOztzQkFBSSxXQUFXO3VCQUFDLGdCQUFnQjtnQkFDekIsS0FBSztzQkFBakIsS0FBSztnQkFHVSxTQUFTO3NCQUF4QixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBQ1UsV0FBVztzQkFBMUIsS0FBSztnQkFDVSxhQUFhO3NCQUE1QixLQUFLO2dCQUVXLFlBQVk7c0JBQTVCLE1BQU07Z0JBQ1UsZUFBZTtzQkFBL0IsTUFBTTtnQkFDVSxjQUFjO3NCQUE5QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptT3ZlcmxheU91dHNpZGVQbGFjZW1lbnQgfSBmcm9tICcuLi8uLi9tb2R1bGVzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptQ2FsbEZ1bmNQaXBlLCBQcml6bURlc3Ryb3lTZXJ2aWNlLCBQcml6bUxldERpcmVjdGl2ZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBBc3luY1BpcGUsIE5nRm9yLCBOZ0lmLCBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByaXptRWxlbWVudFJlYWR5RGlyZWN0aXZlLCBQcml6bUhpbnREaXJlY3RpdmUsIFByaXptTGlmZWN5Y2xlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBQcml6bUNoaXBzSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY2hpcHMtaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLWNoaXBzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoaXBzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hpcHMuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHJpem1DaGlwc0NvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ0lmLFxuICAgIE5nRm9yLFxuICAgIE5nVGVtcGxhdGVPdXRsZXQsXG4gICAgQXN5bmNQaXBlLFxuICAgIFByaXptQ2hpcHNJdGVtQ29tcG9uZW50LFxuICAgIFByaXptQ2FsbEZ1bmNQaXBlLFxuICAgIFByaXptTGlmZWN5Y2xlRGlyZWN0aXZlLFxuICAgIFByaXptRWxlbWVudFJlYWR5RGlyZWN0aXZlLFxuICAgIFByaXptTGV0RGlyZWN0aXZlLFxuICAgIFByaXptSGludERpcmVjdGl2ZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1DaGlwc0NvbXBvbmVudFxuICBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWRcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXRcbntcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtc2l6ZScpIHB1YmxpYyBzaXplOiAncycgfCAnbCcgPSAnbCc7XG4gIEBJbnB1dCgpIHNldCBjaGlwcyhkYXRhOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuY2hpcHNMaXN0ID0gZGF0YTtcbiAgfVxuICBASW5wdXQoKSBwdWJsaWMgZGVsZXRhYmxlID0gdHJ1ZTtcbiAgQElucHV0KCkgcHVibGljIHNpbmdsZUxpbmUgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgaGludENhblNob3cgPSB0cnVlO1xuICBASW5wdXQoKSBwdWJsaWMgaGludERpcmVjdGlvbjogUHJpem1PdmVybGF5T3V0c2lkZVBsYWNlbWVudCA9IFByaXptT3ZlcmxheU91dHNpZGVQbGFjZW1lbnQuUklHSFQ7XG5cbiAgQE91dHB1dCgpIHB1YmxpYyBhZGRDaGlwRXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIHJlbW92ZUNoaXBFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xpY2tDaGlwRXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfY2hpcHMnO1xuXG4gIHB1YmxpYyBhY2Nlc3NvcklzRGlzYWJsZWQgPSBmYWxzZTtcbiAgcHVibGljIHJlYWRvbmx5IG92ZXJmbG93ZWRDaGlwc0xpc3QkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTZXQ8bnVtYmVyPj4obmV3IFNldCgpKTtcblxuICBwdWJsaWMgY2hpcHNMaXN0JDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZ1tdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+KFtdKTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcmVhZG9ubHkgcmVhZHk6IChlbDogRWxlbWVudFJlZikgPT4gYm9vbGVhbiA9IChlbDogRWxlbWVudFJlZikgPT4ge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoeCwgeSkgPiAwO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3kkOiBQcml6bURlc3Ryb3lTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgcHVibGljIG9uQ2hhbmdlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICBwdWJsaWMgb25Ub3VjaGVkOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBnZXQgY2hpcHNMaXN0KCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5jaGlwc0xpc3QkLmdldFZhbHVlKCkgPz8gKFtdIGFzIHN0cmluZ1tdKTtcbiAgfVxuXG4gIHNldCBjaGlwc0xpc3QoZGF0YTogc3RyaW5nW10pIHtcbiAgICB0aGlzLmNoaXBzTGlzdCQubmV4dChkYXRhKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDaGlwcyhjaGlwTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWNjZXNzb3JJc0Rpc2FibGVkKSByZXR1cm47XG4gICAgdGhpcy5jaGlwc0xpc3QgPSBbLi4udGhpcy5jaGlwc0xpc3QsIGNoaXBOYW1lXTtcbiAgICB0aGlzLmFkZENoaXBFdmVudC5lbWl0KGNoaXBOYW1lKTtcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUNoaXBzKGV2ZW50OiBNb3VzZUV2ZW50LCBpZHg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjY2Vzc29ySXNEaXNhYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMub3ZlcmZsb3dlZENoaXBzTGlzdCQudmFsdWUuZGVsZXRlKGlkeCk7XG4gICAgdGhpcy5vdmVyZmxvd2VkQ2hpcHNMaXN0JC5uZXh0KHRoaXMub3ZlcmZsb3dlZENoaXBzTGlzdCQudmFsdWUpO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5yZW1vdmVDaGlwRXZlbnQuZW1pdCh0aGlzLmNoaXBzTGlzdFtpZHhdKTtcbiAgICB0aGlzLmNoaXBzTGlzdCA9IHRoaXMuY2hpcHNMaXN0LmZpbHRlcigoaXRlbSwgaSkgPT4gaSAhPT0gaWR4KTtcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGNoaXBDbGljayhjaGlwTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jbGlja0NoaXBFdmVudC5lbWl0KGNoaXBOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY2hpcHNMaXN0JC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGNoaXBzID0+IHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hpcHMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2hpcHNMaXN0JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgd3JpdGVWYWx1ZShkYXRhOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuY2hpcHNMaXN0ID0gZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmFjY2Vzc29ySXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHB1YmxpYyBpc0NoaXBzQ29udGVudCQoXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxFbGVtZW50UmVmPixcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICAgIHNpbmdsZUxpbmU6IGJvb2xlYW4sXG4gICAgY2hpcHM6IHN0cmluZyxcbiAgICBpZHg6IG51bWJlcixcbiAgICBhbGxDaGlwc0NvdW50OiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGlwc0xpc3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gb2JzZXJ2YWJsZSksXG4gICAgICBtYXAoKGN1cnJlbnQ6IEVsZW1lbnRSZWYpID0+IHtcbiAgICAgICAgaWYgKGlkeCA9PT0gMCkgdGhpcy5vdmVyZmxvd2VkQ2hpcHNMaXN0JC52YWx1ZS5jbGVhcigpO1xuICAgICAgICBpZiAoIXNpbmdsZUxpbmUgfHwgdGhpcy5jaGlwc0xpc3QubGVuZ3RoID09PSAxKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChpZHggPT09IDApIHJldHVybiAwO1xuICAgICAgICBjb25zdCBtYXhQYWRkaW5nID0gMjtcbiAgICAgICAgY29uc3QgbmVlZFdpZHRoUGxhY2VGb3JTaG93RG90cyA9IDM1O1xuICAgICAgICBjb25zdCBvZmZzZXRZID0gTWF0aC5hYnMocGFyZW50Lm9mZnNldFRvcCAtIGN1cnJlbnQubmF0aXZlRWxlbWVudC5vZmZzZXRUb3ApID4gbWF4UGFkZGluZztcblxuICAgICAgICBjb25zdCBwYXJlbnRYID0gcGFyZW50Lm9mZnNldExlZnQgKyBwYXJlbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRYID0gY3VycmVudC5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQgKyBjdXJyZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG9mZnNldFkgfHwgcGFyZW50WCAtIGN1cnJlbnRYIDwgbmVlZFdpZHRoUGxhY2VGb3JTaG93RG90cztcblxuICAgICAgICBpZiAocmVzdWx0KSB0aGlzLm92ZXJmbG93ZWRDaGlwc0xpc3QkLnZhbHVlLmFkZChpZHgpO1xuICAgICAgICBlbHNlIHRoaXMub3ZlcmZsb3dlZENoaXBzTGlzdCQudmFsdWUuZGVsZXRlKGlkeCk7XG5cbiAgICAgICAgdGhpcy5vdmVyZmxvd2VkQ2hpcHNMaXN0JC5uZXh0KHRoaXMub3ZlcmZsb3dlZENoaXBzTGlzdCQudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KSxcbiAgICAgIG1hcChpID0+IChpID8gJ2hpZGRlbicgOiAndmlzaWJsZScpKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0T3ZlcmZsb3dlZENoaXBzTGlzdEhpbnQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBsaXN0ID0gWy4uLnRoaXMub3ZlcmZsb3dlZENoaXBzTGlzdCQudmFsdWUudmFsdWVzKCldO1xuICAgIHJldHVybiBbLi4ubGlzdF1cbiAgICAgIC5tYXAoaSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaXBzTGlzdFtpXTtcbiAgICAgIH0pXG4gICAgICAuam9pbignLCAnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aW1lcigwKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jaGlwc0xpc3QgPSBbLi4udGhpcy5jaGlwc0xpc3RdO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHRyYWNrQnlJZHgoaWR4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBpZHg7XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJjaGlwcy1saXN0XCJcbiAgI3ByaXptRWxlbWVudFJlYWR5PVwicHJpem1FbGVtZW50UmVhZHlcIlxuICAjcGFyZW50XG4gICpuZ0lmPVwiISEoY2hpcHNMaXN0JCB8IGFzeW5jKT8ubGVuZ3RoXCJcbiAgW2NsYXNzLmhpZGRlbl09XCJzaW5nbGVMaW5lXCJcbiAgW2NoZWNrZXJdPVwicmVhZHlcIlxuICBwcml6bUVsZW1lbnRSZWFkeVxuPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicHJpem1FbGVtZW50UmVhZHkucmVhZHkkIHwgYXN5bmNcIj5cbiAgICA8bmctY29udGFpbmVyXG4gICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjaGlwc0xpc3QkIHwgYXN5bmM7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlJZHhcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uVGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgaWR4OiBpLFxuICAgICAgICBhbGxDaGlwc0NvdW50OiAoY2hpcHNMaXN0JCB8IGFzeW5jKT8ubGVuZ3RoID8/IDAsXG4gICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICBzaW5nbGVMaW5lOiBzaW5nbGVMaW5lXG4gICAgICB9XCJcbiAgICA+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3ZlcmZsb3dlZENoaXBzTGlzdCQgfCBhc3luYyBhcyBjaGlwc092ZXJmbG93ZWRMaXN0XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwibW9yZS1pdGVtXCJcbiAgICAgICAgKm5nSWY9XCJjaGlwc092ZXJmbG93ZWRMaXN0LnNpemVcIlxuICAgICAgICBbcHJpem1IaW50XT1cImdldE92ZXJmbG93ZWRDaGlwc0xpc3RIaW50KClcIlxuICAgICAgICBbcHJpem1IaW50RGlyZWN0aW9uXT1cImhpbnREaXJlY3Rpb25cIlxuICAgICAgPlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGVcbiAgI2J1dHRvblRlbXBsYXRlXG4gIGxldC1pdGVtPVwiaXRlbVwiXG4gIGxldC1pZHg9XCJpZHhcIlxuICBsZXQtcGFyZW50PVwicGFyZW50XCJcbiAgbGV0LWJhY2tncm91bmQ9XCJiYWNrZ3JvdW5kXCJcbiAgbGV0LWhpbnQ9XCJoaW50XCJcbiAgbGV0LWFsbENoaXBzQ291bnQ9XCJhbGxDaGlwc0NvdW50XCJcbiAgbGV0LWhpZGVEZWxldGU9XCJoaWRlRGVsZXRlXCJcbiAgbGV0LXNpbmdsZUxpbmU9XCJzaW5nbGVMaW5lXCJcbiAgbGV0LWZvcmNlU2hvd0hpbnQ9XCJmb3JjZVNob3dIaW50XCJcbj5cbiAgPHByaXptLWNoaXBzLWl0ZW1cbiAgICBjbGFzcz1cInt7XG4gICAgICBwcml6bUxpZmVjeWNsZS5hZnRlclZpZXdJbml0JFxuICAgICAgICB8IHByaXptQ2FsbEZ1bmMgOiBpc0NoaXBzQ29udGVudCQgOiBwYXJlbnQgOiBzaW5nbGVMaW5lIDogaXRlbSA6IGlkeCA6IGFsbENoaXBzQ291bnRcbiAgICAgICAgfCBhc3luY1xuICAgIH19XCJcbiAgICAjcHJpem1MaWZlY3ljbGU9XCJwcml6bUxpZmVjeWNsZVwiXG4gICAgW2hpbnRDYW5TaG93XT1cImhpbnRDYW5TaG93XCJcbiAgICBbaGludERpcmVjdGlvbl09XCJoaW50RGlyZWN0aW9uXCJcbiAgICBbY2xhc3Muc2luZ2xlLWxpbmVdPVwic2luZ2xlTGluZVwiXG4gICAgW2hpbnRUZXh0XT1cIml0ZW1cIlxuICAgIFtkZWxldGFibGVdPVwiIWhpZGVEZWxldGUgJiYgZGVsZXRhYmxlXCJcbiAgICBbZGlzYWJsZWRdPVwiYWNjZXNzb3JJc0Rpc2FibGVkXCJcbiAgICAoZGVsZXRlZCk9XCJyZW1vdmVDaGlwcygkZXZlbnQsIGlkeClcIlxuICAgIChjbGljayk9XCJjaGlwQ2xpY2soaXRlbSlcIlxuICAgIHByaXptTGlmZWN5Y2xlXG4gID5cbiAgICB7eyBpdGVtIH19XG4gIDwvcHJpem0tY2hpcHMtaXRlbT5cbjwvbmctdGVtcGxhdGU+XG4iXX0=