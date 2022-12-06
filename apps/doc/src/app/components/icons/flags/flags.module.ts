import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { FlagsComponent } from './flags.component';
import { PrizmIconBaseExampleComponent } from './examples/base/icon-base-example.component';
import { PrizmIconFlagsModule } from '@prizm-ui/icon-flags';
import { PrizmIconFontExampleComponent } from './examples/font/icon-font-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmIconFlagsModule,
    RouterModule.forChild(generateRoutes(FlagsComponent)),
  ],
  declarations: [
    PrizmIconFontExampleComponent,
    PrizmIconBaseExampleComponent,
    FlagsComponent
  ],
  exports: [FlagsComponent],
})
export class FlagsModule {}
