import { Directive, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { PrizmInputLayoutBottomDirective } from '../input-layout/input-layout-bottom.directive';
import { PrizmInputLayoutInBodyDirective } from '../input-layout/input-layout-in-body.directive';
import { PrizmInputLayoutLeftDirective } from '../input-layout/input-layout-left.directive';
import { PrizmInputLayoutRightDirective } from '../input-layout/input-layout-right.directive';
import { PrizmInputLayoutSubtextDirective } from '../input-layout/input-layout-subtext.directive';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import * as i0 from "@angular/core";
export class PrizmInputControl extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.layoutSubtext = null;
        this.lastSyncedState = {
            touched: null,
            pristine: null,
        };
        this.stateChanges = new Subject();
        this.hidden = false;
    }
    ngDoCheck() {
        this.updateLayoutOnTouched();
    }
    updateLayoutOnTouched() {
        if (this.ngControl &&
            (this.ngControl.pristine !== this.lastSyncedState.pristine ||
                this.ngControl.touched !== this.lastSyncedState.touched)) {
            this.lastSyncedState.touched = this.ngControl.touched;
            this.lastSyncedState.pristine = this.ngControl.pristine;
            this.stateChanges.next();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputControl, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputControl, viewQueries: [{ propertyName: "layoutBottom", first: true, predicate: PrizmInputLayoutBottomDirective, descendants: true }, { propertyName: "layoutInBody", first: true, predicate: PrizmInputLayoutInBodyDirective, descendants: true }, { propertyName: "layoutLeft", first: true, predicate: PrizmInputLayoutLeftDirective, descendants: true }, { propertyName: "layoutRight", first: true, predicate: PrizmInputLayoutRightDirective, descendants: true }, { propertyName: "layoutSubtext", first: true, predicate: PrizmInputLayoutSubtextDirective, descendants: true }], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputControl, decorators: [{
            type: Directive
        }], propDecorators: { layoutBottom: [{
                type: ViewChild,
                args: [PrizmInputLayoutBottomDirective]
            }], layoutInBody: [{
                type: ViewChild,
                args: [PrizmInputLayoutInBodyDirective]
            }], layoutLeft: [{
                type: ViewChild,
                args: [PrizmInputLayoutLeftDirective]
            }], layoutRight: [{
                type: ViewChild,
                args: [PrizmInputLayoutRightDirective]
            }], layoutSubtext: [{
                type: ViewChild,
                args: [PrizmInputLayoutSubtextDirective]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY29udHJvbC5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvY29tbW9uL2Jhc2UvaW5wdXQtY29udHJvbC5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFXLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRWxHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUd2RSxNQUFNLE9BQWdCLGlCQUFxQixTQUFRLG1CQUFtQjtJQUR0RTs7UUFrQlMsa0JBQWEsR0FBNEMsSUFBSSxDQUFDO1FBR2xELG9CQUFlLEdBRzlCO1lBQ0YsT0FBTyxFQUFFLElBQUk7WUFDYixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUM7UUFJTyxpQkFBWSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBeUIzRCxXQUFNLEdBQUcsS0FBSyxDQUFDO0tBa0JoQjtJQWZDLFNBQVM7UUFDUCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU8scUJBQXFCO1FBQzNCLElBQ0UsSUFBSSxDQUFDLFNBQVM7WUFDZCxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUTtnQkFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFDMUQ7WUFDQSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUN0RCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs4R0F4RW1CLGlCQUFpQjtrR0FBakIsaUJBQWlCLHdFQUkxQiwrQkFBK0IsK0VBRy9CLCtCQUErQiw2RUFHL0IsNkJBQTZCLDhFQUc3Qiw4QkFBOEIsZ0ZBRzlCLGdDQUFnQzs7MkZBaEJ2QixpQkFBaUI7a0JBRHRDLFNBQVM7OEJBTUQsWUFBWTtzQkFEbEIsU0FBUzt1QkFBQywrQkFBK0I7Z0JBSW5DLFlBQVk7c0JBRGxCLFNBQVM7dUJBQUMsK0JBQStCO2dCQUluQyxVQUFVO3NCQURoQixTQUFTO3VCQUFDLDZCQUE2QjtnQkFJakMsV0FBVztzQkFEakIsU0FBUzt1QkFBQyw4QkFBOEI7Z0JBSWxDLGFBQWE7c0JBRG5CLFNBQVM7dUJBQUMsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBEb0NoZWNrLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJpem1JbnB1dExheW91dEJvdHRvbURpcmVjdGl2ZSB9IGZyb20gJy4uL2lucHV0LWxheW91dC9pbnB1dC1sYXlvdXQtYm90dG9tLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0TGF5b3V0SW5Cb2R5RGlyZWN0aXZlIH0gZnJvbSAnLi4vaW5wdXQtbGF5b3V0L2lucHV0LWxheW91dC1pbi1ib2R5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0TGF5b3V0TGVmdERpcmVjdGl2ZSB9IGZyb20gJy4uL2lucHV0LWxheW91dC9pbnB1dC1sYXlvdXQtbGVmdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dExheW91dFJpZ2h0RGlyZWN0aXZlIH0gZnJvbSAnLi4vaW5wdXQtbGF5b3V0L2lucHV0LWxheW91dC1yaWdodC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dExheW91dFN1YnRleHREaXJlY3RpdmUgfSBmcm9tICcuLi9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LXN1YnRleHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptSW5wdXRTdGF0dXNUZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi4vaW5wdXQtc3RhdHVzLXRleHQvaW5wdXQtc3RhdHVzLXRleHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9hYnN0cmFjdC9pbnRlcmFjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByaXptSW5wdXRDb250cm9sPFQ+IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICAvLyBAVmlld0NoaWxkKFByaXptSW5wdXRTdGF0dXNUZXh0RGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBzdGF0dXNUZXh0PzogUHJpem1JbnB1dFN0YXR1c1RleHREaXJlY3RpdmU7XG5cbiAgQFZpZXdDaGlsZChQcml6bUlucHV0TGF5b3V0Qm90dG9tRGlyZWN0aXZlKVxuICBwdWJsaWMgbGF5b3V0Qm90dG9tITogUHJpem1JbnB1dExheW91dEJvdHRvbURpcmVjdGl2ZSB8IG51bGw7XG5cbiAgQFZpZXdDaGlsZChQcml6bUlucHV0TGF5b3V0SW5Cb2R5RGlyZWN0aXZlKVxuICBwdWJsaWMgbGF5b3V0SW5Cb2R5ITogUHJpem1JbnB1dExheW91dEluQm9keURpcmVjdGl2ZSB8IG51bGw7XG5cbiAgQFZpZXdDaGlsZChQcml6bUlucHV0TGF5b3V0TGVmdERpcmVjdGl2ZSlcbiAgcHVibGljIGxheW91dExlZnQhOiBQcml6bUlucHV0TGF5b3V0TGVmdERpcmVjdGl2ZSB8IG51bGw7XG5cbiAgQFZpZXdDaGlsZChQcml6bUlucHV0TGF5b3V0UmlnaHREaXJlY3RpdmUpXG4gIHB1YmxpYyBsYXlvdXRSaWdodCE6IFByaXptSW5wdXRMYXlvdXRSaWdodERpcmVjdGl2ZSB8IG51bGw7XG5cbiAgQFZpZXdDaGlsZChQcml6bUlucHV0TGF5b3V0U3VidGV4dERpcmVjdGl2ZSlcbiAgcHVibGljIGxheW91dFN1YnRleHQ6IFByaXptSW5wdXRMYXlvdXRTdWJ0ZXh0RGlyZWN0aXZlIHwgbnVsbCA9IG51bGw7XG5cbiAgcHVibGljIGRlZmF1bHRMYWJlbCE6IHN0cmluZztcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGxhc3RTeW5jZWRTdGF0ZToge1xuICAgIHRvdWNoZWQ6IGJvb2xlYW4gfCBudWxsO1xuICAgIHByaXN0aW5lOiBib29sZWFuIHwgbnVsbDtcbiAgfSA9IHtcbiAgICB0b3VjaGVkOiBudWxsLFxuICAgIHByaXN0aW5lOiBudWxsLFxuICB9O1xuICAvKiogVGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLiAqL1xuICBhYnN0cmFjdCB2YWx1ZTogVCB8IG51bGw7XG5cbiAgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBhYnN0cmFjdCByZWFkb25seSBlbXB0eTogYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgLyoqIEdldHMgdGhlIEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSBmb3IgdGhpcyBjb250cm9sLiAqL1xuICBhYnN0cmFjdCByZWFkb25seSBuZ0NvbnRyb2w6IE5nQ29udHJvbCB8IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSB8IG51bGw7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbnRyb2wgaXMgcmVxdWlyZWQuICovXG4gIGFic3RyYWN0IHJlYWRvbmx5IHJlcXVpcmVkOiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvKiogV2hldGhlciB0aGUgY29udHJvbCBpcyBkaXNhYmxlZC4gKi9cbiAgYWJzdHJhY3QgcmVhZG9ubHkgZGlzYWJsZWQ6IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBjb250cm9sIGlzIHJlcXVpcmVkLiAqL1xuICBhYnN0cmFjdCByZWFkb25seSBmb2N1c2VkOiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICAvKiogV2hldGhlciB0aGUgY29udHJvbCBpcyB2YWxpZGl0eS4gKi9cbiAgYWJzdHJhY3QgcmVhZG9ubHkgaW52YWxpZDogYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbnRyb2wgaXMgdmFsaWRpdHkuICovXG4gIGFic3RyYWN0IHJlYWRvbmx5IHRvdWNoZWQ6IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGFic3RyYWN0IG5hdGl2ZUVsZW1lbnRUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgYWJzdHJhY3QgaGFzQ2xlYXJCdXR0b246IGJvb2xlYW47XG4gIGhpZGRlbiA9IGZhbHNlO1xuICBwdWJsaWMgYWJzdHJhY3QgY2xlYXIoZXY6IE1vdXNlRXZlbnQpOiB2b2lkO1xuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUxheW91dE9uVG91Y2hlZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVMYXlvdXRPblRvdWNoZWQoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5uZ0NvbnRyb2wgJiZcbiAgICAgICh0aGlzLm5nQ29udHJvbC5wcmlzdGluZSAhPT0gdGhpcy5sYXN0U3luY2VkU3RhdGUucHJpc3RpbmUgfHxcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wudG91Y2hlZCAhPT0gdGhpcy5sYXN0U3luY2VkU3RhdGUudG91Y2hlZClcbiAgICApIHtcbiAgICAgIHRoaXMubGFzdFN5bmNlZFN0YXRlLnRvdWNoZWQgPSB0aGlzLm5nQ29udHJvbC50b3VjaGVkO1xuICAgICAgdGhpcy5sYXN0U3luY2VkU3RhdGUucHJpc3RpbmUgPSB0aGlzLm5nQ29udHJvbC5wcmlzdGluZTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==