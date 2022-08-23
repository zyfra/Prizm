import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PolymorphContent } from '../../../directives/polymorph';
import { ZuiToastRef } from '../toast-ref';

@Component({
  selector: 'zui-toast-single',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  // TODO remove record to context type
  get context(): Record<string, any> {
    return this.toastRef as Record<string, any>
  }
  get temp(): PolymorphContent {
    return this.toastRef.content
  }
  constructor(public readonly toastRef: ZuiToastRef) {
  }
}
