import { Component, HostListener } from '@angular/core';
import { PrizmTreeItemContentComponent } from '@prizm-ui/components';
import { CommonModule } from '@angular/common';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';

@Component({
  selector: 'prizm-folders',
  template: `
    <!--    <prizm-icon class="prizm-space_right-2" [iconClass]="icon" size="16"></prizm-icon>-->
    <prizm-icons-full class="prizm-space_right-2" [name]="icon" size="16"></prizm-icons-full>
    <ng-container [ngTemplateOutlet]="context.template"></ng-container>
  `,
  styleUrls: ['folder.component.less'],
  standalone: true,
  imports: [CommonModule, PrizmIconsFullComponent],
})
export class FoldersComponent extends PrizmTreeItemContentComponent {
  public get icon(): string {
    return this.isExpandable ? 'folder' : 'file-exclamation';
  }

  @HostListener('click')
  public onHostClick(): void {
    this.onClick();
  }
}
