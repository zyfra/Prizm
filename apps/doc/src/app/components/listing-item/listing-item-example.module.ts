import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmListingItemBaseExampleComponent } from './examples/base/listing-item-base-example.component';
import {
  PrizmButtonModule,
  PrizmCheckboxModule,
  PrizmCounterModule,
  PrizmListingItemComponent,
  PrizmDropdownHostComponent,
  PrizmChipsModule,
} from '@prizm-ui/components';
import { PrizmListingItemExampleComponent } from './listing-item-example.component';
import { PrizmListingItemChipsExampleComponent } from './examples/chips/listing-item-chips-example.component';
import { PrizmListingItemWithInstrumnetsExampleComponent } from './examples/with-instrumnets/listing-item-with-instruments-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmCounterModule,
    PrizmButtonModule,
    PrizmListingItemComponent,
    PrizmCheckboxModule,
    PrizmCounterModule,
    PrizmDropdownHostComponent,
    PrizmChipsModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmListingItemExampleComponent)),
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
