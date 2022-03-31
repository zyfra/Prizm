import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraIconModule } from '../icon';
import { ZyfraIconButtonModule } from '../icon-button';
import { ZyfraInputGroupComponent } from './zyfra-input-group/zyfra-input-group.component';
import { ZyfraInputGroupClearComponent } from './zyfra-input-group-clear/zyfra-input-group-clear.component';

@NgModule({
  declarations: [ZyfraInputGroupComponent, ZyfraInputGroupClearComponent],
  imports: [CommonModule, ZyfraIconModule, ZyfraIconButtonModule],
  exports: [ZyfraInputGroupComponent, ZyfraInputGroupClearComponent]
})
export class ZyfraInputGroupModule {}
