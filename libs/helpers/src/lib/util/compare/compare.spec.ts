import { Compare } from './compare'; // Импортируем класс Compare

describe('Compare class', () => {
  describe('isTruthy', () => {
    test('returns true for truthy values', () => {
      expect(Compare.isTruthy(1)).toBe(true);
      expect(Compare.isTruthy('text')).toBe(true);
      expect(Compare.isTruthy(true)).toBe(true);
    });

    test('returns false for falsy values', () => {
      expect(Compare.isTruthy(0)).toBe(false);
      expect(Compare.isTruthy('')).toBe(false);
      expect(Compare.isTruthy(false)).toBe(false);
    });
  });

  describe('isFalsy', () => {
    test('returns true for falsy values', () => {
      expect(Compare.isFalsy(0)).toBe(true);
      expect(Compare.isFalsy('')).toBe(true);
      expect(Compare.isFalsy(false)).toBe(true);
    });

    test('returns false for truthy values', () => {
      expect(Compare.isFalsy(1)).toBe(false);
      expect(Compare.isFalsy('text')).toBe(false);
      expect(Compare.isFalsy(true)).toBe(false);
    });
  });

  describe('isUndefined', () => {
    test('returns true for undefined', () => {
      expect(Compare.isUndefined(undefined)).toBe(true);
    });

    test('returns false for defined values', () => {
      expect(Compare.isUndefined(null)).toBe(false);
      expect(Compare.isUndefined(0)).toBe(false);
      expect(Compare.isUndefined('')).toBe(false);
    });
  });

  describe('isNullish', () => {
    test('returns true for null and undefined', () => {
      expect(Compare.isNullish(null)).toBe(true);
      expect(Compare.isNullish(undefined)).toBe(true);
    });

    test('returns false for non-nullish values', () => {
      expect(Compare.isNullish(0)).toBe(false);
      expect(Compare.isNullish('')).toBe(false);
      expect(Compare.isNullish(false)).toBe(false);
    });
  });

  describe('isNotNullish', () => {
    test('returns true for non-nullish values', () => {
      expect(Compare.isNotNullish(0)).toBe(true);
      expect(Compare.isNotNullish('text')).toBe(true);
      expect(Compare.isNotNullish(true)).toBe(true);
    });

    test('returns false for null and undefined', () => {
      expect(Compare.isNotNullish(null)).toBe(false);
      expect(Compare.isNotNullish(undefined)).toBe(false);
    });
  });

  describe('isNull', () => {
    test('returns true for null', () => {
      expect(Compare.isNull(null)).toBe(true);
    });

    test('returns false for non-null values', () => {
      expect(Compare.isNull(undefined)).toBe(false);
      expect(Compare.isNull(0)).toBe(false);
      expect(Compare.isNull('')).toBe(false);
    });
  });

  describe('isEqualDates', () => {
    test('returns true for equal dates', () => {
      const date1 = new Date('2020-01-01');
      const date2 = new Date('2020-01-01');
      expect(Compare.isEqualDates(date1, date2)).toBe(true);
    });

    test('returns false for different dates', () => {
      const date1 = new Date('2020-01-01');
      const date2 = new Date('2020-01-02');
      expect(Compare.isEqualDates(date1, date2)).toBe(false);
    });

    test('returns true for the same date object', () => {
      const date = new Date('2020-01-01');
      expect(Compare.isEqualDates(date, date)).toBe(true);
    });
  });
});
