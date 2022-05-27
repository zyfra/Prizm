import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraTableModule } from '@digital-plant/zyfra-components';
import { TableTestComponent } from './table-test.component';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [TableTestComponent],
  imports: [CommonModule, ZyfraTableModule],
  exports: [TableTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Table', TableTestComponent],
      multi: true,
    },
  ],
})
export class TableTestModule {}
