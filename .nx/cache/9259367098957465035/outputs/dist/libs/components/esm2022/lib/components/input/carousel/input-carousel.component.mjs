import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, HostListener, Inject, Injector, Input, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputCommonModule, PrizmInputNgControl } from '../common';
import { takeUntil, tap } from 'rxjs/operators';
import { NgIf } from '@angular/common';
import { PrizmInputCarouselAuxiliaryLeftComponent } from './input-carousel-auxiliary-left.component';
import { PrizmInputCarouselAuxiliaryRightComponent } from './input-carousel-auxiliary-right.component';
import * as i0 from "@angular/core";
import * as i1 from "../common/input-layout/input-layout-left.directive";
import * as i2 from "../common/input-layout/input-layout-right.directive";
export class PrizmInputCarouselComponent extends PrizmInputNgControl {
    constructor(injector, el, cdr) {
        super(injector);
        this.el = el;
        this.cdr = cdr;
        this.testId_ = 'ui-area--carousel';
        this.lightMode = false;
        this.hasClearButton = false;
        this.nativeElementType = 'carousel';
        this.focused = false;
    }
    ngOnInit() {
        super.ngOnInit();
        this.value$
            .pipe(tap(value => this.carouselContent.setCurrentValue(value)), tap(() => this.changeDetectorRef.markForCheck()), takeUntil(this.destroy$))
            .subscribe();
    }
    left() {
        if (this.carouselContent.controlsState.leftCtrlDisabled)
            return;
        this.carouselContent.left();
        this.updateFromContent();
    }
    stepLeft() {
        if (this.carouselContent.controlsState.stepleftCtrlDisabled)
            return;
        this.carouselContent.stepLeft();
        this.updateFromContent();
    }
    stepRight() {
        if (this.carouselContent.controlsState.stepRightCtrlDisabled)
            return;
        this.carouselContent.stepRight();
        this.updateFromContent();
    }
    right() {
        if (this.carouselContent.controlsState.rightCtrlDisabled)
            return;
        this.carouselContent.right();
        this.updateFromContent();
    }
    updateFromContent() {
        super.updateValue(this.carouselContent.currentValue);
        this.cdr.detectChanges();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    onFocus() {
        this.focused = true;
        this.stateChanges.next();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    onBlur() {
        this.focused = false;
        this.stateChanges.next();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    onArrowLeft(event) {
        event.preventDefault();
        this.stepLeft();
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    onArrowRight(event) {
        event.preventDefault();
        this.stepRight();
    }
    clear(ev) {
        super.clear(ev);
        this.carouselContent.setCurrentValue(null);
    }
    focus() {
        this.el.nativeElement.focus();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputCarouselComponent, deps: [{ token: Injector }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputCarouselComponent, isStandalone: true, selector: "prizm-input-carousel", inputs: { carouselContent: "carouselContent", lightMode: "lightMode" }, host: { listeners: { "focus": "onFocus($event)", "blur": "onBlur($event)", "keydown.arrowleft": "onArrowLeft($event)", "keydown.arrowright": "onArrowRight($event)" }, properties: { "class.ng-filled": "!empty", "attr.tabindex": "disabled ? null : '0'" }, classAttribute: "prizm-carousel" }, providers: [
            {
                provide: PrizmInputControl,
                useExisting: PrizmInputCarouselComponent,
            },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PrizmInputCarouselComponent),
                multi: true,
            },
            PrizmDestroyService,
        ], usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"!empty; else emptyTpl\">\n  <ng-content></ng-content>\n</ng-container>\n\n<ng-template #emptyTpl>&nbsp;</ng-template>\n\n<ng-container *prizmInputLayoutLeft>\n  <prizm-input-carousel-auxiliary-left [carousel]=\"this\"> </prizm-input-carousel-auxiliary-left>\n</ng-container>\n\n<ng-container *prizmInputLayoutRight>\n  <prizm-input-carousel-auxiliary-right [carousel]=\"this\"> </prizm-input-carousel-auxiliary-right>\n</ng-container>\n", styles: [":host{border:0px;background:transparent;outline:none;width:100%;height:100%;line-height:16px;font-size:14px;color:var(--prizm-v3-text-icon-secondary);display:block}:host-context(.prizm-input-form-inner){padding:22px 8px 4px}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label){padding-top:4px}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]){padding:22px 8px 4px}:host-context(.prizm-input-form-inner[data-size=\"m\"]){padding:16px 8px 2px}:host-context(.prizm-input-form-inner[data-size=\"m\"]):host-context(.prizm-input-empty-label){padding-top:2px}:host-context(.prizm-input-form-outer){padding:7px 8px}:host-context(.prizm-input-form-outer[data-size=\"l\"]){padding:11px 8px}:host-context(.prizm-input-form-outer[data-size=\"m\"]){padding:7px 8px}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:12px;padding:4px 8px;line-height:12px}:host-context([disabled]){cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: PrizmInputCommonModule }, { kind: "directive", type: i1.PrizmInputLayoutLeftDirective, selector: "ng-template[prizmInputLayoutLeft]" }, { kind: "directive", type: i2.PrizmInputLayoutRightDirective, selector: "ng-template[prizmInputLayoutRight]" }, { kind: "component", type: PrizmInputCarouselAuxiliaryLeftComponent, selector: "prizm-input-carousel-auxiliary-left", inputs: ["carousel"] }, { kind: "component", type: PrizmInputCarouselAuxiliaryRightComponent, selector: "prizm-input-carousel-auxiliary-right", inputs: ["carousel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputCarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-input-carousel', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: PrizmInputControl,
                            useExisting: PrizmInputCarouselComponent,
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => PrizmInputCarouselComponent),
                            multi: true,
                        },
                        PrizmDestroyService,
                    ], host: {
                        '[class.ng-filled]': '!empty',
                        class: 'prizm-carousel',
                        '[attr.tabindex]': "disabled ? null : '0'",
                    }, standalone: true, imports: [
                        NgIf,
                        PrizmInputCommonModule,
                        PrizmInputCarouselAuxiliaryLeftComponent,
                        PrizmInputCarouselAuxiliaryRightComponent,
                    ], template: "<ng-container *ngIf=\"!empty; else emptyTpl\">\n  <ng-content></ng-content>\n</ng-container>\n\n<ng-template #emptyTpl>&nbsp;</ng-template>\n\n<ng-container *prizmInputLayoutLeft>\n  <prizm-input-carousel-auxiliary-left [carousel]=\"this\"> </prizm-input-carousel-auxiliary-left>\n</ng-container>\n\n<ng-container *prizmInputLayoutRight>\n  <prizm-input-carousel-auxiliary-right [carousel]=\"this\"> </prizm-input-carousel-auxiliary-right>\n</ng-container>\n", styles: [":host{border:0px;background:transparent;outline:none;width:100%;height:100%;line-height:16px;font-size:14px;color:var(--prizm-v3-text-icon-secondary);display:block}:host-context(.prizm-input-form-inner){padding:22px 8px 4px}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label){padding-top:4px}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]){padding:22px 8px 4px}:host-context(.prizm-input-form-inner[data-size=\"m\"]){padding:16px 8px 2px}:host-context(.prizm-input-form-inner[data-size=\"m\"]):host-context(.prizm-input-empty-label){padding-top:2px}:host-context(.prizm-input-form-outer){padding:7px 8px}:host-context(.prizm-input-form-outer[data-size=\"l\"]){padding:11px 8px}:host-context(.prizm-input-form-outer[data-size=\"m\"]){padding:7px 8px}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:12px;padding:4px 8px;line-height:12px}:host-context([disabled]){cursor:not-allowed}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector, decorators: [{
                    type: Inject,
                    args: [Injector]
                }] }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { carouselContent: [{
                type: Input
            }], lightMode: [{
                type: Input
            }], onFocus: [{
                type: HostListener,
                args: ['focus', ['$event']]
            }], onBlur: [{
                type: HostListener,
                args: ['blur', ['$event']]
            }], onArrowLeft: [{
                type: HostListener,
                args: ['keydown.arrowleft', ['$event']]
            }], onArrowRight: [{
                type: HostListener,
                args: ['keydown.arrowright', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jYXJvdXNlbC9pbnB1dC1jYXJvdXNlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2Nhcm91c2VsL2lucHV0LWNhcm91c2VsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7O0FBaUN2RyxNQUFNLE9BQU8sMkJBQ1gsU0FBUSxtQkFBd0I7SUFZaEMsWUFDb0IsUUFBa0IsRUFDNUIsRUFBYyxFQUNMLEdBQXNCO1FBRXZDLEtB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USxDQUFDO2dCQVFqQyxNQUFNO3NCQURMLFlBQVk7dUJBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQU9lLFdBQVc7c0JBQXpELFlBQVk7dUJBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBTUcsWUFBWTtzQkFBM0QsWUFBWTt1QkFBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0b3IsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5cbmltcG9ydCB7IFByaXptSW5wdXRDb250cm9sIH0gZnJvbSAnLi4vY29tbW9uL2Jhc2UvaW5wdXQtY29udHJvbC5jbGFzcyc7XG5pbXBvcnQgeyBQcml6bUlucHV0Q2Fyb3VzZWxDb250ZW50IH0gZnJvbSAnLi9jYXJvdXNlbC1jb250ZW50L2Nhcm91c2VsLWNvbnRlbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFByaXptSW5wdXRDb21tb25Nb2R1bGUsIFByaXptSW5wdXROZ0NvbnRyb2wgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bUlucHV0Q2Fyb3VzZWwgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IE5nSWYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1JbnB1dENhcm91c2VsQXV4aWxpYXJ5TGVmdENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtY2Fyb3VzZWwtYXV4aWxpYXJ5LWxlZnQuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptSW5wdXRDYXJvdXNlbEF1eGlsaWFyeVJpZ2h0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1jYXJvdXNlbC1hdXhpbGlhcnktcmlnaHQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0taW5wdXQtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQtY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC1jYXJvdXNlbC5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogUHJpem1JbnB1dENvbnRyb2wsXG4gICAgICB1c2VFeGlzdGluZzogUHJpem1JbnB1dENhcm91c2VsQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQcml6bUlucHV0Q2Fyb3VzZWxDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBQcml6bURlc3Ryb3lTZXJ2aWNlLFxuICBdLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubmctZmlsbGVkXSc6ICchZW1wdHknLFxuICAgIGNsYXNzOiAncHJpem0tY2Fyb3VzZWwnLFxuICAgICdbYXR0ci50YWJpbmRleF0nOiBcImRpc2FibGVkID8gbnVsbCA6ICcwJ1wiLFxuICB9LFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTmdJZixcbiAgICBQcml6bUlucHV0Q29tbW9uTW9kdWxlLFxuICAgIFByaXptSW5wdXRDYXJvdXNlbEF1eGlsaWFyeUxlZnRDb21wb25lbnQsXG4gICAgUHJpem1JbnB1dENhcm91c2VsQXV4aWxpYXJ5UmlnaHRDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRDYXJvdXNlbENvbXBvbmVudFxuICBleHRlbmRzIFByaXptSW5wdXROZ0NvbnRyb2w8YW55PlxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBQcml6bUlucHV0Q2Fyb3VzZWxcbntcbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aS1hcmVhLS1jYXJvdXNlbCc7XG4gIEBJbnB1dCgpIGNhcm91c2VsQ29udGVudCE6IFByaXptSW5wdXRDYXJvdXNlbENvbnRlbnQ7XG5cbiAgQElucHV0KCkgbGlnaHRNb2RlID0gZmFsc2U7XG5cbiAgaGFzQ2xlYXJCdXR0b24gPSBmYWxzZTtcbiAgbmF0aXZlRWxlbWVudFR5cGUgPSAnY2Fyb3VzZWwnO1xuICBmb2N1c2VkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChJbmplY3RvcikgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHN1cGVyKGluamVjdG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgdGhpcy52YWx1ZSRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAodmFsdWUgPT4gdGhpcy5jYXJvdXNlbENvbnRlbnQuc2V0Q3VycmVudFZhbHVlKHZhbHVlKSksXG4gICAgICAgIHRhcCgoKSA9PiB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgbGVmdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnQuY29udHJvbHNTdGF0ZS5sZWZ0Q3RybERpc2FibGVkKSByZXR1cm47XG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnQubGVmdCgpO1xuICAgIHRoaXMudXBkYXRlRnJvbUNvbnRlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGVwTGVmdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnQuY29udHJvbHNTdGF0ZS5zdGVwbGVmdEN0cmxEaXNhYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50LnN0ZXBMZWZ0KCk7XG4gICAgdGhpcy51cGRhdGVGcm9tQ29udGVudCgpO1xuICB9XG5cbiAgcHVibGljIHN0ZXBSaWdodCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYXJvdXNlbENvbnRlbnQuY29udHJvbHNTdGF0ZS5zdGVwUmlnaHRDdHJsRGlzYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudC5zdGVwUmlnaHQoKTtcbiAgICB0aGlzLnVwZGF0ZUZyb21Db250ZW50KCk7XG4gIH1cblxuICBwdWJsaWMgcmlnaHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50LmNvbnRyb2xzU3RhdGUucmlnaHRDdHJsRGlzYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudC5yaWdodCgpO1xuICAgIHRoaXMudXBkYXRlRnJvbUNvbnRlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRnJvbUNvbnRlbnQoKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlVmFsdWUodGhpcy5jYXJvdXNlbENvbnRlbnQuY3VycmVudFZhbHVlKTtcblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbWVtYmVyLWFjY2Vzc2liaWxpdHlcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnLCBbJyRldmVudCddKVxuICBvbkZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tZW1iZXItYWNjZXNzaWJpbGl0eVxuICBASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQnXSlcbiAgb25CbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbWVtYmVyLWFjY2Vzc2liaWxpdHlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2xlZnQnLCBbJyRldmVudCddKSBvbkFycm93TGVmdChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zdGVwTGVmdCgpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tZW1iZXItYWNjZXNzaWJpbGl0eVxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93cmlnaHQnLCBbJyRldmVudCddKSBvbkFycm93UmlnaHQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc3RlcFJpZ2h0KCk7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgY2xlYXIoZXY6IE1vdXNlRXZlbnQpIHtcbiAgICBzdXBlci5jbGVhcihldik7XG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnQuc2V0Q3VycmVudFZhbHVlKG51bGwpO1xuICB9XG5cbiAgcHVibGljIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiIWVtcHR5OyBlbHNlIGVtcHR5VHBsXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI2VtcHR5VHBsPiZuYnNwOzwvbmctdGVtcGxhdGU+XG5cbjxuZy1jb250YWluZXIgKnByaXptSW5wdXRMYXlvdXRMZWZ0PlxuICA8cHJpem0taW5wdXQtY2Fyb3VzZWwtYXV4aWxpYXJ5LWxlZnQgW2Nhcm91c2VsXT1cInRoaXNcIj4gPC9wcml6bS1pbnB1dC1jYXJvdXNlbC1hdXhpbGlhcnktbGVmdD5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpwcml6bUlucHV0TGF5b3V0UmlnaHQ+XG4gIDxwcml6bS1pbnB1dC1jYXJvdXNlbC1hdXhpbGlhcnktcmlnaHQgW2Nhcm91c2VsXT1cInRoaXNcIj4gPC9wcml6bS1pbnB1dC1jYXJvdXNlbC1hdXhpbGlhcnktcmlnaHQ+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==