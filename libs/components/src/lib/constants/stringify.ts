import { PrizmStringHandler } from '../types/handler';

/**
 * Default method to turn arbitrary object into string
 */
export const PRIZM_DEFAULT_STRINGIFY: PrizmStringHandler<unknown> = (item: unknown) => String(item);
