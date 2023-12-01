```ts
const MY_INVERTED_THEME: PrizmThemeInvertedValues = {
  customDark: 'customLight',
  customLight: 'customDark',
};
@NgModule({
  // ...
  providers: [
    {
      provide: PRIZM_THEME_INVERTED,
      useValue: {
        ...MY_INVERTED_THEME,
      },
    },
  ],
})
export class AppModule {}
```
