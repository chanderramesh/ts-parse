import { expect } from 'chai'

import { StringValidator } from '../src/stringValidator'

describe('StringValidator', () => {

    it('correctly identifies strings', () => {
        expect(StringValidator.validate('example string')).to.be.true
    })

    it('correctly identifies non-strings', () => {
        // booleans
        expect(StringValidator.validate(false)).to.be.false
        expect(StringValidator.validate(true)).to.be.false

        // numbers
        expect(StringValidator.validate(1.5)).to.be.false
        expect(StringValidator.validate(1)).to.be.false
        expect(StringValidator.validate(0)).to.be.false

        // arrays
        expect(StringValidator.validate([])).to.be.false
        expect(StringValidator.validate([1, 2, 3, 4])).to.be.false

        // objects
        expect(StringValidator.validate({})).to.be.false
        expect(StringValidator.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(StringValidator.validate(null)).to.be.false

        // undefined
        expect(StringValidator.validate(undefined)).to.be.false
    })
})