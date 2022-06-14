import {InjectionToken, ValueProvider} from '@angular/core';
import {
    ZUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
    ZuiAbstractHintOptions,
} from 'deleted/core/abstract';
import {PolymorpheusContent} from 'deleted/ng-polymorpheus';

export interface ZuiHintOptions extends ZuiAbstractHintOptions {
    readonly zuiHintShowDelay: number;
    readonly zuiHintHideDelay: number;
    readonly tooltipIcon: PolymorpheusContent;
}

// TODO: 3.0 remove in ivy compilation
export const ZUI_TOOLTIP_ICON = 'zuiIconTooltipLarge';

/** Default values for hint options */
export const ZUI_HINT_DEFAULT_OPTIONS: ZuiHintOptions = {
    ...ZUI_ABSTRACT_HINT_DEFAULT_OPTIONS,
    zuiHintShowDelay: 500,
    zuiHintHideDelay: 200,
    tooltipIcon: ZUI_TOOLTIP_ICON,
};

export const ZUI_HINT_OPTIONS = new InjectionToken<ZuiHintOptions>(
    'Default parameters for hint directive',
    {
        factory: () => ZUI_HINT_DEFAULT_OPTIONS,
    },
);

export const zuiHintOptionsProvider: (
    options: Partial<ZuiHintOptions>,
) => ValueProvider = (options: Partial<ZuiHintOptions>) => ({
    provide: ZUI_HINT_OPTIONS,
    useValue: {...ZUI_HINT_DEFAULT_OPTIONS, ...options},
});
