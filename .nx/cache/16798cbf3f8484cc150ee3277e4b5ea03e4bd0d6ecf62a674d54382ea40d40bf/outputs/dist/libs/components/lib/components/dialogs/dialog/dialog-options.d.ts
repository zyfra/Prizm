import { ElementRef, InjectionToken, Provider } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { Observable } from 'rxjs';
import { PrizmOverlayContent } from '../../../modules/overlay/models';
export declare const PRIZM_DIALOGS_CLOSE: InjectionToken<Observable<void>>;
export declare const PRIZM_DIALOG_CLOSE_STREAM: InjectionToken<Observable<unknown>>;
export declare const PRIZM_DIALOG_PROVIDERS: Provider[];
export declare function prizmDialogCloseStreamFactory(documentRef: Document, windowRef: Window, { nativeElement }: ElementRef<HTMLElement>, close$: Observable<void>, destroy$: PrizmDestroyService, content: PrizmOverlayContent): Observable<unknown>;
