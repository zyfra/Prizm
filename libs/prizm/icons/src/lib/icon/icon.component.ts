import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PrizmIconsRegistryService } from '../prizm-icons-registry.service';
import { prizmDefaultProp } from '@prizm-ui/core';

/**
 * todo add work with registry
 * */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[prizmIcon]',
  template: `<ng-content></ng-content>`,
  styleUrls: [
    './icon.component.less'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrizmIconComponent {
  @Input()
  @prizmDefaultProp()
  public name: string = '';

  @Input()
  @prizmDefaultProp()
  @HostBinding('style.font-size')
  public size: string = '24px';

  @HostBinding('class')
  private get className(): string {
    return `prizm-icons-${this.name}`;
  }


  constructor(
    /**
     * todo add work with registry
     * */
    private element: ElementRef, private dinosaurIconRegistry: PrizmIconsRegistryService,
    @Optional() @Inject(DOCUMENT) private document: any) {
  }
}
