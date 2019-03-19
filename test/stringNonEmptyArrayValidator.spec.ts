import { expect } from 'chai'

import { StringNonEmptyArrayValidator } from '../src/stringNonEmptyArrayValidator'

describe('StringNonEmptyArrayValidator', () => {

    it('correctly identifies a string array', () => {
        expect(StringNonEmptyArrayValidator.validate(['example string'])).to.be.true
        expect(StringNonEmptyArrayValidator.validate(['example string', 'another one'])).to.be.true
        expect(StringNonEmptyArrayValidator.validate(['example string', 'another one', 'moar'])).to.be.true
    })

    it('correctly identifies non- string arrays', () => {
        // strings
        expect(StringNonEmptyArrayValidator.validate('hello')).to.be.false
        expect(StringNonEmptyArrayValidator.validate('how are you')).to.be.false

        // booleans
        expect(StringNonEmptyArrayValidator.validate(false)).to.be.false
        expect(StringNonEmptyArrayValidator.validate(true)).to.be.false

        // numbers
        expect(StringNonEmptyArrayValidator.validate(1.5)).to.be.false
        expect(StringNonEmptyArrayValidator.validate(1)).to.be.false
        expect(StringNonEmptyArrayValidator.validate(0)).to.be.false

        // arrays
        expect(StringNonEmptyArrayValidator.validate([])).to.be.false
        expect(StringNonEmptyArrayValidator.validate([1, 2, 3, 4])).to.be.false
        expect(StringNonEmptyArrayValidator.validate(['example string', 'another one', true])).to.be.false
        expect(StringNonEmptyArrayValidator.validate(['example string', 6.0, true])).to.be.false
        expect(StringNonEmptyArrayValidator.validate([null, 6.0, true])).to.be.false

        // objects
        expect(StringNonEmptyArrayValidator.validate({})).to.be.false
        expect(StringNonEmptyArrayValidator.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(StringNonEmptyArrayValidator.validate(null)).to.be.false

        // undefined
        expect(StringNonEmptyArrayValidator.validate(undefined)).to.be.false
    })
})