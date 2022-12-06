import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { FlagsComponent } from './flags.component';
import { PrizmIconBaseExampleComponent } from './examples/base/icon-base-example.component';
import { PrizmIconFlagsModule } from '@prizm-ui/icon-flags';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmIconFlagsModule,
    RouterModule.forChild(generateRoutes(FlagsComponent)),
  ],
  declarations: [
    PrizmIconBaseExampleComponent,
    FlagsComponent
  ],
  exports: [FlagsComponent],
})
export class FlagsModule {}
