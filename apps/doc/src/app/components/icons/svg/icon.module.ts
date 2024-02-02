import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon.component';
import { PrizmIconSvgBaseExampleComponent } from './examples/base/icon-base-example.component';
import { PrizmIconsSvgModule } from '@prizm-ui/icons';
import { PrizmIconSvgSvgExampleComponent } from './examples/svg/icon-svg-example.component';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmIconsSvgModule,
    RouterModule.forChild(prizmDocGenerateRoutes(IconComponent)),
    PrizmIfLanguageDirective,
  ],
  declarations: [PrizmIconSvgBaseExampleComponent, PrizmIconSvgSvgExampleComponent, IconComponent],
  exports: [IconComponent],
})
export class IconModule {}
