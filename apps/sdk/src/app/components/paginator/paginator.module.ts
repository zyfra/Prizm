import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { ZyfraPaginatorModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [CommonModule, ZyfraPaginatorModule],
  exports: [PaginatorComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Paginator', PaginatorComponent],
      multi: true,
    },
  ],
})
export class PaginatorModule {}
