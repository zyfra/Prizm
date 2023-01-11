import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { CronComponent } from './cron.component';
import { PolymorphModule, PrizmCronModule, PrizmMutationObserveModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmCronBaseExampleComponent } from './examples/base/cron-base-example.component';
import { PrizmCronSpecifiedTabsExampleComponent } from './examples/specified-tabs/cron-specified-tabs-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmMutationObserveModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmCronModule,
    RouterModule.forChild(prizmDocGenerateRoutes(CronComponent)),
  ],
  declarations: [PrizmCronBaseExampleComponent, PrizmCronSpecifiedTabsExampleComponent, CronComponent],
  exports: [CronComponent],
})
export class CronModule {}
