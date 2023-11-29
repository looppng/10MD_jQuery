import { emailValidate } from "./emailValidate";

describe('emailValidate', () => {

    it('should return true for a valid email address', () => {
        const result = emailValidate('janis@google.com');

        expect(result).toBe(true);
    });

    it('should return false for an email without @ symbol', () => {
        const result = emailValidate('gmail.com');

        expect(result).toBe(false);
    });

    it('should return false for an email without domain', () => {
        const result = emailValidate('peteris@.com');

        expect(result).toBe(false);
    });

    it('should return false for an email without username', () => {
        const result = emailValidate('@mybusiness.com');

        expect(result).toBe(false);
    });

    it('should return false for an email with multiple @ symbols', () => {
        const result = emailValidate('dadada@dadada@doddo.com');

        expect(result).toBe(false);
    });

});