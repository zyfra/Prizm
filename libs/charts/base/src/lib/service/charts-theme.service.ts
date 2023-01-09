import { Injectable } from '@angular/core';
import { PRIZM_CHART_THEMES, prizmChartsSetDefaultThemes } from '../theme/util';
import { merge } from 'lodash';
import { PrizmChartTheme } from '../theme/types';
@Injectable({
  providedIn: 'root'
})
export class PrizmChartsThemeService {
  private initiatedTheme = false;

  public initIfNecessary(): void {
   if (this.initiatedTheme) {
     return;
   }
   this.initiatedTheme = true;
    prizmChartsSetDefaultThemes();
  }

  public getComponentOptionsWithTheme(
    themeKey: PrizmChartTheme,
    componentKey: string,
    newOptions: Record<string, unknown>,
    allOptions: Record<string, unknown>
    // TODO add typings return
  ): Record<string, unknown> {
    // TODO add typings for theme
    const prizmThemeOptions = (PRIZM_CHART_THEMES[themeKey]?.prizm ?? {}) as Record<string, any>;
    const component = prizmThemeOptions.components?.[componentKey] ?? {};
    return merge(
      {},
      allOptions,
      newOptions,
      component
    );
  }
}
