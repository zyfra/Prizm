import { G2 } from '@antv/g2plot';
import { PrizmChartDefaultTheme, PrizmChartTheme, PrizmChartThemeObject } from '../theme/types';
import { PRIZM_CHART_LIGHT_THEME } from './light.const';
import { PRIZM_CHART_DARK_THEME } from './dark.const';

const { registerTheme } = G2;

export function prizmChartsSetDefaultThemes() {
  prizmChartsSetTheme(PrizmChartDefaultTheme.dark, PRIZM_CHART_DARK_THEME);
  prizmChartsSetTheme(PrizmChartDefaultTheme.default, PRIZM_CHART_LIGHT_THEME);
}

export function prizmChartsSetTheme(key: PrizmChartTheme, value: PrizmChartThemeObject) {
  registerTheme(key, value);
}
