import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraSplitterModule } from '@digital-plant/zyfra-components';
import { SplitterTestComponent } from './splitter-test.component';
import { APP_TOKEN } from '../../app.token';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SplitterTestComponent],
  imports: [CommonModule, ZyfraSplitterModule, FormsModule, ReactiveFormsModule],
  exports: [SplitterTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Splitter', SplitterTestComponent],
      multi: true,
    },
  ],
})
export class SplitterTestModule {}
