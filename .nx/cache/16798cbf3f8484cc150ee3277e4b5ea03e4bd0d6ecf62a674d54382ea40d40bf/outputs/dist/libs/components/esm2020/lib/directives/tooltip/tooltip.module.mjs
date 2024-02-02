import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { PrizmTooltipDirective } from './tooltip.directive';
import { PrizmHintModule } from '../hint';
import { PrizmTooltipContainerComponent } from './tooltip-container.component';
import { PrizmIconModule } from '../../components/icon';
import { PrizmScrollbarModule } from '../../components/scrollbar';
import { PrizmFocusTrapModule } from '../focus-trap';
import * as i0 from "@angular/core";
export class PrizmTooltipModule {
}
PrizmTooltipModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTooltipModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmTooltipModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmTooltipModule, declarations: [PrizmTooltipDirective, PrizmTooltipContainerComponent], imports: [CommonModule,
        PolymorphModule,
        PrizmFocusTrapModule,
        PrizmHintModule,
        PrizmScrollbarModule,
        PrizmIconModule], exports: [PrizmTooltipDirective] });
PrizmTooltipModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTooltipModule, imports: [CommonModule,
        PolymorphModule,
        PrizmFocusTrapModule,
        PrizmHintModule,
        PrizmScrollbarModule,
        PrizmIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTooltipModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        PolymorphModule,
                        PrizmFocusTrapModule,
                        PrizmHintModule,
                        PrizmScrollbarModule,
                        PrizmIconModule,
                    ],
                    declarations: [PrizmTooltipDirective, PrizmTooltipContainerComponent],
                    exports: [PrizmTooltipDirective],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzFDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBY3JELE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixpQkFIZCxxQkFBcUIsRUFBRSw4QkFBOEIsYUFQbEUsWUFBWTtRQUNaLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixlQUFlLGFBR1AscUJBQXFCO2dIQUVwQixrQkFBa0IsWUFWM0IsWUFBWTtRQUNaLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixlQUFlOzJGQUtOLGtCQUFrQjtrQkFaOUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLDhCQUE4QixDQUFDO29CQUNyRSxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBvbHltb3JwaE1vZHVsZSB9IGZyb20gJy4uL3BvbHltb3JwaCc7XG5pbXBvcnQgeyBQcml6bVRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptSGludE1vZHVsZSB9IGZyb20gJy4uL2hpbnQnO1xuaW1wb3J0IHsgUHJpem1Ub29sdGlwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1JY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pY29uJztcbmltcG9ydCB7IFByaXptU2Nyb2xsYmFyTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zY3JvbGxiYXInO1xuaW1wb3J0IHsgUHJpem1Gb2N1c1RyYXBNb2R1bGUgfSBmcm9tICcuLi9mb2N1cy10cmFwJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQb2x5bW9ycGhNb2R1bGUsXG4gICAgUHJpem1Gb2N1c1RyYXBNb2R1bGUsXG4gICAgUHJpem1IaW50TW9kdWxlLFxuICAgIFByaXptU2Nyb2xsYmFyTW9kdWxlLFxuICAgIFByaXptSWNvbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJpem1Ub29sdGlwRGlyZWN0aXZlLCBQcml6bVRvb2x0aXBDb250YWluZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUHJpem1Ub29sdGlwRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Ub29sdGlwTW9kdWxlIHt9XG4iXX0=