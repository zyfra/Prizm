import { InjectionToken, ValueProvider } from '@angular/core';
import { PolymorphContent } from '../../directives/polymorph';
import { PrizmContextWithImplicit } from '../../types/context-with-implicit';
import { PrizmSizeL, PrizmSizeM } from '../../util';
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
export declare const PRIZM_TOGGLE_DEFAULT_OPTIONS: PrizmToggleOptions;
export declare const PRIZM_TOGGLE_OPTIONS: InjectionToken<PrizmToggleOptions>;
export declare const prizmToggleOptionsProvider: (options: Partial<PrizmToggleOptions>) => ValueProvider;
