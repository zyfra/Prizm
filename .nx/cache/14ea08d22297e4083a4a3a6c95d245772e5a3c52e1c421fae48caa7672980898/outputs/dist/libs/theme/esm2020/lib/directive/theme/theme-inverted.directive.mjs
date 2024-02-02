import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { PrizmThemeService } from '../../services/theme.service';
import { prizmObservable } from '@prizm-ui/core';
import { combineLatest, of, ReplaySubject } from 'rxjs';
import { PrizmThemeInvertedValuesService } from './theme-inverted-values.service';
import * as i0 from "@angular/core";
export class PrizmThemeInvertedDirective {
    constructor() {
        this.themeService = inject(PrizmThemeService);
        this.elementRef = inject(ElementRef);
        this.destroy$ = inject(PrizmDestroyService);
        this.themeInvertedValuesService = inject(PrizmThemeInvertedValuesService);
        this.prizmThemeChange = new EventEmitter();
        this.themeElement = this.themeService.rootElement;
    }
    ngOnInit() {
        combineLatest([this.themeInvertedValuesService.value$$, this.themeElement$$])
            .pipe(switchMap(([invertedValues, themeElement]) => invertedValues?.['*']
            ? of(invertedValues?.['*'])
            : this.themeService.getInvertedThemeByElement$(themeElement, invertedValues)), tap(newTheme => newTheme && this.themeService.update(newTheme, this.elementRef.nativeElement)), tap(newTheme => newTheme && this.prizmThemeChange.next(newTheme)), takeUntil(this.destroy$))
            .subscribe();
    }
}
PrizmThemeInvertedDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeInvertedDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmThemeInvertedDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmThemeInvertedDirective, selector: "[prizmThemeInverted]", inputs: { themeElement: "themeElement" }, outputs: { prizmThemeChange: "prizmThemeChange" }, providers: [PrizmDestroyService], ngImport: i0 });
__decorate([
    prizmObservable({
        name: 'themeElement$$',
        subject: () => new ReplaySubject(1),
    }),
    __metadata("design:type", Object)
], PrizmThemeInvertedDirective.prototype, "themeElement", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeInvertedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmThemeInverted]',
                    providers: [PrizmDestroyService],
                }]
        }], propDecorators: { prizmThemeChange: [{
                type: Output
            }], themeElement: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtaW52ZXJ0ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy90aGVtZS9zcmMvbGliL2RpcmVjdGl2ZS90aGVtZS90aGVtZS1pbnZlcnRlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQU1sRixNQUFNLE9BQU8sMkJBQTJCO0lBSnhDO1FBS1csaUJBQVksR0FBc0IsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUQsZUFBVSxHQUFlLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxhQUFRLEdBQXdCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVELCtCQUEwQixHQUFvQyxNQUFNLENBQzNFLCtCQUErQixDQUNoQyxDQUFDO1FBR2MscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQU8zRCxpQkFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO0tBa0JyRDtJQWRRLFFBQVE7UUFDYixhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUMxRSxJQUFJLENBQ0gsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUMzQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQy9FLEVBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQzlGLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2pFLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7d0hBakNVLDJCQUEyQjs0R0FBM0IsMkJBQTJCLDRJQUYzQixDQUFDLG1CQUFtQixDQUFDO0FBYWhDO0lBQ0MsZUFBZSxDQUFDO1FBQ2YsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO0tBQ3BDLENBQUM7O2lFQUNrRDsyRkFoQnpDLDJCQUEyQjtrQkFKdkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakM7OEJBVWlCLGdCQUFnQjtzQkFEL0IsTUFBTTtnQkFRQSxZQUFZO3NCQUxsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIGluamVjdCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdGhlbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQcml6bVRoZW1lIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGhlbWUnO1xuaW1wb3J0IHsgcHJpem1PYnNlcnZhYmxlIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByaXptVGhlbWVJbnZlcnRlZFZhbHVlc1NlcnZpY2UgfSBmcm9tICcuL3RoZW1lLWludmVydGVkLXZhbHVlcy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ByaXptVGhlbWVJbnZlcnRlZF0nLFxuICBwcm92aWRlcnM6IFtQcml6bURlc3Ryb3lTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1UaGVtZUludmVydGVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcmVhZG9ubHkgdGhlbWVTZXJ2aWNlOiBQcml6bVRoZW1lU2VydmljZSA9IGluamVjdChQcml6bVRoZW1lU2VydmljZSk7XG4gIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYgPSBpbmplY3QoRWxlbWVudFJlZik7XG4gIHJlYWRvbmx5IGRlc3Ryb3kkOiBQcml6bURlc3Ryb3lTZXJ2aWNlID0gaW5qZWN0KFByaXptRGVzdHJveVNlcnZpY2UpO1xuICByZWFkb25seSB0aGVtZUludmVydGVkVmFsdWVzU2VydmljZTogUHJpem1UaGVtZUludmVydGVkVmFsdWVzU2VydmljZSA9IGluamVjdChcbiAgICBQcml6bVRoZW1lSW52ZXJ0ZWRWYWx1ZXNTZXJ2aWNlXG4gICk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByZWFkb25seSBwcml6bVRoZW1lQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQcml6bVRoZW1lPigpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bU9ic2VydmFibGUoe1xuICAgIG5hbWU6ICd0aGVtZUVsZW1lbnQkJCcsXG4gICAgc3ViamVjdDogKCkgPT4gbmV3IFJlcGxheVN1YmplY3QoMSksXG4gIH0pXG4gIHB1YmxpYyB0aGVtZUVsZW1lbnQgPSB0aGlzLnRoZW1lU2VydmljZS5yb290RWxlbWVudDtcblxuICBwcml2YXRlIHJlYWRvbmx5IHRoZW1lRWxlbWVudCQkITogT2JzZXJ2YWJsZTxIVE1MRWxlbWVudD47XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMudGhlbWVJbnZlcnRlZFZhbHVlc1NlcnZpY2UudmFsdWUkJCwgdGhpcy50aGVtZUVsZW1lbnQkJF0pXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChbaW52ZXJ0ZWRWYWx1ZXMsIHRoZW1lRWxlbWVudF0pID0+XG4gICAgICAgICAgaW52ZXJ0ZWRWYWx1ZXM/LlsnKiddXG4gICAgICAgICAgICA/IG9mKGludmVydGVkVmFsdWVzPy5bJyonXSlcbiAgICAgICAgICAgIDogdGhpcy50aGVtZVNlcnZpY2UuZ2V0SW52ZXJ0ZWRUaGVtZUJ5RWxlbWVudCQodGhlbWVFbGVtZW50LCBpbnZlcnRlZFZhbHVlcylcbiAgICAgICAgKSxcbiAgICAgICAgdGFwKG5ld1RoZW1lID0+IG5ld1RoZW1lICYmIHRoaXMudGhlbWVTZXJ2aWNlLnVwZGF0ZShuZXdUaGVtZSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKSxcbiAgICAgICAgdGFwKG5ld1RoZW1lID0+IG5ld1RoZW1lICYmIHRoaXMucHJpem1UaGVtZUNoYW5nZS5uZXh0KG5ld1RoZW1lKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=