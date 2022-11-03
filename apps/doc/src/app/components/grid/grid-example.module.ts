import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridExampleComponent } from './grid-example.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { GridExampleBasicComponent } from './examples/grid-example-basic/grid-example-basic.component';
import { PrizmGridModule } from '@digital-plant/zui-components';

@NgModule({
  declarations: [GridExampleComponent, GridExampleBasicComponent],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(GridExampleComponent)),
    PrizmGridModule,
  ],
})
export class GridExampleModule {}
