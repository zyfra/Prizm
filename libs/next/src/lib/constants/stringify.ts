import { ZuiStringHandler } from '../types/handler';

/**
 * Default method to turn arbitrary object into string
 */
export const ZUI_DEFAULT_STRINGIFY: ZuiStringHandler<unknown> = (item: unknown) => String(item);
