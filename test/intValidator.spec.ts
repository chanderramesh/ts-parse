import { expect } from 'chai'

import { IntValidator } from '../src/intValidator'

describe('IntValidator', () => {

    it('correctly identifies an integers', () => {
        expect(IntValidator.validate(-5)).to.be.true
        expect(IntValidator.validate('-5')).to.be.true
        expect(IntValidator.validate(0)).to.be.true
        expect(IntValidator.validate('0')).to.be.true
        expect(IntValidator.validate(5)).to.be.true
        expect(IntValidator.validate('5')).to.be.true
        expect(IntValidator.validate(5.0)).to.be.true
        expect(IntValidator.validate('5.0')).to.be.true
    })

    it('correctly identifies non-integers', () => {
        //string
        expect(IntValidator.validate('bro')).to.be.false
        expect(IntValidator.validate('hello')).to.be.false

        // booleans
        expect(IntValidator.validate(true)).to.be.false
        expect(IntValidator.validate(false)).to.be.false

        // float numbers
        expect(IntValidator.validate(1.5)).to.be.false
        expect(IntValidator.validate(-1.5)).to.be.false

        // arrays
        expect(IntValidator.validate([])).to.be.false
        expect(IntValidator.validate([1, 2, 3, 4])).to.be.false

        // objects
        expect(IntValidator.validate({})).to.be.false
        expect(IntValidator.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(IntValidator.validate(null)).to.be.false

        // undefined
        expect(IntValidator.validate(undefined)).to.be.false
    })
})