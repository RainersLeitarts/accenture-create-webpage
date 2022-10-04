import myMovies from "./myMovies.js";

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
        //remove movie from array
        const index = myMovies.findIndex(myMovie => myMovie.id === movie.id)
        myMovies.splice(index, 1)
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

        timePickerContent.innerText = `${movie.time}h`
    })

    moreBtn.addEventListener('click', () => {
        if (movie.time === 168) return
        movie.time += 12

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