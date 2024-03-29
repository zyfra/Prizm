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
  selector: 'prizm-panel-with-instruments-simple',
  templateUrl: './panel-example-with-instruments-simple.component.html',
  styleUrls: ['./panel-example-with-instruments-simple.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelExampleWithInstrumentsSimpleComponent {
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
}
