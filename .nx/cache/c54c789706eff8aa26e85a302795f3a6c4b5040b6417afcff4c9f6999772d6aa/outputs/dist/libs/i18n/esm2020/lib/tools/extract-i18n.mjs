import { inject } from '@angular/core';
import { isObservable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { PRIZM_LANGUAGE } from './language';
/**
 * @deprecated
 * use only method "extract" from service PrizmI18nService
 * */
export function prizmExtractI18n(key) {
    return () => inject(PRIZM_LANGUAGE).pipe(switchMap((streamOrValue) => isObservable(streamOrValue) ? streamOrValue : of(streamOrValue)), map((lang) => lang[key]));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0cmFjdC1pMThuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9pMThuL3NyYy9saWIvdG9vbHMvZXh0cmFjdC1pMThuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQU8sTUFBTSxNQUFNLENBQUM7QUFDekQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTVDOzs7S0FHSztBQUNMLE1BQU0sVUFBVSxnQkFBZ0IsQ0FBZ0MsR0FBTTtJQUNwRSxPQUFPLEdBQWlDLEVBQUUsQ0FDeEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FDekIsU0FBUyxDQUFDLENBQUMsYUFBd0QsRUFBRSxFQUFFLENBQ3JFLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQ2hFLEVBQ0QsR0FBRyxDQUFDLENBQUMsSUFBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ3hDLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mLCB0YXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1MYW5ndWFnZSB9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyBQUklaTV9MQU5HVUFHRSB9IGZyb20gJy4vbGFuZ3VhZ2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiB1c2Ugb25seSBtZXRob2QgXCJleHRyYWN0XCIgZnJvbSBzZXJ2aWNlIFByaXptSTE4blNlcnZpY2VcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gcHJpem1FeHRyYWN0STE4bjxLIGV4dGVuZHMga2V5b2YgUHJpem1MYW5ndWFnZT4oa2V5OiBLKTogKCkgPT4gT2JzZXJ2YWJsZTxQcml6bUxhbmd1YWdlW0tdPiB7XG4gIHJldHVybiAoKTogT2JzZXJ2YWJsZTxQcml6bUxhbmd1YWdlW0tdPiA9PlxuICAgIGluamVjdChQUklaTV9MQU5HVUFHRSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoc3RyZWFtT3JWYWx1ZTogT2JzZXJ2YWJsZTxQcml6bUxhbmd1YWdlPiB8IFByaXptTGFuZ3VhZ2UpID0+XG4gICAgICAgIGlzT2JzZXJ2YWJsZShzdHJlYW1PclZhbHVlKSA/IHN0cmVhbU9yVmFsdWUgOiBvZihzdHJlYW1PclZhbHVlKVxuICAgICAgKSxcbiAgICAgIG1hcCgobGFuZzogUHJpem1MYW5ndWFnZSkgPT4gbGFuZ1trZXldKVxuICAgICk7XG59XG4iXX0=