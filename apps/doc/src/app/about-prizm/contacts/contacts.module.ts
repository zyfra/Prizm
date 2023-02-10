import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrizmAccordionModule, PrizmTableModule } from '@prizm-ui/components';
import { PrizmAddonDocModule } from '@prizm-ui/doc';
import { ContactsComponent } from './contacts.component';
 
@NgModule({
  exports:[ContactsComponent],
  declarations:[ContactsComponent],
  imports: [
    CommonModule,
    PrizmTableModule,
    FormsModule,
    PrizmAccordionModule,
    PrizmAddonDocModule,
  ],
})
export class ContactsModule {}
