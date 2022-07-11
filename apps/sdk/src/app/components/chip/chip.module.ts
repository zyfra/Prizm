import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraChipModule } from '@digital-plant/zyfra-components';
import { ChipComponent } from './chip.component';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [ChipComponent],
  imports: [CommonModule, ZyfraChipModule],
  exports: [ChipComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Chip', ChipComponent],
      multi: true,
    },
  ],
})
export class ChipionModule {}
