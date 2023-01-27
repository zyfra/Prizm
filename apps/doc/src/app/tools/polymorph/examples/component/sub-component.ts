import { Component, Inject } from '@angular/core';
import { POLYMORPH_CONTEXT } from '@prizm-ui/components';

@Component({
  template: `FROM COMPONENT {{context.a}}`,
  styles: []
})
export class PrizmPolymorphSubComponentExampleComponent {
  constructor(
    /** WE CAN GET INPUT CONTEXT VIA DI, FOR THIS YOU NEED TO USE TOKEN POLYMORPH_CONTEXT*/
    @Inject(POLYMORPH_CONTEXT) readonly context: any
  ) {}
}
