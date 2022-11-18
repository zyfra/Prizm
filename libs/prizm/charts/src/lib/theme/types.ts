export enum PrizmChartDefaultTheme {
  default = 'default',
  dark = 'dark'
}

export type PrizmChartTheme = string | PrizmChartDefaultTheme;

export type PrizmChartThemeObject = Record<string, unknown>;
