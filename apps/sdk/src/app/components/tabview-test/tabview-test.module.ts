import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraTabViewModule } from '@digital-plant/zyfra-components';
import { TabViewComponent } from './tabview-test.component';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [TabViewComponent],
  imports: [CommonModule, ZyfraTabViewModule],
  exports: [TabViewComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['TabView', TabViewComponent],
      multi: true,
    },
  ],
})
export class TabViewModule {}
