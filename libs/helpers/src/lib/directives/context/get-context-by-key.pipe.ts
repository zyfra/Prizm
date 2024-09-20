import { inject, Pipe, PipeTransform } from '@angular/core';
import { PrizmContextService } from './context.service';

@Pipe({
  standalone: true,
  name: 'prizmGetContextByKey',
})
export class PrizmContextPipe implements PipeTransform {
  private readonly contextService = inject(PrizmContextService);
  public transform(key: any, type?: any): typeof type | null {
    return this.contextService.get(key) ?? null;
  }
}
