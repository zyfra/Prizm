import { Directive, HostBinding, Input } from '@angular/core';
import { PrizmShadowValue } from './models';
import { prizmGetShadow } from './shadow.util';
import * as i0 from "@angular/core";
export class PrizmShadowDirective {
    get boxShadow() {
        return prizmGetShadow(this.type);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmShadowDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmShadowDirective, isStandalone: true, selector: "[prizmShadow]", inputs: { type: ["prizmShadow", "type"] }, host: { properties: { "style.box-shadow": "this.boxShadow" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmShadowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmShadow]',
                    standalone: true,
                }]
        }], propDecorators: { type: [{
                type: Input,
                args: ['prizmShadow']
            }], boxShadow: [{
                type: HostBinding,
                args: ['style.box-shadow']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZG93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2RpcmVjdGl2ZXMvc2hhZG93L3NoYWRvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBbUIsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNL0MsTUFBTSxPQUFPLG9CQUFvQjtJQUkvQixJQUNZLFNBQVM7UUFDbkIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7OEdBUFUsb0JBQW9CO2tHQUFwQixvQkFBb0I7OzJGQUFwQixvQkFBb0I7a0JBSmhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFVBQVUsRUFBRSxJQUFJO2lCQUNqQjs4QkFHQyxJQUFJO3NCQURILEtBQUs7dUJBQUMsYUFBYTtnQkFJUixTQUFTO3NCQURwQixXQUFXO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bVNoYWRvd1R5cGUsIFByaXptU2hhZG93VmFsdWUgfSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgeyBwcml6bUdldFNoYWRvdyB9IGZyb20gJy4vc2hhZG93LnV0aWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1TaGFkb3ddJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1TaGFkb3dEaXJlY3RpdmUge1xuICBASW5wdXQoJ3ByaXptU2hhZG93JylcbiAgdHlwZSE6IFByaXptU2hhZG93VHlwZTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJveC1zaGFkb3cnKVxuICBwcml2YXRlIGdldCBib3hTaGFkb3coKTogUHJpem1TaGFkb3dWYWx1ZSB7XG4gICAgcmV0dXJuIHByaXptR2V0U2hhZG93KHRoaXMudHlwZSk7XG4gIH1cbn1cbiJdfQ==