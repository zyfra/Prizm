import { Directive, Inject } from '@angular/core';
import { AbstractPrizmControl } from './control';
import * as i0 from "@angular/core";
export class AbstractPrizmTextfieldHost {
    constructor(host) {
        this.host = host;
    }
    get readOnly() {
        return this.host.readOnly;
    }
    get disabled() {
        return this.host.computedDisabled;
    }
    get invalid() {
        return this.host.computedInvalid;
    }
    get focusable() {
        return this.host.computedFocusable;
    }
    get value() {
        return this.host.value?.toString() || ``;
    }
    process(_input) {
        console.log('prizm process', { _input });
    }
}
AbstractPrizmTextfieldHost.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AbstractPrizmTextfieldHost, deps: [{ token: AbstractPrizmControl }], target: i0.ɵɵFactoryTarget.Directive });
AbstractPrizmTextfieldHost.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: AbstractPrizmTextfieldHost, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AbstractPrizmTextfieldHost, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [AbstractPrizmControl]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtdGV4dGZpZWxkLWhvc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9hYnN0cmFjdC9hYnN0cmFjdC10ZXh0ZmllbGQtaG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBR2pELE1BQU0sT0FBZ0IsMEJBQTBCO0lBRzlDLFlBQTZELElBQU87UUFBUCxTQUFJLEdBQUosSUFBSSxDQUFHO0lBQUcsQ0FBQztJQUV4RSxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDbkMsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUlNLE9BQU8sQ0FBQyxNQUF3QjtRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7dUhBN0JtQiwwQkFBMEIsa0JBRzFCLG9CQUFvQjsyR0FIcEIsMEJBQTBCOzJGQUExQiwwQkFBMEI7a0JBRC9DLFNBQVM7OzBCQUlLLE1BQU07MkJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptVGV4dGZpZWxkSG9zdCB9IGZyb20gJy4uL3R5cGVzL3RleHRmaWVsZC1ob3N0JztcbmltcG9ydCB7IEFic3RyYWN0UHJpem1Db250cm9sIH0gZnJvbSAnLi9jb250cm9sJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RQcml6bVRleHRmaWVsZEhvc3Q8VCBleHRlbmRzIEFic3RyYWN0UHJpem1Db250cm9sPGFueT4+XG4gIGltcGxlbWVudHMgUHJpem1UZXh0ZmllbGRIb3N0XG57XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQWJzdHJhY3RQcml6bUNvbnRyb2wpIHByb3RlY3RlZCByZWFkb25seSBob3N0OiBUKSB7fVxuXG4gIGdldCByZWFkT25seSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ob3N0LnJlYWRPbmx5O1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhvc3QuY29tcHV0ZWREaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBpbnZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhvc3QuY29tcHV0ZWRJbnZhbGlkO1xuICB9XG5cbiAgZ2V0IGZvY3VzYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ob3N0LmNvbXB1dGVkRm9jdXNhYmxlO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaG9zdC52YWx1ZT8udG9TdHJpbmcoKSB8fCBgYDtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBvblZhbHVlQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuXG4gIHB1YmxpYyBwcm9jZXNzKF9pbnB1dDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCdwcml6bSBwcm9jZXNzJywgeyBfaW5wdXQgfSk7XG4gIH1cbn1cbiJdfQ==