```css
@import './custom-light';
@import './custom-light-palette';
@import './custom-dark';
@import './custom-dark-palette';

:root,
*[data-prizm-theme='light'] {
  --prizm-text-icon-primary: red;
  --prizm-text-icon-secondary: blue;
}
*[data-prizm-theme='dark'] {
  --prizm-text-icon-primary: yellow;
  --prizm-text-icon-secondary: green;
}
```
