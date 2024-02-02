import { INavigationTree } from '../navigation.interfaces';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ActiveNavigationItemService {
    activeItem$: BehaviorSubject<INavigationTree | null>;
    set activeItem(item: INavigationTree | null);
    get activeItem(): INavigationTree | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActiveNavigationItemService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActiveNavigationItemService>;
}
