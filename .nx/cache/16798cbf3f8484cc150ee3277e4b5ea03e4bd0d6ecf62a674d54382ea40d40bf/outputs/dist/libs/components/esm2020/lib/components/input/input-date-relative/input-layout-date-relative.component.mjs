import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, forwardRef, Inject, Injector, Input, ViewChild, } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDestroyService, PrizmPluckPipe } from '@prizm-ui/helpers';
import { Observable, Subscription } from 'rxjs';
import { getDefaultRelativeDateMenuItems, } from './input-date-relative.models';
import { ParseTextInput, RenderText, UpdateActiveItem } from './input-date-relative.utils';
import { PrizmInputControl, PrizmInputNgControl, PrizmInputStatusTextDirective } from '../common';
import { PRIZM_DATE_RIGHT_BUTTONS, PRIZM_INPUT_LAYOUT_DATE_RELATIVE } from '../../../tokens';
import { prizmI18nInitWithKey } from '../../../services';
import { prizmIsNativeFocusedIn } from '../../../util';
import { CommonModule } from '@angular/common';
import { PolymorphOutletDirective, PrizmLifecycleModule } from '../../../directives';
import { PrizmInputTextModule } from '../input-text';
import { PrizmIconComponent } from '../../icon';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';
import { PrizmInputLayoutDateRelativeDirective } from './input-layout-date-relative.directive';
import { PrizmDataListComponent } from '../../data-list';
import { PrizmListingItemComponent } from '../../listing-item';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../common/input-icon-button/input-icon-button.component";
import * as i4 from "../common/input-status-text/input-status-text.directive";
import * as i5 from "../common/input-layout/input-layout-right.directive";
import * as i6 from "../input-text/input-text.component";
import * as i7 from "rxjs";
const MenuItems = getDefaultRelativeDateMenuItems();
export class PrizmInputLayoutDateRelativeComponent extends PrizmInputNgControl {
    constructor(injector, dictionary$) {
        super(injector);
        this.dictionary$ = dictionary$;
        this.nativeElementType = 'input-layout-date-relative';
        this.hasClearButton = true;
        this.placeholder = 'Выберите относительное время';
        this.canOpen = true;
        this.extraButtonInjector = this.injector;
        this.testId_ = 'ui_input_date_relative';
        this.isOpen = false;
        // public value = new UntypedFormControl('', Validators.pattern(ValidationPattern));
        this.timeItems = [...MenuItems.time];
        this.directionItems = [...MenuItems.direction];
        this.periodItems = [...MenuItems.period];
        this.activeNumber = '';
        this.activeWrongFormat = false;
        this.subscriptions = new Subscription();
    }
    // public override isEmpty(value: any): boolean {
    //   return !value && !this.nativeFocusableElement?.value;
    // }
    ngOnInit() {
        super.ngOnInit();
        this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
    }
    valueChange(value) {
        this.parseInputValue(value);
        this.actualizeMenu();
        if (!this.activeWrongFormat) {
            if (this.activePeriodId && !this.activeNumber) {
                this.activeNumber = '1';
                this.actualizeInput();
                return;
            }
        }
        this.updateTouchedAndValue(value);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    onMenuItemClick(event, item) {
        event.stopImmediatePropagation();
        switch (item.groupId) {
            case 'time':
                this.activeTimeId = item.id;
                break;
            case 'direction':
                this.activeDirectionId = item.id;
                break;
            case 'period':
                this.activePeriodId = item.id;
                if (!this.activeNumber) {
                    this.activeNumber = '1';
                }
                break;
        }
        this.actualizeMenu();
        this.actualizeInput();
        this.changeDetectorRef.detectChanges();
    }
    /**
     * Parses control input value
     */
    parseInputValue(value) {
        const model = ParseTextInput(value);
        this.activeTimeId = model.time;
        this.activeDirectionId = model.direction;
        this.activeNumber = model.number;
        this.activePeriodId = model.period;
        this.activeWrongFormat = !!model.wrongFormat;
    }
    get nativeFocusableElement() {
        return this.focusableElement?.nativeElement
            ? this.focusableElement?.nativeElement
            : null;
    }
    get focused() {
        return !!(this.focusableElement?.nativeElement && prizmIsNativeFocusedIn(this.focusableElement.nativeElement));
    }
    /**
     * Set control input as text
     */
    actualizeInput() {
        const stringValue = RenderText({
            time: this.activeTimeId,
            number: this.activeNumber,
            direction: this.activeDirectionId,
            period: this.activePeriodId,
        });
        this.updateTouchedAndValue(stringValue);
    }
    clear(ev) {
        this.parseInputValue('');
        this.updateValue(null);
        this.actualizeMenu();
        if (this.nativeFocusableElement)
            this.nativeFocusableElement.value = '';
    }
    /**
     * Actualize menu items, as radio group button
     */
    actualizeMenu() {
        this.timeItems = UpdateActiveItem(this.timeItems, this.activeTimeId);
        this.directionItems = UpdateActiveItem(this.directionItems, this.activeDirectionId);
        this.periodItems = UpdateActiveItem(this.periodItems, this.activePeriodId);
    }
    onOpenChange(state) {
        this.isOpen = state;
    }
    safeOpenModal() {
        if (!this.isOpen && !this.disabled) {
            this.isOpen = true;
            this.changeDetectorRef.markForCheck();
        }
        else {
            this.isOpen = false;
        }
    }
    updateTouchedAndValue(value) {
        this.markAsTouched();
        this.updateValue(value);
    }
}
PrizmInputLayoutDateRelativeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateRelativeComponent, deps: [{ token: Injector }, { token: PRIZM_INPUT_LAYOUT_DATE_RELATIVE }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputLayoutDateRelativeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputLayoutDateRelativeComponent, isStandalone: true, selector: "prizm-input-layout-date-relative", inputs: { placeholder: "placeholder", canOpen: "canOpen", extraButtonInjector: "extraButtonInjector" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PrizmInputLayoutDateRelativeComponent),
            multi: true,
        },
        PrizmDestroyService,
        { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateRelativeComponent },
        ...prizmI18nInitWithKey(PRIZM_INPUT_LAYOUT_DATE_RELATIVE, 'inputLayoutDateRelative'),
    ], viewQueries: [{ propertyName: "statusText", first: true, predicate: PrizmInputStatusTextDirective, descendants: true, static: true }, { propertyName: "focusableElement", first: true, predicate: ["focusableElementRef"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [content]=\"dropdown\"\n  [isOpen]=\"isOpen && canOpen\"\n  [closeByEsc]=\"true\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  [prizmDropdownHostWidth]=\"'100%'\"\n  (isOpenChange)=\"onOpenChange($event)\"\n>\n  <input\n    class=\"input-search\"\n    #focusableElementRef\n    [ngModelOptions]=\"{ standalone: true }\"\n    [ngModel]=\"value\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n    (click)=\"safeOpenModal()\"\n    (ngModelChange)=\"valueChange($event)\"\n    prizmInput\n  />\n</prizm-dropdown-host>\n\n<ng-template #dropdown>\n  <prizm-data-list class=\"block\">\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: timeItems }\"></ng-container>\n    <div class=\"relative-menu-item-divider\"></div>\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: directionItems }\"></ng-container>\n    <div class=\"relative-menu-item-divider\"></div>\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: periodItems }\"></ng-container>\n  </prizm-data-list>\n\n  <ng-template #menuItemsTemplate let-items=\"items\">\n    <prizm-listing-item\n      *ngFor=\"let item of items\"\n      [selected]=\"item.active\"\n      (click)=\"onMenuItemClick($event, item)\"\n      tabindex=\"0\"\n    >\n      <ng-container leftBox>\n        <i class=\"prizm-icon relative-menu-icon {{ item.icon }}\"></i>\n      </ng-container>\n      {{ item.label }}\n    </prizm-listing-item>\n  </ng-template>\n</ng-template>\n\n<ng-container *prizmInputLayoutRight>\n  <button\n    [interactive]=\"true\"\n    [disabled]=\"disabled\"\n    (click)=\"focusableElementRef.elementRef.nativeElement.click()\"\n    prizmInputIconButton=\"date-update\"\n  ></button>\n  <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n  </ng-container>\n</ng-container>\n\n<ng-template [enable]=\"!!ngControl.errors?.requiredPattern\" prizmInputStatusText status=\"danger\">\n  {{ dictionary$ | async | prizmPluck : 'wrongFormat' }}\n</ng-template>\n", styles: [".prizm-datepicker-relative-menu{list-style:none;margin:0;padding:8px 0}:host{display:block}.block{padding:8px 0}.relative-menu-item-divider{margin:2px 0;border-bottom:1px solid var(--prizm-v3-background-stroke)}.relative-menu-icon{color:var(--prizm-v3-text-icon-secondary)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "ngmodule", type: PrizmLifecycleModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: PrizmInputTextModule }, { kind: "component", type: i3.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "directive", type: i4.PrizmInputStatusTextDirective, selector: "[prizmInputStatusText]", inputs: ["enable", "status"] }, { kind: "directive", type: i5.PrizmInputLayoutRightDirective, selector: "ng-template[prizmInputLayoutRight]" }, { kind: "component", type: i6.PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }, { kind: "pipe", type: PrizmPluckPipe, name: "prizmPluck" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "component", type: PrizmDropdownHostComponent, selector: "prizm-dropdown-host", inputs: ["content", "prizmDropdownHostId", "prizmDropdownCustomContext", "delay", "canOpen", "closeByEsc", "closeOnOutsideClick", "prizmDropdownHost", "prizmDropdownHostWidth", "autoReposition", "placement", "isOpen", "dropdownStyles", "dropdownClasses"], outputs: ["isOpenChange"], exportAs: ["prizm-dropdown-host"] }, { kind: "component", type: PrizmDataListComponent, selector: "prizm-data-list", inputs: ["defaultStyle", "iconOff", "content", "scroll"] }, { kind: "component", type: PrizmListingItemComponent, selector: "prizm-listing-item", inputs: ["disabled", "selected"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateRelativeComponent.prototype, "placeholder", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmInputLayoutDateRelativeComponent.prototype, "canOpen", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Injector)
], PrizmInputLayoutDateRelativeComponent.prototype, "extraButtonInjector", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputLayoutDateRelativeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-input-layout-date-relative', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PrizmInputLayoutDateRelativeComponent),
                            multi: true,
                        },
                        PrizmDestroyService,
                        { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateRelativeComponent },
                        ...prizmI18nInitWithKey(PRIZM_INPUT_LAYOUT_DATE_RELATIVE, 'inputLayoutDateRelative'),
                    ], changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [
                        CommonModule,
                        PolymorphOutletDirective,
                        PrizmLifecycleModule,
                        FormsModule,
                        PrizmInputTextModule,
                        PrizmPluckPipe,
                        PrizmIconComponent,
                        ReactiveFormsModule,
                        PrizmInputLayoutDateRelativeDirective,
                        PrizmDropdownHostComponent,
                        PrizmDataListComponent,
                        PrizmListingItemComponent,
                    ], template: "<prizm-dropdown-host\n  class=\"z-hosted\"\n  [canOpen]=\"canOpen\"\n  [content]=\"dropdown\"\n  [isOpen]=\"isOpen && canOpen\"\n  [closeByEsc]=\"true\"\n  [prizmDropdownHost]=\"layoutComponent?.el?.nativeElement\"\n  [prizmDropdownHostWidth]=\"'100%'\"\n  (isOpenChange)=\"onOpenChange($event)\"\n>\n  <input\n    class=\"input-search\"\n    #focusableElementRef\n    [ngModelOptions]=\"{ standalone: true }\"\n    [ngModel]=\"value\"\n    [disabled]=\"disabled\"\n    [placeholder]=\"placeholder\"\n    (click)=\"safeOpenModal()\"\n    (ngModelChange)=\"valueChange($event)\"\n    prizmInput\n  />\n</prizm-dropdown-host>\n\n<ng-template #dropdown>\n  <prizm-data-list class=\"block\">\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: timeItems }\"></ng-container>\n    <div class=\"relative-menu-item-divider\"></div>\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: directionItems }\"></ng-container>\n    <div class=\"relative-menu-item-divider\"></div>\n    <ng-container *ngTemplateOutlet=\"menuItemsTemplate; context: { items: periodItems }\"></ng-container>\n  </prizm-data-list>\n\n  <ng-template #menuItemsTemplate let-items=\"items\">\n    <prizm-listing-item\n      *ngFor=\"let item of items\"\n      [selected]=\"item.active\"\n      (click)=\"onMenuItemClick($event, item)\"\n      tabindex=\"0\"\n    >\n      <ng-container leftBox>\n        <i class=\"prizm-icon relative-menu-icon {{ item.icon }}\"></i>\n      </ng-container>\n      {{ item.label }}\n    </prizm-listing-item>\n  </ng-template>\n</ng-template>\n\n<ng-container *prizmInputLayoutRight>\n  <button\n    [interactive]=\"true\"\n    [disabled]=\"disabled\"\n    (click)=\"focusableElementRef.elementRef.nativeElement.click()\"\n    prizmInputIconButton=\"date-update\"\n  ></button>\n  <ng-container *ngFor=\"let button of rightButtons$ | async\" [ngTemplateOutlet]=\"button.template\">\n  </ng-container>\n</ng-container>\n\n<ng-template [enable]=\"!!ngControl.errors?.requiredPattern\" prizmInputStatusText status=\"danger\">\n  {{ dictionary$ | async | prizmPluck : 'wrongFormat' }}\n</ng-template>\n", styles: [".prizm-datepicker-relative-menu{list-style:none;margin:0;padding:8px 0}:host{display:block}.block{padding:8px 0}.relative-menu-item-divider{margin:2px 0;border-bottom:1px solid var(--prizm-v3-background-stroke)}.relative-menu-icon{color:var(--prizm-v3-text-icon-secondary)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector, decorators: [{
                    type: Inject,
                    args: [Injector]
                }] }, { type: i7.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_INPUT_LAYOUT_DATE_RELATIVE]
                }] }]; }, propDecorators: { statusText: [{
                type: ViewChild,
                args: [PrizmInputStatusTextDirective, { static: true }]
            }], focusableElement: [{
                type: ViewChild,
                args: ['focusableElementRef', { read: ElementRef }]
            }], placeholder: [{
                type: Input
            }], canOpen: [{
                type: Input
            }], extraButtonInjector: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbGF5b3V0LWRhdGUtcmVsYXRpdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9pbnB1dC1kYXRlLXJlbGF0aXZlL2lucHV0LWxheW91dC1kYXRlLXJlbGF0aXZlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtZGF0ZS1yZWxhdGl2ZS9pbnB1dC1sYXlvdXQtZGF0ZS1yZWxhdGl2ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFHTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV4RSxPQUFPLEVBQW1CLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFakUsT0FBTyxFQUNMLCtCQUErQixHQU9oQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLDZCQUE2QixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx3QkFB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a0ZBQWlCOzJGQXZCbkMscUNBQXFDO2tCQS9CakQsU0FBUzsrQkFDRSxrQ0FBa0MsYUFHakM7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsc0NBQXNDLENBQUM7NEJBQ3BFLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNELG1CQUFtQjt3QkFDbkIsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyx1Q0FBdUMsRUFBRTt3QkFDbEYsR0FBRyxvQkFBb0IsQ0FBQyxnQ0FBZ0MsRUFBRSx5QkFBeUIsQ0FBQztxQkFDckYsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU0sY0FDbkMsSUFBSSxXQUNQO3dCQUNQLFlBQVk7d0JBQ1osd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLFdBQVc7d0JBQ1gsb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixxQ0FBcUM7d0JBQ3JDLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0Qix5QkFBeUI7cUJBQzFCOzswQkErQ0UsTUFBTTsyQkFBQyxRQUFROzswQkFDZixNQUFNOzJCQUFDLGdDQUFnQzs0Q0F0Q2pDLFVBQVU7c0JBRGxCLFNBQVM7dUJBQUMsNkJBQTZCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUlqQyxnQkFBZ0I7c0JBRHhDLFNBQVM7dUJBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUsvQyxXQUFXO3NCQUZqQixLQUFLO2dCQU1DLE9BQU87c0JBRmIsS0FBSztnQkFNTixtQkFBbUI7c0JBRmxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgTkdfVkFMVUVfQUNDRVNTT1IsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSwgUHJpem1QbHVja1BpcGUgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bUxhbmd1YWdlSW5wdXRMYXlvdXREYXRlUmVsYXRpdmUgfSBmcm9tICdAcHJpem0tdWkvaTE4bic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBnZXREZWZhdWx0UmVsYXRpdmVEYXRlTWVudUl0ZW1zLFxuICBJZEJ5R3JvdXAsXG4gIFJlbGF0aXZlRGF0ZURpcmVjdGlvbklkLFxuICBSZWxhdGl2ZURhdGVNZW51SXRlbSxcbiAgUmVsYXRpdmVEYXRlTWVudUl0ZW1zLFxuICBSZWxhdGl2ZURhdGVQZXJpb2RJZCxcbiAgUmVsYXRpdmVEYXRlVGltZUlkLFxufSBmcm9tICcuL2lucHV0LWRhdGUtcmVsYXRpdmUubW9kZWxzJztcbmltcG9ydCB7IFBhcnNlVGV4dElucHV0LCBSZW5kZXJUZXh0LCBVcGRhdGVBY3RpdmVJdGVtIH0gZnJvbSAnLi9pbnB1dC1kYXRlLXJlbGF0aXZlLnV0aWxzJztcbmltcG9ydCB7IFByaXptSW5wdXRDb250cm9sLCBQcml6bUlucHV0TmdDb250cm9sLCBQcml6bUlucHV0U3RhdHVzVGV4dERpcmVjdGl2ZSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBQUklaTV9EQVRFX1JJR0hUX0JVVFRPTlMsIFBSSVpNX0lOUFVUX0xBWU9VVF9EQVRFX1JFTEFUSVZFIH0gZnJvbSAnLi4vLi4vLi4vdG9rZW5zJztcbmltcG9ydCB7IFByaXptRGF0ZUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IHByaXptSTE4bkluaXRXaXRoS2V5IH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgcHJpem1Jc05hdGl2ZUZvY3VzZWRJbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvbHltb3JwaE91dGxldERpcmVjdGl2ZSwgUHJpem1MaWZlY3ljbGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7IFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtdGV4dCc7XG5pbXBvcnQgeyBQcml6bUljb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9pY29uJztcbmltcG9ydCB7IFByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZHJvcGRvd25zL2Ryb3Bkb3duLWhvc3QnO1xuaW1wb3J0IHsgUHJpem1JbnB1dExheW91dERhdGVSZWxhdGl2ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQtbGF5b3V0LWRhdGUtcmVsYXRpdmUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptRGF0YUxpc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kYXRhLWxpc3QnO1xuaW1wb3J0IHsgUHJpem1MaXN0aW5nSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2xpc3RpbmctaXRlbSc7XG5cbmNvbnN0IE1lbnVJdGVtczogUmVsYXRpdmVEYXRlTWVudUl0ZW1zID0gZ2V0RGVmYXVsdFJlbGF0aXZlRGF0ZU1lbnVJdGVtcygpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1pbnB1dC1sYXlvdXQtZGF0ZS1yZWxhdGl2ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1sYXlvdXQtZGF0ZS1yZWxhdGl2ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LWxheW91dC1kYXRlLXJlbGF0aXZlLmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHJpem1JbnB1dExheW91dERhdGVSZWxhdGl2ZUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAgeyBwcm92aWRlOiBQcml6bUlucHV0Q29udHJvbCwgdXNlRXhpc3Rpbmc6IFByaXptSW5wdXRMYXlvdXREYXRlUmVsYXRpdmVDb21wb25lbnQgfSxcbiAgICAuLi5wcml6bUkxOG5Jbml0V2l0aEtleShQUklaTV9JTlBVVF9MQVlPVVRfREFURV9SRUxBVElWRSwgJ2lucHV0TGF5b3V0RGF0ZVJlbGF0aXZlJyksXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFBvbHltb3JwaE91dGxldERpcmVjdGl2ZSxcbiAgICBQcml6bUxpZmVjeWNsZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBQcml6bUlucHV0VGV4dE1vZHVsZSxcbiAgICBQcml6bVBsdWNrUGlwZSxcbiAgICBQcml6bUljb25Db21wb25lbnQsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBQcml6bUlucHV0TGF5b3V0RGF0ZVJlbGF0aXZlRGlyZWN0aXZlLFxuICAgIFByaXptRHJvcGRvd25Ib3N0Q29tcG9uZW50LFxuICAgIFByaXptRGF0YUxpc3RDb21wb25lbnQsXG4gICAgUHJpem1MaXN0aW5nSXRlbUNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JbnB1dExheW91dERhdGVSZWxhdGl2ZUNvbXBvbmVudFxuICBleHRlbmRzIFByaXptSW5wdXROZ0NvbnRyb2w8c3RyaW5nIHwgbnVsbD5cbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveVxue1xuICByZWFkb25seSBuYXRpdmVFbGVtZW50VHlwZSA9ICdpbnB1dC1sYXlvdXQtZGF0ZS1yZWxhdGl2ZSc7XG4gIHJlYWRvbmx5IGhhc0NsZWFyQnV0dG9uID0gdHJ1ZTtcblxuICBAVmlld0NoaWxkKFByaXptSW5wdXRTdGF0dXNUZXh0RGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBvdmVycmlkZSBzdGF0dXNUZXh0ITogUHJpem1JbnB1dFN0YXR1c1RleHREaXJlY3RpdmU7XG5cbiAgQFZpZXdDaGlsZCgnZm9jdXNhYmxlRWxlbWVudFJlZicsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBwdWJsaWMgb3ZlcnJpZGUgcmVhZG9ubHkgZm9jdXNhYmxlRWxlbWVudD86IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgcGxhY2Vob2xkZXIgPSAn0JLRi9Cx0LXRgNC40YLQtSDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L7QtSDQstGA0LXQvNGPJztcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBjYW5PcGVuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIGV4dHJhQnV0dG9uSW5qZWN0b3I6IEluamVjdG9yID0gdGhpcy5pbmplY3RvcjtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2lucHV0X2RhdGVfcmVsYXRpdmUnO1xuXG4gIHB1YmxpYyBpc09wZW4gPSBmYWxzZTtcblxuICAvLyBwdWJsaWMgdmFsdWUgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnBhdHRlcm4oVmFsaWRhdGlvblBhdHRlcm4pKTtcbiAgcHVibGljIHRpbWVJdGVtczogUmVsYXRpdmVEYXRlTWVudUl0ZW08UmVsYXRpdmVEYXRlVGltZUlkPltdID0gWy4uLk1lbnVJdGVtcy50aW1lXTtcbiAgcHVibGljIGRpcmVjdGlvbkl0ZW1zOiBSZWxhdGl2ZURhdGVNZW51SXRlbTxSZWxhdGl2ZURhdGVEaXJlY3Rpb25JZD5bXSA9IFsuLi5NZW51SXRlbXMuZGlyZWN0aW9uXTtcbiAgcHVibGljIHBlcmlvZEl0ZW1zOiBSZWxhdGl2ZURhdGVNZW51SXRlbTxSZWxhdGl2ZURhdGVQZXJpb2RJZD5bXSA9IFsuLi5NZW51SXRlbXMucGVyaW9kXTtcblxuICBwcml2YXRlIGFjdGl2ZVRpbWVJZCE6IFJlbGF0aXZlRGF0ZVRpbWVJZDtcbiAgcHJpdmF0ZSBhY3RpdmVEaXJlY3Rpb25JZCE6IFJlbGF0aXZlRGF0ZURpcmVjdGlvbklkO1xuICBwcml2YXRlIGFjdGl2ZVBlcmlvZElkITogUmVsYXRpdmVEYXRlUGVyaW9kSWQ7XG4gIHByaXZhdGUgYWN0aXZlTnVtYmVyID0gJyc7XG4gIHByaXZhdGUgYWN0aXZlV3JvbmdGb3JtYXQgPSBmYWxzZTtcblxuICBwcml2YXRlIHJlYWRvbmx5IHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcHVibGljIHJpZ2h0QnV0dG9ucyQhOiBCZWhhdmlvclN1YmplY3Q8UHJpem1EYXRlQnV0dG9uW10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoSW5qZWN0b3IpIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBASW5qZWN0KFBSSVpNX0lOUFVUX0xBWU9VVF9EQVRFX1JFTEFUSVZFKVxuICAgIHB1YmxpYyByZWFkb25seSBkaWN0aW9uYXJ5JDogT2JzZXJ2YWJsZTxQcml6bUxhbmd1YWdlSW5wdXRMYXlvdXREYXRlUmVsYXRpdmVbJ2lucHV0TGF5b3V0RGF0ZVJlbGF0aXZlJ10+XG4gICkge1xuICAgIHN1cGVyKGluamVjdG9yKTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBvdmVycmlkZSBpc0VtcHR5KHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgLy8gICByZXR1cm4gIXZhbHVlICYmICF0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQ/LnZhbHVlO1xuICAvLyB9XG4gIHB1YmxpYyBvdmVycmlkZSBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMucmlnaHRCdXR0b25zJCA9IHRoaXMuZXh0cmFCdXR0b25JbmplY3Rvci5nZXQoUFJJWk1fREFURV9SSUdIVF9CVVRUT05TKTtcbiAgfVxuXG4gIHB1YmxpYyB2YWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXJzZUlucHV0VmFsdWUodmFsdWUpO1xuICAgIHRoaXMuYWN0dWFsaXplTWVudSgpO1xuICAgIGlmICghdGhpcy5hY3RpdmVXcm9uZ0Zvcm1hdCkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlUGVyaW9kSWQgJiYgIXRoaXMuYWN0aXZlTnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTnVtYmVyID0gJzEnO1xuICAgICAgICB0aGlzLmFjdHVhbGl6ZUlucHV0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy51cGRhdGVUb3VjaGVkQW5kVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG9uTWVudUl0ZW1DbGljayhldmVudDogTW91c2VFdmVudCwgaXRlbTogUmVsYXRpdmVEYXRlTWVudUl0ZW0pOiB2b2lkIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBzd2l0Y2ggKGl0ZW0uZ3JvdXBJZCkge1xuICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgIHRoaXMuYWN0aXZlVGltZUlkID0gPElkQnlHcm91cDwndGltZSc+Pml0ZW0uaWQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkaXJlY3Rpb24nOlxuICAgICAgICB0aGlzLmFjdGl2ZURpcmVjdGlvbklkID0gPElkQnlHcm91cDwnZGlyZWN0aW9uJz4+aXRlbS5pZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BlcmlvZCc6XG4gICAgICAgIHRoaXMuYWN0aXZlUGVyaW9kSWQgPSA8SWRCeUdyb3VwPCdwZXJpb2QnPj5pdGVtLmlkO1xuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlTnVtYmVyKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVOdW1iZXIgPSAnMSc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5hY3R1YWxpemVNZW51KCk7XG4gICAgdGhpcy5hY3R1YWxpemVJbnB1dCgpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBjb250cm9sIGlucHV0IHZhbHVlXG4gICAqL1xuICBwcml2YXRlIHBhcnNlSW5wdXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgbW9kZWwgPSBQYXJzZVRleHRJbnB1dCh2YWx1ZSk7XG5cbiAgICB0aGlzLmFjdGl2ZVRpbWVJZCA9IG1vZGVsLnRpbWU7XG4gICAgdGhpcy5hY3RpdmVEaXJlY3Rpb25JZCA9IG1vZGVsLmRpcmVjdGlvbjtcbiAgICB0aGlzLmFjdGl2ZU51bWJlciA9IG1vZGVsLm51bWJlcjtcbiAgICB0aGlzLmFjdGl2ZVBlcmlvZElkID0gbW9kZWwucGVyaW9kO1xuICAgIHRoaXMuYWN0aXZlV3JvbmdGb3JtYXQgPSAhIW1vZGVsLndyb25nRm9ybWF0O1xuICB9XG5cbiAgcHVibGljIGdldCBuYXRpdmVGb2N1c2FibGVFbGVtZW50KCk6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50Py5uYXRpdmVFbGVtZW50XG4gICAgICA/ICh0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudClcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEoXG4gICAgICB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQgJiYgcHJpem1Jc05hdGl2ZUZvY3VzZWRJbih0aGlzLmZvY3VzYWJsZUVsZW1lbnQubmF0aXZlRWxlbWVudClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjb250cm9sIGlucHV0IGFzIHRleHRcbiAgICovXG4gIHByaXZhdGUgYWN0dWFsaXplSW5wdXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc3RyaW5nVmFsdWUgPSBSZW5kZXJUZXh0KHtcbiAgICAgIHRpbWU6IHRoaXMuYWN0aXZlVGltZUlkLFxuICAgICAgbnVtYmVyOiB0aGlzLmFjdGl2ZU51bWJlcixcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5hY3RpdmVEaXJlY3Rpb25JZCxcbiAgICAgIHBlcmlvZDogdGhpcy5hY3RpdmVQZXJpb2RJZCxcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZVRvdWNoZWRBbmRWYWx1ZShzdHJpbmdWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgY2xlYXIoZXY6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnBhcnNlSW5wdXRWYWx1ZSgnJyk7XG4gICAgdGhpcy51cGRhdGVWYWx1ZShudWxsKTtcbiAgICB0aGlzLmFjdHVhbGl6ZU1lbnUoKTtcbiAgICBpZiAodGhpcy5uYXRpdmVGb2N1c2FibGVFbGVtZW50KSB0aGlzLm5hdGl2ZUZvY3VzYWJsZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3R1YWxpemUgbWVudSBpdGVtcywgYXMgcmFkaW8gZ3JvdXAgYnV0dG9uXG4gICAqL1xuICBwcml2YXRlIGFjdHVhbGl6ZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lSXRlbXMgPSBVcGRhdGVBY3RpdmVJdGVtKHRoaXMudGltZUl0ZW1zLCB0aGlzLmFjdGl2ZVRpbWVJZCk7XG4gICAgdGhpcy5kaXJlY3Rpb25JdGVtcyA9IFVwZGF0ZUFjdGl2ZUl0ZW0odGhpcy5kaXJlY3Rpb25JdGVtcywgdGhpcy5hY3RpdmVEaXJlY3Rpb25JZCk7XG4gICAgdGhpcy5wZXJpb2RJdGVtcyA9IFVwZGF0ZUFjdGl2ZUl0ZW0odGhpcy5wZXJpb2RJdGVtcywgdGhpcy5hY3RpdmVQZXJpb2RJZCk7XG4gIH1cblxuICBwdWJsaWMgb25PcGVuQ2hhbmdlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSBzdGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyBzYWZlT3Blbk1vZGFsKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc09wZW4gJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUb3VjaGVkQW5kVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKTtcbiAgfVxufVxuIiwiPHByaXptLWRyb3Bkb3duLWhvc3RcbiAgY2xhc3M9XCJ6LWhvc3RlZFwiXG4gIFtjYW5PcGVuXT1cImNhbk9wZW5cIlxuICBbY29udGVudF09XCJkcm9wZG93blwiXG4gIFtpc09wZW5dPVwiaXNPcGVuICYmIGNhbk9wZW5cIlxuICBbY2xvc2VCeUVzY109XCJ0cnVlXCJcbiAgW3ByaXptRHJvcGRvd25Ib3N0XT1cImxheW91dENvbXBvbmVudD8uZWw/Lm5hdGl2ZUVsZW1lbnRcIlxuICBbcHJpem1Ecm9wZG93bkhvc3RXaWR0aF09XCInMTAwJSdcIlxuICAoaXNPcGVuQ2hhbmdlKT1cIm9uT3BlbkNoYW5nZSgkZXZlbnQpXCJcbj5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCJpbnB1dC1zZWFyY2hcIlxuICAgICNmb2N1c2FibGVFbGVtZW50UmVmXG4gICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcbiAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgIChjbGljayk9XCJzYWZlT3Blbk1vZGFsKClcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbHVlQ2hhbmdlKCRldmVudClcIlxuICAgIHByaXptSW5wdXRcbiAgLz5cbjwvcHJpem0tZHJvcGRvd24taG9zdD5cblxuPG5nLXRlbXBsYXRlICNkcm9wZG93bj5cbiAgPHByaXptLWRhdGEtbGlzdCBjbGFzcz1cImJsb2NrXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1lbnVJdGVtc1RlbXBsYXRlOyBjb250ZXh0OiB7IGl0ZW1zOiB0aW1lSXRlbXMgfVwiPjwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZS1tZW51LWl0ZW0tZGl2aWRlclwiPjwvZGl2PlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtZW51SXRlbXNUZW1wbGF0ZTsgY29udGV4dDogeyBpdGVtczogZGlyZWN0aW9uSXRlbXMgfVwiPjwvbmctY29udGFpbmVyPlxuICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZS1tZW51LWl0ZW0tZGl2aWRlclwiPjwvZGl2PlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtZW51SXRlbXNUZW1wbGF0ZTsgY29udGV4dDogeyBpdGVtczogcGVyaW9kSXRlbXMgfVwiPjwvbmctY29udGFpbmVyPlxuICA8L3ByaXptLWRhdGEtbGlzdD5cblxuICA8bmctdGVtcGxhdGUgI21lbnVJdGVtc1RlbXBsYXRlIGxldC1pdGVtcz1cIml0ZW1zXCI+XG4gICAgPHByaXptLWxpc3RpbmctaXRlbVxuICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIlxuICAgICAgW3NlbGVjdGVkXT1cIml0ZW0uYWN0aXZlXCJcbiAgICAgIChjbGljayk9XCJvbk1lbnVJdGVtQ2xpY2soJGV2ZW50LCBpdGVtKVwiXG4gICAgICB0YWJpbmRleD1cIjBcIlxuICAgID5cbiAgICAgIDxuZy1jb250YWluZXIgbGVmdEJveD5cbiAgICAgICAgPGkgY2xhc3M9XCJwcml6bS1pY29uIHJlbGF0aXZlLW1lbnUtaWNvbiB7eyBpdGVtLmljb24gfX1cIj48L2k+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIHt7IGl0ZW0ubGFiZWwgfX1cbiAgICA8L3ByaXptLWxpc3RpbmctaXRlbT5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy1jb250YWluZXIgKnByaXptSW5wdXRMYXlvdXRSaWdodD5cbiAgPGJ1dHRvblxuICAgIFtpbnRlcmFjdGl2ZV09XCJ0cnVlXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIChjbGljayk9XCJmb2N1c2FibGVFbGVtZW50UmVmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGljaygpXCJcbiAgICBwcml6bUlucHV0SWNvbkJ1dHRvbj1cImRhdGUtdXBkYXRlXCJcbiAgPjwvYnV0dG9uPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBidXR0b24gb2YgcmlnaHRCdXR0b25zJCB8IGFzeW5jXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uLnRlbXBsYXRlXCI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSBbZW5hYmxlXT1cIiEhbmdDb250cm9sLmVycm9ycz8ucmVxdWlyZWRQYXR0ZXJuXCIgcHJpem1JbnB1dFN0YXR1c1RleHQgc3RhdHVzPVwiZGFuZ2VyXCI+XG4gIHt7IGRpY3Rpb25hcnkkIHwgYXN5bmMgfCBwcml6bVBsdWNrIDogJ3dyb25nRm9ybWF0JyB9fVxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==