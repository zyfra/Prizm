import { PrizmTreeItemComponent } from '../components/tree-item/tree-item.component';
import { PrizmTreeController } from '../misc/tree.interfaces';
import * as i0 from "@angular/core";
export declare class PrizmTreeItemControllerDirective implements PrizmTreeController {
    private map;
    private _prizmTreeController;
    set prizmTreeController(value: boolean);
    isExpanded(item: PrizmTreeItemComponent): boolean;
    toggle(item: PrizmTreeItemComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTreeItemControllerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmTreeItemControllerDirective, "[prizmTreeController]:not([map])", ["prizmTreeController"], { "prizmTreeController": "prizmTreeController"; }, {}, never, never, false, never>;
}
