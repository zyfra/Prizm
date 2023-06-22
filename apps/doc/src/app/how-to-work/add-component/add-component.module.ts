import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { AddComponentComponent } from './add-component.component';

@NgModule({
  exports: [AddComponentComponent],
  declarations: [AddComponentComponent],
  imports: [PrizmAddonDocModule, RouterModule.forChild(prizmDocGenerateRoutes(AddComponentComponent))],
})
export class AddComponentModule {}
