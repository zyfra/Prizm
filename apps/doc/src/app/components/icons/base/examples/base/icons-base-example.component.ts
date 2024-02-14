import { Component, inject, OnInit } from '@angular/core';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmIconsFullRegistry, PrizmIconsRegistry } from '@prizm-ui/icons/core';

import { prizmIconsArrowUp } from '@prizm-ui/icons/base/source/arrow-up/prizmIcons-arrow-up.icon';
import { prizmIconsArrowUp as prizmIconsArrowUpFull } from '@prizm-ui/icons/full/source/arrow-up/prizmIcons-arrow-up.icon';
import { prizmIconsArrowsCross } from '@prizm-ui/icons/base/source/arrows-cross';
import { prizmIconsArrowsCross as prizmIconsArrowsCrossFull } from '@prizm-ui/icons/full/source/arrows-cross';
import { prizmIconsBag } from '@prizm-ui/icons/base/source/bag';
import { prizmIconsBag as prizmIconsBagFull } from '@prizm-ui/icons/full/source/bag';
import { prizmIconsBubbleMessage } from '@prizm-ui/icons/base/source/bubble-message';
import { prizmIconsBubbleMessage as prizmIconsBubbleMessageFull } from '@prizm-ui/icons/full/source/bubble-message';

@Component({
  selector: 'prizm-icons-base-example',
  templateUrl: './icons-base-example.component.html',
  styleUrls: ['./icons-base-example.component.less'],
  standalone: true,
  imports: [PrizmIconsComponent, PrizmIconsFullComponent],
})
export class PrizmIconsBaseExampleComponent implements OnInit {
  readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  readonly iconsBaseRegistry = inject(PrizmIconsRegistry);

  public ngOnInit() {
    this.iconsBaseRegistry.registerIcons([
      prizmIconsArrowUp,
      prizmIconsArrowsCross,
      prizmIconsBag,
      prizmIconsBubbleMessage,
    ]);
    this.iconsFullRegistry.registerIcons([
      prizmIconsArrowUpFull,
      prizmIconsArrowsCrossFull,
      prizmIconsBagFull,
      prizmIconsBubbleMessageFull,
    ]);
  }
}
