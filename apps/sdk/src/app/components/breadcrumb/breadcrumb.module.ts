import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraBreadcrumbModule } from '@digital-plant/zyfra-components';
import { BreadcrumbComponent } from './breadcrumb.component';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule, ZyfraBreadcrumbModule],
  exports: [BreadcrumbComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Breadcrumb', BreadcrumbComponent],
      multi: true,
    },
  ],
})
export class BreadcrumbModule {}
