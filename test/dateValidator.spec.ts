import { expect } from 'chai'

import { DateValidator } from '../src/dateValidator'

describe('DateValidator', () => {

    it('correctly identifies string and object dates', () => {
        expect(DateValidator.validate(new Date())).to.be.true
        expect(DateValidator.validate(Date())).to.be.true
    })

    it('correctly identifies non-dates', () => {
        // other strings
        expect(DateValidator.validate('bro')).to.be.false
        expect(DateValidator.validate('omg such wow')).to.be.false

        // booleans
        expect(DateValidator.validate(false)).to.be.false
        expect(DateValidator.validate(true)).to.be.false

        // numbers
        expect(DateValidator.validate(1.5)).to.be.false
        expect(DateValidator.validate(1)).to.be.false
        expect(DateValidator.validate(0)).to.be.false

        // arrays
        expect(DateValidator.validate([])).to.be.false
        expect(DateValidator.validate([1, 2, 3, 4])).to.be.false

        // objects
        expect(DateValidator.validate({})).to.be.false
        expect(DateValidator.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(DateValidator.validate(null)).to.be.false

        // undefined
        expect(DateValidator.validate(undefined)).to.be.false
    })
})