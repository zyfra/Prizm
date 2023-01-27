import { NgModule } from '@angular/core';
import { PolymorphModule } from '@prizm-ui/components';
import { PrizmPolymorphComponentExampleComponent } from './component.component';
import { PrizmPolymorphSubComponentExampleComponent } from './sub-component';

@NgModule({
  imports: [PolymorphModule],
  exports: [PrizmPolymorphComponentExampleComponent],
  declarations: [PrizmPolymorphComponentExampleComponent, PrizmPolymorphSubComponentExampleComponent],
})
export class PrizmPolymorphComponentModule {}
