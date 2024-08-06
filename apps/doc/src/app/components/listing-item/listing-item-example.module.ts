import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmListingItemBaseExampleComponent } from './examples/base/listing-item-base-example.component';
import {
  PrizmButtonComponent,
  PrizmCheckboxComponent,
  PrizmCounterModule,
  PrizmListingItemComponent,
  PrizmDropdownHostComponent,
  PrizmChipsModule,
} from '@prizm-ui/components';
import { PrizmListingItemExampleComponent } from './listing-item-example.component';
import { PrizmListingItemChipsExampleComponent } from './examples/chips/listing-item-chips-example.component';
import { PrizmListingItemWithInstrumnetsExampleComponent } from './examples/with-instrumnets/listing-item-with-instruments-example.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmCounterModule,
    PrizmButtonComponent,
    PrizmListingItemComponent,
    PrizmCheckboxComponent,
    PrizmCounterModule,
    PrizmDropdownHostComponent,
    PrizmChipsModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmListingItemExampleComponent)),
    FormsModule,
  ],
  declarations: [
    PrizmListingItemExampleComponent,
    PrizmListingItemBaseExampleComponent,
    PrizmListingItemWithInstrumnetsExampleComponent,
    PrizmListingItemChipsExampleComponent,
  ],
  exports: [PrizmListingItemExampleComponent],
})
export class ListingItemExampleModule {}
