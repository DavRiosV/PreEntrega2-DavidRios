function cardsHtml ( array ) {

    const contenedor = document.querySelector(".container")
    
    array.map( ( pokemonPlush ) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div class="container-img">
                <img src=${pokemonPlush.img} alt=${pokemonPlush.producto}>
            </div>
            <h2>
                ${pokemonPlush.producto}
            </h2>
            <button> Comprar</button>
        `
        contenedor.appendChild(card)
    })    
}

cardsHtml(pokemonPlush)

function pokemonascendente (pokemonPlush) {

    
    const pokemonascendente = [...pokemonPlush].sort((a, b) => {
        if ( a < b ){
            return -1
        } else if ( a > b){
            return 1
        } else {
            return 0
        }
    })
    
    console.log(pokemonPlush)
    console.log(pokemonascendente)
    
    const pokemonDescendente = [...pokemonPlush].sort((a, b) => {
        if ( a < b ){
            return 1
        } else if ( a > b){
            return -1
        } else {
            return 0
        }
    })
    
    console.log(pokemonDescendente)
    
}
    
    confirm("Bienvenidos a R&A ¿Quieres ver nuestras ofertas?")