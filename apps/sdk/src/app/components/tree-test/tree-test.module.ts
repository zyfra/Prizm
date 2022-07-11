import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraTreeModule, ZyfraButtonModule } from '@digital-plant/zyfra-components';
import { TreeTestComponent } from './tree-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [TreeTestComponent],
  imports: [CommonModule, ZyfraTreeModule, FormsModule, ReactiveFormsModule, ZyfraButtonModule],
  exports: [TreeTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Tree', TreeTestComponent],
      multi: true,
    },
  ],
})
export class TreeTestModule {}
