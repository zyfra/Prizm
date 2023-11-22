```css
@import './custom-light';
@import './v3/custom-light-palette';
@import './v3/custom-dark';
@import './v3/custom-dark-palette';

:root,
*[data-prizm-theme='light'] {
  .myCustomLightPalette();
  .myCustomLightTheme();
}
*[data-prizm-theme='dark'] {
  .myCustomDarkPalette();
  .myCustomDarkTheme();
}
```
