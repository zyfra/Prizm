import { PzmTextMaskList } from './text-mask-list';
import { PzmTextMaskListHandler } from './text-mask-list-handler';
import { PzmTextMaskPipeHandler } from './text-mask-pipe-handler';

/**
 * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md}
 */
export interface PzmTextMaskOptions {
    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask}
     */
    mask: PzmTextMaskList | PzmTextMaskListHandler | false;

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
    pipe?: PzmTextMaskPipeHandler;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#keepcharpositions}
     */
    keepCharPositions?: boolean;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#showmask}
     */
    showMask?: boolean;
}
