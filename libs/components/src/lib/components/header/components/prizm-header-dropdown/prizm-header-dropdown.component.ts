import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IScreen } from './../../../navigation/navigation.interfaces';
import { CommonModule } from '@angular/common';
import { PrizmIconModule } from '../../../icon';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmDropdownHostModule } from '../../../dropdowns/dropdown-host';
import { PrizmDataListModule } from '../../../data-list';
import { PrizmButtonModule } from '../../../button';
import { PrizmHintModule } from '../../../../directives';

@Component({
  selector: 'prizm-header-dropdown',
  templateUrl: './prizm-header-dropdown.component.html',
  styleUrls: ['./prizm-header-dropdown.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    PrizmIconModule,
    PrizmThemeModule,
    PrizmDropdownHostModule,
    PrizmDataListModule,
    PrizmButtonModule,
    PrizmHintModule,
  ],
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
