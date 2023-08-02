import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { PrizmTableCellStatus } from '../table.types';
import { PrizmTdService } from './td.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `th[prizmTd], td[prizmTd]`,
  template: ` <ng-content></ng-content> `,
  styleUrls: [`./td.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTdComponent implements OnInit, OnDestroy {
  @Input() @HostBinding('attr.status') public status: PrizmTableCellStatus = 'default';

  @Input()
  @HostBinding('attr.colspan')
  colspan: string | number = 1;

  @HostBinding(`class._editable`)
  @ContentChild(NgControl)
  readonly control: unknown;

  constructor(private readonly tdService: PrizmTdService) {}

  public ngOnInit(): void {
    this.tdService.increment(parseInt(this.colspan.toString(), 10));
  }

  public ngOnDestroy(): void {
    this.tdService.decrement(parseInt(this.colspan.toString(), 10));
  }
}
