export const emailValidate = (email:string) => {

    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const result: boolean = expression.test(email);

    console.log('e-mail is ' + (result ? 'correct' : 'incorrect'));

}