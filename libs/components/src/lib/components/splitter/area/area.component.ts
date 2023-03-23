import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmSplitterElement } from '../splitter-element.class';
import { PrizmSplitterComponent } from '../splitter.component';

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
export class PrizmSplitterAreaComponent implements OnInit {
  private static nextId = 0;

  @HostBinding() id = `prizm-splitter-area-${PrizmSplitterAreaComponent.nextId++}`;

  private _size: number | null;
  @Input() set size(value: number | null) {
    this._size = value;
    this.setCurrentSize();
  }
  get size(): number | null {
    return this._size;
  }

  @Input() minSize: number | null = 0;

  @HostBinding('style.flex-basis') currentSize: string;

  ngOnInit(): void {}

  public hide(): void {
    this.elementRef.nativeElement.hidden = true;
  }

  public show(): void {
    this.elementRef.nativeElement.hidden = false;
  }

  get hidden(): boolean {
    return this.elementRef.nativeElement.hidden;
  }

  public setCurrentSize(): void {
    if (this._size === null) {
      this.hide();
    } else {
      this.show();
      const currentSize = this._size + '%';
      this.currentSize = currentSize;
    }
  }

  constructor(private elementRef: ElementRef<HTMLElement>, private cdr: ChangeDetectorRef) {}

  public detectChanges(): void {
    this.cdr.detectChanges();
  }
}
