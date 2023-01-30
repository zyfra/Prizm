import { inject, InjectionToken } from '@angular/core';
import { NAVIGATOR } from '@ng-web-apis/common';
import { prizmIsIos } from '../util';

export const PRIZM_IS_IOS = new InjectionToken<boolean>('iOS browser detection', {
  factory: (): boolean => prizmIsIos(inject(NAVIGATOR)),
});
