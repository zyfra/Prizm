import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmHintModule } from '../../../directives/hint';
import { PrizmIconModule } from '../../icon';
import { PrizmInputStatusSubtextComponent } from './input-invalid-subtext/input-status-subtext.component';
import { PrizmInputLayoutComponent } from './input-layout/input-layout.component';
import { PrizmInputStatusTextDirective } from './input-status-text/input-status-text.directive';
import { PrizmInputIconButtonModule } from './input-icon-button/input-icon-button.module';
import { PrizmInputLayoutBottomDirective } from './input-layout/input-layout-bottom.directive';
import { PrizmInputLayoutRightDirective } from './input-layout/input-layout-right.directive';
import { PrizmInputLayoutLeftDirective } from './input-layout/input-layout-left.directive';
import { PrizmInputLayoutInBodyDirective } from './input-layout/input-layout-in-body.directive';
import { PrizmInputLayoutSubtextDirective } from './input-layout/input-layout-subtext.directive';
import { PolymorphModule, PrizmZoneEventModule } from '../../../directives';
import { PrizmLetModule, PrizmToObservableModule } from '@prizm-ui/helpers';
import { PrizmInputHintModule } from './input-hint/input-hint.module';
import { PrizmInputAllowedSymbolsModule } from './input-allowed-symbols';
import { PrizmInputCorrectorModule } from './input-corrector';
import * as i0 from "@angular/core";
export class PrizmInputCommonModule {
}
PrizmInputCommonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputCommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmInputCommonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputCommonModule, declarations: [PrizmInputLayoutRightDirective,
        PrizmInputLayoutLeftDirective,
        PrizmInputLayoutComponent,
        PrizmInputStatusSubtextComponent,
        PrizmInputStatusTextDirective,
        PrizmInputLayoutBottomDirective,
        PrizmInputLayoutInBodyDirective,
        PrizmInputLayoutSubtextDirective], imports: [CommonModule,
        PrizmInputHintModule,
        PrizmToObservableModule,
        PrizmLetModule,
        PolymorphModule,
        PrizmIconModule,
        PrizmZoneEventModule,
        PrizmHintModule,
        PrizmInputIconButtonModule,
        PrizmInputAllowedSymbolsModule,
        PrizmInputCorrectorModule], exports: [CommonModule,
        PrizmInputHintModule,
        PrizmInputLayoutComponent,
        PrizmInputStatusSubtextComponent,
        PrizmInputIconButtonModule,
        PrizmInputStatusTextDirective,
        PrizmInputLayoutBottomDirective,
        PrizmInputLayoutLeftDirective,
        PrizmInputLayoutRightDirective,
        PrizmInputLayoutInBodyDirective,
        PrizmInputLayoutSubtextDirective,
        PrizmInputAllowedSymbolsModule,
        PrizmInputCorrectorModule] });
PrizmInputCommonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputCommonModule, imports: [CommonModule,
        PrizmInputHintModule,
        PrizmToObservableModule,
        PrizmLetModule,
        PolymorphModule,
        PrizmIconModule,
        PrizmZoneEventModule,
        PrizmHintModule,
        PrizmInputIconButtonModule,
        PrizmInputAllowedSymbolsModule,
        PrizmInputCorrectorModule, CommonModule,
        PrizmInputHintModule,
        PrizmInputIconButtonModule,
        PrizmInputAllowedSymbolsModule,
        PrizmInputCorrectorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmInputCommonModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        PrizmInputHintModule,
                        PrizmToObservableModule,
                        PrizmLetModule,
                        PolymorphModule,
                        PrizmIconModule,
                        PrizmZoneEventModule,
                        PrizmHintModule,
                        PrizmInputIconButtonModule,
                        PrizmInputAllowedSymbolsModule,
                        PrizmInputCorrectorModule,
                    ],
                    declarations: [
                        PrizmInputLayoutRightDirective,
                        PrizmInputLayoutLeftDirective,
                        PrizmInputLayoutComponent,
                        PrizmInputStatusSubtextComponent,
                        PrizmInputStatusTextDirective,
                        PrizmInputLayoutBottomDirective,
                        PrizmInputLayoutInBodyDirective,
                        PrizmInputLayoutSubtextDirective,
                    ],
                    exports: [
                        CommonModule,
                        PrizmInputHintModule,
                        PrizmInputLayoutComponent,
                        PrizmInputStatusSubtextComponent,
                        PrizmInputIconButtonModule,
                        PrizmInputStatusTextDirective,
                        PrizmInputLayoutBottomDirective,
                        PrizmInputLayoutLeftDirective,
                        PrizmInputLayoutRightDirective,
                        PrizmInputLayoutInBodyDirective,
                        PrizmInputLayoutSubtextDirective,
                        PrizmInputAllowedSymbolsModule,
                        PrizmInputCorrectorModule,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvY29tbW9uL2lucHV0LWNvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDMUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDaEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0YsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDN0YsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakcsT0FBTyxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUEwQzlELE1BQU0sT0FBTyxzQkFBc0I7O21IQUF0QixzQkFBc0I7b0hBQXRCLHNCQUFzQixpQkF6Qi9CLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLGdDQUFnQztRQUNoQyw2QkFBNkI7UUFDN0IsK0JBQStCO1FBQy9CLCtCQUErQjtRQUMvQixnQ0FBZ0MsYUFwQmhDLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5Qix5QkFBeUIsYUFhekIsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIsZ0NBQWdDO1FBQ2hDLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IsK0JBQStCO1FBQy9CLDZCQUE2QjtRQUM3Qiw4QkFBOEI7UUFDOUIsK0JBQStCO1FBQy9CLGdDQUFnQztRQUNoQyw4QkFBOEI7UUFDOUIseUJBQXlCO29IQUdoQixzQkFBc0IsWUF0Qy9CLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsMEJBQTBCO1FBQzFCLDhCQUE4QjtRQUM5Qix5QkFBeUIsRUFhekIsWUFBWTtRQUNaLG9CQUFvQjtRQUdwQiwwQkFBMEI7UUFPMUIsOEJBQThCO1FBQzlCLHlCQUF5QjsyRkFHaEIsc0JBQXNCO2tCQXhDbEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLHVCQUF1Qjt3QkFDdkIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLDBCQUEwQjt3QkFDMUIsOEJBQThCO3dCQUM5Qix5QkFBeUI7cUJBQzFCO29CQUNELFlBQVksRUFBRTt3QkFDWiw4QkFBOEI7d0JBQzlCLDZCQUE2Qjt3QkFDN0IseUJBQXlCO3dCQUN6QixnQ0FBZ0M7d0JBQ2hDLDZCQUE2Qjt3QkFDN0IsK0JBQStCO3dCQUMvQiwrQkFBK0I7d0JBQy9CLGdDQUFnQztxQkFDakM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQix5QkFBeUI7d0JBQ3pCLGdDQUFnQzt3QkFDaEMsMEJBQTBCO3dCQUMxQiw2QkFBNkI7d0JBQzdCLCtCQUErQjt3QkFDL0IsNkJBQTZCO3dCQUM3Qiw4QkFBOEI7d0JBQzlCLCtCQUErQjt3QkFDL0IsZ0NBQWdDO3dCQUNoQyw4QkFBOEI7d0JBQzlCLHlCQUF5QjtxQkFDMUI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptSGludE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvaGludCc7XG5pbXBvcnQgeyBQcml6bUljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9pY29uJztcbmltcG9ydCB7IFByaXptSW5wdXRTdGF0dXNTdWJ0ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1pbnZhbGlkLXN1YnRleHQvaW5wdXQtc3RhdHVzLXN1YnRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptSW5wdXRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LWxheW91dC9pbnB1dC1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptSW5wdXRTdGF0dXNUZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi9pbnB1dC1zdGF0dXMtdGV4dC9pbnB1dC1zdGF0dXMtdGV4dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dEljb25CdXR0b25Nb2R1bGUgfSBmcm9tICcuL2lucHV0LWljb24tYnV0dG9uL2lucHV0LWljb24tYnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0TGF5b3V0Qm90dG9tRGlyZWN0aXZlIH0gZnJvbSAnLi9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LWJvdHRvbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dExheW91dFJpZ2h0RGlyZWN0aXZlIH0gZnJvbSAnLi9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LXJpZ2h0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0TGF5b3V0TGVmdERpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQtbGF5b3V0L2lucHV0LWxheW91dC1sZWZ0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQcml6bUlucHV0TGF5b3V0SW5Cb2R5RGlyZWN0aXZlIH0gZnJvbSAnLi9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LWluLWJvZHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptSW5wdXRMYXlvdXRTdWJ0ZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi9pbnB1dC1sYXlvdXQvaW5wdXQtbGF5b3V0LXN1YnRleHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBvbHltb3JwaE1vZHVsZSwgUHJpem1ab25lRXZlbnRNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7IFByaXptTGV0TW9kdWxlLCBQcml6bVRvT2JzZXJ2YWJsZU1vZHVsZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IFByaXptSW5wdXRIaW50TW9kdWxlIH0gZnJvbSAnLi9pbnB1dC1oaW50L2lucHV0LWhpbnQubW9kdWxlJztcbmltcG9ydCB7IFByaXptSW5wdXRBbGxvd2VkU3ltYm9sc01vZHVsZSB9IGZyb20gJy4vaW5wdXQtYWxsb3dlZC1zeW1ib2xzJztcbmltcG9ydCB7IFByaXptSW5wdXRDb3JyZWN0b3JNb2R1bGUgfSBmcm9tICcuL2lucHV0LWNvcnJlY3Rvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUHJpem1JbnB1dEhpbnRNb2R1bGUsXG4gICAgUHJpem1Ub09ic2VydmFibGVNb2R1bGUsXG4gICAgUHJpem1MZXRNb2R1bGUsXG4gICAgUG9seW1vcnBoTW9kdWxlLFxuICAgIFByaXptSWNvbk1vZHVsZSxcbiAgICBQcml6bVpvbmVFdmVudE1vZHVsZSxcbiAgICBQcml6bUhpbnRNb2R1bGUsXG4gICAgUHJpem1JbnB1dEljb25CdXR0b25Nb2R1bGUsXG4gICAgUHJpem1JbnB1dEFsbG93ZWRTeW1ib2xzTW9kdWxlLFxuICAgIFByaXptSW5wdXRDb3JyZWN0b3JNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFByaXptSW5wdXRMYXlvdXRSaWdodERpcmVjdGl2ZSxcbiAgICBQcml6bUlucHV0TGF5b3V0TGVmdERpcmVjdGl2ZSxcbiAgICBQcml6bUlucHV0TGF5b3V0Q29tcG9uZW50LFxuICAgIFByaXptSW5wdXRTdGF0dXNTdWJ0ZXh0Q29tcG9uZW50LFxuICAgIFByaXptSW5wdXRTdGF0dXNUZXh0RGlyZWN0aXZlLFxuICAgIFByaXptSW5wdXRMYXlvdXRCb3R0b21EaXJlY3RpdmUsXG4gICAgUHJpem1JbnB1dExheW91dEluQm9keURpcmVjdGl2ZSxcbiAgICBQcml6bUlucHV0TGF5b3V0U3VidGV4dERpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQcml6bUlucHV0SGludE1vZHVsZSxcbiAgICBQcml6bUlucHV0TGF5b3V0Q29tcG9uZW50LFxuICAgIFByaXptSW5wdXRTdGF0dXNTdWJ0ZXh0Q29tcG9uZW50LFxuICAgIFByaXptSW5wdXRJY29uQnV0dG9uTW9kdWxlLFxuICAgIFByaXptSW5wdXRTdGF0dXNUZXh0RGlyZWN0aXZlLFxuICAgIFByaXptSW5wdXRMYXlvdXRCb3R0b21EaXJlY3RpdmUsXG4gICAgUHJpem1JbnB1dExheW91dExlZnREaXJlY3RpdmUsXG4gICAgUHJpem1JbnB1dExheW91dFJpZ2h0RGlyZWN0aXZlLFxuICAgIFByaXptSW5wdXRMYXlvdXRJbkJvZHlEaXJlY3RpdmUsXG4gICAgUHJpem1JbnB1dExheW91dFN1YnRleHREaXJlY3RpdmUsXG4gICAgUHJpem1JbnB1dEFsbG93ZWRTeW1ib2xzTW9kdWxlLFxuICAgIFByaXptSW5wdXRDb3JyZWN0b3JNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSW5wdXRDb21tb25Nb2R1bGUge31cbiJdfQ==