import { AbstractPrizmDialogService } from '../../../abstract/dialog.service';
import { PrizmOverlayControl } from '../../../modules/overlay';
import { Observable, Observer } from 'rxjs';
import { PrizmDialogConfirmComponent } from './confirm-dialog.component';
import { PrizmConfirmDialogOptions, PrizmConfirmDialogResult } from './confirm-dialog.models';
import { PrizmBaseDialogContext } from '../dialog/dialog.models';
import * as i0 from "@angular/core";
export declare class PrizmConfirmDialogService<T extends PrizmConfirmDialogOptions<PrizmConfirmDialogResult> = PrizmConfirmDialogOptions<PrizmConfirmDialogResult>> extends AbstractPrizmDialogService<T, PrizmConfirmDialogResult> {
    protected readonly component: typeof PrizmDialogConfirmComponent;
    protected readonly defaultOptions: T;
    open(title: T['title'], options: Omit<Partial<T>, 'title'>, cb?: (data: {
        control: PrizmOverlayControl;
        dialog: PrizmBaseDialogContext<PrizmConfirmDialogResult, PrizmConfirmDialogOptions>;
        observer: Observer<PrizmConfirmDialogResult>;
        destroy$: Observable<void>;
    }) => void): Observable<PrizmConfirmDialogResult>;
    private safeUpdateButtonsWithDefaultStyles;
    private generateButton;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmConfirmDialogService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmConfirmDialogService<any>>;
}
