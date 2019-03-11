import { BaseValidator } from './baseValidator'

// A generic valdiator that, given a map of key and validators,
// will validate a given object in the following ways:
// 1. the keys of the given object are all present in the validator map
// 2. each of the validator map's keys are in the object
// 3. all keys of the given object pass the validator stored in the map
// This also supports optional keys
export class ObjectValidator extends BaseValidator {
    private readonly validationMap: { [key: string]: BaseValidator }
    private readonly optionalMap: { [key: string]: BaseValidator }
    private readonly requiredKeys: string[]
    private readonly optionalKeys: string[]

    constructor(
        validatonMap: { [key: string]: BaseValidator },
        optionalMap: { [key: string]: BaseValidator } = {},
    ) {
        super()
        this.validationMap = validatonMap
        this.optionalMap = optionalMap
        this.requiredKeys = Object.keys(this.validationMap)
        this.optionalKeys = Object.keys(this.optionalMap)
    }

    validate(input: any): boolean {
        if (input === null || input === undefined) {
            return false
        }

        if (typeof input !== 'object') {
            return false
        }

        const inputKeys = Object.keys(input)
        const validKeys = this.requiredKeys.concat(this.optionalKeys)
        if (inputKeys.length > validKeys.length) {
            return false
        }

        // All required keys are present in the object and pass validation
        const inputKeySet = new Set(inputKeys)
        const requiredCheck = this.requiredKeys.every(key => inputKeySet.has(key) && this.validationMap[key].validate(input[key]))
        if (!requiredCheck) {
            return false
        }

        // All optional keys that are present pass validation (not every optional key must be present, however)
        const optionalCheck = this.optionalKeys.every(key => inputKeySet.has(key) ? this.optionalMap[key].validate(input[key]) : true)
        if (!optionalCheck) {
            return false
        }

        // All keys in the input object are either in optional or required maps - no unaccounted for key value pairs
        const validKeySet = new Set(validKeys)
        const allKeysAccountedFor = inputKeys.every(key => validKeySet.has(key))
        if (!allKeysAccountedFor) {
            return false
        }

        return true
    }

    parse(input: Object): Object {
        const inputKeys = Object.keys(input)
        const requiredKeySet = new Set(this.requiredKeys)
        const newObject = {}
        for (const k of inputKeys) {
            if (requiredKeySet.has(k)) {
                newObject[k] = this.validationMap[k].parse(input[k])
            } else {
                newObject[k] = this.optionalMap[k].parse(input[k])
            }
        }
        return newObject
    }
}