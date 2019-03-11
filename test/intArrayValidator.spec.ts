import { expect } from 'chai'

import { IntArrayValidator } from '../src/intArrayValidator'

describe('IntArrayValidator', () => {

    it('correctly identifies an int array', () => {
        expect(IntArrayValidator.validate([])).to.be.true
        expect(IntArrayValidator.validate([1.0, 2.0])).to.be.true
        expect(IntArrayValidator.validate([1, 2, 3, 4])).to.be.true
    })

    it('correctly identifies non- int arrays', () => {
        // strings
        expect(IntArrayValidator.validate('hello')).to.be.false
        expect(IntArrayValidator.validate('how are you')).to.be.false

        // booleans
        expect(IntArrayValidator.validate(false)).to.be.false
        expect(IntArrayValidator.validate(true)).to.be.false

        // numbers
        expect(IntArrayValidator.validate(1.5)).to.be.false
        expect(IntArrayValidator.validate(1)).to.be.false
        expect(IntArrayValidator.validate(0)).to.be.false

        // arrays
        expect(IntArrayValidator.validate(['example string', 'another one', true])).to.be.false
        expect(IntArrayValidator.validate(['example string', 6.0, true])).to.be.false
        expect(IntArrayValidator.validate([null, 6.0, true])).to.be.false
        expect(IntArrayValidator.validate([1, 0, 1.1])).to.be.false
        expect(IntArrayValidator.validate([1.0, 2.5, -4.89])).to.be.false

        // objects
        expect(IntArrayValidator.validate({})).to.be.false
        expect(IntArrayValidator.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(IntArrayValidator.validate(null)).to.be.false

        // undefined
        expect(IntArrayValidator.validate(undefined)).to.be.false
    })
})