import { Directive, OnInit } from '@angular/core';
import { PrizmTdService } from '../td/td.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: `tr:not([prizmTr])`,
  providers: [PrizmTdService],
})
export class PrizmTrDirective implements OnInit {
  public ngOnInit(): void {
    console.log('#mz PrizmTrDirective');
  }
}
