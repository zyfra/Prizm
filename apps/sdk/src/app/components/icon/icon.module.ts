import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraIconButtonModule, ZyfraIconModule } from '@digital-plant/zyfra-components';
import { IconComponent } from './icon.component';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, ZyfraIconButtonModule, ZyfraIconModule],
  exports: [IconComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Icon', IconComponent],
      multi: true,
    },
  ],
})
export class IconModule {}
