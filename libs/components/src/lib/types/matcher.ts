import { PrizmStringHandler } from './handler';
import { PrizmMapper } from './mapper';

/**
 * A matcher function to test items against with extra arguments.
 */
export type PrizmMatcher<I> = PrizmMapper<I, boolean>;

export type PrizmStringMatcher<I> = (
  item: I,
  matchValue: string,
  stringify: PrizmStringHandler<I>
) => boolean;

export type PrizmIdentityMatcher<I> = (item1: I, item2: I) => boolean;
