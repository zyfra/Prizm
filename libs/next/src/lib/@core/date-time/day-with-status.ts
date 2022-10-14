import { ZuiDay } from "./day";

export type ZuiDayWithStatusColor = 'index' | 'warning' | 'success' | 'danger' | string;

export class ZuiDayWithStatus extends ZuiDay {
  constructor(
    year: number,
    month: number,
    day: number,
    readonly status: ZuiDayWithStatusColor,
  ) {
    super(year, month, day);
  }
}
