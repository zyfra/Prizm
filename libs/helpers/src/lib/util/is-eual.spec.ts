import { isEqual } from './is-equal';

describe('isEqual function', () => {
  // Тест для примитивных значений
  test('should return true for equal numbers', () => {
    expect(isEqual(1, 1)).toBe(true);
  });

  test('should return false for different numbers', () => {
    expect(isEqual(1, 2)).toBe(false);
  });

  // Тест для строк
  test('should return true for equal strings', () => {
    expect(isEqual('text', 'text')).toBe(true);
  });

  test('should return false for different strings', () => {
    expect(isEqual('text', 'another text')).toBe(false);
  });

  // Тест для объектов (глубокое сравнение)
  test('should return true for equal objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  test('should return false for different objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  // Тест для массивов
  test('should return true for equal arrays', () => {
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('should return false for different arrays', () => {
    expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
  });

  // Тест для null и undefined
  test('should return true for both null', () => {
    expect(isEqual(null, null)).toBe(true);
  });

  test('should return false for null and undefined', () => {
    expect(isEqual(null, undefined)).toBe(false);
  });

  // Тест для разных типов
  test('should return false for different types', () => {
    expect(isEqual('1', 1)).toBe(false); // строка и число
  });
});
