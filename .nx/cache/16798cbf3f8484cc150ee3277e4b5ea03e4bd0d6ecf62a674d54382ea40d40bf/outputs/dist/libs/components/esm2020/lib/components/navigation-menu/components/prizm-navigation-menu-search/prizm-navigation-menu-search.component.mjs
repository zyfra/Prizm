import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { PrizmAbstractTestId } from '@prizm-ui/core';
import { PrizmButtonModule } from '../../../button';
import { PrizmInputCommonModule } from '../../../input/common/input-common.module';
import { PrizmInputTextComponent } from '../../../input';
import * as i0 from "@angular/core";
import * as i1 from "@prizm-ui/helpers";
import * as i2 from "@angular/forms";
import * as i3 from "../../../input/common/input-layout/input-layout.component";
import * as i4 from "../../../input/common/input-icon-button/input-icon-button.component";
export class PrizmNavigationMenuSearchComponent extends PrizmAbstractTestId {
    constructor(destroy$) {
        super();
        this.destroy$ = destroy$;
        this.searchChange = new EventEmitter();
        this.testId_ = 'ui_navigation_menu_search';
        this.searchFormControl = new UntypedFormControl('');
    }
    ngAfterViewInit() {
        this.searchFormControl.valueChanges
            .pipe(debounceTime(this.searchDebounce || 0), takeUntil(this.destroy$))
            .subscribe(this.searchChange);
        this.searchInput.nativeElement.focus();
    }
}
PrizmNavigationMenuSearchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmNavigationMenuSearchComponent, deps: [{ token: i1.PrizmDestroyService }], target: i0.ɵɵFactoryTarget.Component });
PrizmNavigationMenuSearchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PrizmNavigationMenuSearchComponent, isStandalone: true, selector: "prizm-navigation-menu-search", inputs: { searchDebounce: "searchDebounce", placeholder: "placeholder" }, outputs: { searchChange: "searchChange" }, providers: [PrizmDestroyService], viewQueries: [{ propertyName: "searchInput", first: true, predicate: ["searchInput"], descendants: true, read: ElementRef }], usesInheritance: true, ngImport: i0, template: "<div class=\"prizm-navigation-menu-search\">\n  <prizm-input-layout class=\"prizm-navigation-menu-search__input\" label=\"\" size=\"m\">\n    <input #searchInput [formControl]=\"searchFormControl\" [placeholder]=\"placeholder || ''\" prizmInput />\n    <ng-container prizm-input-right>\n      <button prizmInputIconButton=\"sort-zoom-in\"></button>\n    </ng-container>\n  </prizm-input-layout>\n</div>\n", styles: [".prizm-navigation-menu-search{display:flex;align-items:center;padding:0 16px 8px}.prizm-navigation-menu-search__input{width:100%}\n"], dependencies: [{ kind: "ngmodule", type: PrizmButtonModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: PrizmInputCommonModule }, { kind: "component", type: i3.PrizmInputLayoutComponent, selector: "prizm-input-layout", inputs: ["label", "size", "status", "outer", "clearButton", "border", "position", "forceClear"], outputs: ["clear"] }, { kind: "component", type: i4.PrizmInputIconButtonComponent, selector: "button[prizmInputIconButton]", inputs: ["size", "prizmInputIconButton", "interactive", "disabled", "type"] }, { kind: "component", type: PrizmInputTextComponent, selector: "input[prizmInput]:not([type=number]), textarea[prizmInput], input[prizmInputPassword]", inputs: ["disabled", "required", "value"], outputs: ["enter", "onClear", "valueChanged"], exportAs: ["prizmInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmNavigationMenuSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-navigation-menu-search', changeDetection: ChangeDetectionStrategy.OnPush, providers: [PrizmDestroyService], standalone: true, imports: [PrizmButtonModule, ReactiveFormsModule, PrizmInputCommonModule, PrizmInputTextComponent], template: "<div class=\"prizm-navigation-menu-search\">\n  <prizm-input-layout class=\"prizm-navigation-menu-search__input\" label=\"\" size=\"m\">\n    <input #searchInput [formControl]=\"searchFormControl\" [placeholder]=\"placeholder || ''\" prizmInput />\n    <ng-container prizm-input-right>\n      <button prizmInputIconButton=\"sort-zoom-in\"></button>\n    </ng-container>\n  </prizm-input-layout>\n</div>\n", styles: [".prizm-navigation-menu-search{display:flex;align-items:center;padding:0 16px 8px}.prizm-navigation-menu-search__input{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PrizmDestroyService }]; }, propDecorators: { searchInput: [{
                type: ViewChild,
                args: ['searchInput', {
                        read: ElementRef,
                    }]
            }], searchChange: [{
                type: Output
            }], searchDebounce: [{
                type: Input
            }], placeholder: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0tbmF2aWdhdGlvbi1tZW51LXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24tbWVudS9jb21wb25lbnRzL3ByaXptLW5hdmlnYXRpb24tbWVudS1zZWFyY2gvcHJpem0tbmF2aWdhdGlvbi1tZW51LXNlYXJjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL25hdmlnYXRpb24tbWVudS9jb21wb25lbnRzL3ByaXptLW5hdmlnYXRpb24tbWVudS1zZWFyY2gvcHJpem0tbmF2aWdhdGlvbi1tZW51LXNlYXJjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQVd6RCxNQUFNLE9BQU8sa0NBQW1DLFNBQVEsbUJBQW1CO0lBZXpFLFlBQW9CLFFBQTZCO1FBQy9DLEtBQUssRUFBRSxDQUFDO1FBRFUsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFUdkMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBS2xDLFlBQU8sR0FBRywyQkFBMkIsQ0FBQztRQUVqRCxzQkFBaUIsR0FBdUIsSUFBSSxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUkxRSxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZO2FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3RFLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7K0hBekJVLGtDQUFrQzttSEFBbEMsa0NBQWtDLGdNQUpsQyxDQUFDLG1CQUFtQixDQUFDLGlIQU14QixVQUFVLG9EQzdCcEIsc1pBUUEsNExEaUJZLGlCQUFpQiw4QkFBRSxtQkFBbUIseWtCQUFFLHNCQUFzQixxYUFBRSx1QkFBdUI7MkZBRXRGLGtDQUFrQztrQkFUOUMsU0FBUzsrQkFDRSw4QkFBOEIsbUJBR3ZCLHVCQUF1QixDQUFDLE1BQU0sYUFDcEMsQ0FBQyxtQkFBbUIsQ0FBQyxjQUNwQixJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsQ0FBQzswR0FNM0YsV0FBVztzQkFIakIsU0FBUzt1QkFBQyxhQUFhLEVBQUU7d0JBQ3hCLElBQUksRUFBRSxVQUFVO3FCQUNqQjtnQkFHUyxZQUFZO3NCQUFyQixNQUFNO2dCQUVFLGNBQWM7c0JBQXRCLEtBQUs7Z0JBRUcsV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIFVudHlwZWRGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptRGVzdHJveVNlcnZpY2UgfSBmcm9tICdAcHJpem0tdWkvaGVscGVycyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByaXptQWJzdHJhY3RUZXN0SWQgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBQcml6bUJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2J1dHRvbic7XG5pbXBvcnQgeyBQcml6bUlucHV0Q29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vaW5wdXQvY29tbW9uL2lucHV0LWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgUHJpem1JbnB1dFRleHRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9pbnB1dCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ByaXptLW5hdmlnYXRpb24tbWVudS1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJpem0tbmF2aWdhdGlvbi1tZW51LXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ByaXptLW5hdmlnYXRpb24tbWVudS1zZWFyY2guY29tcG9uZW50Lmxlc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2VdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbUHJpem1CdXR0b25Nb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFByaXptSW5wdXRDb21tb25Nb2R1bGUsIFByaXptSW5wdXRUZXh0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1OYXZpZ2F0aW9uTWVudVNlYXJjaENvbXBvbmVudCBleHRlbmRzIFByaXptQWJzdHJhY3RUZXN0SWQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnc2VhcmNoSW5wdXQnLCB7XG4gICAgcmVhZDogRWxlbWVudFJlZixcbiAgfSlcbiAgcHVibGljIHNlYXJjaElucHV0ITogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBAT3V0cHV0KCkgc2VhcmNoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQElucHV0KCkgc2VhcmNoRGVib3VuY2UhOiBudW1iZXI7XG5cbiAgQElucHV0KCkgcGxhY2Vob2xkZXIhOiBzdHJpbmc7XG4gIG92ZXJyaWRlIHJlYWRvbmx5IHRlc3RJZF8gPSAndWlfbmF2aWdhdGlvbl9tZW51X3NlYXJjaCc7XG5cbiAgcHVibGljIHNlYXJjaEZvcm1Db250cm9sOiBVbnR5cGVkRm9ybUNvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCcnKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlc3Ryb3kkOiBQcml6bURlc3Ryb3lTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEZvcm1Db250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMuc2VhcmNoRGVib3VuY2UgfHwgMCksIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5zZWFyY2hDaGFuZ2UpO1xuXG4gICAgdGhpcy5zZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJwcml6bS1uYXZpZ2F0aW9uLW1lbnUtc2VhcmNoXCI+XG4gIDxwcml6bS1pbnB1dC1sYXlvdXQgY2xhc3M9XCJwcml6bS1uYXZpZ2F0aW9uLW1lbnUtc2VhcmNoX19pbnB1dFwiIGxhYmVsPVwiXCIgc2l6ZT1cIm1cIj5cbiAgICA8aW5wdXQgI3NlYXJjaElucHV0IFtmb3JtQ29udHJvbF09XCJzZWFyY2hGb3JtQ29udHJvbFwiIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlciB8fCAnJ1wiIHByaXptSW5wdXQgLz5cbiAgICA8bmctY29udGFpbmVyIHByaXptLWlucHV0LXJpZ2h0PlxuICAgICAgPGJ1dHRvbiBwcml6bUlucHV0SWNvbkJ1dHRvbj1cInNvcnQtem9vbS1pblwiPjwvYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3ByaXptLWlucHV0LWxheW91dD5cbjwvZGl2PlxuIl19