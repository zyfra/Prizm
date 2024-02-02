import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Inject, Injector, Input, Output, TemplateRef, ViewChild, } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { getProviderPrizmDateLeftButtons, PRIZM_DATE_RIGHT_BUTTONS, } from '../../../tokens/date-extra-buttons';
import { BehaviorSubject } from 'rxjs';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmInputTextModule } from '../input-text';
import { PolymorphOutletDirective, PrizmLifecycleModule } from '../../../directives';
import { ReactiveFormsModule } from '@angular/forms';
import { PrizmDataListComponent } from '../../data-list';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';
import { PrizmListingItemComponent } from '../../listing-item';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../common/input-icon-button/input-icon-button.component";
import * as i3 from "../../../directives/lifecycle/lifecycle.directive";
import * as i4 from "rxjs";
export class PrizmInputDateMultiComponent extends PrizmAbstractTestId {
    set items(value) {
        this._items$.next(value);
    }
    get items() {
        return this._items$.value;
    }
    get context() {
        return {
            injector: this.injector,
        };
    }
    constructor(leftButtons$, cdRef, injector) {
        super();
        this.leftButtons$ = leftButtons$;
        this.cdRef = cdRef;
        this.injector = injector;
        this._items$ = new BehaviorSubject([]);
        this.currentIdx = 0;
        this.currentIdxChange = new EventEmitter();
        this.testId_ = 'ui_input_date_multi';
        this.open = false;
    }
    ngOnInit() {
        this.leftButtons$.next([
            {
                template: this.buttonLeftTemplate,
            },
        ]);
    }
    openDropdown() {
        this.open = true;
    }
    setListener(el) {
        el.addEventListener('click', ev => {
            // TODO remove after finish activezone to dropdown component
            ev.stopPropagation();
            this.openDropdown();
            this.cdRef.markForCheck();
        }, {
            capture: true,
            passive: true,
        });
    }
    select(idx) {
        this.currentIdxChange.next((this.currentIdx = idx));
        this.open = false;
        this.cdRef.markForCheck();
    }
}
PrizmInputDateMultiComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateMultiComponent, deps: [{ token: PRIZM_DATE_RIGHT_BUTTONS }, { token: i0.ChangeDetectorRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputDateMultiComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputDateMultiComponent, isStandalone: true, selector: "prizm-input-date-multi", inputs: { items: "items", currentIdx: "currentIdx" }, outputs: { currentIdxChange: "currentIdxChange" }, host: { properties: { "attr.data-testid": "this.testId_" } }, providers: [getProviderPrizmDateLeftButtons()], viewQueries: [{ propertyName: "buttonLeftTemplate", first: true, predicate: ["buttonLeft"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [(isOpen)]=\"open\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  prizmDropdownHostWidth=\"100%\"\n>\n  <ng-container *ngFor=\"let item of items; let idx = index\">\n    <ng-container *ngIf=\"idx === currentIdx\">\n      <ng-container *ngTemplateOutlet=\"item.template as data; context: context\"></ng-container>\n    </ng-container>\n  </ng-container>\n</prizm-dropdown-host>\n\n<ng-template #dropdown>\n  <prizm-data-list class=\"block\">\n    <ng-container *ngIf=\"items?.length\">\n      <prizm-listing-item\n        *ngFor=\"let item of items; let idx = index\"\n        [selected]=\"idx === currentIdx\"\n        (click)=\"select(idx)\"\n      >\n        {{ item.name }}\n      </prizm-listing-item>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n\n<ng-template #buttonLeft>\n  <button\n    [interactive]=\"true\"\n    (prizmAfterViewInit)=\"setListener($event.nativeElement)\"\n    prizmInputIconButton=\"chevrons-dropdown-small\"\n  ></button>\n</ng-template>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.block{padding:8px 0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "component", type: i2.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "directive", type: i3.PrizmLifecycleDirective, selector: "[prizmLifecycle], [prizmAfterViewInit], [prizmAfterContentInit], [prizmOnInit], [prizmOnDestroy]", outputs: ["prizmAfterViewInit", "prizmOnInit", "prizmAfterContentInit", "prizmOnDestroy"], exportAs: ["prizmLifecycle"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "component", type: PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "component", type: PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "component", type: PrizmListingItemComponent, selector: "prizm-listing-item", inputs: ["disabled", "selected"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], PrizmInputDateMultiComponent.prototype, "items", null);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputDateMultiComponent.prototype, "currentIdx", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputDateMultiComponent, decorators: [{
            type: Component,
            args: [{ selector: `prizm-input-date-multi`, changeDetection: ChangeDetectionStrategy.OnPush, providers: [getProviderPrizmDateLeftButtons()], standalone: true, imports: [
                        CommonModule,
                        PrizmInputTextModule,
                        PrizmLifecycleModule,
                        ReactiveFormsModule,
                        PrizmDataListComponent,
                        PolymorphOutletDirective,
                        PrizmDropdownHostComponent,
                        PrizmListingItemComponent,
                    ], template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [(isOpen)]=\"open\"\n  [content]=\"dropdown\"\n  [closeByEsc]=\"true\"\n  prizmDropdownHostWidth=\"100%\"\n>\n  <ng-container *ngFor=\"let item of items; let idx = index\">\n    <ng-container *ngIf=\"idx === currentIdx\">\n      <ng-container *ngTemplateOutlet=\"item.template as data; context: context\"></ng-container>\n    </ng-container>\n  </ng-container>\n</prizm-dropdown-host>\n\n<ng-template #dropdown>\n  <prizm-data-list class=\"block\">\n    <ng-container *ngIf=\"items?.length\">\n      <prizm-listing-item\n        *ngFor=\"let item of items; let idx = index\"\n        [selected]=\"idx === currentIdx\"\n        (click)=\"select(idx)\"\n      >\n        {{ item.name }}\n      </prizm-listing-item>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n\n<ng-template #buttonLeft>\n  <button\n    [interactive]=\"true\"\n    (prizmAfterViewInit)=\"setListener($event.nativeElement)\"\n    prizmInputIconButton=\"chevrons-dropdown-small\"\n  ></button>\n</ng-template>\n", styles: [":host{display:block;border-radius:var(--prizm-radius-m);text-align:left}.z-hosted{display:block;border-radius:inherit}.z-textfield{border-radius:inherit;text-align:inherit}.z-icon{pointer-events:auto}.block{padding:8px 0}\n"] }]
        }], ctorParameters: function () { return [{ type: i4.BehaviorSubject, decorators: [{
                    type: Inject,
                    args: [PRIZM_DATE_RIGHT_BUTTONS]
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.Injector }]; }, propDecorators: { buttonLeftTemplate: [{
                type: ViewChild,
                args: ['buttonLeft', { static: true }]
            }], items: [{
                type: Input
            }], currentIdx: [{
                type: Input
            }], currentIdxChange: [{
                type: Output
            }], testId_: [{
                type: HostBinding,
                args: ['attr.data-testid']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZGF0ZS1tdWx0aS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtbXVsdGkvaW5wdXQtZGF0ZS1tdWx0aS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LWRhdGUtbXVsdGkvaW5wdXQtZGF0ZS1tdWx0aS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsTUFBTSxFQUNOLFFBQVEsRUFDUixLQUFLLEVBRUwsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUNMLCtCQUErQixFQUMvQix3QkFBd0IsR0FDekIsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENB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QUMsd0JBQXdCO21HQS9CUyxrQkFBa0I7c0JBQTVELFNBQVM7dUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtnQkFLckMsS0FBSztzQkFGUixLQUFLO2dCQVdOLFVBQVU7c0JBRlQsS0FBSztnQkFLRyxnQkFBZ0I7c0JBRHhCLE1BQU07Z0JBSVcsT0FBTztzQkFEeEIsV0FBVzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQge1xuICBnZXRQcm92aWRlclByaXptRGF0ZUxlZnRCdXR0b25zLFxuICBQUklaTV9EQVRFX1JJR0hUX0JVVFRPTlMsXG59IGZyb20gJy4uLy4uLy4uL3Rva2Vucy9kYXRlLWV4dHJhLWJ1dHRvbnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcml6bURhdGVCdXR0b24sIFByaXptRGF0ZUJ1dHRvbkNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRlLWJ1dHRvbic7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtdGV4dCc7XG5pbXBvcnQgeyBQb2x5bW9ycGhPdXRsZXREaXJlY3RpdmUsIFByaXptTGlmZWN5Y2xlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUHJpem1EYXRhTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2RhdGEtbGlzdCc7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Ryb3Bkb3ducy9kcm9wZG93bi1ob3N0JztcbmltcG9ydCB7IFByaXptTGlzdGluZ0l0ZW1Db21wb25lbnQgfSBmcm9tICcuLi8uLi9saXN0aW5nLWl0ZW0nO1xuXG5leHBvcnQgdHlwZSBQcml6bURhdGVJdGVtVGVtcGxhdGUgPSB7XG4gIG5hbWU6IHN0cmluZztcbn0gJiBQcml6bURhdGVCdXR0b247XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogYHByaXptLWlucHV0LWRhdGUtbXVsdGlgLFxuICB0ZW1wbGF0ZVVybDogYC4vaW5wdXQtZGF0ZS1tdWx0aS5jb21wb25lbnQuaHRtbGAsXG4gIHN0eWxlVXJsczogW2AuL2lucHV0LWRhdGUtbXVsdGkuY29tcG9uZW50Lmxlc3NgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW2dldFByb3ZpZGVyUHJpem1EYXRlTGVmdEJ1dHRvbnMoKV0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUHJpem1JbnB1dFRleHRNb2R1bGUsXG4gICAgUHJpem1MaWZlY3ljbGVNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBQcml6bURhdGFMaXN0Q29tcG9uZW50LFxuICAgIFBvbHltb3JwaE91dGxldERpcmVjdGl2ZSxcbiAgICBQcml6bURyb3Bkb3duSG9zdENvbXBvbmVudCxcbiAgICBQcml6bUxpc3RpbmdJdGVtQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0RGF0ZU11bHRpQ29tcG9uZW50IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2J1dHRvbkxlZnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBidXR0b25MZWZ0VGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjx1bmtub3duPjtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9pdGVtcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFByaXptRGF0ZUl0ZW1UZW1wbGF0ZVtdPihbXSk7XG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgc2V0IGl0ZW1zKHZhbHVlOiBQcml6bURhdGVJdGVtVGVtcGxhdGVbXSkge1xuICAgIHRoaXMuX2l0ZW1zJC5uZXh0KHZhbHVlKTtcbiAgfVxuICBnZXQgaXRlbXMoKTogUHJpem1EYXRlSXRlbVRlbXBsYXRlW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcyQudmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGN1cnJlbnRJZHggPSAwO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjdXJyZW50SWR4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtdGVzdGlkJylcbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9pbnB1dF9kYXRlX211bHRpJztcblxuICBwdWJsaWMgb3BlbiA9IGZhbHNlO1xuXG4gIGdldCBjb250ZXh0KCk6IFByaXptRGF0ZUJ1dHRvbkNvbnRleHQge1xuICAgIHJldHVybiB7XG4gICAgICBpbmplY3RvcjogdGhpcy5pbmplY3RvcixcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQUklaTV9EQVRFX1JJR0hUX0JVVFRPTlMpIHB1YmxpYyByZWFkb25seSBsZWZ0QnV0dG9ucyQ6IEJlaGF2aW9yU3ViamVjdDxQcml6bURhdGVCdXR0b25bXT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxlZnRCdXR0b25zJC5uZXh0KFtcbiAgICAgIHtcbiAgICAgICAgdGVtcGxhdGU6IHRoaXMuYnV0dG9uTGVmdFRlbXBsYXRlLFxuICAgICAgfSxcbiAgICBdKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRHJvcGRvd24oKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRMaXN0ZW5lcihlbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIGV2ID0+IHtcbiAgICAgICAgLy8gVE9ETyByZW1vdmUgYWZ0ZXIgZmluaXNoIGFjdGl2ZXpvbmUgdG8gZHJvcGRvd24gY29tcG9uZW50XG4gICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdChpZHg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudElkeENoYW5nZS5uZXh0KCh0aGlzLmN1cnJlbnRJZHggPSBpZHgpKTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iLCI8cHJpem0tZHJvcGRvd24taG9zdFxuICBjbGFzcz1cInotaG9zdGVkXCJcbiAgWyhpc09wZW4pXT1cIm9wZW5cIlxuICBbY29udGVudF09XCJkcm9wZG93blwiXG4gIFtjbG9zZUJ5RXNjXT1cInRydWVcIlxuICBwcml6bURyb3Bkb3duSG9zdFdpZHRoPVwiMTAwJVwiXG4+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpZHggPSBpbmRleFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpZHggPT09IGN1cnJlbnRJZHhcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpdGVtLnRlbXBsYXRlIGFzIGRhdGE7IGNvbnRleHQ6IGNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG48L3ByaXptLWRyb3Bkb3duLWhvc3Q+XG5cbjxuZy10ZW1wbGF0ZSAjZHJvcGRvd24+XG4gIDxwcml6bS1kYXRhLWxpc3QgY2xhc3M9XCJibG9ja1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtcz8ubGVuZ3RoXCI+XG4gICAgICA8cHJpem0tbGlzdGluZy1pdGVtXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaWR4ID0gaW5kZXhcIlxuICAgICAgICBbc2VsZWN0ZWRdPVwiaWR4ID09PSBjdXJyZW50SWR4XCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdChpZHgpXCJcbiAgICAgID5cbiAgICAgICAge3sgaXRlbS5uYW1lIH19XG4gICAgICA8L3ByaXptLWxpc3RpbmctaXRlbT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9wcml6bS1kYXRhLWxpc3Q+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2J1dHRvbkxlZnQ+XG4gIDxidXR0b25cbiAgICBbaW50ZXJhY3RpdmVdPVwidHJ1ZVwiXG4gICAgKHByaXptQWZ0ZXJWaWV3SW5pdCk9XCJzZXRMaXN0ZW5lcigkZXZlbnQubmF0aXZlRWxlbWVudClcIlxuICAgIHByaXptSW5wdXRJY29uQnV0dG9uPVwiY2hldnJvbnMtZHJvcGRvd24tc21hbGxcIlxuICA+PC9idXR0b24+XG48L25nLXRlbXBsYXRlPlxuIl19