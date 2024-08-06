import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ZoneEventComponent } from './zone-event.component';
import {
  PrizmButtonComponent,
  PrizmToggleComponent,
  PrizmWidgetComponent,
  PrizmZoneEventDirective,
} from '@prizm-ui/components';
import { PrizmZoneEventBaseExampleComponent } from './examples/base/base.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmZoneEventDirective,
    PrizmToggleComponent,
    ReactiveFormsModule,
    PrizmButtonComponent,
    PrizmWidgetComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(ZoneEventComponent)),
  ],
  declarations: [PrizmZoneEventBaseExampleComponent, ZoneEventComponent],
  exports: [ZoneEventComponent],
})
export class ZoneEventModule {}
