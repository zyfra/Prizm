import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { TabType } from '../tabs.interface';

@Component({
  selector: 'zui-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @Input() @HostBinding('attr.tab-type') public type: TabType;
  @Input() icon: string = null;
  @Input() title: string | number = '';
  @Input() count = 0;
  @Input() closable: boolean;
  @Input() isActive = false;
  @Input() disabled = false;

  @Output() cancelClick: EventEmitter<void> = new EventEmitter();
  @Output() public tabClick: EventEmitter<void> = new EventEmitter();

  @HostBinding('attr.testId')
  readonly testId = 'pzm_tab';

  public cancel(event: MouseEvent): void {
    event.stopPropagation();
    this.cancelClick.emit();
  }

  public tabChoose(): void {
    this.tabClick.emit();
  }
}
