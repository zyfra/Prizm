import { PrizmTimeLike } from '../../types/time-like';
import { PrizmTimeMode } from '../../types/time-mode';
import { prizmInRange } from '../../util/math/in-range';
import {
  PRIZM_HOURS_IN_DAY,
  PRIZM_MILLISECONDS_IN_DAY,
  PRIZM_MILLISECONDS_IN_HOUR,
  PRIZM_MILLISECONDS_IN_MINUTE,
  PRIZM_MINUTES_IN_HOUR,
  PRIZM_SECONDS_IN_MINUTE,
} from './date-time';
import { prizmPadStart } from '@prizm-ui/core';
import { PrizmTime } from './time';

/**
 * Immutable time object with hours, minutes, seconds and ms
 */
export class PrizmTimeRange {
  constructor(public from: PrizmTime, public to: PrizmTime) {}

  public toString(timeMode: PrizmTimeMode, timeSeparator = ' - '): string {
    return `${this.from.toString(timeMode)}${timeSeparator}${this.to.toString(timeMode)}`;
  }
}
