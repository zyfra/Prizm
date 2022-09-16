import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { ZuiToastRef } from '../toast-ref';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ZuiToastPosition } from '../types';
import { ZuiToastService } from '../toast.service';

@Component({
  selector: 'zui-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ZuiToastContainerComponent implements OnChanges {
  /* get from overlay service after add this component */
  refs$: Observable<ZuiToastRef[]>;

  @Input() containerId?: string;
  @Input() position?: ZuiToastPosition;

  @HostBinding('attr.testId')
  readonly testId = 'zui_toast_container';

  constructor(private readonly zuiToastService: ZuiToastService) {}

  ngOnChanges(): void {
    this.refs$ = (
      this.containerId ? this.zuiToastService.changes$.pipe(
        map(refs => refs.filter(ref => ref.position === this.containerId)),
      ) : this.refs$
    ) ?? of([])
  }

  public trackByHash(_: number, item: ZuiToastRef): string {
    return item.hash;
  }
}

