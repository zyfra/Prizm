import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraBlockUiModule, ZyfraButtonModule } from '@digital-plant/zyfra-components';
import { BlockTestComponent } from './block-test.component';
import { APP_TOKEN } from '../../app.token';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [BlockTestComponent],
  imports: [CommonModule, ZyfraBlockUiModule, ZyfraButtonModule, BrowserModule, BrowserAnimationsModule],
  exports: [BlockTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['BlockUI', BlockTestComponent],
      multi: true,
    },
  ],
})
export class BlockTestModule {}
