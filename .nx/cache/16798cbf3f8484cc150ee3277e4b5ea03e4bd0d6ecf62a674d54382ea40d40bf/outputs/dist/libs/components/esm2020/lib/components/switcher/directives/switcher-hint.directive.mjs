import { Directive, Input } from '@angular/core';
import { PrizmHintDirective } from '../../../directives';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import * as i0 from "@angular/core";
export class PrizmSwitcherHintDirective {
    constructor() {
        this.prizmHint_ = new PrizmHintDirective();
    }
    set prizmSwitcherHint(hintData) {
        if (hintData) {
            this.content = hintData.value;
            this.options = hintData.options;
        }
        this.updateHint();
    }
    ngOnInit() {
        this.prizmHint_.ngOnInit();
    }
    ngOnChanges() {
        this.prizmHint_.ngOnChanges();
    }
    ngOnDestroy() {
        this.prizmHint_.ngOnDestroy();
    }
    updateHint() {
        this.prizmHint_.prizmHint = this.content ?? '';
        if (this.options?.showDelay)
            this.prizmHint_.prizmHintShowDelay = this.options?.showDelay;
        if (this.options?.hideDelay)
            this.prizmHint_.prizmHintHideDelay = this.options?.hideDelay;
        if (this.options?.autoReposition)
            this.prizmHint_.prizmAutoReposition = this.options?.autoReposition;
        if (this.options?.direction)
            this.prizmHint_.prizmHintDirection = this.options?.direction;
        if (this.options?.theme)
            this.prizmHint_.prizmHintTheme = this.options?.theme;
        this.hintSyncChanges();
    }
    hintSyncChanges() {
        this.prizmHint_.ngOnChanges();
    }
}
PrizmSwitcherHintDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSwitcherHintDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmSwitcherHintDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmSwitcherHintDirective, isStandalone: true, selector: "[prizmSwitcherHint]", inputs: { prizmSwitcherHint: "prizmSwitcherHint" }, providers: [PrizmDestroyService], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmSwitcherHintDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmSwitcherHint]',
                    standalone: true,
                    providers: [PrizmDestroyService],
                }]
        }], propDecorators: { prizmSwitcherHint: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoZXItaGludC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3N3aXRjaGVyL2RpcmVjdGl2ZXMvc3dpdGNoZXItaGludC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBb0Isa0JBQWtCLEVBQW9CLE1BQU0scUJBQXFCLENBQUM7QUFFN0YsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBT3hELE1BQU0sT0FBTywwQkFBMEI7SUFMdkM7UUFNVyxlQUFVLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0tBd0NoRDtJQW5DQyxJQUNJLGlCQUFpQixDQUFDLFFBQXVDO1FBQzNELElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTO1lBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUMxRixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUztZQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDMUYsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLGNBQWM7WUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO1FBQ3JHLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTO1lBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUMxRixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSztZQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1FBQzlFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7O3VIQXhDVSwwQkFBMEI7MkdBQTFCLDBCQUEwQixzSEFGMUIsQ0FBQyxtQkFBbUIsQ0FBQzsyRkFFckIsMEJBQTBCO2tCQUx0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDakM7OEJBUUssaUJBQWlCO3NCQURwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9seW1vcnBoQ29udGVudCwgUHJpem1IaW50RGlyZWN0aXZlLCBQcml6bUhpbnRPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBwcml6bVN3aXRjaGVySGludCB9IGZyb20gJy4uL3N3aXRjaGVyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBQcml6bURlc3Ryb3lTZXJ2aWNlIH0gZnJvbSAnQHByaXptLXVpL2hlbHBlcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcHJpem1Td2l0Y2hlckhpbnRdJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbUHJpem1EZXN0cm95U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptU3dpdGNoZXJIaW50RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHJlYWRvbmx5IHByaXptSGludF8gPSBuZXcgUHJpem1IaW50RGlyZWN0aXZlKCk7XG5cbiAgY29udGVudDogUG9seW1vcnBoQ29udGVudCB8IG51bGw7XG4gIG9wdGlvbnM6IFBhcnRpYWw8UHJpem1IaW50T3B0aW9ucz4gfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgc2V0IHByaXptU3dpdGNoZXJIaW50KGhpbnREYXRhOiBwcml6bVN3aXRjaGVySGludCB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChoaW50RGF0YSkge1xuICAgICAgdGhpcy5jb250ZW50ID0gaGludERhdGEudmFsdWU7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBoaW50RGF0YS5vcHRpb25zO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlSGludCgpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJpem1IaW50Xy5uZ09uSW5pdCgpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMucHJpem1IaW50Xy5uZ09uQ2hhbmdlcygpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucHJpem1IaW50Xy5uZ09uRGVzdHJveSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVIaW50KCk6IHZvaWQge1xuICAgIHRoaXMucHJpem1IaW50Xy5wcml6bUhpbnQgPSB0aGlzLmNvbnRlbnQgPz8gJyc7XG4gICAgaWYgKHRoaXMub3B0aW9ucz8uc2hvd0RlbGF5KSB0aGlzLnByaXptSGludF8ucHJpem1IaW50U2hvd0RlbGF5ID0gdGhpcy5vcHRpb25zPy5zaG93RGVsYXk7XG4gICAgaWYgKHRoaXMub3B0aW9ucz8uaGlkZURlbGF5KSB0aGlzLnByaXptSGludF8ucHJpem1IaW50SGlkZURlbGF5ID0gdGhpcy5vcHRpb25zPy5oaWRlRGVsYXk7XG4gICAgaWYgKHRoaXMub3B0aW9ucz8uYXV0b1JlcG9zaXRpb24pIHRoaXMucHJpem1IaW50Xy5wcml6bUF1dG9SZXBvc2l0aW9uID0gdGhpcy5vcHRpb25zPy5hdXRvUmVwb3NpdGlvbjtcbiAgICBpZiAodGhpcy5vcHRpb25zPy5kaXJlY3Rpb24pIHRoaXMucHJpem1IaW50Xy5wcml6bUhpbnREaXJlY3Rpb24gPSB0aGlzLm9wdGlvbnM/LmRpcmVjdGlvbjtcbiAgICBpZiAodGhpcy5vcHRpb25zPy50aGVtZSkgdGhpcy5wcml6bUhpbnRfLnByaXptSGludFRoZW1lID0gdGhpcy5vcHRpb25zPy50aGVtZTtcbiAgICB0aGlzLmhpbnRTeW5jQ2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBoaW50U3luY0NoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wcml6bUhpbnRfLm5nT25DaGFuZ2VzKCk7XG4gIH1cbn1cbiJdfQ==