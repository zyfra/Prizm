import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {ZuiLoaderComponent} from './loader.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [ZuiLoaderComponent],
    exports: [ZuiLoaderComponent],
})
export class ZuiLoaderModule {}
