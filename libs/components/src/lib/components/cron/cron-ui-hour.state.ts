import { Injectable } from '@angular/core';
import { PrizmCronUiBaseType } from './model';
import { getArrWithStringNumbers, getCarousel } from './util';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronService } from '../../services/cron';

@Injectable()
export class PrizmCronUiHourState extends PrizmCronUiBaseState {
  constructor(
    public readonly cron: PrizmCronService,
    public readonly destroy$: PrizmDestroyService
  ) {
    super(
      cron.hour$,
      PrizmCronUiBaseType.every,
      PrizmCronUiBaseType,
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
      hour: value
    });
  }
}
