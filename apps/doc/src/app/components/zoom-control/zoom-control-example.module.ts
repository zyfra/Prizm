import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomControlExampleComponent } from './zoom-control-example.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ZoomControlExampleBasicComponent } from './examples/zoom-control-example-basic/zoom-control-example-basic.component';
import {
  PrizmButtonComponent,
  PrizmDataListComponent,
  PrizmDropdownControllerDirective,
  PrizmDropdownHostModule,
  PrizmInputSelectModule,
  PrizmInputTextModule,
  PrizmListingItemComponent,
  PrizmPanelComponent,
} from '@prizm-ui/components';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';

@NgModule({
  declarations: [ZoomControlExampleComponent, ZoomControlExampleBasicComponent],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ZoomControlExampleComponent)),
    PrizmPanelComponent,
    PrizmInputTextModule,
    PrizmInputSelectModule,
    PrizmDropdownHostModule,
    PrizmDataListComponent,
    PrizmButtonComponent,
    PrizmDropdownControllerDirective,
    PrizmListingItemComponent,
    PrizmIconsFullComponent,
  ],
})
export class ZoomControlExampleModule {}
