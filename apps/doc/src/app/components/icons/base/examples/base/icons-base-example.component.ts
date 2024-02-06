import { Component, inject, OnInit } from '@angular/core';
import {
  PrizmIcons16Component,
  PrizmIcons16Registry,
  prizmIconsArrowsCross,
  prizmIconsArrowUp,
  prizmIconsBag,
  prizmIconsBubbleMessage,
  PrizmIconsComponent,
  PrizmIconsRegistry,
} from '@prizm-ui/icons';

@Component({
  selector: 'prizm-icons-base-example',
  templateUrl: './icons-base-example.component.html',
  styleUrls: ['./icons-base-example.component.less'],
  standalone: true,
  imports: [PrizmIconsComponent, PrizmIcons16Component],
})
export class PrizmIconsBaseExampleComponent implements OnInit {
  // TODO: 4.0.0 rc.2 add different exports with same names
  readonly icons16Registry = inject(PrizmIcons16Registry);
  readonly iconsBaseRegistry = inject(PrizmIconsRegistry);

  public ngOnInit() {
    this.iconsBaseRegistry.registerIcons([
      prizmIconsArrowUp,
      prizmIconsArrowsCross,
      prizmIconsBag,
      prizmIconsBubbleMessage,
    ]);
  }
}
