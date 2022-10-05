//check if user is logged in
const user = JSON.parse(localStorage.getItem('user'))

if (user === null) {
    window.location.href = window.location.origin + '/login.html'
}

const emailResetBtn = document.querySelector('#reset-email-btn')
const emailText = document.querySelector('#email')
emailText.innerText = user.email
const nameText = document.querySelector('#name')
nameText.innerText = user.name
const surnameText = document.querySelector('#surname')
surnameText.innerText = user.surname
let emailValidationRegEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

emailResetBtn.addEventListener('click', () => {
    const email = prompt('Enter your new email address')
    if(!emailValidationRegEx.test(email)){
        alert('Enter a valid email address!')
        return
    }

    //modify users email and store changes in localStoreage
    user.email = email
    const users = JSON.parse(localStorage.getItem('users'))

    //find users index in users array and modify the user's email at that index
    users[users.findIndex(item => item.username === user.username)].email = email

    //store modified logged in user in localStorage
    localStorage.setItem('user', JSON.stringify(users[users.findIndex(item => item.id === user.id)]))

    //store the modified users array
    localStorage.setItem('users', JSON.stringify(users))

    //set new email text
    emailText.innerText = email
})


