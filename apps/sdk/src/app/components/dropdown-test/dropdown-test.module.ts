import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraDropdownModule, ZyfraButtonModule } from '@digital-plant/zyfra-components';
import { DropdownTestComponent } from './dropdown-test.component';
import { FormsModule } from '@angular/forms';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [DropdownTestComponent],
  imports: [CommonModule, ZyfraDropdownModule, FormsModule, ZyfraButtonModule],
  exports: [DropdownTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Dropdown', DropdownTestComponent],
      multi: true,
    },
  ],
})
export class DropdownTestModule {}
