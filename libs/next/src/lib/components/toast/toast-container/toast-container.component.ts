import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { PzmToastRef } from '../toast-ref';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PzmToastPosition } from '../types';
import { PzmToastService } from '../toast.service';

@Component({
  selector: 'pzm-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PzmToastContainerComponent implements OnChanges {
  /* get from overlay service after add this component */
  refs$: Observable<PzmToastRef[]>;

  @Input() containerId?: string;
  @Input() position?: PzmToastPosition;

  @HostBinding('attr.testId')
  readonly testId = 'pzm_toast_container';

  constructor(private readonly pzmToastService: PzmToastService) {}

  ngOnChanges(): void {
    this.refs$ = (
      this.containerId ? this.pzmToastService.changes$.pipe(
        map(refs => refs.filter(ref => ref.position === this.containerId)),
      ) : this.refs$
    ) ?? of([])
  }

  public trackByHash(_: number, item: PzmToastRef): string {
    return item.hash;
  }
}

