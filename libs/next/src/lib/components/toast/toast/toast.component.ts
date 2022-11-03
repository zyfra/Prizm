import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { PolymorphContent } from '../../../directives/polymorph';
import { PzmToastRef } from '../toast-ref';

@Component({
  selector: 'pzm-toast-single',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  @HostBinding('attr.testId')
  readonly testId = 'pzm_toast_single';

  // TODO remove record to context type
  get context(): Record<string, any> {
    return this.toastRef as Record<string, any>
  }
  get temp(): PolymorphContent {
    return this.toastRef.content
  }
  constructor(public readonly toastRef: PzmToastRef) {
  }
}
