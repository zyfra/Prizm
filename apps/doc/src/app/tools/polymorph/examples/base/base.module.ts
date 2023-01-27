import { NgModule } from '@angular/core';
import { PolymorphModule } from '@prizm-ui/components';
import { PrizmPolymorphBaseExampleComponent } from './base.component';

@NgModule({
  imports: [PolymorphModule],
  exports: [PrizmPolymorphBaseExampleComponent],
  declarations: [PrizmPolymorphBaseExampleComponent],
})
export class PrizmPolymorphBaseModule {}
