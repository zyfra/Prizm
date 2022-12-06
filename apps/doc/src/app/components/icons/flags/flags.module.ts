import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { FlagsComponent } from './flags.component';
import { PrizmIconSvgBaseExampleComponent } from './examples/base/icon-base-example.component';
import { PrizmFlagIconsModule } from '@prizm/flag-icons';
import { PrizmIconSvgFontExampleComponent } from './examples/font/icon-font-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmFlagIconsModule,
    RouterModule.forChild(generateRoutes(FlagsComponent)),
  ],
  declarations: [PrizmIconSvgFontExampleComponent, PrizmIconSvgBaseExampleComponent, FlagsComponent],
  exports: [FlagsComponent],
})
export class FlagsModule {}
