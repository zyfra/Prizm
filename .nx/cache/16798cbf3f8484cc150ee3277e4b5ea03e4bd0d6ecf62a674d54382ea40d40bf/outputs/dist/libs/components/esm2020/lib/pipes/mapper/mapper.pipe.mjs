import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmMapperPipe {
    /**
     * Maps object to an arbitrary result through a mapper function
     *
     * @param value an item to transform
     * @param mapper a mapping function
     * @param args arbitrary number of additional arguments
     */
    transform(value, mapper, ...args) {
        return mapper(value, ...args);
    }
}
PrizmMapperPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmMapperPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
PrizmMapperPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmMapperPipe, name: "prizmMapper" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmMapperPipe, decorators: [{
            type: Pipe,
            args: [{ name: `prizmMapper` }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwcGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9waXBlcy9tYXBwZXIvbWFwcGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBSXBELE1BQU0sT0FBTyxlQUFlO0lBQzFCOzs7Ozs7T0FNRztJQUNJLFNBQVMsQ0FBTyxLQUFRLEVBQUUsTUFBeUIsRUFBRSxHQUFHLElBQWU7UUFDNUUsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7NEdBVlUsZUFBZTswR0FBZixlQUFlOzJGQUFmLGVBQWU7a0JBRDNCLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1NYXBwZXIgfSBmcm9tICcuLi8uLi90eXBlcy9tYXBwZXInO1xuXG5AUGlwZSh7IG5hbWU6IGBwcml6bU1hcHBlcmAgfSlcbmV4cG9ydCBjbGFzcyBQcml6bU1hcHBlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqIE1hcHMgb2JqZWN0IHRvIGFuIGFyYml0cmFyeSByZXN1bHQgdGhyb3VnaCBhIG1hcHBlciBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgYW4gaXRlbSB0byB0cmFuc2Zvcm1cbiAgICogQHBhcmFtIG1hcHBlciBhIG1hcHBpbmcgZnVuY3Rpb25cbiAgICogQHBhcmFtIGFyZ3MgYXJiaXRyYXJ5IG51bWJlciBvZiBhZGRpdGlvbmFsIGFyZ3VtZW50c1xuICAgKi9cbiAgcHVibGljIHRyYW5zZm9ybTxULCBHPih2YWx1ZTogVCwgbWFwcGVyOiBQcml6bU1hcHBlcjxULCBHPiwgLi4uYXJnczogdW5rbm93bltdKTogRyB7XG4gICAgcmV0dXJuIG1hcHBlcih2YWx1ZSwgLi4uYXJncyk7XG4gIH1cbn1cbiJdfQ==