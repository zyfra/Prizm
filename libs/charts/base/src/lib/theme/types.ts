import { PrizmTheme } from '@prizm-ui/theme';

export enum PrizmChartDefaultTheme {
  default = 'light',
  dark = 'dark',
}

export type PrizmChartTheme = string | PrizmTheme;

export type PrizmChartThemeObject = Record<string, unknown>;
