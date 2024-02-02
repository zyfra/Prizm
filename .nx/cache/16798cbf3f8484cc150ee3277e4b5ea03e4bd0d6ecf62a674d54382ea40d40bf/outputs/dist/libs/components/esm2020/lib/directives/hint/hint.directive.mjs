import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, inject, Injector, Input, Output, Renderer2, } from '@angular/core';
import { PrizmDestroyService, prizmGenerateId } from '@prizm-ui/helpers';
import { prizmDefaultProp, prizmRequiredSetter } from '@prizm-ui/core';
import { PRIZM_HINT_OPTIONS } from './hint-options';
import { PrizmOverlayRelativePosition, PrizmOverlayService, } from '../../modules/overlay';
import { combineLatest, of, Subject } from 'rxjs';
import { PrizmHoveredService } from '../../services';
import { delay, distinctUntilChanged, map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PrizmHintContainerComponent } from './hint-container.component';
import { PrizmHintService } from './hint.service';
import * as i0 from "@angular/core";
export const HINT_HOVERED_CLASS = '_hint_hovered';
export class PrizmHintDirective {
    constructor() {
        this.options = inject(PRIZM_HINT_OPTIONS);
        this.injector = inject(Injector);
        this.prizmAutoReposition = this.options.autoReposition;
        this.prizmHintDirection = this.options.direction;
        this.prizmHintId = 'hintId_' + prizmGenerateId();
        this.prizmHintTheme = null;
        this.prizmHintShowDelay = this.options.showDelay;
        this.prizmHintHideDelay = this.options.hideDelay;
        this.prizmHintHost = null;
        this.prizmHintContext = {};
        this.prizmHintCanShow = true;
        this.show_ = false;
        this.prizmHoveredChange$$ = new Subject();
        this.prizmHintShowed = new EventEmitter();
        this.onHoverActive = true;
        this.containerComponent = PrizmHintContainerComponent;
        this.show$ = new Subject();
        this.destroyListeners$ = new Subject();
        this.prizmOverlayService = inject(PrizmOverlayService);
        this.renderer = inject(Renderer2);
        this.elementRef = inject(ElementRef);
        this.destroy$ = inject(PrizmDestroyService);
        this.hoveredService = inject(PrizmHoveredService);
        this.hintService = inject(PrizmHintService);
    }
    set show(show) {
        if (show)
            this.open();
        else
            this.close();
    }
    get show() {
        return this.show_;
    }
    set prizmHint(value) {
        if (!value) {
            this.content = '';
            return;
        }
        this.content = value;
    }
    get id() {
        return this.prizmHintId ?? null;
    }
    get host() {
        return this.prizmHintHost ?? this.elementRef.nativeElement;
    }
    ngOnChanges() {
        this.initOverlayController();
    }
    ngOnInit() {
        this.initVisibleController();
        this.initShowedChangeListener();
    }
    initShowedChangeListener() {
        this.prizmHoveredChange$$
            .pipe(distinctUntilChanged(), tap(state => {
            this.prizmHintShowed.emit(state);
        }), takeUntil(this.destroy$))
            .subscribe();
    }
    ngOnDestroy() {
        if (this.overlay)
            this.overlay.close();
    }
    toggle(open) {
        if (open) {
            this.open();
        }
        else {
            this.close();
        }
    }
    open() {
        if (!this.prizmHintCanShow || this.content === '')
            return;
        this.show_ = true;
        this.renderer.addClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
        this.overlay.open();
        this.prizmHoveredChange$$.next(!this.show_);
    }
    close() {
        this.show_ = false;
        this.renderer.removeClass(this.elementRef.nativeElement, HINT_HOVERED_CLASS);
        this.overlay?.close();
        this.prizmHoveredChange$$.next(this.show_);
    }
    initVisibleController() {
        this.show$
            .pipe(switchMap(show => {
            const delayTime = show ? this.prizmHintShowDelay : this.prizmHintHideDelay;
            return of(show).pipe(delay(delayTime));
        }), tap(show => this.toggle(show)), takeUntil(this.destroy$))
            .subscribe();
    }
    initOverlayController() {
        this.destroyListeners$.next();
        if (this.show_)
            this.show$.next(false);
        this.overlay?.close();
        const position = new PrizmOverlayRelativePosition({
            placement: this.prizmHintDirection,
            autoReposition: this.prizmAutoReposition,
            element: this.host,
        });
        this.overlay = this.prizmOverlayService
            .position(position)
            .config({
            backdrop: false,
        })
            .content(this.containerComponent, {
            content: () => this.content,
            id: this.prizmHintId,
            hintTheme: this.prizmHintTheme,
            context: this.getContext(),
        })
            .create({
            parentInjector: this.injector,
        });
        if (this.onHoverActive) {
            combineLatest([
                this.hoveredService.createHovered$(this.host),
                this.hintService.childHovered(this.id),
            ])
                .pipe(map(([thisHovered, containerHovered]) => {
                return thisHovered || containerHovered;
            }), tap(hovered => this.show$.next(hovered)), takeUntil(this.destroyListeners$), takeUntil(this.destroy$))
                .subscribe();
        }
    }
    getContext() {
        return {
            reposition: this.prizmAutoReposition,
            direction: this.prizmHintDirection,
            id: this.prizmHintId,
            showDelay: this.prizmHintShowDelay,
            hideDelay: this.prizmHintHideDelay,
            host: this.host,
            context: this.prizmHintContext,
        };
    }
}
PrizmHintDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmHintDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmHintDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmHintDirective, isStandalone: true, selector: "[prizmHint]:not(ng-container)", inputs: { prizmAutoReposition: "prizmAutoReposition", prizmHintDirection: "prizmHintDirection", prizmHintId: "prizmHintId", prizmHintTheme: "prizmHintTheme", prizmHintShowDelay: "prizmHintShowDelay", prizmHintHideDelay: "prizmHintHideDelay", prizmHintHost: "prizmHintHost", prizmHintContext: "prizmHintContext", prizmHintCanShow: "prizmHintCanShow", prizmHint: "prizmHint" }, outputs: { prizmHintShowed: "prizmHintShowed" }, providers: [PrizmDestroyService], exportAs: ["prizmHint"], usesOnChanges: true, ngImport: i0 });
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmHintDirective.prototype, "prizmAutoReposition", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmHintDirective.prototype, "prizmHintDirection", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmHintDirective.prototype, "prizmHintId", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmHintDirective.prototype, "prizmHintTheme", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmHintDirective.prototype, "prizmHintShowDelay", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmHintDirective.prototype, "prizmHintHideDelay", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmHintDirective.prototype, "prizmHintHost", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmHintDirective.prototype, "prizmHintContext", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmHintDirective.prototype, "prizmHintCanShow", void 0);
__decorate([
    prizmRequiredSetter(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PrizmHintDirective.prototype, "prizmHint", null);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmHintDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmHint]:not(ng-container)',
                    providers: [PrizmDestroyService],
                    exportAs: 'prizmHint',
                    standalone: true,
                }]
        }], propDecorators: { prizmAutoReposition: [{
                type: Input
            }], prizmHintDirection: [{
                type: Input
            }], prizmHintId: [{
                type: Input
            }], prizmHintTheme: [{
                type: Input
            }], prizmHintShowDelay: [{
                type: Input
            }], prizmHintHideDelay: [{
                type: Input
            }], prizmHintHost: [{
                type: Input
            }], prizmHintContext: [{
                type: Input
            }], prizmHintCanShow: [{
                type: Input
            }], prizmHint: [{
                type: Input
            }], prizmHintShowed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2hpbnQvaGludC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQXNDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUVMLDRCQUE0QixFQUM1QixtQkFBbUIsR0FDcEIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHbEQsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsZUFBZSxDQUFDO0FBUWxELE1BQU0sT0FBTyxrQkFBa0I7SUFOL0I7UUFXcUIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FB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RUFBRTs7dURBQ2lDO0FBRXBEO0lBQ0MsZ0JBQWdCLEVBQUU7OzBEQUNzQjtBQUV6QztJQUNDLGdCQUFnQixFQUFFOzs4REFDd0Q7QUFFM0U7SUFDQyxnQkFBZ0IsRUFBRTs7OERBQ3dEO0FBRTNFO0lBQ0MsZ0JBQWdCLEVBQUU7O3lEQUNzQjtBQUV6QztJQUNDLGdCQUFnQixFQUFFOzs0REFDNEI7QUFFL0M7SUFDQyxnQkFBZ0IsRUFBRTs7NERBQ0s7QUFZeEI7SUFDQyxtQkFBbUIsRUFBRTs7O21EQVFyQjsyRkEvRFUsa0JBQWtCO2tCQU45QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNoQyxRQUFRLEVBQUUsV0FBVztvQkFDckIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCOzhCQVdDLG1CQUFtQjtzQkFGbEIsS0FBSztnQkFNTixrQkFBa0I7c0JBRmpCLEtBQUs7Z0JBTU4sV0FBVztzQkFGVixLQUFLO2dCQU1OLGNBQWM7c0JBRmIsS0FBSztnQkFNTixrQkFBa0I7c0JBRmpCLEtBQUs7Z0JBTU4sa0JBQWtCO3NCQUZqQixLQUFLO2dCQU1OLGFBQWE7c0JBRlosS0FBSztnQkFNTixnQkFBZ0I7c0JBRmYsS0FBSztnQkFNTixnQkFBZ0I7c0JBRmYsS0FBSztnQkFnQkYsU0FBUztzQkFGWixLQUFLO2dCQWFHLGVBQWU7c0JBRHZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgaW5qZWN0LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUeXBlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UsIHByaXptR2VuZXJhdGVJZCB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AsIHByaXptUmVxdWlyZWRTZXR0ZXIgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQb2x5bW9ycGhDb250ZW50IH0gZnJvbSAnLi4vcG9seW1vcnBoJztcbmltcG9ydCB7IFBSSVpNX0hJTlRfT1BUSU9OUywgUHJpem1IaW50Q29udGV4dCwgUHJpem1IaW50T3B0aW9ucyB9IGZyb20gJy4vaGludC1vcHRpb25zJztcbmltcG9ydCB7XG4gIFByaXptT3ZlcmxheUNvbnRyb2wsXG4gIFByaXptT3ZlcmxheVJlbGF0aXZlUG9zaXRpb24sXG4gIFByaXptT3ZlcmxheVNlcnZpY2UsXG59IGZyb20gJy4uLy4uL21vZHVsZXMvb3ZlcmxheSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJpem1Ib3ZlcmVkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCB7IGRlbGF5LCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1IaW50Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9oaW50LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1IaW50U2VydmljZSB9IGZyb20gJy4vaGludC5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptVGhlbWUgfSBmcm9tICdAcHJpem0tdWkvdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgSElOVF9IT1ZFUkVEX0NMQVNTID0gJ19oaW50X2hvdmVyZWQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1IaW50XTpub3QobmctY29udGFpbmVyKScsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxuICBleHBvcnRBczogJ3ByaXptSGludCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSGludERpcmVjdGl2ZTxcbiAgT1BUSU9OUyBleHRlbmRzIFByaXptSGludE9wdGlvbnMgPSBQcml6bUhpbnRPcHRpb25zLFxuICBDT05URVhUIGV4dGVuZHMgUHJpem1IaW50Q29udGV4dCA9IFByaXptSGludENvbnRleHRcbj4gaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95XG57XG4gIHByb3RlY3RlZCByZWFkb25seSBvcHRpb25zID0gaW5qZWN0KFBSSVpNX0hJTlRfT1BUSU9OUykgYXMgT1BUSU9OUztcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHByaXptQXV0b1JlcG9zaXRpb246IFByaXptSGludE9wdGlvbnNbJ2F1dG9SZXBvc2l0aW9uJ10gPSB0aGlzLm9wdGlvbnMuYXV0b1JlcG9zaXRpb247XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwcml6bUhpbnREaXJlY3Rpb246IFByaXptSGludE9wdGlvbnNbJ2RpcmVjdGlvbiddID0gdGhpcy5vcHRpb25zLmRpcmVjdGlvbjtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHByaXptSGludElkOiBzdHJpbmcgPSAnaGludElkXycgKyBwcml6bUdlbmVyYXRlSWQoKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHByaXptSGludFRoZW1lOiBQcml6bVRoZW1lIHwgbnVsbCA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwcml6bUhpbnRTaG93RGVsYXk6IFByaXptSGludE9wdGlvbnNbJ3Nob3dEZWxheSddID0gdGhpcy5vcHRpb25zLnNob3dEZWxheTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHByaXptSGludEhpZGVEZWxheTogUHJpem1IaW50T3B0aW9uc1snaGlkZURlbGF5J10gPSB0aGlzLm9wdGlvbnMuaGlkZURlbGF5O1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHJpem1IaW50SG9zdDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHByaXptSGludENvbnRleHQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwcml6bUhpbnRDYW5TaG93ID0gdHJ1ZTtcblxuICBzZXQgc2hvdyhzaG93OiBib29sZWFuKSB7XG4gICAgaWYgKHNob3cpIHRoaXMub3BlbigpO1xuICAgIGVsc2UgdGhpcy5jbG9zZSgpO1xuICB9XG4gIGdldCBzaG93KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3dfO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3dfID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQHByaXptUmVxdWlyZWRTZXR0ZXIoKVxuICBzZXQgcHJpem1IaW50KHZhbHVlOiBQb2x5bW9ycGhDb250ZW50IHwgbnVsbCkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuY29udGVudCA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgcmVhZG9ubHkgcHJpem1Ib3ZlcmVkQ2hhbmdlJCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcHJpem1IaW50U2hvd2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBvbkhvdmVyQWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcblxuICBjb250ZW50ITogUG9seW1vcnBoQ29udGVudDtcbiAgb3ZlcmxheSE6IFByaXptT3ZlcmxheUNvbnRyb2w7XG4gIHByb3RlY3RlZCByZWFkb25seSBjb250YWluZXJDb21wb25lbnQ6IFR5cGU8dW5rbm93bj4gPSBQcml6bUhpbnRDb250YWluZXJDb21wb25lbnQ7XG4gIHByb3RlY3RlZCByZWFkb25seSBzaG93JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByb3RlY3RlZCByZWFkb25seSBkZXN0cm95TGlzdGVuZXJzJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBwcml6bU92ZXJsYXlTZXJ2aWNlOiBQcml6bU92ZXJsYXlTZXJ2aWNlID0gaW5qZWN0KFByaXptT3ZlcmxheVNlcnZpY2UpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMiA9IGluamVjdChSZW5kZXJlcjIpO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gPSBpbmplY3QoRWxlbWVudFJlZik7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQ6IFByaXptRGVzdHJveVNlcnZpY2UgPSBpbmplY3QoUHJpem1EZXN0cm95U2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgaG92ZXJlZFNlcnZpY2U6IFByaXptSG92ZXJlZFNlcnZpY2UgPSBpbmplY3QoUHJpem1Ib3ZlcmVkU2VydmljZSk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBoaW50U2VydmljZTogUHJpem1IaW50U2VydmljZSA9IGluamVjdChQcml6bUhpbnRTZXJ2aWNlKTtcblxuICBnZXQgaWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMucHJpem1IaW50SWQgPz8gbnVsbDtcbiAgfVxuXG4gIGdldCBob3N0KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5wcml6bUhpbnRIb3N0ID8/IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdE92ZXJsYXlDb250cm9sbGVyKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0VmlzaWJsZUNvbnRyb2xsZXIoKTtcbiAgICB0aGlzLmluaXRTaG93ZWRDaGFuZ2VMaXN0ZW5lcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRTaG93ZWRDaGFuZ2VMaXN0ZW5lcigpIHtcbiAgICB0aGlzLnByaXptSG92ZXJlZENoYW5nZSQkXG4gICAgICAucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgdGFwKHN0YXRlID0+IHtcbiAgICAgICAgICB0aGlzLnByaXptSGludFNob3dlZC5lbWl0KHN0YXRlKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXkpIHRoaXMub3ZlcmxheS5jbG9zZSgpO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZShvcGVuOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIG9wZW4oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnByaXptSGludENhblNob3cgfHwgdGhpcy5jb250ZW50ID09PSAnJykgcmV0dXJuO1xuICAgIHRoaXMuc2hvd18gPSB0cnVlO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIEhJTlRfSE9WRVJFRF9DTEFTUyk7XG4gICAgdGhpcy5vdmVybGF5Lm9wZW4oKTtcbiAgICB0aGlzLnByaXptSG92ZXJlZENoYW5nZSQkLm5leHQoIXRoaXMuc2hvd18pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuc2hvd18gPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBISU5UX0hPVkVSRURfQ0xBU1MpO1xuICAgIHRoaXMub3ZlcmxheT8uY2xvc2UoKTtcbiAgICB0aGlzLnByaXptSG92ZXJlZENoYW5nZSQkLm5leHQodGhpcy5zaG93Xyk7XG4gIH1cblxuICBwcml2YXRlIGluaXRWaXNpYmxlQ29udHJvbGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLnNob3ckXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHNob3cgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlbGF5VGltZSA9IHNob3cgPyB0aGlzLnByaXptSGludFNob3dEZWxheSA6IHRoaXMucHJpem1IaW50SGlkZURlbGF5O1xuICAgICAgICAgIHJldHVybiBvZihzaG93KS5waXBlKGRlbGF5KGRlbGF5VGltZSkpO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFwKHNob3cgPT4gdGhpcy50b2dnbGUoc2hvdykpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdE92ZXJsYXlDb250cm9sbGVyKCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveUxpc3RlbmVycyQubmV4dCgpO1xuICAgIGlmICh0aGlzLnNob3dfKSB0aGlzLnNob3ckLm5leHQoZmFsc2UpO1xuICAgIHRoaXMub3ZlcmxheT8uY2xvc2UoKTtcblxuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFByaXptT3ZlcmxheVJlbGF0aXZlUG9zaXRpb24oe1xuICAgICAgcGxhY2VtZW50OiB0aGlzLnByaXptSGludERpcmVjdGlvbixcbiAgICAgIGF1dG9SZXBvc2l0aW9uOiB0aGlzLnByaXptQXV0b1JlcG9zaXRpb24sXG4gICAgICBlbGVtZW50OiB0aGlzLmhvc3QsXG4gICAgfSk7XG4gICAgdGhpcy5vdmVybGF5ID0gdGhpcy5wcml6bU92ZXJsYXlTZXJ2aWNlXG4gICAgICAucG9zaXRpb24ocG9zaXRpb24pXG4gICAgICAuY29uZmlnKHtcbiAgICAgICAgYmFja2Ryb3A6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIC5jb250ZW50KHRoaXMuY29udGFpbmVyQ29tcG9uZW50LCB7XG4gICAgICAgIGNvbnRlbnQ6ICgpID0+IHRoaXMuY29udGVudCxcbiAgICAgICAgaWQ6IHRoaXMucHJpem1IaW50SWQsXG4gICAgICAgIGhpbnRUaGVtZTogdGhpcy5wcml6bUhpbnRUaGVtZSxcbiAgICAgICAgY29udGV4dDogdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICB9KVxuICAgICAgLmNyZWF0ZSh7XG4gICAgICAgIHBhcmVudEluamVjdG9yOiB0aGlzLmluamVjdG9yLFxuICAgICAgfSk7XG4gICAgaWYgKHRoaXMub25Ib3ZlckFjdGl2ZSkge1xuICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMuaG92ZXJlZFNlcnZpY2UuY3JlYXRlSG92ZXJlZCQodGhpcy5ob3N0KSxcbiAgICAgICAgdGhpcy5oaW50U2VydmljZS5jaGlsZEhvdmVyZWQodGhpcy5pZCBhcyBzdHJpbmcpLFxuICAgICAgXSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChbdGhpc0hvdmVyZWQsIGNvbnRhaW5lckhvdmVyZWRdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc0hvdmVyZWQgfHwgY29udGFpbmVySG92ZXJlZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0YXAoaG92ZXJlZCA9PiB0aGlzLnNob3ckLm5leHQoaG92ZXJlZCkpLFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3lMaXN0ZW5lcnMkKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbnRleHQoKTogQ09OVEVYVCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcG9zaXRpb246IHRoaXMucHJpem1BdXRvUmVwb3NpdGlvbixcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5wcml6bUhpbnREaXJlY3Rpb24sXG4gICAgICBpZDogdGhpcy5wcml6bUhpbnRJZCxcbiAgICAgIHNob3dEZWxheTogdGhpcy5wcml6bUhpbnRTaG93RGVsYXksXG4gICAgICBoaWRlRGVsYXk6IHRoaXMucHJpem1IaW50SGlkZURlbGF5LFxuICAgICAgaG9zdDogdGhpcy5ob3N0LFxuICAgICAgY29udGV4dDogdGhpcy5wcml6bUhpbnRDb250ZXh0LFxuICAgIH0gYXMgQ09OVEVYVDtcbiAgfVxufVxuIl19