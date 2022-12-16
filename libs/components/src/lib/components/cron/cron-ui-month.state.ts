import { Injectable } from '@angular/core';
import { PrizmCronUiBaseType } from './model';
import { getCarousel } from './util';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PRIZM_CRON_UI_MONTH_CRON_KEYS } from './const';
import { PrizmCronService } from '../../services/cron';

@Injectable()
export class PrizmCronUiMonthState extends PrizmCronUiBaseState {
  constructor(
    public readonly cron: PrizmCronService,
    public readonly destroy$: PrizmDestroyService
  ) {
    super(
      cron.month$,
      PrizmCronUiBaseType.every,
      PrizmCronUiBaseType,
      {
        value: {
          start: '1',
          end: '2',
        },
        list: {
          start: getCarousel(12, 1),
          end: getCarousel(12, 1)
        }
      },
      {
        value: [],
        list: Object.values(PRIZM_CRON_UI_MONTH_CRON_KEYS).map(
          (value, idx) => ({
            key: PRIZM_CRON_UI_MONTH_CRON_KEYS[idx],
            value: idx.toString(),
          })
        )
      },
      {
        list: {
          on: getCarousel(12, 1),
          after: getCarousel(12, 1),
        },
        value: {
          on: '2',
          after: '1'
        }
      }
    );
  }

  public updateMainState(value: string): void {
    this.cron.updateWith({
      month: value
    });
  }
}
