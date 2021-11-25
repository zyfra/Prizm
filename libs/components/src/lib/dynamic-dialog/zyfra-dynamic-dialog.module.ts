import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ZyfraDynamicDialogService } from './zyfra-dynamic-dialog.service';


@NgModule({
  imports: [
    CommonModule,
    DynamicDialogModule
  ],
  providers: [ZyfraDynamicDialogService]
})
export class ZyfraDynamicDialogModule { }
