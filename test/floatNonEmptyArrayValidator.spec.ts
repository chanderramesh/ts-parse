import { expect } from 'chai'

import { FloatNonEmptyArrayValidator } from '../src/floatNonEmptyArrayValidator'

describe('FloatNonEmptyArrayValidator', () => {

    it('correctly identifies a float array', () => {
        expect(FloatNonEmptyArrayValidator.validate([1.0])).to.be.true
        expect(FloatNonEmptyArrayValidator.validate([1, 0, 1.1])).to.be.true
        expect(FloatNonEmptyArrayValidator.validate([1.0, 2.5, -4.89])).to.be.true
        expect(FloatNonEmptyArrayValidator.validate([1, 2, 3, 4])).to.be.true
    })

    it('correctly identifies non- float arrays', () => {
        // strings
        expect(FloatNonEmptyArrayValidator.validate('hello')).to.be.false
        expect(FloatNonEmptyArrayValidator.validate('how are you')).to.be.false

        // booleans
        expect(FloatNonEmptyArrayValidator.validate(false)).to.be.false
        expect(FloatNonEmptyArrayValidator.validate(true)).to.be.false

        // numbers
        expect(FloatNonEmptyArrayValidator.validate(1.5)).to.be.false
        expect(FloatNonEmptyArrayValidator.validate(1)).to.be.false
        expect(FloatNonEmptyArrayValidator.validate(0)).to.be.false

        // arrays
        expect(FloatNonEmptyArrayValidator.validate([])).to.be.false
        expect(FloatNonEmptyArrayValidator.validate(['example string', 'another one', true])).to.be.false
        expect(FloatNonEmptyArrayValidator.validate(['example string', 6.0, true])).to.be.false
        expect(FloatNonEmptyArrayValidator.validate([null, 6.0, true])).to.be.false

        // objects
        expect(FloatNonEmptyArrayValidator.validate({})).to.be.false
        expect(FloatNonEmptyArrayValidator.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(FloatNonEmptyArrayValidator.validate(null)).to.be.false

        // undefined
        expect(FloatNonEmptyArrayValidator.validate(undefined)).to.be.false
    })
})