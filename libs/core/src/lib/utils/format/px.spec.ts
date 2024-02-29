import { prizmPx } from './px';

describe('prizmPx', () => {
  it('converts a simple integer to pixels', () => {
    expect(prizmPx(10)).toBe('10px');
  });

  it('converts a large integer to pixels', () => {
    expect(prizmPx(1000)).toBe('1000px');
  });

  it('converts a floating point number to pixels', () => {
    expect(prizmPx(10.5)).toBe('10.5px');
  });

  it('handles zero as an input', () => {
    expect(prizmPx(0)).toBe('0px');
  });

  it('handles negative numbers', () => {
    expect(prizmPx(-20)).toBe('-20px');
  });
});
