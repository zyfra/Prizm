import { Component } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { map } from 'rxjs/operators';
import { PrizmHintContainerComponent } from '../hint/hint-container.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../polymorph/directives/outlet";
import * as i3 from "../focus-trap/focus-trap.directive";
import * as i4 from "../../components/scrollbar/scrollbar.component";
import * as i5 from "../../components/icon/icon.component";
export class PrizmTooltipContainerComponent extends PrizmHintContainerComponent {
    constructor() {
        super(...arguments);
        this.position$ = this.prizmOverlayControl.position.pos$.pipe(map(({ extra }) => extra));
    }
    ngOnInit() {
        super.ngOnInit();
    }
}
PrizmTooltipContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTooltipContainerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PrizmTooltipContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmTooltipContainerComponent, selector: "prizm-tooltip-container", providers: [PrizmDestroyService], usesInheritance: true, ngImport: i0, template: `
    <div class="box prizm-font-main-body-14" prizmFocusTrap>
      <prizm-scrollbar visibility="hidden">
        <ng-container *polymorphOutlet="content() as data; context: context">
          <div class="content">{{ data }}</div>
        </ng-container>
      </prizm-scrollbar>

      <ng-container [ngSwitch]="position$ | async">
        <prizm-icon class="arrow-icon" *ngSwitchCase="'r'" iconClass="chevrons-menu-left"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'rb'" iconClass="chevrons-menu-left"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'rt'" iconClass="chevrons-menu-left"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'l'" iconClass="chevrons-menu-right"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'lb'" iconClass="chevrons-menu-right"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'lt'" iconClass="chevrons-menu-right"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'tl'" iconClass="chevrons-dropdown"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'tr'" iconClass="chevrons-dropdown"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'b'" iconClass="chevrons-dropup"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'bl'" iconClass="chevrons-dropup"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'br'" iconClass="chevrons-dropup"></prizm-icon>
      </ng-container>
    </div>
  `, isInline: true, styles: [":host{display:inline-block;padding:var(--prizm-tooltip-margin, 8px);color:var(--prizm-tooltip-container-text, var(--prizm-v3-text-icon-primary));font-size:var(--prizm-tooltip-container-font-size, 12px);white-space:pre-line}:host prizm-scrollbar,:host .box{max-height:var(--prizm-tooltip-container-max-height, 90vh);max-width:var(--prizm-tooltip-container-max-width, 288px)}:host prizm-scrollbar:focus,:host .box:focus{outline:none}:host .box{overflow:hidden;text-overflow:ellipsis;position:relative;padding:var(--prizm-tooltip-container-padding, 16px);border-radius:var(--prizm-tooltip-container-border-radius, 2px);background-color:var(--prizm-tooltip-container-background, var(--prizm-v3-background-fill-overlay))}:host .arrow-icon{position:absolute;color:var(--prizm-tooltip-container-background, var(--prizm-v3-background-fill-overlay));font-size:20px;display:block}:host[position=t] .arrow-icon,:host[position=tr] .arrow-icon,:host[position=tb] .arrow-icon{bottom:-14px;transform:translate(-10px)}:host[position=t] .arrow-icon,:host[position=b] .arrow-icon{left:50%;right:50%}:host[position=r] .arrow-icon,:host[position=l] .arrow-icon{top:50%;bottom:50%}:host[position=tl],:host[position=bl]{padding-left:0}:host[position=tl] .arrow-icon,:host[position=bl] .arrow-icon{left:10%}:host[position=lt],:host[position=rt]{padding-top:1px}:host[position=lt] .arrow-icon,:host[position=rt] .arrow-icon{top:max(10%,10px)}:host[position=lb],:host[position=rb]{padding-bottom:1px}:host[position=tr],:host[position=br]{padding-right:0}:host[position=tr] .arrow-icon,:host[position=br] .arrow-icon{right:10%}:host[position=b] .arrow-icon,:host[position=bl] .arrow-icon,:host[position=br] .arrow-icon{top:-12px;transform:translate(-10px)}:host[position=l] .arrow-icon,:host[position=lt] .arrow-icon,:host[position=lb] .arrow-icon{right:-12px;transform:translateY(-10px)}:host[position=r] .arrow-icon,:host[position=rt] .arrow-icon,:host[position=rb] .arrow-icon{left:-12px;transform:translateY(-10px)}prizm-scrollbar{height:100%}.content{word-break:break-word;width:100%;height:100%}\n"], dependencies: [{ kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "directive", type: i3.PrizmFocusTrapDirective, selector: "[prizmFocusTrap]" }, { kind: "component", type: i4.PrizmScrollbarComponent, selector: "prizm-scrollbar", inputs: ["visibility"] }, { kind: "component", type: i5.PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmTooltipContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-tooltip-container', template: `
    <div class="box prizm-font-main-body-14" prizmFocusTrap>
      <prizm-scrollbar visibility="hidden">
        <ng-container *polymorphOutlet="content() as data; context: context">
          <div class="content">{{ data }}</div>
        </ng-container>
      </prizm-scrollbar>

      <ng-container [ngSwitch]="position$ | async">
        <prizm-icon class="arrow-icon" *ngSwitchCase="'r'" iconClass="chevrons-menu-left"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'rb'" iconClass="chevrons-menu-left"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'rt'" iconClass="chevrons-menu-left"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'l'" iconClass="chevrons-menu-right"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'lb'" iconClass="chevrons-menu-right"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'lt'" iconClass="chevrons-menu-right"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'tl'" iconClass="chevrons-dropdown"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'tr'" iconClass="chevrons-dropdown"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'b'" iconClass="chevrons-dropup"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'bl'" iconClass="chevrons-dropup"></prizm-icon>
        <prizm-icon class="arrow-icon" *ngSwitchCase="'br'" iconClass="chevrons-dropup"></prizm-icon>
      </ng-container>
    </div>
  `, providers: [PrizmDestroyService], styles: [":host{display:inline-block;padding:var(--prizm-tooltip-margin, 8px);color:var(--prizm-tooltip-container-text, var(--prizm-v3-text-icon-primary));font-size:var(--prizm-tooltip-container-font-size, 12px);white-space:pre-line}:host prizm-scrollbar,:host .box{max-height:var(--prizm-tooltip-container-max-height, 90vh);max-width:var(--prizm-tooltip-container-max-width, 288px)}:host prizm-scrollbar:focus,:host .box:focus{outline:none}:host .box{overflow:hidden;text-overflow:ellipsis;position:relative;padding:var(--prizm-tooltip-container-padding, 16px);border-radius:var(--prizm-tooltip-container-border-radius, 2px);background-color:var(--prizm-tooltip-container-background, var(--prizm-v3-background-fill-overlay))}:host .arrow-icon{position:absolute;color:var(--prizm-tooltip-container-background, var(--prizm-v3-background-fill-overlay));font-size:20px;display:block}:host[position=t] .arrow-icon,:host[position=tr] .arrow-icon,:host[position=tb] .arrow-icon{bottom:-14px;transform:translate(-10px)}:host[position=t] .arrow-icon,:host[position=b] .arrow-icon{left:50%;right:50%}:host[position=r] .arrow-icon,:host[position=l] .arrow-icon{top:50%;bottom:50%}:host[position=tl],:host[position=bl]{padding-left:0}:host[position=tl] .arrow-icon,:host[position=bl] .arrow-icon{left:10%}:host[position=lt],:host[position=rt]{padding-top:1px}:host[position=lt] .arrow-icon,:host[position=rt] .arrow-icon{top:max(10%,10px)}:host[position=lb],:host[position=rb]{padding-bottom:1px}:host[position=tr],:host[position=br]{padding-right:0}:host[position=tr] .arrow-icon,:host[position=br] .arrow-icon{right:10%}:host[position=b] .arrow-icon,:host[position=bl] .arrow-icon,:host[position=br] .arrow-icon{top:-12px;transform:translate(-10px)}:host[position=l] .arrow-icon,:host[position=lt] .arrow-icon,:host[position=lb] .arrow-icon{right:-12px;transform:translateY(-10px)}:host[position=r] .arrow-icon,:host[position=rt] .arrow-icon,:host[position=rb] .arrow-icon{left:-12px;transform:translateY(-10px)}prizm-scrollbar{height:100%}.content{word-break:break-word;width:100%;height:100%}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7OztBQThCL0UsTUFBTSxPQUFPLDhCQUErQixTQUFRLDJCQUEyQjtJQTVCL0U7O1FBNkJFLGNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUtwRjtJQUhVLFFBQVE7UUFDZixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7MkhBTFUsOEJBQThCOytHQUE5Qiw4QkFBOEIsa0RBRjlCLENBQUMsbUJBQW1CLENBQUMsaURBeEJ0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDsyRkFJVSw4QkFBOEI7a0JBNUIxQyxTQUFTOytCQUNFLHlCQUF5QixZQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVCxhQUVVLENBQUMsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptSGludENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uL2hpbnQvaGludC1jb250YWluZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tdG9vbHRpcC1jb250YWluZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJib3ggcHJpem0tZm9udC1tYWluLWJvZHktMTRcIiBwcml6bUZvY3VzVHJhcD5cbiAgICAgIDxwcml6bS1zY3JvbGxiYXIgdmlzaWJpbGl0eT1cImhpZGRlblwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpwb2x5bW9ycGhPdXRsZXQ9XCJjb250ZW50KCkgYXMgZGF0YTsgY29udGV4dDogY29udGV4dFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+e3sgZGF0YSB9fTwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvcHJpem0tc2Nyb2xsYmFyPlxuXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJwb3NpdGlvbiQgfCBhc3luY1wiPlxuICAgICAgICA8cHJpem0taWNvbiBjbGFzcz1cImFycm93LWljb25cIiAqbmdTd2l0Y2hDYXNlPVwiJ3InXCIgaWNvbkNsYXNzPVwiY2hldnJvbnMtbWVudS1sZWZ0XCI+PC9wcml6bS1pY29uPlxuICAgICAgICA8cHJpem0taWNvbiBjbGFzcz1cImFycm93LWljb25cIiAqbmdTd2l0Y2hDYXNlPVwiJ3JiJ1wiIGljb25DbGFzcz1cImNoZXZyb25zLW1lbnUtbGVmdFwiPjwvcHJpem0taWNvbj5cbiAgICAgICAgPHByaXptLWljb24gY2xhc3M9XCJhcnJvdy1pY29uXCIgKm5nU3dpdGNoQ2FzZT1cIidydCdcIiBpY29uQ2xhc3M9XCJjaGV2cm9ucy1tZW51LWxlZnRcIj48L3ByaXptLWljb24+XG4gICAgICAgIDxwcml6bS1pY29uIGNsYXNzPVwiYXJyb3ctaWNvblwiICpuZ1N3aXRjaENhc2U9XCInbCdcIiBpY29uQ2xhc3M9XCJjaGV2cm9ucy1tZW51LXJpZ2h0XCI+PC9wcml6bS1pY29uPlxuICAgICAgICA8cHJpem0taWNvbiBjbGFzcz1cImFycm93LWljb25cIiAqbmdTd2l0Y2hDYXNlPVwiJ2xiJ1wiIGljb25DbGFzcz1cImNoZXZyb25zLW1lbnUtcmlnaHRcIj48L3ByaXptLWljb24+XG4gICAgICAgIDxwcml6bS1pY29uIGNsYXNzPVwiYXJyb3ctaWNvblwiICpuZ1N3aXRjaENhc2U9XCInbHQnXCIgaWNvbkNsYXNzPVwiY2hldnJvbnMtbWVudS1yaWdodFwiPjwvcHJpem0taWNvbj5cbiAgICAgICAgPHByaXptLWljb24gY2xhc3M9XCJhcnJvdy1pY29uXCIgKm5nU3dpdGNoQ2FzZT1cIid0bCdcIiBpY29uQ2xhc3M9XCJjaGV2cm9ucy1kcm9wZG93blwiPjwvcHJpem0taWNvbj5cbiAgICAgICAgPHByaXptLWljb24gY2xhc3M9XCJhcnJvdy1pY29uXCIgKm5nU3dpdGNoQ2FzZT1cIid0cidcIiBpY29uQ2xhc3M9XCJjaGV2cm9ucy1kcm9wZG93blwiPjwvcHJpem0taWNvbj5cbiAgICAgICAgPHByaXptLWljb24gY2xhc3M9XCJhcnJvdy1pY29uXCIgKm5nU3dpdGNoQ2FzZT1cIidiJ1wiIGljb25DbGFzcz1cImNoZXZyb25zLWRyb3B1cFwiPjwvcHJpem0taWNvbj5cbiAgICAgICAgPHByaXptLWljb24gY2xhc3M9XCJhcnJvdy1pY29uXCIgKm5nU3dpdGNoQ2FzZT1cIidibCdcIiBpY29uQ2xhc3M9XCJjaGV2cm9ucy1kcm9wdXBcIj48L3ByaXptLWljb24+XG4gICAgICAgIDxwcml6bS1pY29uIGNsYXNzPVwiYXJyb3ctaWNvblwiICpuZ1N3aXRjaENhc2U9XCInYnInXCIgaWNvbkNsYXNzPVwiY2hldnJvbnMtZHJvcHVwXCI+PC9wcml6bS1pY29uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL3Rvb2x0aXAtY29udGFpbmVyLmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVRvb2x0aXBDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBQcml6bUhpbnRDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwb3NpdGlvbiQgPSB0aGlzLnByaXptT3ZlcmxheUNvbnRyb2wucG9zaXRpb24ucG9zJC5waXBlKG1hcCgoeyBleHRyYSB9KSA9PiBleHRyYSkpO1xuXG4gIG92ZXJyaWRlIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbn1cbiJdfQ==