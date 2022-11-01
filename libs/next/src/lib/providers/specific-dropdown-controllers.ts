import { Optional, Provider } from '@angular/core';
import { PzmDropdownControllerDirective } from '../directives/dropdown-controller/dropdown-controller.directive';
import { PZM_DROPDOWN_CONTROLLER } from '../directives/dropdown-controller/dropdown-controller.token';

export function pzmFixedDropdownControllerFactory(
    directive: PzmDropdownControllerDirective | null,
): PzmDropdownControllerDirective {
    directive = directive || new PzmDropdownControllerDirective();
    directive.limitWidth = `fixed`;

    return directive;
}

export const PZM_FIXED_DROPDOWN_CONTROLLER_PROVIDER: Provider = [
    {
        provide: PZM_DROPDOWN_CONTROLLER,
        deps: [[new Optional(), PzmDropdownControllerDirective]],
        useFactory: pzmFixedDropdownControllerFactory,
    },
];

export function pzmLeftAlignedDropdownControllerFactory(
    directive: PzmDropdownControllerDirective | null,
): PzmDropdownControllerDirective {
    directive = directive || new PzmDropdownControllerDirective();
    directive.align = `left`;

    return directive;
}

export const PZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER: Provider = [
    {
        provide: PZM_DROPDOWN_CONTROLLER,
        deps: [[new Optional(), PzmDropdownControllerDirective]],
        useFactory: pzmLeftAlignedDropdownControllerFactory,
    },
];
