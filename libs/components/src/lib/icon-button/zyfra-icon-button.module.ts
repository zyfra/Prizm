import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraIconButtonDirective } from './zyfra-icon-button.directive';

@NgModule({
  declarations: [ZyfraIconButtonDirective],
  exports:[ZyfraIconButtonDirective],
  imports: [CommonModule],
})
export class ZyfraIconButtonModule {}
