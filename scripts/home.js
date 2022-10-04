import myMovies from './myMovies.js'
import movies from './movies.js'

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
    if(movie.stock === 0){
        icon.src = './icons/cross.png'
    }else{
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
        if(movie.stock === 0) return

        movie.stock -= 1
        if(movie.stock === 0){
            icon.src = './icons/cross.png'
        }

        myMovies.push(movie)
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