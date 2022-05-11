import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule as TranslateModuleZyfra } from '@digital-plant/zyfra-translate';
import { TranslateComponent } from './translate.component';
import { ZyfraButtonModule } from '@digital-plant/zyfra-components';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [TranslateComponent],
  imports: [CommonModule, TranslateModuleZyfra.forRoot(), ZyfraButtonModule],
  exports: [TranslateComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Translate', TranslateComponent],
      multi: true,
    },
  ],
})
export class TranslateModule {}
