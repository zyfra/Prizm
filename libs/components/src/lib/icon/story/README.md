# Export Icons

add method to file: icon-16-definitions.ts/icon-definitions.ts etc.
 

icon-definitions.ts
```
export const ZyfraIconsArray = IconDefs.reduce((preview, current) => {
    return [...preview, ...current.data]
}, []);

export const ZyfraIconsSet = new Set([...ZyfraIconsArray]);
```