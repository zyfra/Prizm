import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon.component';
import { PrizmIconSvgBaseExampleComponent } from './examples/base/icon-base-example.component';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmIconSvgSvgExampleComponent } from './examples/svg/icon-svg-example.component';
import { PrizmIconsSvgComponent } from '../../../icons-svg';
import { PrizmHintDirective } from '@prizm-ui/components';
import { PrizmIconMigrateExampleComponent } from './examples/migrate/icon-migrate-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmIconsSvgComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(IconComponent)),
    PrizmIconsFullComponent,
    PrizmIconsComponent,
    PrizmHintDirective,
    PrizmIconMigrateExampleComponent,
  ],
  declarations: [PrizmIconSvgBaseExampleComponent, PrizmIconSvgSvgExampleComponent, IconComponent],
  exports: [IconComponent],
})
export class IconModule {}
