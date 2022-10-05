const logoutBtn = document.querySelector('#logout')

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user')
})