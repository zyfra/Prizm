import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsMagnifyingGlass } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-input-search-example',
  templateUrl: './input-search-example.component.html',
  styleUrls: ['./input-search-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchExampleComponent {
  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsMagnifyingGlass);
  }
  public search(value: string): void {
    console.log('search', value);
  }
}
