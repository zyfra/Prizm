import { NgModule } from '@angular/core';
import { ZyfraTreeComponent } from './zyfra-tree.component';
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [
    ZyfraTreeComponent,
  ],
  imports: [
    TreeModule,
  ],
  exports: [
    ZyfraTreeComponent,
  ]
})
export class ZyfraTreeModule { }
