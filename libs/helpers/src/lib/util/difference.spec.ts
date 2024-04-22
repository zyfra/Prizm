import { prizmHasChanges } from './directive';
import { SimpleChanges } from '@angular/core';

describe('prizmHasChanges', () => {
  it('should return false if changes is undefined', () => {
    expect(prizmHasChanges(undefined, 'test')).toBe(false);
  });

  it('should return false if named change does not exist', () => {
    const changes = { other: {} } as unknown as SimpleChanges;
    expect(prizmHasChanges(changes, 'test')).toBe(false);
  });

  it('should return true if named change exists', () => {
    const changes = { test: {} } as unknown as SimpleChanges;
    expect(prizmHasChanges(changes, 'test')).toBe(true);
  });

  it('should handle array of names', () => {
    const changes = { test: {}, other: {} } as unknown as SimpleChanges;
    expect(prizmHasChanges(changes, ['test', 'other'])).toBe(true);
  });

  it('should handle one of names', () => {
    const changes = { test: {}, other: {} } as unknown as SimpleChanges;
    expect(prizmHasChanges(changes, ['test'])).toBe(true);
  });

  it('should handle change if one of names does not exist', () => {
    const changes = { other: {} } as unknown as SimpleChanges;
    expect(prizmHasChanges(changes, ['test'])).toBe(false);
  });

  it('should ignore first change if specified', () => {
    const changes = { test: { isFirstChange: () => true } } as unknown as SimpleChanges;
    expect(prizmHasChanges(changes, 'test', true)).toBe(false);
  });
});
