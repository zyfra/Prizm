import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class PrizmHintService {
    constructor() {
        this.subHoveredSource$ = new ReplaySubject();
    }
    childHovered(hintId) {
        return this.subHoveredSource$.pipe(filter(({ id }) => id === hintId), map(({ hovered }) => hovered), startWith(false));
    }
    emit(hintId, hovered) {
        this.subHoveredSource$.next({ id: hintId, hovered });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmHintService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmHintService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmHintService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9oaW50L2hpbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR3hELE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7UUFFbUIsc0JBQWlCLEdBQUcsSUFBSSxhQUFhLEVBQW9DLENBQUM7S0FhNUY7SUFYUSxZQUFZLENBQUMsTUFBYztRQUNoQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFDakMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQzdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FDakIsQ0FBQztJQUNKLENBQUM7SUFFTSxJQUFJLENBQUMsTUFBYyxFQUFFLE9BQWdCO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs4R0FiVSxnQkFBZ0I7a0hBQWhCLGdCQUFnQixjQURILE1BQU07OzJGQUNuQixnQkFBZ0I7a0JBRDVCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQcml6bUhpbnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzdWJIb3ZlcmVkU291cmNlJCA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgaWQ6IHN0cmluZzsgaG92ZXJlZDogYm9vbGVhbiB9PigpO1xuXG4gIHB1YmxpYyBjaGlsZEhvdmVyZWQoaGludElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJIb3ZlcmVkU291cmNlJC5waXBlKFxuICAgICAgZmlsdGVyKCh7IGlkIH0pID0+IGlkID09PSBoaW50SWQpLFxuICAgICAgbWFwKCh7IGhvdmVyZWQgfSkgPT4gaG92ZXJlZCksXG4gICAgICBzdGFydFdpdGgoZmFsc2UpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBlbWl0KGhpbnRJZDogc3RyaW5nLCBob3ZlcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zdWJIb3ZlcmVkU291cmNlJC5uZXh0KHsgaWQ6IGhpbnRJZCwgaG92ZXJlZCB9KTtcbiAgfVxufVxuIl19