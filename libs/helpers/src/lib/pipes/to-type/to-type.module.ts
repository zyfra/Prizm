import { NgModule } from '@angular/core';
import { ToTypePipe } from './to-type.pipe';

@NgModule({
  exports: [
    ToTypePipe
  ],
  declarations: [
    ToTypePipe,
  ]
})
export class ToTypeModule { }
