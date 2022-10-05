import initMovies from './movies.js'
initMovies()

//check if user is logged in
if (localStorage.getItem('user') === null) {
    window.location.href = window.location.origin + '/login.html'
}

const movies = JSON.parse(localStorage.getItem('movies'))

const card = document.querySelector('#card-content')
movies.forEach(movie => {
    //create row
    const row = document.createElement('div')
    row.className = 'card-row'

    //create columns
    const name = document.createElement('div')
    name.className = 'card-col'
    name.innerText = movie.name
    const genre = document.createElement('div')
    genre.className = 'card-col'
    genre.innerText = movie.genre
    const price = document.createElement('div')
    price.className = 'card-col'
    price.innerText = `${movie.price}$`
    const stock = document.createElement('div')
    stock.className = 'card-col center'

    //create stock icon
    const icon = document.createElement('img')
    icon.className = 'icon'
    if (movie.stock === 0) {
        icon.src = './icons/cross.png'
    } else {
        icon.src = './icons/check.png'
    }

    //append icon to stock column
    stock.appendChild(icon)

    //create button container and the button
    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'card-col'
    const btn = document.createElement('button')
    btn.className = 'card-btn'
    btn.innerText = 'Rent'

    //add onClick event listener
    btn.addEventListener('click', () => {
        if (movie.stock === 0) return

        movie.stock -= 1
        if (movie.stock === 0) {
            icon.src = './icons/cross.png'
        }

        //update movies in localStorage
        localStorage.setItem('movies', JSON.stringify(movies))

        //TODO: add movie to user movies
        //get current user
        const user = JSON.parse(localStorage.getItem('user'))

        //get all users array
        const users = JSON.parse(localStorage.getItem('users'))

        //get current user index in users array
        const index = users.findIndex(item => item.id === user.id)

        //modify myMovies array of object at index
        users[index].myMovies.push({
            //nice 1 liner 'id generator' copied from stackoverflow for ID
            id: (Math.random() + 1).toString(36).substring(7),
            name: movie.name,
            genre: movie.genre,
            time: 12,
            price: movie.price
        })

        //store current logged in user
        localStorage.setItem('user', JSON.stringify(users[index]))

        //store all users
        localStorage.setItem('users', JSON.stringify(users))
    })

    //append button to container
    buttonContainer.appendChild(btn)

    //append cols to row
    row.appendChild(name)
    row.appendChild(genre)
    row.appendChild(price)
    row.appendChild(stock)
    row.appendChild(buttonContainer)

    //append row to card
    card.appendChild(row)
})

export {
    movies
}