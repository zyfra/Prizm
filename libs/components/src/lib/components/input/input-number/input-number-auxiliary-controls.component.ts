import { Component, Input, inject } from '@angular/core';
import { PrizmInputLayoutComponent } from '../common/input-layout/input-layout.component';
import { PrizmInputNumberComponent } from './input-number.component';
import { PrizmInputCommonModule } from '../common';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsChevronDown, prizmIconsChevronUp } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-input-number-auxiliary-controls',
  template: `<div class="container">
    <button
      [size]="size"
      [interactive]="!inputNumber.disabled"
      [disabled]="inputNumber.disabled"
      (click)="increment()"
      prizmInputIconButton="chevron-up"
    ></button>
    <button
      [size]="size"
      [interactive]="!inputNumber.disabled"
      [disabled]="inputNumber.disabled"
      (click)="decrement()"
      prizmInputIconButton="chevron-down"
    ></button>
  </div> `,
  styleUrls: ['./input-number-auxiliary-controls.component.less'],
  standalone: true,
  imports: [PrizmInputCommonModule],
})
export class PrizmInputNumberDefaultControlsComponent {
  @Input() inputNumber!: PrizmInputNumberComponent;

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(private readonly layout: PrizmInputLayoutComponent) {
    this.iconsFullRegistry.registerIcons(prizmIconsChevronDown, prizmIconsChevronUp);
  }

  get size(): number {
    const { outer, size } = this.layout;

    if (outer && size === 's') {
      return 12;
    }

    return 16;
  }

  public increment(): void {
    this.inputNumber.increment();
  }

  public decrement(): void {
    this.inputNumber.decrement();
  }
}
