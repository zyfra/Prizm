import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { TabMenuModule } from 'primeng/tabmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ZyfraTabMenuComponent } from './zyfra-tab-menu.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [ZyfraTabMenuComponent],
  imports: [CommonModule, TooltipModule, TabMenuModule, OverlayPanelModule, SlideMenuModule],
  exports: [ZyfraTabMenuComponent],
})
export class ZyfraTabMenuModule {}
