import { expect } from 'chai'

import { NoOpValidator } from '../src/noOpValidator'

describe('NoOpValidator', () => {

    it('allows any input', () => {
        // strings
        expect(NoOpValidator.validate('example string')).to.be.true

        // booleans
        expect(NoOpValidator.validate(true)).to.be.true
        expect(NoOpValidator.validate(true)).to.be.true

        // numbers
        expect(NoOpValidator.validate(1.5)).to.be.true
        expect(NoOpValidator.validate(1)).to.be.true
        expect(NoOpValidator.validate(0)).to.be.true

        // arrays
        expect(NoOpValidator.validate([])).to.be.true
        expect(NoOpValidator.validate([1, 2, 3, 4])).to.be.true

        // objects
        expect(NoOpValidator.validate({})).to.be.true
        expect(NoOpValidator.validate({ code: 'hi', more_code: 'dude' })).to.be.true

        // null
        expect(NoOpValidator.validate(null)).to.be.true

        // undefined
        expect(NoOpValidator.validate(undefined)).to.be.true
    })
})