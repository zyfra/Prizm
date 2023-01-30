import { Injectable } from '@angular/core';
import { PrizmCronUiBaseType } from './model';
import { PrizmCronUiBaseState } from './cron-ui-base.state';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmCronService } from '../../services/cron';

@Injectable()
export class PrizmCronUiSecondState extends PrizmCronUiBaseState {
  constructor(public readonly cron: PrizmCronService, public readonly destroy$: PrizmDestroyService) {
    super(cron.second$, PrizmCronUiBaseType.every, PrizmCronUiBaseType);
  }

  public updateMainState(value: string): void {
    this.cron.updateWith({
      second: value,
    });
  }
}
