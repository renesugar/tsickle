
/**
 * @param {Object} a
 * @param {string} b
 * @return {void}
 */
function decorator(a: Object, b: string) {}
/**
 * @Annotation
 * @param {Object} a
 * @param {string} b
 * @return {void}
 */
function annotationDecorator(a: Object, b: string) {}

class DecoratorTest {
  @decorator
private x: number;
private y: number;
/** @nocollapse */
static propDecorators: {[key: string]: DecoratorInvocation[]} = {
'y': [{ type: annotationDecorator },],
};

  static _tsickle_typeAnnotationsHelper() {
 /** @nocollapse
 @type {Object<string,Array<DecoratorInvocation>>} */
DecoratorTest.propDecorators;
 /** @type {number} */
DecoratorTest.prototype.x;
 /** @type {number} */
DecoratorTest.prototype.y;
  }

}
/** @record */
function DecoratorInvocation() {}
 /** @type {Function} */
DecoratorInvocation.prototype.type;
 /** @type {Array<?>} */
DecoratorInvocation.prototype.args;


interface DecoratorInvocation {
  type: Function;
  args?: any[];
}