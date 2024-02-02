import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PRIZM_ICONS_16_LOADER, PRIZM_ICONS_LOADER } from './token';
import { PrizmIconsComponent } from './prizm-icons.component';
import * as i0 from "@angular/core";
/**
 * Component to display 16px SVG icons.
 * It provides a specific icon loader for 16px icons and extends the functionality of PrizmIconsComponent.
 */
export class PrizmIcons16Component extends PrizmIconsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PrizmIcons16Component, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: PrizmIcons16Component, isStandalone: true, selector: "prizm-icons-16", providers: [
            {
                // Specifies that this component uses a different icon loader for 16px icons
                provide: PRIZM_ICONS_LOADER,
                useExisting: PRIZM_ICONS_16_LOADER,
            },
        ], usesInheritance: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, styles: [":host{display:inline-flex;height:auto}:host ::ng-deep>svg{width:100%}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: PrizmIcons16Component, decorators: [{
            type: Component,
            args: [{ selector: 'prizm-icons-16', template: ` <ng-content></ng-content> `, standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            // Specifies that this component uses a different icon loader for 16px icons
                            provide: PRIZM_ICONS_LOADER,
                            useExisting: PRIZM_ICONS_16_LOADER,
                        },
                    ], styles: [":host{display:inline-flex;height:auto}:host ::ng-deep>svg{width:100%}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0taWNvbnMtMTYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9pY29ucy9iYXNlL3NyYy9saWIvaWNvbnMvcHJpem0taWNvbnMtMTYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUU5RDs7O0dBR0c7QUFlSCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsbUJBQW1COzhHQUFqRCxxQkFBcUI7a0dBQXJCLHFCQUFxQiw2REFSckI7WUFDVDtnQkFDRSw0RUFBNEU7Z0JBQzVFLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFdBQVcsRUFBRSxxQkFBcUI7YUFDbkM7U0FDRixpREFWUyw2QkFBNkI7OzJGQVk1QixxQkFBcUI7a0JBZGpDLFNBQVM7K0JBQ0UsZ0JBQWdCLFlBQ2hCLDZCQUE2QixjQUUzQixJQUFJLG1CQUNDLHVCQUF1QixDQUFDLE1BQU0sYUFDcEM7d0JBQ1Q7NEJBQ0UsNEVBQTRFOzRCQUM1RSxPQUFPLEVBQUUsa0JBQWtCOzRCQUMzQixXQUFXLEVBQUUscUJBQXFCO3lCQUNuQztxQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBSSVpNX0lDT05TXzE2X0xPQURFUiwgUFJJWk1fSUNPTlNfTE9BREVSIH0gZnJvbSAnLi90b2tlbic7XG5pbXBvcnQgeyBQcml6bUljb25zQ29tcG9uZW50IH0gZnJvbSAnLi9wcml6bS1pY29ucy5jb21wb25lbnQnO1xuXG4vKipcbiAqIENvbXBvbmVudCB0byBkaXNwbGF5IDE2cHggU1ZHIGljb25zLlxuICogSXQgcHJvdmlkZXMgYSBzcGVjaWZpYyBpY29uIGxvYWRlciBmb3IgMTZweCBpY29ucyBhbmQgZXh0ZW5kcyB0aGUgZnVuY3Rpb25hbGl0eSBvZiBQcml6bUljb25zQ29tcG9uZW50LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcml6bS1pY29ucy0xNicsIC8vIERlZmluZXMgdGhlIGN1c3RvbSBlbGVtZW50IHRhZyB0byB1c2UgdGhpcyBjb21wb25lbnRcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLCAvLyBBbGxvd3MgZm9yIGNvbnRlbnQgcHJvamVjdGlvbiB3aXRoaW4gdGhlIGNvbXBvbmVudFxuICBzdHlsZVVybHM6IFsnLi9wcml6bS1pY29ucy5jb21wb25lbnQubGVzcyddLCAvLyBSZXVzZXMgdGhlIHNhbWUgc3R5bGVzIGFzIHRoZSBiYXNlIGljb24gY29tcG9uZW50XG4gIHN0YW5kYWxvbmU6IHRydWUsIC8vIE1hcmtzIHRoZSBjb21wb25lbnQgYXMgc3RhbmRhbG9uZSwgbWVhbmluZyBpdCBkb2Vzbid0IG5lZWQgdG8gYmUgZGVjbGFyZWQgaW4gYW4gTmdNb2R1bGVcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIC8vIE9wdGltaXplcyBjaGFuZ2UgZGV0ZWN0aW9uIGZvciBwZXJmb3JtYW5jZVxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICAvLyBTcGVjaWZpZXMgdGhhdCB0aGlzIGNvbXBvbmVudCB1c2VzIGEgZGlmZmVyZW50IGljb24gbG9hZGVyIGZvciAxNnB4IGljb25zXG4gICAgICBwcm92aWRlOiBQUklaTV9JQ09OU19MT0FERVIsXG4gICAgICB1c2VFeGlzdGluZzogUFJJWk1fSUNPTlNfMTZfTE9BREVSLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXptSWNvbnMxNkNvbXBvbmVudCBleHRlbmRzIFByaXptSWNvbnNDb21wb25lbnQge1xuICAvLyBObyBhZGRpdGlvbmFsIGxvZ2ljIHJlcXVpcmVkIGhlcmUgYXMgb2Ygbm93LlxuICAvLyBGdXR1cmUgY3VzdG9taXphdGlvbnMgZm9yIDE2cHggaWNvbnMgY2FuIGJlIGltcGxlbWVudGVkIGluIHRoaXMgY2xhc3MuXG59XG4iXX0=