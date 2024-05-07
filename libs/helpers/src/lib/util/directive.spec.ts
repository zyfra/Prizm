import { SimpleChanges } from '@angular/core';
import { prizmHasChanges } from './directive';

describe('prizmHasChanges', () => {
  // Тест 1: Функция возвращает false, если объект changes не определен
  test('should return false if changes are undefined', () => {
    expect(prizmHasChanges(undefined, 'propertyName')).toBe(false);
  });

  // Тест 2: Функция возвращает true, если свойство изменилось и не игнорируется первое изменение
  test('should return true if property has changed and first change is not ignored', () => {
    const changes: SimpleChanges = {
      propertyName: {
        currentValue: 'new value',
        previousValue: 'old value',
        firstChange: false,
        isFirstChange: () => false,
      },
    };
    expect(prizmHasChanges(changes, 'propertyName')).toBe(true);
  });

  // Тест 3: Функция возвращает false, если свойство изменилось, но это первое изменение и оно игнорируется
  test('should return false if property has changed but it is the first change and ignored', () => {
    const changes: SimpleChanges = {
      propertyName: {
        currentValue: 'value',
        previousValue: null,
        firstChange: true,
        isFirstChange: () => true,
      },
    };
    expect(prizmHasChanges(changes, 'propertyName', true)).toBe(false);
  });

  // Тест 4: Функция возвращает true, если хотя бы одно из указанных свойств изменилось
  test('should return true if at least one of the specified properties has changed', () => {
    const changes: SimpleChanges = {
      firstProperty: {
        currentValue: 'new value',
        previousValue: 'old value',
        firstChange: false,
        isFirstChange: () => false,
      },
      secondProperty: {
        currentValue: 'new value',
        previousValue: 'old value',
        firstChange: false,
        isFirstChange: () => false,
      },
    };
    expect(prizmHasChanges(changes, ['firstProperty', 'secondProperty'])).toBe(true);
  });

  // Тест 5: Функция возвращает false, если ни одно из указанных свойств не изменилось
  test('should return false if none of the specified properties have changed', () => {
    const changes: SimpleChanges = {
      firstProperty: {
        currentValue: 'value',
        previousValue: 'value',
        firstChange: false,
        isFirstChange: () => false,
      },
      secondProperty: {
        currentValue: 'value',
        previousValue: 'value',
        firstChange: false,
        isFirstChange: () => false,
      },
    };
    expect(prizmHasChanges(changes, ['firstProperty', 'secondProperty'])).toBe(false);
  });
});
