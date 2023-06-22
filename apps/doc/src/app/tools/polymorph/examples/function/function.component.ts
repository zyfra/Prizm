import { Component } from '@angular/core';

@Component({
  selector: 'prizm-polymorph-function-example',
  templateUrl: './function.component.html',
  styles: [],
})
export class PrizmPolymorphFunctionExampleComponent {
  public context = { a: 1 };
  public value = (context: Record<string, unknown>): string => {
    return `FROM FUNCTION ${context?.a}`;
  };
}
