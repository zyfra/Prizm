import { InjectionToken } from '@angular/core';
import { PrizmDropdownControllerDirective } from './dropdown-controller.directive';

export const PZM_DROPDOWN_CONTROLLER = new InjectionToken<PrizmDropdownControllerDirective>(
    'Controls configuration of hints',
    {
        factory: (): PrizmDropdownControllerDirective => new PrizmDropdownControllerDirective(),
    },
);
