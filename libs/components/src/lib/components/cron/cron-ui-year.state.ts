import { Injectable } from '@angular/core';
import { PrizmCronUiBaseType } from './model';
import { getCarousel } from './util';
import { PrizmCarouselArrayContent, PrizmCronService } from '@prizm-ui/components';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Injectable()
export class PrizmCronUiYearState extends PrizmCronUiBaseState {
  readonly currentYear = new Date().getFullYear();

  constructor(
    public readonly cron: PrizmCronService,
    public readonly destroy$: PrizmDestroyService
  ) {
    super(
      cron.year$,
      PrizmCronUiBaseType.every,
      PrizmCronUiBaseType,
      {
        value: {
          start: new Date().getFullYear().toString(),
          end: new Date().getFullYear().toString(),
        },
        list: {
          start: new PrizmCarouselArrayContent(
            getYears()
          ),
          end: new PrizmCarouselArrayContent(
            getYears()
          )
        }
      },
      {
        value: [],
        list: getYears().map(
          (value) => ({
            key: value,
            value: value,
          })
        )
      },
      {
        list: {
          on: getCarousel(83, 1),
          after: new PrizmCarouselArrayContent(
            getYears()
          ),
        },
        value: {
          on: '1',
          after: new Date().getFullYear().toString()
        }
      }
    );
  }

  public updateMainState(value: string): void {
    this.cron.updateWith({
      year: value
    });
  }

  private getYears(): string[] {
    return Array.from({length: 50}).map(
      (_, idx) => idx + this.currentYear + ''
    )
  }
}

function getYears(length = 50, from =  new Date().getFullYear()): string[] {
  return Array.from({length: 50}).map(
    (_, idx) => idx + from + ''
  )
}
