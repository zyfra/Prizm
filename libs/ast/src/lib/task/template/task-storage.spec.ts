import { PrizmTemplateTaskStorage } from './task-storage';

describe('PrizmTemplateTaskStorage', () => {
  let storage: PrizmTemplateTaskStorage;

  beforeEach(() => {
    storage = new PrizmTemplateTaskStorage();
  });

  test('should set and get values by type', () => {
    const type = 'test-type';
    const value = { key: 'value' };

    storage.setByType(type, value);
    const result = storage.getByType(type);

    expect(result).toEqual(value);
  });

  test('should return null if type is not found', () => {
    const nonExistentType = 'nonexistent-type';
    const result = storage.getByType(nonExistentType);

    expect(result).toBeNull();
  });

  test('should update values by type', () => {
    const type = 'test-type';
    const initialValue = { key1: 'value1' };
    const newValue = { key2: 'value2' };

    storage.setByType(type, initialValue);
    storage.updateByType(type, newValue);
    const result = storage.getByType(type);

    expect(result).toEqual({ ...initialValue, ...newValue });
  });

  test('should set new values when updating non-existent type', () => {
    const nonExistentType = 'nonexistent-type';
    const newValue = { key: 'value' };

    storage.updateByType(nonExistentType, newValue);
    const result = storage.getByType(nonExistentType);

    expect(result).toEqual(newValue);
  });
});
