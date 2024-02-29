type IterateeFunction = (item: any) => any;
type Order = 'asc' | 'desc';

export function orderBy<T>(
  collection: T[],
  iteratees: Array<IterateeFunction | string>,
  orders: Order[] = []
): T[] {
  // Clone the collection to avoid mutating the input
  const sortedCollection = [...collection];

  // Sort the collection based on multiple criteria
  return sortedCollection.sort((a: any, b: any) => {
    for (let i = 0; i < iteratees.length; i++) {
      const iteratee = iteratees[i];
      const order = orders[i] || 'asc';

      const valueA = typeof iteratee === 'function' ? iteratee(a) : a[iteratee];
      const valueB = typeof iteratee === 'function' ? iteratee(b) : b[iteratee];

      if (valueA !== valueB) {
        const sortOrder = order === 'asc' ? 1 : -1;
        return valueA > valueB ? sortOrder : -sortOrder;
      }
    }

    // If all iteratees consider the elements equal, maintain their order.
    return 0;
  });
}
