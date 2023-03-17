import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { TransitionComponent } from './transition.component';

@NgModule({
  exports: [TransitionComponent],
  declarations: [TransitionComponent],
  imports: [PrizmAddonDocModule, RouterModule.forChild(prizmDocGenerateRoutes(TransitionComponent))],
})
export class TransitionModule {}
