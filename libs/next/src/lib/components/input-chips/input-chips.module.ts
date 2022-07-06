import { NgModule } from '@angular/core';
import { InputModule } from '../input';
import { ZuiInputChipsComponent } from './input-chips.directive';
import { CommonModule } from '@angular/common';
import { InputChipsControlComponent } from './input-chips.component';

@NgModule({
  imports: [CommonModule, InputModule],
  declarations: [InputChipsControlComponent, ZuiInputChipsComponent],
  exports: [InputChipsControlComponent, InputModule, ZuiInputChipsComponent],
})
export class ZuiInputChipsModule {}
