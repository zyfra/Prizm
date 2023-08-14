import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAccordionModule, PrizmTableModule } from '@prizm-ui/components';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { ContactsComponent } from './contacts.component';

@NgModule({
  exports: [ContactsComponent],
  declarations: [ContactsComponent],
  imports: [
    PrizmTableModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ContactsComponent)),
  ],
})
export class ContactsModule {}
