import { DragDrop, DropListRef } from '@angular/cdk/drag-drop';
import { ElementRef, Injectable } from '@angular/core';
import { PrizmQueryBuilderDropListRef } from './PrizmQueryBuilderDropListRef';

/**
 * Produces `PrizmQueryBuilderDropListRef` over regular `DropListRef`
 * @see {@link PrizmQueryBuilderDropListRef}
 */
@Injectable({ providedIn: 'root' })
export class PrizmQueryBuilderDragDrop extends DragDrop {
  public override createDropList<T = any>(element: ElementRef<HTMLElement> | HTMLElement): DropListRef<T> {
    return new PrizmQueryBuilderDropListRef<T>(
      element,
      this['_dragDropRegistry'],
      this['_document'],
      this['_ngZone'],
      this['_viewportRuler']
    );
  }
}
