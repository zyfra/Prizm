import { AbstractPrizmDialogService } from '../../../abstract/dialog.service';
import { PrizmOverlayControl, PrizmOverlayGlobalPosition } from '../../../modules/overlay';
import { Observable, Observer } from 'rxjs';
import { PrizmSidebarComponent } from './sidebar.component';
import { PrizmSidebarOptions, PrizmSidebarResult } from './sidebar.models';
import { PrizmBaseDialogContext } from '../dialog/dialog.models';
import * as i0 from "@angular/core";
export declare class PrizmSidebarService<T extends PrizmSidebarOptions<PrizmSidebarResult> = PrizmSidebarOptions<PrizmSidebarResult>> extends AbstractPrizmDialogService<T, PrizmSidebarResult> {
    protected readonly component: typeof PrizmSidebarComponent;
    protected readonly defaultOptions: T;
    open(title: T['title'], options: Omit<Partial<T>, 'title' | 'closeWord'>, cb?: (data: {
        control: PrizmOverlayControl;
        dialog: PrizmBaseDialogContext<PrizmSidebarResult, PrizmSidebarOptions>;
        observer: Observer<PrizmSidebarResult>;
        destroy$: Observable<void>;
    }) => void): Observable<PrizmSidebarResult>;
    protected getPosition(dialog: PrizmBaseDialogContext<any, any>): PrizmOverlayGlobalPosition;
    private safeUpdateButtonsWithDefaultStyles;
    private generateButton;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmSidebarService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmSidebarService<any>>;
}
