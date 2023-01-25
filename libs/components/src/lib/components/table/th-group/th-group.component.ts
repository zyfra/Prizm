import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  forwardRef,
  Inject,
  QueryList,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

import { PrizmHeadDirective } from '../directives/head.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PRIZM_TABLE_PROVIDER } from '../providers/table.provider';
import { PrizmThComponent } from '../th/th.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `tr[prizmThGroup]`,
  templateUrl: `./th-group.template.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PRIZM_TABLE_PROVIDER],
})
export class PrizmThGroupComponent<T extends Partial<Record<keyof T, any>>> implements AfterContentInit {
  @ContentChild(forwardRef(() => PrizmThComponent))
  readonly th!: PrizmThComponent<T>;

  @ContentChildren(forwardRef(() => PrizmHeadDirective))
  readonly heads: QueryList<PrizmHeadDirective<T>> = new QueryList<PrizmHeadDirective<T>>();

  heads$: Observable<PrizmHeadDirective<T>[]> | null = null;

  constructor(
    @Inject(forwardRef(() => PrizmTableDirective))
    readonly table: PrizmTableDirective<T>
  ) {}

  ngAfterContentInit(): void {
    this.heads$ = this.heads.changes.pipe(
      startWith(null),
      map(() => this.heads.toArray())
    );
  }
}
