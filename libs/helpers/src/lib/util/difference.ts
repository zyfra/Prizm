export function difference<T>(array: T[], ...values: T[][]): T[] {
  if (!array || !Array.isArray(array) || array.length === 0) {
    return [];
  }
  if (!values || values.length === 0) {
    return [...array];
  }

  // Объединяем все массивы значений в один для упрощения исключения.
  const excludeValues = values.flat();

  // Фильтруем основной массив, исключая элементы, присутствующие в excludeValues.
  // Используется SameValueZero сравнение через includes.
  const result = array.filter(item => !excludeValues.includes(item));

  return result;
}
