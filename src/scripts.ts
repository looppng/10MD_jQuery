import $ from 'jquery';
import { nameValidate } from './utils/nameValidate/nameValidate';
import { emailValidate } from './utils/emailValidate/emailValidate';
import { passwordValidate } from './utils/passwordValidate/passwordValidate';

// var toast = new Toasty();

$('.js-h1').text('Login');

$('.form-wrapper').html(`
<div class="form-wrapper">
    <form class="form-group js-form">
        <div class="form-child">
            <label for="name" class="input__label">Name</label>
            <input type="text" class="input__field js-name" id="name" name="name" value=""></input>
        </div>
        <div class="form-child">
            <label for="email" class="input__label"  >Email</label>
            <input type="text" class="input__field js-email" id="email" name="email" value=""></input>
        </div>
        <div class="form-child">
            <label for="password" class="input__label"  >Password</label>
            <input type="password" class="input__field js-password" id="password" name="password" value="" ></input>
        </div>
        <button type="submit" class="button">Login</button>
    </form>
</div>
`);


// $("input").prop('required',true);


// $( "#name" ).on( "focus", function() {
//     console.log("Focus on name");
// });

// const notify = () => {

//     if (nameValidate) {
//         alert( "all good" );
//   }
// }

// $("button").on("click", notify);

$('.js-form').on('submit', (e) => {
    e.preventDefault();
    
    const nameInput = $('.js-name');
    const name = $<HTMLInputElement>('.js-name').val() as string;
    const nameIsValid = nameValidate(name);

    if (nameIsValid) {
        console.log("name OK")
    } else {
        console.log("name is not valid")
        alert("Name validation error: The name must have at least 2 characters and can only contain letters. Max 50 characters.");
        $(nameInput).trigger('focus');
    }


    const emailInput = $('.js-email');
    const email = $<HTMLInputElement>('.js-email').val() as string;
    const emailIsValid = emailValidate(email);

    if (emailIsValid) {
        console.log("email OK")
    } else {
        console.log("email is not valid")
        alert("Email validation error: The email must be in a valid format (e.g. example@example.com).");
        $(emailInput).trigger('focus');
    }

    const passwordInput = $('.js-password');
    const password = $<HTMLInputElement>('.js-password').val() as string;
    const passwordIsValid = passwordValidate(password)

    if (passwordIsValid) {
        console.log("password OK")
    } else {
        console.log("password doesnt meet requirements")
        alert("Password validation error: The password must be at least 8 characters long and must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *).");
        $(passwordInput).trigger('focus');
    }
    
});

