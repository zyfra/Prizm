import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToastService } from '@digital-plant/zyfra-components';

@Component({
  selector: 'zyfra-toast-test',
  templateUrl: './toast-test.component.html',
  styleUrls: ['./toast-test.component.less'],
  providers: [ToastService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastTestComponent {
  constructor(private toast: ToastService) {}

  public showMessage(key?: string): void {
    this.toast.add({ key, severity: 'success', summary: 'Summary Text', detail: 'Detail Text' });
  }
}
