import {LocationStrategy} from '@angular/common';
import {InjectionToken, Provider} from '@angular/core';

import {PZM_VERSIONS_META, PzmVersionMeta} from './versions.constants';

export const SELECTED_VERSION_META = new InjectionToken<PzmVersionMeta | null>(
    'Meta information about selected version of Zyfra docs',
);

export const VERSION_MANAGER_PROVIDERS: Provider[] = [
    {
        provide: SELECTED_VERSION_META,
        useFactory: selectedVersionMetaFactory,
        deps: [LocationStrategy],
    },
];

export function selectedVersionMetaFactory(s: LocationStrategy): PzmVersionMeta | null {
    return (
        PZM_VERSIONS_META.find(
            meta => meta.baseHref === s.getBaseHref().replace(/\//g, ''),
        ) || null
    );
}
