import { Component, HostListener } from '@angular/core';
import { PrizmTreeItemContentComponent } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-folders',
  template: `
        <pzm-icon
            class="tui-space_right-2"
            [iconClass]="icon"
            size='16'
        ></pzm-icon>
        <ng-container [ngTemplateOutlet]="context.template"></ng-container>
    `,
  styleUrls: ['folder.component.less'],
})
export class FoldersComponent extends PrizmTreeItemContentComponent {
  public get icon(): string {
    return this.isExpandable ? 'files-folder' : 'files-alarm';
  }

  @HostListener('click')
  public  onHostClick(): void {
    this.onClick();
  }
}
