import { PrizmTextMaskConfig } from './text-mask-config';
import { PrizmTextMaskOptions } from './text-mask-options';
import { PrizmTextMaskPipeResult } from './text-mask-pipe-result';

/**
 * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#pipe}
 */
export type PrizmTextMaskPipeHandler = (
  conformedValue: string,
  config: PrizmTextMaskOptions & PrizmTextMaskConfig
) => string | PrizmTextMaskPipeResult | false;
