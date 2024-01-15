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
        const alertFront = document.getElementById('alert-front')
        let error = false;
        

        emailInput.classList.remove('error');
        passwordInput.classList.remove('error');


        if (!validator.isEmail(emailInput.value)) {
            alertFront.classList.add('show');
            emailInput.classList.add('error');
            alertFront.classList.remove('hide');
            error = true
        }

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            alertFront.classList.add('show');
            passwordInput.classList.add('error');
            alertFront.classList.remove('hide');
            error = true
        }

        if (!error) {
            el.submit();
        }else{
            setTimeout(() => {
                alertFront.classList.remove('show');
                alertFront.classList.add('hide');
                emailInput.classList.remove('error');
                passwordInput.classList.remove('error');
            }, 3000);
        }


    }
}
