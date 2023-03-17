import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RepositoriesComponent } from './repositories.component';

@NgModule({
  exports: [RepositoriesComponent],
  declarations: [RepositoriesComponent],
  imports: [PrizmAddonDocModule, RouterModule.forChild(prizmDocGenerateRoutes(RepositoriesComponent))],
})
export class RepositoriesModule {}
