import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraTextareaModule } from '@digital-plant/zyfra-components';
import { TextareaTestComponent } from './textarea-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [TextareaTestComponent],
  imports: [CommonModule, ZyfraTextareaModule, FormsModule, ReactiveFormsModule],
  exports: [TextareaTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Textarea', TextareaTestComponent],
      multi: true,
    },
  ],
})
export class TextareaTestModule {}
