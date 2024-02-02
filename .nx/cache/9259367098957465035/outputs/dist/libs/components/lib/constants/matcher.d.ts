import { PrizmHandler } from '../types/handler';
import { PrizmIdentityMatcher } from '../types/matcher';
/**
 * Default handler for matching stringified version of an item and a search query
 * @param item arbitrary element to match with a string
 * @param search search query
 * @param stringify handler to turn item into a string
 */
export declare const PRIZM_DEFAULT_MATCHER: <T>(item: T, search: string, stringify?: PrizmHandler<T, string>) => boolean;
/**
 * Default handler for strict matching stringified version of an item and a search query
 * @param item arbitrary element to match with a string
 * @param search search query
 * @param stringify handler to turn item into a string
 */
export declare const PRIZM_STRICT_MATCHER: <T>(item: T, search: string, stringify?: PrizmHandler<T, string>) => boolean;
/**
 * Default handler to match equality of two elements
 * ATTENTION: considers two empty arrays equal
 *
 * @param item1 first element
 * @param item2 second element
 */
export declare const PRIZM_DEFAULT_IDENTITY_MATCHER: PrizmIdentityMatcher<unknown>;
