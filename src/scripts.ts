import $ from 'jquery';
import { nameValidate } from './utils/nameValidate/nameValidate';
import { emailValidate } from './utils/emailValidate/emailValidate';

// var toast = new Toasty();

$('.js-h1').text('Login');

$('.form-wrapper').html(`
<div class="form-wrapper">
    <form class="form-group js-form">
        <div class="form-child">
            <label for="name" class="input__label" >Name</label>
            <input type="text" class="input__field js-name"></input>
        </div>
        <div class="form-child">
            <label for="email" class="input__label" >Email</label>
            <input type="text" class="input__field js-email"></input>
        </div>
        <div class="form-child">
            <label for="password" class="input__label" >Password</label>
            <input type="password" class="input__field"></input>
        </div>
        <button type="submit" class="button">Login</button>
    </form>
</div>
`);

$('.js-form').on('submit', (e) => {
    e.preventDefault();
    

    const name = $<HTMLInputElement>('.js-name').val() as string;

    const nameIsValid = nameValidate(name);

    if (nameIsValid) {
        // toast.success("You did something good!");
        console.log("Success!")
    } else {
        console.log("name is not valid")
    }

    console.log('name', name);


    const email = $<HTMLInputElement>('.js-email').val() as string;
    const emailIsValid = emailValidate(email)

    console.log('email' , emailIsValid)

});

