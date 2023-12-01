import { Injectable } from '@angular/core';
import { PrizmIcons } from './svg/icons.model';

@Injectable({
  providedIn: 'root',
})
export class PrizmIconsRegistry {
  private registry = new Map<string, string>();

  public registerIcons(icons: PrizmIcons[]): void {
    icons.forEach((icon: PrizmIcons) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`
      );
    }
    return this.registry.get(iconName);
  }
}
