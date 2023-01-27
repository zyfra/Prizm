import { NgModule } from '@angular/core';
import { PolymorphModule } from '@prizm-ui/components';
import { PrizmPolymorpTemplateExampleComponent } from './template.component';

@NgModule({
  imports: [PolymorphModule],
  exports: [PrizmPolymorpTemplateExampleComponent],
  declarations: [PrizmPolymorpTemplateExampleComponent],
})
export class PrizmPolymorphTemplateModule {}
