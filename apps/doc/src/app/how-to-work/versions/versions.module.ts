import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { VersionsComponent } from './versions.component';

@NgModule({
  exports: [VersionsComponent],
  declarations: [VersionsComponent],
  imports: [PrizmAddonDocModule, RouterModule.forChild(prizmDocGenerateRoutes(VersionsComponent))],
})
export class VersionsModule {}
