import { inject, InjectionToken } from '@angular/core';
import { NAVIGATOR } from '@ng-web-apis/common';
import { zuiIsIos } from '../util';

export const ZUI_IS_IOS = new InjectionToken<boolean>('iOS browser detection', {
    factory: (): boolean => zuiIsIos(inject(NAVIGATOR)),
});
