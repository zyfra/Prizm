import { PzmDay } from "./day";

export type ZuiDayWithStatusColor = 'index' | 'warning' | 'success' | 'danger' | string;

export class PzmDayWithStatus extends PzmDay {
  constructor(
    year: number,
    month: number,
    day: number,
    readonly status: ZuiDayWithStatusColor,
  ) {
    super(year, month, day);
  }
}
