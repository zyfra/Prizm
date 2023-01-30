import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { WidgetComponent } from './widget.component';
import { PrizmWidgetBaseExampleComponent } from './examples/base/widget-base-example.component';
import { PrizmWidgetModule } from '@prizm-ui/components';
import { PrizmWidgetWithButtonsExampleComponent } from './examples/with-buttons/widget-with-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmWidgetModule,
    RouterModule.forChild(prizmDocGenerateRoutes(WidgetComponent)),
  ],
  declarations: [PrizmWidgetBaseExampleComponent, PrizmWidgetWithButtonsExampleComponent, WidgetComponent],
  exports: [WidgetComponent],
})
export class WidgetModule {}
