import { EventEmitter } from '@angular/core';
import { PrizmTreeItemComponent } from '../components/tree-item/tree-item.component';
import { PrizmTreeAccessor, PrizmTreeController } from '../misc/tree.interfaces';
import * as i0 from "@angular/core";
export declare class PrizmTreeControllerDirective<T> implements PrizmTreeController, PrizmTreeAccessor<T> {
    prizmTreeController: boolean;
    map: Map<T, boolean>;
    readonly toggled: EventEmitter<T>;
    readonly expandedChanged: EventEmitter<{
        value: T;
        isExpanded: boolean;
    }>;
    readonly items: Map<PrizmTreeItemComponent, T>;
    register(item: PrizmTreeItemComponent, value: T): void;
    unregister(item: PrizmTreeItemComponent): void;
    isExpanded(item: PrizmTreeItemComponent): boolean;
    toggle(item: PrizmTreeItemComponent): void;
    toggleByItemValue(value: T, forceState?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTreeControllerDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmTreeControllerDirective<any>, "[prizmTreeController][map]", ["prizmTreeController"], { "prizmTreeController": { "alias": "prizmTreeController"; "required": false; }; "map": { "alias": "map"; "required": false; }; }, { "toggled": "toggled"; "expandedChanged": "expandedChanged"; }, never, never, false, never>;
}
