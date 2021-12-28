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
  Renderer2, NgZone,
} from '@angular/core';
import { ZyfraTooltipComponent } from './zyfra-tooltip.component';
import { ZyfraTooltipOverlayManager } from './zyfra-tooltip-overlay-manager.service';

@Directive({
  selector: '[zyfraTooltip]',
  exportAs: 'zyfraTooltip',
})
export class ZyfraTooltipDirective implements OnDestroy, OnChanges, AfterViewInit {
  constructor(
    private elementRef: ElementRef<HTMLElement>,
    @Inject(ComponentFactoryResolver)
    private resolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private zyfraTooltipOverlayManager: ZyfraTooltipOverlayManager,
    private renderer: Renderer2,
    private ngZone: NgZone,
  ) {}

  @Input() zyfraTooltip: string | TemplateRef<any> = null;
  @Input() zyfraTooltipContext: Record<string, unknown>;
  @Input() zyfraTooltipShow = false;
  @Input() zyfraTooltipDelay = 400;
  @Input() zyfraTooltipColor: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' = 'primary';
  @Input() zyfraTooltipClass: string | string[] = '';
  @Input() zyfraTooltipPosition: 'left' | 'right' | 'above' | 'below' = 'right';
  @Input() zyfraTooltipOverflowText: HTMLElement;

  /**
   * MARGIN = 2 + 4
   * 2 - базовый отступ согласно https://jira.zyfra.com/wiki/pages/viewpage.action?pageId=13729903
   * 4 - ширина указателя тултипа
   */
  private readonly MARGIN = 6;
  private tooltipStyle: string;
  private mutationObserver: MutationObserver;
  private componentFactory = this.resolver.resolveComponentFactory(ZyfraTooltipComponent);
  private tooltipCmpRef: ComponentRef<ZyfraTooltipComponent> = null;
  private tooltipElement: HTMLElement = null;
  private coordinates = { left: 0, top: 0 };
  private tooltipTimerId = null;

  @HostListener('click', ['$event'])
  public clickEvent(event: MouseEvent): void {
    this.hide();
  }

  @HostListener('mouseenter', ['$event'])
  public mouseenter(event: MouseEvent): void {
    if (!this.zyfraTooltipShow) {
      this.show();
    }
  }

  @HostListener('mouseleave', ['$event'])
  public mouseleave(event: MouseEvent): void {
    if (!this.tooltipCmpRef) {
      clearTimeout(this.tooltipTimerId);
      this.zyfraTooltipShow = false;
    } else {
      this.hide();
    }
  }

  ngAfterViewInit(): void {
    if (this.zyfraTooltipShow) {
      this.show();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tooltipCmpRef) {
      let wereChanges = false;

      if (changes.zyfraTooltipPosition) {
        const change = changes.zyfraTooltipPosition;

        if (!change.firstChange) {
          this._setTooltipClasses();
          wereChanges = true;
        }
      }

      if (changes.zyfraTooltip) {
        const change = changes.zyfraTooltip;
        if (!change.firstChange) {
          this.tooltipCmpRef.instance.options.content = change.currentValue;
          wereChanges = true;
        }
      }

      if (wereChanges) {
        this.tooltipCmpRef.changeDetectorRef.detectChanges();
        this._setOptions();
      }
    }
  }

  private _setTooltipClasses(): void {
    this.tooltipCmpRef.instance.hostClasses = `
      zyfra-tooltip
      ${this.zyfraTooltipClass}
      ${this.tooltipStyle}
      zyfra-tooltip_color_${this.zyfraTooltipColor}
      zyfra-tooltip_position_${this.zyfraTooltipPosition}
    `;
  }

  ngOnDestroy(): void {
    if (this.tooltipCmpRef) {
      this.tooltipCmpRef.destroy();
      this.tooltipCmpRef = null;
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    this.hide();
  }

  public toggle(): void {
    if (this.zyfraTooltipShow) {
      this.hide();
    } else {
      this.show();
    }
  }

  public tooltipForOverflowText(): boolean {
    return this.zyfraTooltipOverflowText ? this.zyfraTooltipOverflowText.offsetWidth < this.zyfraTooltipOverflowText.scrollWidth : true;
  }

  public show(): void {
    if (this.zyfraTooltip && this.tooltipForOverflowText()) {
      this._showTooltip();
      this.zyfraTooltipShow = true;
    }
  }

  public hide(): void {
    clearTimeout(this.tooltipTimerId);
    if (this.tooltipCmpRef) {
      this.renderer.setStyle(this.tooltipCmpRef.location.nativeElement, 'animation', 'tooltipOut 0.3s');
    }
    this.zyfraTooltipShow = false;
  }

  private _setOptions(): void {
    const elementRect = this.elementRef.nativeElement.getBoundingClientRect();
    const tooltipRect = this.tooltipElement.getBoundingClientRect();

    this._setPosition(elementRect, tooltipRect);
    this._setCoordinatesLeftAndTop(elementRect, tooltipRect);

    this.tooltipCmpRef.instance.options.left = this.coordinates.left;
    this.tooltipCmpRef.instance.options.top = this.coordinates.top;
    this._setTooltipClasses();
    this.tooltipCmpRef.changeDetectorRef.detectChanges();
  }

  private _setPosition(element: DOMRect, tooltip: DOMRect): void {
    switch (this.zyfraTooltipPosition) {
      case 'left':
        if (element.left < tooltip.width + this.MARGIN) {
          this.zyfraTooltipPosition = 'right';
        }
        break;
      case 'right':
        if (window.innerWidth - element.right < tooltip.width + this.MARGIN) {
          this.zyfraTooltipPosition = 'left';
        }
        break;
      case 'above':
        if (element.top < tooltip.height + this.MARGIN) {
          this.zyfraTooltipPosition = 'below';
        }
        break;
      case 'below':
        if (window.innerHeight - (element.top + element.height) < tooltip.height + this.MARGIN) {
          this.zyfraTooltipPosition = 'above';
        }
        break;
    }
  }

  private _setCoordinatesLeftAndTop(element: DOMRect, tooltip: DOMRect): void {
    switch (this.zyfraTooltipPosition) {
      case 'right': {
        this.coordinates.top = this.getTopPositionForLeftAndRight(element, tooltip);
        this.coordinates.left = element.right + this.MARGIN;
        break;
      }
      case 'left': {
        this.coordinates.top = this.getTopPositionForLeftAndRight(element, tooltip);
        this.coordinates.left = element.left - tooltip.width - this.MARGIN;
        break;
      }
      case 'above': {
        this.coordinates.left = this.getLeftPositionForAboveAndBelow(element, tooltip);
        this.coordinates.top = element.top - tooltip.height - this.MARGIN;
        break;
      }
      case 'below': {
        this.coordinates.left = this.getLeftPositionForAboveAndBelow(element, tooltip);
        this.coordinates.top = element.bottom + this.MARGIN;
        break;
      }
      default: {
        this.coordinates.left = element.right + this.MARGIN;
        this.coordinates.top = element.top;
        break;
      }
    }
  }

  private getTopPositionForLeftAndRight(element: DOMRect, tooltip: DOMRect): number {
    return (tooltip.height <= element.height)
      ? element.top
      : element.top - (tooltip.height - element.height) / 2;
  }

  private getLeftPositionForAboveAndBelow(element: DOMRect, tooltip: DOMRect): number {
    if (element.width >= tooltip.width) {
      return element.left + (element.width - tooltip.width) / 2;
    } else if (element.left < tooltip.width / 2) {
      return element.left;
    } else if (element.left + tooltip.width >= window.innerWidth) {
      return element.left - tooltip.width / 2;
    } else {
      return element.left - (tooltip.width - element.width) / 2;
    }
  }

  private _showTooltip(): void {
    this.tooltipTimerId = setTimeout(() => {
      this.zyfraTooltipOverlayManager.create();

      this.tooltipCmpRef = this.viewContainerRef.createComponent(this.componentFactory);
      this.tooltipStyle = '';
      this.tooltipCmpRef.instance.options = {
        left: -1000,
        top: -1000,
        content: this.zyfraTooltip,
        context: this.zyfraTooltipContext,
      };
      this._setTooltipClasses();
      this.tooltipElement = this.tooltipCmpRef.location.nativeElement;
      this.zyfraTooltipOverlayManager.append(this.tooltipElement);

      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          this.mutationObserver = new MutationObserver((mutations: MutationRecord[]) => {
            mutations.forEach((mutation: MutationRecord) => {
              if (mutation.type === 'childList') {
                this._setOptions();
              }
            });
          });

          this.mutationObserver.observe(this.tooltipElement, {
            childList: true,
          });

          this.tooltipCmpRef.instance.close.subscribe(() => {
            this.tooltipCmpRef.destroy();
            this.tooltipCmpRef = null;

            if (this.mutationObserver) {
              this.mutationObserver.disconnect();
            }
          });
          this._setOptions();
          this.tooltipCmpRef.changeDetectorRef.detectChanges();
        });
      });
    }, this.zyfraTooltipDelay);
  }
}
