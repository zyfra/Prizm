import { PrizmDecimal } from '@prizm-ui/core';

export function prizmFormatNumber(num: number, precision: number, decimal: PrizmDecimal = 'never'): string {
  if (precision === Infinity) {
    switch (decimal) {
      case 'not-zero':
        return num.toString().replace(/\.0+$/, '');
      case 'never':
        return Math.round(num).toString();
      default:
        return num.toString();
    }
  }

  switch (decimal) {
    case 'not-zero':
      return (Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)).toString();
    case 'always':
      return num.toFixed(precision);
    case 'never':
    default:
      return Math.round(num).toString();
  }
}
