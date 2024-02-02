import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmDataListModule } from '../../data-list/data-list.module';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmInputTimeComponent } from './input-time.component';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { FormsModule } from '@angular/forms';
import { PrizmButtonModule } from '../../button/button.module';
import { PrizmDropdownControllerModule } from '../../../directives';
import { PrizmMaskModule } from '../../../modules';
import * as i0 from "@angular/core";
export class PrizmInputTimeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputTimeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputTimeModule, declarations: [PrizmInputTimeComponent], imports: [CommonModule,
            PrizmMaskModule,
            PrizmDataListModule,
            PrizmDropdownControllerModule,
            PrizmDropdownHostModule,
            PrizmInputTextModule,
            PrizmButtonModule,
            FormsModule,
            PrizmValueAccessorModule], exports: [PrizmInputTimeComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputTimeModule, imports: [CommonModule,
            PrizmMaskModule,
            PrizmDataListModule,
            PrizmDropdownControllerModule,
            PrizmDropdownHostModule,
            PrizmInputTextModule,
            PrizmButtonModule,
            FormsModule,
            PrizmValueAccessorModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmInputTimeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        PrizmMaskModule,
                        PrizmDataListModule,
                        PrizmDropdownControllerModule,
                        PrizmDropdownHostModule,
                        PrizmInputTextModule,
                        PrizmButtonModule,
                        FormsModule,
                        PrizmValueAccessorModule,
                    ],
                    declarations: [PrizmInputTimeComponent],
                    exports: [PrizmInputTimeComponent],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGltZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2lucHV0L2lucHV0LXRpbWUvaW5wdXQtdGltZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDN0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFpQm5ELE1BQU0sT0FBTyxvQkFBb0I7OEdBQXBCLG9CQUFvQjsrR0FBcEIsb0JBQW9CLGlCQUhoQix1QkFBdUIsYUFWcEMsWUFBWTtZQUNaLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsNkJBQTZCO1lBQzdCLHVCQUF1QjtZQUN2QixvQkFBb0I7WUFDcEIsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCx3QkFBd0IsYUFHaEIsdUJBQXVCOytHQUV0QixvQkFBb0IsWUFiN0IsWUFBWTtZQUNaLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsNkJBQTZCO1lBQzdCLHVCQUF1QjtZQUN2QixvQkFBb0I7WUFDcEIsaUJBQWlCO1lBQ2pCLFdBQVc7WUFDWCx3QkFBd0I7OzJGQUtmLG9CQUFvQjtrQkFmaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsNkJBQTZCO3dCQUM3Qix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3dCQUNqQixXQUFXO3dCQUNYLHdCQUF3QjtxQkFDekI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1EYXRhTGlzdE1vZHVsZSB9IGZyb20gJy4uLy4uL2RhdGEtbGlzdC9kYXRhLWxpc3QubW9kdWxlJztcbmltcG9ydCB7IFByaXptVmFsdWVBY2Nlc3Nvck1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvdmFsdWUtYWNjZXNzb3IvdmFsdWUtYWNjZXNzb3IubW9kdWxlJztcbmltcG9ydCB7IFByaXptSW5wdXRUaW1lQ29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC10aW1lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bURyb3Bkb3duSG9zdE1vZHVsZSB9IGZyb20gJy4uLy4uL2Ryb3Bkb3ducy9kcm9wZG93bi1ob3N0L2Ryb3Bkb3duLWhvc3QubW9kdWxlJztcbmltcG9ydCB7IFByaXptSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAnLi4vaW5wdXQtdGV4dC9pbnB1dC10ZXh0Lm1vZHVsZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vYnV0dG9uL2J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1Ecm9wZG93bkNvbnRyb2xsZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzJztcbmltcG9ydCB7IFByaXptTWFza01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL21vZHVsZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFByaXptTWFza01vZHVsZSxcbiAgICBQcml6bURhdGFMaXN0TW9kdWxlLFxuICAgIFByaXptRHJvcGRvd25Db250cm9sbGVyTW9kdWxlLFxuICAgIFByaXptRHJvcGRvd25Ib3N0TW9kdWxlLFxuICAgIFByaXptSW5wdXRUZXh0TW9kdWxlLFxuICAgIFByaXptQnV0dG9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFByaXptVmFsdWVBY2Nlc3Nvck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJpem1JbnB1dFRpbWVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJpem1JbnB1dFRpbWVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUlucHV0VGltZU1vZHVsZSB7fVxuIl19