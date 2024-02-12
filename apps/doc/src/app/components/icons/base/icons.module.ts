import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons.component';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmIconsLazyExampleComponent } from './examples/lazy/icons-lazy-example.component';
import { PrizmIconsBaseExampleComponent } from './examples/base/icons-base-example.component';
import {
  PrizmHintDirective,
  PrizmIconComponent,
  PrizmInputTextModule,
  PrizmToggleComponent,
} from '@prizm-ui/components';
import { FormsModule } from '@angular/forms';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';
import { OldIconComponent } from './old/old-icon.component';
import { PrizmIconsOldTransformerExampleComponent } from './examples/old-transformer/icons-old-transformer-example.component';

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
    PrizmIconsOldTransformerExampleComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(IconsComponent)),
    PrizmToggleComponent,
    PrizmIfLanguageDirective,
    PrizmHintDirective,
    PrizmIconComponent,
  ],
  declarations: [IconsComponent, OldIconComponent],
  exports: [IconsComponent],
})
export class IconsModule {}
