export function prizmIsString(value: unknown): value is string {
  return typeof value === `string`;
}
