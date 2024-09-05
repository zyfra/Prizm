import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { DEEP_EXPRESSION, SIMPLE_EXPRESSION } from './query-builder-example.constants';
import { FormControl } from '@angular/forms';
import { ConditionPrepareFn } from '@prizm-ui/components';

@Component({
  selector: 'prizm-query-builder-example',
  templateUrl: './query-builder-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryBuilderExampleComponent {
  public readonly basicExample: TuiDocExample = {
    TypeScript: import('./examples/query-builder-basic-example/query-builder-basic-example.component?raw'),
    HTML: import('./examples/query-builder-basic-example/query-builder-basic-example.component.html?raw'),
    LESS: import('./examples/query-builder-basic-example/query-builder-basic-example.component.less?raw'),
  };

  public readonly scrollableExample: TuiDocExample = {
    TypeScript: import(
      './examples/query-builder-scrollable-example/query-builder-scrollable-example.component?raw'
    ),
    HTML: import(
      './examples/query-builder-scrollable-example/query-builder-scrollable-example.component.html?raw'
    ),
    LESS: import(
      './examples/query-builder-scrollable-example/query-builder-scrollable-example.component.less?raw'
    ),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  control = new FormControl(SIMPLE_EXPRESSION);

  disabled = false;

  expressions = [SIMPLE_EXPRESSION, DEEP_EXPRESSION];

  prepare = noop;

  preparePresets: ConditionPrepareFn[] = [noop, prepareSetDefaults];

  prizmInputLayoutWidth = 'initial';

  prizmQueryBuilderNodeWidth = 'initial';
}

const prepareSetDefaults: ConditionPrepareFn = form => {
  form.patchValue({
    field: 'default',
    operator: 'default',
    value: 'default',
  });
};

const noop = () => {};
