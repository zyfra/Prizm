import { Directive, ElementRef, Input, ViewContainerRef, inject, } from '@angular/core';
import { PrizmCounterComponent } from './counter.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export class PrizmCounterDirective {
    get counterDisabled() {
        return this._counterDisabled;
    }
    set counterDisabled(value) {
        this._counterDisabled = coerceBooleanProperty(value);
    }
    constructor(elRef) {
        this.elRef = elRef;
        this._counterDisabled = false;
        this.counterStatus = 'info';
        this.counterPosition = 'tr';
        this.vcr = inject(ViewContainerRef);
        if (!this.elRef.nativeElement.style.position || this.elRef.nativeElement.style.position === 'static') {
            this.elRef.nativeElement.style.position = 'relative';
        }
    }
    ngOnChanges() {
        this.updateCounter();
    }
    ngOnDestroy() {
        if (this.counterRef) {
            this.counterRef.destroy();
        }
    }
    updateCounter() {
        if (!this.counterRef) {
            this.createCounter();
        }
        this.setCounterData();
        this.setCounterPosition();
    }
    createCounter() {
        this.counterRef = this.vcr.createComponent(PrizmCounterComponent);
        const counter = this.counterRef.hostView.rootNodes[0];
        this.elRef.nativeElement.appendChild(counter);
    }
    setCounterData() {
        this.counterRef.instance.value = this.prizmCounter;
        this.counterRef.instance.status = this.counterStatus;
        this.counterRef.instance.disabled = this.counterDisabled;
        this.counterRef.instance.maxValue = this.counterMaxValue;
    }
    setCounterPosition() {
        this.counterRef.instance.class = `counter counter_${this.counterPosition}`;
    }
}
PrizmCounterDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCounterDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
PrizmCounterDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmCounterDirective, isStandalone: true, selector: "[prizmCounter]", inputs: { counterDisabled: "counterDisabled", counterStatus: "counterStatus", counterPosition: "counterPosition", prizmCounter: "prizmCounter", counterMaxValue: "counterMaxValue" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCounterDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmCounter]',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { counterDisabled: [{
                type: Input
            }], counterStatus: [{
                type: Input
            }], counterPosition: [{
                type: Input
            }], prizmCounter: [{
                type: Input
            }], counterMaxValue: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBRVYsS0FBSyxFQUdMLGdCQUFnQixFQUNoQixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFNUQsT0FBTyxFQUFnQixxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU01RSxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLElBQ0ksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDO0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBbUI7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFjRCxZQUFvQixLQUE4QjtRQUE5QixVQUFLLEdBQUwsS0FBSyxDQUF5QjtRQWIxQyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFeEIsa0JBQWEsR0FBdUIsTUFBTSxDQUFDO1FBRTNDLG9CQUFlLEdBQXlCLElBQUksQ0FBQztRQVVwRCxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3BHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8sYUFBYTtRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbEUsTUFBTSxPQUFPLEdBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFpQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQWdCLENBQUM7UUFDL0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzNELENBQUM7SUFFTyxrQkFBa0I7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLG1CQUFtQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDN0UsQ0FBQzs7a0hBOURVLHFCQUFxQjtzR0FBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBSmpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCO2lHQUdLLGVBQWU7c0JBRGxCLEtBQUs7Z0JBU0csYUFBYTtzQkFBckIsS0FBSztnQkFFRyxlQUFlO3NCQUF2QixLQUFLO2dCQUVHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBRUcsZUFBZTtzQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgaW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptQ291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vY291bnRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1Db3VudGVyUG9zaXRpb24sIFByaXptQ291bnRlclN0YXR1cyB9IGZyb20gJy4vY291bnRlci5tb2RlbHMnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1Db3VudGVyXScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQ291bnRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgZ2V0IGNvdW50ZXJEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnRlckRpc2FibGVkO1xuICB9XG4gIHNldCBjb3VudGVyRGlzYWJsZWQodmFsdWU6IEJvb2xlYW5JbnB1dCkge1xuICAgIHRoaXMuX2NvdW50ZXJEaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfY291bnRlckRpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgY291bnRlclN0YXR1czogUHJpem1Db3VudGVyU3RhdHVzID0gJ2luZm8nO1xuXG4gIEBJbnB1dCgpIGNvdW50ZXJQb3NpdGlvbjogUHJpem1Db3VudGVyUG9zaXRpb24gPSAndHInO1xuXG4gIEBJbnB1dCgpIHByaXptQ291bnRlcjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpIGNvdW50ZXJNYXhWYWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmO1xuICBwcml2YXRlIGNvdW50ZXJSZWYhOiBDb21wb25lbnRSZWY8UHJpem1Db3VudGVyQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge1xuICAgIHRoaXMudmNyID0gaW5qZWN0KFZpZXdDb250YWluZXJSZWYpO1xuICAgIGlmICghdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uIHx8IHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDb3VudGVyKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jb3VudGVyUmVmKSB7XG4gICAgICB0aGlzLmNvdW50ZXJSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ291bnRlcigpIHtcbiAgICBpZiAoIXRoaXMuY291bnRlclJlZikge1xuICAgICAgdGhpcy5jcmVhdGVDb3VudGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDb3VudGVyRGF0YSgpO1xuICAgIHRoaXMuc2V0Q291bnRlclBvc2l0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNvdW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5jb3VudGVyUmVmID0gdGhpcy52Y3IuY3JlYXRlQ29tcG9uZW50KFByaXptQ291bnRlckNvbXBvbmVudCk7XG4gICAgY29uc3QgY291bnRlciA9ICh0aGlzLmNvdW50ZXJSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY291bnRlcik7XG4gIH1cblxuICBwcml2YXRlIHNldENvdW50ZXJEYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuY291bnRlclJlZi5pbnN0YW5jZS52YWx1ZSA9IHRoaXMucHJpem1Db3VudGVyO1xuICAgIHRoaXMuY291bnRlclJlZi5pbnN0YW5jZS5zdGF0dXMgPSB0aGlzLmNvdW50ZXJTdGF0dXM7XG4gICAgdGhpcy5jb3VudGVyUmVmLmluc3RhbmNlLmRpc2FibGVkID0gdGhpcy5jb3VudGVyRGlzYWJsZWQ7XG4gICAgdGhpcy5jb3VudGVyUmVmLmluc3RhbmNlLm1heFZhbHVlID0gdGhpcy5jb3VudGVyTWF4VmFsdWU7XG4gIH1cblxuICBwcml2YXRlIHNldENvdW50ZXJQb3NpdGlvbigpIHtcbiAgICB0aGlzLmNvdW50ZXJSZWYuaW5zdGFuY2UuY2xhc3MgPSBgY291bnRlciBjb3VudGVyXyR7dGhpcy5jb3VudGVyUG9zaXRpb259YDtcbiAgfVxufVxuIl19