import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';
import { ZyfraTabViewComponent } from './zyfra-tab-view/zyfra-tab-view.component';
import { ZyfraTabPanelComponent } from './zyfra-tab-panel/zyfra-tab-panel.component';

@NgModule({
  declarations: [ZyfraTabViewComponent, ZyfraTabPanelComponent],
  imports: [CommonModule, OverlayPanelModule, TabViewModule, TooltipModule],
  exports: [ZyfraTabViewComponent, ZyfraTabPanelComponent],
})
export class ZyfraTabViewModule {}
