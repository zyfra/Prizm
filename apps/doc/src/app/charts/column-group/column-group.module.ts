import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ColumnGroupComponent } from './column-group.component';
import { PrizmChartsColumnGroupExampleComponent } from './examples/base/prizm-charts-column-group-example.component';
import { PrizmChartsColumnGroupModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmChartsColumnGroupModule,
    RouterModule.forChild(generateRoutes(ColumnGroupComponent)),
  ],
  declarations: [
    PrizmChartsColumnGroupExampleComponent,
    ColumnGroupComponent
  ],
  exports: [ColumnGroupComponent],
})
export class ColumnGroupModule {}
