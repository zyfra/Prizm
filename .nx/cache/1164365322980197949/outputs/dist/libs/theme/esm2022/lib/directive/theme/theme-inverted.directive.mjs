import { __decorate, __metadata } from 'tslib';
import { Directive, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { PrizmThemeService } from '../../services/theme.service';
import { prizmObservable } from '@prizm-ui/core';
import { combineLatest, of, ReplaySubject } from 'rxjs';
import { PrizmThemeInvertedValuesService } from './theme-inverted-values.service';
import * as i0 from '@angular/core';
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
      .pipe(
        switchMap(([invertedValues, themeElement]) =>
          invertedValues?.['*']
            ? of(invertedValues?.['*'])
            : this.themeService.getInvertedThemeByElement$(themeElement, invertedValues)
        ),
        tap(newTheme => newTheme && this.themeService.update(newTheme, this.elementRef.nativeElement)),
        tap(newTheme => newTheme && this.prizmThemeChange.next(newTheme)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.1.8',
      ngImport: i0,
      type: PrizmThemeInvertedDirective,
      deps: [],
      target: i0.ɵɵFactoryTarget.Directive,
    });
  }
  static {
    this.ɵdir = i0.ɵɵngDeclareDirective({
      minVersion: '14.0.0',
      version: '16.1.8',
      type: PrizmThemeInvertedDirective,
      selector: '[prizmThemeInverted]',
      inputs: { themeElement: 'themeElement' },
      outputs: { prizmThemeChange: 'prizmThemeChange' },
      providers: [PrizmDestroyService],
      ngImport: i0,
    });
  }
}
__decorate(
  [
    prizmObservable({
      name: 'themeElement$$',
      subject: () => new ReplaySubject(1),
    }),
    __metadata('design:type', Object),
  ],
  PrizmThemeInvertedDirective.prototype,
  'themeElement',
  void 0
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.1.8',
  ngImport: i0,
  type: PrizmThemeInvertedDirective,
  decorators: [
    {
      type: Directive,
      args: [
        {
          selector: '[prizmThemeInverted]',
          providers: [PrizmDestroyService],
        },
      ],
    },
  ],
  propDecorators: {
    prizmThemeChange: [
      {
        type: Output,
      },
    ],
    themeElement: [
      {
        type: Input,
      },
    ],
  },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtaW52ZXJ0ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy90aGVtZS9zcmMvbGliL2RpcmVjdGl2ZS90aGVtZS90aGVtZS1pbnZlcnRlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQU1sRixNQUFNLE9BQU8sMkJBQTJCO0lBSnhDO1FBS1csaUJBQVksR0FBc0IsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDNUQsZUFBVSxHQUFlLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxhQUFRLEdBQXdCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzVELCtCQUEwQixHQUFvQyxNQUFNLENBQzNFLCtCQUErQixDQUNoQyxDQUFDO1FBR2MscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQU8zRCxpQkFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO0tBa0JyRDtJQWRRLFFBQVE7UUFDYixhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUMxRSxJQUFJLENBQ0gsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUMzQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQy9FLEVBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQzlGLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2pFLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzs4R0FqQ1UsMkJBQTJCO2tHQUEzQiwyQkFBMkIsNElBRjNCLENBQUMsbUJBQW1CLENBQUM7O0FBa0J6QjtJQUpOLGVBQWUsQ0FBQztRQUNmLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztLQUNwQyxDQUFDOztpRUFDa0Q7MkZBaEJ6QywyQkFBMkI7a0JBSnZDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ2pDOzhCQVVpQixnQkFBZ0I7c0JBRC9CLE1BQU07Z0JBUUEsWUFBWTtzQkFMbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBpbmplY3QsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcml6bVRoZW1lU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RoZW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpem1UaGVtZSB9IGZyb20gJy4uLy4uL3R5cGVzL3RoZW1lJztcbmltcG9ydCB7IHByaXptT2JzZXJ2YWJsZSB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcml6bVRoZW1lSW52ZXJ0ZWRWYWx1ZXNTZXJ2aWNlIH0gZnJvbSAnLi90aGVtZS1pbnZlcnRlZC12YWx1ZXMuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bVRoZW1lSW52ZXJ0ZWRdJyxcbiAgcHJvdmlkZXJzOiBbUHJpem1EZXN0cm95U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptVGhlbWVJbnZlcnRlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJlYWRvbmx5IHRoZW1lU2VydmljZTogUHJpem1UaGVtZVNlcnZpY2UgPSBpbmplY3QoUHJpem1UaGVtZVNlcnZpY2UpO1xuICByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmID0gaW5qZWN0KEVsZW1lbnRSZWYpO1xuICByZWFkb25seSBkZXN0cm95JDogUHJpem1EZXN0cm95U2VydmljZSA9IGluamVjdChQcml6bURlc3Ryb3lTZXJ2aWNlKTtcbiAgcmVhZG9ubHkgdGhlbWVJbnZlcnRlZFZhbHVlc1NlcnZpY2U6IFByaXptVGhlbWVJbnZlcnRlZFZhbHVlc1NlcnZpY2UgPSBpbmplY3QoXG4gICAgUHJpem1UaGVtZUludmVydGVkVmFsdWVzU2VydmljZVxuICApO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcmVhZG9ubHkgcHJpem1UaGVtZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UHJpem1UaGVtZT4oKTtcblxuICBASW5wdXQoKVxuICBAcHJpem1PYnNlcnZhYmxlKHtcbiAgICBuYW1lOiAndGhlbWVFbGVtZW50JCQnLFxuICAgIHN1YmplY3Q6ICgpID0+IG5ldyBSZXBsYXlTdWJqZWN0KDEpLFxuICB9KVxuICBwdWJsaWMgdGhlbWVFbGVtZW50ID0gdGhpcy50aGVtZVNlcnZpY2Uucm9vdEVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSByZWFkb25seSB0aGVtZUVsZW1lbnQkJCE6IE9ic2VydmFibGU8SFRNTEVsZW1lbnQ+O1xuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb21iaW5lTGF0ZXN0KFt0aGlzLnRoZW1lSW52ZXJ0ZWRWYWx1ZXNTZXJ2aWNlLnZhbHVlJCQsIHRoaXMudGhlbWVFbGVtZW50JCRdKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoW2ludmVydGVkVmFsdWVzLCB0aGVtZUVsZW1lbnRdKSA9PlxuICAgICAgICAgIGludmVydGVkVmFsdWVzPy5bJyonXVxuICAgICAgICAgICAgPyBvZihpbnZlcnRlZFZhbHVlcz8uWycqJ10pXG4gICAgICAgICAgICA6IHRoaXMudGhlbWVTZXJ2aWNlLmdldEludmVydGVkVGhlbWVCeUVsZW1lbnQkKHRoZW1lRWxlbWVudCwgaW52ZXJ0ZWRWYWx1ZXMpXG4gICAgICAgICksXG4gICAgICAgIHRhcChuZXdUaGVtZSA9PiBuZXdUaGVtZSAmJiB0aGlzLnRoZW1lU2VydmljZS51cGRhdGUobmV3VGhlbWUsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSksXG4gICAgICAgIHRhcChuZXdUaGVtZSA9PiBuZXdUaGVtZSAmJiB0aGlzLnByaXptVGhlbWVDaGFuZ2UubmV4dChuZXdUaGVtZSkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19
