import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { PolymorphContent } from '../../../directives/polymorph';
import { PrizmToastRef } from '../toast-ref';

@Component({
  selector: 'prizm-toast-single',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  @HostBinding('attr.testId')
  readonly testId = 'prizm_toast_single';

  // TODO remove record to context type
  get context(): Record<string, any> {
    return this.toastRef as Record<string, any>;
  }
  get temp(): PolymorphContent {
    return this.toastRef.content;
  }
  constructor(public readonly toastRef: PrizmToastRef) {}
}
