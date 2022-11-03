export function pzmIsPresent<T>(value?: T | null): value is T {
  return value !== null && value !== undefined;
}
