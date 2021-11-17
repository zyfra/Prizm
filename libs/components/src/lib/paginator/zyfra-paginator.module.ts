import { NgModule } from '@angular/core';
import { ZyfraPaginatorComponent } from './zyfra-paginator.component';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [ZyfraPaginatorComponent],
  imports: [PaginatorModule],
  exports: [ZyfraPaginatorComponent],
})
export class ZyfraPaginatorModule {}
