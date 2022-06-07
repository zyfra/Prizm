import {InjectionToken, ValueProvider} from '@angular/core';
import {PolymorpheusContent} from '@digital-plant/zui-components';
import {ZuiContextWithImplicit} from "../../types/context-with-implicit";
import {ZuiSizeL, ZuiSizeM} from "@digital-plant/zui-components";

export interface ZuiToggleOptions {
    readonly icons: Readonly<{
        toggleOff: PolymorpheusContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>>;
        toggleOn: PolymorpheusContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>>;
    }>;
    readonly singleColor: boolean;
    readonly showIcons: boolean;
    readonly size: ZuiSizeL | ZuiSizeM;
}

/** Default values for the toggle options. */
export const ZUI_TOGGLE_DEFAULT_OPTIONS: ZuiToggleOptions = {
    icons: {
        toggleOff({$implicit}: ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>): string {
            return $implicit === 'm' ? 'zuiIconToggleOff' : 'zuiIconToggleOffLarge';
        },
        toggleOn({$implicit}: ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>): string {
            return $implicit === 'm' ? 'zuiIconToggleOn' : 'zuiIconToggleOnLarge';
        },
    },
    singleColor: false,
    showIcons: false,
    size: 'm',
};

export const ZUI_TOGGLE_OPTIONS = new InjectionToken<ZuiToggleOptions>(
    'Default parameters for toggle component',
    {
        factory: (): typeof ZUI_TOGGLE_DEFAULT_OPTIONS => ZUI_TOGGLE_DEFAULT_OPTIONS,
    },
);

export const zuiToggleOptionsProvider: (
    options: Partial<ZuiToggleOptions>,
) => ValueProvider = (options: Partial<ZuiToggleOptions>) => ({
    provide: ZUI_TOGGLE_OPTIONS,
    useValue: {...ZUI_TOGGLE_DEFAULT_OPTIONS, ...options},
});
