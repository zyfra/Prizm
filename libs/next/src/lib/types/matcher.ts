import { PzmStringHandler } from './handler';
import { PzmMapper } from './mapper';

/**
 * A matcher function to test items against with extra arguments.
 */
export type PzmMatcher<I> = PzmMapper<I, boolean>;

export type PzmStringMatcher<I> = (
    item: I,
    matchValue: string,
    stringify: PzmStringHandler<I>,
) => boolean;

export type PzmIdentityMatcher<I> = (item1: I, item2: I) => boolean;
