const emailResetBtn = document.querySelector('#reset-email-btn')
const emailText = document.querySelector('#email')
let emailValidationRegEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

emailResetBtn.addEventListener('click', () => {
    const email = prompt('Enter your new email address')
    if(!emailValidationRegEx.test(email)){
        alert('Enter a valid email address!')
        return
    }
    emailText.innerText = email

    //will have to change the email in localStorage
})


