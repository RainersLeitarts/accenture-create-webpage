window.addEventListener('load', () => {
    //redirect user to home if logged in
    if (localStorage.getItem('user') !== null) {
        window.location.href = window.location.origin + '/home.html'
        return
    }

    //login form
    const loginForm = document.querySelector("#login-form")
    const loginEmail = loginForm.querySelector('#email')
    const loginPassword = loginForm.querySelector('#password')
    const loginErrorList = loginForm.querySelector('#error-list')

    let emailValidationRegEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        loginErrorList.innerHTML = ''
        const email = loginEmail.value.trim()
        const password = loginPassword.value.trim()
        let hasErrors = false

        if (!emailValidationRegEx.test(email)) {
            const error = document.createElement('li')
            error.innerText = 'Enter a valid email address!'
            loginErrorList.appendChild(error)
            hasErrors = true
        }

        if (hasErrors) return

        const users = JSON.parse(localStorage.getItem('users'))

        const user = users.find(user => user.email === email)

        if (user === undefined) {
            const error = document.createElement('li')
            error.innerText = 'User with this email address not found!'
            loginErrorList.appendChild(error)
            return
        } else if (user.password !== password ) {
            const error = document.createElement('li')
            error.innerText = 'Incorrect password!'
            loginErrorList.appendChild(error)
            return
        } else {
            localStorage.setItem('user', JSON.stringify(user))
        }

        window.location.href = window.location.origin + '/home.html'
    })
})