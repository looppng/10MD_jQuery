import { passwordValidate } from "./passwordValidate";

describe('passwordValidate', () => {

    it ('password should be at least 8 chars long' , () => {
        const result = passwordValidate('C!frqwd')

        expect(result).toBe(false);
    });

    it ('password should have at least one special character' , () => {
        const result = passwordValidate('!frqd123')

        expect(result).toBe(true);
    });

    it ('password should have at least one numberical character' , () => {
        const result = passwordValidate('!frqd123')

        expect(result).toBe(true);
    });

    it ('should accept both lowercase and Uppercase letters' , () => {
        const result = passwordValidate('!frQD123')

        expect(result).toBe(true);
    }); 

    it('password cant only be letters', () => {
        const result = passwordValidate('AbcdEfgh');
    
        expect(result).toBe(false);
    });

});