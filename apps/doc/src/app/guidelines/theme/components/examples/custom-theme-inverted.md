```ts
@NgModule({
  // ...
  providers: [
    {
      provide: PRIZM_THEME_INVERTED,
      useValue: of({
        ...MY_INVERTED_THEME,
      }),
    },
  ],
})
export class AppModule {}
```
