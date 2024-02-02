import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PRIZM_CONST_DEFAULT_INVERTED_VALUES } from './const';
import * as i0 from '@angular/core';
export class PrizmThemeInvertedValuesService {
  constructor(customInvertedValues) {
    this.invertedValues = customInvertedValues ?? PRIZM_CONST_DEFAULT_INVERTED_VALUES;
    this.value$$ = new BehaviorSubject(this.invertedValues);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.1.8',
      ngImport: i0,
      type: PrizmThemeInvertedValuesService,
      deps: [{ token: 'PRIZM_THEME_INVERTED_VALUES', optional: true }],
      target: i0.ɵɵFactoryTarget.Injectable,
    });
  }
  static {
    this.ɵprov = i0.ɵɵngDeclareInjectable({
      minVersion: '12.0.0',
      version: '16.1.8',
      ngImport: i0,
      type: PrizmThemeInvertedValuesService,
      providedIn: 'root',
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.1.8',
  ngImport: i0,
  type: PrizmThemeInvertedValuesService,
  decorators: [
    {
      type: Injectable,
      args: [
        {
          providedIn: 'root',
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      {
        type: undefined,
        decorators: [
          {
            type: Inject,
            args: ['PRIZM_THEME_INVERTED_VALUES'],
          },
          {
            type: Optional,
          },
        ],
      },
    ];
  },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtaW52ZXJ0ZWQtdmFsdWVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3RoZW1lL3NyYy9saWIvZGlyZWN0aXZlL3RoZW1lL3RoZW1lLWludmVydGVkLXZhbHVlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFLOUQsTUFBTSxPQUFPLCtCQUErQjtJQUsxQyxZQUNxRCxvQkFBOEM7UUFFakcsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsSUFBSSxtQ0FBbUMsQ0FBQztRQUNsRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZUFBZSxDQUEyQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs4R0FWVSwrQkFBK0Isa0JBTWhDLDZCQUE2QjtrSEFONUIsK0JBQStCLGNBRjlCLE1BQU07OzJGQUVQLCtCQUErQjtrQkFIM0MsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQU9JLE1BQU07MkJBQUMsNkJBQTZCOzswQkFBRyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcml6bVRoZW1lSW52ZXJ0ZWRWYWx1ZXMgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFBSSVpNX0NPTlNUX0RFRkFVTFRfSU5WRVJURURfVkFMVUVTIH0gZnJvbSAnLi9jb25zdCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVRoZW1lSW52ZXJ0ZWRWYWx1ZXNTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgdmFsdWUkJDogQmVoYXZpb3JTdWJqZWN0PFByaXptVGhlbWVJbnZlcnRlZFZhbHVlcz47XG5cbiAgcHJpdmF0ZSBpbnZlcnRlZFZhbHVlczogUHJpem1UaGVtZUludmVydGVkVmFsdWVzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoJ1BSSVpNX1RIRU1FX0lOVkVSVEVEX1ZBTFVFUycpIEBPcHRpb25hbCgpIGN1c3RvbUludmVydGVkVmFsdWVzOiBQcml6bVRoZW1lSW52ZXJ0ZWRWYWx1ZXNcbiAgKSB7XG4gICAgdGhpcy5pbnZlcnRlZFZhbHVlcyA9IGN1c3RvbUludmVydGVkVmFsdWVzID8/IFBSSVpNX0NPTlNUX0RFRkFVTFRfSU5WRVJURURfVkFMVUVTO1xuICAgIHRoaXMudmFsdWUkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UHJpem1UaGVtZUludmVydGVkVmFsdWVzPih0aGlzLmludmVydGVkVmFsdWVzKTtcbiAgfVxufVxuIl19
