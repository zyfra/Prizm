import { DOCUMENT } from "@angular/common";
import { ElementRef, Inject, Injectable } from "@angular/core";

interface Dimensions {
  width: number;
  height: number;
}


@Injectable()
export class ZyfraDropdownWithContentService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private element: ElementRef,
  ) { }

  setDropdownPanelPosition(): void {
    const dropdownPanel: HTMLElement = this.element.nativeElement.querySelector('.p-dropdown-panel')
    const targetHeightElement: HTMLElement = this.element.nativeElement.firstElementChild;
    dropdownPanel.style.visibility = 'hidden';

    setTimeout(() => {
      this.relativePosition(dropdownPanel, targetHeightElement);
      dropdownPanel.style.visibility = 'visible';
    })
  }

  // https://github.com/primefaces/primeng/blob/master/src/app/components/dom/domhandler.ts#L94
  private relativePosition(dropdownPanelElement: HTMLElement, target: HTMLElement): void {
    const elementDimensions = dropdownPanelElement.offsetParent
      ? { width: dropdownPanelElement.offsetWidth, height: dropdownPanelElement.offsetHeight }
      : this.getHiddenElementDimensions(dropdownPanelElement);

    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const viewport = this.getViewport();
    
    let top: number, left: number;

    if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
      top = -1 * (elementDimensions.height);
      dropdownPanelElement.style.transformOrigin = 'bottom';
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    }
    else {
      top = targetHeight;
      dropdownPanelElement.style.transformOrigin = 'top';
    }

    if (elementDimensions.width > viewport.width) {
      // element wider then viewport and cannot fit on screen (align at left side of viewport)
      left = targetOffset.left * -1;
    }
    else if ((targetOffset.left + elementDimensions.width) > viewport.width) {
      // element wider then viewport but can be fit on screen (align at right side of viewport)
      left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
    }
    else {
      // element fits on screen (align with target)
      left = 0;
    }

    dropdownPanelElement.style.top = top + 'px';
    dropdownPanelElement.style.left = left + 'px';
  }

  private getHiddenElementDimensions(element: HTMLElement): Dimensions {
    const dimensions: Dimensions = {
      width: 0,
      height: 0,
    };
    element.style.visibility = 'hidden';
    element.style.display = 'block';
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = 'none';
    element.style.visibility = 'visible';

    return dimensions;
  }


  private getViewport(): Dimensions {
    const win = this.document.defaultView,
      d = this.document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      w = win.innerWidth || e.clientWidth || g.clientWidth,
      h = win.innerHeight || e.clientHeight || g.clientHeight;

    return { width: w, height: h };
  }
}
