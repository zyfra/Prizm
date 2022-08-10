import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { StyleManager } from './style-manager.service';
import { CustomTheme } from './dropdown-style.types';

@Component({
  selector: 'zyfra-dropdown-style',
  templateUrl: './dropdown-style.component.html',
  styleUrls: ['./dropdown-style.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownStyleComponent implements OnInit {
  themes: CustomTheme[] = [
    { name: 'ЦИП', fileName: 'default' },
    { name: 'ГПН', fileName: 'gazprom-neft' },
  ];
  public value = this.themes[0];
  public optionLabel = 'name';

  constructor(private styleManager: StyleManager) {}

  ngOnInit(): void {
    if (localStorage.getItem('saveTheme')) {
      this.value = JSON.parse(localStorage.getItem('saveTheme'));
      this.changeTheme();
    } else {
      this.changeTheme();
    }
  }

  public changeTheme(): void {
    this.styleManager.removeStyle('theme');
    this.styleManager.setStyle('theme', `${this.value.fileName}.css`);
    const theme = this.themes.find(currentTheme => currentTheme.fileName === `${this.value.fileName}`);
    window.localStorage.setItem('saveTheme', JSON.stringify(theme));
  }
}
