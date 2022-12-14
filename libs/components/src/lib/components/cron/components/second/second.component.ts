import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getArrWithStringNumbers, getCarousel, getCarouselWithZero, prizmConvertSecondToType } from '../../util';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { distinctUntilChanged, filter, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';
import { PrizmCronUiListItem, PrizmCronUiSecondType } from '../../model';
import { PrizmCronUiService } from '../../cron-ui.service';
import { PrizmCronService } from '../../../../services/cron';
import { combineLatest, Observable, of } from 'rxjs';
import { PrizmCronUiSecondState } from '../../cron-ui-second.state';


@Component({
  selector: 'prizm-cron-second',
  styleUrls: [
    './second.component.less',
    '../../cron-sub-element.component.less'
  ],
  templateUrl: './second.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
  ]
})
export class PrizmCronSecondComponent {
  constructor(
    public readonly cronUiState: PrizmCronUiSecondState
  ) {}
}
