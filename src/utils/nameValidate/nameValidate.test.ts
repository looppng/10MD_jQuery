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

});