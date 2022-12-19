import { InjectionToken, ValueProvider } from '@angular/core';
import { PrizmSize } from '../../util/size-bigger';
import { PrizmAppearance, PrizmAppearanceType } from '../../types/appearance.types';


export interface PrizmCronOptions {
    readonly size: PrizmSize;
    readonly appearance: PrizmAppearance;
    readonly appearanceType: PrizmAppearanceType;
}

export const PRIZM_CRON_DEFAULT_OPTIONS: PrizmCronOptions = {
    size: 'l',
    appearance: 'primary',
    appearanceType: 'fill',
};

export const PRIZM_CRON_OPTIONS = new InjectionToken<PrizmCronOptions>(
    'Default parameters for cron component',
    {
        factory: (): PrizmCronOptions  => PRIZM_CRON_DEFAULT_OPTIONS,
    },
);

export const prizmCronOptionsProvider: (
    options: Partial<PrizmCronOptions>,
) => ValueProvider = (options: Partial<PrizmCronOptions>) => ({
    provide: PRIZM_CRON_OPTIONS,
    useValue: {...PRIZM_CRON_DEFAULT_OPTIONS, ...options},
});
