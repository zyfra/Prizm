import { Injectable } from '@angular/core';
import { PrizmCronUiBaseType } from './model';
import { getArrWithStringNumbers, getCarousel } from './util';
import { PrizmCronService } from '@prizm-ui/components';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Injectable()
export class PrizmCronUiSecondState extends PrizmCronUiBaseState {
  constructor(
    public readonly cron: PrizmCronService,
    public readonly destroy$: PrizmDestroyService
  ) {
    super(
      cron.second$,
      PrizmCronUiBaseType.every,
      {
        value: {
          start: '0',
          end: '1',
        },
        list: {
          start: getCarousel(60, 0),
          end: getCarousel(60, 0)
        }
      },
      {
        value: ['0'],
        list: getArrWithStringNumbers(60, 0, false).map(
          (i, idx) => ({
            key: i,
            value: idx + 1 + '',
          })
        )
      },
      {
        list: {
          on: getCarousel(60, 0),
          after: getCarousel(60, 0),
        },
        value: {
          on: '1',
          after: '0'
        }
      }
    );
  }

  public updateLocalState(value: string, type: PrizmCronUiBaseType): void {
    switch (type) {
      case PrizmCronUiBaseType.between: {
        const arr = value.split('-');
        const start = arr[1] ?? '0';
        const end = arr[0] ?? '0';

        this.updatePartial(
          {
            type: PrizmCronUiBaseType.between,
            between: {
              start: start,
              end: end,
            }
          }
        )
      }
      break;
      case PrizmCronUiBaseType.every:
        this.updatePartial({
          type: PrizmCronUiBaseType.every,
        })
        break;
      case PrizmCronUiBaseType.specified:
        this.updatePartial({
          type: PrizmCronUiBaseType.specified,
          specified: value.split(',')
        });
        break;

      case PrizmCronUiBaseType.after: {
        const arr = value.split('/');
        const on = arr[1] ?? '0';
        const after = arr[0] ?? '0';

        this.updatePartial({
          type: PrizmCronUiBaseType.after,
          everyChosenTimesAfterChosen: {
            on: on,
            after: after
          }
        });
      }
      break;
    }
  }

  public updateMainState(value: string): void {
    this.cron.updateWith({
      second: value
    });
  }
}
