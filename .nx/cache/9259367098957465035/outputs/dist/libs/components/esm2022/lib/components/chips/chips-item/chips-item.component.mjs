import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { PrizmOverlayOutsidePlacement } from '../../../modules';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { prizmIsTextOverflow$ } from '../../../util/dom/is-textoverflow';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AsyncPipe, NgIf } from '@angular/common';
import { PrizmCallFuncPipe, PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmElementReadyDirective, PrizmHintDirective, PrizmLifecycleDirective } from '../../../directives';
import * as i0 from "@angular/core";
export class PrizmChipsItemComponent extends PrizmAbstractTestId {
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = coerceBooleanProperty(value);
    }
    constructor(el) {
        super();
        this.el = el;
        this._disabled = false;
        this._selected = false;
        this.deletable = true;
        this.deleted = new EventEmitter();
        this.hintCanShow = true;
        this.hintDirection = PrizmOverlayOutsidePlacement.RIGHT;
        this.testId_ = 'ui_chips_item';
        this.prizmIsTextOverflow$ = (elem, hintCanShow, forceShowHint) => {
            return of(forceShowHint).pipe(switchMap(val => {
                if (val) {
                    return of(true);
                }
                if (!hintCanShow) {
                    return of(false);
                }
                return prizmIsTextOverflow$(elem);
            }));
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmChipsItemComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmChipsItemComponent, isStandalone: true, selector: "prizm-chips-item", inputs: { disabled: "disabled", selected: "selected", deletable: "deletable", hintCanShow: "hintCanShow", hintText: "hintText", hintDirection: "hintDirection" }, outputs: { deleted: "deleted" }, usesInheritance: true, ngImport: i0, template: "<button class=\"chips-list__item\" [disabled]=\"disabled\" [class.chips-list__item_selected]=\"selected\">\n  <div\n    class=\"chips-name\"\n    #div\n    [prizmHint]=\"hintText\"\n    [prizmHintHost]=\"el.nativeElement\"\n    [prizmHintDirection]=\"hintDirection\"\n    [prizmHintCanShow]=\"\n      $any(!!hintText && (div | prizmCallFunc : prizmIsTextOverflow$ : hintCanShow : null | async))\n    \"\n  >\n    <ng-content></ng-content>\n  </div>\n  <button\n    class=\"chips-cancel prizm-icon cancel-close-small\"\n    *ngIf=\"deletable\"\n    [disabled]=\"disabled\"\n    (click)=\"deleted.emit($event)\"\n  ></button>\n</button>\n", styles: [":host{display:inline-block}button{border:none;outline:none;background:transparent;cursor:pointer}button:disabled{cursor:not-allowed}.chips-list__item{height:18px;min-width:4px;max-width:100%;padding:4px;display:flex;align-items:center;justify-content:space-between;border-radius:2px;background:var(--prizm-chips-item-background, var(--prizm-v3-status-none-secondary-default));font-size:14px;line-height:16px;color:var(--prizm-chips-item-color, var(--prizm-v3-status-none-primary-default));cursor:pointer}.chips-list__item:not(:disabled):hover,.chips-list__item:not(:disabled):focus{outline:var(--prizm-v3-background-stroke-focus) 1px solid}.chips-list__item .chips-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chips-list__item .chips-cancel{height:16px;width:16px;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--prizm-v3-status-none-primary-default)}.chips-list__item .chips-cancel:focus{color:var(--prizm-v3-background-stroke-focus)}.chips-list__item_selected{background-color:var(--prizm-v3-status-none-primary-default);color:var(--prizm-v3-text-icon-exception)}.chips-list__item_selected .chips-cancel{color:var(--prizm-v3-text-icon-exception)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: PrizmCallFuncPipe, name: "prizmCallFunc" }, { kind: "directive", type: PrizmHintDirective, selector: "[prizmHint]:not(ng-container)", inputs: ["prizmAutoReposition", "prizmHintDirection", "prizmHintId", "prizmHintTheme", "prizmHintShowDelay", "prizmHintHideDelay", "prizmHintHost", "prizmHintContext", "prizmHintCanShow", "prizmHint"], outputs: ["prizmHintShowed"], exportAs: ["prizmHint"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmChipsItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-chips-item', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [
                        AsyncPipe,
                        NgIf,
                        PrizmCallFuncPipe,
                        PrizmLifecycleDirective,
                        PrizmElementReadyDirective,
                        PrizmLetDirective,
                        PrizmHintDirective,
                    ], template: "<button class=\"chips-list__item\" [disabled]=\"disabled\" [class.chips-list__item_selected]=\"selected\">\n  <div\n    class=\"chips-name\"\n    #div\n    [prizmHint]=\"hintText\"\n    [prizmHintHost]=\"el.nativeElement\"\n    [prizmHintDirection]=\"hintDirection\"\n    [prizmHintCanShow]=\"\n      $any(!!hintText && (div | prizmCallFunc : prizmIsTextOverflow$ : hintCanShow : null | async))\n    \"\n  >\n    <ng-content></ng-content>\n  </div>\n  <button\n    class=\"chips-cancel prizm-icon cancel-close-small\"\n    *ngIf=\"deletable\"\n    [disabled]=\"disabled\"\n    (click)=\"deleted.emit($event)\"\n  ></button>\n</button>\n", styles: [":host{display:inline-block}button{border:none;outline:none;background:transparent;cursor:pointer}button:disabled{cursor:not-allowed}.chips-list__item{height:18px;min-width:4px;max-width:100%;padding:4px;display:flex;align-items:center;justify-content:space-between;border-radius:2px;background:var(--prizm-chips-item-background, var(--prizm-v3-status-none-secondary-default));font-size:14px;line-height:16px;color:var(--prizm-chips-item-color, var(--prizm-v3-status-none-primary-default));cursor:pointer}.chips-list__item:not(:disabled):hover,.chips-list__item:not(:disabled):focus{outline:var(--prizm-v3-background-stroke-focus) 1px solid}.chips-list__item .chips-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.chips-list__item .chips-cancel{height:16px;width:16px;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--prizm-v3-status-none-primary-default)}.chips-list__item .chips-cancel:focus{color:var(--prizm-v3-background-stroke-focus)}.chips-list__item_selected{background-color:var(--prizm-v3-status-none-primary-default);color:var(--prizm-v3-text-icon-exception)}.chips-list__item_selected .chips-cancel{color:var(--prizm-v3-text-icon-exception)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { disabled: [{
                type: Input
            }], selected: [{
                type: Input
            }], deletable: [{
                type: Input
            }], deleted: [{
                type: Output
            }], hintCanShow: [{
                type: Input
            }], hintText: [{
                type: Input
            }], hintDirection: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NoaXBzL2NoaXBzLWl0ZW0vY2hpcHMtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NoaXBzL2NoaXBzLWl0ZW0vY2hpcHMtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQWdCLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsa0JBQWtCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFrQjlHLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxtQkFBbUI7SUFDOUQsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFtQjtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFHRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQW1CO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQThCRCxZQUE0QixFQUFjO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBRGtCLE9BQUUsR0FBRixFQUFFLENBQVk7UUF0Q2xDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFTbEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzFDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGtCQUFhLEdBQWlDLDRCQUE0QixDQUFDLEtBQUssQ0FBQztRQUV4RSxZQUFPLEdBQUcsZUFBZSxDQUFDO1FBRW5DLHlCQUFvQixHQUFHLENBQzlCLElBQWlCLEVBQ2pCLFdBQW9CLEVBQ3BCLGFBQXNCLEVBQ0QsRUFBRTtZQUN2QixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQzNCLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZCxJQUFJLEdBQUcsRUFBRTtvQkFDUCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDakI7Z0JBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2xCO2dCQUVELE9BQU8sb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQztJQUdGLENBQUM7OEdBaERVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLHNTQzNCcEMsOG5CQW9CQSx1dUNERkksU0FBUyw4Q0FDVCxJQUFJLHdGQUNKLGlCQUFpQixzREFJakIsa0JBQWtCOzsyRkFHVCx1QkFBdUI7a0JBaEJuQyxTQUFTOytCQUNFLGtCQUFrQixtQkFHWCx1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLElBQUksV0FDUDt3QkFDUCxTQUFTO3dCQUNULElBQUk7d0JBQ0osaUJBQWlCO3dCQUNqQix1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsaUJBQWlCO3dCQUNqQixrQkFBa0I7cUJBQ25CO2lHQUlHLFFBQVE7c0JBRFgsS0FBSztnQkFVRixRQUFRO3NCQURYLEtBQUs7Z0JBU0csU0FBUztzQkFBakIsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNO2dCQUNFLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgcHJpem1Jc1RleHRPdmVyZmxvdyQgfSBmcm9tICcuLi8uLi8uLi91dGlsL2RvbS9pcy10ZXh0b3ZlcmZsb3cnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7IEFzeW5jUGlwZSwgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcml6bUNhbGxGdW5jUGlwZSwgUHJpem1MZXREaXJlY3RpdmUgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bUVsZW1lbnRSZWFkeURpcmVjdGl2ZSwgUHJpem1IaW50RGlyZWN0aXZlLCBQcml6bUxpZmVjeWNsZURpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1jaGlwcy1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoaXBzLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jaGlwcy1pdGVtLmNvbXBvbmVudC5sZXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQXN5bmNQaXBlLFxuICAgIE5nSWYsXG4gICAgUHJpem1DYWxsRnVuY1BpcGUsXG4gICAgUHJpem1MaWZlY3ljbGVEaXJlY3RpdmUsXG4gICAgUHJpem1FbGVtZW50UmVhZHlEaXJlY3RpdmUsXG4gICAgUHJpem1MZXREaXJlY3RpdmUsXG4gICAgUHJpem1IaW50RGlyZWN0aXZlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUNoaXBzSXRlbUNvbXBvbmVudCBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQge1xuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogQm9vbGVhbklucHV0KSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IEJvb2xlYW5JbnB1dCkge1xuICAgIHRoaXMuX3NlbGVjdGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9zZWxlY3RlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGRlbGV0YWJsZSA9IHRydWU7XG4gIEBPdXRwdXQoKSBkZWxldGVkID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICBASW5wdXQoKSBoaW50Q2FuU2hvdyA9IHRydWU7XG4gIEBJbnB1dCgpIGhpbnRUZXh0ITogc3RyaW5nO1xuICBASW5wdXQoKSBoaW50RGlyZWN0aW9uOiBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50ID0gUHJpem1PdmVybGF5T3V0c2lkZVBsYWNlbWVudC5SSUdIVDtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2NoaXBzX2l0ZW0nO1xuXG4gIHJlYWRvbmx5IHByaXptSXNUZXh0T3ZlcmZsb3ckID0gKFxuICAgIGVsZW06IEhUTUxFbGVtZW50LFxuICAgIGhpbnRDYW5TaG93OiBib29sZWFuLFxuICAgIGZvcmNlU2hvd0hpbnQ6IGJvb2xlYW5cbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XG4gICAgcmV0dXJuIG9mKGZvcmNlU2hvd0hpbnQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAodmFsID0+IHtcbiAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgIHJldHVybiBvZih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGludENhblNob3cpIHtcbiAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByaXptSXNUZXh0T3ZlcmZsb3ckKGVsZW0pO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iLCI8YnV0dG9uIGNsYXNzPVwiY2hpcHMtbGlzdF9faXRlbVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjbGFzcy5jaGlwcy1saXN0X19pdGVtX3NlbGVjdGVkXT1cInNlbGVjdGVkXCI+XG4gIDxkaXZcbiAgICBjbGFzcz1cImNoaXBzLW5hbWVcIlxuICAgICNkaXZcbiAgICBbcHJpem1IaW50XT1cImhpbnRUZXh0XCJcbiAgICBbcHJpem1IaW50SG9zdF09XCJlbC5uYXRpdmVFbGVtZW50XCJcbiAgICBbcHJpem1IaW50RGlyZWN0aW9uXT1cImhpbnREaXJlY3Rpb25cIlxuICAgIFtwcml6bUhpbnRDYW5TaG93XT1cIlxuICAgICAgJGFueSghIWhpbnRUZXh0ICYmIChkaXYgfCBwcml6bUNhbGxGdW5jIDogcHJpem1Jc1RleHRPdmVyZmxvdyQgOiBoaW50Q2FuU2hvdyA6IG51bGwgfCBhc3luYykpXG4gICAgXCJcbiAgPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG4gIDxidXR0b25cbiAgICBjbGFzcz1cImNoaXBzLWNhbmNlbCBwcml6bS1pY29uIGNhbmNlbC1jbG9zZS1zbWFsbFwiXG4gICAgKm5nSWY9XCJkZWxldGFibGVcIlxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgKGNsaWNrKT1cImRlbGV0ZWQuZW1pdCgkZXZlbnQpXCJcbiAgPjwvYnV0dG9uPlxuPC9idXR0b24+XG4iXX0=