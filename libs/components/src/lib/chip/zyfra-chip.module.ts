import { NgModule } from '@angular/core';
import { ZyfraChipComponent } from './zyfra-chip.component';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [ZyfraChipComponent],
  imports: [ChipModule],
  exports: [ZyfraChipComponent],
})
export class ZyfraChipModule {}
