import { Observable } from 'rxjs';
export declare function invokeIfCanCloseSidebar(cb: () => void, canClose?: () => Observable<boolean>): Observable<any>;
