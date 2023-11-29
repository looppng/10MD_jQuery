export const passwordValidate = (password: string): boolean => {
    const paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/;

    if (password.match(paswd)) {
        return true;
    } else {
        return false; 
    }
};