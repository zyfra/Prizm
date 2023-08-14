import { NgModule } from '@angular/core';
import { PolymorphModule } from '@prizm-ui/components';
import { PrizmPolymorphInjectorExampleComponent } from './injector.component';
import { PrizmPolymorphSubComponentExampleComponent } from './sub-component';

@NgModule({
  imports: [PolymorphModule],
  exports: [PrizmPolymorphInjectorExampleComponent],
  declarations: [PrizmPolymorphInjectorExampleComponent, PrizmPolymorphSubComponentExampleComponent],
})
export class PrizmPolymorphInjectorComponentModule {}
