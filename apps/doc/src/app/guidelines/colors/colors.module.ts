import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColorsComponent } from './colors.component';
import { Frame25826Component } from './components/frame25826/frame25826.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ColorsComponent)),
  ],
  declarations: [ColorsComponent, Frame25826Component],
})
export class ColorsModule {}
