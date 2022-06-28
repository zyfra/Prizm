import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupComponent } from './input-group.component';
import { ZyfraInputGroupModule, ZyfraInputTextModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [InputGroupComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ZyfraInputGroupModule, ZyfraInputTextModule],
  exports: [InputGroupComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Input-group', InputGroupComponent],
      multi: true,
    },
  ],
})
export class InputGroupModule {}
