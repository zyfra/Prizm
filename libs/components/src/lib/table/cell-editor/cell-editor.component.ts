import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import { ZyfraTableTemplateDirective } from '../directives/table-template.directive';

@Component({
  selector: 'zyfra-cell-editor',
  templateUrl: './cell-editor.component.html',
})
export class ZyfraCellEditorComponent implements AfterContentInit {
  @ContentChildren(ZyfraTableTemplateDirective) templates: QueryList<ZyfraTableTemplateDirective>;

  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  inputTemplate: TemplateRef<unknown>;

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  ngAfterContentInit(): void {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'input':
          this.inputTemplate = item.template;
          break;
      }
    });
  }
}
