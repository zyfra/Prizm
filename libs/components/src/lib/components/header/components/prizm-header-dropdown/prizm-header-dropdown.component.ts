import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { IScreen } from './../../../navigation/navigation.interfaces';
import { CommonModule } from '@angular/common';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmDropdownHostModule } from '../../../dropdowns/dropdown-host';
import { PrizmDataListComponent } from '../../../data-list';
import { PrizmButtonComponent } from '../../../button';
import { PrizmHintDirective } from '../../../../directives';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { prizmIconsFolder } from '@prizm-ui/icons/full/source';
import { prizmIconsAngleRight } from '@prizm-ui/icons/base/source';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';

@Component({
  selector: 'prizm-header-dropdown',
  templateUrl: './prizm-header-dropdown.component.html',
  styleUrls: ['./prizm-header-dropdown.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    PrizmThemeModule,
    PrizmDropdownHostModule,
    PrizmDataListComponent,
    PrizmButtonComponent,
    PrizmHintDirective,
    PrizmIconsFullComponent,
  ],
})
export class PrizmHeaderDropdownComponent {
  @Input() public data: IScreen[] = [];
  @Input() public currentScreenIdx = 0;
  @Output() screenIdxChange: EventEmitter<number> = new EventEmitter<number>();

  public openDropdown = false;
  readonly iconFilesFolder = prizmIconsFolder;

  readonly iconAngleRight = prizmIconsAngleRight;
  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsFolder, prizmIconsAngleRight);
  }

  public changeScreen(idx: number): void {
    if (this.currentScreenIdx === idx) return;

    this.currentScreenIdx = idx;
    this.openDropdown = false;
    this.screenIdxChange.emit(idx);
  }
}
