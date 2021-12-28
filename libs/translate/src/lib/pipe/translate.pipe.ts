import { ChangeDetectorRef, Injectable, OnDestroy, Optional, Pipe, PipeTransform } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { isDefined, equals } from '../util';
import { TranslateService } from '../core';

@Injectable()
@Pipe({
  name: 'zTranslate',
  pure: false, // required to update the value when the promise is resolved
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private value: string = '';
  private lastKey: string | undefined | null;
  private lastParams: any[] | undefined;
  private updateParams$ = new Subject<void>();

  constructor(private translate: TranslateService, @Optional() private cdr: ChangeDetectorRef) {}

  private updateValue(key: string, interpolateParams?: unknown): void {
    const onTranslation = (res: string): void => {
      this.value = res !== undefined ? res : key;
      this.lastKey = key;
      if (this.cdr) {
        this.cdr.markForCheck();
      }
    };
    this.translate
      .get(key, interpolateParams)
      .pipe(take(1), takeUntil(this.updateParams$))
      .subscribe(onTranslation);
  }

  public transform(query?: string | null, ...args: any[]): any {
    if (!query) {
      return query;
    }

    // if we ask another time for the same key, return the last value
    if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
      return this.value;
    }

    let interpolateParams: unknown;
    if (isDefined(args[0]) && args.length) {
      if (typeof args[0] === 'string' && args[0].length) {
        // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
        // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
        const validArgs: string = args[0]
          .replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g, '"$2":')
          .replace(/:(\s)?(')(.*?)(')/g, ':"$3"');
        try {
          interpolateParams = JSON.parse(validArgs);
        } catch (e) {
          throw new SyntaxError(
            `Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`
          );
        }
      } else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
        interpolateParams = args[0];
      }
    }

    // store the query, in case it changes
    this.lastKey = query;

    // store the params, in case they change
    this.lastParams = args;

    // set the value
    this.updateValue(query, interpolateParams);

    this.updateParams$.next();

    if (this.cdr) {
      // if not used as service
      // subscribe to onTranslationChange event, in case the translations change
      this.translate.onLang.pipe(takeUntil(this.updateParams$)).subscribe((_) => {
        if (this.lastKey) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams);
        }
      });
    }
    return this.value;
  }

  public ngOnDestroy(): void {
    this.updateParams$.next();
    this.updateParams$.complete();
  }
}
