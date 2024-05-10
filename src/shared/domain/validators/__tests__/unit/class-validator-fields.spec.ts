import { ClassValidatorFields } from '../../class-validator-fields'
import * as libClassValidator from 'class-validator'

class StubClassValidatorFields extends ClassValidatorFields<{
    field: string
}>{}

describe('ClassValidatorFields Unit Tests', ()=> {
    it('should initialize errors and validatedData as null', () => {
        const sut = new StubClassValidatorFields()
        expect(sut.errors).toBeNull()
        expect(sut.validatedData).toBeNull()
    })
    it('should validate with errors', () => {
        const spyValidatedSync = jest.spyOn(libClassValidator, 'validateSync')
        spyValidatedSync.mockReturnValue([
            {
                property: 'field',
                constraints: {
                    isRequired: 'test error'
                },
            }
        ])
        const sut = new StubClassValidatorFields()
        expect(sut.validate(null)).toBeFalsy()
        expect(spyValidatedSync).toHaveBeenCalled()
        expect(sut.validatedData).toBeNull()
        expect(sut.errors).toEqual({field: ['test error']})
    })
    it('should validate without errors', () => {
        const spyValidatedSync = jest.spyOn(libClassValidator, 'validateSync')
        spyValidatedSync.mockReturnValue([])
        const sut = new StubClassValidatorFields()
        expect(sut.validate({ field: 'value'})).toBeTruthy()
        expect(spyValidatedSync).toHaveBeenCalled()
        expect(sut.validatedData).toStrictEqual({ field: 'value'})
        expect(sut.errors).toBeNull()
    })
})