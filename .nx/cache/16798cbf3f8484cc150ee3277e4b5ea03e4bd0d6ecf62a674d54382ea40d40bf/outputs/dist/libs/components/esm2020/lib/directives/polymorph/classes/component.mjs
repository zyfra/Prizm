import { Injector } from '@angular/core';
import { POLYMORPH_CONTEXT } from '../tokens/context';
/**
 * Wrapper class for a component that will be used as content for {@link PolymorphOutletDirective}
 *
 * @param component — an Angular component to be dynamically created
 * @param injector — optional {@link Injector} for lazy loaded module case
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export class PolymorphComponent {
    constructor(component, injector = null) {
        this.component = component;
        this.injector = injector;
    }
    createInjector(injector, context) {
        return Injector.create({
            parent: this.injector || injector,
            providers: [
                {
                    provide: POLYMORPH_CONTEXT,
                    useValue: context,
                },
            ],
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvZGlyZWN0aXZlcy9wb2x5bW9ycGgvY2xhc3Nlcy9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV0RDs7Ozs7R0FLRztBQUNILHdEQUF3RDtBQUN4RCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQXFCLFNBQWtCLEVBQW1CLFdBQTRCLElBQUk7UUFBckUsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUFtQixhQUFRLEdBQVIsUUFBUSxDQUF3QjtJQUFHLENBQUM7SUFFdkYsY0FBYyxDQUFDLFFBQWtCLEVBQUUsT0FBVTtRQUNsRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUTtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUE9MWU1PUlBIX0NPTlRFWFQgfSBmcm9tICcuLi90b2tlbnMvY29udGV4dCc7XG5cbi8qKlxuICogV3JhcHBlciBjbGFzcyBmb3IgYSBjb21wb25lbnQgdGhhdCB3aWxsIGJlIHVzZWQgYXMgY29udGVudCBmb3Ige0BsaW5rIFBvbHltb3JwaE91dGxldERpcmVjdGl2ZX1cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50IOKAlCBhbiBBbmd1bGFyIGNvbXBvbmVudCB0byBiZSBkeW5hbWljYWxseSBjcmVhdGVkXG4gKiBAcGFyYW0gaW5qZWN0b3Ig4oCUIG9wdGlvbmFsIHtAbGluayBJbmplY3Rvcn0gZm9yIGxhenkgbG9hZGVkIG1vZHVsZSBjYXNlXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgY2xhc3MgUG9seW1vcnBoQ29tcG9uZW50PFQgZXh0ZW5kcyBvYmplY3QsIEMgPSBhbnk+IHtcbiAgY29uc3RydWN0b3IocmVhZG9ubHkgY29tcG9uZW50OiBUeXBlPFQ+LCBwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3RvciB8IG51bGwgPSBudWxsKSB7fVxuXG4gIHB1YmxpYyBjcmVhdGVJbmplY3RvcihpbmplY3RvcjogSW5qZWN0b3IsIGNvbnRleHQ6IEMpOiBJbmplY3RvciB7XG4gICAgcmV0dXJuIEluamVjdG9yLmNyZWF0ZSh7XG4gICAgICBwYXJlbnQ6IHRoaXMuaW5qZWN0b3IgfHwgaW5qZWN0b3IsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFBPTFlNT1JQSF9DT05URVhULFxuICAgICAgICAgIHVzZVZhbHVlOiBjb250ZXh0LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxufVxuIl19