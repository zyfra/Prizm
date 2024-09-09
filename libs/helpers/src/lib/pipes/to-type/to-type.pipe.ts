import { Pipe, PipeTransform } from '@angular/core';

/**
 * Этот пайп можно использовать для приведения типов переменных контекста ng-template,
 * чтобы ввести хотя бы какую-то проверку типа шаблона для таких ссылок.
 *
 * @button <ng-template let-someArg><span *ngIf="someArg | prizmToType : typeName"></span></ng-template>
 */
@Pipe({ name: 'prizmToType', standalone: true })
export class PrizmToTypePipe implements PipeTransform {
  public transform<T>(value: unknown, _typeSource: T): T {
    return value as T;
  }
}
