import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
} from '@angular/core';
import { PrizmInputZoneService } from './input-zone.service';
import { map, mapTo, share, switchMap, takeUntil, tap } from 'rxjs/operators';
import { fromEvent, merge, timer, zip } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { NgControl } from '@angular/forms';
import { PrizmDestroyService } from '@prizm-ui/helpers';

@Directive({
  selector: `input[prizmInputInZone]`,
  exportAs: 'prizmInputInZone',
  providers: [PrizmDestroyService],
})
export class PrizmInputInZoneDirective implements OnInit, OnDestroy {
  previousSelectionStart: number;
  @Input() idx?: number;
  @Input() maxSize: number;
  @Output() focused$ = merge(
    fromEvent(this.el.nativeElement, 'focus').pipe(mapTo(true)),
    fromEvent(this.el.nativeElement, 'blur').pipe(mapTo(false))
  ).pipe(share());

  get focused() {
    return this.document.activeElement === this.el.nativeElement;
  }

  @Output() blured$ = this.focused$.pipe(map(i => !i));

  /**
   * save previous selection index for case when clicking inside in input or focused
   * for correct working moving between in inputs in zone
   * */
  @HostListener('click')
  @HostListener('focus')
  savePreviousPosition() {
    timer(0)
      .pipe(
        tap(() => {
          this.previousSelectionStart = this.el.nativeElement.selectionStart;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  @HostListener('keyup', ['$event']) keyUpEvent(event: KeyboardEvent) {
    const unsupportedKeyCharacters = [
      'Shift',
      'Escape',
      'ArrowUp',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'Enter',
      'CapsLock',
      'Alt',
      'Control',
      'Meta',
    ];
    const { selectionStart } = this.el.nativeElement;
    const idx = this.inputZoneService.getIdx(this);

    if (
      (event.key === 'ArrowLeft' || event.key === 'Backspace') &&
      selectionStart === 0 &&
      this.previousSelectionStart === 0 &&
      idx > 0
    ) {
      this.inputZoneService
        .getByIdx(idx - 1)
        ?.focus()
        .selectionToEnd();
    } else if (selectionStart === this.maxSize && this.previousSelectionStart === this.maxSize) {
      if (event.key === 'ArrowRight') {
        this.inputZoneService
          .getByIdx(idx + 1)
          ?.focus()
          .selectionToStart();
      } else if (!unsupportedKeyCharacters.includes(event.key)) {
        this.inputZoneService
          .getByIdx(idx + 1)
          ?.focus()
          .selectionTo(0, 1);
      }
    }
    this.previousSelectionStart = selectionStart;
  }

  constructor(
    public readonly el: ElementRef<HTMLInputElement>,
    @Inject(DOCUMENT) private readonly document: Document,
    @Optional() private readonly ngControl: NgControl,
    private readonly inputZoneService: PrizmInputZoneService,
    private readonly destroy$: PrizmDestroyService
  ) {}

  ngOnDestroy(): void {
    this.inputZoneService.delete(this.idx);
  }

  ngOnInit(): void {
    if (this.idx) {
      this.inputZoneService.set(this.idx, this);
    } else {
      this.idx = this.inputZoneService.add(this);
    }
  }

  public focus() {
    this.el.nativeElement.focus();
    return this;
  }

  public selectionToStart() {
    return this.selectionTo(0);
  }

  public selectionTo(start: number, end?: number) {
    this.el.nativeElement.selectionStart = start;
    this.el.nativeElement.selectionEnd = end ?? start;
    return this;
  }

  public selectionToEnd() {
    return this.selectionTo(this.maxSize);
  }
}
