window.addEventListener('load', () => {
    let emailValidationRegEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    //register form
    const registerForm = document.querySelector('#register-form')
    const registerBtn = document.querySelector('#register-btn')
    const errorList = registerForm.querySelector('#error-list')
    //register form fields
    const registerName = registerForm.querySelector('#reg-name')
    const registerSurname = registerForm.querySelector('#reg-surname')
    const registerEmail = registerForm.querySelector('#reg-email')
    const registerEmail2 = registerForm.querySelector('#reg-email2')
    const registerPassword = registerForm.querySelector('#reg-password')
    const registerPassword2 = registerForm.querySelector('#reg-password2')

    registerBtn.addEventListener('click', ()=>{
        registerForm.style.display = 'flex'
        registerBtn.style.display = 'none'
    })

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault()
        errorList.innerHTML = ''
        const name = registerName.value.trim()
        const surname = registerSurname.value.trim()
        const email = registerEmail.value.trim()
        const email2 = registerEmail2.value.trim()
        const password = registerPassword.value.trim()
        const password2 = registerPassword2.value.trim()
        let hasErrors = false
        
        if(name.length < 2) {
            const error = document.createElement('li')
            error.innerText = 'Name should be at least 2 letters long!'
            errorList.appendChild(error)
            hasErrors = true
        }

        if(surname.length < 2) {
            const error = document.createElement('li')
            error.innerText = 'Surname should be at least 2 letters long!'
            errorList.appendChild(error)
            hasErrors = true
        }

        if(!emailValidationRegEx.test(email)){
            const error = document.createElement('li')
            error.innerText = 'Enter a valid email address!'
            errorList.appendChild(error)
            hasErrors = true
        }

        if(email !== email2){
            const error = document.createElement('li')
            error.innerText = 'Email addresses must match!'
            errorList.appendChild(error)
            hasErrors = true
        }

        if(password.length < 8){
            console.log('password');
            const error = document.createElement('li')
            error.innerText = 'Password should contain at least 8 characters!'
            errorList.appendChild(error)
            hasErrors = true
        }

        if(password !== password2){
            const error = document.createElement('li')
            error.innerText = 'Passwords must match!'
            errorList.appendChild(error)
            hasErrors = true
        }

        if(hasErrors) return

        window.location.href = window.location.origin + '/home.html'
    })
})