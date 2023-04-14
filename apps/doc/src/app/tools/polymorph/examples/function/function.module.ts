import { NgModule } from '@angular/core';
import { PolymorphModule } from '@prizm-ui/components';
import { PrizmPolymorphFunctionExampleComponent } from './function.component';

@NgModule({
  imports: [PolymorphModule],
  exports: [PrizmPolymorphFunctionExampleComponent],
  declarations: [PrizmPolymorphFunctionExampleComponent],
})
export class PrizmPolymorphFunctionModule {}
