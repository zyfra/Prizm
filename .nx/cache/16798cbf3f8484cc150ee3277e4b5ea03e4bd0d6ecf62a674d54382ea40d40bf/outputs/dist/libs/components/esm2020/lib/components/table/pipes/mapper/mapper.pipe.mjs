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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwcGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3BpcGVzL21hcHBlci9tYXBwZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGVBQWU7SUFDMUI7Ozs7OztPQU1HO0lBQ0ksU0FBUyxDQUFPLEtBQVEsRUFBRSxNQUF5QixFQUFFLEdBQUcsSUFBVztRQUN4RSxPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs0R0FWVSxlQUFlOzBHQUFmLGVBQWU7MkZBQWYsZUFBZTtrQkFEM0IsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFByaXptTWFwcGVyPFQsIEc+ID0gKGl0ZW06IFQsIC4uLmFyZ3M6IGFueVtdKSA9PiBHO1xuXG5AUGlwZSh7IG5hbWU6IGBwcml6bU1hcHBlcmAgfSlcbmV4cG9ydCBjbGFzcyBQcml6bU1hcHBlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgLyoqXG4gICAqIE1hcHMgb2JqZWN0IHRvIGFuIGFyYml0cmFyeSByZXN1bHQgdGhyb3VnaCBhIG1hcHBlciBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgYW4gaXRlbSB0byB0cmFuc2Zvcm1cbiAgICogQHBhcmFtIG1hcHBlciBhIG1hcHBpbmcgZnVuY3Rpb25cbiAgICogQHBhcmFtIGFyZ3MgYXJiaXRyYXJ5IG51bWJlciBvZiBhZGRpdGlvbmFsIGFyZ3VtZW50c1xuICAgKi9cbiAgcHVibGljIHRyYW5zZm9ybTxULCBHPih2YWx1ZTogVCwgbWFwcGVyOiBQcml6bU1hcHBlcjxULCBHPiwgLi4uYXJnczogYW55W10pOiBHIHtcbiAgICByZXR1cm4gbWFwcGVyKHZhbHVlLCAuLi5hcmdzKTtcbiAgfVxufVxuIl19