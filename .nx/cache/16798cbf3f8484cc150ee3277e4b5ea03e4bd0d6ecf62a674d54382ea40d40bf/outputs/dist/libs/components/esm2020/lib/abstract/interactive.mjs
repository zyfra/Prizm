import { Directive, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
// TODO remove !ng16
export { PrizmAbstractTestId };
/**
 * The most basic class for interactive components
 */
export class AbstractPrizmInteractive extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.pseudoHovered = null;
        this.pseudoPressed = null;
        this.pseudoFocused = null;
        this.focusable = true;
        this.focusedChange = new EventEmitter();
        this.pressedChange = new EventEmitter();
        this.hoveredChange = new EventEmitter();
        this.focusVisibleChange = new EventEmitter();
        this.hovered = false;
        this.pressed = false;
        this.focusVisible = false;
    }
    get computedDisabled() {
        return coerceBooleanProperty(this.disabled);
    }
    get computedHovered() {
        return !this.computedDisabled && (this.pseudoHovered ?? this.hovered);
    }
    get computedPressed() {
        return !this.computedDisabled && (this.pseudoPressed ?? this.pressed);
    }
    get computedFocusable() {
        return !this.computedDisabled && (this.focusable || this.focused);
    }
    get computedFocused() {
        return !this.computedDisabled && (this.pseudoFocused ?? this.focused);
    }
    get computedFocusVisible() {
        return !this.computedDisabled && (this.pseudoFocused ?? this.focusVisible);
    }
    updateHovered(hovered) {
        if (this.disabled)
            return;
        if (this.hovered === hovered) {
            return;
        }
        this.hovered = hovered;
        this.hoveredChange.emit(hovered);
    }
    updatePressed(pressed) {
        if (this.pressed === pressed) {
            return;
        }
        this.pressed = pressed;
        this.pressedChange.emit(pressed);
    }
    updateFocused(focused) {
        this.focusedChange.emit(focused);
    }
    updateFocusVisible(focusVisible) {
        if (this.focusVisible === focusVisible) {
            return;
        }
        this.focusVisible = focusVisible;
        this.focusVisibleChange.emit(focusVisible);
    }
}
AbstractPrizmInteractive.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AbstractPrizmInteractive, deps: null, target: i0.ɵɵFactoryTarget.Directive });
AbstractPrizmInteractive.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: AbstractPrizmInteractive, inputs: { pseudoHovered: "pseudoHovered", pseudoPressed: "pseudoPressed", pseudoFocused: "pseudoFocused", focusable: "focusable", pseudoState: "pseudoState" }, outputs: { focusedChange: "focusedChange", pressedChange: "pressedChange", hoveredChange: "hoveredChange", focusVisibleChange: "focusVisibleChange" }, host: { properties: { "class._disabled": "this.computedDisabled", "class._hovered": "this.computedHovered", "class._pressed": "this.computedPressed", "class._focused": "this.computedFocused", "class._focus-visible": "this.computedFocusVisible" } }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AbstractPrizmInteractive, decorators: [{
            type: Directive
        }], propDecorators: { pseudoHovered: [{
                type: Input
            }], pseudoPressed: [{
                type: Input
            }], pseudoFocused: [{
                type: Input
            }], focusable: [{
                type: Input
            }], pseudoState: [{
                type: Input
            }], focusedChange: [{
                type: Output
            }], pressedChange: [{
                type: Output
            }], hoveredChange: [{
                type: Output
            }], focusVisibleChange: [{
                type: Output
            }], computedDisabled: [{
                type: HostBinding,
                args: ['class._disabled']
            }], computedHovered: [{
                type: HostBinding,
                args: ['class._hovered']
            }], computedPressed: [{
                type: HostBinding,
                args: ['class._pressed']
            }], computedFocused: [{
                type: HostBinding,
                args: ['class._focused']
            }], computedFocusVisible: [{
                type: HostBinding,
                args: ['class._focus-visible']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9hYnN0cmFjdC9pbnRlcmFjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTVFLG9CQUFvQjtBQUNwQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQztBQUUvQjs7R0FFRztBQUVILE1BQU0sT0FBZ0Isd0JBQXlCLFNBQVEsbUJBQW1CO0lBRDFFOztRQVNFLGtCQUFhLEdBQW1CLElBQUksQ0FBQztRQUdyQyxrQkFBYSxHQUFtQixJQUFJLENBQUM7UUFHckMsa0JBQWEsR0FBbUIsSUFBSSxDQUFDO1FBR3JDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFNUixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFHNUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRzVDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUc1Qyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTFELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixpQkFBWSxHQUFHLEtBQUssQ0FBQztLQThEdEI7SUE1REMsSUFDSSxnQkFBZ0I7UUFDbEIsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELElBQ0ksZUFBZTtRQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELElBQ0ksZUFBZTtRQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsSUFDSSxlQUFlO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsSUFDSSxvQkFBb0I7UUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFUyxhQUFhLENBQUMsT0FBZ0I7UUFDdEMsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRVMsYUFBYSxDQUFDLE9BQWdCO1FBQ3RDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVTLGFBQWEsQ0FBQyxPQUFnQjtRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRVMsa0JBQWtCLENBQUMsWUFBcUI7UUFDaEQsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFlBQVksRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLENBQUM7O3FIQW5HbUIsd0JBQXdCO3lHQUF4Qix3QkFBd0I7MkZBQXhCLHdCQUF3QjtrQkFEN0MsU0FBUzs4QkFTUixhQUFhO3NCQURaLEtBQUs7Z0JBSU4sYUFBYTtzQkFEWixLQUFLO2dCQUlOLGFBQWE7c0JBRFosS0FBSztnQkFJTixTQUFTO3NCQURSLEtBQUs7Z0JBSU4sV0FBVztzQkFEVixLQUFLO2dCQUlHLGFBQWE7c0JBRHJCLE1BQU07Z0JBSUUsYUFBYTtzQkFEckIsTUFBTTtnQkFJRSxhQUFhO3NCQURyQixNQUFNO2dCQUlFLGtCQUFrQjtzQkFEMUIsTUFBTTtnQkFVSCxnQkFBZ0I7c0JBRG5CLFdBQVc7dUJBQUMsaUJBQWlCO2dCQU0xQixlQUFlO3NCQURsQixXQUFXO3VCQUFDLGdCQUFnQjtnQkFNekIsZUFBZTtzQkFEbEIsV0FBVzt1QkFBQyxnQkFBZ0I7Z0JBVXpCLGVBQWU7c0JBRGxCLFdBQVc7dUJBQUMsZ0JBQWdCO2dCQU16QixvQkFBb0I7c0JBRHZCLFdBQVc7dUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG4vLyBUT0RPIHJlbW92ZSAhbmcxNlxuZXhwb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9O1xuXG4vKipcbiAqIFRoZSBtb3N0IGJhc2ljIGNsYXNzIGZvciBpbnRlcmFjdGl2ZSBjb21wb25lbnRzXG4gKi9cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UHJpem1JbnRlcmFjdGl2ZSBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQge1xuICBhYnN0cmFjdCBkaXNhYmxlZDogQm9vbGVhbklucHV0O1xuXG4gIGFic3RyYWN0IGZvY3VzZWQ6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSByZWFkb25seSBhdXRvSWRTdHJpbmchOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHNldWRvSG92ZXJlZDogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHBzZXVkb1ByZXNzZWQ6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBwc2V1ZG9Gb2N1c2VkOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgZm9jdXNhYmxlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwc2V1ZG9TdGF0ZSE6IHN0cmluZztcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZm9jdXNlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcHJlc3NlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgaG92ZXJlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZm9jdXNWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGhvdmVyZWQgPSBmYWxzZTtcblxuICBwcmVzc2VkID0gZmFsc2U7XG5cbiAgZm9jdXNWaXNpYmxlID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5fZGlzYWJsZWQnKVxuICBnZXQgY29tcHV0ZWREaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY29lcmNlQm9vbGVhblByb3BlcnR5KHRoaXMuZGlzYWJsZWQpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5faG92ZXJlZCcpXG4gIGdldCBjb21wdXRlZEhvdmVyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmNvbXB1dGVkRGlzYWJsZWQgJiYgKHRoaXMucHNldWRvSG92ZXJlZCA/PyB0aGlzLmhvdmVyZWQpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5fcHJlc3NlZCcpXG4gIGdldCBjb21wdXRlZFByZXNzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmNvbXB1dGVkRGlzYWJsZWQgJiYgKHRoaXMucHNldWRvUHJlc3NlZCA/PyB0aGlzLnByZXNzZWQpO1xuICB9XG5cbiAgZ2V0IGNvbXB1dGVkRm9jdXNhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5jb21wdXRlZERpc2FibGVkICYmICh0aGlzLmZvY3VzYWJsZSB8fCB0aGlzLmZvY3VzZWQpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5fZm9jdXNlZCcpXG4gIGdldCBjb21wdXRlZEZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmNvbXB1dGVkRGlzYWJsZWQgJiYgKHRoaXMucHNldWRvRm9jdXNlZCA/PyB0aGlzLmZvY3VzZWQpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5fZm9jdXMtdmlzaWJsZScpXG4gIGdldCBjb21wdXRlZEZvY3VzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuY29tcHV0ZWREaXNhYmxlZCAmJiAodGhpcy5wc2V1ZG9Gb2N1c2VkID8/IHRoaXMuZm9jdXNWaXNpYmxlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVIb3ZlcmVkKGhvdmVyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmhvdmVyZWQgPT09IGhvdmVyZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhvdmVyZWQgPSBob3ZlcmVkO1xuICAgIHRoaXMuaG92ZXJlZENoYW5nZS5lbWl0KGhvdmVyZWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVByZXNzZWQocHJlc3NlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnByZXNzZWQgPT09IHByZXNzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByZXNzZWQgPSBwcmVzc2VkO1xuICAgIHRoaXMucHJlc3NlZENoYW5nZS5lbWl0KHByZXNzZWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUZvY3VzZWQoZm9jdXNlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZENoYW5nZS5lbWl0KGZvY3VzZWQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZUZvY3VzVmlzaWJsZShmb2N1c1Zpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb2N1c1Zpc2libGUgPT09IGZvY3VzVmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNWaXNpYmxlID0gZm9jdXNWaXNpYmxlO1xuICAgIHRoaXMuZm9jdXNWaXNpYmxlQ2hhbmdlLmVtaXQoZm9jdXNWaXNpYmxlKTtcbiAgfVxufVxuIl19