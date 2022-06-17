import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleIndicatorsComponent } from './example-indicators.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { IndicatorsBaseComponent } from './examples/indicators-base/indicators-base.component';
import { IndicatorsIconsComponent } from './examples/indicators-icons/indicators-icons.component';

@NgModule({
  declarations: [
    ExampleIndicatorsComponent,
    IndicatorsBaseComponent,
    IndicatorsIconsComponent
  ],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(ExampleIndicatorsComponent)),
  ]
})
export class ExampleIndicatorsModule { }
