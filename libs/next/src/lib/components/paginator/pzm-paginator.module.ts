import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PzmPaginatorComponent } from './pzm-paginator.component';
import { PzmIconModule } from '../icon';
import { PzmSelectModule } from '../dropdowns/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PzmPaginatorComponent],
  imports: [CommonModule, PzmIconModule, PzmSelectModule, ReactiveFormsModule, FormsModule],
  exports: [PzmPaginatorComponent],
})
export class PzmPaginatorModule {}
