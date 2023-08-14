import { Component } from '@angular/core';
import { PrizmPolymorphSubComponentExampleComponent } from './sub-component';
import { PolymorphComponent } from '@prizm-ui/components';

@Component({
  selector: 'prizm-polymorph-component-example',
  templateUrl: './component.component.html',
  styles: [],
})
export class PrizmPolymorphComponentExampleComponent {
  public component = new PolymorphComponent(PrizmPolymorphSubComponentExampleComponent);
  public context = { a: 1 };
}
