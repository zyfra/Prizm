import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuApplicationsComponent } from './menu-applications-test.component';
import { ZyfraMenuApplicationsModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [MenuApplicationsComponent],
  imports: [CommonModule, ZyfraMenuApplicationsModule],
  exports: [MenuApplicationsComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['MenuApp', MenuApplicationsComponent],
      multi: true,
    },
  ],
})
export class MenuApplicationsModule {}
