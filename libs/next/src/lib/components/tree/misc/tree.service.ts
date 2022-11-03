import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, mapTo, startWith, switchMap, tap } from 'rxjs/operators';

import { PrizmTreeLoader } from './tree.interfaces';
import { PZM_TREE_LOADER, PZM_TREE_LOADING, PZM_TREE_START } from './tree.tokens';

// @dynamic
@Injectable()
export class PrizmTreeService<T> {
    private readonly map = new Map<T, readonly T[]>([[this.loading, []]]);

    private readonly load$ = new Subject<T>();

    public readonly data$ = this.load$.pipe(
        switchMap(item =>
            this.loader.loadChildren(item).pipe(
                tap(children => this.map.set(item, children)),
                map(children => children.filter(item => !this.loader.hasChildren(item))),
                tap(children => children.forEach(child => this.map.set(child, []))),
            ),
        ),
        startWith(null),
        mapTo(this.start),
    );

    constructor(
        @Inject(PZM_TREE_LOADING) private readonly loading: T,
        @Inject(PZM_TREE_START) private readonly start: T,
        @Inject(PZM_TREE_LOADER) private readonly loader: PrizmTreeLoader<T>,
    ) {}

    public getChildren(item: T): readonly T[] {
        return this.map.get(item) ?? [this.loading];
    }

    public loadChildren(item: T): void {
        if (this.map.get(item)) {
            return;
        }

        this.map.set(item, [this.loading]);
        this.load$.next(item);
    }
}
