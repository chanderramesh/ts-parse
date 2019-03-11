// Base validator class that all will extend
export abstract class BaseValidator {
    // Determine if a given input can be deserialized
    abstract validate(input: any): boolean

    // Perform the parsing on a given input
    // This method assumes the validation of an input has already been performed!
    // Calling this method on un-validated input will produce undefined behavior!
    abstract parse(input: string | number | boolean | Object): string | number | boolean | Object

    // Safely checks whether a given input can be deserialized / parsed
    // If so, it calls the parse method
    // Otherwise, it returns null
    deserialize(input: string | number | boolean | Object): string | number | boolean | Object | null {
        if (this.validate(input)) {
            return this.parse(input)
        }
        throw new Error('Invalid input given')
    }
}