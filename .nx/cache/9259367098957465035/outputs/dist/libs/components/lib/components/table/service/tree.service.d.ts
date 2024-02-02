import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class PrizmTableTreeService {
    readonly showDirectChildrenMap: Map<number, boolean | null>;
    private readonly showAllChildrenMap;
    private readonly changes$$;
    readonly changes$: Observable<unknown>;
    private readonly nestedStructure;
    canShowChild(idx: number): Observable<boolean>;
    isChildrenOpened(idx: number): boolean;
    private findAllParents;
    /**
     * flip nestedStructure to (parent: children[])
     * */
    private flipNestedStructure;
    private findAllChildren;
    addChildToParent(childIdx: number, parentIdx: number): void;
    private showHideAllNested;
    private showHideAll;
    showAllChildren(idx?: number | null): void;
    hideAllChildren(idx?: number | null): void;
    showChildren(idx: number): void;
    hideChildren(idx: number): void;
    clear(): void;
    toggleChildren(idx: number): void;
    private updateMap;
    init(idx: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTableTreeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PrizmTableTreeService>;
}
