export class PolymorphContext<T> {
  constructor(public readonly $implicit: T) {}

  public get polymorphOutlet(): T {
    return this.$implicit;
  }
}

/**
 * @deprecated: use {@link PolymorphContext} instead
 */
export class Context<T> extends PolymorphContext<T> {}
