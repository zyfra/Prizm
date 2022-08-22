import { ZuiTextMaskConfig } from './text-mask-config';
import { ZuiTextMaskList } from './text-mask-list';

export type ZuiTextMaskListHandler = (
    rawValue: string,
    config: ZuiTextMaskConfig,
) => ZuiTextMaskList | false;
