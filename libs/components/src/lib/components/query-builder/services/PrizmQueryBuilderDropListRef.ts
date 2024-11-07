import { coerceElement } from '@angular/cdk/coercion';
import { DragRef, DropListRef } from '@angular/cdk/drag-drop';

export class PrizmQueryBuilderDropListRef<T> extends DropListRef<T> {
  public override connectedTo(connectedTo: DropListRef[]): this {
    /**
     * Natural order does not fit our need since it always match parent node
     * (i.e. mouse hovering over any children also is a hover over its parent because blocks are nested in each other).
     * While with reversed order we first match deeper nodes.
     */
    const sorted = connectedTo.slice().sort(positionComparer);
    return super.connectedTo(sorted);
  }

  public override _getSiblingContainerFromPosition(item: DragRef, x: number, y: number) {
    const found = super._getSiblingContainerFromPosition(item, x, y);

    // leading the list be preferred target over its parent
    if (
      found &&
      this._isOverContainer(x, y) &&
      coerceElement(found.element).contains(coerceElement(this.element))
    ) {
      return undefined;
    }

    return found;
  }
}

const positionComparer = (a: DropListRef, b: DropListRef) => getRect(b).x - getRect(a).x;

function getRect(ref: DropListRef): DOMRect {
  return ref['_domRect'] ?? coerceElement(ref.element).getBoundingClientRect();
}
