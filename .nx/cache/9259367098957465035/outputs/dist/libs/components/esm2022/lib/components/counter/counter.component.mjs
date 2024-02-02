import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class PrizmCounterComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this._disabled = false;
        this.class = '';
        this.status = '';
        this.testId_ = 'ui_counter';
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get hidden() {
        return !this._value;
    }
    set value(val) {
        this._value = val ?? 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCounterComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmCounterComponent, isStandalone: true, selector: "prizm-counter", inputs: { disabled: "disabled", class: "class", maxValue: "maxValue", status: "status", value: "value" }, host: { properties: { "class._disabled": "this.disabled", "class": "this.class", "attr.status": "this.status", "class.hidden": "this.hidden" } }, usesInheritance: true, ngImport: i0, template: "<div class=\"counter-container\">\n  {{ maxValue && _value > maxValue ? maxValue + '+' : _value }}\n</div>\n", styles: [":host{display:inline-flex;align-items:center;vertical-align:middle;height:16px;padding:0 4px;background-color:var(--prizm-v3-status-info-primary-default);border-radius:1.2rem;font-size:12px;color:var(--prizm-v3-text-icon-exception)}:host.hidden{display:none}:host.counter{position:absolute}:host.counter_tr{top:-8px;right:-8px}:host.counter_tl{top:-8px;left:-8px}:host.counter_br{bottom:-8px;right:-8px}:host.counter_bl{bottom:-8px;left:-8px}:host .counter-container{min-width:8px;line-height:16px}:host[status=info]{background-color:var(--prizm-v3-status-info-primary-default)}:host[status=secondary]{background-color:var(--prizm-v3-status-none-primary-default)}:host[status=success]{background-color:var(--prizm-v3-status-success-primary-default)}:host[status=warning]{background-color:var(--prizm-v3-status-warning-primary-default)}:host[status=danger]{background-color:var(--prizm-v3-status-alarm-primary-default)}:host._disabled{background-color:var(--prizm-v3-button-disable);color:var(--prizm-v3-text-icon-disable)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCounterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-counter', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"counter-container\">\n  {{ maxValue && _value > maxValue ? maxValue + '+' : _value }}\n</div>\n", styles: [":host{display:inline-flex;align-items:center;vertical-align:middle;height:16px;padding:0 4px;background-color:var(--prizm-v3-status-info-primary-default);border-radius:1.2rem;font-size:12px;color:var(--prizm-v3-text-icon-exception)}:host.hidden{display:none}:host.counter{position:absolute}:host.counter_tr{top:-8px;right:-8px}:host.counter_tl{top:-8px;left:-8px}:host.counter_br{bottom:-8px;right:-8px}:host.counter_bl{bottom:-8px;left:-8px}:host .counter-container{min-width:8px;line-height:16px}:host[status=info]{background-color:var(--prizm-v3-status-info-primary-default)}:host[status=secondary]{background-color:var(--prizm-v3-status-none-primary-default)}:host[status=success]{background-color:var(--prizm-v3-status-success-primary-default)}:host[status=warning]{background-color:var(--prizm-v3-status-warning-primary-default)}:host[status=danger]{background-color:var(--prizm-v3-status-alarm-primary-default)}:host._disabled{background-color:var(--prizm-v3-button-disable);color:var(--prizm-v3-text-icon-disable)}\n"] }]
        }], propDecorators: { disabled: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class._disabled']
            }], class: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class']
            }], maxValue: [{
                type: Input
            }], status: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['attr.status']
            }], hidden: [{
                type: HostBinding,
                args: ['class.hidden']
            }], value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFVL0MsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG1CQUFtQjtJQVI5RDs7UUFpQlUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUkxQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBT1gsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUVNLFlBQU8sR0FBRyxZQUFZLENBQUM7S0FXMUM7SUFoQ0MsSUFFSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFtQjtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFrQkQsSUFBaUMsTUFBTTtRQUNyQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBYSxLQUFLLENBQUMsR0FBdUI7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OEdBaENVLHFCQUFxQjtrR0FBckIscUJBQXFCLDRWQ2JsQyw4R0FHQSx5akNET1ksWUFBWTs7MkZBR1gscUJBQXFCO2tCQVJqQyxTQUFTOytCQUNFLGVBQWUsY0FHYixJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUMsbUJBQ04sdUJBQXVCLENBQUMsTUFBTTs4QkFLM0MsUUFBUTtzQkFGWCxLQUFLOztzQkFDTCxXQUFXO3VCQUFDLGlCQUFpQjtnQkFXOUIsS0FBSztzQkFGSixLQUFLOztzQkFDTCxXQUFXO3VCQUFDLE9BQU87Z0JBSXBCLFFBQVE7c0JBRFAsS0FBSztnQkFLTixNQUFNO3NCQUZMLEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsYUFBYTtnQkFPTyxNQUFNO3NCQUF0QyxXQUFXO3VCQUFDLGNBQWM7Z0JBSWQsS0FBSztzQkFBakIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLWNvdW50ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY291bnRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvdW50ZXIuY29tcG9uZW50Lmxlc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUNvdW50ZXJDb21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIHtcbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5fZGlzYWJsZWQnKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogQm9vbGVhbklucHV0KSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGNsYXNzID0gJyc7XG5cbiAgQElucHV0KClcbiAgbWF4VmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuc3RhdHVzJylcbiAgc3RhdHVzID0gJyc7XG5cbiAgb3ZlcnJpZGUgcmVhZG9ubHkgdGVzdElkXyA9ICd1aV9jb3VudGVyJztcblxuICBwdWJsaWMgX3ZhbHVlITogbnVtYmVyO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGlkZGVuJykgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gIXRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHZhbHVlKHZhbDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWwgPz8gMDtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNvdW50ZXItY29udGFpbmVyXCI+XG4gIHt7IG1heFZhbHVlICYmIF92YWx1ZSA+IG1heFZhbHVlID8gbWF4VmFsdWUgKyAnKycgOiBfdmFsdWUgfX1cbjwvZGl2PlxuIl19