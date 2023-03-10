import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { IntroductionComponent } from './introduction.component';

@NgModule({
  exports: [IntroductionComponent],
  declarations: [IntroductionComponent],
  imports: [PrizmAddonDocModule, RouterModule.forChild(prizmDocGenerateRoutes(IntroductionComponent))],
})
export class IntroductionModule {}
