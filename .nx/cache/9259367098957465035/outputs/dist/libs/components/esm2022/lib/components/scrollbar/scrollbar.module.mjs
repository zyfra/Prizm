import { NgModule } from '@angular/core';
import { PrizmScrollRefDirective } from './scroll-ref.directive';
import { PrizmScrollbarComponent } from './scrollbar.component';
import { PrizmScrollableDirective } from './scrollable.directive';
import { PrizmScrollControlsComponent } from './scroll-controls.component';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone
 * */
export class PrizmScrollbarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollbarModule, imports: [PrizmScrollControlsComponent,
            PrizmScrollbarComponent,
            PrizmScrollRefDirective,
            PrizmScrollableDirective], exports: [PrizmScrollbarComponent, PrizmScrollRefDirective, PrizmScrollableDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollbarModule, imports: [PrizmScrollControlsComponent,
            PrizmScrollbarComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmScrollbarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        PrizmScrollControlsComponent,
                        PrizmScrollbarComponent,
                        PrizmScrollRefDirective,
                        PrizmScrollableDirective,
                    ],
                    exports: [PrizmScrollbarComponent, PrizmScrollRefDirective, PrizmScrollableDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsYmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFFM0U7OztLQUdLO0FBVUwsTUFBTSxPQUFPLG9CQUFvQjs4R0FBcEIsb0JBQW9COytHQUFwQixvQkFBb0IsWUFQN0IsNEJBQTRCO1lBQzVCLHVCQUF1QjtZQUN2Qix1QkFBdUI7WUFDdkIsd0JBQXdCLGFBRWhCLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLHdCQUF3QjsrR0FFekUsb0JBQW9CLFlBUDdCLDRCQUE0QjtZQUM1Qix1QkFBdUI7OzJGQU1kLG9CQUFvQjtrQkFUaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsNEJBQTRCO3dCQUM1Qix1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsQ0FBQztpQkFDdEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1TY3JvbGxSZWZEaXJlY3RpdmUgfSBmcm9tICcuL3Njcm9sbC1yZWYuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptU2Nyb2xsYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zY3JvbGxiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptU2Nyb2xsYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vc2Nyb2xsYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1TY3JvbGxDb250cm9sc0NvbXBvbmVudCB9IGZyb20gJy4vc2Nyb2xsLWNvbnRyb2xzLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIHVzZSBzdGFuZGFsb25lXG4gKiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFByaXptU2Nyb2xsQ29udHJvbHNDb21wb25lbnQsXG4gICAgUHJpem1TY3JvbGxiYXJDb21wb25lbnQsXG4gICAgUHJpem1TY3JvbGxSZWZEaXJlY3RpdmUsXG4gICAgUHJpem1TY3JvbGxhYmxlRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbUHJpem1TY3JvbGxiYXJDb21wb25lbnQsIFByaXptU2Nyb2xsUmVmRGlyZWN0aXZlLCBQcml6bVNjcm9sbGFibGVEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVNjcm9sbGJhck1vZHVsZSB7fVxuIl19