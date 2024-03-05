```css
@import './custom-light.less';
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
