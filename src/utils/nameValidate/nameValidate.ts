export const nameValidate = (name:string): boolean => {
    if (name.length >= 2) {
        return true;
    }

    if (name.length > 50) {
        return true;
    }

    return false;
}