import { Observable, Subject } from 'rxjs';
import { ViewMode } from '../interfaces';
import * as i0 from "@angular/core";
export declare class PrizmNavigationMenuToolbarService {
    private searchVisible$$;
    private searchValue$$;
    private viewMode$$;
    closeAll$: Subject<void>;
    searchVisible$: Observable<boolean>;
    searchState$: Observable<{
        enabled: boolean;
        value: string;
    }>;
    viewMode$: Observable<ViewMode>;
    changeSearchValue(searchValue: string): void;
    toggleSearch(): void;
    changeViewMode(viewMode: ViewMode): void;
    closeAll(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmNavigationMenuToolbarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmNavigationMenuToolbarService>;
}
