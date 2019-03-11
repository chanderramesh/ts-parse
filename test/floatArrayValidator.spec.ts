import { expect } from 'chai'

import { FloatArrayValidator } from '../src/floatArrayValidator'

describe('FloatArrayValidator', () => {

    it('correctly identifies a float array', () => {
        expect(FloatArrayValidator.validate([])).to.be.true
        expect(FloatArrayValidator.validate([1.0])).to.be.true
        expect(FloatArrayValidator.validate([1, 0, 1.1])).to.be.true
        expect(FloatArrayValidator.validate([1.0, 2.5, -4.89])).to.be.true
        expect(FloatArrayValidator.validate([1, 2, 3, 4])).to.be.true
    })

    it('correctly identifies non- float arrays', () => {
        // strings
        expect(FloatArrayValidator.validate('hello')).to.be.false
        expect(FloatArrayValidator.validate('how are you')).to.be.false

        // booleans
        expect(FloatArrayValidator.validate(false)).to.be.false
        expect(FloatArrayValidator.validate(true)).to.be.false

        // numbers
        expect(FloatArrayValidator.validate(1.5)).to.be.false
        expect(FloatArrayValidator.validate(1)).to.be.false
        expect(FloatArrayValidator.validate(0)).to.be.false

        // arrays
        expect(FloatArrayValidator.validate(['example string', 'another one', true])).to.be.false
        expect(FloatArrayValidator.validate(['example string', 6.0, true])).to.be.false
        expect(FloatArrayValidator.validate([null, 6.0, true])).to.be.false

        // objects
        expect(FloatArrayValidator.validate({})).to.be.false
        expect(FloatArrayValidator.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(FloatArrayValidator.validate(null)).to.be.false

        // undefined
        expect(FloatArrayValidator.validate(undefined)).to.be.false
    })
})