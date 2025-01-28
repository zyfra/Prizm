import { PrizmDay } from './day';

export type PrizmDayWithStatusColor = 'index' | 'warning' | 'success' | 'danger' | string;

export class PrizmDayWithStatus extends PrizmDay {
  constructor(year: number, month: number, day: number, readonly status: PrizmDayWithStatusColor) {
    super(year, month, day);
  }
}
