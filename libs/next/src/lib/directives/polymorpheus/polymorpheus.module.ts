import {NgModule} from '@angular/core';
import {PolymorpheusOutletDirective} from './directives/outlet';
import {PolymorpheusTemplateDirective} from './directives/template';

@NgModule({
    declarations: [PolymorpheusOutletDirective, PolymorpheusTemplateDirective],
    exports: [PolymorpheusOutletDirective, PolymorpheusTemplateDirective],
})
export class PolymorpheusModule {}
