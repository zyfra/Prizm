import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CronComponent } from './cron.component';
import { PolymorphModule, PrizmCronModule, PrizmMutationObserveModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmCronBaseExampleComponent } from './examples/base/cron-base-example.component';
import {
  PrizmCronSpecifiedTabsExampleComponent,
} from './examples/specified-tabs/cron-specified-tabs-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmMutationObserveModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmCronModule,
    RouterModule.forChild(generateRoutes(CronComponent)),
  ],
  declarations: [
    PrizmCronBaseExampleComponent,
    PrizmCronSpecifiedTabsExampleComponent,
    CronComponent
  ],
  exports: [CronComponent],
})
export class CronModule {}
