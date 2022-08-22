import { ZuiStringHandler } from './handler';
import { ZuiMapper } from './mapper';

/**
 * A matcher function to test items against with extra arguments.
 */
export type ZuiMatcher<I> = ZuiMapper<I, boolean>;

export type ZuiStringMatcher<I> = (
    item: I,
    matchValue: string,
    stringify: ZuiStringHandler<I>,
) => boolean;

export type ZuiIdentityMatcher<I> = (item1: I, item2: I) => boolean;
