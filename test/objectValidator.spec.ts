import { expect } from 'chai'

import { BooleanValidator } from '../src/booleanValidator'
import { FloatValidator } from '../src/floatValidator'
import { IntValidator } from '../src/intValidator'
import { ObjectValidator } from '../src/objectValidator'
import { StringArrayValidator } from '../src/stringArrayValidator'

const OBJECT_VALIDATOR = new ObjectValidator(
    {
        code: IntValidator,
        lat: FloatValidator,
        lon: FloatValidator,
        data: StringArrayValidator,
    }, {
        emergency: BooleanValidator,
    })

describe('ObjectValidator', () => {

    it('correctly identifies our valid defined model', () => {
        expect(OBJECT_VALIDATOR.validate({
            code: 200,
            lat: 0.0,
            lon: -58.23,
            data: [],
        })).to.be.true
        expect(OBJECT_VALIDATOR.validate({
            code: 200,
            lat: 0.0,
            lon: -58.23,
            data: ['hi', 'how are you'],
        })).to.be.true
        expect(OBJECT_VALIDATOR.validate({
            code: 200,
            lat: 0.0,
            lon: -58.23,
            data: ['hi', 'how are you'],
            emergency: true,
        })).to.be.true
        expect(OBJECT_VALIDATOR.validate({
            code: 200,
            lat: 0.0,
            lon: -58.23,
            data: ['hi', 'how are you'],
            emergency: false,
        })).to.be.true
    })

    it('correctly identifies everything that is not our valid defined model', () => {
        // strings
        expect(OBJECT_VALIDATOR.validate('bro')).to.be.false
        expect(OBJECT_VALIDATOR.validate('dude')).to.be.false

        // booleans
        expect(OBJECT_VALIDATOR.validate(false)).to.be.false
        expect(OBJECT_VALIDATOR.validate(true)).to.be.false

        // invalid numbers
        expect(OBJECT_VALIDATOR.validate(3.5)).to.be.false
        expect(OBJECT_VALIDATOR.validate(3.01)).to.be.false
        expect(OBJECT_VALIDATOR.validate(5)).to.be.false

        // arrays
        expect(OBJECT_VALIDATOR.validate([])).to.be.false
        expect(OBJECT_VALIDATOR.validate([1, 2, 3, 4])).to.be.false

        // objects
        expect(OBJECT_VALIDATOR.validate({})).to.be.false
        expect(OBJECT_VALIDATOR.validate({ code: 'hi', more_code: 'dude' })).to.be.false

        // null
        expect(OBJECT_VALIDATOR.validate(null)).to.be.false

        // undefined
        expect(OBJECT_VALIDATOR.validate(undefined)).to.be.false

        // all other objects
        // incorrect type
        expect(OBJECT_VALIDATOR.validate({
            code: 200,
            lat: 5.0,
            lon: -5.0,
            data: {},
        })).to.be.false
        // missing required fields
        expect(OBJECT_VALIDATOR.validate({
            code: 100,
            data: ['dude', 'hi'],
        })).to.be.false
        // incorrect type of optional field
        expect(OBJECT_VALIDATOR.validate({
            code: 200,
            lat: 0.0,
            lon: -58.23,
            data: ['hi', 'how are you'],
            emergency: 5,
        })).to.be.false
    })
})