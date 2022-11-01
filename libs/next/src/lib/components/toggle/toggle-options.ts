import {InjectionToken, ValueProvider} from '@angular/core';
import {PolymorphContent} from '../../directives/polymorph';
import {PzmContextWithImplicit} from "../../types/context-with-implicit";
import {PzmSizeL, PzmSizeM} from "../../util";

export interface PzmToggleOptions {
    readonly icons: Readonly<{
        toggleOff: PolymorphContent<PzmContextWithImplicit<PzmSizeL | PzmSizeM>>;
        toggleOn: PolymorphContent<PzmContextWithImplicit<PzmSizeL | PzmSizeM>>;
    }>;
    readonly singleColor: boolean;
    readonly showIcons: boolean;
    readonly size: PzmSizeL | PzmSizeM;
}

/** Default values for the toggle options. */
export const PZM_TOGGLE_DEFAULT_OPTIONS: PzmToggleOptions = {
    icons: {
        toggleOff: '',
        toggleOn: '',
    },
    singleColor: false,
    showIcons: false,
    size: 'm',
};

export const PZM_TOGGLE_OPTIONS = new InjectionToken<PzmToggleOptions>(
    'Default parameters for toggle component',
    {
        factory: (): typeof PZM_TOGGLE_DEFAULT_OPTIONS => PZM_TOGGLE_DEFAULT_OPTIONS,
    },
);

export const pzmToggleOptionsProvider: (
    options: Partial<PzmToggleOptions>,
) => ValueProvider = (options: Partial<PzmToggleOptions>) => ({
    provide: PZM_TOGGLE_OPTIONS,
    useValue: {...PZM_TOGGLE_DEFAULT_OPTIONS, ...options},
});
