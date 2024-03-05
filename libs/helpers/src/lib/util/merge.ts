export function merge(object: Record<string, any>, ...sources: Record<string, any>[]) {
  for (const target of sources) {
    for (const [key, val] of Object.entries(target)) {
      if (val !== null && typeof val === `object`) {
        object[key] ??= new val.__proto__.constructor();
        merge(object[key], val);
      } else {
        object[key] = val;
      }
    }
  }

  return object; // we're replacing in-situ, so this is more for chaining than anything else
}
