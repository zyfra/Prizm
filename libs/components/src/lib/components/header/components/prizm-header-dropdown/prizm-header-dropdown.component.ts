import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IScreen } from './../../../navigation/navigation.interfaces';

@Component({
  selector: 'prizm-header-dropdown',
  templateUrl: './prizm-header-dropdown.component.html',
  styleUrls: ['./prizm-header-dropdown.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmHeaderDropdownComponent {
  @Input() public data: IScreen[] = [];
  @Input() public currentScreenIdx = 0;
  @Output() screenIdxChange: EventEmitter<number> = new EventEmitter<number>();

  public openDropdown = false;

  public changeScreen(idx: number): void {
    if (this.currentScreenIdx === idx) return;

    this.currentScreenIdx = idx;
    this.openDropdown = false;
    this.screenIdxChange.emit(idx);
  }
}
