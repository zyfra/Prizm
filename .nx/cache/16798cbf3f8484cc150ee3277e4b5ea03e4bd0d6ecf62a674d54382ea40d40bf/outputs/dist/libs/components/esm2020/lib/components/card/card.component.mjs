import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { prizmGetShadow, PrizmShadowModule } from '../../directives/shadow';
import { PrizmShadowValue } from '../../directives/shadow/models';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class PrizmCardComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.shadow = 'mini-bottom';
        this.testId_ = 'ui_card';
    }
    get boxShadow() {
        return prizmGetShadow(this.shadow);
    }
}
PrizmCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCardComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PrizmCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmCardComponent, isStandalone: true, selector: "prizm-card", inputs: { shadow: "shadow" }, host: { properties: { "style.box-shadow": "this.boxShadow" } }, providers: [], usesInheritance: true, ngImport: i0, template: "<ng-content></ng-content>\n", styles: [":host{display:flex;flex-direction:column;background:var(--prizm-card-background, var(--prizm-v3-background-fill-primary));border-style:var(--prizm-card-border-style, solid);border-radius:var(--prizm-card-border-radius, 2px);border-color:var(--prizm-card-border-color, var(--prizm-v3-background-stroke));border-width:var(--prizm-card-border-size, 1px);color:var(--prizm-card-color, var(--prizm-v3-text-icon-primary))}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: PrizmShadowModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-card', changeDetection: ChangeDetectionStrategy.OnPush, providers: [], standalone: true, imports: [CommonModule, PrizmShadowModule], template: "<ng-content></ng-content>\n", styles: [":host{display:flex;flex-direction:column;background:var(--prizm-card-background, var(--prizm-v3-background-fill-primary));border-style:var(--prizm-card-border-style, solid);border-radius:var(--prizm-card-border-radius, 2px);border-color:var(--prizm-card-border-color, var(--prizm-v3-background-stroke));border-width:var(--prizm-card-border-size, 1px);color:var(--prizm-card-color, var(--prizm-v3-text-icon-primary))}\n"] }]
        }], propDecorators: { shadow: [{
                type: Input
            }], boxShadow: [{
                type: HostBinding,
                args: ['style.box-shadow']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBbUIsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBVy9DLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxtQkFBbUI7SUFUM0Q7O1FBVVcsV0FBTSxHQUFvQixhQUFhLENBQUM7UUFPL0IsWUFBTyxHQUFHLFNBQVMsQ0FBQztLQUN2QztJQU5DLElBQ1ksU0FBUztRQUNuQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7K0dBTlUsa0JBQWtCO21HQUFsQixrQkFBa0IsdUpBSmxCLEVBQUUsaURDWGYsNkJBQ0EsMmREWVksWUFBWSw4QkFBRSxpQkFBaUI7MkZBRTlCLGtCQUFrQjtrQkFUOUIsU0FBUzsrQkFDRSxZQUFZLG1CQUdMLHVCQUF1QixDQUFDLE1BQU0sYUFDcEMsRUFBRSxjQUNELElBQUksV0FDUCxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQzs4QkFHakMsTUFBTTtzQkFBZCxLQUFLO2dCQUdNLFNBQVM7c0JBRHBCLFdBQVc7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcml6bUdldFNoYWRvdywgUHJpem1TaGFkb3dNb2R1bGUsIFByaXptU2hhZG93VHlwZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvc2hhZG93JztcbmltcG9ydCB7IFByaXptU2hhZG93VmFsdWUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3NoYWRvdy9tb2RlbHMnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0L2ludGVyYWN0aXZlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcmQuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFByaXptU2hhZG93TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1DYXJkQ29tcG9uZW50IGV4dGVuZHMgUHJpem1BYnN0cmFjdFRlc3RJZCB7XG4gIEBJbnB1dCgpIHNoYWRvdzogUHJpem1TaGFkb3dUeXBlID0gJ21pbmktYm90dG9tJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJveC1zaGFkb3cnKVxuICBwcml2YXRlIGdldCBib3hTaGFkb3coKTogUHJpem1TaGFkb3dWYWx1ZSB7XG4gICAgcmV0dXJuIHByaXptR2V0U2hhZG93KHRoaXMuc2hhZG93KTtcbiAgfVxuXG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfY2FyZCc7XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4iXX0=