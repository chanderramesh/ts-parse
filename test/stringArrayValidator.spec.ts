import { expect } from 'chai'

import { StringArrayValidator } from '../src/stringArrayValidator'

describe('StringArrayValidator', () => {

    it('correctly identifies a string array', () => {
        expect(StringArrayValidator.validate([])).to.be.true
        expect(StringArrayValidator.validate(['example string'])).to.be.true
        expect(StringArrayValidator.validate(['example string', 'another one'])).to.be.true
        expect(StringArrayValidator.validate(['example string', 'another one', 'moar'])).to.be.true
    })

    it('correctly identifies non- string arrays', () => {
        // strings
        expect(StringArrayValidator.validate('hello')).to.be.false
        expect(StringArrayValidator.validate('how are you')).to.be.false

        // booleans
        expect(StringArrayValidator.validate(false)).to.be.false
        expect(StringArrayValidator.validate(true)).to.be.false

        // numbers
        expect(StringArrayValidator.validate(1.5)).to.be.false
        expect(StringArrayValidator.validate(1)).to.be.false
        expect(StringArrayValidator.validate(0)).to.be.false

        // arrays
        expect(StringArrayValidator.validate([1, 2, 3, 4])).to.be.false
        expect(StringArrayValidator.validate(['example string', 'another one', true])).to.be.false
        expect(StringArrayValidator.validate(['example string', 6.0, true])).to.be.false
        expect(StringArrayValidator.validate([null, 6.0, true])).to.be.false

        // objects
        expect(StringArrayValidator.validate({})).to.be.false
        expect(StringArrayValidator.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(StringArrayValidator.validate(null)).to.be.false

        // undefined
        expect(StringArrayValidator.validate(undefined)).to.be.false
    })
})