import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { LibraryRequirementsComponent } from './library-requirements.component';

@NgModule({
  exports: [LibraryRequirementsComponent],
  declarations: [LibraryRequirementsComponent],
  imports: [PrizmAddonDocModule, RouterModule.forChild(prizmDocGenerateRoutes(LibraryRequirementsComponent))],
})
export class LibraryRequirementsModule {}
