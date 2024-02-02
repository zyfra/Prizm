import { Directive, HostListener, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { DefaultInputInvalidTextClass } from '../base/input-invalid-text-base-class.directive';
import { unsupportedKeyCharacters } from './const';
import * as i0 from "@angular/core";
export class PrizmInputAllowedSymbolsDirective extends DefaultInputInvalidTextClass {
    constructor() {
        super(...arguments);
        this.prizmInputAllowedSymbols = ``;
    }
    block(data, event) {
        if (unsupportedKeyCharacters.includes(data)) {
            return void 0;
        }
        if (this.prizmInputAllowedSymbols &&
            ((this.prizmInputAllowedSymbols instanceof RegExp && !data.match(this.prizmInputAllowedSymbols)) ||
                (!(this.prizmInputAllowedSymbols instanceof RegExp) &&
                    !(Array.isArray(data) ? data : [data]).find(i => i === data)))) {
            return false;
        }
    }
}
PrizmInputAllowedSymbolsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputAllowedSymbolsDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
PrizmInputAllowedSymbolsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmInputAllowedSymbolsDirective, selector: "[prizmInputAllowedSymbols]", inputs: { prizmInputAllowedSymbols: "prizmInputAllowedSymbols" }, host: { listeners: { "keydown": "block($event.key,$event)" } }, providers: [PrizmDestroyService], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputAllowedSymbolsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmInputAllowedSymbols]',
                    providers: [PrizmDestroyService],
                }]
        }], propDecorators: { prizmInputAllowedSymbols: [{
                type: Input
            }], block: [{
                type: HostListener,
                args: ['keydown', ['$event.key', '$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtYWxsb3dlZC1zeW1ib2xzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvY29tbW9uL2lucHV0LWFsbG93ZWQtc3ltYm9scy9pbnB1dC1hbGxvd2VkLXN5bWJvbHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBTW5ELE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSw0QkFBNEI7SUFKbkY7O1FBS1csNkJBQXdCLEdBQW9DLEVBQUUsQ0FBQztLQWdCekU7SUFiUSxLQUFLLENBQUMsSUFBWSxFQUFFLEtBQW9CO1FBQzdDLElBQUksd0JBQXdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDLE9BQU8sS0FBSyxDQUFDLENBQUM7U0FDZjtRQUNELElBQ0UsSUFBSSxDQUFDLHdCQUF3QjtZQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixZQUFZLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQzlGLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsWUFBWSxNQUFNLENBQUM7b0JBQ2pELENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNsRTtZQUNBLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs4SEFoQlUsaUNBQWlDO2tIQUFqQyxpQ0FBaUMsdUxBRmpDLENBQUMsbUJBQW1CLENBQUM7MkZBRXJCLGlDQUFpQztrQkFKN0MsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakM7OEJBRVUsd0JBQXdCO3NCQUFoQyxLQUFLO2dCQUdDLEtBQUs7c0JBRFgsWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgRGVmYXVsdElucHV0SW52YWxpZFRleHRDbGFzcyB9IGZyb20gJy4uL2Jhc2UvaW5wdXQtaW52YWxpZC10ZXh0LWJhc2UtY2xhc3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IHVuc3VwcG9ydGVkS2V5Q2hhcmFjdGVycyB9IGZyb20gJy4vY29uc3QnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1JbnB1dEFsbG93ZWRTeW1ib2xzXScsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0QWxsb3dlZFN5bWJvbHNEaXJlY3RpdmUgZXh0ZW5kcyBEZWZhdWx0SW5wdXRJbnZhbGlkVGV4dENsYXNzIHtcbiAgQElucHV0KCkgcHJpem1JbnB1dEFsbG93ZWRTeW1ib2xzOiBSZWdFeHAgfCBzdHJpbmcgfCBzdHJpbmdbXSB8IGBgID0gYGA7XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50LmtleScsICckZXZlbnQnXSlcbiAgcHVibGljIGJsb2NrKGRhdGE6IHN0cmluZywgZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHwgZmFsc2Uge1xuICAgIGlmICh1bnN1cHBvcnRlZEtleUNoYXJhY3RlcnMuaW5jbHVkZXMoZGF0YSkpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMucHJpem1JbnB1dEFsbG93ZWRTeW1ib2xzICYmXG4gICAgICAoKHRoaXMucHJpem1JbnB1dEFsbG93ZWRTeW1ib2xzIGluc3RhbmNlb2YgUmVnRXhwICYmICFkYXRhLm1hdGNoKHRoaXMucHJpem1JbnB1dEFsbG93ZWRTeW1ib2xzKSkgfHxcbiAgICAgICAgKCEodGhpcy5wcml6bUlucHV0QWxsb3dlZFN5bWJvbHMgaW5zdGFuY2VvZiBSZWdFeHApICYmXG4gICAgICAgICAgIShBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXSkuZmluZChpID0+IGkgPT09IGRhdGEpKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==