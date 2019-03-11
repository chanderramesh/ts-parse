import { expect } from 'chai'

import { FloatValidator } from '../src/floatValidator'

describe('FloatValidator', () => {

    it('correctly identifies a float', () => {
        expect(FloatValidator.validate(-5)).to.be.true
        expect(FloatValidator.validate('-5')).to.be.true
        expect(FloatValidator.validate(0)).to.be.true
        expect(FloatValidator.validate('0')).to.be.true
        expect(FloatValidator.validate(5)).to.be.true
        expect(FloatValidator.validate('5')).to.be.true
        expect(FloatValidator.validate(5.0)).to.be.true
        expect(FloatValidator.validate('5.0')).to.be.true
        expect(FloatValidator.validate(1.5)).to.be.true
        expect(FloatValidator.validate('1.5')).to.be.true
        expect(FloatValidator.validate(-1.5)).to.be.true
        expect(FloatValidator.validate('-1.5')).to.be.true
    })

    it('correctly identifies non- floats', () => {
        // strings
        expect(FloatValidator.validate('bro')).to.be.false
        expect(FloatValidator.validate('dude')).to.be.false

        // booleans
        expect(FloatValidator.validate(true)).to.be.false
        expect(FloatValidator.validate(false)).to.be.false

        // arrays
        expect(FloatValidator.validate([])).to.be.false
        expect(FloatValidator.validate([1, 2, 3, 4])).to.be.false

        // objects
        expect(FloatValidator.validate({})).to.be.false
        expect(FloatValidator.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(FloatValidator.validate(null)).to.be.false

        // undefined
        expect(FloatValidator.validate(undefined)).to.be.false
    })
})