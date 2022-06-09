import {LocationStrategy} from '@angular/common';
import {InjectionToken, Provider} from '@angular/core';

import {ZUI_VERSIONS_META, ZuiVersionMeta} from './versions.constants';

export const SELECTED_VERSION_META = new InjectionToken<ZuiVersionMeta | null>(
    'Meta information about selected version of Zyfra docs',
);

export const VERSION_MANAGER_PROVIDERS: Provider[] = [
    {
        provide: SELECTED_VERSION_META,
        useFactory: selectedVersionMetaFactory,
        deps: [LocationStrategy],
    },
];

export function selectedVersionMetaFactory(s: LocationStrategy): ZuiVersionMeta | null {
    return (
        ZUI_VERSIONS_META.find(
            meta => meta.baseHref === s.getBaseHref().replace(/\//g, ''),
        ) || null
    );
}
