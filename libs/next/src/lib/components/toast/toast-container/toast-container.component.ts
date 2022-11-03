import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { PrizmToastRef } from '../toast-ref';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmToastPosition } from '../types';
import { PrizmToastService } from '../toast.service';

@Component({
  selector: 'pzm-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PrizmToastContainerComponent implements OnChanges {
  /* get from overlay service after add this component */
  refs$: Observable<PrizmToastRef[]>;

  @Input() containerId?: string;
  @Input() position?: PrizmToastPosition;

  @HostBinding('attr.testId')
  readonly testId = 'pzm_toast_container';

  constructor(private readonly pzmToastService: PrizmToastService) {}

  ngOnChanges(): void {
    this.refs$ = (
      this.containerId ? this.pzmToastService.changes$.pipe(
        map(refs => refs.filter(ref => ref.position === this.containerId)),
      ) : this.refs$
    ) ?? of([])
  }

  public trackByHash(_: number, item: PrizmToastRef): string {
    return item.hash;
  }
}

