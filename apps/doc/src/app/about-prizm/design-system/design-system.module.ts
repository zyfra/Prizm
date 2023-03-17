import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { DesignSystemComponent } from './design-system.component';

@NgModule({
  exports: [DesignSystemComponent],
  declarations: [DesignSystemComponent],
  imports: [PrizmAddonDocModule, RouterModule.forChild(prizmDocGenerateRoutes(DesignSystemComponent))],
})
export class DesignSystemModule {}
