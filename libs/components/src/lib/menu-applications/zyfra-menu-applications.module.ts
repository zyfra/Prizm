import { NgModule } from '@angular/core';
import { ZyfraMenuApplicationsComponent } from './zyfra-menu-applications.component';
import { CommonModule } from '@angular/common';
import { ZyfraMenuApplicationsItemComponent } from './zyfra-menu-applications-item/zyfra-menu-applications-item.component';
import { ZyfraHintModule, ZyfraIconModule, ZyfraSplitterModule } from '@digital-plant/zyfra-components';

@NgModule({
  declarations: [ZyfraMenuApplicationsComponent, ZyfraMenuApplicationsItemComponent],
  imports: [CommonModule, ZyfraIconModule, ZyfraSplitterModule, ZyfraHintModule],
  exports: [ZyfraMenuApplicationsComponent],
})
export class ZyfraMenuApplicationsModule {}
