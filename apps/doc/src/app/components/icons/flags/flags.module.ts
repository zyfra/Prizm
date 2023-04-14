import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { FlagsComponent } from './flags.component';
import { PrizmIconSvgBaseExampleComponent } from './examples/base/icon-base-example.component';
import { PrizmFlagIconsModule } from '@prizm-ui/flag-icons';
import { PrizmIconSvgFontExampleComponent } from './examples/font/icon-font-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmFlagIconsModule,
    RouterModule.forChild(prizmDocGenerateRoutes(FlagsComponent)),
  ],
  declarations: [PrizmIconSvgFontExampleComponent, PrizmIconSvgBaseExampleComponent, FlagsComponent],
  exports: [FlagsComponent],
})
export class FlagsModule {}
