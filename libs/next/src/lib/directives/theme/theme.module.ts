import { NgModule } from '@angular/core';

import { ZuiThemeDirective } from './theme.directive';

@NgModule({
    declarations: [ZuiThemeDirective],
    exports: [ZuiThemeDirective],
})
export class ZuiThemeModule {}
