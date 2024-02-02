import { AbstractPrizmDialogService } from '../../../abstract/dialog.service';
import { Injectable } from '@angular/core';
import { PrizmDialogComponent } from './dialog.component';
import { PrizmOverlayInsidePlacement } from '../../../modules/overlay';
import * as i0 from "@angular/core";
const DEFAULT_OPTIONS = {
    size: 'm',
    required: false,
    closeable: true,
    content: '',
    footer: '',
    position: PrizmOverlayInsidePlacement.CENTER,
    dismissible: true,
    header: '',
    outerHeader: '',
};
export class PrizmDialogService extends AbstractPrizmDialogService {
    constructor() {
        super(...arguments);
        this.component = PrizmDialogComponent;
        this.defaultOptions = DEFAULT_OPTIONS;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDialogService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDialogService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmDialogService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2RpYWxvZ3MvZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBR3ZFLE1BQU0sZUFBZSxHQUF1QjtJQUMxQyxJQUFJLEVBQUUsR0FBRztJQUNULFFBQVEsRUFBRSxLQUFLO0lBQ2YsU0FBUyxFQUFFLElBQUk7SUFDZixPQUFPLEVBQUUsRUFBRTtJQUNYLE1BQU0sRUFBRSxFQUFFO0lBQ1YsUUFBUSxFQUFFLDJCQUEyQixDQUFDLE1BQU07SUFDNUMsV0FBVyxFQUFFLElBQUk7SUFDakIsTUFBTSxFQUFFLEVBQUU7SUFDVixXQUFXLEVBQUUsRUFBRTtDQUNQLENBQUM7QUFLWCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsMEJBQThDO0lBSHRGOztRQUlxQixjQUFTLEdBQUcsb0JBQW9CLENBQUM7UUFDakMsbUJBQWMsR0FBdUIsZUFBZSxDQUFDO0tBQ3pFOzhHQUhZLGtCQUFrQjtrSEFBbEIsa0JBQWtCLGNBRmpCLE1BQU07OzJGQUVQLGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdFByaXptRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2Fic3RyYWN0L2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptT3ZlcmxheUluc2lkZVBsYWNlbWVudCB9IGZyb20gJy4uLy4uLy4uL21vZHVsZXMvb3ZlcmxheSc7XG5pbXBvcnQgeyBQcml6bURpYWxvZ09wdGlvbnMgfSBmcm9tICcuL2RpYWxvZy5tb2RlbHMnO1xuXG5jb25zdCBERUZBVUxUX09QVElPTlM6IFByaXptRGlhbG9nT3B0aW9ucyA9IHtcbiAgc2l6ZTogJ20nLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIGNsb3NlYWJsZTogdHJ1ZSxcbiAgY29udGVudDogJycsXG4gIGZvb3RlcjogJycsXG4gIHBvc2l0aW9uOiBQcml6bU92ZXJsYXlJbnNpZGVQbGFjZW1lbnQuQ0VOVEVSLFxuICBkaXNtaXNzaWJsZTogdHJ1ZSxcbiAgaGVhZGVyOiAnJyxcbiAgb3V0ZXJIZWFkZXI6ICcnLFxufSBhcyBjb25zdDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptRGlhbG9nU2VydmljZSBleHRlbmRzIEFic3RyYWN0UHJpem1EaWFsb2dTZXJ2aWNlPFByaXptRGlhbG9nT3B0aW9ucz4ge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29tcG9uZW50ID0gUHJpem1EaWFsb2dDb21wb25lbnQ7XG4gIHByb3RlY3RlZCByZWFkb25seSBkZWZhdWx0T3B0aW9uczogUHJpem1EaWFsb2dPcHRpb25zID0gREVGQVVMVF9PUFRJT05TO1xufVxuIl19