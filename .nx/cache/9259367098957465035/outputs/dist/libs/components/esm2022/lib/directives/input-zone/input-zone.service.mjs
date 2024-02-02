import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class PrizmInputZoneService {
    constructor() {
        this.map = new Map();
        this.changes$$ = new Subject();
        this.changes$ = this.changes$$.asObservable();
        this.elements$ = this.changes$.pipe(startWith(null), map(() => this.elements));
    }
    get elements() {
        return Array.from(this.map.values());
    }
    set(idx, input) {
        this.map.set(idx, input);
        this.changes$$.next();
    }
    getIdx(input) {
        for (const entry of Array.from(this.map.entries())) {
            if (entry[1] === input)
                return entry[0];
        }
        return -1;
    }
    getByIdx(idx) {
        return this.map.get(idx) ?? null;
    }
    add(input) {
        const idx = Math.max(-1, ...Array.from(this.map.keys())) + 1;
        this.map.set(idx, input);
        this.changes$$.next();
        return idx;
    }
    delete(idx) {
        this.map.delete(idx);
        this.changes$$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputZoneService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputZoneService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputZoneService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtem9uZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9pbnB1dC16b25lL2lucHV0LXpvbmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLaEQsTUFBTSxPQUFPLHFCQUFxQjtJQUhsQztRQUltQixRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQXFDLENBQUM7UUFDbkQsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDakMsYUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFJekMsY0FBUyxHQUE0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDckYsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCLENBQUM7S0E2Qkg7SUFuQ0MsSUFBSSxRQUFRO1FBQ1YsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBTU0sR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFnQztRQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQWdDO1FBQzVDLEtBQUssTUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDbEQsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSztnQkFBRSxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRU0sUUFBUSxDQUFDLEdBQVc7UUFDekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVNLEdBQUcsQ0FBQyxLQUFnQztRQUN6QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVc7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDOzhHQXRDVSxxQkFBcUI7a0hBQXJCLHFCQUFxQixjQUZwQixNQUFNOzsyRkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dEluWm9uZURpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQtaW4tem9uZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0Wm9uZVNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBNYXA8bnVtYmVyLCBQcml6bUlucHV0SW5ab25lRGlyZWN0aXZlPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNoYW5nZXMkJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHB1YmxpYyByZWFkb25seSBjaGFuZ2VzJCA9IHRoaXMuY2hhbmdlcyQkLmFzT2JzZXJ2YWJsZSgpO1xuICBnZXQgZWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5tYXAudmFsdWVzKCkpO1xuICB9XG4gIHB1YmxpYyByZWFkb25seSBlbGVtZW50cyQ6IE9ic2VydmFibGU8UHJpem1JbnB1dEluWm9uZURpcmVjdGl2ZVtdPiA9IHRoaXMuY2hhbmdlcyQucGlwZShcbiAgICBzdGFydFdpdGgobnVsbCksXG4gICAgbWFwKCgpID0+IHRoaXMuZWxlbWVudHMpXG4gICk7XG5cbiAgcHVibGljIHNldChpZHg6IG51bWJlciwgaW5wdXQ6IFByaXptSW5wdXRJblpvbmVEaXJlY3RpdmUpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5zZXQoaWR4LCBpbnB1dCk7XG4gICAgdGhpcy5jaGFuZ2VzJCQubmV4dCgpO1xuICB9XG5cbiAgcHVibGljIGdldElkeChpbnB1dDogUHJpem1JbnB1dEluWm9uZURpcmVjdGl2ZSk6IG51bWJlciB7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBBcnJheS5mcm9tKHRoaXMubWFwLmVudHJpZXMoKSkpIHtcbiAgICAgIGlmIChlbnRyeVsxXSA9PT0gaW5wdXQpIHJldHVybiBlbnRyeVswXTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcHVibGljIGdldEJ5SWR4KGlkeDogbnVtYmVyKTogUHJpem1JbnB1dEluWm9uZURpcmVjdGl2ZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm1hcC5nZXQoaWR4KSA/PyBudWxsO1xuICB9XG5cbiAgcHVibGljIGFkZChpbnB1dDogUHJpem1JbnB1dEluWm9uZURpcmVjdGl2ZSk6IG51bWJlciB7XG4gICAgY29uc3QgaWR4ID0gTWF0aC5tYXgoLTEsIC4uLkFycmF5LmZyb20odGhpcy5tYXAua2V5cygpKSkgKyAxO1xuICAgIHRoaXMubWFwLnNldChpZHgsIGlucHV0KTtcbiAgICB0aGlzLmNoYW5nZXMkJC5uZXh0KCk7XG4gICAgcmV0dXJuIGlkeDtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGUoaWR4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5kZWxldGUoaWR4KTtcbiAgICB0aGlzLmNoYW5nZXMkJC5uZXh0KCk7XG4gIH1cbn1cbiJdfQ==