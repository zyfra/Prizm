import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { MenuNavComponent } from './menu-nav-test.component';
import {
  ZyfraNavMenuModule,
  ZyfraTemplateModule,
  ZyfraSplitterModule,
} from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1.component';

const routes: Routes = [{ path: 'page1', component: Page1Component }];

@NgModule({
  declarations: [MenuNavComponent],
  imports: [
    CommonModule,
    ZyfraNavMenuModule,
    RouterModule.forRoot(routes),
    ZyfraTemplateModule,
    ZyfraSplitterModule,
  ],
  exports: [MenuNavComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['MenuNav', MenuNavComponent],
      multi: true,
    },
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class MenuNavModule {}
