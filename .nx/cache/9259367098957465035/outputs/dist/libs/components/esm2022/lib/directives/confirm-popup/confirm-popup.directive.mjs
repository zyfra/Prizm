import { __decorate, __metadata } from "tslib";
/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { PrizmDestroyService, prizmGenerateId } from '@prizm-ui/helpers';
import { PrizmConfirmPopupContainerComponent } from './confirm-popup-container.component';
import { PRIZM_CONFIRM_POPUP_OPTIONS, } from './confirm-popup-options';
import { prizmDefaultProp, prizmRequiredSetter } from '@prizm-ui/core';
import { PrizmConfirmDialogResultDefaultType, } from '../../components/dialogs/confirm-dialog';
import { PRIZM_HINT_OPTIONS } from '../hint/hint-options';
import { PrizmHintDirective } from '../hint/hint.directive';
import * as i0 from "@angular/core";
export class PrizmConfirmPopupDirective extends PrizmHintDirective {
    constructor() {
        super(...arguments);
        // @Input('prizmConfirmPopupMode')
        // @prizmDefaultProp()
        // override prizmHintMode: PrizmHintOptions['mode'] = this.options.mode;
        this.prizmAutoReposition = this.options.autoReposition;
        this.prizmHintDirection = this.options.direction;
        this.prizmHintId = 'hintId_' + prizmGenerateId();
        this.prizmHintShowDelay = this.options.showDelay;
        this.prizmHintHideDelay = this.options.hideDelay;
        this.size = this.options.size;
        this.prizmHintHost = null;
        this.completeWith = new EventEmitter();
        this.prizmConfirmPopupTitle = '';
        this.prizmHintContext = {};
        this.prizmHintCanShow = true;
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.prizmHintShowed = new EventEmitter();
        this.containerComponent = PrizmConfirmPopupContainerComponent;
        this.onHoverActive = false;
    }
    set prizmHint(value) {
        if (!value) {
            this.content = '';
            return;
        }
        this.content = value;
    }
    onClick(target) {
        this.show$.next(this.elementRef.nativeElement.contains(target));
    }
    getContext() {
        const context = {
            size: this.size,
            // mode: this.prizmHintMode,
            reposition: this.prizmAutoReposition,
            direction: this.prizmHintDirection,
            completeWith: (value) => {
                this.completeWith.next(value);
            },
            id: this.prizmHintId,
            showDelay: this.prizmHintShowDelay,
            hideDelay: this.prizmHintHideDelay,
            title: this.prizmConfirmPopupTitle,
            host: this.host,
            confirmButton: this.confirmButton,
            supportButton: this.supportButton,
            cancelButton: this.cancelButton,
        };
        this.safeUpdateButtonsWithDefaultStyles(context);
        return context;
    }
    generateButton(options, button, defaultText, defaultComplete, defaultAppearance, defaultAppearanceType) {
        const buttonText = (typeof button === 'string' ? button : button?.text) ?? defaultText;
        const btn = ((typeof button === 'string' ? {} : button) ?? {});
        const result = {
            ...btn,
            text: buttonText,
            size: btn.size ?? options.size,
            // TODO remove any type
            action: (ctx) => {
                if (typeof btn.action === 'function')
                    btn.action(ctx);
                options.completeWith(defaultComplete);
            },
            appearance: btn.appearance ?? defaultAppearance,
            appearanceType: btn.appearanceType ?? defaultAppearanceType,
        };
        return result;
    }
    safeUpdateButtonsWithDefaultStyles(options) {
        const supportButton = this.generateButton(options, options.supportButton, 'Выйти без сохранения', PrizmConfirmDialogResultDefaultType.support, 'danger', 'outline');
        const confirmButton = this.generateButton(options, options.confirmButton, 'Подтвердить', PrizmConfirmDialogResultDefaultType.confirmed, 'primary');
        const cancelButton = this.generateButton(options, options.cancelButton, 'Отмена', PrizmConfirmDialogResultDefaultType.cancel, 'secondary', 'ghost');
        options.confirmButton = confirmButton;
        options.cancelButton = cancelButton;
        options.supportButton = supportButton;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmConfirmPopupDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.8", type: PrizmConfirmPopupDirective, selector: "[prizmConfirmPopup]:not(ng-container)", inputs: { prizmAutoReposition: "prizmAutoReposition", prizmHintDirection: ["prizmConfirmPopupDirection", "prizmHintDirection"], prizmHintId: ["prizmConfirmPopupId", "prizmHintId"], prizmHintShowDelay: ["prizmConfirmPopupShowDelay", "prizmHintShowDelay"], prizmHintHideDelay: ["prizmConfirmPopupHideDelay", "prizmHintHideDelay"], size: "size", prizmHintHost: ["prizmConfirmPopupHost", "prizmHintHost"], prizmHint: ["prizmConfirmPopup", "prizmHint"], prizmConfirmPopupTitle: "prizmConfirmPopupTitle", prizmHintContext: ["prizmConfirmPopupContext", "prizmHintContext"], prizmHintCanShow: ["prizmConfirmPopupCanShow", "prizmHintCanShow"], confirmButton: "confirmButton", supportButton: "supportButton", cancelButton: "cancelButton" }, outputs: { completeWith: "completeWith", prizmHintShowed: "prizmConfirmPopupShowed" }, host: { listeners: { "document:click": "onClick($event.target)" } }, providers: [
            PrizmDestroyService,
            {
                provide: PRIZM_HINT_OPTIONS,
                useExisting: forwardRef(() => PRIZM_CONFIRM_POPUP_OPTIONS),
            },
        ], exportAs: ["prizmConfirmPopup"], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmConfirmPopupDirective.prototype, "prizmAutoReposition", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmConfirmPopupDirective.prototype, "prizmHintDirection", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", String)
], PrizmConfirmPopupDirective.prototype, "prizmHintId", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmConfirmPopupDirective.prototype, "prizmHintShowDelay", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmConfirmPopupDirective.prototype, "prizmHintHideDelay", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmConfirmPopupDirective.prototype, "size", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmConfirmPopupDirective.prototype, "prizmHintHost", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmConfirmPopupDirective.prototype, "completeWith", void 0);
__decorate([
    prizmRequiredSetter(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PrizmConfirmPopupDirective.prototype, "prizmHint", null);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmConfirmPopupDirective.prototype, "prizmConfirmPopupTitle", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmConfirmPopupDirective.prototype, "prizmHintContext", void 0);
__decorate([
    prizmDefaultProp(),
    __metadata("design:type", Object)
], PrizmConfirmPopupDirective.prototype, "prizmHintCanShow", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: PrizmConfirmPopupDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmConfirmPopup]:not(ng-container)',
                    providers: [
                        PrizmDestroyService,
                        {
                            provide: PRIZM_HINT_OPTIONS,
                            useExisting: forwardRef(() => PRIZM_CONFIRM_POPUP_OPTIONS),
                        },
                    ],
                    exportAs: 'prizmConfirmPopup',
                }]
        }], propDecorators: { prizmAutoReposition: [{
                type: Input,
                args: ['prizmAutoReposition']
            }], prizmHintDirection: [{
                type: Input,
                args: ['prizmConfirmPopupDirection']
            }], prizmHintId: [{
                type: Input,
                args: ['prizmConfirmPopupId']
            }], prizmHintShowDelay: [{
                type: Input,
                args: ['prizmConfirmPopupShowDelay']
            }], prizmHintHideDelay: [{
                type: Input,
                args: ['prizmConfirmPopupHideDelay']
            }], size: [{
                type: Input
            }], prizmHintHost: [{
                type: Input,
                args: ['prizmConfirmPopupHost']
            }], completeWith: [{
                type: Output
            }], prizmHint: [{
                type: Input,
                args: ['prizmConfirmPopup']
            }], prizmConfirmPopupTitle: [{
                type: Input
            }], prizmHintContext: [{
                type: Input,
                args: ['prizmConfirmPopupContext']
            }], prizmHintCanShow: [{
                type: Input,
                args: ['prizmConfirmPopupCanShow']
            }], confirmButton: [{
                type: Input
            }], supportButton: [{
                type: Input
            }], cancelButton: [{
                type: Input
            }], prizmHintShowed: [{
                type: Output,
                args: ['prizmConfirmPopupShowed']
            }], onClick: [{
                type: HostListener,
                args: ['document:click', ['$event.target']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1wb3B1cC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2NvbmZpcm0tcG9wdXAvY29uZmlybS1wb3B1cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9EQUFvRDtBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFGLE9BQU8sRUFDTCwyQkFBMkIsR0FJNUIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RSxPQUFPLEVBRUwsbUNBQW1DLEdBQ3BDLE1BQU0seUNBQXlDLENBQUM7QUFFakQsT0FBTyxFQUFFLGtCQUFrQixFQUFvQixNQUFNLHNCQUFzQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQWE1RCxNQUFNLE9BQU8sMEJBRVgsU0FBUSxrQkFBNEM7SUFidEQ7O1FBY0Usa0NBQWtDO1FBQ2xDLHNCQUFzQjtRQUN0Qix3RUFBd0U7UUFJL0Qsd0JBQW1CLEdBQXVDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBSXRGLHVCQUFrQixHQUFrQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUkzRSxnQkFBVyxHQUFXLFNBQVMsR0FBRyxlQUFlLEVBQUUsQ0FBQztRQUlwRCx1QkFBa0IsR0FBa0MsSUFBSSxDQUFDLE9BQU8sQ0FB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QkFBZ0I7c0JBRnhCLEtBQUs7dUJBQUMsMEJBQTBCO2dCQUl4QixhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFJRyxlQUFlO3NCQUR2QixNQUFNO3VCQUFDLHlCQUF5QjtnQkFNeUIsT0FBTztzQkFBaEUsWUFBWTt1QkFBQyxnQkFBZ0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBhbmd1bGFyLWVzbGludC9uby1pbnB1dC1yZW5hbWUgKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UsIHByaXptR2VuZXJhdGVJZCB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IFByaXptQ29uZmlybVBvcHVwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtLXBvcHVwLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgUFJJWk1fQ09ORklSTV9QT1BVUF9PUFRJT05TLFxuICBQcml6bUNvbmZpcm1Qb3B1cEJ1dHRvbixcbiAgUHJpem1Db25maXJtUG9wdXBDb250ZXh0LFxuICBQcml6bUNvbmZpcm1Qb3B1cE9wdGlvbnMsXG59IGZyb20gJy4vY29uZmlybS1wb3B1cC1vcHRpb25zJztcbmltcG9ydCB7IHByaXptRGVmYXVsdFByb3AsIHByaXptUmVxdWlyZWRTZXR0ZXIgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQb2x5bW9ycGhDb250ZW50IH0gZnJvbSAnLi4vcG9seW1vcnBoJztcbmltcG9ydCB7XG4gIFByaXptQ29uZmlybURpYWxvZ0J1dHRvbixcbiAgUHJpem1Db25maXJtRGlhbG9nUmVzdWx0RGVmYXVsdFR5cGUsXG59IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGlhbG9ncy9jb25maXJtLWRpYWxvZyc7XG5pbXBvcnQgeyBQcml6bUFwcGVhcmFuY2UsIFByaXptQXBwZWFyYW5jZVR5cGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBQUklaTV9ISU5UX09QVElPTlMsIFByaXptSGludE9wdGlvbnMgfSBmcm9tICcuLi9oaW50L2hpbnQtb3B0aW9ucyc7XG5pbXBvcnQgeyBQcml6bUhpbnREaXJlY3RpdmUgfSBmcm9tICcuLi9oaW50L2hpbnQuZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3ByaXptQ29uZmlybVBvcHVwXTpub3QobmctY29udGFpbmVyKScsXG4gIHByb3ZpZGVyczogW1xuICAgIFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJJWk1fSElOVF9PUFRJT05TLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUFJJWk1fQ09ORklSTV9QT1BVUF9PUFRJT05TKSxcbiAgICB9LFxuICBdLFxuICBleHBvcnRBczogJ3ByaXptQ29uZmlybVBvcHVwJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1Db25maXJtUG9wdXBEaXJlY3RpdmU8XG4gIFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuPiBleHRlbmRzIFByaXptSGludERpcmVjdGl2ZTxQcml6bUNvbmZpcm1Qb3B1cE9wdGlvbnM+IHtcbiAgLy8gQElucHV0KCdwcml6bUNvbmZpcm1Qb3B1cE1vZGUnKVxuICAvLyBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIC8vIG92ZXJyaWRlIHByaXptSGludE1vZGU6IFByaXptSGludE9wdGlvbnNbJ21vZGUnXSA9IHRoaXMub3B0aW9ucy5tb2RlO1xuXG4gIEBJbnB1dCgncHJpem1BdXRvUmVwb3NpdGlvbicpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3ZlcnJpZGUgcHJpem1BdXRvUmVwb3NpdGlvbjogUHJpem1IaW50T3B0aW9uc1snYXV0b1JlcG9zaXRpb24nXSA9IHRoaXMub3B0aW9ucy5hdXRvUmVwb3NpdGlvbjtcblxuICBASW5wdXQoJ3ByaXptQ29uZmlybVBvcHVwRGlyZWN0aW9uJylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUhpbnREaXJlY3Rpb246IFByaXptSGludE9wdGlvbnNbJ2RpcmVjdGlvbiddID0gdGhpcy5vcHRpb25zLmRpcmVjdGlvbjtcblxuICBASW5wdXQoJ3ByaXptQ29uZmlybVBvcHVwSWQnKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG92ZXJyaWRlIHByaXptSGludElkOiBzdHJpbmcgPSAnaGludElkXycgKyBwcml6bUdlbmVyYXRlSWQoKTtcblxuICBASW5wdXQoJ3ByaXptQ29uZmlybVBvcHVwU2hvd0RlbGF5JylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUhpbnRTaG93RGVsYXk6IFByaXptSGludE9wdGlvbnNbJ3Nob3dEZWxheSddID0gdGhpcy5vcHRpb25zLnNob3dEZWxheTtcblxuICBASW5wdXQoJ3ByaXptQ29uZmlybVBvcHVwSGlkZURlbGF5JylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUhpbnRIaWRlRGVsYXk6IFByaXptSGludE9wdGlvbnNbJ2hpZGVEZWxheSddID0gdGhpcy5vcHRpb25zLmhpZGVEZWxheTtcblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBzaXplID0gdGhpcy5vcHRpb25zLnNpemU7XG5cbiAgQElucHV0KCdwcml6bUNvbmZpcm1Qb3B1cEhvc3QnKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG92ZXJyaWRlIHByaXptSGludEhvc3Q6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgQE91dHB1dCgpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgcHVibGljIGNvbXBsZXRlV2l0aCA9IG5ldyBFdmVudEVtaXR0ZXI8UHJpem1Db25maXJtRGlhbG9nUmVzdWx0RGVmYXVsdFR5cGUgfCB1bmtub3duPigpO1xuXG4gIEBJbnB1dCgncHJpem1Db25maXJtUG9wdXAnKVxuICBAcHJpem1SZXF1aXJlZFNldHRlcigpXG4gIG92ZXJyaWRlIHNldCBwcml6bUhpbnQodmFsdWU6IFBvbHltb3JwaENvbnRlbnQgfCBudWxsKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5jb250ZW50ID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50ID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHByaXptQ29uZmlybVBvcHVwVGl0bGUgPSAnJztcblxuICBASW5wdXQoJ3ByaXptQ29uZmlybVBvcHVwQ29udGV4dCcpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3ZlcnJpZGUgcHJpem1IaW50Q29udGV4dDogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcblxuICBASW5wdXQoJ3ByaXptQ29uZmlybVBvcHVwQ2FuU2hvdycpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3ZlcnJpZGUgcHJpem1IaW50Q2FuU2hvdyA9IHRydWU7XG5cbiAgQElucHV0KCkgY29uZmlybUJ1dHRvbj86IFByaXptQ29uZmlybVBvcHVwQnV0dG9uIHwgc3RyaW5nO1xuICBASW5wdXQoKSBzdXBwb3J0QnV0dG9uPzogUHJpem1Db25maXJtUG9wdXBCdXR0b24gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbmNlbEJ1dHRvbj86IFByaXptQ29uZmlybVBvcHVwQnV0dG9uIHwgc3RyaW5nO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8tb3V0cHV0LXJlbmFtZVxuICBAT3V0cHV0KCdwcml6bUNvbmZpcm1Qb3B1cFNob3dlZCcpXG4gIG92ZXJyaWRlIHByaXptSGludFNob3dlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgY29udGFpbmVyQ29tcG9uZW50ID0gUHJpem1Db25maXJtUG9wdXBDb250YWluZXJDb21wb25lbnQ7XG4gIHByb3RlY3RlZCBvdmVycmlkZSByZWFkb25seSBvbkhvdmVyQWN0aXZlID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudC50YXJnZXQnXSkgcHVibGljIG9uQ2xpY2sodGFyZ2V0OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuc2hvdyQubmV4dCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXQpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXRDb250ZXh0KCk6IFByaXptQ29uZmlybVBvcHVwQ29udGV4dCB7XG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIC8vIG1vZGU6IHRoaXMucHJpem1IaW50TW9kZSxcbiAgICAgIHJlcG9zaXRpb246IHRoaXMucHJpem1BdXRvUmVwb3NpdGlvbixcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5wcml6bUhpbnREaXJlY3Rpb24sXG4gICAgICBjb21wbGV0ZVdpdGg6ICh2YWx1ZTogUHJpem1Db25maXJtUG9wdXBCdXR0b24pID0+IHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVdpdGgubmV4dCh2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgaWQ6IHRoaXMucHJpem1IaW50SWQsXG4gICAgICBzaG93RGVsYXk6IHRoaXMucHJpem1IaW50U2hvd0RlbGF5LFxuICAgICAgaGlkZURlbGF5OiB0aGlzLnByaXptSGludEhpZGVEZWxheSxcbiAgICAgIHRpdGxlOiB0aGlzLnByaXptQ29uZmlybVBvcHVwVGl0bGUsXG4gICAgICBob3N0OiB0aGlzLmhvc3QsXG4gICAgICBjb25maXJtQnV0dG9uOiB0aGlzLmNvbmZpcm1CdXR0b24sXG4gICAgICBzdXBwb3J0QnV0dG9uOiB0aGlzLnN1cHBvcnRCdXR0b24sXG4gICAgICBjYW5jZWxCdXR0b246IHRoaXMuY2FuY2VsQnV0dG9uLFxuICAgIH0gYXMgUHJpem1Db25maXJtUG9wdXBDb250ZXh0O1xuICAgIHRoaXMuc2FmZVVwZGF0ZUJ1dHRvbnNXaXRoRGVmYXVsdFN0eWxlcyhjb250ZXh0KTtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVCdXR0b24oXG4gICAgb3B0aW9uczogUHJpem1Db25maXJtUG9wdXBDb250ZXh0LFxuICAgIGJ1dHRvbjogUHJpem1Db25maXJtRGlhbG9nQnV0dG9uIHwgc3RyaW5nLFxuICAgIGRlZmF1bHRUZXh0OiBzdHJpbmcsXG4gICAgZGVmYXVsdENvbXBsZXRlOiBQcml6bUNvbmZpcm1EaWFsb2dSZXN1bHREZWZhdWx0VHlwZSxcbiAgICBkZWZhdWx0QXBwZWFyYW5jZT86IFByaXptQXBwZWFyYW5jZSxcbiAgICBkZWZhdWx0QXBwZWFyYW5jZVR5cGU/OiBQcml6bUFwcGVhcmFuY2VUeXBlXG4gICk6IFByaXptQ29uZmlybURpYWxvZ0J1dHRvbiB7XG4gICAgY29uc3QgYnV0dG9uVGV4dCA9ICh0eXBlb2YgYnV0dG9uID09PSAnc3RyaW5nJyA/IGJ1dHRvbiA6IGJ1dHRvbj8udGV4dCkgPz8gZGVmYXVsdFRleHQ7XG4gICAgY29uc3QgYnRuID0gKCh0eXBlb2YgYnV0dG9uID09PSAnc3RyaW5nJyA/IHt9IDogYnV0dG9uKSA/PyB7fSkgYXMgUGFydGlhbDxQcml6bUNvbmZpcm1EaWFsb2dCdXR0b24+O1xuXG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgLi4uYnRuLFxuICAgICAgdGV4dDogYnV0dG9uVGV4dCxcbiAgICAgIHNpemU6IGJ0bi5zaXplID8/IG9wdGlvbnMuc2l6ZSxcbiAgICAgIC8vIFRPRE8gcmVtb3ZlIGFueSB0eXBlXG4gICAgICBhY3Rpb246IChjdHg6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGJ0bi5hY3Rpb24gPT09ICdmdW5jdGlvbicpIGJ0bi5hY3Rpb24oY3R4IGFzIGFueSk7XG4gICAgICAgIG9wdGlvbnMuY29tcGxldGVXaXRoKGRlZmF1bHRDb21wbGV0ZSk7XG4gICAgICB9LFxuICAgICAgYXBwZWFyYW5jZTogYnRuLmFwcGVhcmFuY2UgPz8gZGVmYXVsdEFwcGVhcmFuY2UsXG4gICAgICBhcHBlYXJhbmNlVHlwZTogYnRuLmFwcGVhcmFuY2VUeXBlID8/IGRlZmF1bHRBcHBlYXJhbmNlVHlwZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgc2FmZVVwZGF0ZUJ1dHRvbnNXaXRoRGVmYXVsdFN0eWxlcyhvcHRpb25zOiBQcml6bUNvbmZpcm1Qb3B1cENvbnRleHQpOiB2b2lkIHtcbiAgICBjb25zdCBzdXBwb3J0QnV0dG9uID0gdGhpcy5nZW5lcmF0ZUJ1dHRvbihcbiAgICAgIG9wdGlvbnMsXG4gICAgICBvcHRpb25zLnN1cHBvcnRCdXR0b24gYXMgc3RyaW5nLFxuICAgICAgJ9CS0YvQudGC0Lgg0LHQtdC3INGB0L7RhdGA0LDQvdC10L3QuNGPJyxcbiAgICAgIFByaXptQ29uZmlybURpYWxvZ1Jlc3VsdERlZmF1bHRUeXBlLnN1cHBvcnQsXG4gICAgICAnZGFuZ2VyJyxcbiAgICAgICdvdXRsaW5lJ1xuICAgICk7XG5cbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gdGhpcy5nZW5lcmF0ZUJ1dHRvbihcbiAgICAgIG9wdGlvbnMsXG4gICAgICBvcHRpb25zLmNvbmZpcm1CdXR0b24gYXMgc3RyaW5nLFxuICAgICAgJ9Cf0L7QtNGC0LLQtdGA0LTQuNGC0YwnLFxuICAgICAgUHJpem1Db25maXJtRGlhbG9nUmVzdWx0RGVmYXVsdFR5cGUuY29uZmlybWVkLFxuICAgICAgJ3ByaW1hcnknXG4gICAgKTtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHRoaXMuZ2VuZXJhdGVCdXR0b24oXG4gICAgICBvcHRpb25zLFxuICAgICAgb3B0aW9ucy5jYW5jZWxCdXR0b24gYXMgc3RyaW5nLFxuICAgICAgJ9Ce0YLQvNC10L3QsCcsXG4gICAgICBQcml6bUNvbmZpcm1EaWFsb2dSZXN1bHREZWZhdWx0VHlwZS5jYW5jZWwsXG4gICAgICAnc2Vjb25kYXJ5JyxcbiAgICAgICdnaG9zdCdcbiAgICApO1xuXG4gICAgb3B0aW9ucy5jb25maXJtQnV0dG9uID0gY29uZmlybUJ1dHRvbjtcbiAgICBvcHRpb25zLmNhbmNlbEJ1dHRvbiA9IGNhbmNlbEJ1dHRvbjtcbiAgICBvcHRpb25zLnN1cHBvcnRCdXR0b24gPSBzdXBwb3J0QnV0dG9uO1xuICB9XG59XG4iXX0=