import { Injectable } from '@angular/core';
import { PrizmCronUiBaseType } from './model';
import { getArrWithStringNumbers, getCarousel } from './util';
import { PrizmCronService } from '@prizm-ui/components';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Injectable()
export class PrizmCronUiMinuteState extends PrizmCronUiBaseState {
  constructor(
    public readonly cron: PrizmCronService,
    public readonly destroy$: PrizmDestroyService
  ) {
    super(
      cron.minute$,
      PrizmCronUiBaseType.every,
      PrizmCronUiBaseType
    );
  }

  public updateMainState(value: string): void {
    this.cron.updateWith({
      minute: value
    });
  }
}
