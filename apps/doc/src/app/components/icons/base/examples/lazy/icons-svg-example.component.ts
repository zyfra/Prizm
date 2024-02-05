import { Component } from '@angular/core';
import { PrizmIcons16Component, PrizmIconsComponent } from '@prizm-ui/icons';

@Component({
  selector: 'prizm-icons-example',
  templateUrl: './icons-svg-example.component.html',
  styleUrls: ['./icons-svg-example.component.less'],
  standalone: true,
  imports: [
    PrizmIconsComponent,
    PrizmIcons16Component,
  ]
})
export class PrizmIconSvgSvgExampleComponent {}
