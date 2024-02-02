import { Subject } from 'rxjs';
import { PrizmToastPosition } from './types';
import { finalize, map, shareReplay, takeUntil, tap } from 'rxjs/operators';
import { PrizmToastContainerComponent } from './toast-container/toast-container.component';
import { Injectable, Injector } from '@angular/core';
import { PrizmOverlayGlobalPosition, PrizmOverlayInsidePlacement, PrizmOverlayService, } from '../../modules/overlay';
import { PrizmToastService } from './toast.service';
import * as i0 from "@angular/core";
import * as i1 from "../../modules/overlay";
import * as i2 from "./toast.service";
export class PrizmToastControl {
    constructor(overlayService, toastService, injector) {
        this.overlayService = overlayService;
        this.toastService = toastService;
        this.injector = injector;
        this.destroy$ = new Subject();
        this.init(PrizmToastPosition.TOP_RIGHT);
        this.init(PrizmToastPosition.TOP_LEFT);
        this.init(PrizmToastPosition.TOP_MIDDLE);
        this.init(PrizmToastPosition.BOTTOM_RIGHT);
        this.init(PrizmToastPosition.BOTTOM_LEFT);
        this.init(PrizmToastPosition.BOTTOM_MIDDLE);
    }
    create(changesForThisPosition$, position) {
        const placement = this.getOverlayPosition(position);
        if (!placement)
            return;
        const overlayPosition = new PrizmOverlayGlobalPosition({
            placement,
            width: 'auto',
            height: 'auto',
        });
        const control = this.overlayService
            .position(overlayPosition)
            .content(PrizmToastContainerComponent, {
            refs$: changesForThisPosition$,
            position: position,
        })
            .create({ parentInjector: this.injector });
        return control;
    }
    getOverlayPosition(position) {
        switch (position) {
            case PrizmToastPosition.BOTTOM_LEFT:
                return PrizmOverlayInsidePlacement.BOTTOM_LEFT;
            case PrizmToastPosition.BOTTOM_RIGHT:
                return PrizmOverlayInsidePlacement.BOTTOM_RIGHT;
            case PrizmToastPosition.BOTTOM_MIDDLE:
                return PrizmOverlayInsidePlacement.BOTTOM;
            case PrizmToastPosition.TOP_LEFT:
                return PrizmOverlayInsidePlacement.TOP_LEFT;
            case PrizmToastPosition.TOP_RIGHT:
                return PrizmOverlayInsidePlacement.TOP_RIGHT;
            case PrizmToastPosition.TOP_MIDDLE:
                return PrizmOverlayInsidePlacement.TOP;
        }
    }
    init(position) {
        const changesForThisPosition$ = this.toastService.changes$.pipe(map(items => items.filter(item => item.position === position && item.show)), shareReplay(1));
        const control = this.create(changesForThisPosition$, position);
        if (!control)
            return;
        changesForThisPosition$
            .pipe(tap(refs => {
            if (!refs.length)
                return this.close(control);
            this.open(control);
        }), finalize(() => this.destroy(control)), takeUntil(this.destroy$))
            .subscribe();
    }
    destroy(control) {
        this.close(control);
        control = null;
    }
    close(control) {
        control?.close();
    }
    open(control) {
        control?.open();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmToastControl, deps: [{ token: i1.PrizmOverlayService }, { token: i2.PrizmToastService }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmToastControl, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmToastControl, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.PrizmOverlayService }, { type: i2.PrizmToastService }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QtY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QtY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBcUIsa0JBQWtCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBRUwsMEJBQTBCLEVBQzFCLDJCQUEyQixFQUMzQixtQkFBbUIsR0FDcEIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUtwRCxNQUFNLE9BQU8saUJBQWlCO0lBRTVCLFlBQ21CLGNBQW1DLEVBQ25DLFlBQStCLEVBQy9CLFFBQWtCO1FBRmxCLG1CQUFjLEdBQWQsY0FBYyxDQUFxQjtRQUNuQyxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUo1QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQU10QyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6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QU8sR0FBRyxJQUFJLENBQUM7SUFDakIsQ0FBQztJQUVPLEtBQUssQ0FBQyxPQUFtQztRQUMvQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLElBQUksQ0FBQyxPQUFtQztRQUM5QyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs4R0F0RlUsaUJBQWlCO2tIQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7MkZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByaXptVG9hc3RPcHRpb25zLCBQcml6bVRvYXN0UG9zaXRpb24gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGZpbmFsaXplLCBtYXAsIHNoYXJlUmVwbGF5LCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LXJlZic7XG5pbXBvcnQgeyBQcml6bVRvYXN0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC1jb250YWluZXIvdG9hc3QtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUHJpem1PdmVybGF5Q29udHJvbCxcbiAgUHJpem1PdmVybGF5R2xvYmFsUG9zaXRpb24sXG4gIFByaXptT3ZlcmxheUluc2lkZVBsYWNlbWVudCxcbiAgUHJpem1PdmVybGF5U2VydmljZSxcbn0gZnJvbSAnLi4vLi4vbW9kdWxlcy9vdmVybGF5JztcbmltcG9ydCB7IFByaXptVG9hc3RTZXJ2aWNlIH0gZnJvbSAnLi90b2FzdC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVG9hc3RDb250cm9sIHtcbiAgcmVhZG9ubHkgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG92ZXJsYXlTZXJ2aWNlOiBQcml6bU92ZXJsYXlTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9hc3RTZXJ2aWNlOiBQcml6bVRvYXN0U2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3RvclxuICApIHtcbiAgICB0aGlzLmluaXQoUHJpem1Ub2FzdFBvc2l0aW9uLlRPUF9SSUdIVCk7XG4gICAgdGhpcy5pbml0KFByaXptVG9hc3RQb3NpdGlvbi5UT1BfTEVGVCk7XG4gICAgdGhpcy5pbml0KFByaXptVG9hc3RQb3NpdGlvbi5UT1BfTUlERExFKTtcbiAgICB0aGlzLmluaXQoUHJpem1Ub2FzdFBvc2l0aW9uLkJPVFRPTV9SSUdIVCk7XG4gICAgdGhpcy5pbml0KFByaXptVG9hc3RQb3NpdGlvbi5CT1RUT01fTEVGVCk7XG4gICAgdGhpcy5pbml0KFByaXptVG9hc3RQb3NpdGlvbi5CT1RUT01fTUlERExFKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlKFxuICAgIGNoYW5nZXNGb3JUaGlzUG9zaXRpb24kOiBPYnNlcnZhYmxlPFByaXptVG9hc3RSZWZbXT4sXG4gICAgcG9zaXRpb246IFByaXptVG9hc3RPcHRpb25zWydwb3NpdGlvbiddXG4gICk6IFByaXptT3ZlcmxheUNvbnRyb2wgfCB2b2lkIHtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLmdldE92ZXJsYXlQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgaWYgKCFwbGFjZW1lbnQpIHJldHVybjtcbiAgICBjb25zdCBvdmVybGF5UG9zaXRpb24gPSBuZXcgUHJpem1PdmVybGF5R2xvYmFsUG9zaXRpb24oe1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIH0pO1xuXG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMub3ZlcmxheVNlcnZpY2VcbiAgICAgIC5wb3NpdGlvbihvdmVybGF5UG9zaXRpb24pXG4gICAgICAuY29udGVudChQcml6bVRvYXN0Q29udGFpbmVyQ29tcG9uZW50LCB7XG4gICAgICAgIHJlZnMkOiBjaGFuZ2VzRm9yVGhpc1Bvc2l0aW9uJCxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgfSlcbiAgICAgIC5jcmVhdGUoeyBwYXJlbnRJbmplY3RvcjogdGhpcy5pbmplY3RvciB9KTtcblxuICAgIHJldHVybiBjb250cm9sO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdmVybGF5UG9zaXRpb24ocG9zaXRpb246IFByaXptVG9hc3RPcHRpb25zWydwb3NpdGlvbiddKTogUHJpem1PdmVybGF5SW5zaWRlUGxhY2VtZW50IHwgdm9pZCB7XG4gICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgY2FzZSBQcml6bVRvYXN0UG9zaXRpb24uQk9UVE9NX0xFRlQ6XG4gICAgICAgIHJldHVybiBQcml6bU92ZXJsYXlJbnNpZGVQbGFjZW1lbnQuQk9UVE9NX0xFRlQ7XG4gICAgICBjYXNlIFByaXptVG9hc3RQb3NpdGlvbi5CT1RUT01fUklHSFQ6XG4gICAgICAgIHJldHVybiBQcml6bU92ZXJsYXlJbnNpZGVQbGFjZW1lbnQuQk9UVE9NX1JJR0hUO1xuICAgICAgY2FzZSBQcml6bVRvYXN0UG9zaXRpb24uQk9UVE9NX01JRERMRTpcbiAgICAgICAgcmV0dXJuIFByaXptT3ZlcmxheUluc2lkZVBsYWNlbWVudC5CT1RUT007XG4gICAgICBjYXNlIFByaXptVG9hc3RQb3NpdGlvbi5UT1BfTEVGVDpcbiAgICAgICAgcmV0dXJuIFByaXptT3ZlcmxheUluc2lkZVBsYWNlbWVudC5UT1BfTEVGVDtcbiAgICAgIGNhc2UgUHJpem1Ub2FzdFBvc2l0aW9uLlRPUF9SSUdIVDpcbiAgICAgICAgcmV0dXJuIFByaXptT3ZlcmxheUluc2lkZVBsYWNlbWVudC5UT1BfUklHSFQ7XG4gICAgICBjYXNlIFByaXptVG9hc3RQb3NpdGlvbi5UT1BfTUlERExFOlxuICAgICAgICByZXR1cm4gUHJpem1PdmVybGF5SW5zaWRlUGxhY2VtZW50LlRPUDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaW5pdChwb3NpdGlvbjogUHJpem1Ub2FzdE9wdGlvbnNbJ3Bvc2l0aW9uJ10pOiB2b2lkIHtcbiAgICBjb25zdCBjaGFuZ2VzRm9yVGhpc1Bvc2l0aW9uJCA9IHRoaXMudG9hc3RTZXJ2aWNlLmNoYW5nZXMkLnBpcGUoXG4gICAgICBtYXAoaXRlbXMgPT4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wb3NpdGlvbiA9PT0gcG9zaXRpb24gJiYgaXRlbS5zaG93KSksXG4gICAgICBzaGFyZVJlcGxheSgxKVxuICAgICk7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMuY3JlYXRlKGNoYW5nZXNGb3JUaGlzUG9zaXRpb24kLCBwb3NpdGlvbik7XG4gICAgaWYgKCFjb250cm9sKSByZXR1cm47XG5cbiAgICBjaGFuZ2VzRm9yVGhpc1Bvc2l0aW9uJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChyZWZzID0+IHtcbiAgICAgICAgICBpZiAoIXJlZnMubGVuZ3RoKSByZXR1cm4gdGhpcy5jbG9zZShjb250cm9sKTtcbiAgICAgICAgICB0aGlzLm9wZW4oY29udHJvbCk7XG4gICAgICAgIH0pLFxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLmRlc3Ryb3koY29udHJvbCkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveShjb250cm9sOiBQcml6bU92ZXJsYXlDb250cm9sIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UoY29udHJvbCk7XG4gICAgY29udHJvbCA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlKGNvbnRyb2w6IFByaXptT3ZlcmxheUNvbnRyb2wgfCBudWxsKTogdm9pZCB7XG4gICAgY29udHJvbD8uY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgb3Blbihjb250cm9sOiBQcml6bU92ZXJsYXlDb250cm9sIHwgbnVsbCk6IHZvaWQge1xuICAgIGNvbnRyb2w/Lm9wZW4oKTtcbiAgfVxufVxuIl19