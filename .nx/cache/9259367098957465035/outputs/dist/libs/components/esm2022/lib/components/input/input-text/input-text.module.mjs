import { NgModule } from '@angular/core';
import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputTextComponent } from './input-text.component';
import { PrizmTextareaDirective } from './textarea.directive';
import { PrizmInputBlockComponent } from './input-block.component';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use standalone
 * */
export class PrizmInputTextModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputTextModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputTextModule, imports: [PrizmInputCommonModule,
            PrizmInputBlockComponent,
            PrizmInputTextComponent,
            PrizmTextareaDirective], exports: [PrizmInputCommonModule,
            PrizmInputTextComponent,
            PrizmTextareaDirective,
            PrizmInputBlockComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputTextModule, imports: [PrizmInputCommonModule, PrizmInputCommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputTextModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        PrizmInputCommonModule,
                        PrizmInputBlockComponent,
                        PrizmInputTextComponent,
                        PrizmTextareaDirective,
                    ],
                    exports: [
                        PrizmInputCommonModule,
                        PrizmInputTextComponent,
                        PrizmTextareaDirective,
                        PrizmInputBlockComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGV4dC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LXRleHQvaW5wdXQtdGV4dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFbkU7OztLQUdLO0FBZUwsTUFBTSxPQUFPLG9CQUFvQjs4R0FBcEIsb0JBQW9COytHQUFwQixvQkFBb0IsWUFaN0Isc0JBQXNCO1lBQ3RCLHdCQUF3QjtZQUN4Qix1QkFBdUI7WUFDdkIsc0JBQXNCLGFBR3RCLHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDdkIsc0JBQXNCO1lBQ3RCLHdCQUF3QjsrR0FHZixvQkFBb0IsWUFaN0Isc0JBQXNCLEVBTXRCLHNCQUFzQjs7MkZBTWIsb0JBQW9CO2tCQWRoQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLHdCQUF3Qjt3QkFDeEIsdUJBQXVCO3dCQUN2QixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0Qix3QkFBd0I7cUJBQ3pCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptSW5wdXRDb21tb25Nb2R1bGUgfSBmcm9tICcuLi9jb21tb24vaW5wdXQtY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0VGV4dENvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1UZXh0YXJlYURpcmVjdGl2ZSB9IGZyb20gJy4vdGV4dGFyZWEuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptSW5wdXRCbG9ja0NvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtYmxvY2suY29tcG9uZW50JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogdXNlIHN0YW5kYWxvbmVcbiAqICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUHJpem1JbnB1dENvbW1vbk1vZHVsZSxcbiAgICBQcml6bUlucHV0QmxvY2tDb21wb25lbnQsXG4gICAgUHJpem1JbnB1dFRleHRDb21wb25lbnQsXG4gICAgUHJpem1UZXh0YXJlYURpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFByaXptSW5wdXRDb21tb25Nb2R1bGUsXG4gICAgUHJpem1JbnB1dFRleHRDb21wb25lbnQsXG4gICAgUHJpem1UZXh0YXJlYURpcmVjdGl2ZSxcbiAgICBQcml6bUlucHV0QmxvY2tDb21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRUZXh0TW9kdWxlIHt9XG4iXX0=