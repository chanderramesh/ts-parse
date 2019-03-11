# Tsc-Parsers

![](https://img.shields.io/npm/v/tsc-parsers.svg)
![](https://img.shields.io/bundlephobia/minzip/tsc-parsers.svg)

An easy, intuitive parsing library to validate custom types at run-time.

Typescript types, while amazing, are only during compile time and are erased during run-time. To combat this, I made a simple toy library that is surprisingly extensible and can validate types at runtime.

Examples include validating a string enum:

```typescript
enum STRING_ENUM {
    'FIRST',
    'SECOND',
    'THIRD',
    'FOURTH',
}
const STRING_VALIDATOR = new StringEnumValidator(STRING_ENUM)

describe('StringEnumValidator', () => {

    it('correctly identifies valid string', () => {
        expect(STRING_VALIDATOR.validate('FIRST')).to.be.true
        expect(STRING_VALIDATOR.validate('SECOND')).to.be.true
        expect(STRING_VALIDATOR.validate('THIRD')).to.be.true
        expect(STRING_VALIDATOR.validate('FOURTH')).to.be.true
    })

    it('correctly identifies invalid strings', () => {
        // invalid strings
        expect(STRING_VALIDATOR.validate('omg')).to.be.false
        expect(STRING_VALIDATOR.validate('hi')).to.be.false
    })
})
```

Or an integer array:

```typescript
describe('IntArrayValidator', () => {

    it('correctly identifies an int array', () => {
        expect(IntArrayValidator.validate([])).to.be.true
        expect(IntArrayValidator.validate([1.0, 2.0])).to.be.true
        expect(IntArrayValidator.validate([1, 2, 3, 4])).to.be.true
    })

    it('correctly identifies non- int arrays', () => {
        // strings
        expect(IntArrayValidator.validate('hello')).to.be.false

        // booleans
        expect(IntArrayValidator.validate(true)).to.be.false

        // numbers
        expect(IntArrayValidator.validate(0)).to.be.false

        // arrays
        expect(IntArrayValidator.validate(['example string', 'another one', true])).to.be.false
        expect(IntArrayValidator.validate(['example string', 6.0, true])).to.be.false
        expect(IntArrayValidator.validate([null, 6.0, true])).to.be.false
        expect(IntArrayValidator.validate([1, 0, 1.1])).to.be.false
        expect(IntArrayValidator.validate([1.0, 2.5, -4.89])).to.be.false
    })
})
```

And perhaps most importantly of all, custom objects:

```typescript
const OBJECT_VALIDATOR = new ObjectValidator(
    // These are required fields
    {
        code: IntValidator,
        lat: FloatValidator,
        lon: FloatValidator,
        data: StringArrayValidator,
    }, {
        // Note that these are optional fields that are supported
        emergency: BooleanValidator,
    })

describe('ObjectValidator', () => {
    it('correctly identifies our valid defined model', () => {
        expect(OBJECT_VALIDATOR.validate({
            code: 200,
            lat: 0.0,
            lon: -58.23,
            data: [],
        })).to.be.true
        expect(OBJECT_VALIDATOR.validate({
            code: 200,
            lat: 0.0,
            lon: -58.23,
            data: ['hi', 'how are you'],
        })).to.be.true
        expect(OBJECT_VALIDATOR.validate({
            code: 200,
            lat: 0.0,
            lon: -58.23,
            data: ['hi', 'how are you'],
            emergency: true,
        })).to.be.true
        expect(OBJECT_VALIDATOR.validate({
            code: 200,
            lat: 0.0,
            lon: -58.23,
            data: ['hi', 'how are you'],
            emergency: false,
        })).to.be.true
    })
})
```

One advantage in the way that this is implemented is that all of these various `Validator` classes and objects are inherited from a common `BaseValidator` class, so the type hierarchy is extensible and generic enough to support things like using this in a decorator or creating custom ones simply by extending the base abstract class.