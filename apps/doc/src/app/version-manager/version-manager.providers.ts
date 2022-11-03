import {LocationStrategy} from '@angular/common';
import {InjectionToken, Provider} from '@angular/core';

import {PZM_VERSIONS_META, PrizmVersionMeta} from './versions.constants';

export const SELECTED_VERSION_META = new InjectionToken<PrizmVersionMeta | null>(
    'Meta information about selected version of Zyfra docs',
);

export const VERSION_MANAGER_PROVIDERS: Provider[] = [
    {
        provide: SELECTED_VERSION_META,
        useFactory: selectedVersionMetaFactory,
        deps: [LocationStrategy],
    },
];

export function selectedVersionMetaFactory(s: LocationStrategy): PrizmVersionMeta | null {
    return (
        PZM_VERSIONS_META.find(
            meta => meta.baseHref === s.getBaseHref().replace(/\//g, ''),
        ) || null
    );
}
