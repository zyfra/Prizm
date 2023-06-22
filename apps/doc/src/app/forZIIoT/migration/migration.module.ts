import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { MigrationComponent } from './migration.component';

@NgModule({
  exports: [MigrationComponent],
  declarations: [MigrationComponent],
  imports: [PrizmAddonDocModule, RouterModule.forChild(prizmDocGenerateRoutes(MigrationComponent))],
})
export class MigrationModule {}
