import { Inject, Injectable } from '@angular/core';
import { PRIZM_LANGUAGE } from '@prizm-ui/i18n';
import { isObservable, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "rxjs";
export class PrizmI18nService {
    constructor(language$) {
        this.language$ = language$;
    }
    // check local
    extract(key) {
        return this.language$.pipe(switchMap((streamOrValue) => isObservable(streamOrValue) ? streamOrValue : of(streamOrValue)), map((lang) => lang[key]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmI18nService, deps: [{ token: PRIZM_LANGUAGE }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmI18nService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmI18nService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Observable, decorators: [{
                    type: Inject,
                    args: [PRIZM_LANGUAGE]
                }] }]; } });
export function prizmI18nInitWithKey(token, key) {
    return [
        PrizmI18nService,
        {
            provide: token,
            useFactory: (service) => {
                return service.extract(key);
            },
            deps: [PrizmI18nService],
        },
    ];
}
export function prizmI18nInitWithKeys(keys) {
    return [
        PrizmI18nService,
        ...Object.keys(keys).map(key => {
            return {
                provide: keys[key],
                useFactory: (service) => {
                    return service.extract(key);
                },
                deps: [PrizmI18nService],
            };
        }),
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvc2VydmljZXMvaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFpQixNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHaEQsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUVXLFNBQW9DO1FBQXBDLGNBQVMsR0FBVCxTQUFTLENBQTJCO0lBQzVDLENBQUM7SUFDSixjQUFjO0lBQ1AsT0FBTyxDQUFnQyxHQUFNO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQ3hCLFNBQVMsQ0FBQyxDQUFDLGFBQXdELEVBQUUsRUFBRSxDQUNyRSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUNoRSxFQUNELEdBQUcsQ0FBQyxDQUFDLElBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUN4QyxDQUFDO0lBQ0osQ0FBQzs4R0FiVSxnQkFBZ0Isa0JBRWpCLGNBQWM7a0hBRmIsZ0JBQWdCOzsyRkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVOzswQkFHTixNQUFNOzJCQUFDLGNBQWM7O0FBYzFCLE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsS0FBd0IsRUFDeEIsR0FBTTtJQUVOLE9BQU87UUFDTCxnQkFBZ0I7UUFDaEI7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFVBQVUsRUFBRSxDQUFDLE9BQXlCLEVBQUUsRUFBRTtnQkFDeEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLENBQUM7WUFDRCxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztTQUN6QjtLQUNGLENBQUM7QUFDSixDQUFDO0FBQ0QsTUFBTSxVQUFVLHFCQUFxQixDQUNuQyxJQUFrQztJQUVsQyxPQUFPO1FBQ0wsZ0JBQWdCO1FBQ2hCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLEdBQVEsQ0FBQztnQkFDdkIsVUFBVSxFQUFFLENBQUMsT0FBeUIsRUFBRSxFQUFFO29CQUN4QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBUSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDekIsQ0FBQztRQUNKLENBQUMsQ0FBQztLQUNILENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBSSVpNX0xBTkdVQUdFLCBQcml6bUxhbmd1YWdlIH0gZnJvbSAnQHByaXptLXVpL2kxOG4nO1xuaW1wb3J0IHsgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcml6bUkxOG5TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQUklaTV9MQU5HVUFHRSlcbiAgICByZWFkb25seSBsYW5ndWFnZSQ6IE9ic2VydmFibGU8UHJpem1MYW5ndWFnZT5cbiAgKSB7fVxuICAvLyBjaGVjayBsb2NhbFxuICBwdWJsaWMgZXh0cmFjdDxLIGV4dGVuZHMga2V5b2YgUHJpem1MYW5ndWFnZT4oa2V5OiBLKTogT2JzZXJ2YWJsZTxQcml6bUxhbmd1YWdlW0tdPiB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2UkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHN0cmVhbU9yVmFsdWU6IE9ic2VydmFibGU8UHJpem1MYW5ndWFnZT4gfCBQcml6bUxhbmd1YWdlKSA9PlxuICAgICAgICBpc09ic2VydmFibGUoc3RyZWFtT3JWYWx1ZSkgPyBzdHJlYW1PclZhbHVlIDogb2Yoc3RyZWFtT3JWYWx1ZSlcbiAgICAgICksXG4gICAgICBtYXAoKGxhbmc6IFByaXptTGFuZ3VhZ2UpID0+IGxhbmdba2V5XSlcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcml6bUkxOG5Jbml0V2l0aEtleTxULCBLIGV4dGVuZHMga2V5b2YgUHJpem1MYW5ndWFnZT4oXG4gIHRva2VuOiBJbmplY3Rpb25Ub2tlbjxUPixcbiAga2V5OiBLXG4pOiBQcm92aWRlcltdIHtcbiAgcmV0dXJuIFtcbiAgICBQcml6bUkxOG5TZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IHRva2VuLFxuICAgICAgdXNlRmFjdG9yeTogKHNlcnZpY2U6IFByaXptSTE4blNlcnZpY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2UuZXh0cmFjdChrZXkpO1xuICAgICAgfSxcbiAgICAgIGRlcHM6IFtQcml6bUkxOG5TZXJ2aWNlXSxcbiAgICB9LFxuICBdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByaXptSTE4bkluaXRXaXRoS2V5czxULCBLIGV4dGVuZHMga2V5b2YgUHJpem1MYW5ndWFnZT4oXG4gIGtleXM6IFJlY29yZDxLLCBJbmplY3Rpb25Ub2tlbjxUPj5cbik6IFByb3ZpZGVyW10ge1xuICByZXR1cm4gW1xuICAgIFByaXptSTE4blNlcnZpY2UsXG4gICAgLi4uT2JqZWN0LmtleXMoa2V5cykubWFwKGtleSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlOiBrZXlzW2tleSBhcyBLXSxcbiAgICAgICAgdXNlRmFjdG9yeTogKHNlcnZpY2U6IFByaXptSTE4blNlcnZpY2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gc2VydmljZS5leHRyYWN0KGtleSBhcyBLKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVwczogW1ByaXptSTE4blNlcnZpY2VdLFxuICAgICAgfTtcbiAgICB9KSxcbiAgXTtcbn1cbiJdfQ==