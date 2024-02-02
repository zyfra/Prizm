import { Directive, Input, Self } from '@angular/core';
import { PrizmThemeInvertedValuesService } from './theme-inverted-values.service';
import * as i0 from '@angular/core';
import * as i1 from './theme-inverted-values.service';
export class PrizmThemeInvertedValuesDirective {
  constructor(themeInvertedValuesService) {
    this.themeInvertedValuesService = themeInvertedValuesService;
  }
  ngOnChanges() {
    this.themeInvertedValuesService.value$$.next(this.prizmThemeInvertedValues);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.1.8',
      ngImport: i0,
      type: PrizmThemeInvertedValuesDirective,
      deps: [{ token: i1.PrizmThemeInvertedValuesService, self: true }],
      target: i0.ɵɵFactoryTarget.Directive,
    });
  }
  static {
    this.ɵdir = i0.ɵɵngDeclareDirective({
      minVersion: '14.0.0',
      version: '16.1.8',
      type: PrizmThemeInvertedValuesDirective,
      selector: '[prizmThemeInvertedValues]',
      inputs: { prizmThemeInvertedValues: 'prizmThemeInvertedValues' },
      providers: [PrizmThemeInvertedValuesService],
      usesOnChanges: true,
      ngImport: i0,
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.1.8',
  ngImport: i0,
  type: PrizmThemeInvertedValuesDirective,
  decorators: [
    {
      type: Directive,
      args: [
        {
          selector: '[prizmThemeInvertedValues]',
          providers: [PrizmThemeInvertedValuesService],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      {
        type: i1.PrizmThemeInvertedValuesService,
        decorators: [
          {
            type: Self,
          },
        ],
      },
    ];
  },
  propDecorators: {
    prizmThemeInvertedValues: [
      {
        type: Input,
      },
    ],
  },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtaW52ZXJ0ZWQtdmFsdWVzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdGhlbWUvc3JjL2xpYi9kaXJlY3RpdmUvdGhlbWUvdGhlbWUtaW52ZXJ0ZWQtdmFsdWVzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0saUNBQWlDLENBQUM7OztBQU1sRixNQUFNLE9BQU8saUNBQWlDO0lBSTVDLFlBQTZCLDBCQUEyRDtRQUEzRCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQWlDO0lBQUcsQ0FBQztJQUU1RixXQUFXO1FBQ1QsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDOUUsQ0FBQzs4R0FSVSxpQ0FBaUM7a0dBQWpDLGlDQUFpQyx1SEFGakMsQ0FBQywrQkFBK0IsQ0FBQzs7MkZBRWpDLGlDQUFpQztrQkFKN0MsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDN0M7OzBCQUtjLElBQUk7NENBRlYsd0JBQXdCO3NCQUQ5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bVRoZW1lSW52ZXJ0ZWRWYWx1ZXMgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFByaXptVGhlbWVJbnZlcnRlZFZhbHVlc1NlcnZpY2UgfSBmcm9tICcuL3RoZW1lLWludmVydGVkLXZhbHVlcy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ByaXptVGhlbWVJbnZlcnRlZFZhbHVlc10nLFxuICBwcm92aWRlcnM6IFtQcml6bVRoZW1lSW52ZXJ0ZWRWYWx1ZXNTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1UaGVtZUludmVydGVkVmFsdWVzRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgcHVibGljIHByaXptVGhlbWVJbnZlcnRlZFZhbHVlcyE6IFByaXptVGhlbWVJbnZlcnRlZFZhbHVlcztcblxuICBjb25zdHJ1Y3RvcihAU2VsZigpIHJlYWRvbmx5IHRoZW1lSW52ZXJ0ZWRWYWx1ZXNTZXJ2aWNlOiBQcml6bVRoZW1lSW52ZXJ0ZWRWYWx1ZXNTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMudGhlbWVJbnZlcnRlZFZhbHVlc1NlcnZpY2UudmFsdWUkJC5uZXh0KHRoaXMucHJpem1UaGVtZUludmVydGVkVmFsdWVzKTtcbiAgfVxufVxuIl19
