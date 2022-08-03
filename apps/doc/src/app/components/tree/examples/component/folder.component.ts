import { Component, HostListener } from '@angular/core';
import { ZuiTreeItemContentComponent } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-folders',
  template: `
        <zui-icon
            class="tui-space_right-2"
            [iconClass]="icon"
            size='16'
        ></zui-icon>
        <ng-container [ngTemplateOutlet]="context.template"></ng-container>
    `,
  styleUrls: ['folder.component.less'],
})
export class FoldersComponent extends ZuiTreeItemContentComponent {
  public get icon(): string {
    return this.isExpandable ? 'files-folder' : 'files-alarm';
  }

  @HostListener('click')
  public  onHostClick(): void {
    this.onClick();
  }
}
