import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ZyfraTooltipOverlayManager {
  private innerContainer: HTMLElement = null;
  private readonly className = 'zyfra-tooltip-overlay-container';
  private renderer: Renderer2;

  constructor(@Inject(DOCUMENT) private document: Document, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private get container(): HTMLElement {
    if (!this.innerContainer) {
      this.innerContainer = this.document.querySelector(`.${this.className}`);
      if (!this.innerContainer) {
        this.innerContainer = this.renderer.createElement('div');
        this.renderer.addClass(this.innerContainer, this.className);
        this.renderer.setStyle(
          this.innerContainer,
          'cssText',
          'position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:99999;'
        );
        this.document.body.appendChild(this.innerContainer);
      }
    }
    return this.innerContainer;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public create(): void {}

  public append(element: HTMLElement): void {
    this.container.appendChild(element);
  }

  public remove(element: HTMLElement): void {
    this.container.removeChild(element);
  }
}
