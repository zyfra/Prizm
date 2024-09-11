/**
 * @internal 'dd.mm.yyyy'.length
 * Used in:
 * - {@link PrizmInputDateComponent}
 * - {@link PrizmInputDateRangeComponent}
 * - {@link PrizmInputDateTimeComponent}
 */
export const PRIZM_DATE_FILLER_LENGTH = 10;
/**
 * @internal
 * Used in {@link PrizmInputDateRangeComponent}
 */
export const PRIZM_DATE_RANGE_FILLER_LENGTH =
  // TODO PRIZM_RANGE_SEPARATOR_CHAR instead of 3
  2 * PRIZM_DATE_FILLER_LENGTH + 3; // + PRIZM_RANGE_SEPARATOR_CHAR.length;
