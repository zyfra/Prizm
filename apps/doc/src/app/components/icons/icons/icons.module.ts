import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons.component';
import { PrizmIconsSvgBaseExampleComponent } from './examples/base/icons-base-example.component';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';
import { PrizmIconsComponent } from '@prizm-ui/icons';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmIconsComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(IconsComponent)),
    PrizmIfLanguageDirective,
  ],
  declarations: [PrizmIconsSvgBaseExampleComponent, IconsComponent],
  exports: [IconsComponent],
})
export class IconsModule {}
