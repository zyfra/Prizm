import { NgModule } from '@angular/core';
import { PrizmAddonDocModule } from '@prizm-ui/doc';
import { DesignSystemComponent } from './design-system.component';

@NgModule({
  exports: [DesignSystemComponent],
  declarations: [DesignSystemComponent],
  imports: [PrizmAddonDocModule],
})
export class DesignSystemModule {}
