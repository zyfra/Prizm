import { prizmFormatNumber } from './prizm-format-number';

describe('formatNumber', () => {
  test('should round number to given precision when decimal is "not-zero"', () => {
    expect(prizmFormatNumber(1.2345, 2, 'not-zero')).toBe('1.23');
    expect(prizmFormatNumber(1.2365, 2, 'not-zero')).toBe('1.24');
    expect(prizmFormatNumber(1, 2, 'not-zero')).toBe('1');
  });

  test('should always return number with given precision when decimal is "always"', () => {
    expect(prizmFormatNumber(1.2345, 2, 'always')).toBe('1.23');
    expect(prizmFormatNumber(1.2365, 2, 'always')).toBe('1.24');
    expect(prizmFormatNumber(1, 2, 'always')).toBe('1.00');
  });

  test('should always return an integer when decimal is "never"', () => {
    expect(prizmFormatNumber(1.2345, 2, 'never')).toBe('1');
    expect(prizmFormatNumber(1.2365, 2, 'never')).toBe('1');
    expect(prizmFormatNumber(1, 2, 'never')).toBe('1');
  });

  test('should handle different precisions when decimal is "not-zero"', () => {
    expect(prizmFormatNumber(1.2345, 1, 'not-zero')).toBe('1.2');
    expect(prizmFormatNumber(1.2365, 3, 'not-zero')).toBe('1.237');
    expect(prizmFormatNumber(1, 0, 'not-zero')).toBe('1');
  });

  test('should handle different precisions when decimal is "always"', () => {
    expect(prizmFormatNumber(1.2345, 1, 'always')).toBe('1.2');
    expect(prizmFormatNumber(1.2365, 3, 'always')).toBe('1.236');
    expect(prizmFormatNumber(1, 0, 'always')).toBe('1');
  });

  test('should ignore precision when decimal is "never"', () => {
    expect(prizmFormatNumber(1.2345, 1, 'never')).toBe('1');
    expect(prizmFormatNumber(1.2365, 3, 'never')).toBe('1');
    expect(prizmFormatNumber(1, 0, 'never')).toBe('1');
  });

  test('should handle precision of Infinity', () => {
    expect(prizmFormatNumber(1.2345, Infinity, 'not-zero')).toBe('1.2345');
    expect(prizmFormatNumber(1.2365, Infinity, 'always')).toBe('1.2365');
    expect(prizmFormatNumber(1.2365, Infinity, 'never')).toBe('1');
  });
});
