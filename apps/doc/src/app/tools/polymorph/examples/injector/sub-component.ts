import { Component, Inject } from '@angular/core';
import { CUSTOM_TOKEN } from './token';

@Component({
  template: `FROM INJECTOR {{ value }}`,
  styles: [],
})
export class PrizmPolymorphSubComponentExampleComponent {
  constructor(@Inject(CUSTOM_TOKEN) readonly value: number) {}
}
