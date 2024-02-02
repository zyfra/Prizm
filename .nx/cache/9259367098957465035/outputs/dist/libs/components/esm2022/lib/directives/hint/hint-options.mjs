import { InjectionToken } from '@angular/core';
import { PrizmOverlayOutsidePlacement } from '../../modules/overlay/models';
/** Default values for hint options */
export const PRIZM_HINT_DEFAULT_OPTIONS = {
    showDelay: 500,
    hideDelay: 200,
    theme: null,
    autoReposition: true,
    // mode: null,
    direction: PrizmOverlayOutsidePlacement.RIGHT,
};
export const PRIZM_HINT_OPTIONS = new InjectionToken('Default parameters for hint directive', {
    factory: () => PRIZM_HINT_DEFAULT_OPTIONS,
});
export const prizmHintOptionsProvider = (options) => ({
    provide: PRIZM_HINT_OPTIONS,
    useValue: { ...PRIZM_HINT_DEFAULT_OPTIONS, ...options },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9oaW50L2hpbnQtb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQXdCNUUsc0NBQXNDO0FBQ3RDLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFxQjtJQUMxRCxTQUFTLEVBQUUsR0FBRztJQUNkLFNBQVMsRUFBRSxHQUFHO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxjQUFjLEVBQUUsSUFBSTtJQUNwQixjQUFjO0lBQ2QsU0FBUyxFQUFFLDRCQUE0QixDQUFDLEtBQUs7Q0FDOUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUNsRCx1Q0FBdUMsRUFDdkM7SUFDRSxPQUFPLEVBQUUsR0FBcUIsRUFBRSxDQUFDLDBCQUEwQjtDQUM1RCxDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBMEQsQ0FDN0YsT0FBa0MsRUFDbEMsRUFBRSxDQUFDLENBQUM7SUFDSixPQUFPLEVBQUUsa0JBQWtCO0lBQzNCLFFBQVEsRUFBRSxFQUFFLEdBQUcsMEJBQTBCLEVBQUUsR0FBRyxPQUFPLEVBQUU7Q0FDeEQsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFZhbHVlUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXptT3ZlcmxheU91dHNpZGVQbGFjZW1lbnQgfSBmcm9tICcuLi8uLi9tb2R1bGVzL292ZXJsYXkvbW9kZWxzJztcbmltcG9ydCB7IFByaXptVGhlbWUgfSBmcm9tICdAcHJpem0tdWkvdGhlbWUnO1xuXG5leHBvcnQgdHlwZSBQcml6bUhpbnRNb2RlID0gJ2Vycm9yJyB8ICdkYXJrJyB8ICdsaWdodCcgfCBudWxsO1xuZXhwb3J0IGludGVyZmFjZSBQcml6bUhpbnRPcHRpb25zIHtcbiAgcmVhZG9ubHkgc2hvd0RlbGF5OiBudW1iZXI7XG4gIHJlYWRvbmx5IGhpZGVEZWxheTogbnVtYmVyO1xuICAvLyByZWFkb25seSBtb2RlOiBQcml6bUhpbnRNb2RlO1xuICByZWFkb25seSBhdXRvUmVwb3NpdGlvbjogYm9vbGVhbjtcbiAgcmVhZG9ubHkgZGlyZWN0aW9uOiBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50O1xuICByZWFkb25seSB0aGVtZTogUHJpem1UaGVtZSB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpem1IaW50Q29udGV4dCB7XG4gIC8vIG1vZGU6IFByaXptSGludE9wdGlvbnNbJ21vZGUnXTtcbiAgcmVwb3NpdGlvbjogYm9vbGVhbjtcbiAgZGlyZWN0aW9uOiBQcml6bUhpbnRPcHRpb25zWydkaXJlY3Rpb24nXTtcbiAgaWQ6IHN0cmluZztcbiAgc2hvd0RlbGF5OiBudW1iZXI7XG4gIGhpZGVEZWxheTogbnVtYmVyO1xuICBob3N0OiBIVE1MRWxlbWVudDtcbiAgY29udGV4dD86IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xufVxuXG4vKiogRGVmYXVsdCB2YWx1ZXMgZm9yIGhpbnQgb3B0aW9ucyAqL1xuZXhwb3J0IGNvbnN0IFBSSVpNX0hJTlRfREVGQVVMVF9PUFRJT05TOiBQcml6bUhpbnRPcHRpb25zID0ge1xuICBzaG93RGVsYXk6IDUwMCxcbiAgaGlkZURlbGF5OiAyMDAsXG4gIHRoZW1lOiBudWxsLFxuICBhdXRvUmVwb3NpdGlvbjogdHJ1ZSxcbiAgLy8gbW9kZTogbnVsbCxcbiAgZGlyZWN0aW9uOiBQcml6bU92ZXJsYXlPdXRzaWRlUGxhY2VtZW50LlJJR0hULFxufTtcblxuZXhwb3J0IGNvbnN0IFBSSVpNX0hJTlRfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQcml6bUhpbnRPcHRpb25zPihcbiAgJ0RlZmF1bHQgcGFyYW1ldGVycyBmb3IgaGludCBkaXJlY3RpdmUnLFxuICB7XG4gICAgZmFjdG9yeTogKCk6IFByaXptSGludE9wdGlvbnMgPT4gUFJJWk1fSElOVF9ERUZBVUxUX09QVElPTlMsXG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCBwcml6bUhpbnRPcHRpb25zUHJvdmlkZXI6IChvcHRpb25zOiBQYXJ0aWFsPFByaXptSGludE9wdGlvbnM+KSA9PiBWYWx1ZVByb3ZpZGVyID0gKFxuICBvcHRpb25zOiBQYXJ0aWFsPFByaXptSGludE9wdGlvbnM+XG4pID0+ICh7XG4gIHByb3ZpZGU6IFBSSVpNX0hJTlRfT1BUSU9OUyxcbiAgdXNlVmFsdWU6IHsgLi4uUFJJWk1fSElOVF9ERUZBVUxUX09QVElPTlMsIC4uLm9wdGlvbnMgfSxcbn0pO1xuIl19