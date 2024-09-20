import { inject, Pipe, PipeTransform } from '@angular/core';
import { PrizmContextService } from './context.service';
import { isObservable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  standalone: true,
  name: 'prizmGetContextByKeys',
})
export class PrizmContextGetByKysPipe implements PipeTransform {
  private readonly contextService = inject(PrizmContextService);
  public transform(keys?: null | Observable<any[]>, type?: any): Observable<(typeof type)[]>;
  public transform(keys?: null | any[], type?: any): (typeof type)[];
  public transform(keys?: null | any[] | Observable<any[]>, type?: any): any {
    if (isObservable(keys)) {
      return keys.pipe(map(i => this.getByKey(i)));
    }

    return this.getByKey(keys);
  }

  private getByKey(keys?: null | any[], type?: any): (typeof type)[] {
    return keys?.map(key => this.contextService.get(key)) ?? [];
  }
}
