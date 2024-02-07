import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons.component';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmIconsLazyExampleComponent } from './examples/lazy/icons-lazy-example.component';
import { PrizmIconsBaseExampleComponent } from './examples/base/icons-base-example.component';
import { PrizmInputTextModule, PrizmToggleComponent } from '@prizm-ui/components';
import { FormsModule } from '@angular/forms';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    PrizmInputTextModule,
    PrizmIconsLazyExampleComponent,
    PrizmIconsBaseExampleComponent,
    PrizmIconsComponent,
    PrizmIconsFullComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(IconsComponent)),
    PrizmToggleComponent,
    PrizmIfLanguageDirective,
  ],
  declarations: [IconsComponent],
  exports: [IconsComponent],
})
export class IconsModule {}
