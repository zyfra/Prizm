import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { CodestyleComponent } from './codestyle.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(CodestyleComponent)),
  ],
  declarations: [CodestyleComponent],
  exports: [CodestyleComponent],
})
export class CodestyleModule {}
