import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ZyfraSplitterTemplateDirective } from './zyfra-splitter.directives';

@Injectable()
export class ZyfraSplitterTemplatesService {
  private readonly listSet = new Set<ZyfraSplitterTemplateDirective>();
  private readonly listSource$ = new ReplaySubject<ZyfraSplitterTemplateDirective[]>(1);
  public readonly list$ = this.listSource$.asObservable();

  public add(template: ZyfraSplitterTemplateDirective): void {
    this.listSet.add(template);
    this.emit();
  }

  public remove(template: ZyfraSplitterTemplateDirective): void {
    this.listSet.delete(template);
    this.emit();
  }

  private emit(): void {
    this.listSource$.next([...this.listSet]);
  }
}
