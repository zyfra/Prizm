import { Component } from '@angular/core';
import { PrizmIconsFullComponent, PrizmIconsComponent } from '@prizm-ui/icons';

@Component({
  selector: 'prizm-icons-lazy-example',
  templateUrl: './icons-lazy-example.component.html',
  styleUrls: ['./icons-lazy-example.component.less'],
  standalone: true,
  imports: [PrizmIconsComponent, PrizmIconsFullComponent],
})
export class PrizmIconsLazyExampleComponent {}
