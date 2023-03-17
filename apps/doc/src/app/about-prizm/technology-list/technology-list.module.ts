import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { TechnologyListComponent } from './technology-list.component';

@NgModule({
  exports: [TechnologyListComponent],
  declarations: [TechnologyListComponent],
  imports: [PrizmAddonDocModule, RouterModule.forChild(prizmDocGenerateRoutes(TechnologyListComponent))],
})
export class TechnologyListModule {}
