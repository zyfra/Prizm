import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ColumnComponent } from './column.component';
import { PrizmChartsColumnExampleComponent } from './examples/base/prizm-charts-column-example.component';
import { PrizmChartsColumnModule } from '@prizm-ui/charts';
import { PrizmChartsColumnGroupExampleComponent } from './examples/group/prizm-charts-column-group-example.component';
import { PrizmChartsColumnStackExampleComponent } from './examples/stack/prizm-charts-column-stack-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsColumnModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ColumnComponent)),
  ],
  declarations: [
    PrizmChartsColumnExampleComponent,
    PrizmChartsColumnStackExampleComponent,
    PrizmChartsColumnGroupExampleComponent,
    ColumnComponent,
  ],
  exports: [ColumnComponent],
})
export class ColumnModule {}
