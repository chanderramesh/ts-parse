import { expect } from 'chai'

import { IntEnumValidator } from '../src/intEnumValidator'

enum INT_ENUM {
    FIRST = 1,
    SECOND = 2,
    THIRD = 3,
    FOURTH = 4,
}
const INT_VALIDATOR = new IntEnumValidator(INT_ENUM)

describe('IntEnumValidator', () => {

    it('correctly identifies valid integers', () => {
        expect(INT_VALIDATOR.validate(1)).to.be.true
        expect(INT_VALIDATOR.validate(1.0)).to.be.true
        expect(INT_VALIDATOR.validate(2)).to.be.true
        expect(INT_VALIDATOR.validate(2.0)).to.be.true
        expect(INT_VALIDATOR.validate(3)).to.be.true
        expect(INT_VALIDATOR.validate(3.0)).to.be.true
        expect(INT_VALIDATOR.validate(4)).to.be.true
        expect(INT_VALIDATOR.validate(4.0)).to.be.true
    })

    it('correctly identifies invalid integers', () => {
        // strings
        expect(INT_VALIDATOR.validate('bro')).to.be.false
        expect(INT_VALIDATOR.validate('dude')).to.be.false

        // booleans
        expect(INT_VALIDATOR.validate(false)).to.be.false
        expect(INT_VALIDATOR.validate(true)).to.be.false

        // invalid numbers
        expect(INT_VALIDATOR.validate(3.5)).to.be.false
        expect(INT_VALIDATOR.validate(3.01)).to.be.false
        expect(INT_VALIDATOR.validate(5)).to.be.false

        // arrays
        expect(INT_VALIDATOR.validate([])).to.be.false
        expect(INT_VALIDATOR.validate([1, 2, 3, 4])).to.be.false

        // objects
        expect(INT_VALIDATOR.validate({})).to.be.false
        expect(INT_VALIDATOR.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(INT_VALIDATOR.validate(null)).to.be.false

        // undefined
        expect(INT_VALIDATOR.validate(undefined)).to.be.false
    })
})