import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraTreeTableModule } from '@digital-plant/zyfra-components';
import { TreeTableTestComponent } from './tree-table-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [TreeTableTestComponent],
  imports: [CommonModule, ZyfraTreeTableModule, FormsModule, ReactiveFormsModule],
  exports: [TreeTableTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['TreeTable', TreeTableTestComponent],
      multi: true,
    },
  ],
})
export class TreeTableTestModule {}
