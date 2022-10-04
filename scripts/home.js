import { myMovies } from './myMovies.js'

const movies = [
    {
        name: 'Fight Club',
        genre: 'Action',
        price: 5.35,
        stock: 2
    },
    {
        name: 'Andor',
        genre: 'Drama',
        price: 3.10,
        stock: 1
    },
    {
        name: 'The Sandman',
        genre: 'Fantasy',
        price: 5.78,
        stock: 0
    },
    {
        name: 'The Boys',
        genre: 'SCI-FI',
        price: 4.23,
        stock: 1
    },
    {
        name: 'Cobra Kai',
        genre: 'Comedy',
        price: 4.43,
        stock: 3
    },
    {
        name: 'Vesper',
        genre: 'Adventure',
        price: 6.44,
        stock: 0
    },
    {
        name: 'The Old Man',
        genre: 'Action',
        price: 5.23,
        stock: 0
    },
    {
        name: 'Nope',
        genre: 'Mystery',
        price: 3.22,
        stock: 1
    }
]

const card = document.querySelector('#card-content')
movies.forEach(movie => {
    //row
    const row = document.createElement('div')
    row.className = 'card-row'

    //columns
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
    
    //stock icon
    const icon = document.createElement('img')
    icon.className = 'icon'
    if(movie.stock === 0){
        icon.src = './icons/cross.png'
    }else{
        icon.src = './icons/check.png'
    }
    
    //append icon to stock column
    stock.appendChild(icon)

    //button
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