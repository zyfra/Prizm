import { Injectable, OnInit } from '@angular/core';
import { PRIZM_DARK_THEME_CSS_VARS, PRIZM_LIGHT_THEME_CSS_VARS } from '@prizm-ui/theme';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { createStore, withProps } from '@ngneat/elf';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';

@Injectable()
export class ThemeTokenChangerService {
  readonly lightStorage = createStore({ name: 'light_theme' }, withProps<Record<string, string>>({}));
  readonly darkStorage = createStore({ name: 'dark_theme' }, withProps<Record<string, string>>({}));

  get hasDarkValue() {
    return !!Object.keys(this.darkStorage.value).length;
  }
  get hasLightValue() {
    return !!Object.keys(this.lightStorage.value).length;
  }

  readonly updateStyles$$ = new Subject<void>();

  constructor(public readonly destroyService: PrizmDestroyService) {
    persistState(this.lightStorage, {
      key: 'prizm_light_custom_theme',
      storage: localStorageStrategy,
    });
    persistState(this.darkStorage, {
      key: 'prizm_dark_custom_theme',
      storage: localStorageStrategy,
    });

    this.updateStyles$$
      .pipe(
        debounceTime(100),
        tap(() => {
          this.addStylesWithClass('dark-theme', this.generateStyleContent('dark'));
          this.addStylesWithClass('light-theme', this.generateStyleContent('light'));
        }),
        takeUntil(this.destroyService)
      )
      .subscribe();
  }

  public restore() {
    this.lightStorage.reset();
    this.darkStorage.reset();
    this.updateStyles$$.next();
  }
  public download() {
    if (this.hasDarkValue) this.downloadCSSFile(this.generateStyleContent('dark'), 'dark.css');
    if (this.hasLightValue) this.downloadCSSFile(this.generateStyleContent('light'), 'light.css');
  }

  public updateTokenValue(token: string, theme: 'light' | 'dark' | string, value: string | null): void {
    let map = this.darkStorage;
    if (theme === 'light') {
      map = this.lightStorage;
    }

    if (!value)
      map.update(store => {
        delete store[token];
        return { ...store };
      });
    else
      map.update(store => {
        return {
          ...store,
          [token]: value,
        };
      });

    this.updateStyles$$.next();
  }

  private generateStyleContent(token: 'light' | 'dark' | string): string {
    return `
    *, *[data-prizm-theme][data-prizm-theme='${token}'] {
      ${[
        ...(token === 'light'
          ? Object.entries(this.lightStorage.value)
          : Object.entries(this.darkStorage.value)),
      ]
        .map(([token, value]) => `--${token}: ${value};`)
        .join('')}
    }
     `;
  }
  public getTokenValue(token: string, theme: 'light' | 'dark' | string): string | null {
    let value = theme === 'light' ? this.lightStorage.getValue()[token] : this.darkStorage.getValue()[token];

    if (!value) {
      value =
        theme === 'light'
          ? PRIZM_LIGHT_THEME_CSS_VARS[`--${token}`]
          : PRIZM_DARK_THEME_CSS_VARS[`--${token}`];
    }

    return value ?? null;
  }

  private downloadCSSFile(cssContent: string, filename: string): void {
    // Создаем элемент <a>, который будет использоваться для скачивания файла
    const element = document.createElement('a');

    // Создаем Blob объект для наших стилей с правильным MIME типом
    const blob = new Blob([cssContent], { type: 'text/css' });

    // Используем URL.createObjectURL для создания ссылки на наш Blob объект
    element.href = URL.createObjectURL(blob);

    // Устанавливаем атрибуты для элемента <a> для скачивания файла с заданным именем
    element.download = filename;

    // Добавляем элемент в документ для его последующего использования
    document.body.appendChild(element);

    // Имитируем клик по элементу, чтобы вызвать скачивание файла
    element.click();

    // Удаляем элемент из DOM после запуска скачивания
    document.body.removeChild(element);

    // Освобождаем созданный URL, чтобы избежать утечек памяти
    URL.revokeObjectURL(element.href);
  }

  // Функция для добавления стилей в <style> элемент с определенным классом
  private addStylesWithClass(className: string, styles: string): void {
    let styleTag = document.head.querySelector(`style.${className}`);
    // Если элемент <style> с данным классом не существует - создаем его
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.className = className;
      document.head.appendChild(styleTag);
    }

    // Добавляем стили в <style>
    styleTag.textContent = `${styles}`;
  }

  // Функция для удаления <style> элемента с определенным классом
  private removeStylesByClass(className: string): void {
    const styleTag = document.head.querySelector(`style.${className}`);

    // Если элемент <style> найден - удаляем его
    if (styleTag) {
      styleTag.remove();
    }
  }
}
