import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsArrowDownToBracket,
  prizmIconsArrowUpFromBracket,
  prizmIconsArrowsMaximize,
  prizmIconsBookmarkCheck,
  prizmIconsCopy,
  prizmIconsFilter,
  prizmIconsPlusTriangleDown,
  prizmIconsTrashEmpty,
} from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-panel-with-instruments-hard',
  templateUrl: './panel-example-with-instruments-hard.component.html',
  styleUrls: ['./panel-example-with-instruments-hard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelExampleWithInstrumentsHardComponent {
  public tabs: string[] = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый'];
  public activeTabIndex = 0;

  public toggleValue = true;

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(
      prizmIconsPlusTriangleDown,
      prizmIconsFilter,
      prizmIconsCopy,
      prizmIconsTrashEmpty,
      prizmIconsBookmarkCheck,
      prizmIconsArrowsMaximize,
      prizmIconsArrowDownToBracket,
      prizmIconsArrowUpFromBracket
    );
  }

  public activeTabIndexChange(idx: number): void {
    this.activeTabIndex = idx;
  }
}
