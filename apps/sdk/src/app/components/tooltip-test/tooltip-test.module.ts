import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraTooltipModule, ZyfraButtonModule } from '@digital-plant/zyfra-components';
import { TooltipTestComponent } from './tooltip-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [TooltipTestComponent],
  imports: [CommonModule, ZyfraTooltipModule, FormsModule, ReactiveFormsModule, ZyfraButtonModule],
  exports: [TooltipTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Tooltip', TooltipTestComponent],
      multi: true,
    },
  ],
})
export class TooltipTestModule {}
