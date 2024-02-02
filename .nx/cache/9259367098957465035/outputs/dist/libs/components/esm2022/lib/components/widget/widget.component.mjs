import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PolymorphOutletDirective } from '../../directives';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { CommonModule } from '@angular/common';
import { PrizmCardComponent } from '../card';
import { PrizmIconComponent } from '../icon';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmButtonModule } from '../button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../button/button.component";
export class PrizmWidgetComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.header = '';
        this.title = '';
        this.icons = [];
        this.iconClick = new EventEmitter();
        this.shadow = 'none';
        this.testId_ = 'ui_area--widget';
    }
    get hasLine() {
        return Array.isArray(this.icons) ? this.icons.length > 0 : false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmWidgetComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmWidgetComponent, isStandalone: true, selector: "prizm-widget", inputs: { header: "header", title: "title", icons: "icons" }, outputs: { iconClick: "iconClick" }, providers: [], usesInheritance: true, ngImport: i0, template: "<prizm-card [shadow]=\"shadow\">\n  <div class=\"header prizm-font-title-h4\">\n    <ng-container *polymorphOutlet=\"header\">\n      <div class=\"title\">\n        <ng-container *polymorphOutlet=\"title\">\n          {{ title }}\n        </ng-container>\n      </div>\n      <ng-container *polymorphOutlet=\"icons\">\n        <div class=\"icons\" [class.divider]=\"hasLine\">\n          <ng-container *ngFor=\"let icon of $any(icons); let idx = index\">\n            <ng-container *polymorphOutlet=\"icon; context: { idx: idx }\">\n              <button\n                [icon]=\"$any(icon)\"\n                (click)=\"iconClick.emit(icon)\"\n                prizmIconButton\n                appearanceType=\"ghost\"\n                appearance=\"secondary\"\n                size=\"s\"\n              ></button>\n            </ng-container>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n  <div class=\"body prizm-font-main-body-14\">\n    <ng-content></ng-content>\n  </div>\n</prizm-card>\n", styles: [".body{padding:var(--prizm-widget-content-padding, 16px);background-color:var(--prizm-widget-body-bg, var(--prizm-v3-background-fill-primary));color:var(--prizm-v3-text-icon-secondary);flex:var(--prizm-widget-content-flex, 1 0 auto)}prizm-card{height:100%}.title{font-weight:var(--prizm-widget-title-weight, 600);font-size:var(--prizm-widget-title-size, 14px);color:var(--prizm-widget-title-text, var(--prizm-v3-text-icon-primary));text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}.header{height:var(--prizm-widget-header-height, 48px);padding:var(--prizm-widget-header-padding, 14px 16px);border-bottom:1px solid var(--prizm-widget-header-border-color, var(--prizm-v3-background-stroke));display:var(--prizm-widget-header-display, flex);justify-content:space-between;align-items:center;background-color:var(--prizm-widget-header-bg, var(--prizm-v3-background-fill-panel));gap:16px;flex-shrink:0}.icons{color:var(--prizm-widget-icons-color, var(--prizm-v3-button-secondary-solid-default));padding-left:16px;display:flex;gap:var(--prizm-widget-icons-gap, 4px)}.icons.divider{border-left:1px solid var(--prizm-widget-icons-border-left, var(--prizm-v3-background-stroke))}.icons:empty{display:none}prizm-icon{display:flex;align-items:center}prizm-icon:hover{color:var(--prizm-v3-button-primary-solid-hover)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: PrizmCardComponent, selector: "prizm-card", inputs: ["shadow"] }, { kind: "ngmodule", type: PrizmThemeModule }, { kind: "directive", type: PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "ngmodule", type: PrizmButtonModule }, { kind: "component", type: i2.PrizmButtonComponent, selector: "button[prizmButton], button[prizmIconButton], a[prizmButton], a[prizmIconButton]", inputs: ["size", "icon", "iconRight", "appearance", "appearanceType", "disabled", "showLoader"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmWidgetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-widget', changeDetection: ChangeDetectionStrategy.OnPush, providers: [], standalone: true, imports: [
                        CommonModule,
                        PrizmCardComponent,
                        PrizmIconComponent,
                        PrizmThemeModule,
                        PolymorphOutletDirective,
                        PrizmButtonModule,
                    ], template: "<prizm-card [shadow]=\"shadow\">\n  <div class=\"header prizm-font-title-h4\">\n    <ng-container *polymorphOutlet=\"header\">\n      <div class=\"title\">\n        <ng-container *polymorphOutlet=\"title\">\n          {{ title }}\n        </ng-container>\n      </div>\n      <ng-container *polymorphOutlet=\"icons\">\n        <div class=\"icons\" [class.divider]=\"hasLine\">\n          <ng-container *ngFor=\"let icon of $any(icons); let idx = index\">\n            <ng-container *polymorphOutlet=\"icon; context: { idx: idx }\">\n              <button\n                [icon]=\"$any(icon)\"\n                (click)=\"iconClick.emit(icon)\"\n                prizmIconButton\n                appearanceType=\"ghost\"\n                appearance=\"secondary\"\n                size=\"s\"\n              ></button>\n            </ng-container>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n  <div class=\"body prizm-font-main-body-14\">\n    <ng-content></ng-content>\n  </div>\n</prizm-card>\n", styles: [".body{padding:var(--prizm-widget-content-padding, 16px);background-color:var(--prizm-widget-body-bg, var(--prizm-v3-background-fill-primary));color:var(--prizm-v3-text-icon-secondary);flex:var(--prizm-widget-content-flex, 1 0 auto)}prizm-card{height:100%}.title{font-weight:var(--prizm-widget-title-weight, 600);font-size:var(--prizm-widget-title-size, 14px);color:var(--prizm-widget-title-text, var(--prizm-v3-text-icon-primary));text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}.header{height:var(--prizm-widget-header-height, 48px);padding:var(--prizm-widget-header-padding, 14px 16px);border-bottom:1px solid var(--prizm-widget-header-border-color, var(--prizm-v3-background-stroke));display:var(--prizm-widget-header-display, flex);justify-content:space-between;align-items:center;background-color:var(--prizm-widget-header-bg, var(--prizm-v3-background-fill-panel));gap:16px;flex-shrink:0}.icons{color:var(--prizm-widget-icons-color, var(--prizm-v3-button-secondary-solid-default));padding-left:16px;display:flex;gap:var(--prizm-widget-icons-gap, 4px)}.icons.divider{border-left:1px solid var(--prizm-widget-icons-border-left, var(--prizm-v3-background-stroke))}.icons:empty{display:none}prizm-icon{display:flex;align-items:center}prizm-icon:hover{color:var(--prizm-v3-button-primary-solid-hover)}\n"] }]
        }], propDecorators: { header: [{
                type: Input
            }], title: [{
                type: Input
            }], icons: [{
                type: Input
            }], iconClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudHMvd2lkZ2V0L3dpZGdldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3dpZGdldC93aWRnZXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQW9CLHdCQUF3QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0FBa0I5QyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsbUJBQW1CO0lBaEI3RDs7UUFpQmtCLFdBQU0sR0FBcUIsRUFBRSxDQUFDO1FBQzlCLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBMkQsRUFBRSxDQUFDO1FBQ2xFLGNBQVMsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3RCxXQUFNLEdBQW9CLE1BQU0sQ0FBQztRQUV4QixZQUFPLEdBQUcsaUJBQWlCLENBQUM7S0FLL0M7SUFIQyxJQUFJLE9BQU87UUFDVCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNuRSxDQUFDOzhHQVhVLG9CQUFvQjtrR0FBcEIsb0JBQW9CLDhKQVhwQixFQUFFLGlEQ2ZmLHdoQ0E4QkEsNjRDRFpJLFlBQVksNEpBQ1osa0JBQWtCLDBFQUVsQixnQkFBZ0IsK0JBQ2hCLHdCQUF3QiwrSUFDeEIsaUJBQWlCOzsyRkFHUixvQkFBb0I7a0JBaEJoQyxTQUFTOytCQUNFLGNBQWMsbUJBR1AsdUJBQXVCLENBQUMsTUFBTSxhQUNwQyxFQUFFLGNBQ0QsSUFBSSxXQUNQO3dCQUNQLFlBQVk7d0JBQ1osa0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsd0JBQXdCO3dCQUN4QixpQkFBaUI7cUJBQ2xCOzhCQUdlLE1BQU07c0JBQXJCLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxLQUFLO3NCQUFwQixLQUFLO2dCQUNXLFNBQVM7c0JBQXpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvbHltb3JwaENvbnRlbnQsIFBvbHltb3JwaE91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgUHJpem1TaGFkb3dUeXBlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9zaGFkb3cnO1xuaW1wb3J0IHsgUHJpem1BYnN0cmFjdFRlc3RJZCB9IGZyb20gJy4uLy4uL2Fic3RyYWN0L2ludGVyYWN0aXZlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcml6bUNhcmRDb21wb25lbnQgfSBmcm9tICcuLi9jYXJkJztcbmltcG9ydCB7IFByaXptSWNvbkNvbXBvbmVudCB9IGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IHsgUHJpem1UaGVtZU1vZHVsZSB9IGZyb20gJ0Bwcml6bS11aS90aGVtZSc7XG5pbXBvcnQgeyBQcml6bUJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLXdpZGdldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi93aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93aWRnZXQuY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUHJpem1DYXJkQ29tcG9uZW50LFxuICAgIFByaXptSWNvbkNvbXBvbmVudCxcbiAgICBQcml6bVRoZW1lTW9kdWxlLFxuICAgIFBvbHltb3JwaE91dGxldERpcmVjdGl2ZSxcbiAgICBQcml6bUJ1dHRvbk1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1XaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIHtcbiAgQElucHV0KCkgcHVibGljIGhlYWRlcjogUG9seW1vcnBoQ29udGVudCA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IFBvbHltb3JwaENvbnRlbnQgPSAnJztcbiAgQElucHV0KCkgcHVibGljIGljb25zOiBQb2x5bW9ycGhDb250ZW50PHsgaWR4OiBudW1iZXIgfT5bXSB8IFBvbHltb3JwaENvbnRlbnQgPSBbXTtcbiAgQE91dHB1dCgpIHB1YmxpYyBpY29uQ2xpY2s6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZWFkb25seSBzaGFkb3c6IFByaXptU2hhZG93VHlwZSA9ICdub25lJztcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2FyZWEtLXdpZGdldCc7XG5cbiAgZ2V0IGhhc0xpbmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5pY29ucykgPyB0aGlzLmljb25zLmxlbmd0aCA+IDAgOiBmYWxzZTtcbiAgfVxufVxuIiwiPHByaXptLWNhcmQgW3NoYWRvd109XCJzaGFkb3dcIj5cbiAgPGRpdiBjbGFzcz1cImhlYWRlciBwcml6bS1mb250LXRpdGxlLWg0XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqcG9seW1vcnBoT3V0bGV0PVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqcG9seW1vcnBoT3V0bGV0PVwidGl0bGVcIj5cbiAgICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRhaW5lciAqcG9seW1vcnBoT3V0bGV0PVwiaWNvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImljb25zXCIgW2NsYXNzLmRpdmlkZXJdPVwiaGFzTGluZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGljb24gb2YgJGFueShpY29ucyk7IGxldCBpZHggPSBpbmRleFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqcG9seW1vcnBoT3V0bGV0PVwiaWNvbjsgY29udGV4dDogeyBpZHg6IGlkeCB9XCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBbaWNvbl09XCIkYW55KGljb24pXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiaWNvbkNsaWNrLmVtaXQoaWNvbilcIlxuICAgICAgICAgICAgICAgIHByaXptSWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2VUeXBlPVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJzXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYm9keSBwcml6bS1mb250LW1haW4tYm9keS0xNFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9kaXY+XG48L3ByaXptLWNhcmQ+XG4iXX0=