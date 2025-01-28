import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { PrizmTableCellStatus } from '../table.types';
import { PrizmTdService } from './td.service';
import { PrizmTestIdDirective } from '@prizm-ui/helpers';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `th[prizmTd], td[prizmTd]`,
  template: ` <ng-content></ng-content> `,
  styleUrls: [`./td.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: PrizmTestIdDirective,
      inputs: ['testId'],
    },
  ],
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

  private readonly testIdDirective = inject(PrizmTestIdDirective, { host: true });

  constructor(
    private readonly tdService: PrizmTdService,
    private readonly elementRef: ElementRef<HTMLTableCellElement>
  ) {
    this.testIdDirective.generateMainTestId = 'ui_table_td';
  }

  public ngOnInit(): void {
    this.tdService.increment(parseInt(this.realColspan.toString(), 10));
  }

  public ngOnDestroy(): void {
    this.tdService.decrement(parseInt(this.realColspan.toString(), 10));
  }
}
