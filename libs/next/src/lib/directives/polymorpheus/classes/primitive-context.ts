export class PrimitiveContext {
    constructor(public $implicit: unknown) {
      console.log('#mz PrimitiveContext', {$implicit});
    }

    get polymorpheusOutlet(): unknown {
      console.log('#mz polymorpheusOutlet', {$implicit: this.$implicit});
        return this.$implicit;
    }
}
