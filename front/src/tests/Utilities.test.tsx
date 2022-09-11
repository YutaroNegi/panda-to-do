import { isEmail, hasNullProp } from '../components/Utilities'

describe('Utilities Modules', function () {
    it('check if the email is valid', function () {
        expect(isEmail('test@email.com')).toBe(true)
        expect(isEmail('test.com')).toBe(false)
    });

    it('Check if the object have a null property', function () {
        const correctObj = {
            firstName: 'test',
            lastName: 'tester',
            email: 'test@test.com'
        }

        const errorObj = {
            firstName: 'test',
            lastName: 'tester',
            email: null
        }

        expect(hasNullProp(correctObj)).toBe(false)
        expect(hasNullProp(errorObj)).toBe(true)
    });
 });