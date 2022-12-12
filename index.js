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



confirm("Bienvenidos a R&A ¿Quieres ver nuestras ofertas?")