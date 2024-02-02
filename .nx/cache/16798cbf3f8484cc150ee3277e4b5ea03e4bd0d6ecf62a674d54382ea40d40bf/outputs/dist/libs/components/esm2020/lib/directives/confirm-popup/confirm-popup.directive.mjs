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
}
PrizmConfirmPopupDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmConfirmPopupDirective, deps: null, target: i0.ɵɵFactoryTarget.Directive });
PrizmConfirmPopupDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmConfirmPopupDirective, selector: "[prizmConfirmPopup]:not(ng-container)", inputs: { prizmAutoReposition: "prizmAutoReposition", prizmHintDirection: ["prizmConfirmPopupDirection", "prizmHintDirection"], prizmHintId: ["prizmConfirmPopupId", "prizmHintId"], prizmHintShowDelay: ["prizmConfirmPopupShowDelay", "prizmHintShowDelay"], prizmHintHideDelay: ["prizmConfirmPopupHideDelay", "prizmHintHideDelay"], size: "size", prizmHintHost: ["prizmConfirmPopupHost", "prizmHintHost"], prizmHint: ["prizmConfirmPopup", "prizmHint"], prizmConfirmPopupTitle: "prizmConfirmPopupTitle", prizmHintContext: ["prizmConfirmPopupContext", "prizmHintContext"], prizmHintCanShow: ["prizmConfirmPopupCanShow", "prizmHintCanShow"], confirmButton: "confirmButton", supportButton: "supportButton", cancelButton: "cancelButton" }, outputs: { completeWith: "completeWith", prizmHintShowed: "prizmConfirmPopupShowed" }, host: { listeners: { "document:click": "onClick($event.target)" } }, providers: [
        PrizmDestroyService,
        {
            provide: PRIZM_HINT_OPTIONS,
            useExisting: forwardRef(() => PRIZM_CONFIRM_POPUP_OPTIONS),
        },
    ], exportAs: ["prizmConfirmPopup"], usesInheritance: true, ngImport: i0 });
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmConfirmPopupDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1wb3B1cC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9kaXJlY3RpdmVzL2NvbmZpcm0tcG9wdXAvY29uZmlybS1wb3B1cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9EQUFvRDtBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFGLE9BQU8sRUFDTCwyQkFBMkIsR0FJNUIsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RSxPQUFPLEVBRUwsbUNBQW1DLEdBQ3BDLE1BQU0seUNBQXlDLENBQUM7QUFFakQsT0FBTyxFQUFFLGtCQUFrQixFQUFvQixNQUFNLHNCQUFzQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQWE1RCxNQUFNLE9BQU8sMEJBRVgsU0FBUSxrQkFBNEM7SUFidEQ7O1FBY0Usa0NBQWtDO1FBQ2xDLHNCQUFzQjtRQUN0Qix3RUFBd0U7UUFJL0Qsd0JBQW1CLEdBQXVDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBSXRGLHVCQUFrQixHQUFrQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUkzRSxnQkFBVyxHQUFXLFNBQVMsR0FBRyxlQUFlLEVBQUUsQ0FBQztRQUlwRCx1QkFBa0IsR0FBa0MsSUFBSSxDQUFDLE9BQU8sQ0FB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QWdCO3NCQUZ4QixLQUFLO3VCQUFDLDBCQUEwQjtnQkFJeEIsYUFBYTtzQkFBckIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBSUcsZUFBZTtzQkFEdkIsTUFBTTt1QkFBQyx5QkFBeUI7Z0JBTXlCLE9BQU87c0JBQWhFLFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXQtcmVuYW1lICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlLCBwcml6bUdlbmVyYXRlSWQgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBQcml6bUNvbmZpcm1Qb3B1cENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybS1wb3B1cC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIFBSSVpNX0NPTkZJUk1fUE9QVVBfT1BUSU9OUyxcbiAgUHJpem1Db25maXJtUG9wdXBCdXR0b24sXG4gIFByaXptQ29uZmlybVBvcHVwQ29udGV4dCxcbiAgUHJpem1Db25maXJtUG9wdXBPcHRpb25zLFxufSBmcm9tICcuL2NvbmZpcm0tcG9wdXAtb3B0aW9ucyc7XG5pbXBvcnQgeyBwcml6bURlZmF1bHRQcm9wLCBwcml6bVJlcXVpcmVkU2V0dGVyIH0gZnJvbSAnQHByaXptLXVpL2NvcmUnO1xuaW1wb3J0IHsgUG9seW1vcnBoQ29udGVudCB9IGZyb20gJy4uL3BvbHltb3JwaCc7XG5pbXBvcnQge1xuICBQcml6bUNvbmZpcm1EaWFsb2dCdXR0b24sXG4gIFByaXptQ29uZmlybURpYWxvZ1Jlc3VsdERlZmF1bHRUeXBlLFxufSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RpYWxvZ3MvY29uZmlybS1kaWFsb2cnO1xuaW1wb3J0IHsgUHJpem1BcHBlYXJhbmNlLCBQcml6bUFwcGVhcmFuY2VUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUFJJWk1fSElOVF9PUFRJT05TLCBQcml6bUhpbnRPcHRpb25zIH0gZnJvbSAnLi4vaGludC9oaW50LW9wdGlvbnMnO1xuaW1wb3J0IHsgUHJpem1IaW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vaGludC9oaW50LmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bUNvbmZpcm1Qb3B1cF06bm90KG5nLWNvbnRhaW5lciknLFxuICBwcm92aWRlcnM6IFtcbiAgICBQcml6bURlc3Ryb3lTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBSSVpNX0hJTlRfT1BUSU9OUyxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFBSSVpNX0NPTkZJUk1fUE9QVVBfT1BUSU9OUyksXG4gICAgfSxcbiAgXSxcbiAgZXhwb3J0QXM6ICdwcml6bUNvbmZpcm1Qb3B1cCcsXG59KVxuZXhwb3J0IGNsYXNzIFByaXptQ29uZmlybVBvcHVwRGlyZWN0aXZlPFxuICBUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbj4gZXh0ZW5kcyBQcml6bUhpbnREaXJlY3RpdmU8UHJpem1Db25maXJtUG9wdXBPcHRpb25zPiB7XG4gIC8vIEBJbnB1dCgncHJpem1Db25maXJtUG9wdXBNb2RlJylcbiAgLy8gQHByaXptRGVmYXVsdFByb3AoKVxuICAvLyBvdmVycmlkZSBwcml6bUhpbnRNb2RlOiBQcml6bUhpbnRPcHRpb25zWydtb2RlJ10gPSB0aGlzLm9wdGlvbnMubW9kZTtcblxuICBASW5wdXQoJ3ByaXptQXV0b1JlcG9zaXRpb24nKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG92ZXJyaWRlIHByaXptQXV0b1JlcG9zaXRpb246IFByaXptSGludE9wdGlvbnNbJ2F1dG9SZXBvc2l0aW9uJ10gPSB0aGlzLm9wdGlvbnMuYXV0b1JlcG9zaXRpb247XG5cbiAgQElucHV0KCdwcml6bUNvbmZpcm1Qb3B1cERpcmVjdGlvbicpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3ZlcnJpZGUgcHJpem1IaW50RGlyZWN0aW9uOiBQcml6bUhpbnRPcHRpb25zWydkaXJlY3Rpb24nXSA9IHRoaXMub3B0aW9ucy5kaXJlY3Rpb247XG5cbiAgQElucHV0KCdwcml6bUNvbmZpcm1Qb3B1cElkJylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUhpbnRJZDogc3RyaW5nID0gJ2hpbnRJZF8nICsgcHJpem1HZW5lcmF0ZUlkKCk7XG5cbiAgQElucHV0KCdwcml6bUNvbmZpcm1Qb3B1cFNob3dEZWxheScpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3ZlcnJpZGUgcHJpem1IaW50U2hvd0RlbGF5OiBQcml6bUhpbnRPcHRpb25zWydzaG93RGVsYXknXSA9IHRoaXMub3B0aW9ucy5zaG93RGVsYXk7XG5cbiAgQElucHV0KCdwcml6bUNvbmZpcm1Qb3B1cEhpZGVEZWxheScpXG4gIEBwcml6bURlZmF1bHRQcm9wKClcbiAgb3ZlcnJpZGUgcHJpem1IaW50SGlkZURlbGF5OiBQcml6bUhpbnRPcHRpb25zWydoaWRlRGVsYXknXSA9IHRoaXMub3B0aW9ucy5oaWRlRGVsYXk7XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwdWJsaWMgc2l6ZSA9IHRoaXMub3B0aW9ucy5zaXplO1xuXG4gIEBJbnB1dCgncHJpem1Db25maXJtUG9wdXBIb3N0JylcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBvdmVycmlkZSBwcml6bUhpbnRIb3N0OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIEBPdXRwdXQoKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIHB1YmxpYyBjb21wbGV0ZVdpdGggPSBuZXcgRXZlbnRFbWl0dGVyPFByaXptQ29uZmlybURpYWxvZ1Jlc3VsdERlZmF1bHRUeXBlIHwgdW5rbm93bj4oKTtcblxuICBASW5wdXQoJ3ByaXptQ29uZmlybVBvcHVwJylcbiAgQHByaXptUmVxdWlyZWRTZXR0ZXIoKVxuICBvdmVycmlkZSBzZXQgcHJpem1IaW50KHZhbHVlOiBQb2x5bW9ycGhDb250ZW50IHwgbnVsbCkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuY29udGVudCA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29udGVudCA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgQHByaXptRGVmYXVsdFByb3AoKVxuICBwcml6bUNvbmZpcm1Qb3B1cFRpdGxlID0gJyc7XG5cbiAgQElucHV0KCdwcml6bUNvbmZpcm1Qb3B1cENvbnRleHQnKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG92ZXJyaWRlIHByaXptSGludENvbnRleHQ6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG5cbiAgQElucHV0KCdwcml6bUNvbmZpcm1Qb3B1cENhblNob3cnKVxuICBAcHJpem1EZWZhdWx0UHJvcCgpXG4gIG92ZXJyaWRlIHByaXptSGludENhblNob3cgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIGNvbmZpcm1CdXR0b24/OiBQcml6bUNvbmZpcm1Qb3B1cEJ1dHRvbiB8IHN0cmluZztcbiAgQElucHV0KCkgc3VwcG9ydEJ1dHRvbj86IFByaXptQ29uZmlybVBvcHVwQnV0dG9uIHwgc3RyaW5nO1xuICBASW5wdXQoKSBjYW5jZWxCdXR0b24/OiBQcml6bUNvbmZpcm1Qb3B1cEJ1dHRvbiB8IHN0cmluZztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1yZW5hbWVcbiAgQE91dHB1dCgncHJpem1Db25maXJtUG9wdXBTaG93ZWQnKVxuICBvdmVycmlkZSBwcml6bUhpbnRTaG93ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIHJlYWRvbmx5IGNvbnRhaW5lckNvbXBvbmVudCA9IFByaXptQ29uZmlybVBvcHVwQ29udGFpbmVyQ29tcG9uZW50O1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgcmVhZG9ubHkgb25Ib3ZlckFjdGl2ZSA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQudGFyZ2V0J10pIHB1YmxpYyBvbkNsaWNrKHRhcmdldDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnNob3ckLm5leHQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0Q29udGV4dCgpOiBQcml6bUNvbmZpcm1Qb3B1cENvbnRleHQge1xuICAgIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICAvLyBtb2RlOiB0aGlzLnByaXptSGludE1vZGUsXG4gICAgICByZXBvc2l0aW9uOiB0aGlzLnByaXptQXV0b1JlcG9zaXRpb24sXG4gICAgICBkaXJlY3Rpb246IHRoaXMucHJpem1IaW50RGlyZWN0aW9uLFxuICAgICAgY29tcGxldGVXaXRoOiAodmFsdWU6IFByaXptQ29uZmlybVBvcHVwQnV0dG9uKSA9PiB7XG4gICAgICAgIHRoaXMuY29tcGxldGVXaXRoLm5leHQodmFsdWUpO1xuICAgICAgfSxcbiAgICAgIGlkOiB0aGlzLnByaXptSGludElkLFxuICAgICAgc2hvd0RlbGF5OiB0aGlzLnByaXptSGludFNob3dEZWxheSxcbiAgICAgIGhpZGVEZWxheTogdGhpcy5wcml6bUhpbnRIaWRlRGVsYXksXG4gICAgICB0aXRsZTogdGhpcy5wcml6bUNvbmZpcm1Qb3B1cFRpdGxlLFxuICAgICAgaG9zdDogdGhpcy5ob3N0LFxuICAgICAgY29uZmlybUJ1dHRvbjogdGhpcy5jb25maXJtQnV0dG9uLFxuICAgICAgc3VwcG9ydEJ1dHRvbjogdGhpcy5zdXBwb3J0QnV0dG9uLFxuICAgICAgY2FuY2VsQnV0dG9uOiB0aGlzLmNhbmNlbEJ1dHRvbixcbiAgICB9IGFzIFByaXptQ29uZmlybVBvcHVwQ29udGV4dDtcbiAgICB0aGlzLnNhZmVVcGRhdGVCdXR0b25zV2l0aERlZmF1bHRTdHlsZXMoY29udGV4dCk7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlQnV0dG9uKFxuICAgIG9wdGlvbnM6IFByaXptQ29uZmlybVBvcHVwQ29udGV4dCxcbiAgICBidXR0b246IFByaXptQ29uZmlybURpYWxvZ0J1dHRvbiB8IHN0cmluZyxcbiAgICBkZWZhdWx0VGV4dDogc3RyaW5nLFxuICAgIGRlZmF1bHRDb21wbGV0ZTogUHJpem1Db25maXJtRGlhbG9nUmVzdWx0RGVmYXVsdFR5cGUsXG4gICAgZGVmYXVsdEFwcGVhcmFuY2U/OiBQcml6bUFwcGVhcmFuY2UsXG4gICAgZGVmYXVsdEFwcGVhcmFuY2VUeXBlPzogUHJpem1BcHBlYXJhbmNlVHlwZVxuICApOiBQcml6bUNvbmZpcm1EaWFsb2dCdXR0b24ge1xuICAgIGNvbnN0IGJ1dHRvblRleHQgPSAodHlwZW9mIGJ1dHRvbiA9PT0gJ3N0cmluZycgPyBidXR0b24gOiBidXR0b24/LnRleHQpID8/IGRlZmF1bHRUZXh0O1xuICAgIGNvbnN0IGJ0biA9ICgodHlwZW9mIGJ1dHRvbiA9PT0gJ3N0cmluZycgPyB7fSA6IGJ1dHRvbikgPz8ge30pIGFzIFBhcnRpYWw8UHJpem1Db25maXJtRGlhbG9nQnV0dG9uPjtcblxuICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgIC4uLmJ0bixcbiAgICAgIHRleHQ6IGJ1dHRvblRleHQsXG4gICAgICBzaXplOiBidG4uc2l6ZSA/PyBvcHRpb25zLnNpemUsXG4gICAgICAvLyBUT0RPIHJlbW92ZSBhbnkgdHlwZVxuICAgICAgYWN0aW9uOiAoY3R4OiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBidG4uYWN0aW9uID09PSAnZnVuY3Rpb24nKSBidG4uYWN0aW9uKGN0eCBhcyBhbnkpO1xuICAgICAgICBvcHRpb25zLmNvbXBsZXRlV2l0aChkZWZhdWx0Q29tcGxldGUpO1xuICAgICAgfSxcbiAgICAgIGFwcGVhcmFuY2U6IGJ0bi5hcHBlYXJhbmNlID8/IGRlZmF1bHRBcHBlYXJhbmNlLFxuICAgICAgYXBwZWFyYW5jZVR5cGU6IGJ0bi5hcHBlYXJhbmNlVHlwZSA/PyBkZWZhdWx0QXBwZWFyYW5jZVR5cGUsXG4gICAgfTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHNhZmVVcGRhdGVCdXR0b25zV2l0aERlZmF1bHRTdHlsZXMob3B0aW9uczogUHJpem1Db25maXJtUG9wdXBDb250ZXh0KTogdm9pZCB7XG4gICAgY29uc3Qgc3VwcG9ydEJ1dHRvbiA9IHRoaXMuZ2VuZXJhdGVCdXR0b24oXG4gICAgICBvcHRpb25zLFxuICAgICAgb3B0aW9ucy5zdXBwb3J0QnV0dG9uIGFzIHN0cmluZyxcbiAgICAgICfQktGL0LnRgtC4INCx0LXQtyDRgdC+0YXRgNCw0L3QtdC90LjRjycsXG4gICAgICBQcml6bUNvbmZpcm1EaWFsb2dSZXN1bHREZWZhdWx0VHlwZS5zdXBwb3J0LFxuICAgICAgJ2RhbmdlcicsXG4gICAgICAnb3V0bGluZSdcbiAgICApO1xuXG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IHRoaXMuZ2VuZXJhdGVCdXR0b24oXG4gICAgICBvcHRpb25zLFxuICAgICAgb3B0aW9ucy5jb25maXJtQnV0dG9uIGFzIHN0cmluZyxcbiAgICAgICfQn9C+0LTRgtCy0LXRgNC00LjRgtGMJyxcbiAgICAgIFByaXptQ29uZmlybURpYWxvZ1Jlc3VsdERlZmF1bHRUeXBlLmNvbmZpcm1lZCxcbiAgICAgICdwcmltYXJ5J1xuICAgICk7XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB0aGlzLmdlbmVyYXRlQnV0dG9uKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIG9wdGlvbnMuY2FuY2VsQnV0dG9uIGFzIHN0cmluZyxcbiAgICAgICfQntGC0LzQtdC90LAnLFxuICAgICAgUHJpem1Db25maXJtRGlhbG9nUmVzdWx0RGVmYXVsdFR5cGUuY2FuY2VsLFxuICAgICAgJ3NlY29uZGFyeScsXG4gICAgICAnZ2hvc3QnXG4gICAgKTtcblxuICAgIG9wdGlvbnMuY29uZmlybUJ1dHRvbiA9IGNvbmZpcm1CdXR0b247XG4gICAgb3B0aW9ucy5jYW5jZWxCdXR0b24gPSBjYW5jZWxCdXR0b247XG4gICAgb3B0aW9ucy5zdXBwb3J0QnV0dG9uID0gc3VwcG9ydEJ1dHRvbjtcbiAgfVxufVxuIl19