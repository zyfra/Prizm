import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { PrizmMultiSelectItemService } from './multi-select-item.service';

@Directive({
  selector: '[prizmMultiSelectItem]:not(ng-template)',
})
export class PrizmMultiSelectItemDirective<T = any> implements OnInit, OnDestroy {
  @Input() value!: T;
  @Input() toggleOnClick = true;

  readonly selected$ = this.multiSelectItemService.comp?.selectedItems$?.pipe(
    map(() => this.multiSelectItemService.comp?.isSelected(this.value)),
    distinctUntilChanged()
  );

  constructor(protected readonly multiSelectItemService: PrizmMultiSelectItemService<T>) {}

  public ngOnInit(): void {
    this.multiSelectItemService.items$$.next([...this.multiSelectItemService.items$$.value, this]);
  }

  public ngOnDestroy(): void {
    this.multiSelectItemService.items$$.next(
      this.multiSelectItemService.items$$.value.filter(i => i !== this)
    );
  }

  @HostBinding('class.selected') get isSelected() {
    return this.multiSelectItemService.comp?.isSelected(this.value);
  }

  @HostListener('click') private onClicked() {
    if (!this.toggleOnClick) return;
    this.multiSelectItemService.toggle(this.value);
  }
}
