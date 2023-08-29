import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
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
  colspan!: string | number;

  @HostBinding(`class._editable`)
  @ContentChild(NgControl)
  readonly control: unknown;

  @HostBinding('attr.colspan')
  get realColspan(): number | string {
    return this.colspan ?? this.elementRef?.nativeElement?.getAttribute('colspan') ?? 1;
  }

  constructor(
    private readonly tdService: PrizmTdService,
    private readonly elementRef: ElementRef<HTMLTableCellElement>
  ) {}

  public ngOnInit(): void {
    this.tdService.increment(parseInt(this.realColspan.toString(), 10));
  }

  public ngOnDestroy(): void {
    this.tdService.decrement(parseInt(this.realColspan.toString(), 10));
  }
}
