import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { BaseTableTemplateDirective } from '../base-table/directives/base-table-template.directive';

// eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
@Component({
  selector: 'prizm-cell-editor',
  templateUrl: './cell-editor.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCellEditorComponent implements AfterContentInit {
  @ContentChildren(BaseTableTemplateDirective) templates: QueryList<BaseTableTemplateDirective>;

  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  @HostBinding('attr.testId')
  readonly testId = 'prizm_cell_editor';

  inputTemplate: TemplateRef<unknown>;
  outputTemplate: TemplateRef<unknown>;

  public stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  ngAfterContentInit(): void {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'input':
          this.inputTemplate = item.template;
          break;
        case 'output':
          this.outputTemplate = item.template;
          break;
      }
    });
  }
}
