import { G2 } from '@antv/g2plot';
import { PrizmChartDefaultTheme, PrizmChartTheme, PrizmChartThemeObject } from '../theme/types';
import { PRIZM_CHART_LIGHT_THEME } from './light.const';
import { PRIZM_CHART_DARK_THEME } from './dark.const';

const { registerTheme } = G2;

export const PRIZM_CHART_THEMES = {} as Record<PrizmChartTheme, PrizmChartThemeObject>;

export function prizmChartsSetDefaultThemes(): void {
  prizmChartsSetTheme(PrizmChartDefaultTheme.dark, PRIZM_CHART_DARK_THEME);
  prizmChartsSetTheme(PrizmChartDefaultTheme.default, PRIZM_CHART_LIGHT_THEME);
}

export function prizmChartsSetTheme(key: PrizmChartTheme, value: PrizmChartThemeObject): void {
  registerTheme(key, value);
  PRIZM_CHART_THEMES[key] = value;
}

export function prizmChartsGetDataObjectFromArr(data: any[]): Record<string, unknown>[] {
  return data.reduce((acc, [x, y]) => {
    acc.push({
      x,
      y,
    });
    return acc;
  }, []);
}
