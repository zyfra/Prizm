import { Directive, Input, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[zyfraDisableControl]',
})
export class ZyfraDisableControlDirective {
  @Input() set zyfraDisableControl(condition: boolean) {
    const action = condition ? 'disable' : 'enable';
    this.ngControl.control[action]();
  }

  constructor(private ngControl: NgControl) {}
}

@NgModule({
  declarations: [ZyfraDisableControlDirective],
  exports: [ZyfraDisableControlDirective],
})
export class ZyfraDisableControlModule {}
