import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { WidgetComponent } from './widget.component';
import { PrizmWidgetBaseExampleComponent } from './examples/base/widget-base-example.component';
import { PrizmButtonModule, PrizmWidgetModule } from '@prizm-ui/components';
import { PrizmWidgetWithButtonsExampleComponent } from './examples/with-buttons/widget-with-buttons-example.component';
import { PrizmWidgetWithTemplatesExampleComponent } from './examples/with-templates/widget-with-templates-example.component';
import { PrizmIconsSvgModule } from '@prizm-ui/icons';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmWidgetModule,
    PrizmIconsSvgModule,
    PrizmButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(WidgetComponent)),
  ],
  declarations: [
    PrizmWidgetWithTemplatesExampleComponent,
    PrizmWidgetBaseExampleComponent,
    PrizmWidgetWithButtonsExampleComponent,
    WidgetComponent,
  ],
  exports: [WidgetComponent],
})
export class WidgetModule {}
