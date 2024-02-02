import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Этот пайп можно использовать для приведения типов переменных контекста ng-template,
 * чтобы ввести хотя бы какую-то проверку типа шаблона для таких ссылок.
 *
 * @button <ng-template let-someArg><span *ngIf="someArg | prizmToType : typeName"></span></ng-template>
 */
export class PrizmToTypePipe {
    transform(value, _typeSource) {
        return value;
    }
}
PrizmToTypePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmToTypePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PrizmToTypePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmToTypePipe, isStandalone: true, name: "prizmToType" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmToTypePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'prizmToType', standalone: true }]
        }] });
/**
 * TODO v5: remove
 * @deprecated
 * */
export const ToTypePipe = PrizmToTypePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tdHlwZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9oZWxwZXJzL3NyYy9saWIvcGlwZXMvdG8tdHlwZS90by10eXBlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRXBEOzs7OztHQUtHO0FBRUgsTUFBTSxPQUFPLGVBQWU7SUFDbkIsU0FBUyxDQUFJLEtBQWMsRUFBRSxXQUFjO1FBQ2hELE9BQU8sS0FBVSxDQUFDO0lBQ3BCLENBQUM7OzRHQUhVLGVBQWU7MEdBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUQzQixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFOztBQU0vQzs7O0tBR0s7QUFDTCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqINCt0YLQvtGCINC/0LDQudC/INC80L7QttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC00LvRjyDQv9GA0LjQstC10LTQtdC90LjRjyDRgtC40L/QvtCyINC/0LXRgNC10LzQtdC90L3Ri9GFINC60L7QvdGC0LXQutGB0YLQsCBuZy10ZW1wbGF0ZSxcbiAqINGH0YLQvtCx0Ysg0LLQstC10YHRgtC4INGF0L7RgtGPINCx0Ysg0LrQsNC60YPRji3RgtC+INC/0YDQvtCy0LXRgNC60YMg0YLQuNC/0LAg0YjQsNCx0LvQvtC90LAg0LTQu9GPINGC0LDQutC40YUg0YHRgdGL0LvQvtC6LlxuICpcbiAqIEBidXR0b24gPG5nLXRlbXBsYXRlIGxldC1zb21lQXJnPjxzcGFuICpuZ0lmPVwic29tZUFyZyB8IHByaXptVG9UeXBlIDogdHlwZU5hbWVcIj48L3NwYW4+PC9uZy10ZW1wbGF0ZT5cbiAqL1xuQFBpcGUoeyBuYW1lOiAncHJpem1Ub1R5cGUnLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgUHJpem1Ub1R5cGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHB1YmxpYyB0cmFuc2Zvcm08VD4odmFsdWU6IHVua25vd24sIF90eXBlU291cmNlOiBUKTogVCB7XG4gICAgcmV0dXJuIHZhbHVlIGFzIFQ7XG4gIH1cbn1cbi8qKlxuICogVE9ETyB2NTogcmVtb3ZlXG4gKiBAZGVwcmVjYXRlZFxuICogKi9cbmV4cG9ydCBjb25zdCBUb1R5cGVQaXBlID0gUHJpem1Ub1R5cGVQaXBlO1xuIl19