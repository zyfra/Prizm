import { Optional, Provider } from '@angular/core';
import { PrizmDropdownControllerDirective } from '../directives/dropdown-controller/dropdown-controller.directive';
import { PRIZM_DROPDOWN_CONTROLLER } from '../directives/dropdown-controller/dropdown-controller.token';

export function prizmFixedDropdownControllerFactory(
    directive: PrizmDropdownControllerDirective | null,
): PrizmDropdownControllerDirective {
    directive = directive || new PrizmDropdownControllerDirective();
    directive.limitWidth = `fixed`;

    return directive;
}

export const PRIZM_FIXED_DROPDOWN_CONTROLLER_PROVIDER: Provider = [
    {
        provide: PRIZM_DROPDOWN_CONTROLLER,
        deps: [[new Optional(), PrizmDropdownControllerDirective]],
        useFactory: prizmFixedDropdownControllerFactory,
    },
];

export function prizmLeftAlignedDropdownControllerFactory(
    directive: PrizmDropdownControllerDirective | null,
): PrizmDropdownControllerDirective {
    directive = directive || new PrizmDropdownControllerDirective();
    directive.align = `left`;

    return directive;
}

export const PRIZM_LEFT_ALIGNED_DROPDOWN_CONTROLLER_PROVIDER: Provider = [
    {
        provide: PRIZM_DROPDOWN_CONTROLLER,
        deps: [[new Optional(), PrizmDropdownControllerDirective]],
        useFactory: prizmLeftAlignedDropdownControllerFactory,
    },
];
