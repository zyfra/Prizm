### Описание

Utils (helper operators) for rxjs

### Operators

```typescript
of().pipe(
  // for filter only falsy values
  filterFalsy(),
  // for filter only truthy values
  filterTruthy(),
  // for filter only not nullish values
  filterNotNullish(),
  // for filter only nullish values
  filterNullish(),
  // map undefined to null
  mapUndefinedToNull()
);
```
