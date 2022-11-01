import { inject, InjectionToken } from '@angular/core';
import { NAVIGATOR } from '@ng-web-apis/common';
import { pzmIsIos } from '../util';

export const PZM_IS_IOS = new InjectionToken<boolean>('iOS browser detection', {
    factory: (): boolean => pzmIsIos(inject(NAVIGATOR)),
});
