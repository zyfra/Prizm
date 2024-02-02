import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class PrizmTdService {
    constructor() {
        this.count$$ = new BehaviorSubject(0);
        this.count$ = this.count$$.asObservable();
    }
    get count() {
        return this.count$$.value;
    }
    increment(value = 1) {
        this.count$$.next(this.count$$.value + value);
    }
    decrement(value = 1) {
        this.count$$.next(this.count$$.value - value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTdService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTdService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmTdService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGQvdGQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBR3ZDLE1BQU0sT0FBTyxjQUFjO0lBRDNCO1FBRW1CLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBUyxDQUFDLENBQUMsQ0FBQztRQUMxQyxXQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQVl0RDtJQVhDLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVNLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7OEdBYlUsY0FBYztrSEFBZCxjQUFjOzsyRkFBZCxjQUFjO2tCQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcml6bVRkU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY291bnQkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigwKTtcbiAgcHVibGljIHJlYWRvbmx5IGNvdW50JCA9IHRoaXMuY291bnQkJC5hc09ic2VydmFibGUoKTtcbiAgZ2V0IGNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvdW50JCQudmFsdWU7XG4gIH1cblxuICBwdWJsaWMgaW5jcmVtZW50KHZhbHVlID0gMSkge1xuICAgIHRoaXMuY291bnQkJC5uZXh0KHRoaXMuY291bnQkJC52YWx1ZSArIHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWNyZW1lbnQodmFsdWUgPSAxKSB7XG4gICAgdGhpcy5jb3VudCQkLm5leHQodGhpcy5jb3VudCQkLnZhbHVlIC0gdmFsdWUpO1xuICB9XG59XG4iXX0=