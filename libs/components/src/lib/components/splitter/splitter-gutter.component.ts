import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';

import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'prizm-splitter-gutter',
  template: `<div class="slider" #slider></div>`,
  styleUrls: [`./splitter-gutter.component.less`],
  providers: [PrizmDestroyService],
})
export class PrizmSplitterGutterComponent implements AfterViewInit {
  @Input() @HostBinding('style.flex-basis.px') size!: number;
  @Input() @HostBinding('style.order') order!: number;
  @Input() areaBeforeIndex!: number;
  @Input() areaAfterIndex!: number;

  @Output() gutterMove = new EventEmitter<{
    gutter: PrizmSplitterGutterComponent;
    position: { left: number; top: number };
  }>();

  @Output() gutterPointerDown = new EventEmitter<void>();
  @Output() gutterPointerUp = new EventEmitter<void>();

  @ViewChild('slider', { static: true }) slider: ElementRef<HTMLDivElement>;

  positionRelativeToContainer = 0;

  constructor(private el: ElementRef<HTMLElement>, private destroy$: PrizmDestroyService) {}

  public ngAfterViewInit(): void {
    const sliderEl = this.slider.nativeElement;
    fromEvent<PointerEvent>(sliderEl, 'pointerdown')
      .pipe(
        switchMap(event => {
          this.gutterPointerDown.next();
          sliderEl.setPointerCapture(event.pointerId);

          const bcr = this.getBoundingClientRect();
          const shift = {
            x: event.clientX - bcr.left,
            y: event.clientY - bcr.top,
          };

          return fromEvent<PointerEvent>(sliderEl, 'pointermove').pipe(
            tap(event => {
              const left = event.clientX - shift.x;
              const top = event.clientY - shift.y;

              this.gutterMove.next({ gutter: this, position: { left, top } });
            }),
            takeUntil(
              fromEvent<PointerEvent>(document, 'pointerup').pipe(tap(() => this.gutterPointerUp.next()))
            )
          );
        })
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  public getBoundingClientRect(): DOMRect {
    return this.el.nativeElement.getBoundingClientRect();
  }
}

