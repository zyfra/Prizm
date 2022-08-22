import { Directive, ElementRef, Inject, Input, NgZone, OnDestroy, Optional, Output, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, skip, startWith } from 'rxjs/operators';
import { zuiPure } from '../../decorators';
import { zuiDefaultProp } from '../../decorators/default-prop';
import { zuiZoneOptimized } from '../../observables/zone-free';
import { ZUI_ACTIVE_ELEMENT } from '../../tokens/active-element';

@Directive({
    selector: `[zuiActiveZone]:not(ng-container), [zuiActiveZoneChange]:not(ng-container), [zuiActiveZoneParent]:not(ng-container)`,
    exportAs: `zuiActiveZone`,
})
export class ZuiActiveZoneDirective implements OnDestroy {
    private subActiveZones: readonly ZuiActiveZoneDirective[] = [];

    private zuiActiveZoneParent: ZuiActiveZoneDirective | null = null;

    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('zuiActiveZoneParent')
    @zuiDefaultProp()
    set zuiActiveZoneParentSetter(zone: ZuiActiveZoneDirective | null) {
        this.setZone(zone);
    }

    @Output()
    readonly zuiActiveZoneChange = this.active$.pipe(
        map(element => !!element && this.contains(element)),
        startWith(false),
        distinctUntilChanged(),
        skip(1),
        zuiZoneOptimized(this.ngZone),
    );

    constructor(
        @Inject(ZUI_ACTIVE_ELEMENT)
        private readonly active$: Observable<Element | null>,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(ElementRef) private readonly elementRef: ElementRef<Element>,
        @Optional()
        @SkipSelf()
        @Inject(ZuiActiveZoneDirective)
        private readonly directParentActiveZone: ZuiActiveZoneDirective | null,
    ) {
        if (this.directParentActiveZone) {
            this.directParentActiveZone.addSubActiveZone(this);
        }
    }

    ngOnDestroy(): void {
        if (this.directParentActiveZone) {
            this.directParentActiveZone.removeSubActiveZone(this);
        }

        if (this.zuiActiveZoneParent) {
            this.zuiActiveZoneParent.removeSubActiveZone(this);
        }
    }

    public contains(node: Node): boolean {
        return (
            this.elementRef.nativeElement.contains(node) ||
            this.subActiveZones.some(
                (item, index, array) =>
                    array.indexOf(item) === index && item.contains(node),
            )
        );
    }

    @zuiPure
    private setZone(zone: ZuiActiveZoneDirective | null): void {
        if (this.zuiActiveZoneParent) {
            this.zuiActiveZoneParent.removeSubActiveZone(this);
        }

        if (zone) {
            zone.addSubActiveZone(this);
        }

        this.zuiActiveZoneParent = zone;
    }

    private addSubActiveZone(activeZone: ZuiActiveZoneDirective): void {
        this.subActiveZones = [...this.subActiveZones, activeZone];
    }

    private removeSubActiveZone(activeZone: ZuiActiveZoneDirective): void {
        const index = this.subActiveZones.findIndex(item => item === activeZone);

        this.subActiveZones = [
            ...this.subActiveZones.slice(0, index),
            ...this.subActiveZones.slice(index + 1),
        ];
    }
}
