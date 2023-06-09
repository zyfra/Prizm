import { Directive, ElementRef, Output } from '@angular/core';
import { PrizmInputZoneService } from './input-zone.service';
import { fromEvent, merge, Observable, switchMap } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mapTo, share, tap } from 'rxjs/operators';

@Directive({
  selector: `[prizmInputZone]`,
  providers: [PrizmInputZoneService],
  exportAs: 'prizmInputZone',
})
export class PrizmInputZoneDirective {
  @Output() readonly focused$: Observable<boolean> = this.inputZoneService.elements$.pipe(
    switchMap(elements => merge(...elements.map(element => element.focused$))),
    distinctUntilChanged(),
    share()
  );

  @Output() readonly blur$: Observable<boolean> = this.focused$.pipe(map(i => !i));

  get focused() {
    return !!this.inputZoneService.elements.find(i => i.focused);
  }

  get elements() {
    return this.inputZoneService.elements;
  }

  get inputs(): HTMLInputElement[] {
    return this.inputZoneService.elements.map(i => i.el.nativeElement);
  }

  constructor(private readonly inputZoneService: PrizmInputZoneService) {}

  public focus(idx = 0) {
    const selected = this.inputZoneService.elements[idx];
    if (selected) selected.focus();
    return this;
  }

  public selectionToStart(idx = 0) {
    const selected = this.inputZoneService.elements[idx];
    if (selected) selected.focus().selectionToStart();
    return this;
  }
}
