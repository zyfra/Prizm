export function prizmCloneDeep<T>(value: T): T {
  if (typeof value === 'function') {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.getTime()) as any;
  }

  if (typeof value !== 'object' || value === null) {
    return value;
  }

  let copy: any;

  if (Array.isArray(value)) {
    copy = value.map(v => prizmCloneDeep(v));
  } else {
    copy = Object.assign({}, value);
    Object.keys(copy).forEach(k => {
      copy[k] = prizmCloneDeep(copy[k]);
    });
  }

  return copy;
}
