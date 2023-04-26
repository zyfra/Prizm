import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { ReleasePolicyComponent } from './release-policy.component';

@NgModule({
  exports: [ReleasePolicyComponent],
  declarations: [ReleasePolicyComponent],
  imports: [PrizmAddonDocModule, RouterModule.forChild(prizmDocGenerateRoutes(ReleasePolicyComponent))],
})
export class ReleasePolicyModule {}
