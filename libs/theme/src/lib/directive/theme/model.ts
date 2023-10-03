import { PrizmTheme } from '../../types/theme';

export type PrizmThemeInvertedValues = {
  [key: PrizmTheme]: PrizmTheme;
} & {
  /** set one theme for all */
  '*'?: PrizmTheme;
};
