import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * */
export class PrizmIconComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.iconClass = null;
        this.size = 16;
    }
    get generateManeTestId() {
        return 'ui_icon' + this.iconClass;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmIconComponent, isStandalone: true, selector: "prizm-icon", inputs: { iconClass: "iconClass", size: "size" }, usesInheritance: true, ngImport: i0, template: "<span class=\"prizm-icon prizm-icon-{{ size }} {{ iconClass }}\"></span>\n", styles: [":host .zyfra-icon-color{fill:none}:host .prizm-icon{display:block;line-height:1}:host .prizm-icon-24{font-size:24px}:host .prizm-icon-16{font-size:16px}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-icon', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, template: "<span class=\"prizm-icon prizm-icon-{{ size }} {{ iconClass }}\"></span>\n", styles: [":host .zyfra-icon-color{fill:none}:host .prizm-icon{display:block;line-height:1}:host .prizm-icon-24{font-size:24px}:host .prizm-icon-16{font-size:16px}\n"] }]
        }], propDecorators: { iconClass: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
/**
 * TODO v5: remove
 * @deprecated
 * */
export const IconComponent = PrizmIconComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2ljb24vaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFckQ7O0tBRUs7QUFRTCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsbUJBQW1CO0lBUDNEOztRQVFXLGNBQVMsR0FBa0IsSUFBSSxDQUFDO1FBQ2hDLFNBQUksR0FBb0IsRUFBRSxDQUFDO0tBS3JDO0lBSEMsSUFBYSxrQkFBa0I7UUFDN0IsT0FBTyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNwQyxDQUFDOzhHQU5VLGtCQUFrQjtrR0FBbEIsa0JBQWtCLCtJQ2IvQiw0RUFDQTs7MkZEWWEsa0JBQWtCO2tCQVA5QixTQUFTOytCQUNFLFlBQVksbUJBR0wsdUJBQXVCLENBQUMsTUFBTSxjQUNuQyxJQUFJOzhCQUdQLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLOztBQU9SOzs7S0FHSztBQUNMLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0taWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWNvbi5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JY29uQ29tcG9uZW50IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCB7XG4gIEBJbnB1dCgpIGljb25DbGFzczogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZyB8IG51bWJlciA9IDE2O1xuXG4gIG92ZXJyaWRlIGdldCBnZW5lcmF0ZU1hbmVUZXN0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3VpX2ljb24nICsgdGhpcy5pY29uQ2xhc3M7XG4gIH1cbn1cblxuLyoqXG4gKiBUT0RPIHY1OiByZW1vdmVcbiAqIEBkZXByZWNhdGVkXG4gKiAqL1xuZXhwb3J0IGNvbnN0IEljb25Db21wb25lbnQgPSBQcml6bUljb25Db21wb25lbnQ7XG4iLCI8c3BhbiBjbGFzcz1cInByaXptLWljb24gcHJpem0taWNvbi17eyBzaXplIH19IHt7IGljb25DbGFzcyB9fVwiPjwvc3Bhbj5cbiJdfQ==