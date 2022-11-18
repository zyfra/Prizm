import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { GroupBarComponent } from './group-bar.component';
import { PrizmChartsGroupBarExampleComponent } from './examples/base/prizm-charts-group-bar-example.component';
import { PrizmChartsGroupBarModule } from '@prizm-ui/charts';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmChartsGroupBarModule,
    RouterModule.forChild(generateRoutes(GroupBarComponent)),
  ],
  declarations: [
    PrizmChartsGroupBarExampleComponent,
    GroupBarComponent
  ],
  exports: [GroupBarComponent],
})
export class GroupBarModule {}
