import { Injectable } from '@angular/core';
import { PrizmInputMultiSelectComponent, PrizmMultiSelectItemDirective } from '@prizm-ui/components';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PrizmMultiSelectItemService<T = any> {
  private comp_?: PrizmInputMultiSelectComponent<T>;
  public items$$ = new BehaviorSubject<PrizmMultiSelectItemDirective[]>([]);
  get comp(): PrizmInputMultiSelectComponent<T> | null {
    return this.comp_ ?? null;
  }

  public initComp(comp: PrizmInputMultiSelectComponent<T>): void {
    this.comp_ = comp;
  }

  public select(item: T): void {
    console.log('#mz select', item, this.comp);
    this.comp_?.select(item);
    this.comp_?.checkControlUpdate();
  }

  public unselect(item: T): void {
    console.log('#mz unselect', item, this.comp);
    this.comp_?.unselect(item);
    this.comp_?.checkControlUpdate();
  }

  public toggle(item: T): void {
    if (this.comp_?.isSelected(item)) this.select(item);
    else this.unselect(item);
  }
}
