import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ColumnGroupComponent } from './column-group.component';
import { PrizmChartsColumnGroupExampleComponent } from './examples/base/prizm-charts-column-group-example.component';
import { PrizmChartsColumnGroupModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmChartsColumnGroupModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ColumnGroupComponent)),
  ],
  declarations: [PrizmChartsColumnGroupExampleComponent, ColumnGroupComponent],
  exports: [ColumnGroupComponent],
})
export class ColumnGroupModule {}
