export const nameValidate = (name: string): boolean => {
    
    if (name.trim() === '' || /[^a-zA-Z\s]/.test(name) || /\d/.test(name)) {
        return false;
    }

    if (name.length >= 2 && name.length <= 50) {
        return true;
    }

    return false;
}