import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraHierarchicalMenuItemComponent } from './common/components/zyfra-hierarchical-menu-item/zyfra-hierarchical-menu-item.component';
import { ZyfraHierarchicalTreeMenuComponent } from './hierarchical-tree-menu/components/zyfra-hierarchical-tree-menu/zyfra-hierarchical-tree-menu.component';
import { ZyfraHierarchicalTreeMenuListComponent } from './hierarchical-tree-menu/components/zyfra-hierarchical-tree-menu-list/zyfra-hierarchical-tree-menu-list.component';
import { ZyfraTooltipModule } from '../tooltip';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    ZyfraHierarchicalMenuItemComponent,
    ZyfraHierarchicalTreeMenuComponent,
    ZyfraHierarchicalTreeMenuListComponent,
  ],
  imports: [CommonModule, ZyfraTooltipModule, OverlayModule],
  exports: [ZyfraHierarchicalTreeMenuComponent],
})
export class ZyfraHierarchicalMenuModule {}
