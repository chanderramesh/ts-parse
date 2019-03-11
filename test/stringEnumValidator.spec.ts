import { expect } from 'chai'

import { StringEnumValidator } from '../src/stringEnumValidator'

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

        // booleans
        expect(STRING_VALIDATOR.validate(false)).to.be.false
        expect(STRING_VALIDATOR.validate(true)).to.be.false

        // numbers
        expect(STRING_VALIDATOR.validate(3.5)).to.be.false
        expect(STRING_VALIDATOR.validate(3.01)).to.be.false

        // arrays
        expect(STRING_VALIDATOR.validate([])).to.be.false
        expect(STRING_VALIDATOR.validate([1, 2, 3, 4])).to.be.false

        // objects
        expect(STRING_VALIDATOR.validate({})).to.be.false
        expect(STRING_VALIDATOR.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(STRING_VALIDATOR.validate(null)).to.be.false

        // undefined
        expect(STRING_VALIDATOR.validate(undefined)).to.be.false
    })
})