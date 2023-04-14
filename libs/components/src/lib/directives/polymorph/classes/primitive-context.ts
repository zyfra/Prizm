export class PrimitiveContext {
  constructor(public $implicit: unknown) {}

  get polymorphOutlet(): unknown {
    return this.$implicit;
  }
}
