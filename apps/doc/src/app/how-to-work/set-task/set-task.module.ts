import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { SetTaskComponent } from './set-task.component';

@NgModule({
  exports: [SetTaskComponent],
  declarations: [SetTaskComponent],
  imports: [PrizmAddonDocModule, RouterModule.forChild(prizmDocGenerateRoutes(SetTaskComponent))],
})
export class SetTaskModule {}
