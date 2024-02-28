import { prizmIsValidSizeString } from './size';

describe('prizmIsValidSizeString', () => {
  it('should return true for a valid pixel value', () => {
    expect(prizmIsValidSizeString('16px')).toBe(true);
  });

  it('should return true for a valid rem value', () => {
    expect(prizmIsValidSizeString('1.5rem')).toBe(true);
  });

  it('should return false for a value without a unit', () => {
    expect(prizmIsValidSizeString('16')).toBe(false);
  });

  it('should return false for a unit without a value', () => {
    expect(prizmIsValidSizeString('px')).toBe(false);
  });

  it('should return false for a value with an invalid unit', () => {
    expect(prizmIsValidSizeString('10pt')).toBe(false); // 'pt' is not in the valid units list
  });

  it('should return false for an empty string', () => {
    expect(prizmIsValidSizeString('')).toBe(false);
  });

  it('should return true for a valid value with decimal and valid unit', () => {
    expect(prizmIsValidSizeString('0.5vh')).toBe(true);
  });

  it('should return false for a string with spaces', () => {
    expect(prizmIsValidSizeString('16 px')).toBe(false); // Space between number and unit
  });

  it('should return false for a negative value', () => {
    expect(prizmIsValidSizeString('-16px')).toBe(false); // Negative values are not accounted for in the regex
  });
});
