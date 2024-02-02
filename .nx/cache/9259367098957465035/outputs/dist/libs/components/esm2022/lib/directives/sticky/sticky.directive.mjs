import { Directive, ElementRef, HostBinding, Input, Optional, Renderer2, } from '@angular/core';
import { filter, map, observeOn, switchMap, takeUntil, tap } from 'rxjs/operators';
import { prizmToPx } from '../../util';
import { moveInEventLoopIteration, PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmStickyRelativeService } from './sticky-relative.service';
import { animationFrameScheduler, of, Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./sticky-relative.service";
import * as i2 from "@prizm-ui/helpers";
export class PrizmStickyDirective {
    get applySticky() {
        return this.prizmStickyLeft || this.prizmStickyRight || this.prizmStickyTop || this.prizmStickyBottom
            ? this.position
            : '';
    }
    constructor(elRef, renderer, relativeService, destroy$) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.relativeService = relativeService;
        this.destroy$ = destroy$;
        this.position = 'sticky';
        this.setActiveStyle = false;
        this.destroyPrevious$ = new Subject();
        this.changedSides = {
            right: true,
            left: true,
            top: true,
            bottom: true,
        };
    }
    ngOnInit() {
        this.relativeService.add(this);
    }
    ngOnDestroy() {
        this.relativeService.delete(this);
    }
    ngOnChanges() {
        this.init();
    }
    setStylesIfExist() {
        if (!this.prizmStickyRight && !this.prizmStickyLeft && !this.prizmStickyBottom && !this.prizmStickyTop)
            return;
        const keys = this.stylesOnSticky && Object.keys(this.stylesOnSticky);
        if (!keys?.length)
            return;
        keys.forEach((key) => {
            this.elRef.nativeElement.style[key] = this.stylesOnSticky?.[key] ?? '';
        });
        this.setActiveStyle = true;
    }
    clearStylesIfSet() {
        if (!this.setActiveStyle)
            return;
        const keys = this.stylesOnSticky && Object.keys(this.stylesOnSticky);
        if (!keys?.length)
            return;
        keys.forEach((key) => {
            this.elRef.nativeElement.style[key] = '';
        });
        this.setActiveStyle = false;
    }
    init() {
        this.destroyPrevious$.next();
        const parent = this.prizmStickyRelative ?? this.relativeService?.element;
        this.relativeService.changesChildren$
            .pipe(map(() => this.elRef.nativeElement.getBoundingClientRect()), observeOn(animationFrameScheduler), filter(i => Boolean(i.width || i.height)), switchMap(result => {
            if (this.prizmStickyRight || this.changedSides.right) {
                this.renderer.removeStyle(this.elRef.nativeElement, 'right');
            }
            if (this.prizmStickyLeft || this.changedSides.left) {
                this.renderer.removeStyle(this.elRef.nativeElement, 'left');
            }
            if (this.prizmStickyTop || this.changedSides.top)
                this.renderer.removeStyle(this.elRef.nativeElement, 'top');
            if (this.prizmStickyBottom || this.changedSides.bottom)
                this.renderer.removeStyle(this.elRef.nativeElement, 'bottom');
            this.clearStylesIfSet();
            return of(result).pipe(moveInEventLoopIteration(1));
        }), tap(() => {
            const parentRect = parent?.getBoundingClientRect();
            const elRect = this.elRef.nativeElement.getBoundingClientRect();
            let styleRight = 0;
            this.setStylesIfExist();
            if (this.prizmStickyLeft) {
                const left = parentRect?.left ? elRect.left - parentRect.left : elRect.left;
                this.renderer.setStyle(this.elRef.nativeElement, 'left', prizmToPx(left));
                this.changedSides.left = true;
            }
            else
                this.changedSides.left = true;
            if (this.prizmStickyRight) {
                styleRight = parseInt(this.elRef.nativeElement.style.right || '0');
                const parentRect = parent?.getBoundingClientRect();
                const elRect = this.elRef.nativeElement.getBoundingClientRect();
                let right = elRect.right;
                let scrollOffset = 0;
                let diff = 0;
                if (parent) {
                    scrollOffset = parent.scrollWidth - parent.clientWidth - parent.scrollLeft;
                    diff = Math.abs(elRect.right - parentRect.right - scrollOffset - styleRight);
                    right = Math.floor(diff);
                }
                this.renderer.setStyle(this.elRef.nativeElement, 'right', prizmToPx(right));
                this.changedSides.right = true;
            }
            else
                this.changedSides.right = true;
            if (this.prizmStickyTop) {
                const top = parentRect?.top ? elRect.top - parentRect.top : elRect.top;
                this.renderer.setStyle(this.elRef.nativeElement, 'top', prizmToPx(top));
                this.changedSides.top = true;
            }
            else
                this.changedSides.top = true;
            if (this.prizmStickyBottom) {
                const bottom = parentRect?.bottom ? elRect.bottom - parentRect.bottom : elRect.bottom;
                this.renderer.setStyle(this.elRef.nativeElement, 'bottom', prizmToPx(bottom));
                this.changedSides.bottom = true;
            }
            else
                this.changedSides.bottom = true;
            this.setStylesIfExist();
        }), takeUntil(this.destroyPrevious$), takeUntil(this.destroy$))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStickyDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.PrizmStickyRelativeService, optional: true }, { token: i2.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmStickyDirective, selector: "[prizmStickyLeft], [prizmStickyRight], [prizmStickyTop], [prizmStickyBottom]", inputs: { prizmStickyLeft: "prizmStickyLeft", prizmStickyRight: "prizmStickyRight", prizmStickyTop: "prizmStickyTop", prizmStickyBottom: "prizmStickyBottom", prizmStickyRelative: "prizmStickyRelative", position: "position", stylesOnSticky: "stylesOnSticky" }, host: { properties: { "class.prizm-sticky-left": "this.prizmStickyLeft", "class.prizm-sticky-right": "this.prizmStickyRight", "class.prizm-sticky-top": "this.prizmStickyTop", "class.prizm-sticky-bottom": "this.prizmStickyBottom", "style.position": "this.applySticky" } }, providers: [PrizmDestroyService], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmStickyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmStickyLeft], [prizmStickyRight], [prizmStickyTop], [prizmStickyBottom]',
                    providers: [PrizmDestroyService],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.PrizmStickyRelativeService, decorators: [{
                    type: Optional
                }] }, { type: i2.PrizmDestroyService }]; }, propDecorators: { prizmStickyLeft: [{
                type: HostBinding,
                args: ['class.prizm-sticky-left']
            }, {
                type: Input
            }], prizmStickyRight: [{
                type: HostBinding,
                args: ['class.prizm-sticky-right']
            }, {
                type: Input
            }], prizmStickyTop: [{
                type: HostBinding,
                args: ['class.prizm-sticky-top']
            }, {
                type: Input
            }], prizmStickyBottom: [{
                type: HostBinding,
                args: ['class.prizm-sticky-bottom']
            }, {
                type: Input
            }], prizmStickyRelative: [{
                type: Input
            }], position: [{
                type: Input
            }], stylesOnSticky: [{
                type: Input
            }], applySticky: [{
                type: HostBinding,
                args: ['style.position']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2RpcmVjdGl2ZXMvc3RpY2t5L3N0aWNreS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFJTCxRQUFRLEVBQ1IsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25GLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdkMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFNNUQsTUFBTSxPQUFPLG9CQUFvQjtJQTBCL0IsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxpQkFBaUI7WUFDbkcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7SUFVRCxZQUNrQixLQUE4QixFQUM3QixRQUFtQixFQUNQLGVBQTJDLEVBQ3ZELFFBQTZCO1FBSDlCLFVBQUssR0FBTCxLQUFLLENBQXlCO1FBQzdCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDUCxvQkFBZSxHQUFmLGVBQWUsQ0FBNEI7UUFD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QUM7UUFDMUIsQ0FBQyxDQUFDLEVBRUYsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNoQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OEdBN0pVLG9CQUFvQjtrR0FBcEIsb0JBQW9CLDJuQkFGcEIsQ0FBQyxtQkFBbUIsQ0FBQzs7MkZBRXJCLG9CQUFvQjtrQkFKaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsOEVBQThFO29CQUN4RixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakM7OzBCQTZDSSxRQUFROzhFQXpDWCxlQUFlO3NCQUZkLFdBQVc7dUJBQUMseUJBQXlCOztzQkFDckMsS0FBSztnQkFLTixnQkFBZ0I7c0JBRmYsV0FBVzt1QkFBQywwQkFBMEI7O3NCQUN0QyxLQUFLO2dCQUtOLGNBQWM7c0JBRmIsV0FBVzt1QkFBQyx3QkFBd0I7O3NCQUNwQyxLQUFLO2dCQUtOLGlCQUFpQjtzQkFGaEIsV0FBVzt1QkFBQywyQkFBMkI7O3NCQUN2QyxLQUFLO2dCQUlOLG1CQUFtQjtzQkFEbEIsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUs7Z0JBSU4sY0FBYztzQkFEYixLQUFLO2dCQUlGLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgb2JzZXJ2ZU9uLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgcHJpem1Ub1B4IH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgeyBtb3ZlSW5FdmVudExvb3BJdGVyYXRpb24sIFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bVN0aWNreVJlbGF0aXZlU2VydmljZSB9IGZyb20gJy4vc3RpY2t5LXJlbGF0aXZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bVN0aWNreUxlZnRdLCBbcHJpem1TdGlja3lSaWdodF0sIFtwcml6bVN0aWNreVRvcF0sIFtwcml6bVN0aWNreUJvdHRvbV0nLFxuICBwcm92aWRlcnM6IFtQcml6bURlc3Ryb3lTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1TdGlja3lEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wcml6bS1zdGlja3ktbGVmdCcpXG4gIEBJbnB1dCgpXG4gIHByaXptU3RpY2t5TGVmdCE6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wcml6bS1zdGlja3ktcmlnaHQnKVxuICBASW5wdXQoKVxuICBwcml6bVN0aWNreVJpZ2h0ITogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnByaXptLXN0aWNreS10b3AnKVxuICBASW5wdXQoKVxuICBwcml6bVN0aWNreVRvcCE6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wcml6bS1zdGlja3ktYm90dG9tJylcbiAgQElucHV0KClcbiAgcHJpem1TdGlja3lCb3R0b20hOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHByaXptU3RpY2t5UmVsYXRpdmU/OiBIVE1MRWxlbWVudDtcblxuICBASW5wdXQoKVxuICBwb3NpdGlvbiA9ICdzdGlja3knO1xuXG4gIEBJbnB1dCgpXG4gIHN0eWxlc09uU3RpY2t5PzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wb3NpdGlvbicpXG4gIGdldCBhcHBseVN0aWNreSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcml6bVN0aWNreUxlZnQgfHwgdGhpcy5wcml6bVN0aWNreVJpZ2h0IHx8IHRoaXMucHJpem1TdGlja3lUb3AgfHwgdGhpcy5wcml6bVN0aWNreUJvdHRvbVxuICAgICAgPyB0aGlzLnBvc2l0aW9uXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3RpdmVTdHlsZSA9IGZhbHNlO1xuICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3lQcmV2aW91cyQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNoYW5nZWRTaWRlcyA9IHtcbiAgICByaWdodDogdHJ1ZSxcbiAgICBsZWZ0OiB0cnVlLFxuICAgIHRvcDogdHJ1ZSxcbiAgICBib3R0b206IHRydWUsXG4gIH07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBlbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcmVhZG9ubHkgcmVsYXRpdmVTZXJ2aWNlOiBQcml6bVN0aWNreVJlbGF0aXZlU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3kkOiBQcml6bURlc3Ryb3lTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbGF0aXZlU2VydmljZS5hZGQodGhpcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbGF0aXZlU2VydmljZS5kZWxldGUodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBwcml2YXRlIHNldFN0eWxlc0lmRXhpc3QoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnByaXptU3RpY2t5UmlnaHQgJiYgIXRoaXMucHJpem1TdGlja3lMZWZ0ICYmICF0aGlzLnByaXptU3RpY2t5Qm90dG9tICYmICF0aGlzLnByaXptU3RpY2t5VG9wKVxuICAgICAgcmV0dXJuO1xuXG4gICAgY29uc3Qga2V5cyA9IHRoaXMuc3R5bGVzT25TdGlja3kgJiYgT2JqZWN0LmtleXModGhpcy5zdHlsZXNPblN0aWNreSk7XG4gICAgaWYgKCFrZXlzPy5sZW5ndGgpIHJldHVybjtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5zdHlsZVtrZXldID0gKHRoaXMuc3R5bGVzT25TdGlja3k/LltrZXldIGFzIHN0cmluZykgPz8gJyc7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEFjdGl2ZVN0eWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJTdHlsZXNJZlNldCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2V0QWN0aXZlU3R5bGUpIHJldHVybjtcblxuICAgIGNvbnN0IGtleXMgPSB0aGlzLnN0eWxlc09uU3RpY2t5ICYmIE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzT25TdGlja3kpO1xuICAgIGlmICgha2V5cz8ubGVuZ3RoKSByZXR1cm47XG4gICAga2V5cy5mb3JFYWNoKChrZXk6IGFueSkgPT4ge1xuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlW2tleV0gPSAnJztcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0QWN0aXZlU3R5bGUgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3lQcmV2aW91cyQubmV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wcml6bVN0aWNreVJlbGF0aXZlID8/IHRoaXMucmVsYXRpdmVTZXJ2aWNlPy5lbGVtZW50O1xuICAgIHRoaXMucmVsYXRpdmVTZXJ2aWNlLmNoYW5nZXNDaGlsZHJlbiRcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxcbiAgICAgICAgb2JzZXJ2ZU9uKGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSxcbiAgICAgICAgZmlsdGVyKGkgPT4gQm9vbGVhbihpLndpZHRoIHx8IGkuaGVpZ2h0KSksXG4gICAgICAgIHN3aXRjaE1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnByaXptU3RpY2t5UmlnaHQgfHwgdGhpcy5jaGFuZ2VkU2lkZXMucmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAncmlnaHQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMucHJpem1TdGlja3lMZWZ0IHx8IHRoaXMuY2hhbmdlZFNpZGVzLmxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnbGVmdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5wcml6bVN0aWNreVRvcCB8fCB0aGlzLmNoYW5nZWRTaWRlcy50b3ApXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ3RvcCcpO1xuICAgICAgICAgIGlmICh0aGlzLnByaXptU3RpY2t5Qm90dG9tIHx8IHRoaXMuY2hhbmdlZFNpZGVzLmJvdHRvbSlcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnYm90dG9tJyk7XG5cbiAgICAgICAgICB0aGlzLmNsZWFyU3R5bGVzSWZTZXQoKTtcblxuICAgICAgICAgIHJldHVybiBvZihyZXN1bHQpLnBpcGUobW92ZUluRXZlbnRMb29wSXRlcmF0aW9uKDEpKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGFyZW50UmVjdCA9IHBhcmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgZWxSZWN0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGxldCBzdHlsZVJpZ2h0ID0gMDtcblxuICAgICAgICAgIHRoaXMuc2V0U3R5bGVzSWZFeGlzdCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMucHJpem1TdGlja3lMZWZ0KSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gcGFyZW50UmVjdD8ubGVmdCA/IGVsUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0IDogZWxSZWN0LmxlZnQ7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBwcml6bVRvUHgobGVmdCkpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkU2lkZXMubGVmdCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHRoaXMuY2hhbmdlZFNpZGVzLmxlZnQgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLnByaXptU3RpY2t5UmlnaHQpIHtcbiAgICAgICAgICAgIHN0eWxlUmlnaHQgPSBwYXJzZUludCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUucmlnaHQgfHwgJzAnKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFJlY3QgPSBwYXJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgZWxSZWN0ID0gdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBsZXQgcmlnaHQgPSBlbFJlY3QucmlnaHQ7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIGxldCBkaWZmID0gMDtcbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gcGFyZW50LnNjcm9sbFdpZHRoIC0gcGFyZW50LmNsaWVudFdpZHRoIC0gcGFyZW50LnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgIGRpZmYgPSBNYXRoLmFicyhlbFJlY3QucmlnaHQgLSBwYXJlbnRSZWN0LnJpZ2h0IC0gc2Nyb2xsT2Zmc2V0IC0gc3R5bGVSaWdodCk7XG4gICAgICAgICAgICAgIHJpZ2h0ID0gTWF0aC5mbG9vcihkaWZmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCBwcml6bVRvUHgocmlnaHQpKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFNpZGVzLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgdGhpcy5jaGFuZ2VkU2lkZXMucmlnaHQgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLnByaXptU3RpY2t5VG9wKSB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSBwYXJlbnRSZWN0Py50b3AgPyBlbFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3AgOiBlbFJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCBwcml6bVRvUHgodG9wKSk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRTaWRlcy50b3AgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB0aGlzLmNoYW5nZWRTaWRlcy50b3AgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLnByaXptU3RpY2t5Qm90dG9tKSB7XG4gICAgICAgICAgICBjb25zdCBib3R0b20gPSBwYXJlbnRSZWN0Py5ib3R0b20gPyBlbFJlY3QuYm90dG9tIC0gcGFyZW50UmVjdC5ib3R0b20gOiBlbFJlY3QuYm90dG9tO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCBwcml6bVRvUHgoYm90dG9tKSk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRTaWRlcy5ib3R0b20gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB0aGlzLmNoYW5nZWRTaWRlcy5ib3R0b20gPSB0cnVlO1xuXG4gICAgICAgICAgdGhpcy5zZXRTdHlsZXNJZkV4aXN0KCk7XG4gICAgICAgIH0pLFxuXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3lQcmV2aW91cyQpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19