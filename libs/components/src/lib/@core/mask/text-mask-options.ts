import { PrizmTextMaskList } from './text-mask-list';
import { PrizmTextMaskListHandler } from './text-mask-list-handler';
import { PrizmTextMaskPipeHandler } from './text-mask-pipe-handler';

/**
 * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md}
 */
export interface PrizmTextMaskOptions {
    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask}
     */
    mask: PrizmTextMaskList | PrizmTextMaskListHandler | false;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#guide}
     */
    guide?: boolean;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#placeholderchar}
     */
    placeholderChar?: string;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#pipe}
     */
    pipe?: PrizmTextMaskPipeHandler;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#keepcharpositions}
     */
    keepCharPositions?: boolean;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#showmask}
     */
    showMask?: boolean;
}
