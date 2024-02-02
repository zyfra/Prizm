import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class PrizmSanitizerPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, method) {
        return this.sanitizer[method](value);
    }
}
PrizmSanitizerPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSanitizerPipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
PrizmSanitizerPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmSanitizerPipe, isStandalone: true, name: "prizmSanitizer" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSanitizerPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'prizmSanitizer',
                    standalone: true,
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2hlbHBlcnMvc3JjL2xpYi9waXBlcy9zYW5pdGl6ZS9zYW5pdGl6ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7OztBQVFwRSxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBRyxDQUFDO0lBRXhDLFNBQVMsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUM1QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7K0dBTFUsa0JBQWtCOzZHQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFKOUIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsZ0JBQWdCO29CQUN0QixVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVZhbHVlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbnR5cGUgTWV0aG9kID0gRXhjbHVkZTxrZXlvZiBEb21TYW5pdGl6ZXIsICdzYW5pdGl6ZSc+O1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdwcml6bVNhbml0aXplcicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptU2FuaXRpemVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgbWV0aG9kOiBNZXRob2QpOiBTYWZlVmFsdWUge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplclttZXRob2RdKHZhbHVlKTtcbiAgfVxufVxuIl19