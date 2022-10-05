//check if user is logged in
const loggedInUser = JSON.parse(localStorage.getItem('user'))

if (loggedInUser === null) {
    window.location.href = window.location.origin + '/login.html'
}

const myMovies = loggedInUser.myMovies

const card = document.querySelector('#card-content')

myMovies.forEach(movie => {
    //create row
    const row = document.createElement('div')
    row.className = 'card-row'
    row.id = `id${movie.id}`

    //create columns
    const name = document.createElement('div')
    name.className = 'card-col'
    name.innerText = movie.name
    const genre = document.createElement('div')
    genre.className = 'card-col'
    genre.innerText = movie.genre
    const time = document.createElement('div')
    time.className = 'card-col'
    const price = document.createElement('div')
    price.className = 'card-col'
    price.innerText = `${movie.price}$`

    //create button container and the button
    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'card-col'
    //remove btn
    const btn = document.createElement('button')
    btn.className = 'card-btn remove-btn'
    btn.innerText = 'Remove'

    //implement remove movie functionality onClick
    btn.addEventListener('click', () => {
        //remove movie from the user's myMovie array
        //get current user
        const user = JSON.parse(localStorage.getItem('user'))

        //get all users array
        const users = JSON.parse(localStorage.getItem('users'))

        //get current user index in users array
        const index = users.findIndex(item => item.id === user.id)

        //modify user's from users array at index myMovies array
        users[index].myMovies = users[index].myMovies.filter(myMovie => myMovie.id !== movie.id)

        //store current logged in user
        localStorage.setItem('user', JSON.stringify(users[index]))

        //store all users
        localStorage.setItem('users', JSON.stringify(users))

        //add removed movie back to the catalog
        //get movies from localStorage
        const movies = JSON.parse(localStorage.getItem('movies'))

        //increment movie's at movies[index] stock value by 1
        movies[movies.findIndex(item => item.name === movie.name)].stock += 1

        //store the updated movies array in localStorage
        localStorage.setItem('movies', JSON.stringify(movies))

        //remove movie from DOM
        card.removeChild(row)
    })

    //create time picker container
    const timePicker = document.createElement('div')
    timePicker.className = 'time-picker'

    //create time picker components
    //less btn
    const lessBtn = document.createElement('button')
    lessBtn.className = 'picker-btn'
    lessBtn.innerText = '<'
    //time display
    const timePickerContent = document.createElement('div')
    timePickerContent.className = 'picker-content'
    timePickerContent.innerText = `${movie.time}h`
    //more btn
    const moreBtn = document.createElement('button')
    moreBtn.className = 'picker-btn'
    moreBtn.innerText = '>'

    //add onClick events for the buttons
    lessBtn.addEventListener('click', () => {
        if (movie.time === 12) return
        movie.time -= 12

        //get current user
        const user = JSON.parse(localStorage.getItem('user'))

        //get all users array
        const users = JSON.parse(localStorage.getItem('users'))

        //get current user index in users array
        const index = users.findIndex(item => item.id === user.id)

        //modify user's from users array at index myMovies array
        //find the index of the movie to modify
        const myMovies = users[index].myMovies

        //decrement the time of the specified movie
        const selectedMovie = myMovies[myMovies.findIndex(item => item.id === movie.id)]

        //find the price of selected movie per 12 hours in all movies object from localStorage
        const allMovies = JSON.parse(localStorage.getItem('movies'))
        const pricePer12H = allMovies.find(item => item.name === movie.name).price

        //decrement selected movie time
        selectedMovie.time -= 12

        //Math.round() removes extra numbers after .
        selectedMovie.price = Math.round((selectedMovie.price - pricePer12H) * 100) / 100 
        
        //change price text
        price.innerText = `${selectedMovie.price}$`

        //store current logged in user
        localStorage.setItem('user', JSON.stringify(users[index]))

        //store all users
        localStorage.setItem('users', JSON.stringify(users))

        timePickerContent.innerText = `${movie.time}h`
    })

    moreBtn.addEventListener('click', () => {
        if (movie.time === 168) return
        movie.time += 12
        //get current user
        const user = JSON.parse(localStorage.getItem('user'))

        //get all users array
        const users = JSON.parse(localStorage.getItem('users'))

        //get current user index in users array
        const index = users.findIndex(item => item.id === user.id)

        //modify user's from users array at index myMovies array
        //find the index of the movie to modify
        const myMovies = users[index].myMovies

        //decrement the time of the specified movie
        const selectedMovie = myMovies[myMovies.findIndex(item => item.id === movie.id)]

        //find the price of selected movie per 12 hours in all movies object from localStorage
        const allMovies = JSON.parse(localStorage.getItem('movies'))
        const pricePer12H = allMovies.find(item => item.name === movie.name).price

        //increment selected movie time
        selectedMovie.time += 12

        //Math.round() removes extra numbers after .
        selectedMovie.price = Math.round((selectedMovie.price + pricePer12H) * 100) / 100

        //change price text
        price.innerText = `${selectedMovie.price}$`

        //store current logged in user
        localStorage.setItem('user', JSON.stringify(users[index]))

        //store all users
        localStorage.setItem('users', JSON.stringify(users))

        timePickerContent.innerText = `${movie.time}h`
    })

    //append time picker elements to the time picker
    timePicker.appendChild(lessBtn)
    timePicker.appendChild(timePickerContent)
    timePicker.appendChild(moreBtn)

    //append time picker to the time component div
    time.appendChild(timePicker)


    //append button to container
    buttonContainer.appendChild(btn)

    row.appendChild(name)
    row.appendChild(genre)
    row.appendChild(time)
    row.appendChild(price)
    row.appendChild(buttonContainer)

    //append row to card
    card.appendChild(row)
})