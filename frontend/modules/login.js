import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)

    }

    init() {
        this.events()
    }

    events() {
        if (!this.form) return;
        this.form = addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }
    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')
        const invalidEmail = document.getElementById('invalid-email')
        const invalidPassword = document.getElementById('invalid-password')
        const alertFront = document.getElementById('alert-front')

        let error = false;


        emailInput.classList.remove('error');
        passwordInput.classList.remove('error');


        if (!validator.isEmail(emailInput.value)) {
            error = true
            emailInput.classList.add('error');

            alertFront.classList.remove('hide');
            alertFront.classList.add('show');

            invalidEmail.classList.remove('hide');
            invalidEmail.classList.add('show');

        }

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            error = true
            passwordInput.classList.add('error');

            alertFront.classList.remove('hide');
            alertFront.classList.add('show');

            invalidPassword.classList.remove('hide');
            invalidPassword.classList.add('show');

        }
        
        if (!error) {
            el.submit();
        } else {
            setTimeout(() => {
                passwordInput.classList.remove('error');
                emailInput.classList.remove('error');

                alertFront.classList.remove('show');
                alertFront.classList.add('hide');

                invalidEmail.classList.remove('show');
                invalidEmail.classList.add('hide');

                invalidPassword.classList.remove('show');
                invalidPassword.classList.add('hide');
            }, 3000);
        }
    }
}