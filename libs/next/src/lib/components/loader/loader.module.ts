import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorphModule} from '../../directives/polymorph';
import {PzmLoaderComponent} from './loader.component';

@NgModule({
    imports: [CommonModule, PolymorphModule],
    declarations: [PzmLoaderComponent],
    exports: [PzmLoaderComponent],
})
export class PzmLoaderModule {}
