import { expect } from 'chai'

import { BooleanValidator } from '../src/booleanValidator'

describe('BooleanValidator', () => {
    it('correctly identifies a boolean', () => {
        expect(BooleanValidator.validate('true')).to.be.true
        expect(BooleanValidator.validate(true)).to.be.true
    })

    it('correctly identifies non-booleans', () => {
        // numbers
        expect(BooleanValidator.validate(1.5)).to.be.false
        expect(BooleanValidator.validate(1)).to.be.false
        expect(BooleanValidator.validate(0)).to.be.false

        // arrays
        expect(BooleanValidator.validate([])).to.be.false
        expect(BooleanValidator.validate([1, 2, 3, 4])).to.be.false

        // objects
        expect(BooleanValidator.validate({})).to.be.false
        expect(BooleanValidator.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(BooleanValidator.validate(null)).to.be.false

        // undefined
        expect(BooleanValidator.validate(undefined)).to.be.false
    })
})