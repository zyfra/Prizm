import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridExampleComponent } from './grid-example.component';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { GridExampleBasicComponent } from './examples/grid-example-basic/grid-example-basic.component';
import { PrizmGridModule } from '@prizm-ui/components';

@NgModule({
  declarations: [GridExampleComponent, GridExampleBasicComponent],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(GridExampleComponent)),
    PrizmGridModule,
  ],
})
export class GridExampleModule {}
