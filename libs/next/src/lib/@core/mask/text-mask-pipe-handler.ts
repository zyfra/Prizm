import { PzmTextMaskConfig } from './text-mask-config';
import { PzmTextMaskOptions } from './text-mask-options';
import { PzmTextMaskPipeResult } from './text-mask-pipe-result';

/**
 * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#pipe}
 */
export type PzmTextMaskPipeHandler = (
    conformedValue: string,
    config: PzmTextMaskOptions & PzmTextMaskConfig,
) => string | PzmTextMaskPipeResult | false;
