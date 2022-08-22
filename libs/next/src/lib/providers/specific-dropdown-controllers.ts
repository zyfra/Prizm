import { Optional, Provider } from '@angular/core';
import { ZuiDropdownControllerDirective } from '../directives/dropdown-controller/dropdown-controller.directive';
import { ZUI_DROPDOWN_CONTROLLER } from '../directives/dropdown-controller/dropdown-controller.token';

export function zuiFixedDropdownControllerFactory(
    directive: ZuiDropdownControllerDirective | null,
): ZuiDropdownControllerDirective {
    directive = directive || new ZuiDropdownControllerDirective();
    directive.limitWidth = `fixed`;

    return directive;
}

export const ZUI_FIXED_DROPDOWN_CONTROLLER_PROVIDER: Provider = [
    {
        provide: ZUI_DROPDOWN_CONTROLLER,
        deps: [[new Optional(), ZuiDropdownControllerDirective]],
        useFactory: zuiFixedDropdownControllerFactory,
    },
];

export function zuiLeftAlignedDropdownControllerFactory(
    directive: ZuiDropdownControllerDirective | null,
): ZuiDropdownControllerDirective {
    directive = directive || new ZuiDropdownControllerDirective();
    directive.align = `left`;

    return directive;
}

export const ZUI_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER: Provider = [
    {
        provide: ZUI_DROPDOWN_CONTROLLER,
        deps: [[new Optional(), ZuiDropdownControllerDirective]],
        useFactory: zuiLeftAlignedDropdownControllerFactory,
    },
];
