import { Pipe, PipeTransform } from "@angular/core";

/**
 * Этот пайп можно использовать для приведения типов переменных контекста ng-template,
 * чтобы ввести хотя бы какую-то проверку типа шаблона для таких ссылок.
 *
 * @button <ng-template let-someArg><span *ngIf="someArg | pzmToType : typeName"></span></ng-template>
 */
@Pipe({ name: 'pzmToType' })
export class ToTypePipe implements PipeTransform {
  public transform<T>(value: unknown, _typeSource: T): T {
    return value as T;
  }
}
