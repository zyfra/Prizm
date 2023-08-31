/* eslint-disable @angular-eslint/directive-selector  */
/* eslint-disable @angular-eslint/component-selector */
import { Component, Directive, EventEmitter, Input, Output } from '@angular/core';
import { prizmGetListDirectiveInputsOutputs } from './get-directive-info';

// Test components and directives
@Component({
  selector: 'app-test-component',
  template: '',
})
class TestComponent {
  @Input() inputProp!: string;
  @Output() outputProp = new EventEmitter<void>();
}

@Directive({
  selector: '[appTestDirective]',
})
class TestDirective {
  @Input() directiveInput!: string;
  @Output() directiveOutput = new EventEmitter<void>();
}

@Component({
  selector: 'app-no-input-output',
  template: '',
})
class NoInputOutputComponent {}

@Directive({
  selector: '[appNoInputOutputDirective]',
})
class NoInputOutputDirective {}

// Test cases
describe('prizmGetListDirectiveInputsOutputs', () => {
  test('should return correct data for a component with inputs and outputs', () => {
    const result = prizmGetListDirectiveInputsOutputs(TestComponent);

    expect(result).toEqual({
      className: 'TestComponent',
      selector: 'app-test-component',
      inputs: ['inputProp'],
      outputs: ['outputProp'],
    });
  });

  test('should return correct data for a directive with inputs and outputs', () => {
    const result = prizmGetListDirectiveInputsOutputs(TestDirective);

    expect(result).toEqual({
      className: 'TestDirective',
      selector: '[appTestDirective]',
      inputs: ['directiveInput'],
      outputs: ['directiveOutput'],
    });
  });

  test('should return correct data for a component without inputs and outputs', () => {
    const result = prizmGetListDirectiveInputsOutputs(NoInputOutputComponent);

    expect(result).toEqual({
      className: 'NoInputOutputComponent',
      selector: 'app-no-input-output',
      inputs: [],
      outputs: [],
    });
  });

  test('should return correct data for a directive without inputs and outputs', () => {
    const result = prizmGetListDirectiveInputsOutputs(NoInputOutputDirective);

    expect(result).toEqual({
      className: 'NoInputOutputDirective',
      selector: '[appNoInputOutputDirective]',
      inputs: [],
      outputs: [],
    });
  });

  test('should return null for a non-component or non-directive class', () => {
    class NonComponentNonDirectiveClass {}

    const result = prizmGetListDirectiveInputsOutputs(NonComponentNonDirectiveClass);

    expect(result).toBeNull();
  });
});
