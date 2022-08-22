import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorphModule} from '../../directives/polymorph';
import {ZuiLoaderComponent} from './loader.component';

@NgModule({
    imports: [CommonModule, PolymorphModule],
    declarations: [ZuiLoaderComponent],
    exports: [ZuiLoaderComponent],
})
export class ZuiLoaderModule {}
