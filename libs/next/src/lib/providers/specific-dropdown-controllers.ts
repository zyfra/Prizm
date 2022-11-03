import { Optional, Provider } from '@angular/core';
import { PrizmDropdownControllerDirective } from '../directives/dropdown-controller/dropdown-controller.directive';
import { PZM_DROPDOWN_CONTROLLER } from '../directives/dropdown-controller/dropdown-controller.token';

export function pzmFixedDropdownControllerFactory(
    directive: PrizmDropdownControllerDirective | null,
): PrizmDropdownControllerDirective {
    directive = directive || new PrizmDropdownControllerDirective();
    directive.limitWidth = `fixed`;

    return directive;
}

export const PZM_FIXED_DROPDOWN_CONTROLLER_PROVIDER: Provider = [
    {
        provide: PZM_DROPDOWN_CONTROLLER,
        deps: [[new Optional(), PrizmDropdownControllerDirective]],
        useFactory: pzmFixedDropdownControllerFactory,
    },
];

export function pzmLeftAlignedDropdownControllerFactory(
    directive: PrizmDropdownControllerDirective | null,
): PrizmDropdownControllerDirective {
    directive = directive || new PrizmDropdownControllerDirective();
    directive.align = `left`;

    return directive;
}

export const PZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER: Provider = [
    {
        provide: PZM_DROPDOWN_CONTROLLER,
        deps: [[new Optional(), PrizmDropdownControllerDirective]],
        useFactory: pzmLeftAlignedDropdownControllerFactory,
    },
];
