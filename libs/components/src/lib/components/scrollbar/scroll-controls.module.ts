import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmScrollControlsComponent } from './scroll-controls.component';
import { PrizmScrollbarWrapperDirective } from './scrollbar-wrapper.directive';
import { PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmScrollbarDirective } from './scrollbar.directive';
import { PrizmThemeModule } from '@prizm-ui/theme';

@NgModule({
  imports: [CommonModule, PrizmLetModule, PrizmThemeModule],
  declarations: [PrizmScrollbarDirective, PrizmScrollbarWrapperDirective, PrizmScrollControlsComponent],
  exports: [PrizmScrollControlsComponent],
})
export class PrizmScrollControlsModule {}
