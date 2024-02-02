import { Directive, ElementRef, EventEmitter, HostListener, Inject, Input, Output, Renderer2, } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmCheckedDirective {
    set prizmChecked(checked) {
        this.updateProperty('checked', checked || false);
        this.updateProperty('indeterminate', checked === null);
    }
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.prizmCheckedChange = new EventEmitter();
        this.updateProperty('checked', false);
    }
    onChange({ checked }) {
        this.updateProperty('indeterminate', false);
        this.prizmCheckedChange.emit(checked);
    }
    updateProperty(property, value) {
        this.renderer.setProperty(this.element.nativeElement, property, value);
    }
}
PrizmCheckedDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCheckedDirective, deps: [{ token: ElementRef }, { token: Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
PrizmCheckedDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmCheckedDirective, selector: "input[prizmChecked], input[prizmCheckedChange]", inputs: { prizmChecked: "prizmChecked" }, outputs: { prizmCheckedChange: "prizmCheckedChange" }, host: { listeners: { "change": "onChange($event.target)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCheckedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[prizmChecked], input[prizmCheckedChange]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: i0.Renderer2, decorators: [{
                    type: Inject,
                    args: [Renderer2]
                }] }]; }, propDecorators: { prizmChecked: [{
                type: Input
            }], prizmCheckedChange: [{
                type: Output
            }], onChange: [{
                type: HostListener,
                args: ['change', ['$event.target']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2NoZWNrZWQvY2hlY2tlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7O0FBS3ZCLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsSUFDSSxZQUFZLENBQUMsT0FBdUI7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBS0QsWUFFbUIsT0FBcUMsRUFDbEIsUUFBbUI7UUFEdEMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUxoRCx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBT3hELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFHTSxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQW9CO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVPLGNBQWMsQ0FBQyxRQUFxQyxFQUFFLEtBQWM7UUFDMUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pFLENBQUM7O2tIQTFCVSxxQkFBcUIsa0JBV3RCLFVBQVUsYUFFVixTQUFTO3NHQWJSLHFCQUFxQjsyRkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnREFBZ0Q7aUJBQzNEOzswQkFZSSxNQUFNOzJCQUFDLFVBQVU7OzBCQUVqQixNQUFNOzJCQUFDLFNBQVM7NENBWGYsWUFBWTtzQkFEZixLQUFLO2dCQU9HLGtCQUFrQjtzQkFEMUIsTUFBTTtnQkFZQSxRQUFRO3NCQURkLFlBQVk7dUJBQUMsUUFBUSxFQUFFLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtwcml6bUNoZWNrZWRdLCBpbnB1dFtwcml6bUNoZWNrZWRDaGFuZ2VdJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1DaGVja2VkRGlyZWN0aXZlIHtcbiAgQElucHV0KClcbiAgc2V0IHByaXptQ2hlY2tlZChjaGVja2VkOiBudWxsIHwgYm9vbGVhbikge1xuICAgIHRoaXMudXBkYXRlUHJvcGVydHkoJ2NoZWNrZWQnLCBjaGVja2VkIHx8IGZhbHNlKTtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnR5KCdpbmRldGVybWluYXRlJywgY2hlY2tlZCA9PT0gbnVsbCk7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcHJpem1DaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRWxlbWVudFJlZilcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sXG4gICAgQEluamVjdChSZW5kZXJlcjIpIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnR5KCdjaGVja2VkJywgZmFsc2UpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJywgWyckZXZlbnQudGFyZ2V0J10pXG4gIHB1YmxpYyBvbkNoYW5nZSh7IGNoZWNrZWQgfTogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUHJvcGVydHkoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XG4gICAgdGhpcy5wcml6bUNoZWNrZWRDaGFuZ2UuZW1pdChjaGVja2VkKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUHJvcGVydHkocHJvcGVydHk6ICdjaGVja2VkJyB8ICdpbmRldGVybWluYXRlJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBwcm9wZXJ0eSwgdmFsdWUpO1xuICB9XG59XG4iXX0=