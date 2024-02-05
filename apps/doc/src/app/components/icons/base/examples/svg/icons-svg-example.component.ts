import { Component } from '@angular/core';
import { PrizmIcons16Component, PrizmIconsComponent, PrizmIconSvgEnum } from '@prizm-ui/icons';

@Component({
  selector: 'prizm-icons-example',
  templateUrl: './icons-svg-example.component.html',
  standalone: true,
  imports: [
    PrizmIconsComponent,
    PrizmIcons16Component,
  ]
})
export class PrizmIconSvgSvgExampleComponent {
  readonly PrizmIconSvgEnum = PrizmIconSvgEnum;
}
