import { NgModule } from '@angular/core';
import { PzmThemeDirective } from './theme.directive';

@NgModule({
    declarations: [PzmThemeDirective],
    exports: [PzmThemeDirective],
})
export class PzmThemeModule {}
