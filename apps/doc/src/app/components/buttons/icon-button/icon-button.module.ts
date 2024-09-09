import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { IconButtonComponent } from './icon-button.component';
import { PrizmButtonComponent } from '@prizm-ui/components';
import { PrizmIconsYourIconSetExampleComponent } from './examples/your-icon-set/icons-your-icon-set-example.component';
import { PrizmIconsButtonsExampleComponent } from './examples/icons/icons-buttons-example.component';
import { PrizmIconsComponent } from '@prizm-ui/icons';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(IconButtonComponent)),
    PrizmIconsComponent,
  ],
  declarations: [
    PrizmIconsYourIconSetExampleComponent,
    PrizmIconsButtonsExampleComponent,
    IconButtonComponent,
  ],
  exports: [IconButtonComponent],
})
export class IconButtonModule {}
