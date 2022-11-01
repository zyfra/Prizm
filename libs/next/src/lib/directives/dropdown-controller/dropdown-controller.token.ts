import { InjectionToken } from '@angular/core';
import { PzmDropdownControllerDirective } from './dropdown-controller.directive';

export const PZM_DROPDOWN_CONTROLLER = new InjectionToken<PzmDropdownControllerDirective>(
    'Controls configuration of hints',
    {
        factory: (): PzmDropdownControllerDirective => new PzmDropdownControllerDirective(),
    },
);
