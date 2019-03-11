import { expect } from 'chai'


import { SpecificStringValidator } from '../src/specificStringValidator'
const SPECIFIC_VALIDATOR = new SpecificStringValidator('dude')

describe('SpecificStringValidator', () => {
    it('correctly identifies "dude', () => {
        expect(SPECIFIC_VALIDATOR.validate('dude')).to.be.true
    })

    it('correctly identifies non-strings', () => {
        // other strings - these will fail because they are not specifically
        // the string given to the constructor, i.e. 'dude'
        expect(SPECIFIC_VALIDATOR.validate('fails because it is not "dude"'))
        expect(SPECIFIC_VALIDATOR.validate('also fails because it is not the specific string given'))

        // booleans
        expect(SPECIFIC_VALIDATOR.validate(false)).to.be.false
        expect(SPECIFIC_VALIDATOR.validate(true)).to.be.false

        // numbers
        expect(SPECIFIC_VALIDATOR.validate(1.5)).to.be.false
        expect(SPECIFIC_VALIDATOR.validate(1)).to.be.false
        expect(SPECIFIC_VALIDATOR.validate(0)).to.be.false

        // arrays
        expect(SPECIFIC_VALIDATOR.validate([])).to.be.false
        expect(SPECIFIC_VALIDATOR.validate([1, 2, 3, 4])).to.be.false

        // objects
        expect(SPECIFIC_VALIDATOR.validate({})).to.be.false
        expect(SPECIFIC_VALIDATOR.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(SPECIFIC_VALIDATOR.validate(null)).to.be.false

        // undefined
        expect(SPECIFIC_VALIDATOR.validate(undefined)).to.be.false
    })
})