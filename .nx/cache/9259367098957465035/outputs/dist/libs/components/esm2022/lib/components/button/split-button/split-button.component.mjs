import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostBinding, Input, Output, ViewChild, } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmAbstractTestId } from '../../../abstract/interactive';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { PrizmButtonComponent } from '../button.component';
import * as i0 from "@angular/core";
export class PrizmSplitButtonComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        /** can pass template or icon class */
        this.icon = 'chevrons-dropdown';
        this._disabled = false;
        this.showLoader = false;
        this.clickIcon = new EventEmitter();
        this.clickButton = new EventEmitter();
        this.testId_ = 'ui_split_button';
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    updateZIndex(el, focused) {
        el.nativeElement.style.zIndex = focused ? '1' : '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSplitButtonComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmSplitButtonComponent, isStandalone: true, selector: "prizm-split-button", inputs: { size: "size", icon: "icon", appearance: "appearance", appearanceType: "appearanceType", disabled: "disabled", showLoader: "showLoader" }, outputs: { clickIcon: "clickIcon", clickButton: "clickButton" }, host: { properties: { "attr.data-size": "this.size", "attr.data-appearance": "this.appearance", "attr.data-appearance-type": "this.appearanceType" } }, providers: [PrizmDestroyService], viewQueries: [{ propertyName: "buttonEl", first: true, predicate: ["buttonRef"], descendants: true, read: ElementRef, static: true }, { propertyName: "iconButtonEl", first: true, predicate: ["iconButtonRef"], descendants: true, read: ElementRef, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"button\">\n  <button\n    class=\"full-width\"\n    #buttonRef\n    [size]=\"size\"\n    [appearance]=\"appearance\"\n    [showLoader]=\"showLoader\"\n    [disabled]=\"disabled\"\n    [appearanceType]=\"appearanceType\"\n    (click)=\"clickButton.emit()\"\n    (focusedChange)=\"updateZIndex(buttonEl, $event)\"\n    prizmButton\n  >\n    <ng-content></ng-content>\n  </button>\n</div>\n\n<div class=\"icon\">\n  <button\n    #iconButtonRef\n    [size]=\"size\"\n    [disabled]=\"disabled\"\n    [pseudoState]=\"$any(showLoader && 'none')\"\n    [appearance]=\"appearance\"\n    [appearanceType]=\"appearanceType\"\n    [icon]=\"icon\"\n    (click)=\"!showLoader && clickIcon.emit()\"\n    (focusedChange)=\"updateZIndex(iconButtonEl, $event)\"\n    prizmIconButton\n  ></button>\n</div>\n", styles: [":host{display:flex;justify-content:space-between;align-items:center}:host .button{position:relative;width:100%}:host .button ::ng-deep button[prizmButton] prizm-wrapper.z-wrapper{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}:host .icon,:host .icon button,:host .button,:host .button button{height:100%}:host .icon ::ng-deep button[prizmIconButton] .z-wrapper{border-top-left-radius:0;border-bottom-left-radius:0}.full-width{width:100%}\n"], dependencies: [{ kind: "component", type: PrizmButtonComponent, selector: "button[prizmButton], button[prizmIconButton], a[prizmButton], a[prizmIconButton]", inputs: ["size", "icon", "iconRight", "appearance", "appearanceType", "disabled", "showLoader"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmSplitButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-split-button', changeDetection: ChangeDetectionStrategy.OnPush, providers: [PrizmDestroyService], standalone: true, imports: [PrizmButtonComponent], template: "<div class=\"button\">\n  <button\n    class=\"full-width\"\n    #buttonRef\n    [size]=\"size\"\n    [appearance]=\"appearance\"\n    [showLoader]=\"showLoader\"\n    [disabled]=\"disabled\"\n    [appearanceType]=\"appearanceType\"\n    (click)=\"clickButton.emit()\"\n    (focusedChange)=\"updateZIndex(buttonEl, $event)\"\n    prizmButton\n  >\n    <ng-content></ng-content>\n  </button>\n</div>\n\n<div class=\"icon\">\n  <button\n    #iconButtonRef\n    [size]=\"size\"\n    [disabled]=\"disabled\"\n    [pseudoState]=\"$any(showLoader && 'none')\"\n    [appearance]=\"appearance\"\n    [appearanceType]=\"appearanceType\"\n    [icon]=\"icon\"\n    (click)=\"!showLoader && clickIcon.emit()\"\n    (focusedChange)=\"updateZIndex(iconButtonEl, $event)\"\n    prizmIconButton\n  ></button>\n</div>\n", styles: [":host{display:flex;justify-content:space-between;align-items:center}:host .button{position:relative;width:100%}:host .button ::ng-deep button[prizmButton] prizm-wrapper.z-wrapper{border-right:0;border-top-right-radius:0;border-bottom-right-radius:0}:host .icon,:host .icon button,:host .button,:host .button button{height:100%}:host .icon ::ng-deep button[prizmIconButton] .z-wrapper{border-top-left-radius:0;border-bottom-left-radius:0}.full-width{width:100%}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.data-size']
            }], icon: [{
                type: Input
            }], appearance: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.data-appearance']
            }], appearanceType: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.data-appearance-type']
            }], disabled: [{
                type: Input
            }], showLoader: [{
                type: Input
            }], clickIcon: [{
                type: Output
            }], clickButton: [{
                type: Output
            }], buttonEl: [{
                type: ViewChild,
                args: ['buttonRef', { static: true, read: ElementRef }]
            }], iconButtonEl: [{
                type: ViewChild,
                args: ['iconButtonRef', { static: true, read: ElementRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL3NwbGl0LWJ1dHRvbi9zcGxpdC1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vc3BsaXQtYnV0dG9uL3NwbGl0LWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUl4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNwRSxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBVzNELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxtQkFBbUI7SUFUbEU7O1FBY0Usc0NBQXNDO1FBRXRDLFNBQUksR0FBMEMsbUJBQW1CLENBQUM7UUFpQjFELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHMUIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUdyQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFckIsWUFBTyxHQUFHLGlCQUFpQixDQUFDO0tBUS9DO0lBMUJDLElBQ0ksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBbUI7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBaUJNLFlBQVksQ0FBQyxFQUFjLEVBQUUsT0FBZ0I7UUFDbEQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckQsQ0FBQzs4R0ExQ1UseUJBQXlCO2tHQUF6Qix5QkFBeUIsOGFBSnpCLENBQUMsbUJBQW1CLENBQUMsNEdBeUNjLFVBQVUsc0hBQ04sVUFBVSxrRUNqRTlELG95QkErQkEsd2dCRE5ZLG9CQUFvQjs7MkZBRW5CLHlCQUF5QjtrQkFUckMsU0FBUzsrQkFDRSxvQkFBb0IsbUJBR2IsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyxDQUFDLG1CQUFtQixDQUFDLGNBQ3BCLElBQUksV0FDUCxDQUFDLG9CQUFvQixDQUFDOzhCQUsvQixJQUFJO3NCQUZILEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQUs3QixJQUFJO3NCQURILEtBQUs7Z0JBS04sVUFBVTtzQkFGVCxLQUFLOztzQkFDTCxXQUFXO3VCQUFDLHNCQUFzQjtnQkFLbkMsY0FBYztzQkFGYixLQUFLOztzQkFDTCxXQUFXO3VCQUFDLDJCQUEyQjtnQkFJcEMsUUFBUTtzQkFEWCxLQUFLO2dCQVVOLFVBQVU7c0JBRFQsS0FBSztnQkFJTixTQUFTO3NCQURSLE1BQU07Z0JBSVAsV0FBVztzQkFEVixNQUFNO2dCQUtxRCxRQUFRO3NCQUFuRSxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFDTSxZQUFZO3NCQUEzRSxTQUFTO3VCQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1TaXplIH0gZnJvbSAnLi4vLi4vLi4vdXRpbCc7XG5pbXBvcnQgeyBQcml6bUFwcGVhcmFuY2UsIFByaXptQXBwZWFyYW5jZVR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBQb2x5bW9ycGhDb250ZW50IH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgUHJpem1CdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9idXR0b24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tc3BsaXQtYnV0dG9uJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3BsaXQtYnV0dG9uLmNvbXBvbmVudC5sZXNzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9zcGxpdC1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbUHJpem1EZXN0cm95U2VydmljZV0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtQcml6bUJ1dHRvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptU3BsaXRCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIHtcbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtc2l6ZScpXG4gIHNpemUhOiBQcml6bVNpemU7XG5cbiAgLyoqIGNhbiBwYXNzIHRlbXBsYXRlIG9yIGljb24gY2xhc3MgKi9cbiAgQElucHV0KClcbiAgaWNvbjogUG9seW1vcnBoQ29udGVudDx7IHNpemU6IFByaXptU2l6ZSB9PiA9ICdjaGV2cm9ucy1kcm9wZG93bic7XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtYXBwZWFyYW5jZScpXG4gIGFwcGVhcmFuY2UhOiBQcml6bUFwcGVhcmFuY2U7XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtYXBwZWFyYW5jZS10eXBlJylcbiAgYXBwZWFyYW5jZVR5cGUhOiBQcml6bUFwcGVhcmFuY2VUeXBlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBCb29sZWFuSW5wdXQpIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzaG93TG9hZGVyID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGNsaWNrSWNvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAT3V0cHV0KClcbiAgY2xpY2tCdXR0b24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9zcGxpdF9idXR0b24nO1xuXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvblJlZicsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGJ1dHRvbkVsITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaWNvbkJ1dHRvblJlZicsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGljb25CdXR0b25FbCE6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIHVwZGF0ZVpJbmRleChlbDogRWxlbWVudFJlZiwgZm9jdXNlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gZm9jdXNlZCA/ICcxJyA6ICcnO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYnV0dG9uXCI+XG4gIDxidXR0b25cbiAgICBjbGFzcz1cImZ1bGwtd2lkdGhcIlxuICAgICNidXR0b25SZWZcbiAgICBbc2l6ZV09XCJzaXplXCJcbiAgICBbYXBwZWFyYW5jZV09XCJhcHBlYXJhbmNlXCJcbiAgICBbc2hvd0xvYWRlcl09XCJzaG93TG9hZGVyXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFthcHBlYXJhbmNlVHlwZV09XCJhcHBlYXJhbmNlVHlwZVwiXG4gICAgKGNsaWNrKT1cImNsaWNrQnV0dG9uLmVtaXQoKVwiXG4gICAgKGZvY3VzZWRDaGFuZ2UpPVwidXBkYXRlWkluZGV4KGJ1dHRvbkVsLCAkZXZlbnQpXCJcbiAgICBwcml6bUJ1dHRvblxuICA+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiaWNvblwiPlxuICA8YnV0dG9uXG4gICAgI2ljb25CdXR0b25SZWZcbiAgICBbc2l6ZV09XCJzaXplXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtwc2V1ZG9TdGF0ZV09XCIkYW55KHNob3dMb2FkZXIgJiYgJ25vbmUnKVwiXG4gICAgW2FwcGVhcmFuY2VdPVwiYXBwZWFyYW5jZVwiXG4gICAgW2FwcGVhcmFuY2VUeXBlXT1cImFwcGVhcmFuY2VUeXBlXCJcbiAgICBbaWNvbl09XCJpY29uXCJcbiAgICAoY2xpY2spPVwiIXNob3dMb2FkZXIgJiYgY2xpY2tJY29uLmVtaXQoKVwiXG4gICAgKGZvY3VzZWRDaGFuZ2UpPVwidXBkYXRlWkluZGV4KGljb25CdXR0b25FbCwgJGV2ZW50KVwiXG4gICAgcHJpem1JY29uQnV0dG9uXG4gID48L2J1dHRvbj5cbjwvZGl2PlxuIl19