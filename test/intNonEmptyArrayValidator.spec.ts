import { expect } from 'chai'

import { IntNonEmptyArrayValidator } from '../src/intNonEmptyArrayValidator'

describe('IntNonEmptyArrayValidator', () => {

    it('correctly identifies an int array', () => {
        expect(IntNonEmptyArrayValidator.validate([1.0, 2.0])).to.be.true
        expect(IntNonEmptyArrayValidator.validate([1, 2, 3, 4])).to.be.true
    })

    it('correctly identifies non- int arrays', () => {
        // strings
        expect(IntNonEmptyArrayValidator.validate('hello')).to.be.false
        expect(IntNonEmptyArrayValidator.validate('how are you')).to.be.false

        // booleans
        expect(IntNonEmptyArrayValidator.validate(false)).to.be.false
        expect(IntNonEmptyArrayValidator.validate(true)).to.be.false

        // numbers
        expect(IntNonEmptyArrayValidator.validate(1.5)).to.be.false
        expect(IntNonEmptyArrayValidator.validate(1)).to.be.false
        expect(IntNonEmptyArrayValidator.validate(0)).to.be.false

        // arrays
        expect(IntNonEmptyArrayValidator.validate([])).to.be.false
        expect(IntNonEmptyArrayValidator.validate(['example string', 'another one', true])).to.be.false
        expect(IntNonEmptyArrayValidator.validate(['example string', 6.0, true])).to.be.false
        expect(IntNonEmptyArrayValidator.validate([null, 6.0, true])).to.be.false
        expect(IntNonEmptyArrayValidator.validate([1, 0, 1.1])).to.be.false
        expect(IntNonEmptyArrayValidator.validate([1.0, 2.5, -4.89])).to.be.false

        // objects
        expect(IntNonEmptyArrayValidator.validate({})).to.be.false
        expect(IntNonEmptyArrayValidator.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(IntNonEmptyArrayValidator.validate(null)).to.be.false

        // undefined
        expect(IntNonEmptyArrayValidator.validate(undefined)).to.be.false
    })
})