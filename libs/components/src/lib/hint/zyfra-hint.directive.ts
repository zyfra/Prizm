import {
  Directive,
  Inject,
  ComponentFactoryResolver,
  Input,
  ElementRef,
  ViewContainerRef,
  ComponentRef,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  TemplateRef,
  HostListener,
  Renderer2,
} from '@angular/core';
import { ZyfraHintComponent } from './zyfra-hint.component';
import { ZyfraHintOverlayManager } from './zyfra-hint-overlay-manager.service';

@Directive({
  selector: '[zyfraHint]',
  exportAs: 'zyfraHint',
})
export class ZyfraHintDirective implements OnDestroy, OnChanges, AfterViewInit {
  constructor(
    private elementRef: ElementRef<HTMLElement>,
    @Inject(ComponentFactoryResolver)
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private zyfraHintOverlayManager: ZyfraHintOverlayManager,
    private renderer: Renderer2
  ) {}

  @Input() zyfraHint: string | TemplateRef<any> = null;
  @Input() zyfraHintContext: Record<string, unknown>;
  @Input() zyfraHintDelay = 400;
  @Input() hintClass: string | string[] = '';
  @Input() zyfraShowHint = false;
  @Input() position: 'left' | 'right' | 'above' | 'below' = 'right';
  @Input() hasOverflowText: HTMLElement;

  private hintStyle: string;
  private mutationObserver: MutationObserver;
  private componentFactory = this.resolver.resolveComponentFactory(ZyfraHintComponent);
  private hintCmpRef: ComponentRef<ZyfraHintComponent> = null;
  private hintElement: HTMLElement = null;
  private coordinates = { left: 0, top: 0 };
  private hintTimerId = null;

  @HostListener('click', ['$event']) clickEvent(event: MouseEvent): void {
    this.hide();
  }

  @HostListener('mouseenter', ['$event']) mouseenter(event: MouseEvent): void {
    if (!this.zyfraShowHint) {
      this.show();
    }
  }

  @HostListener('mouseleave', ['$event']) mouseleave(event: MouseEvent): void {
    if (!this.hintCmpRef) {
      clearTimeout(this.hintTimerId);
      this.zyfraShowHint = false;
    } else {
      this.hide();
    }
  }

  ngAfterViewInit(): void {
    if (this.zyfraShowHint) {
      this.show();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.hintCmpRef) {
      let wereChanges = false;

      if (changes.position) {
        const change = changes.position;

        if (!change.firstChange) {
          this._setHintClasses();
          wereChanges = true;
        }
      }

      if (changes.zyfraHint) {
        const change = changes.zyfraHint;
        if (!change.firstChange) {
          this.hintCmpRef.instance.options.content = change.currentValue;
          wereChanges = true;
        }
      }

      if (wereChanges) {
        this.hintCmpRef.changeDetectorRef.detectChanges();
        this._setOptions();
      }
    }
  }

  private _setHintClasses(): void {
    this.hintCmpRef.instance.hostClasses = `zyfra_hint ${this.position} ${this.hintClass} ${this.hintStyle}`;
  }

  ngOnDestroy(): void {
    if (this.hintCmpRef) {
      this.hintCmpRef.destroy();
      this.hintCmpRef = null;
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    this.hide();
  }

  public toggle(): void {
    if (this.zyfraShowHint) {
      this.hide();
    } else {
      this.show();
    }
  }

  public hintForOveflowText(): boolean {
    return this.hasOverflowText ? this.hasOverflowText.offsetWidth < this.hasOverflowText.scrollWidth : true;
  }

  public show(): void {
    if (this.zyfraHint && this.hintForOveflowText()) {
      this._showHint();
      this.zyfraShowHint = true;
    }
  }

  public hide(): void {
    clearTimeout(this.hintTimerId);
    if (this.hintCmpRef) {
      this.renderer.setStyle(this.hintCmpRef.location.nativeElement, 'animation', 'hintOut 0.3s');
    }
    this.zyfraShowHint = false;
  }

  private _setOptions(): void {
    const viewPort: DOMRect = this.elementRef.nativeElement.getBoundingClientRect();
    const elementHeight: number = viewPort.height;
    const elementWidth: number = viewPort.width;
    const hintBoundingClientRect: DOMRect = this.hintElement.getBoundingClientRect();
    const hintHeight = hintBoundingClientRect.height;
    const hintWidth = hintBoundingClientRect.width;
    const margin = 12;

    this._setPosition(hintHeight, elementHeight, viewPort, margin, hintWidth);

    this._setCoordinatesLeftAndTop(hintHeight, elementHeight, viewPort, margin, hintWidth, elementWidth);

    this.hintCmpRef.instance.options.left = this.coordinates.left;
    this.hintCmpRef.instance.options.top = this.coordinates.top;
    this._setHintClasses();
    this.hintCmpRef.changeDetectorRef.detectChanges();
  }

  private _setPosition(
    hintHeight: number,
    elementHeight: number,
    viewPort: DOMRect,
    margin: number,
    hintWidth: number
  ): void {
    switch (this.position) {
      case 'left':
        if (viewPort.left < hintWidth + margin) {
          this.position = 'right';
        }
        break;
      case 'right':
        if (window.innerWidth - viewPort.right < hintWidth + margin) {
          this.position = 'left';
        }
        break;
      case 'above':
        if (viewPort.top < hintHeight + margin) {
          this.position = 'below';
        }
        break;
      case 'below':
        if (window.innerHeight - (viewPort.top + elementHeight) < hintHeight + margin) {
          this.position = 'above';
        }
        break;
    }
  }

  private _setCoordinatesLeftAndTop(
    hintHeight: number,
    elementHeight: number,
    viewPort: DOMRect,
    margin: number,
    hintWidth: number,
    elementWidth: number
  ): void {
    switch (this.position) {
      case 'right': {
        if (hintHeight <= elementHeight) {
          this.coordinates.top = viewPort.top;
        } else {
          this.coordinates.top = viewPort.top - (hintHeight - elementHeight) / 2;
        }
        this.coordinates.left = viewPort.right + margin;
        break;
      }
      case 'left': {
        if (hintHeight <= elementHeight) {
          this.coordinates.top = viewPort.top;
        } else {
          this.coordinates.top = viewPort.top - (hintHeight - elementHeight) / 2;
        }
        this.coordinates.left = viewPort.left - hintWidth - margin;
        break;
      }
      case 'above': {
        if (elementWidth >= hintWidth) {
          this.coordinates.left = viewPort.left + (elementWidth - hintWidth) / 2;
        } else if (viewPort.left < hintWidth / 2) {
          this.coordinates.left = viewPort.left;
        } else if (viewPort.left + hintWidth >= window.innerWidth) {
          this.coordinates.left = viewPort.left - hintWidth / 2;
        } else {
          this.coordinates.left = viewPort.left - (hintWidth - elementWidth) / 2;
        }

        this.coordinates.top = viewPort.top - hintHeight - margin;
        break;
      }
      case 'below': {
        if (elementWidth >= hintWidth) {
          this.coordinates.left = viewPort.left + (elementWidth - hintWidth) / 2;
        } else if (viewPort.left < hintWidth / 2) {
          this.coordinates.left = viewPort.left;
        } else if (viewPort.left + hintWidth >= window.innerWidth) {
          this.coordinates.left = viewPort.left - hintWidth / 2;
        } else {
          this.coordinates.left = viewPort.left - (hintWidth - elementWidth) / 2;
        }
        this.coordinates.top = viewPort.bottom + margin;
        break;
      }
      default: {
        this.coordinates.left = viewPort.right + margin;
        this.coordinates.top = viewPort.top;
        break;
      }
    }
  }

  private _showHint(): void {
    this.hintTimerId = setTimeout(() => {
      this.zyfraHintOverlayManager.create();

      this.hintCmpRef = this.viewContainerRef.createComponent(this.componentFactory);
      this.hintStyle = '';
      this.hintCmpRef.instance.options = {
        left: -1000,
        top: -1000,
        content: this.zyfraHint,
        context: this.zyfraHintContext,
      };
      this._setHintClasses();
      this.hintElement = this.hintCmpRef.location.nativeElement;
      this.zyfraHintOverlayManager.append(this.hintElement);

      this.mutationObserver = new MutationObserver((mutations: MutationRecord[]) => {
        mutations.forEach((mutation: MutationRecord) => {
          if (mutation.type === 'childList') {
            this._setOptions();
          }
        });
      });

      this.mutationObserver.observe(this.hintElement, {
        childList: true,
      });

      this.hintCmpRef.instance.close.subscribe(() => {
        this.hintCmpRef.destroy();
        this.hintCmpRef = null;

        if (this.mutationObserver) {
          this.mutationObserver.disconnect();
        }
      });
      this._setOptions();
      this.hintCmpRef.changeDetectorRef.detectChanges();
    }, this.zyfraHintDelay);
  }
}
