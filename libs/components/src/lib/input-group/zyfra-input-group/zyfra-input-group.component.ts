import { Component, ChangeDetectionStrategy, ContentChild, Input, AfterContentInit } from '@angular/core';
import { ZyfraInputGroupClearComponent } from '../zyfra-input-group-clear/zyfra-input-group-clear.component';
import { ZyfraInputGroupControl } from '../zyfra-input-group-control.class';

@Component({
  selector: 'zyfra-input-group',
  templateUrl: './zyfra-input-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraInputGroupComponent implements AfterContentInit {
  @Input() label: string;

  @ContentChild(ZyfraInputGroupControl, { static: true }) control: ZyfraInputGroupControl<any>;
  @ContentChild(ZyfraInputGroupClearComponent) clearComponent: ZyfraInputGroupClearComponent;

  ngAfterContentInit(): void {
    if (this.clearComponent) {
      this.clearComponent.control = this.control;
    }
  }
}
