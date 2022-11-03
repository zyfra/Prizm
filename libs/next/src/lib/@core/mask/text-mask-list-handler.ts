import { PrizmTextMaskConfig } from './text-mask-config';
import { PrizmTextMaskList } from './text-mask-list';

export type PrizmTextMaskListHandler = (
    rawValue: string,
    config: PrizmTextMaskConfig,
) => PrizmTextMaskList | false;
