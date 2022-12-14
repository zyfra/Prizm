export function prizmCapitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function prizmGetNumberWithZero(n: number): string {
  if (n < 10) {
    return `0${n}`;
  }
  return n + '';
}
