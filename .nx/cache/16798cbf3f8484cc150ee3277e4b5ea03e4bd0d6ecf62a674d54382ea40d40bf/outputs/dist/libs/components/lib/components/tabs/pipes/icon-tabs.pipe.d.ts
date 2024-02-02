import { PipeTransform, QueryList } from '@angular/core';
import { PrizmTabComponent } from '../components/tab.component';
import * as i0 from "@angular/core";
export declare class PrizmIconTabsPipe implements PipeTransform {
    transform(tabs: QueryList<PrizmTabComponent>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmIconTabsPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmIconTabsPipe, "prizmIconTabs", true>;
}
