import { Component } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmHintContainerComponent } from '../hint/hint-container.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../polymorph/directives/outlet";
import * as i3 from "../focus-trap/focus-trap.directive";
import * as i4 from "../../components/button/button.component";
import * as i5 from "@prizm-ui/helpers";
export class PrizmConfirmPopupContainerComponent extends PrizmHintContainerComponent {
}
PrizmConfirmPopupContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmConfirmPopupContainerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
PrizmConfirmPopupContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmConfirmPopupContainerComponent, selector: "prizm-confirm-popup-container", providers: [PrizmDestroyService], usesInheritance: true, ngImport: i0, template: "<div class=\"box prizm-font-main-body-14\" prizmFocusTrap>\n  <div class=\"content\">\n    <div class=\"title prizm-font-dynamic-title-h4\" *ngIf=\"context.title\">\n      <ng-container *polymorphOutlet=\"context.title as data; context: context\">\n        {{ data }}\n      </ng-container>\n    </div>\n    <div class=\"description prizm-font-main-body-14\">\n      <ng-container *polymorphOutlet=\"content() as data; context: context\">\n        {{ data }}\n      </ng-container>\n\n      <div class=\"footer prizm-font-btn-links-14\">\n        <ng-container>\n          <div class=\"vertical\">\n            <div class=\"top\">\n              <ng-container\n                *ngIf=\"context.confirmButton\"\n                [ngTemplateOutlet]=\"buttonTemplate\"\n                [ngTemplateOutletContext]=\"{ button: context.confirmButton }\"\n              >\n              </ng-container>\n              <ng-container\n                *ngIf=\"context.supportButton\"\n                [ngTemplateOutlet]=\"buttonTemplate\"\n                [ngTemplateOutletContext]=\"$any({ button: context.supportButton })\"\n              >\n              </ng-container>\n            </div>\n            <div class=\"bottom\">\n              <ng-container\n                *ngIf=\"context.cancelButton\"\n                [ngTemplateOutlet]=\"buttonTemplate\"\n                [ngTemplateOutletContext]=\"{ button: context.cancelButton }\"\n              >\n              </ng-container>\n            </div>\n          </div>\n        </ng-container>\n\n        <ng-template #buttonTemplate let-button=\"button\">\n          <button\n            [style]=\"button.style\"\n            [appearance]=\"button.appearance\"\n            [appearanceType]=\"button.appearanceType ?? 'fill'\"\n            [size]=\"button.size\"\n            [disabled]=\"$any(button.disabled ?? false | prizmToObservable | async)\"\n            [showLoader]=\"$any(button.showLoader ?? false | prizmToObservable | async)\"\n            (click)=\"button.action(context)\"\n            prizmButton\n          >\n            {{ button.text }}\n          </button>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [":host{display:inline-block;padding:var(--prizm-confirm-popup-margin, 8px);color:var(--prizm-confirm-popup-container-text, var(--prizm-v3-text-icon-primary));font-size:var(--prizm-confirm-popup-container-font-size, 12px);min-width:var(--prizm-confirm-popup-container-min-width, 350px)}:host prizm-scrollbar,:host .box{max-height:var(--prizm-confirm-popup-container-max-height, 60vh);max-width:var(--prizm-confirm-popup-container-max-width, 388px)}:host prizm-scrollbar:focus,:host .box:focus{outline:none}:host .box{overflow:hidden;text-overflow:ellipsis;position:relative;padding:var(--prizm-confirm-popup-container-padding, 16px 14px);border-radius:var(--prizm-confirm-popup-container-border-radius, 2px);background-color:var(--prizm-confirm-popup-container-background, var(--prizm-v3-background-fill-overlay))}:host[position=tl],:host[position=bl]{padding-left:0}:host[position=lt],:host[position=rt]{padding-top:1px}:host[position=lb],:host[position=rb]{padding-bottom:1px}:host[position=tr],:host[position=br]{padding-right:0}prizm-scrollbar{height:100%}.footer{padding:var(--prizm-confirm-dialog-padding, 32px 0 0 0);max-width:100%}.footer .buttons{display:flex;justify-content:flex-end;gap:8px}.footer .left,.footer .right,.footer .top,.footer .bottom{display:flex;gap:8px}.footer .right{justify-content:flex-end}.vertical [prizmButton]{box-sizing:border-box;text-align:center}.vertical .top,.vertical .bottom{flex-flow:column}.vertical .bottom{margin-top:24px}.title,.description{white-space:pre-line}.title{margin-bottom:8px}.content{padding:0 2px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.PolymorphOutletDirective, selector: "[polymorphOutlet]", inputs: ["polymorphOutlet", "polymorphOutletContext", "polymorphOutletInjector"] }, { kind: "directive", type: i3.PrizmFocusTrapDirective, selector: "[prizmFocusTrap]" }, { kind: "component", type: i4.PrizmButtonComponent, selector: "button[prizmButton], button[prizmIconButton], a[prizmButton], a[prizmIconButton]", inputs: ["size", "icon", "iconRight", "appearance", "appearanceType", "disabled", "showLoader"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "pipe", type: i5.PrizmToObservablePipe, name: "prizmToObservable" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmConfirmPopupContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-confirm-popup-container', providers: [PrizmDestroyService], template: "<div class=\"box prizm-font-main-body-14\" prizmFocusTrap>\n  <div class=\"content\">\n    <div class=\"title prizm-font-dynamic-title-h4\" *ngIf=\"context.title\">\n      <ng-container *polymorphOutlet=\"context.title as data; context: context\">\n        {{ data }}\n      </ng-container>\n    </div>\n    <div class=\"description prizm-font-main-body-14\">\n      <ng-container *polymorphOutlet=\"content() as data; context: context\">\n        {{ data }}\n      </ng-container>\n\n      <div class=\"footer prizm-font-btn-links-14\">\n        <ng-container>\n          <div class=\"vertical\">\n            <div class=\"top\">\n              <ng-container\n                *ngIf=\"context.confirmButton\"\n                [ngTemplateOutlet]=\"buttonTemplate\"\n                [ngTemplateOutletContext]=\"{ button: context.confirmButton }\"\n              >\n              </ng-container>\n              <ng-container\n                *ngIf=\"context.supportButton\"\n                [ngTemplateOutlet]=\"buttonTemplate\"\n                [ngTemplateOutletContext]=\"$any({ button: context.supportButton })\"\n              >\n              </ng-container>\n            </div>\n            <div class=\"bottom\">\n              <ng-container\n                *ngIf=\"context.cancelButton\"\n                [ngTemplateOutlet]=\"buttonTemplate\"\n                [ngTemplateOutletContext]=\"{ button: context.cancelButton }\"\n              >\n              </ng-container>\n            </div>\n          </div>\n        </ng-container>\n\n        <ng-template #buttonTemplate let-button=\"button\">\n          <button\n            [style]=\"button.style\"\n            [appearance]=\"button.appearance\"\n            [appearanceType]=\"button.appearanceType ?? 'fill'\"\n            [size]=\"button.size\"\n            [disabled]=\"$any(button.disabled ?? false | prizmToObservable | async)\"\n            [showLoader]=\"$any(button.showLoader ?? false | prizmToObservable | async)\"\n            (click)=\"button.action(context)\"\n            prizmButton\n          >\n            {{ button.text }}\n          </button>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [":host{display:inline-block;padding:var(--prizm-confirm-popup-margin, 8px);color:var(--prizm-confirm-popup-container-text, var(--prizm-v3-text-icon-primary));font-size:var(--prizm-confirm-popup-container-font-size, 12px);min-width:var(--prizm-confirm-popup-container-min-width, 350px)}:host prizm-scrollbar,:host .box{max-height:var(--prizm-confirm-popup-container-max-height, 60vh);max-width:var(--prizm-confirm-popup-container-max-width, 388px)}:host prizm-scrollbar:focus,:host .box:focus{outline:none}:host .box{overflow:hidden;text-overflow:ellipsis;position:relative;padding:var(--prizm-confirm-popup-container-padding, 16px 14px);border-radius:var(--prizm-confirm-popup-container-border-radius, 2px);background-color:var(--prizm-confirm-popup-container-background, var(--prizm-v3-background-fill-overlay))}:host[position=tl],:host[position=bl]{padding-left:0}:host[position=lt],:host[position=rt]{padding-top:1px}:host[position=lb],:host[position=rb]{padding-bottom:1px}:host[position=tr],:host[position=br]{padding-right:0}prizm-scrollbar{height:100%}.footer{padding:var(--prizm-confirm-dialog-padding, 32px 0 0 0);max-width:100%}.footer .buttons{display:flex;justify-content:flex-end;gap:8px}.footer .left,.footer .right,.footer .top,.footer .bottom{display:flex;gap:8px}.footer .right{justify-content:flex-end}.vertical [prizmButton]{box-sizing:border-box;text-align:center}.vertical .top,.vertical .bottom{flex-flow:column}.vertical .bottom{margin-top:24px}.title,.description{white-space:pre-line}.title{margin-bottom:8px}.content{padding:0 2px}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1wb3B1cC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9jb25maXJtLXBvcHVwL2NvbmZpcm0tcG9wdXAtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL2RpcmVjdGl2ZXMvY29uZmlybS1wb3B1cC9jb25maXJtLXBvcHVwLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7O0FBUS9FLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSwyQkFBZ0M7O2dJQUE1RSxtQ0FBbUM7b0hBQW5DLG1DQUFtQyx3REFGbkMsQ0FBQyxtQkFBbUIsQ0FBQyxpRENSbEMscXBFQTBEQTsyRkRoRGEsbUNBQW1DO2tCQU4vQyxTQUFTOytCQUNFLCtCQUErQixhQUc5QixDQUFDLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJpem1IaW50Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vaGludC9oaW50LWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1jb25maXJtLXBvcHVwLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLXBvcHVwLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbmZpcm0tcG9wdXAtY29udGFpbmVyLmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bUNvbmZpcm1Qb3B1cENvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIFByaXptSGludENvbnRhaW5lckNvbXBvbmVudDxhbnk+IHt9XG4iLCI8ZGl2IGNsYXNzPVwiYm94IHByaXptLWZvbnQtbWFpbi1ib2R5LTE0XCIgcHJpem1Gb2N1c1RyYXA+XG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInRpdGxlIHByaXptLWZvbnQtZHluYW1pYy10aXRsZS1oNFwiICpuZ0lmPVwiY29udGV4dC50aXRsZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqcG9seW1vcnBoT3V0bGV0PVwiY29udGV4dC50aXRsZSBhcyBkYXRhOyBjb250ZXh0OiBjb250ZXh0XCI+XG4gICAgICAgIHt7IGRhdGEgfX1cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbiBwcml6bS1mb250LW1haW4tYm9keS0xNFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqcG9seW1vcnBoT3V0bGV0PVwiY29udGVudCgpIGFzIGRhdGE7IGNvbnRleHQ6IGNvbnRleHRcIj5cbiAgICAgICAge3sgZGF0YSB9fVxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXIgcHJpem0tZm9udC1idG4tbGlua3MtMTRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiY29udGV4dC5jb25maXJtQnV0dG9uXCJcbiAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgYnV0dG9uOiBjb250ZXh0LmNvbmZpcm1CdXR0b24gfVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNvbnRleHQuc3VwcG9ydEJ1dHRvblwiXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnV0dG9uVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCIkYW55KHsgYnV0dG9uOiBjb250ZXh0LnN1cHBvcnRCdXR0b24gfSlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImNvbnRleHQuY2FuY2VsQnV0dG9uXCJcbiAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJidXR0b25UZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgYnV0dG9uOiBjb250ZXh0LmNhbmNlbEJ1dHRvbiB9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctdGVtcGxhdGUgI2J1dHRvblRlbXBsYXRlIGxldC1idXR0b249XCJidXR0b25cIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBbc3R5bGVdPVwiYnV0dG9uLnN0eWxlXCJcbiAgICAgICAgICAgIFthcHBlYXJhbmNlXT1cImJ1dHRvbi5hcHBlYXJhbmNlXCJcbiAgICAgICAgICAgIFthcHBlYXJhbmNlVHlwZV09XCJidXR0b24uYXBwZWFyYW5jZVR5cGUgPz8gJ2ZpbGwnXCJcbiAgICAgICAgICAgIFtzaXplXT1cImJ1dHRvbi5zaXplXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCIkYW55KGJ1dHRvbi5kaXNhYmxlZCA/PyBmYWxzZSB8IHByaXptVG9PYnNlcnZhYmxlIHwgYXN5bmMpXCJcbiAgICAgICAgICAgIFtzaG93TG9hZGVyXT1cIiRhbnkoYnV0dG9uLnNob3dMb2FkZXIgPz8gZmFsc2UgfCBwcml6bVRvT2JzZXJ2YWJsZSB8IGFzeW5jKVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiYnV0dG9uLmFjdGlvbihjb250ZXh0KVwiXG4gICAgICAgICAgICBwcml6bUJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGJ1dHRvbi50ZXh0IH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==