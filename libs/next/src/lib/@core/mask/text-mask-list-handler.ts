import { PzmTextMaskConfig } from './text-mask-config';
import { PzmTextMaskList } from './text-mask-list';

export type PzmTextMaskListHandler = (
    rawValue: string,
    config: PzmTextMaskConfig,
) => PzmTextMaskList | false;
