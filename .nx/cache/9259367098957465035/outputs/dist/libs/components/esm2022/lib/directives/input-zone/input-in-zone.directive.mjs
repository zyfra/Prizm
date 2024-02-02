import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Input, Optional, Output, } from '@angular/core';
import { PrizmInputZoneService } from './input-zone.service';
import { map, mapTo, share, takeUntil, tap } from 'rxjs/operators';
import { fromEvent, merge, timer } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { NgControl } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "./input-zone.service";
import * as i3 from "@prizm-ui/helpers";
export class PrizmInputInZoneDirective {
    get focused() {
        return this.document.activeElement === this.el.nativeElement;
    }
    /**
     * save previous selection index for case when clicking inside in input or focused
     * for correct working moving between in inputs in zone
     * */
    savePreviousPosition() {
        timer(0)
            .pipe(tap(() => {
            this.previousSelectionStart = this.el.nativeElement.selectionStart;
        }), takeUntil(this.destroy$))
            .subscribe();
    }
    keyUpEvent(event) {
        const unsupportedKeyCharacters = [
            'Shift',
            'Escape',
            'ArrowUp',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'Enter',
            'CapsLock',
            'Alt',
            'Control',
            'Meta',
        ];
        const { selectionStart } = this.el.nativeElement;
        const idx = this.inputZoneService.getIdx(this);
        if ((event.key === 'ArrowLeft' || event.key === 'Backspace') &&
            selectionStart === 0 &&
            this.previousSelectionStart === 0 &&
            idx > 0) {
            this.inputZoneService
                .getByIdx(idx - 1)
                ?.focus()
                .selectionToEnd();
        }
        else if (selectionStart === this.maxSize && this.previousSelectionStart === this.maxSize) {
            if (event.key === 'ArrowRight') {
                this.inputZoneService
                    .getByIdx(idx + 1)
                    ?.focus()
                    .selectionToStart();
            }
            else if (!unsupportedKeyCharacters.includes(event.key)) {
                this.inputZoneService
                    .getByIdx(idx + 1)
                    ?.focus()
                    .selectionTo(0, 1);
            }
        }
        this.previousSelectionStart = selectionStart;
    }
    constructor(el, document, ngControl, inputZoneService, destroy$) {
        this.el = el;
        this.document = document;
        this.ngControl = ngControl;
        this.inputZoneService = inputZoneService;
        this.destroy$ = destroy$;
        this.updateNativeValue = new EventEmitter();
        this.focused$ = merge(fromEvent(this.el.nativeElement, 'focus').pipe(mapTo(true)), fromEvent(this.el.nativeElement, 'blur').pipe(mapTo(false))).pipe(share());
        this.blured$ = this.focused$.pipe(map(i => !i));
    }
    ngOnDestroy() {
        this.inputZoneService.delete(this.idx);
    }
    ngOnInit() {
        if (this.idx) {
            this.inputZoneService.set(this.idx, this);
        }
        else {
            this.idx = this.inputZoneService.add(this);
        }
    }
    focus() {
        this.el.nativeElement.focus();
        return this;
    }
    selectionToStart() {
        return this.selectionTo(0);
    }
    selectionTo(start, end) {
        this.el.nativeElement.selectionStart = start;
        this.el.nativeElement.selectionEnd = end ?? start;
        return this;
    }
    selectionToEnd() {
        return this.selectionTo(this.maxSize);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputInZoneDirective, deps: [{ token: i0.ElementRef }, { token: DOCUMENT }, { token: i1.NgControl, optional: true }, { token: i2.PrizmInputZoneService }, { token: i3.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmInputInZoneDirective, selector: "input[prizmInputInZone]", inputs: { idx: "idx", maxSize: "maxSize" }, outputs: { updateNativeValue: "updateNativeValue", focused$: "focused$", blured$: "blured$" }, host: { listeners: { "click": "savePreviousPosition()", "focus": "savePreviousPosition()", "keyup": "keyUpEvent($event)" }, properties: { "style.--prizm-input-in-zone-max-size": "this.maxSize" } }, providers: [PrizmDestroyService], exportAs: ["prizmInputInZone"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputInZoneDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `input[prizmInputInZone]`,
                    exportAs: 'prizmInputInZone',
                    providers: [PrizmDestroyService],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.NgControl, decorators: [{
                    type: Optional
                }] }, { type: i2.PrizmInputZoneService }, { type: i3.PrizmDestroyService }]; }, propDecorators: { idx: [{
                type: Input
            }], maxSize: [{
                type: HostBinding,
                args: ['style.--prizm-input-in-zone-max-size']
            }, {
                type: Input
            }], updateNativeValue: [{
                type: Output
            }], focused$: [{
                type: Output
            }], blured$: [{
                type: Output
            }], savePreviousPosition: [{
                type: HostListener,
                args: ['click']
            }, {
                type: HostListener,
                args: ['focus']
            }], keyUpEvent: [{
                type: HostListener,
                args: ['keyup', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaW4tem9uZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2lucHV0LXpvbmUvaW5wdXQtaW4tem9uZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFPLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBT3hELE1BQU0sT0FBTyx5QkFBeUI7SUFnQnBDLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDL0QsQ0FBQztJQUlEOzs7U0FHSztJQUdFLG9CQUFvQjtRQUN6QixLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ0wsSUFBSSxDQUNILEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENB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QVgsS0FBSztnQkFJTixPQUFPO3NCQUZOLFdBQVc7dUJBQUMsc0NBQXNDOztzQkFDbEQsS0FBSztnQkFJTixpQkFBaUI7c0JBRGhCLE1BQU07Z0JBR0csUUFBUTtzQkFBakIsTUFBTTtnQkFTRyxPQUFPO3NCQUFoQixNQUFNO2dCQVFBLG9CQUFvQjtzQkFGMUIsWUFBWTt1QkFBQyxPQUFPOztzQkFDcEIsWUFBWTt1QkFBQyxPQUFPO2dCQVlxQixVQUFVO3NCQUFuRCxZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0Wm9uZVNlcnZpY2UgfSBmcm9tICcuL2lucHV0LXpvbmUuc2VydmljZSc7XG5pbXBvcnQgeyBtYXAsIG1hcFRvLCBzaGFyZSwgc3dpdGNoTWFwLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIHRpbWVyLCB6aXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlucHV0W3ByaXptSW5wdXRJblpvbmVdYCxcbiAgZXhwb3J0QXM6ICdwcml6bUlucHV0SW5ab25lJyxcbiAgcHJvdmlkZXJzOiBbUHJpem1EZXN0cm95U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRJblpvbmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByZXZpb3VzU2VsZWN0aW9uU3RhcnQhOiBudW1iZXI7XG4gIEBJbnB1dCgpIGlkeD86IG51bWJlcjtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi0tcHJpem0taW5wdXQtaW4tem9uZS1tYXgtc2l6ZScpXG4gIEBJbnB1dCgpXG4gIG1heFNpemUhOiBudW1iZXI7XG5cbiAgQE91dHB1dCgpXG4gIHVwZGF0ZU5hdGl2ZVZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQE91dHB1dCgpIGZvY3VzZWQkID0gbWVyZ2UoXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2ZvY3VzJykucGlwZShtYXBUbyh0cnVlKSksXG4gICAgZnJvbUV2ZW50KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2JsdXInKS5waXBlKG1hcFRvKGZhbHNlKSlcbiAgKS5waXBlKHNoYXJlKCkpO1xuXG4gIGdldCBmb2N1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBibHVyZWQkID0gdGhpcy5mb2N1c2VkJC5waXBlKG1hcChpID0+ICFpKSk7XG5cbiAgLyoqXG4gICAqIHNhdmUgcHJldmlvdXMgc2VsZWN0aW9uIGluZGV4IGZvciBjYXNlIHdoZW4gY2xpY2tpbmcgaW5zaWRlIGluIGlucHV0IG9yIGZvY3VzZWRcbiAgICogZm9yIGNvcnJlY3Qgd29ya2luZyBtb3ZpbmcgYmV0d2VlbiBpbiBpbnB1dHMgaW4gem9uZVxuICAgKiAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgcHVibGljIHNhdmVQcmV2aW91c1Bvc2l0aW9uKCkge1xuICAgIHRpbWVyKDApXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0aW9uU3RhcnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgYXMgbnVtYmVyO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pIHB1YmxpYyBrZXlVcEV2ZW50KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgdW5zdXBwb3J0ZWRLZXlDaGFyYWN0ZXJzID0gW1xuICAgICAgJ1NoaWZ0JyxcbiAgICAgICdFc2NhcGUnLFxuICAgICAgJ0Fycm93VXAnLFxuICAgICAgJ0Fycm93RG93bicsXG4gICAgICAnQXJyb3dMZWZ0JyxcbiAgICAgICdBcnJvd1JpZ2h0JyxcbiAgICAgICdFbnRlcicsXG4gICAgICAnQ2Fwc0xvY2snLFxuICAgICAgJ0FsdCcsXG4gICAgICAnQ29udHJvbCcsXG4gICAgICAnTWV0YScsXG4gICAgXTtcbiAgICBjb25zdCB7IHNlbGVjdGlvblN0YXJ0IH0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5pbnB1dFpvbmVTZXJ2aWNlLmdldElkeCh0aGlzKTtcblxuICAgIGlmIChcbiAgICAgIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnIHx8IGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScpICYmXG4gICAgICBzZWxlY3Rpb25TdGFydCA9PT0gMCAmJlxuICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdGlvblN0YXJ0ID09PSAwICYmXG4gICAgICBpZHggPiAwXG4gICAgKSB7XG4gICAgICB0aGlzLmlucHV0Wm9uZVNlcnZpY2VcbiAgICAgICAgLmdldEJ5SWR4KGlkeCAtIDEpXG4gICAgICAgID8uZm9jdXMoKVxuICAgICAgICAuc2VsZWN0aW9uVG9FbmQoKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdGlvblN0YXJ0ID09PSB0aGlzLm1heFNpemUgJiYgdGhpcy5wcmV2aW91c1NlbGVjdGlvblN0YXJ0ID09PSB0aGlzLm1heFNpemUpIHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICB0aGlzLmlucHV0Wm9uZVNlcnZpY2VcbiAgICAgICAgICAuZ2V0QnlJZHgoaWR4ICsgMSlcbiAgICAgICAgICA/LmZvY3VzKClcbiAgICAgICAgICAuc2VsZWN0aW9uVG9TdGFydCgpO1xuICAgICAgfSBlbHNlIGlmICghdW5zdXBwb3J0ZWRLZXlDaGFyYWN0ZXJzLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgICAgdGhpcy5pbnB1dFpvbmVTZXJ2aWNlXG4gICAgICAgICAgLmdldEJ5SWR4KGlkeCArIDEpXG4gICAgICAgICAgPy5mb2N1cygpXG4gICAgICAgICAgLnNlbGVjdGlvblRvKDAsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByZXZpb3VzU2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydCBhcyBudW1iZXI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgZWw6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSByZWFkb25seSBkb2N1bWVudDogRG9jdW1lbnQsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlucHV0Wm9uZVNlcnZpY2U6IFByaXptSW5wdXRab25lU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3kkOiBQcml6bURlc3Ryb3lTZXJ2aWNlXG4gICkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0Wm9uZVNlcnZpY2UuZGVsZXRlKHRoaXMuaWR4IGFzIG51bWJlcik7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pZHgpIHtcbiAgICAgIHRoaXMuaW5wdXRab25lU2VydmljZS5zZXQodGhpcy5pZHgsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlkeCA9IHRoaXMuaW5wdXRab25lU2VydmljZS5hZGQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvY3VzKCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGlvblRvU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uVG8oMCk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0aW9uVG8oc3RhcnQ6IG51bWJlciwgZW5kPzogbnVtYmVyKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZCA9IGVuZCA/PyBzdGFydDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3Rpb25Ub0VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25Ubyh0aGlzLm1heFNpemUpO1xuICB9XG59XG4iXX0=