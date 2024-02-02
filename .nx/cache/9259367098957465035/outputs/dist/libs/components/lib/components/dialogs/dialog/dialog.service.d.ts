import { AbstractPrizmDialogService } from '../../../abstract/dialog.service';
import { PrizmDialogComponent } from './dialog.component';
import { PrizmDialogOptions } from './dialog.models';
import * as i0 from "@angular/core";
export declare class PrizmDialogService extends AbstractPrizmDialogService<PrizmDialogOptions> {
    protected readonly component: typeof PrizmDialogComponent;
    protected readonly defaultOptions: PrizmDialogOptions;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmDialogService>;
}
