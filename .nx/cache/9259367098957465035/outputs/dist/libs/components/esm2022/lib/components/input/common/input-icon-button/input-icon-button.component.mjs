import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
import * as i1 from "../../../icon/icon.component";
export class PrizmInputIconButtonComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.size = 16;
        this.interactive = false;
        this._disabled = false;
        this.type = 'button';
        this.testId_ = 'ui_input_icon_button';
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get tabindex() {
        return this.interactive ? 0 : -1;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputIconButtonComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: { size: "size", prizmInputIconButton: "prizmInputIconButton", interactive: "interactive", disabled: "disabled", type: "type" }, host: { properties: { "class.interactive": "interactive", "attr.tabindex": "tabindex", "class.disabled": "this.disabled", "attr.type": "this.type" } }, usesInheritance: true, ngImport: i0, template: "<prizm-icon [iconClass]=\"prizmInputIconButton\" [size]=\"size\"></prizm-icon>\n", styles: [":host{outline:none;position:relative;display:block;flex-shrink:0;border:0;padding:0;background:transparent;width:var(--prizm-input-icon-button-width, 24px);height:var(--prizm-input-icon-button-height, 24px);font-size:inherit;color:var(--prizm-v3-text-icon-secondary)}:host.disabled{color:var(--prizm-v3-text-icon-disable);opacity:.4;cursor:not-allowed}:host-context(.interactive){color:var(--prizm-v3-button-secondary-solid-default)}:host-context(.interactive):not(.disabled){cursor:pointer}:host-context(.interactive):not(.disabled):hover{color:var(--prizm-v3-button-primary-solid-hover)}:host-context(.interactive):not(.disabled):focus{color:var(--prizm-v3-button-primary-solid-hover)}\n"], dependencies: [{ kind: "component", type: i1.PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputIconButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'button[prizmInputIconButton]', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.interactive]': 'interactive',
                        '[attr.tabindex]': 'tabindex',
                    }, template: "<prizm-icon [iconClass]=\"prizmInputIconButton\" [size]=\"size\"></prizm-icon>\n", styles: [":host{outline:none;position:relative;display:block;flex-shrink:0;border:0;padding:0;background:transparent;width:var(--prizm-input-icon-button-width, 24px);height:var(--prizm-input-icon-button-height, 24px);font-size:inherit;color:var(--prizm-v3-text-icon-secondary)}:host.disabled{color:var(--prizm-v3-text-icon-disable);opacity:.4;cursor:not-allowed}:host-context(.interactive){color:var(--prizm-v3-button-secondary-solid-default)}:host-context(.interactive):not(.disabled){cursor:pointer}:host-context(.interactive):not(.disabled):hover{color:var(--prizm-v3-button-primary-solid-hover)}:host-context(.interactive):not(.disabled):focus{color:var(--prizm-v3-button-primary-solid-hover)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], prizmInputIconButton: [{
                type: Input
            }], interactive: [{
                type: Input
            }], disabled: [{
                type: HostBinding,
                args: ['class.disabled']
            }, {
                type: Input
            }], type: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.type']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaWNvbi1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jb21tb24vaW5wdXQtaWNvbi1idXR0b24vaW5wdXQtaWNvbi1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9jb21tb24vaW5wdXQtaWNvbi1idXR0b24vaW5wdXQtaWNvbi1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBZ0IscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBYzVFLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxtQkFBbUI7SUFadEU7O1FBYVcsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUVWLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBVXJCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHMUIsU0FBSSxHQUFrQyxRQUFRLENBQUM7UUFFN0IsWUFBTyxHQUFHLHNCQUFzQixDQUFDO0tBS3BEO0lBbEJDLElBRUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBbUI7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBUUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7OEdBdEJVLDZCQUE2QjtrR0FBN0IsNkJBQTZCLDJYQ2hCMUMsa0ZBQ0E7OzJGRGVhLDZCQUE2QjtrQkFaekMsU0FBUzsrQkFFRSw4QkFBOEIsbUJBR3ZCLHVCQUF1QixDQUFDLE1BQU0sUUFFekM7d0JBQ0oscUJBQXFCLEVBQUUsYUFBYTt3QkFDcEMsaUJBQWlCLEVBQUUsVUFBVTtxQkFDOUI7OEJBR1EsSUFBSTtzQkFBWixLQUFLO2dCQUNHLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUlGLFFBQVE7c0JBRlgsV0FBVzt1QkFBQyxnQkFBZ0I7O3NCQUM1QixLQUFLO2dCQVVOLElBQUk7c0JBRkgsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9jb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdidXR0b25bcHJpem1JbnB1dEljb25CdXR0b25dJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWljb24tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQtaWNvbi1idXR0b24uY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5pbnRlcmFjdGl2ZV0nOiAnaW50ZXJhY3RpdmUnLFxuICAgICdbYXR0ci50YWJpbmRleF0nOiAndGFiaW5kZXgnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0SWNvbkJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQge1xuICBASW5wdXQoKSBzaXplID0gMTY7XG4gIEBJbnB1dCgpIHByaXptSW5wdXRJY29uQnV0dG9uITogc3RyaW5nO1xuICBASW5wdXQoKSBpbnRlcmFjdGl2ZSA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogQm9vbGVhbklucHV0KSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci50eXBlJylcbiAgdHlwZTogJ2J1dHRvbicgfCAncmVzZXQnIHwgJ3N1Ym1pdCcgPSAnYnV0dG9uJztcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2lucHV0X2ljb25fYnV0dG9uJztcblxuICBnZXQgdGFiaW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmFjdGl2ZSA/IDAgOiAtMTtcbiAgfVxufVxuIiwiPHByaXptLWljb24gW2ljb25DbGFzc109XCJwcml6bUlucHV0SWNvbkJ1dHRvblwiIFtzaXplXT1cInNpemVcIj48L3ByaXptLWljb24+XG4iXX0=