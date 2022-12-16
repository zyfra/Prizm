import { Injectable } from '@angular/core';
import { PrizmCronUiDayType } from './model';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronService } from '../../services/cron';
import { getArrWithStringNumbers, getCarousel } from './util';

@Injectable()
export class PrizmCronUiDayState extends PrizmCronUiBaseState<
  typeof PrizmCronUiDayType,
  PrizmCronUiDayType
> {
  constructor(
    public readonly cron: PrizmCronService,
    public readonly destroy$: PrizmDestroyService
  ) {
    super(
      cron.minute$,
      PrizmCronUiDayType.every,
      PrizmCronUiDayType,
      {
        value: {
          start: '0',
          end: '1',
        },
        list: {
          start: getCarousel(24, 0),
          end: getCarousel(24, 0),
        }
      },
      {
        value: ['0'],
        list: getArrWithStringNumbers(24, 0, false).map(
          (i, idx) => ({
            key: i,
            value: i,
          })
        )
      },
      {
        list: {
          on: getCarousel(24, 1),
          after: getCarousel(24, 0),
        },
        value: {
          on: '1',
          after: '0'
        }
      }
    );
  }

  public updateMainState(value: string): void {
    this.cron.updateWith({
      minute: value
    });
  }
}
