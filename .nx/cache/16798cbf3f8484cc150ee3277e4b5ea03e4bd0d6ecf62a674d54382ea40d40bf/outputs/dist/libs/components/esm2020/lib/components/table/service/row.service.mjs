import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PrizmTableRowService {
    constructor() {
        this.idxCount = -1;
        this.map = new Map();
    }
    saveId(id, idx) {
        this.map.set(id, idx);
    }
    getIdxById(id) {
        return this.map.get(id) ?? null;
    }
    incrementIdx() {
        this.idxCount++;
    }
    getLastIncrementedIdx() {
        return this.idxCount;
    }
}
PrizmTableRowService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableRowService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PrizmTableRowService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableRowService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTableRowService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL3NlcnZpY2Uvcm93LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPM0MsTUFBTSxPQUFPLG9CQUFvQjtJQURqQztRQUVVLGFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNMLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQztLQWVuRDtJQWJRLE1BQU0sQ0FBQyxFQUFXLEVBQUUsR0FBVztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNNLFVBQVUsQ0FBQyxFQUFXO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ00scUJBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOztpSEFoQlUsb0JBQW9CO3FIQUFwQixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFEaEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByaXptUHVyZSB9IGZyb20gJ0Bwcml6bS11aS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbXBhcmUgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcml6bVRhYmxlUm93U2VydmljZSB7XG4gIHByaXZhdGUgaWR4Q291bnQgPSAtMTtcbiAgcHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwPHVua25vd24sIG51bWJlcj4oKTtcblxuICBwdWJsaWMgc2F2ZUlkKGlkOiB1bmtub3duLCBpZHg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubWFwLnNldChpZCwgaWR4KTtcbiAgfVxuICBwdWJsaWMgZ2V0SWR4QnlJZChpZDogdW5rbm93bik6IG51bWJlciB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm1hcC5nZXQoaWQpID8/IG51bGw7XG4gIH1cblxuICBwdWJsaWMgaW5jcmVtZW50SWR4KCk6IHZvaWQge1xuICAgIHRoaXMuaWR4Q291bnQrKztcbiAgfVxuICBwdWJsaWMgZ2V0TGFzdEluY3JlbWVudGVkSWR4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaWR4Q291bnQ7XG4gIH1cbn1cbiJdfQ==