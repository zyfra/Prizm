import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-overlay-example',
  templateUrl: './ast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AstComponent {
  readonly exampleModule: RawLoaderContent = import('./examples/import-component.md?raw');
  readonly buttonExample: TuiDocExample = {
    TypeScript: import('./examples/button/button.component?raw'),
    HTML: import('./examples/button/button.component.html?raw'),
  };
  readonly accordionExample: TuiDocExample = {
    TypeScript: import('./examples/accordion/accordion.component?raw'),
    HTML: import('./examples/accordion/accordion.component.html?raw'),
  };
  readonly breadcrumbExample: TuiDocExample = {
    TypeScript: import('./examples/breadcrumb/breadcrumb.component?raw'),
    HTML: import('./examples/breadcrumb/breadcrumb.component.html?raw'),
  };
  readonly checkboxExample: TuiDocExample = {
    TypeScript: import('./examples/checkbox/checkbox.component?raw'),
    HTML: import('./examples/checkbox/checkbox.component.html?raw'),
  };
  readonly radioExample: TuiDocExample = {
    TypeScript: import('./examples/radio/radio.component?raw'),
    HTML: import('./examples/radio/radio.component.html?raw'),
  };
  readonly chipsExample: TuiDocExample = {
    TypeScript: import('./examples/chips/chips.component?raw'),
    HTML: import('./examples/chips/chips.component.html?raw'),
  };
  readonly dropdownExample: TuiDocExample = {
    TypeScript: import('./examples/dropdown/dropdown.component?raw'),
    HTML: import('./examples/dropdown/dropdown.component.html?raw'),
  };
  readonly multiSelectExample: TuiDocExample = {
    TypeScript: import('./examples/multi-select/multi-select.component?raw'),
    HTML: import('./examples/multi-select/multi-select.component.html?raw'),
  };
  readonly inputNumberExample: TuiDocExample = {
    TypeScript: import('./examples/input-number/input-number.component?raw'),
    HTML: import('./examples/input-number/input-number.component.html?raw'),
  };
  readonly inputExample: TuiDocExample = {
    TypeScript: import('./examples/input/input.component?raw'),
    HTML: import('./examples/input/input.component.html?raw'),
  };
  readonly inputSwitchExample: TuiDocExample = {
    TypeScript: import('./examples/input-switch/input-switch.component?raw'),
    HTML: import('./examples/input-switch/input-switch.component.html?raw'),
  };
  readonly splitButtonExample: TuiDocExample = {
    TypeScript: import('./examples/split-button/split-button.component?raw'),
    HTML: import('./examples/split-button/split-button.component.html?raw'),
  };
  readonly toggleButtonExample: TuiDocExample = {
    TypeScript: import('./examples/toggle-button/toggle-button.component?raw'),
    HTML: import('./examples/toggle-button/toggle-button.component.html?raw'),
  };
  readonly spinnerExample: TuiDocExample = {
    TypeScript: import('./examples/spinner/spinner.component?raw'),
    HTML: import('./examples/spinner/spinner.component.html?raw'),
  };
  readonly tooltipExample: TuiDocExample = {
    TypeScript: import('./examples/tooltip/tooltip.component?raw'),
    HTML: import('./examples/tooltip/tooltip.component.html?raw'),
  };
  readonly tabsExample: TuiDocExample = {
    TypeScript: import('./examples/tabs/tabs.component?raw'),
    HTML: import('./examples/tabs/tabs.component.html?raw'),
  };
}
