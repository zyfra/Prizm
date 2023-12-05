```css
/* styles.less */
@import '~@prizm-ui/theme/src/styles/styles.less';
// (Optional) Add only for use our components library
@import '~@prizm-ui/components/src/styles/styles.less';

// (Optional) Add only for use our old icon set (deprecated)
@import '~@prizm-ui/components/src/styles/icons/icons.less';
@import '~@prizm-ui/components/src/styles/icons-16/icons-16.less';
```

```json
// angular.json
@import '~@prizm-ui/theme/src/styles/styles.less';
    "assets": [
      // ....
     ],
    "styles": [
      // (Required) Add for use our theme
      "node_modules/@prizm-ui/theme/src/styles/styles.less",
      // (Optional) Add for use our components
      "node_modules/@prizm-ui/components/src/styles/styles.less",
      // (Optional) Add only for use our old icon set (deprecated)
      "node_modules/@prizm-ui/components/src/styles/icons/icons.less",
      "node_modules/@prizm-ui/components/src/styles/icons-16/icons-16.less"
    ],
```
