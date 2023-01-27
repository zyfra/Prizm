import { NgModule } from '@angular/core';
import { PolymorphModule } from '@prizm-ui/components';
import { PrizmPolymorphNumberExampleComponent } from './number.component';

@NgModule({
  imports: [PolymorphModule],
  exports: [PrizmPolymorphNumberExampleComponent],
  declarations: [PrizmPolymorphNumberExampleComponent],
})
export class PrizmPolymorphNumberModule {}
