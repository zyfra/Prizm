# Export Icons

add export to file: icon-16-definitions.ts/icon-definitions.ts etc.
 

icon-definitions.ts
```
export const ZyfraIconsArray = IconDefs.reduce((preview, current) => preview.concat(current.data), []);

export const ZyfraIconsSet = new Set([...ZyfraIconsArray]);
```