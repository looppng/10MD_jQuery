import { nameValidate } from "./nameValidate"


describe('nameValidate' , () => {

    it ('return false if entered name is below 2 chars' , () => {
        const result = nameValidate('a');

        expect(result).toEqual(false);
    });

    it ('should return true to handle more then 10' , () => {
        const result = nameValidate('dadvddvdxx');

        expect(result).toEqual(true);
    });

    it ('should return true to handle more then 50' , () => {
        const result = nameValidate('dadvddvdxxdadvddvdxxdadvddvdxxdadvddvdxxdadvddvdxx');

        expect(result).toEqual(true);
    });

    it ('should return false to handle numbers in name' , () => {
        const result = nameValidate('name123');

        expect(result).toEqual(false);
    });

    it ('should return false to handle special chars' , () => {
        const result = nameValidate('!@#');

        expect(result).toEqual(false);
    });

});