```css
@import './custom-light';
@import './custom-light-palette';
@import './custom-dark';
@import './custom-dark-palette';

:root,
*[data-prizm-theme='customLight'] {
  .myCustomLightPalette();
  .myCustomLightTheme();
}
*[data-prizm-theme='customDark'] {
  .myCustomDarkPalette();
  .myCustomDarkTheme();
}
```
