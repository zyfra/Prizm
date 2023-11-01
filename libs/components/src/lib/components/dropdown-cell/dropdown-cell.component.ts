import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { PrizmDestroyService } from '@prizm-ui/helpers';

import { PrizmAbstractTestId } from '../../abstract/interactive';
import { PolymorphContent, PolymorphModule } from '../../directives';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'prizm-dropdown-cell',
  templateUrl: './dropdown-cell.component.html',
  styleUrls: ['./dropdown-cell.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
  standalone: true,
  imports: [CommonModule, PolymorphModule],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'prizm-data-list',
    '[class.default]': 'defaultStyle',
  },
})
export class PrizmDropdownCellComponent extends PrizmAbstractTestId {
  @Input() public title: PolymorphContent = '';
  @Input() public disabled = false;
  @Input() public selected = false;
  @Input() contentType: 'flat' | 'chips' = 'flat';

  override readonly testId_ = 'ui_dropdown_cell';

  constructor(private readonly destroy$: PrizmDestroyService, private readonly cdRef: ChangeDetectorRef) {
    super();
  }
}
