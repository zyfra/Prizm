import { ChangeDetectorRef, inject, Pipe } from '@angular/core';
import { prizmCronHRToString } from '../human-readable/crons-i18n';
import { PRIZM_LANGUAGE } from '@prizm-ui/i18n';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class PrizmCronHumanReadablePipe {
    constructor() {
        this.cdRef = inject(ChangeDetectorRef);
        this.language$ = inject(PRIZM_LANGUAGE);
        this.asyncPipe = new AsyncPipe(this.cdRef);
    }
    transform(expression) {
        const lang = this.asyncPipe.transform(this.language$.pipe(map(i => i.shortName)));
        if (!lang)
            return '';
        return prizmCronHRToString(expression, {
            locale: lang,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronHumanReadablePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronHumanReadablePipe, isStandalone: true, name: "prizmCronHumanReadable" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmCronHumanReadablePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'prizmCronHumanReadable',
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1odW1hbi1yZWFkYWJsZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9jcm9uLWh1bWFuLXJlYWRhYmxlL3BpcGUvY3Jvbi1odW1hbi1yZWFkYWJsZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQVUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFpQixNQUFNLGdCQUFnQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBTXJDLE1BQU0sT0FBTywwQkFBMEI7SUFKdkM7UUFLVyxVQUFLLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbEMsY0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNuQyxjQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBV2hEO0lBVFEsU0FBUyxDQUFDLFVBQWtCO1FBQ2pDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEYsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUVyQixPQUFPLG1CQUFtQixDQUFDLFVBQVUsRUFBRTtZQUNyQyxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBYlUsMEJBQTBCOzRHQUExQiwwQkFBMEI7OzJGQUExQiwwQkFBMEI7a0JBSnRDLElBQUk7bUJBQUM7b0JBQ0osSUFBSSxFQUFFLHdCQUF3QjtvQkFDOUIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIGluamVjdCwgSW5qZWN0LCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcml6bUNyb25IUlRvU3RyaW5nIH0gZnJvbSAnLi4vaHVtYW4tcmVhZGFibGUvY3JvbnMtaTE4bic7XG5pbXBvcnQgeyBQUklaTV9MQU5HVUFHRSwgUHJpem1MYW5ndWFnZSB9IGZyb20gJ0Bwcml6bS11aS9pMThuJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFzeW5jUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3ByaXptQ3Jvbkh1bWFuUmVhZGFibGUnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUNyb25IdW1hblJlYWRhYmxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICByZWFkb25seSBjZFJlZiA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XG4gIHJlYWRvbmx5IGxhbmd1YWdlJCA9IGluamVjdChQUklaTV9MQU5HVUFHRSk7XG4gIHJlYWRvbmx5IGFzeW5jUGlwZSA9IG5ldyBBc3luY1BpcGUodGhpcy5jZFJlZik7XG5cbiAgcHVibGljIHRyYW5zZm9ybShleHByZXNzaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxhbmcgPSB0aGlzLmFzeW5jUGlwZS50cmFuc2Zvcm0odGhpcy5sYW5ndWFnZSQucGlwZShtYXAoaSA9PiBpLnNob3J0TmFtZSkpKTtcblxuICAgIGlmICghbGFuZykgcmV0dXJuICcnO1xuXG4gICAgcmV0dXJuIHByaXptQ3JvbkhSVG9TdHJpbmcoZXhwcmVzc2lvbiwge1xuICAgICAgbG9jYWxlOiBsYW5nLFxuICAgIH0pO1xuICB9XG59XG4iXX0=