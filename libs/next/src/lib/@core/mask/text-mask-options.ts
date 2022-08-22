import { ZuiTextMaskList } from './text-mask-list';
import { ZuiTextMaskListHandler } from './text-mask-list-handler';
import { ZuiTextMaskPipeHandler } from './text-mask-pipe-handler';

/**
 * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md}
 */
export interface ZuiTextMaskOptions {
    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask}
     */
    mask: ZuiTextMaskList | ZuiTextMaskListHandler | false;

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
    pipe?: ZuiTextMaskPipeHandler;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#keepcharpositions}
     */
    keepCharPositions?: boolean;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#showmask}
     */
    showMask?: boolean;
}
