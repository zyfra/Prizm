import { Injectable } from '@angular/core';
import * as i0 from '@angular/core';
export class PrizmIconsSvgRegistry {
  constructor() {
    this.registry = new Map();
  }
  registerIcons(icons) {
    icons.forEach(icon => this.registry.set(icon.name, icon.data));
  }
  getIcon(iconName) {
    if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the dinosaur Icon with the name ${iconName}, did you add it to the Icon registry?`
      );
    }
    return this.registry.get(iconName);
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.1.8',
      ngImport: i0,
      type: PrizmIconsSvgRegistry,
      deps: [],
      target: i0.ɵɵFactoryTarget.Injectable,
    });
  }
  static {
    this.ɵprov = i0.ɵɵngDeclareInjectable({
      minVersion: '12.0.0',
      version: '16.1.8',
      ngImport: i0,
      type: PrizmIconsSvgRegistry,
      providedIn: 'root',
    });
  }
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.1.8',
  ngImport: i0,
  type: PrizmIconsSvgRegistry,
  decorators: [
    {
      type: Injectable,
      args: [
        {
          providedIn: 'root',
        },
      ],
    },
  ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpem0taWNvbnMucmVnaXN0cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2ljb25zL2Jhc2Uvc3JjL2xpYi9wcml6bS1pY29ucy5yZWdpc3RyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8scUJBQXFCO0lBSGxDO1FBSVUsYUFBUSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0tBYzlDO0lBWlEsYUFBYSxDQUFDLEtBQXFCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFTSxPQUFPLENBQUMsUUFBZ0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQ1YscURBQXFELFFBQVEsd0NBQXdDLENBQ3RHLENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs4R0FkVSxxQkFBcUI7a0hBQXJCLHFCQUFxQixjQUZwQixNQUFNOzsyRkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1JY29uU3ZnIH0gZnJvbSAnLi9zdmcvbXktaWNvbnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJpem1JY29uc1N2Z1JlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSByZWdpc3RyeSA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG5cbiAgcHVibGljIHJlZ2lzdGVySWNvbnMoaWNvbnM6IFByaXptSWNvblN2Z1tdKTogdm9pZCB7XG4gICAgaWNvbnMuZm9yRWFjaCgoaWNvbjogUHJpem1JY29uU3ZnKSA9PiB0aGlzLnJlZ2lzdHJ5LnNldChpY29uLm5hbWUsIGljb24uZGF0YSkpO1xuICB9XG5cbiAgcHVibGljIGdldEljb24oaWNvbk5hbWU6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLnJlZ2lzdHJ5LmhhcyhpY29uTmFtZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFdlIGNvdWxkIG5vdCBmaW5kIHRoZSBkaW5vc2F1ciBJY29uIHdpdGggdGhlIG5hbWUgJHtpY29uTmFtZX0sIGRpZCB5b3UgYWRkIGl0IHRvIHRoZSBJY29uIHJlZ2lzdHJ5P2BcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5LmdldChpY29uTmFtZSk7XG4gIH1cbn1cbiJdfQ==
