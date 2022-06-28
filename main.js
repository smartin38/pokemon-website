const pokemon = [
    {name: 'Bulbasaur', id: '001'},
    {name: 'Charmander', id: '004'},
    {name: 'Squirtle', id: '007'},
]

const containerDiv = document.querySelector('#container')

// DOM = Document Object Model
// loop over every ID 
// create an HTML element
// set the HTML element values
// append HTML element to the DOM

pokemon.map((element, index) => {
    console.log(element)
    let imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`
    let div = document.createElement('div') // adding a div to house the img element
    let h3 = document.createElement('h1')
    h3.innerText = element.name
    div.setAttribute('class', 'pokemon-card') // setting the class of the div
    let img = document.createElement('img')  // vreating the img element itself
    img.src = imgUrl
    div.append(img, h3)
    containerDiv.append(div) // put the image in the div, then put the div in the body
})