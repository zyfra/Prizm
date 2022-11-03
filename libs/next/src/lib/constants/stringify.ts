import { PrizmStringHandler } from '../types/handler';

/**
 * Default method to turn arbitrary object into string
 */
export const PZM_DEFAULT_STRINGIFY: PrizmStringHandler<unknown> = (item: unknown) => String(item);
