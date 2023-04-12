import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';

import { PrizmSplitterElement } from '../splitter-element.class';
import { PrizmSplitterService } from '../splitter.service';

@Component({
  selector: 'prizm-splitter-area',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./area.component.less'],

  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PrizmSplitterElement,
      useExisting: PrizmSplitterAreaComponent,
    },
  ],
})
export class PrizmSplitterAreaComponent {
  private static nextId = 0;

  @HostBinding() id = `prizm-splitter-area-${PrizmSplitterAreaComponent.nextId++}`;

  private _size: number | null;
  @Input() set size(value: number | null) {
    this._size = value;
    this.splitterService.areaChange$$.next(this);
  }
  get size(): number | null {
    return this._size;
  }

  @Input() minSize: number | null = 0;

  @HostBinding('style.flex-basis') currentSize: string;

  public hide(): void {
    this.elementRef.nativeElement.hidden = true;
  }

  public show(): void {
    this.elementRef.nativeElement.hidden = false;
  }

  get hidden(): boolean {
    return this.elementRef.nativeElement.hidden;
  }

  public setCurrentSize(guttersSize: number): void {
    if (this._size === null) {
      this.hide();
    } else {
      this.show();
      const currentSize = `calc(${this._size}% - ${guttersSize}px`;
      this.currentSize = currentSize;
    }
  }

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private cdr: ChangeDetectorRef,
    private splitterService: PrizmSplitterService
  ) {}
}
