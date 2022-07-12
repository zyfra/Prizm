import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraIconButtonDirective } from './zyfra-icon-button.directive';
import { ZyfraIconModule } from '../icon/zyfra-icon.module';

@NgModule({
  declarations: [ZyfraIconButtonDirective],
  exports: [ZyfraIconButtonDirective, ZyfraIconModule],
  imports: [CommonModule, ZyfraIconModule],
})
export class ZyfraIconButtonModule {}
