import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { CDK_DRAG_CONFIG, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { PrizmLetDirective, PrizmPluckPipe } from '@prizm-ui/helpers';
import { FormsModule } from '@angular/forms';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmColumnIconPipe } from '../../pipes/column-icon.pipe';
import { PrizmButtonComponent } from '../../../button/button.component';
import { PrizmToggleComponent } from '../../../toggle/toggle.component';
import { PrizmIconComponent } from '../../../icon/icon.component';
import { PrizmScrollbarComponent } from '../../../scrollbar/scrollbar.component';
import { PrizmHintDirective } from '../../../../directives/hint/hint.directive';
import { PrizmListingItemComponent } from '../../../listing-item';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/drag-drop";
import * as i3 from "@prizm-ui/theme";
const DragConfig = {
    zIndex: 9999,
};
export class PrizmColumnDropListComponent extends PrizmAbstractTestId {
    constructor() {
        super(...arguments);
        this.isLastColumnShown = false;
        this.statusChanged = new EventEmitter();
        this.testId_ = 'ui_column_drop-list';
    }
    toggleColumnStatus(column) {
        if (column.status === 'default') {
            column.status = 'hidden';
        }
        else if (column.status === 'hidden') {
            column.status = 'default';
        }
        this.statusChanged.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmColumnDropListComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: PrizmColumnDropListComponent, isStandalone: true, selector: "prizm-column-drop-list", inputs: { columns: "columns", translations: "translations", isLastColumnShown: "isLastColumnShown" }, outputs: { statusChanged: "statusChanged" }, providers: [{ provide: CDK_DRAG_CONFIG, useValue: DragConfig }], usesInheritance: true, ngImport: i0, template: "<prizm-scrollbar class=\"scroll-box\">\n  <ng-container *ngIf=\"columns.length; else dropZone\">\n    <prizm-listing-item\n      *ngFor=\"let column of columns\"\n      cdkDrag\n      cdkDragPreviewClass=\"prizm-high-index\"\n      prizmTheme\n    >\n      <ng-container leftBox>\n        <prizm-icon [size]=\"24\" iconClass=\"editor-dots\"></prizm-icon>\n      </ng-container>\n      <span>{{ column.name }}</span>\n      <ng-container rightBox>\n        <button\n          [icon]=\"column.status | prizmColumnIcon\"\n          [disabled]=\"column.status === 'sticky' || (isLastColumnShown && column.status === 'default')\"\n          [prizmHint]=\"\n            isLastColumnShown && column.status === 'default'\n              ? (translations | prizmPluck : ['disabledHint'])\n              : ''\n          \"\n          (click)=\"toggleColumnStatus(column)\"\n          prizmIconButton\n          appearanceType=\"ghost\"\n          appearance=\"secondary\"\n          size=\"m\"\n        ></button>\n      </ng-container>\n      <ng-container *cdkDragPlaceholder>\n        <ng-container *ngTemplateOutlet=\"placeholder\"></ng-container>\n      </ng-container>\n    </prizm-listing-item>\n  </ng-container>\n</prizm-scrollbar>\n\n<ng-template #dropZone>\n  <div class=\"dropzone\">{{ translations | prizmPluck : ['dropzone'] }}</div>\n</ng-template>\n\n<ng-template #placeholder>\n  <div class=\"dropzone\"></div>\n</ng-template>\n", styles: [".scroll-box{min-height:40px;max-height:287px}.cdk-drag-preview{color:var(--prizm-v3-text-icon-primary);box-shadow:var(--prizm-v3-shadow-big-bottom);border-radius:2px;cursor:grabbing!important;z-index:9999}.cdk-drag-preview ::ng-deep .item-container{border:1px solid var(--prizm-v3-background-stroke)}.dropzone{display:flex;align-items:center;justify-content:space-around;border-top:1px dashed var(--prizm-v3-form-stroke-default);border-bottom:1px dashed var(--prizm-v3-form-stroke-default);border-radius:2px;background-color:var(--prizm-v3-form-fill-default);height:40px;margin-bottom:16px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: PrizmButtonComponent, selector: "button[prizmButton], button[prizmIconButton], a[prizmButton], a[prizmIconButton]", inputs: ["size", "icon", "iconRight", "appearance", "appearanceType", "disabled", "showLoader"] }, { kind: "ngmodule", type: DragDropModule }, { kind: "directive", type: i2.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: i2.CdkDragPlaceholder, selector: "ng-template[cdkDragPlaceholder]", inputs: ["data"] }, { kind: "component", type: PrizmIconComponent, selector: "prizm-icon", inputs: ["iconClass", "size"] }, { kind: "component", type: PrizmScrollbarComponent, selector: "prizm-scrollbar", inputs: ["visibility"] }, { kind: "pipe", type: PrizmPluckPipe, name: "prizmPluck" }, { kind: "directive", type: PrizmHintDirective, selector: "[prizmHint]:not(ng-container)", inputs: ["prizmAutoReposition", "prizmHintDirection", "prizmHintId", "prizmHintTheme", "prizmHintShowDelay", "prizmHintHideDelay", "prizmHintHost", "prizmHintContext", "prizmHintCanShow", "prizmHint"], outputs: ["prizmHintShowed"], exportAs: ["prizmHint"] }, { kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: PrizmThemeModule }, { kind: "directive", type: i3.PrizmThemeDirective, selector: "[prizmTheme]", inputs: ["prizmTheme"], outputs: ["prizmThemeChange"] }, { kind: "pipe", type: PrizmColumnIconPipe, name: "prizmColumnIcon" }, { kind: "component", type: PrizmListingItemComponent, selector: "prizm-listing-item", inputs: ["disabled", "selected"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmColumnDropListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-column-drop-list', changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: CDK_DRAG_CONFIG, useValue: DragConfig }], standalone: true, imports: [
                        CommonModule,
                        PrizmButtonComponent,
                        PrizmToggleComponent,
                        DragDropModule,
                        PrizmIconComponent,
                        PrizmScrollbarComponent,
                        PrizmLetDirective,
                        PrizmPluckPipe,
                        PrizmHintDirective,
                        FormsModule,
                        PrizmThemeModule,
                        PrizmColumnIconPipe,
                        PrizmListingItemComponent,
                    ], template: "<prizm-scrollbar class=\"scroll-box\">\n  <ng-container *ngIf=\"columns.length; else dropZone\">\n    <prizm-listing-item\n      *ngFor=\"let column of columns\"\n      cdkDrag\n      cdkDragPreviewClass=\"prizm-high-index\"\n      prizmTheme\n    >\n      <ng-container leftBox>\n        <prizm-icon [size]=\"24\" iconClass=\"editor-dots\"></prizm-icon>\n      </ng-container>\n      <span>{{ column.name }}</span>\n      <ng-container rightBox>\n        <button\n          [icon]=\"column.status | prizmColumnIcon\"\n          [disabled]=\"column.status === 'sticky' || (isLastColumnShown && column.status === 'default')\"\n          [prizmHint]=\"\n            isLastColumnShown && column.status === 'default'\n              ? (translations | prizmPluck : ['disabledHint'])\n              : ''\n          \"\n          (click)=\"toggleColumnStatus(column)\"\n          prizmIconButton\n          appearanceType=\"ghost\"\n          appearance=\"secondary\"\n          size=\"m\"\n        ></button>\n      </ng-container>\n      <ng-container *cdkDragPlaceholder>\n        <ng-container *ngTemplateOutlet=\"placeholder\"></ng-container>\n      </ng-container>\n    </prizm-listing-item>\n  </ng-container>\n</prizm-scrollbar>\n\n<ng-template #dropZone>\n  <div class=\"dropzone\">{{ translations | prizmPluck : ['dropzone'] }}</div>\n</ng-template>\n\n<ng-template #placeholder>\n  <div class=\"dropzone\"></div>\n</ng-template>\n", styles: [".scroll-box{min-height:40px;max-height:287px}.cdk-drag-preview{color:var(--prizm-v3-text-icon-primary);box-shadow:var(--prizm-v3-shadow-big-bottom);border-radius:2px;cursor:grabbing!important;z-index:9999}.cdk-drag-preview ::ng-deep .item-container{border:1px solid var(--prizm-v3-background-stroke)}.dropzone{display:flex;align-items:center;justify-content:space-around;border-top:1px dashed var(--prizm-v3-form-stroke-default);border-bottom:1px dashed var(--prizm-v3-form-stroke-default);border-radius:2px;background-color:var(--prizm-v3-form-fill-default);height:40px;margin-bottom:16px}\n"] }]
        }], propDecorators: { columns: [{
                type: Input
            }], translations: [{
                type: Input
            }], isLastColumnShown: [{
                type: Input
            }], statusChanged: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRyb3AtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NvbHVtbi1zZXR0aW5ncy9jb21wb25lbnRzL2NvbHVtbi1kcm9wLWxpc3QvY29sdW1uLWRyb3AtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL2NvbHVtbi1zZXR0aW5ncy9jb21wb25lbnRzL2NvbHVtbi1kcm9wLWxpc3QvY29sdW1uLWRyb3AtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR3ZFLE9BQU8sRUFBRSxlQUFlLEVBQWtCLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUVsRSxNQUFNLFVBQVUsR0FBbUI7SUFDakMsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFDO0FBeUJGLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxtQkFBbUI7SUF2QnJFOztRQTBCVyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDekIsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRWpDLFlBQU8sR0FBRyxxQkFBcUIsQ0FBQztLQVVuRDtJQVJRLGtCQUFrQixDQUFDLE1BQTJCO1FBQ25ELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDL0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7U0FDMUI7YUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDOzhHQWZVLDRCQUE0QjtrR0FBNUIsNEJBQTRCLHdOQWxCNUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDLGlEQzFCakUsMjVDQTBDQSx5b0JEYkksWUFBWSx1YUFDWixvQkFBb0IsNk5BRXBCLGNBQWMsb2xCQUNkLGtCQUFrQixzRkFDbEIsdUJBQXVCLCtFQUV2QixjQUFjLG1EQUNkLGtCQUFrQiwwVUFDbEIsV0FBVyw4QkFDWCxnQkFBZ0IsZ0tBQ2hCLG1CQUFtQix3REFDbkIseUJBQXlCOzsyRkFHaEIsNEJBQTRCO2tCQXZCeEMsU0FBUzsrQkFDRSx3QkFBd0IsbUJBR2pCLHVCQUF1QixDQUFDLE1BQU0sYUFDcEMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDLGNBQ25ELElBQUksV0FDUDt3QkFDUCxZQUFZO3dCQUNaLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3dCQUN2QixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQix5QkFBeUI7cUJBQzFCOzhCQUdRLE9BQU87c0JBQWYsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLGlCQUFpQjtzQkFBekIsS0FBSztnQkFDSSxhQUFhO3NCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bUFic3RyYWN0VGVzdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWJzdHJhY3QvaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgUHJpem1Db2x1bW5TZXR0aW5ncyB9IGZyb20gJy4vLi4vLi4vY29sdW1uLXNldHRpbmdzLm1vZGVsJztcbmltcG9ydCB7IFByaXptTGFuZ3VhZ2VDb2x1bW5TZXR0aW5ncyB9IGZyb20gJ0Bwcml6bS11aS9pMThuJztcbmltcG9ydCB7IENES19EUkFHX0NPTkZJRywgRHJhZ0Ryb3BDb25maWcsIERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUHJpem1MZXREaXJlY3RpdmUsIFByaXptUGx1Y2tQaXBlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcml6bVRoZW1lTW9kdWxlIH0gZnJvbSAnQHByaXptLXVpL3RoZW1lJztcbmltcG9ydCB7IFByaXptQ29sdW1uSWNvblBpcGUgfSBmcm9tICcuLi8uLi9waXBlcy9jb2x1bW4taWNvbi5waXBlJztcbmltcG9ydCB7IFByaXptQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1Ub2dnbGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi90b2dnbGUvdG9nZ2xlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml6bUljb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9pY29uL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IFByaXptU2Nyb2xsYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vc2Nyb2xsYmFyL3Njcm9sbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJpem1IaW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlyZWN0aXZlcy9oaW50L2hpbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFByaXptTGlzdGluZ0l0ZW1Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9saXN0aW5nLWl0ZW0nO1xuXG5jb25zdCBEcmFnQ29uZmlnOiBEcmFnRHJvcENvbmZpZyA9IHtcbiAgekluZGV4OiA5OTk5LFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJpem0tY29sdW1uLWRyb3AtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb2x1bW4tZHJvcC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29sdW1uLWRyb3AtbGlzdC5jb21wb25lbnQubGVzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDREtfRFJBR19DT05GSUcsIHVzZVZhbHVlOiBEcmFnQ29uZmlnIH1dLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFByaXptQnV0dG9uQ29tcG9uZW50LFxuICAgIFByaXptVG9nZ2xlQ29tcG9uZW50LFxuICAgIERyYWdEcm9wTW9kdWxlLFxuICAgIFByaXptSWNvbkNvbXBvbmVudCxcbiAgICBQcml6bVNjcm9sbGJhckNvbXBvbmVudCxcbiAgICBQcml6bUxldERpcmVjdGl2ZSxcbiAgICBQcml6bVBsdWNrUGlwZSxcbiAgICBQcml6bUhpbnREaXJlY3RpdmUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUHJpem1UaGVtZU1vZHVsZSxcbiAgICBQcml6bUNvbHVtbkljb25QaXBlLFxuICAgIFByaXptTGlzdGluZ0l0ZW1Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQ29sdW1uRHJvcExpc3RDb21wb25lbnQgZXh0ZW5kcyBQcml6bUFic3RyYWN0VGVzdElkIHtcbiAgQElucHV0KCkgY29sdW1ucyE6IFByaXptQ29sdW1uU2V0dGluZ3NbXTtcbiAgQElucHV0KCkgdHJhbnNsYXRpb25zITogUHJpem1MYW5ndWFnZUNvbHVtblNldHRpbmdzWydjb2x1bW5TZXR0aW5ncyddO1xuICBASW5wdXQoKSBpc0xhc3RDb2x1bW5TaG93biA9IGZhbHNlO1xuICBAT3V0cHV0KCkgc3RhdHVzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBvdmVycmlkZSByZWFkb25seSB0ZXN0SWRfID0gJ3VpX2NvbHVtbl9kcm9wLWxpc3QnO1xuXG4gIHB1YmxpYyB0b2dnbGVDb2x1bW5TdGF0dXMoY29sdW1uOiBQcml6bUNvbHVtblNldHRpbmdzKTogdm9pZCB7XG4gICAgaWYgKGNvbHVtbi5zdGF0dXMgPT09ICdkZWZhdWx0Jykge1xuICAgICAgY29sdW1uLnN0YXR1cyA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSBpZiAoY29sdW1uLnN0YXR1cyA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIGNvbHVtbi5zdGF0dXMgPSAnZGVmYXVsdCc7XG4gICAgfVxuICAgIHRoaXMuc3RhdHVzQ2hhbmdlZC5lbWl0KCk7XG4gIH1cbn1cbiIsIjxwcml6bS1zY3JvbGxiYXIgY2xhc3M9XCJzY3JvbGwtYm94XCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW5zLmxlbmd0aDsgZWxzZSBkcm9wWm9uZVwiPlxuICAgIDxwcml6bS1saXN0aW5nLWl0ZW1cbiAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiXG4gICAgICBjZGtEcmFnXG4gICAgICBjZGtEcmFnUHJldmlld0NsYXNzPVwicHJpem0taGlnaC1pbmRleFwiXG4gICAgICBwcml6bVRoZW1lXG4gICAgPlxuICAgICAgPG5nLWNvbnRhaW5lciBsZWZ0Qm94PlxuICAgICAgICA8cHJpem0taWNvbiBbc2l6ZV09XCIyNFwiIGljb25DbGFzcz1cImVkaXRvci1kb3RzXCI+PC9wcml6bS1pY29uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8c3Bhbj57eyBjb2x1bW4ubmFtZSB9fTwvc3Bhbj5cbiAgICAgIDxuZy1jb250YWluZXIgcmlnaHRCb3g+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBbaWNvbl09XCJjb2x1bW4uc3RhdHVzIHwgcHJpem1Db2x1bW5JY29uXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiY29sdW1uLnN0YXR1cyA9PT0gJ3N0aWNreScgfHwgKGlzTGFzdENvbHVtblNob3duICYmIGNvbHVtbi5zdGF0dXMgPT09ICdkZWZhdWx0JylcIlxuICAgICAgICAgIFtwcml6bUhpbnRdPVwiXG4gICAgICAgICAgICBpc0xhc3RDb2x1bW5TaG93biAmJiBjb2x1bW4uc3RhdHVzID09PSAnZGVmYXVsdCdcbiAgICAgICAgICAgICAgPyAodHJhbnNsYXRpb25zIHwgcHJpem1QbHVjayA6IFsnZGlzYWJsZWRIaW50J10pXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgICBcIlxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVDb2x1bW5TdGF0dXMoY29sdW1uKVwiXG4gICAgICAgICAgcHJpem1JY29uQnV0dG9uXG4gICAgICAgICAgYXBwZWFyYW5jZVR5cGU9XCJnaG9zdFwiXG4gICAgICAgICAgYXBwZWFyYW5jZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgc2l6ZT1cIm1cIlxuICAgICAgICA+PC9idXR0b24+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKmNka0RyYWdQbGFjZWhvbGRlcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBsYWNlaG9sZGVyXCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3ByaXptLWxpc3RpbmctaXRlbT5cbiAgPC9uZy1jb250YWluZXI+XG48L3ByaXptLXNjcm9sbGJhcj5cblxuPG5nLXRlbXBsYXRlICNkcm9wWm9uZT5cbiAgPGRpdiBjbGFzcz1cImRyb3B6b25lXCI+e3sgdHJhbnNsYXRpb25zIHwgcHJpem1QbHVjayA6IFsnZHJvcHpvbmUnXSB9fTwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNwbGFjZWhvbGRlcj5cbiAgPGRpdiBjbGFzcz1cImRyb3B6b25lXCI+PC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19