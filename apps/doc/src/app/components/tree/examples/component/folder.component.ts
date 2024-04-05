import { Component, HostListener, OnInit } from '@angular/core';
import { PrizmTreeItemContentComponent } from '@prizm-ui/components';
import { CommonModule } from '@angular/common';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { prizmIconsFileExclamation, prizmIconsFolder } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-folders',
  template: `
    <prizm-icons-full class="prizm-space_right-2" [name]="icon" size="16"></prizm-icons-full>
    <ng-container [ngTemplateOutlet]="context.template"></ng-container>
  `,
  styleUrls: ['folder.component.less'],
  standalone: true,
  imports: [CommonModule, PrizmIconsFullComponent],
})
export class FoldersComponent extends PrizmTreeItemContentComponent implements OnInit {
  public get icon(): string {
    return this.isExpandable ? 'folder' : 'file-exclamation';
  }

  @HostListener('click')
  public onHostClick(): void {
    this.onClick();
  }

  ngOnInit(): void {
    this.iconsFullRegistry.registerIcons(prizmIconsFolder, prizmIconsFileExclamation);
  }
}
