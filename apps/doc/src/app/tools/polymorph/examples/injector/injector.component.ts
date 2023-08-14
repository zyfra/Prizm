import { Component, Injector } from '@angular/core';
import { PrizmPolymorphSubComponentExampleComponent } from './sub-component';
import { PolymorphComponent } from '@prizm-ui/components';
import { CUSTOM_TOKEN } from './token';

@Component({
  selector: 'prizm-polymorph-injector-example',
  templateUrl: './injector.component.html',
  styles: [],
})
export class PrizmPolymorphInjectorExampleComponent {
  public component = new PolymorphComponent(PrizmPolymorphSubComponentExampleComponent);
  public context = { a: 1 };
  public newInjector: Injector;

  constructor(private injector: Injector) {
    this.newInjector = Injector.create({
      providers: [
        {
          provide: CUSTOM_TOKEN,
          useValue: 1000,
        },
      ],
      parent: this.injector,
    });
  }
}
