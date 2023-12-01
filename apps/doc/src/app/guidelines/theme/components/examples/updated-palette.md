```css
@import './custom-light';
@import './v3/custom-light-palette';
@import './v3/custom-dark';
@import './v3/custom-dark-palette';

:root,
*[data-prizm-theme='light'] {
  --prizm-v3-text-icon-primary: red;
  --prizm-v3-text-icon-secondary: blue;
}
*[data-prizm-theme='dark'] {
  --prizm-v3-text-icon-primary: yellow;
  --prizm-v3-text-icon-secondary: green;
}
```
