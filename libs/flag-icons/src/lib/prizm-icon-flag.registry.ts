import { Injectable } from '@angular/core';
import { PrizmIconFlag } from './icons/my-icons';

@Injectable({
  providedIn: 'root'
})
export class PrizmIconFlagIconsRegistry {
  private registry = new Map<string, string>();

  public registerIcons(icons: PrizmIconFlag[]): void {
    icons.forEach((icon: PrizmIconFlag) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string): string | undefined {
    if (!this.registry.has(iconName)) {
      console.warn(`We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`);
    }
    return this.registry.get(iconName);
  }
}
