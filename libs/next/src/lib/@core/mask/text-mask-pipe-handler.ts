import { ZuiTextMaskConfig } from './text-mask-config';
import { ZuiTextMaskOptions } from './text-mask-options';
import { ZuiTextMaskPipeResult } from './text-mask-pipe-result';

/**
 * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#pipe}
 */
export type ZuiTextMaskPipeHandler = (
    conformedValue: string,
    config: ZuiTextMaskOptions & ZuiTextMaskConfig,
) => string | ZuiTextMaskPipeResult | false;
