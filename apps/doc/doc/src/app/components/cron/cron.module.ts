import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { CronComponent } from './cron.component';
import { PolymorphModule, PrizmCronModule, PrizmMutationObserveModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmCronBaseExampleComponent } from './examples/base/cron-base-example.component';
import { PrizmCronSpecifiedTabsExampleComponent } from './examples/specified-tabs/cron-specified-tabs-example.component';
import { PrizmCronFullwidthExampleComponent } from './examples/fullwidth/cron-fullwidth-example.component';
import { PrizmCronFilteredListExampleComponent } from './examples/filtered-list/cron-filtered-list-example.component';
import { PrizmCronResetExampleComponent } from './examples/reset/cron-reset-example.component';
import { PrizmCronI18nExampleComponent } from './examples/i18n/cron-i18n-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmMutationObserveModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmCronModule,
    PrizmCronModule,
    RouterModule.forChild(prizmDocGenerateRoutes(CronComponent)),
  ],
  declarations: [
    PrizmCronI18nExampleComponent,
    PrizmCronBaseExampleComponent,
    PrizmCronResetExampleComponent,
    PrizmCronFilteredListExampleComponent,
    PrizmCronSpecifiedTabsExampleComponent,
    PrizmCronFullwidthExampleComponent,
    CronComponent,
  ],
  exports: [CronComponent],
})
export class CronModule {}
