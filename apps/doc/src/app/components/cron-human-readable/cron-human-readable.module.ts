import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { CronHumanReadableComponent } from './cron-human-readable.component';
import { PolymorphModule, PrizmCronModule, PrizmMutationObserveModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmCronBaseExampleComponent } from './examples/base/cron-base-example.component';

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
    RouterModule.forChild(prizmDocGenerateRoutes(CronHumanReadableComponent)),
  ],
  declarations: [PrizmCronBaseExampleComponent, CronHumanReadableComponent],
  exports: [CronHumanReadableComponent],
})
export class CronHumanReadableModule {}
