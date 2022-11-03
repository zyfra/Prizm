import {InjectionToken, ValueProvider} from '@angular/core';
import {PolymorphContent} from '../../directives/polymorph';
import {PrizmContextWithImplicit} from "../../types/context-with-implicit";
import {PrizmSizeL, PrizmSizeM} from "../../util";

export interface PrizmToggleOptions {
    readonly icons: Readonly<{
        toggleOff: PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>>;
        toggleOn: PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>>;
    }>;
    readonly singleColor: boolean;
    readonly showIcons: boolean;
    readonly size: PrizmSizeL | PrizmSizeM;
}

/** Default values for the toggle options. */
export const PZM_TOGGLE_DEFAULT_OPTIONS: PrizmToggleOptions = {
    icons: {
        toggleOff: '',
        toggleOn: '',
    },
    singleColor: false,
    showIcons: false,
    size: 'm',
};

export const PZM_TOGGLE_OPTIONS = new InjectionToken<PrizmToggleOptions>(
    'Default parameters for toggle component',
    {
        factory: (): typeof PZM_TOGGLE_DEFAULT_OPTIONS => PZM_TOGGLE_DEFAULT_OPTIONS,
    },
);

export const pzmToggleOptionsProvider: (
    options: Partial<PrizmToggleOptions>,
) => ValueProvider = (options: Partial<PrizmToggleOptions>) => ({
    provide: PZM_TOGGLE_OPTIONS,
    useValue: {...PZM_TOGGLE_DEFAULT_OPTIONS, ...options},
});
