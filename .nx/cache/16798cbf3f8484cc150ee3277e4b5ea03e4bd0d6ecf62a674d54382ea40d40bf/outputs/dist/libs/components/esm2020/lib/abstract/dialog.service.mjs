import { Injectable, Injector } from '@angular/core';
import { noop, Observable, Subject } from 'rxjs';
import { PrizmOverscrollService } from '../directives';
import { PRIZM_OVERLAY_BACKDROP_NO_POINTERS, PrizmOverlayGlobalPosition, PrizmOverlayInsidePlacement, PrizmOverlayService, } from '../modules/overlay';
import { takeUntil } from 'rxjs/operators';
import { prizmGenerateId } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
export class AbstractPrizmDialogService {
    constructor(injector) {
        this.overlayService = injector.get(PrizmOverlayService);
        this.overscrollService = injector.get(PrizmOverscrollService);
    }
    open(content, options, cb = noop, config) {
        const destroy$ = new Subject();
        return new Observable(observer => {
            const completeWith = (result) => {
                observer.next(result);
                observer.complete();
            };
            options = options ?? {};
            const dialog = {
                ...this.defaultOptions,
                ...options,
                content,
                component: this.component,
                completeWith,
                $implicit: observer,
                createdAt: Date.now(),
                id: options.id ?? this.defaultOptions.id ?? prizmGenerateId(),
            };
            const control = this.overlayService
                .position(this.getPosition(dialog))
                .config(this.getConfig(dialog))
                .content(dialog.component, {
                context: dialog,
                getService: () => {
                    return control;
                },
            })
                .parentContainer(options.parentContainer)
                .create({
                parentInjector: config?.injector,
            });
            if (typeof options.zIndex === 'number')
                control.zIndex = options.zIndex;
            control.open();
            this.setOverscrollMode(options.overscroll ?? 'scroll', control, destroy$);
            if (typeof cb === 'function') {
                cb({ control, dialog, observer, destroy$: destroy$.asObservable() });
            }
            return () => {
                control.close();
                destroy$.next();
                destroy$.complete();
            };
        });
    }
    getConfig(dialog) {
        return {
            backdrop: dialog.backdrop ?? true,
            styleVars: dialog.styleVars,
            containerClass: dialog.containerClass ?? '',
            backdropClass: [dialog.backdrop && PRIZM_OVERLAY_BACKDROP_NO_POINTERS, dialog.backdropClass]
                .filter(Boolean)
                .join(' '),
            wrapperClass: dialog.wrapperClass,
        };
    }
    getPosition(dialog) {
        return new PrizmOverlayGlobalPosition({
            placement: dialog.position ?? PrizmOverlayInsidePlacement.CENTER,
            width: dialog.width ?? 'auto',
            height: dialog.height ?? 'auto',
        });
    }
    setOverscrollMode(mode, control, destroy$) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        control.viewEl.style.pointerEvents = 'unset';
        this.overscrollService
            .run(mode, control.viewEl)
            .pipe(takeUntil(destroy$))
            .subscribe();
    }
}
AbstractPrizmDialogService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AbstractPrizmDialogService, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
AbstractPrizmDialogService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AbstractPrizmDialogService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AbstractPrizmDialogService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9hYnN0cmFjdC9kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBWSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0QsT0FBTyxFQUFvQixzQkFBc0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsa0NBQWtDLEVBRWxDLDBCQUEwQixFQUMxQiwyQkFBMkIsRUFDM0IsbUJBQW1CLEdBRXBCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFHcEQsTUFBTSxPQUFnQiwwQkFBMEI7SUFTOUMsWUFBc0IsUUFBa0I7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sSUFBSSxDQUNULE9BQThELEVBQzlELE9BQW1CLEVBQ25CLEtBS2EsSUFBSSxFQUNqQixNQUVDO1FBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUNyQyxPQUFPLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQy9CLE1BQU0sWUFBWSxHQUFHLENBQUMsTUFBUyxFQUFRLEVBQUU7Z0JBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RC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O1FBQzdELGFBQWE7UUFDYixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyxpQkFBaUI7YUFDbkIsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBYSxDQUFDO2FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDekIsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7dUhBakhtQiwwQkFBMEI7MkhBQTFCLDBCQUEwQjsyRkFBMUIsMEJBQTBCO2tCQUQvQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG5vb3AsIE9ic2VydmFibGUsIE9ic2VydmVyLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcml6bUJhc2VEaWFsb2dDb250ZXh0LCBQcml6bURpYWxvZ0Jhc2VPcHRpb25zIH0gZnJvbSAnLi4vY29tcG9uZW50cy9kaWFsb2dzL2RpYWxvZy9kaWFsb2cubW9kZWxzJztcbmltcG9ydCB7IFBvbHltb3JwaENvbnRlbnQsIFByaXptT3ZlcnNjcm9sbFNlcnZpY2UgfSBmcm9tICcuLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7XG4gIFBSSVpNX09WRVJMQVlfQkFDS0RST1BfTk9fUE9JTlRFUlMsXG4gIFByaXptT3ZlcmxheUNvbnRyb2wsXG4gIFByaXptT3ZlcmxheUdsb2JhbFBvc2l0aW9uLFxuICBQcml6bU92ZXJsYXlJbnNpZGVQbGFjZW1lbnQsXG4gIFByaXptT3ZlcmxheVNlcnZpY2UsXG4gIFByaXptT3ZlcmxheVNsaWRlUG9zaXRpb24sXG59IGZyb20gJy4uL21vZHVsZXMvb3ZlcmxheSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bU92ZXJzY3JvbGxNb2RlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9vdmVyc2Nyb2xsL292ZXJzY3JvbGwubW9kZWwnO1xuaW1wb3J0IHsgUHJpem1PdmVybGF5Q29uZmlnIH0gZnJvbSAnLi4vbW9kdWxlcy9vdmVybGF5L21vZGVscyc7XG5pbXBvcnQgeyBwcml6bUdlbmVyYXRlSWQgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFByaXptRGlhbG9nU2VydmljZTxcbiAgVCBleHRlbmRzIFByaXptRGlhbG9nQmFzZU9wdGlvbnMsXG4gIE8gPSB1bmtub3duLFxuICBEQVRBID0gdW5rbm93blxuPiB7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBjb21wb25lbnQ6IFR5cGU8dW5rbm93bj47XG4gIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBkZWZhdWx0T3B0aW9uczogVDtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IG92ZXJsYXlTZXJ2aWNlOiBQcml6bU92ZXJsYXlTZXJ2aWNlO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgb3ZlcnNjcm9sbFNlcnZpY2U6IFByaXptT3ZlcnNjcm9sbFNlcnZpY2U7XG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICB0aGlzLm92ZXJsYXlTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0KFByaXptT3ZlcmxheVNlcnZpY2UpO1xuICAgIHRoaXMub3ZlcnNjcm9sbFNlcnZpY2UgPSBpbmplY3Rvci5nZXQoUHJpem1PdmVyc2Nyb2xsU2VydmljZSk7XG4gIH1cblxuICBwdWJsaWMgb3BlbjxPID0gdW5rbm93biwgREFUQSA9IHVua25vd24+KFxuICAgIGNvbnRlbnQ6IFBvbHltb3JwaENvbnRlbnQ8UHJpem1CYXNlRGlhbG9nQ29udGV4dDxPPj4gfCB1bmtub3duLFxuICAgIG9wdGlvbnM6IFBhcnRpYWw8VD4sXG4gICAgY2I6IChkYXRhOiB7XG4gICAgICBjb250cm9sOiBQcml6bU92ZXJsYXlDb250cm9sO1xuICAgICAgZGlhbG9nOiBQcml6bUJhc2VEaWFsb2dDb250ZXh0PGFueSwgYW55PjtcbiAgICAgIG9ic2VydmVyOiBPYnNlcnZlcjxPPjtcbiAgICAgIGRlc3Ryb3kkOiBPYnNlcnZhYmxlPHZvaWQ+O1xuICAgIH0pID0+IHZvaWQgPSBub29wLFxuICAgIGNvbmZpZz86IHtcbiAgICAgIGluamVjdG9yPzogSW5qZWN0b3I7XG4gICAgfVxuICApOiBPYnNlcnZhYmxlPE8+IHtcbiAgICBjb25zdCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIGNvbnN0IGNvbXBsZXRlV2l0aCA9IChyZXN1bHQ6IE8pOiB2b2lkID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfTtcblxuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgPz8ge307XG5cbiAgICAgIGNvbnN0IGRpYWxvZyA9IHtcbiAgICAgICAgLi4udGhpcy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudCxcbiAgICAgICAgY29tcGxldGVXaXRoLFxuICAgICAgICAkaW1wbGljaXQ6IG9ic2VydmVyLFxuICAgICAgICBjcmVhdGVkQXQ6IERhdGUubm93KCksXG4gICAgICAgIGlkOiBvcHRpb25zLmlkID8/IHRoaXMuZGVmYXVsdE9wdGlvbnMuaWQgPz8gcHJpem1HZW5lcmF0ZUlkKCksXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjb250cm9sID0gdGhpcy5vdmVybGF5U2VydmljZVxuICAgICAgICAucG9zaXRpb24odGhpcy5nZXRQb3NpdGlvbihkaWFsb2cpKVxuICAgICAgICAuY29uZmlnKHRoaXMuZ2V0Q29uZmlnKGRpYWxvZykpXG4gICAgICAgIC5jb250ZW50KGRpYWxvZy5jb21wb25lbnQsIHtcbiAgICAgICAgICBjb250ZXh0OiBkaWFsb2csXG4gICAgICAgICAgZ2V0U2VydmljZTogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2w7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnBhcmVudENvbnRhaW5lcihvcHRpb25zLnBhcmVudENvbnRhaW5lcilcbiAgICAgICAgLmNyZWF0ZSh7XG4gICAgICAgICAgcGFyZW50SW5qZWN0b3I6IGNvbmZpZz8uaW5qZWN0b3IsXG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJykgY29udHJvbC56SW5kZXggPSBvcHRpb25zLnpJbmRleDtcblxuICAgICAgY29udHJvbC5vcGVuKCk7XG5cbiAgICAgIHRoaXMuc2V0T3ZlcnNjcm9sbE1vZGUob3B0aW9ucy5vdmVyc2Nyb2xsID8/ICdzY3JvbGwnLCBjb250cm9sLCBkZXN0cm95JCk7XG5cbiAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2IoeyBjb250cm9sLCBkaWFsb2csIG9ic2VydmVyLCBkZXN0cm95JDogZGVzdHJveSQuYXNPYnNlcnZhYmxlKCkgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnRyb2wuY2xvc2UoKTtcbiAgICAgICAgZGVzdHJveSQubmV4dCgpO1xuICAgICAgICBkZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb25maWcoZGlhbG9nOiBQcml6bUJhc2VEaWFsb2dDb250ZXh0PGFueSwgYW55Pik6IFBhcnRpYWw8UHJpem1PdmVybGF5Q29uZmlnPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tkcm9wOiBkaWFsb2cuYmFja2Ryb3AgPz8gdHJ1ZSxcbiAgICAgIHN0eWxlVmFyczogZGlhbG9nLnN0eWxlVmFycyxcbiAgICAgIGNvbnRhaW5lckNsYXNzOiBkaWFsb2cuY29udGFpbmVyQ2xhc3MgPz8gJycsXG4gICAgICBiYWNrZHJvcENsYXNzOiBbZGlhbG9nLmJhY2tkcm9wICYmIFBSSVpNX09WRVJMQVlfQkFDS0RST1BfTk9fUE9JTlRFUlMsIGRpYWxvZy5iYWNrZHJvcENsYXNzXVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIC5qb2luKCcgJyksXG4gICAgICB3cmFwcGVyQ2xhc3M6IGRpYWxvZy53cmFwcGVyQ2xhc3MsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQb3NpdGlvbihcbiAgICBkaWFsb2c6IFByaXptQmFzZURpYWxvZ0NvbnRleHQ8YW55LCBhbnk+XG4gICk6IFByaXptT3ZlcmxheUdsb2JhbFBvc2l0aW9uIHwgUHJpem1PdmVybGF5U2xpZGVQb3NpdGlvbiB8IFByaXptT3ZlcmxheUdsb2JhbFBvc2l0aW9uIHtcbiAgICByZXR1cm4gbmV3IFByaXptT3ZlcmxheUdsb2JhbFBvc2l0aW9uKHtcbiAgICAgIHBsYWNlbWVudDogZGlhbG9nLnBvc2l0aW9uID8/IFByaXptT3ZlcmxheUluc2lkZVBsYWNlbWVudC5DRU5URVIsXG4gICAgICB3aWR0aDogZGlhbG9nLndpZHRoID8/ICdhdXRvJyxcbiAgICAgIGhlaWdodDogZGlhbG9nLmhlaWdodCA/PyAnYXV0bycsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldE92ZXJzY3JvbGxNb2RlKFxuICAgIG1vZGU6IFByaXptT3ZlcnNjcm9sbE1vZGUsXG4gICAgY29udHJvbDogUHJpem1PdmVybGF5Q29udHJvbCxcbiAgICBkZXN0cm95JDogT2JzZXJ2YWJsZTx2b2lkPlxuICApOiB2b2lkIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnRyb2wudmlld0VsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAndW5zZXQnO1xuICAgIHRoaXMub3ZlcnNjcm9sbFNlcnZpY2VcbiAgICAgIC5ydW4obW9kZSwgY29udHJvbC52aWV3RWwgYXMgYW55KVxuICAgICAgLnBpcGUodGFrZVVudGlsKGRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19