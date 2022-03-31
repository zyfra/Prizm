import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ZyfraInputGroupControl } from '../zyfra-input-group-control.class';

@Component({
  selector: 'zyfra-input-group-clear',
  templateUrl: './zyfra-input-group-clear.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZyfraInputGroupClearComponent {
  @Input() control: ZyfraInputGroupControl<any>;

  public onClearClick(): void {
    this.control?.ngControl.reset();
  }
}
