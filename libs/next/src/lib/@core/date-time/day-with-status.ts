import { PzmDay } from "./day";

export type PzmDayWithStatusColor = 'index' | 'warning' | 'success' | 'danger' | string;

export class PzmDayWithStatus extends PzmDay {
  constructor(
    year: number,
    month: number,
    day: number,
    readonly status: PzmDayWithStatusColor,
  ) {
    super(year, month, day);
  }
}
