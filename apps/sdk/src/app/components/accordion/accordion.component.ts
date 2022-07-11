import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-accordion-test',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  public dynamicString = 'Dynamic';
  public multiple = true;
  public selectedTwo = true;
  public disabled = false;
  public expandIcon = 'zyfra-icon chevrons-double-up';
  public collapseIcon = 'zyfra-icon chevrons-double-down';
  public onOpen(e: any): void {
    console.log(e);
  }
  public onClose(e: any): void {
    console.log(e);
  }
  public activeIndexChange(e: any): void {
    console.log(e);
  }
}
