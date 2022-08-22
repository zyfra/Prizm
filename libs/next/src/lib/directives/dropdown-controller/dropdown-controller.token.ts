import { InjectionToken } from '@angular/core';
import { ZuiDropdownControllerDirective } from './dropdown-controller.directive';

export const ZUI_DROPDOWN_CONTROLLER = new InjectionToken<ZuiDropdownControllerDirective>(
    'Controls configuration of hints',
    {
        factory: (): ZuiDropdownControllerDirective => new ZuiDropdownControllerDirective(),
    },
);
