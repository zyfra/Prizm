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
}
PrizmInputCarouselComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputCarouselComponent, deps: [{ token: Injector }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PrizmInputCarouselComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputCarouselComponent, isStandalone: true, selector: "prizm-input-carousel", inputs: { carouselContent: "carouselContent", lightMode: "lightMode" }, host: { listeners: { "focus": "onFocus($event)", "blur": "onBlur($event)", "keydown.arrowleft": "onArrowLeft($event)", "keydown.arrowright": "onArrowRight($event)" }, properties: { "class.ng-filled": "!empty", "attr.tabindex": "disabled ? null : '0'" }, classAttribute: "prizm-carousel" }, providers: [
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
    ], usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"!empty; else emptyTpl\">\n  <ng-content></ng-content>\n</ng-container>\n\n<ng-template #emptyTpl>&nbsp;</ng-template>\n\n<ng-container *prizmInputLayoutLeft>\n  <prizm-input-carousel-auxiliary-left [carousel]=\"this\"> </prizm-input-carousel-auxiliary-left>\n</ng-container>\n\n<ng-container *prizmInputLayoutRight>\n  <prizm-input-carousel-auxiliary-right [carousel]=\"this\"> </prizm-input-carousel-auxiliary-right>\n</ng-container>\n", styles: [":host{border:0px;background:transparent;outline:none;width:100%;height:100%;line-height:16px;font-size:14px;color:var(--prizm-v3-text-icon-secondary);display:block}:host-context(.prizm-input-form-inner){padding:22px 8px 4px}:host-context(.prizm-input-form-inner):host-context(.prizm-input-empty-label){padding-top:4px}:host-context(.prizm-input-form-center){text-align:center}:host-context(.prizm-input-form-inner[data-size=\"l\"]){padding:22px 8px 4px}:host-context(.prizm-input-form-inner[data-size=\"m\"]){padding:16px 8px 2px}:host-context(.prizm-input-form-inner[data-size=\"m\"]):host-context(.prizm-input-empty-label){padding-top:2px}:host-context(.prizm-input-form-outer){padding:7px 8px}:host-context(.prizm-input-form-outer[data-size=\"l\"]){padding:11px 8px}:host-context(.prizm-input-form-outer[data-size=\"m\"]){padding:7px 8px}:host-context(.prizm-input-form-outer[data-size=\"s\"]){font-size:12px;padding:4px 8px;line-height:12px}:host-context([disabled]){cursor:not-allowed}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: PrizmInputCommonModule }, { kind: "directive", type: i1.PrizmInputLayoutLeftDirective, selector: "ng-template[prizmInputLayoutLeft]" }, { kind: "directive", type: i2.PrizmInputLayoutRightDirective, selector: "ng-template[prizmInputLayoutRight]" }, { kind: "component", type: PrizmInputCarouselAuxiliaryLeftComponent, selector: "prizm-input-carousel-auxiliary-left", inputs: ["carousel"] }, { kind: "component", type: PrizmInputCarouselAuxiliaryRightComponent, selector: "prizm-input-carousel-auxiliary-right", inputs: ["carousel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputCarouselComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jYXJvdXNlbC9pbnB1dC1jYXJvdXNlbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2Nhcm91c2VsL2lucHV0LWNhcm91c2VsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7O0FBaUN2RyxNQUFNLE9BQU8sMkJBQ1gsU0FBUSxtQkFBd0I7SUFZaEMsWUFDb0IsUUFBa0IsRUFDNUIsRUFBYyxFQUNMLEdBQXNCO1FBRXZDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUhSLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDTCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVp2QixZQUFPLEdBQUcsbUJBQW1CLENBQUM7UUFHdkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUUzQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixzQkFBaUIsR0FBRyxVQUFVLENBQUM7UUFDL0IsWUFBTyxHQUFHLEtBQUssQ0FBQztJQVFoQixDQUFDO0lBRWUsUUFBUTtRQUN0QixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLE1BQU07YUFDUixJQUFJLENBQ0gsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDekQsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUNoRCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0I7WUFBRSxPQUFPO1FBQ2hFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLG9CQUFvQjtZQUFFLE9BQU87UUFDcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sU0FBUztRQUNkLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMscUJBQXFCO1lBQUUsT0FBTztRQUNyRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUI7WUFBRSxPQUFPO1FBQ2pFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNEVBQTRFO0lBRTVFLE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCw0RUFBNEU7SUFFNUUsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDRFQUE0RTtJQUM3QixXQUFXLENBQUMsS0FBb0I7UUFDN0UsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsNEVBQTRFO0lBQzVCLFlBQVksQ0FBQyxLQUFvQjtRQUMvRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFZSxLQUFLLENBQUMsRUFBYztRQUNsQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7d0hBaEdVLDJCQUEyQixrQkFjNUIsUUFBUTs0R0FkUCwyQkFBMkIsNmFBMUIzQjtRQUNUO1lBQ0UsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsMkJBQTJCO1NBQ3pDO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDMUQsS0FBSyxFQUFFLElBQUk7U0FDWjtRQUNELG1CQUFtQjtLQUNwQixpREN2Q0gsNGNBYUEsMGhDRG1DSSxJQUFJLDRGQUNKLHNCQUFzQiw2UEFDdEIsd0NBQXdDLHNHQUN4Qyx5Q0FBeUM7MkZBR2hDLDJCQUEyQjtrQkEvQnZDLFNBQVM7K0JBQ0Usc0JBQXNCLG1CQUdmLHVCQUF1QixDQUFDLE1BQU0sYUFDcEM7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyw2QkFBNkI7eUJBQ3pDO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLDRCQUE0QixDQUFDOzRCQUMxRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRCxtQkFBbUI7cUJBQ3BCLFFBRUs7d0JBQ0osbUJBQW1CLEVBQUUsUUFBUTt3QkFDN0IsS0FBSyxFQUFFLGdCQUFnQjt3QkFDdkIsaUJBQWlCLEVBQUUsdUJBQXVCO3FCQUMzQyxjQUNXLElBQUksV0FDUDt3QkFDUCxJQUFJO3dCQUNKLHNCQUFzQjt3QkFDdEIsd0NBQXdDO3dCQUN4Qyx5Q0FBeUM7cUJBQzFDOzswQkFnQkUsTUFBTTsyQkFBQyxRQUFRO3FHQVRULGVBQWU7c0JBQXZCLEtBQUs7Z0JBRUcsU0FBUztzQkFBakIsS0FBSztnQkEwRE4sT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFRakMsTUFBTTtzQkFETCxZQUFZO3VCQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFPZSxXQUFXO3NCQUF6RCxZQUFZO3VCQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDO2dCQU1HLFlBQVk7c0JBQTNELFlBQVk7dUJBQUMsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuXG5pbXBvcnQgeyBQcml6bUlucHV0Q29udHJvbCB9IGZyb20gJy4uL2NvbW1vbi9iYXNlL2lucHV0LWNvbnRyb2wuY2xhc3MnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENhcm91c2VsQ29udGVudCB9IGZyb20gJy4vY2Fyb3VzZWwtY29udGVudC9jYXJvdXNlbC1jb250ZW50LmludGVyZmFjZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0Q29tbW9uTW9kdWxlLCBQcml6bUlucHV0TmdDb250cm9sIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dENhcm91c2VsIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFByaXptSW5wdXRDYXJvdXNlbEF1eGlsaWFyeUxlZnRDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LWNhcm91c2VsLWF1eGlsaWFyeS1sZWZ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUlucHV0Q2Fyb3VzZWxBdXhpbGlhcnlSaWdodENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtY2Fyb3VzZWwtYXV4aWxpYXJ5LXJpZ2h0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLWlucHV0LWNhcm91c2VsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWNhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtY2Fyb3VzZWwuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFByaXptSW5wdXRDb250cm9sLFxuICAgICAgdXNlRXhpc3Rpbmc6IFByaXptSW5wdXRDYXJvdXNlbENvbXBvbmVudCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUHJpem1JbnB1dENhcm91c2VsQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgUHJpem1EZXN0cm95U2VydmljZSxcbiAgXSxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm5nLWZpbGxlZF0nOiAnIWVtcHR5JyxcbiAgICBjbGFzczogJ3ByaXptLWNhcm91c2VsJyxcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogXCJkaXNhYmxlZCA/IG51bGwgOiAnMCdcIixcbiAgfSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nSWYsXG4gICAgUHJpem1JbnB1dENvbW1vbk1vZHVsZSxcbiAgICBQcml6bUlucHV0Q2Fyb3VzZWxBdXhpbGlhcnlMZWZ0Q29tcG9uZW50LFxuICAgIFByaXptSW5wdXRDYXJvdXNlbEF1eGlsaWFyeVJpZ2h0Q29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0Q2Fyb3VzZWxDb21wb25lbnRcbiAgZXh0ZW5kcyBQcml6bUlucHV0TmdDb250cm9sPGFueT5cbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgUHJpem1JbnB1dENhcm91c2VsXG57XG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWktYXJlYS0tY2Fyb3VzZWwnO1xuICBASW5wdXQoKSBjYXJvdXNlbENvbnRlbnQhOiBQcml6bUlucHV0Q2Fyb3VzZWxDb250ZW50O1xuXG4gIEBJbnB1dCgpIGxpZ2h0TW9kZSA9IGZhbHNlO1xuXG4gIGhhc0NsZWFyQnV0dG9uID0gZmFsc2U7XG4gIG5hdGl2ZUVsZW1lbnRUeXBlID0gJ2Nhcm91c2VsJztcbiAgZm9jdXNlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoSW5qZWN0b3IpIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcihpbmplY3Rvcik7XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIHRoaXMudmFsdWUkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKHZhbHVlID0+IHRoaXMuY2Fyb3VzZWxDb250ZW50LnNldEN1cnJlbnRWYWx1ZSh2YWx1ZSkpLFxuICAgICAgICB0YXAoKCkgPT4gdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIGxlZnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50LmNvbnRyb2xzU3RhdGUubGVmdEN0cmxEaXNhYmxlZCkgcmV0dXJuO1xuICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50LmxlZnQoKTtcbiAgICB0aGlzLnVwZGF0ZUZyb21Db250ZW50KCk7XG4gIH1cblxuICBwdWJsaWMgc3RlcExlZnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50LmNvbnRyb2xzU3RhdGUuc3RlcGxlZnRDdHJsRGlzYWJsZWQpIHJldHVybjtcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudC5zdGVwTGVmdCgpO1xuICAgIHRoaXMudXBkYXRlRnJvbUNvbnRlbnQoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGVwUmlnaHQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2Fyb3VzZWxDb250ZW50LmNvbnRyb2xzU3RhdGUuc3RlcFJpZ2h0Q3RybERpc2FibGVkKSByZXR1cm47XG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnQuc3RlcFJpZ2h0KCk7XG4gICAgdGhpcy51cGRhdGVGcm9tQ29udGVudCgpO1xuICB9XG5cbiAgcHVibGljIHJpZ2h0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhcm91c2VsQ29udGVudC5jb250cm9sc1N0YXRlLnJpZ2h0Q3RybERpc2FibGVkKSByZXR1cm47XG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnQucmlnaHQoKTtcbiAgICB0aGlzLnVwZGF0ZUZyb21Db250ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUZyb21Db250ZW50KCk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZVZhbHVlKHRoaXMuY2Fyb3VzZWxDb250ZW50LmN1cnJlbnRWYWx1ZSk7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1lbWJlci1hY2Nlc3NpYmlsaXR5XG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJywgWyckZXZlbnQnXSlcbiAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbWVtYmVyLWFjY2Vzc2liaWxpdHlcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicsIFsnJGV2ZW50J10pXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1lbWJlci1hY2Nlc3NpYmlsaXR5XG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dsZWZ0JywgWyckZXZlbnQnXSkgb25BcnJvd0xlZnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc3RlcExlZnQoKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbWVtYmVyLWFjY2Vzc2liaWxpdHlcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3JpZ2h0JywgWyckZXZlbnQnXSkgb25BcnJvd1JpZ2h0KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnN0ZXBSaWdodCgpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGNsZWFyKGV2OiBNb3VzZUV2ZW50KSB7XG4gICAgc3VwZXIuY2xlYXIoZXYpO1xuICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50LnNldEN1cnJlbnRWYWx1ZShudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlbXB0eTsgZWxzZSBlbXB0eVRwbFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNlbXB0eVRwbD4mbmJzcDs8L25nLXRlbXBsYXRlPlxuXG48bmctY29udGFpbmVyICpwcml6bUlucHV0TGF5b3V0TGVmdD5cbiAgPHByaXptLWlucHV0LWNhcm91c2VsLWF1eGlsaWFyeS1sZWZ0IFtjYXJvdXNlbF09XCJ0aGlzXCI+IDwvcHJpem0taW5wdXQtY2Fyb3VzZWwtYXV4aWxpYXJ5LWxlZnQ+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqcHJpem1JbnB1dExheW91dFJpZ2h0PlxuICA8cHJpem0taW5wdXQtY2Fyb3VzZWwtYXV4aWxpYXJ5LXJpZ2h0IFtjYXJvdXNlbF09XCJ0aGlzXCI+IDwvcHJpem0taW5wdXQtY2Fyb3VzZWwtYXV4aWxpYXJ5LXJpZ2h0PlxuPC9uZy1jb250YWluZXI+XG4iXX0=