import { PzmStringHandler } from '../types/handler';

/**
 * Default method to turn arbitrary object into string
 */
export const PZM_DEFAULT_STRINGIFY: PzmStringHandler<unknown> = (item: unknown) => String(item);
