export function isValidDate(value: unknown): boolean {
  return value instanceof Date && !isEmpty(value);
}

function isEmpty(value: unknown): boolean {
  return (
    value === null ||
    value === undefined ||
    value === '' ||
    (Array.isArray(value) && value.length === 0) ||
    (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0)
  );
}
