export function prizmInvertObject<K extends string | number | symbol, V extends string | number | symbol>(
  obj: Record<K, V>
): Record<V, K> {
  const invertedObj = {} as Record<V, K>;

  for (const key in obj) {
    if (obj[key]) {
      const value = obj[key];
      if ((value == null && value && typeof value === 'object') || typeof value === 'function')
        throw new Error('Passed to prizmInvertObject values that has not primitive value');
      invertedObj[value] = key as K;
    }
  }

  return invertedObj;
}
