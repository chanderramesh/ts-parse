import { expect } from 'chai'

import { FloatEnumValidator } from '../src/floatEnumValidator'

enum FLOAT_ENUM {
    FIRST = 1.0,
    SECOND = 1.5,
    THIRD = 2.0,
    FOURTH = 2.5,
}
const FLOAT_VALIDATOR = new FloatEnumValidator(FLOAT_ENUM)

describe('FloatEnumValidator', () => {

    it('correctly identifies valid floats', () => {
        expect(FLOAT_VALIDATOR.validate(1.0)).to.be.true
        expect(FLOAT_VALIDATOR.validate(1.5)).to.be.true
        expect(FLOAT_VALIDATOR.validate(2.0)).to.be.true
        expect(FLOAT_VALIDATOR.validate(2.5)).to.be.true
    })

    it('correctly identifies invalid floats', () => {
        // strings
        expect(FLOAT_VALIDATOR.validate('bro')).to.be.false
        expect(FLOAT_VALIDATOR.validate('dude')).to.be.false

        // booleans
        expect(FLOAT_VALIDATOR.validate(false)).to.be.false
        expect(FLOAT_VALIDATOR.validate(true)).to.be.false

        // invalid numbers
        expect(FLOAT_VALIDATOR.validate(3.5)).to.be.false
        expect(FLOAT_VALIDATOR.validate(3)).to.be.false

        // arrays
        expect(FLOAT_VALIDATOR.validate([])).to.be.false
        expect(FLOAT_VALIDATOR.validate([1, 2, 3, 4])).to.be.false

        // objects
        expect(FLOAT_VALIDATOR.validate({})).to.be.false
        expect(FLOAT_VALIDATOR.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(FLOAT_VALIDATOR.validate(null)).to.be.false

        // undefined
        expect(FLOAT_VALIDATOR.validate(undefined)).to.be.false
    })
})