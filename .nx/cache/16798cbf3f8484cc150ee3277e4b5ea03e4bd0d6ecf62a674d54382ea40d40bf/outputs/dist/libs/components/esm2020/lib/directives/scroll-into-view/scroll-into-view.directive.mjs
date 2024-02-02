import { __decorate, __metadata } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { Observable, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PRIZM_SCROLL_INTO_VIEW } from '../../constants/events';
import { prizmRequiredSetter } from '@prizm-ui/core';
import { prizmCustomEvent } from '../../util/dom/custom-event';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
/**
 * Directive scrolls element into view inside prizm-scrollbar
 */
export class PrizmScrollIntoViewDirective {
    set prizmScrollIntoView(scroll) {
        if (!scroll) {
            return;
        }
        // Timeout is necessary in order to give element render cycle to get into its final spot
        // (for example if it is inside dropdown box which has to be positioned first)
        timer(0)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.elementRef.nativeElement.dispatchEvent(prizmCustomEvent(PRIZM_SCROLL_INTO_VIEW, {
                bubbles: true,
                detail: this.elementRef.nativeElement,
            }, this.documentRef));
        });
    }
    constructor(elementRef, documentRef, destroy$) {
        this.elementRef = elementRef;
        this.documentRef = documentRef;
        this.destroy$ = destroy$;
    }
}
PrizmScrollIntoViewDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmScrollIntoViewDirective, deps: [{ token: ElementRef }, { token: DOCUMENT }, { token: PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Directive });
PrizmScrollIntoViewDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmScrollIntoViewDirective, isStandalone: true, selector: "[prizmScrollIntoView]", inputs: { prizmScrollIntoView: "prizmScrollIntoView" }, providers: [PrizmDestroyService], ngImport: i0 });
__decorate([
    prizmRequiredSetter(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PrizmScrollIntoViewDirective.prototype, "prizmScrollIntoView", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmScrollIntoViewDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `[prizmScrollIntoView]`,
                    standalone: true,
                    providers: [PrizmDestroyService],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef, decorators: [{
                    type: Inject,
                    args: [ElementRef]
                }] }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [PrizmDestroyService]
                }] }]; }, propDecorators: { prizmScrollIntoView: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWludG8tdmlldy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL3Njcm9sbC1pbnRvLXZpZXcvc2Nyb2xsLWludG8tdmlldy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7O0FBRS9EOztHQUVHO0FBTUgsTUFBTSxPQUFPLDRCQUE0QjtJQUN2QyxJQUVJLG1CQUFtQixDQUFDLE1BQWU7UUFDckMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU87U0FDUjtRQUVELHdGQUF3RjtRQUN4Riw4RUFBOEU7UUFDOUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQ3pDLGdCQUFnQixDQUNkLHNCQUFzQixFQUN0QjtnQkFDRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO2FBQ3RDLEVBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FDakIsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsWUFDdUMsVUFBK0IsRUFDakMsV0FBcUIsRUFDVixRQUEwQjtRQUZuQyxlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUNqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBVTtRQUNWLGFBQVEsR0FBUixRQUFRLENBQWtCO0lBQ3ZFLENBQUM7O3lIQTlCTyw0QkFBNEIsa0JBMkI3QixVQUFVLGFBQ1YsUUFBUSxhQUNSLG1CQUFtQjs2R0E3QmxCLDRCQUE0Qiw0SEFGNUIsQ0FBQyxtQkFBbUIsQ0FBQztBQUdoQztJQUNDLG1CQUFtQixFQUFFOzs7dUVBc0JyQjsyRkF4QlUsNEJBQTRCO2tCQUx4QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakM7OzBCQTRCSSxNQUFNOzJCQUFDLFVBQVU7OzBCQUNqQixNQUFNOzJCQUFDLFFBQVE7OzBCQUNmLE1BQU07MkJBQUMsbUJBQW1COzRDQTFCekIsbUJBQW1CO3NCQUZ0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBSSVpNX1NDUk9MTF9JTlRPX1ZJRVcgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvZXZlbnRzJztcbmltcG9ydCB7IHByaXptUmVxdWlyZWRTZXR0ZXIgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBwcml6bUN1c3RvbUV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbC9kb20vY3VzdG9tLWV2ZW50JztcblxuLyoqXG4gKiBEaXJlY3RpdmUgc2Nyb2xscyBlbGVtZW50IGludG8gdmlldyBpbnNpZGUgcHJpem0tc2Nyb2xsYmFyXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtwcml6bVNjcm9sbEludG9WaWV3XWAsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVNjcm9sbEludG9WaWV3RGlyZWN0aXZlIHtcbiAgQElucHV0KClcbiAgQHByaXptUmVxdWlyZWRTZXR0ZXIoKVxuICBzZXQgcHJpem1TY3JvbGxJbnRvVmlldyhzY3JvbGw6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXNjcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRpbWVvdXQgaXMgbmVjZXNzYXJ5IGluIG9yZGVyIHRvIGdpdmUgZWxlbWVudCByZW5kZXIgY3ljbGUgdG8gZ2V0IGludG8gaXRzIGZpbmFsIHNwb3RcbiAgICAvLyAoZm9yIGV4YW1wbGUgaWYgaXQgaXMgaW5zaWRlIGRyb3Bkb3duIGJveCB3aGljaCBoYXMgdG8gYmUgcG9zaXRpb25lZCBmaXJzdClcbiAgICB0aW1lcigwKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgcHJpem1DdXN0b21FdmVudDxFbGVtZW50PihcbiAgICAgICAgICAgIFBSSVpNX1NDUk9MTF9JTlRPX1ZJRVcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICAgIGRldGFpbDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5kb2N1bWVudFJlZlxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChFbGVtZW50UmVmKSBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8RWxlbWVudD4sXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudFJlZjogRG9jdW1lbnQsXG4gICAgQEluamVjdChQcml6bURlc3Ryb3lTZXJ2aWNlKSBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3kkOiBPYnNlcnZhYmxlPHZvaWQ+XG4gICkge31cbn1cbiJdfQ==